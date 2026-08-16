import { firebaseConfig, hasFirebaseConfig } from "./firebase-config.js";

const FIREBASE_VERSION = "12.16.0";
const CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.readonly";
const DATA_PREFIX = "msj7-";
const PENDING_KEY = "msj7-sync-pending";
const BACKUP_PREFIX = "msj7-migration-backup::";
const MAX_VALUE_SIZE = 700_000;

const authButton = document.querySelector("#authBtn");
const logoutButton = document.querySelector("#logoutBtn");
const calendarButton = document.querySelector("#calendarSyncBtn");
const syncStatus = document.querySelector("#syncStatus");
const profileName = document.querySelector("#profileName");

let auth;
let db;
let firebase;
let currentUser = null;
let calendarAccessToken = null;
let stopRemoteListener = null;
let activeBootstrap = null;
let applyingRemote = false;
const writeQueues = new Map();

const notify = message => {
  if (typeof window.toast === "function") window.toast(message);
  else console.info(message);
};

const setStatus = (message, tone = "") => {
  if (!syncStatus) return;
  syncStatus.textContent = message;
  syncStatus.classList.toggle("sync-status-pending", tone === "pending");
  syncStatus.classList.toggle("sync-status-error", tone === "error");
};

function setButtonBusy(button, busy, busyLabel) {
  if (!button) return;
  if (!button.dataset.defaultLabel) button.dataset.defaultLabel = button.textContent.trim();
  button.disabled = busy;
  button.setAttribute("aria-busy", String(busy));
  button.textContent = busy ? busyLabel : button.dataset.defaultLabel;
}

function isJournalKey(key) {
  return typeof key === "string" && key.startsWith(DATA_PREFIX) &&
    key !== PENDING_KEY &&
    !key.startsWith("msj7-prompt::") &&
    !key.startsWith(BACKUP_PREFIX);
}

function isSyncable(key, value) {
  return isJournalKey(key) && typeof value === "string" && value.length <= MAX_VALUE_SIZE;
}

function journalEntries() {
  const entries = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    const value = key ? localStorage.getItem(key) : null;
    if (key && value !== null && isSyncable(key, value)) entries.push([key, value]);
  }
  return entries;
}

function readPending() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PENDING_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function writePending(keys) {
  localStorage.setItem(PENDING_KEY, JSON.stringify([...keys]));
}

function markPending(key) {
  const keys = readPending();
  keys.add(key);
  writePending(keys);
}

function clearPending(key) {
  const keys = readPending();
  keys.delete(key);
  writePending(keys);
}

function documentId(key) {
  const bytes = new TextEncoder().encode(key);
  let binary = "";
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function renderSignedOut() {
  currentUser = null;
  calendarAccessToken = null;
  if (authButton) {
    authButton.hidden = false;
    setButtonBusy(authButton, false, "Entrando…");
  }
  if (logoutButton) logoutButton.hidden = true;
  if (profileName) profileName.textContent = "Julia";
  setStatus(hasFirebaseConfig ? "Dados somente neste dispositivo" : "Firebase ainda não configurado");
}

function renderSignedIn(user) {
  if (authButton) authButton.hidden = true;
  if (logoutButton) logoutButton.hidden = false;
  if (profileName) profileName.textContent = user.displayName || "Julia";
  setStatus("Conectando à nuvem…", "pending");
}

function applyRemoteValue(key, value) {
  applyingRemote = true;
  try {
    localStorage.setItem(key, value);
  } finally {
    applyingRemote = false;
  }
}

async function loadFirebase() {
  if (!hasFirebaseConfig) {
    renderSignedOut();
    if (authButton) authButton.title = "Preencha js/firebase-config.js para ativar o login";
    if (calendarButton) calendarButton.title = "Configure o Firebase e ative a Google Calendar API";
    return false;
  }

  const [appModule, authModule, firestoreModule] = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js`),
    import(`https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`)
  ]);

  const app = appModule.initializeApp(firebaseConfig);
  auth = authModule.getAuth(app);
  db = firestoreModule.getFirestore(app);
  firebase = { authModule, firestoreModule };

  authModule.onAuthStateChanged(auth, user => {
    if (stopRemoteListener) {
      stopRemoteListener();
      stopRemoteListener = null;
    }
    if (!user) {
      renderSignedOut();
      return;
    }
    currentUser = user;
    renderSignedIn(user);
    activeBootstrap = bootstrapUser(user).catch(error => {
      console.error(error);
      setStatus("Falha ao sincronizar", "error");
      notify("Não foi possível sincronizar com o Firestore");
    });
  });
  return true;
}

function basicProvider() {
  const provider = new firebase.authModule.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return provider;
}

function calendarProvider() {
  const provider = basicProvider();
  provider.addScope(CALENDAR_SCOPE);
  return provider;
}

async function signIn() {
  if (!auth) return notify("Preencha a configuração do Firebase primeiro");
  setButtonBusy(authButton, true, "Entrando…");
  try {
    const result = await firebase.authModule.signInWithPopup(auth, basicProvider());
    currentUser = result.user;
    notify("Login realizado");
  } catch (error) {
    console.error(error);
    const cancelled = ["auth/popup-closed-by-user", "auth/cancelled-popup-request"].includes(error.code);
    notify(cancelled ? "Login cancelado" : error.code === "auth/popup-blocked" ? "O navegador bloqueou a janela de login" : "Não foi possível entrar com o Google");
  } finally {
    if (!currentUser) setButtonBusy(authButton, false, "Entrando…");
  }
}

async function signOutUser() {
  if (!auth) return;
  setButtonBusy(logoutButton, true, "Saindo…");
  try {
    await firebase.authModule.signOut(auth);
    notify("Você saiu da conta. Os dados locais foram mantidos.");
  } catch (error) {
    console.error(error);
    notify("Não foi possível sair agora");
  } finally {
    setButtonBusy(logoutButton, false, "Saindo…");
  }
}

async function backupEntry(user, stamp, key, value, reason) {
  const { doc, setDoc, serverTimestamp } = firebase.firestoreModule;
  const reference = doc(db, "users", user.uid, "backups", stamp, "entries", documentId(key));
  await setDoc(reference, { key, value, reason, createdAt: serverTimestamp() });
}

async function writeRemote(user, key, value) {
  if (!isSyncable(key, value)) return;
  const { doc, setDoc, serverTimestamp } = firebase.firestoreModule;
  const reference = doc(db, "users", user.uid, "data", documentId(key));
  await setDoc(reference, {
    key,
    value,
    updatedAt: serverTimestamp()
  }, { merge: true });
  if (localStorage.getItem(key) === value) clearPending(key);
}

function queueRemoteWrite(user, key, value) {
  const queueKey = `${user.uid}::${key}`;
  const previous = writeQueues.get(queueKey) || Promise.resolve();
  const next = previous.catch(() => undefined).then(() => {
    if (currentUser?.uid !== user.uid) return;
    return writeRemote(user, key, value);
  });
  writeQueues.set(queueKey, next);
  const cleanup = () => {
    if (writeQueues.get(queueKey) === next) writeQueues.delete(queueKey);
  };
  next.then(cleanup, cleanup);
  return next;
}

async function bootstrapUser(user) {
  const { collection, doc, getDoc, getDocs, onSnapshot, serverTimestamp, setDoc } = firebase.firestoreModule;
  const dataCollection = collection(db, "users", user.uid, "data");
  const migrationReference = doc(db, "users", user.uid, "meta", "local-storage-v1");
  const [remoteSnapshot, migrationSnapshot] = await Promise.all([
    getDocs(dataCollection),
    getDoc(migrationReference)
  ]);
  const remote = new Map();
  remoteSnapshot.forEach(item => {
    const data = item.data();
    if (typeof data.key === "string" && typeof data.value === "string" && isJournalKey(data.key)) remote.set(data.key, data.value);
  });

  const local = new Map(journalEntries());
  const pending = readPending();
  const stamp = new Date().toISOString().replaceAll(":", "-").replaceAll(".", "-");

  if (!migrationSnapshot.exists() && local.size) {
    const snapshot = JSON.stringify(Object.fromEntries(local));
    try {
      localStorage.setItem(`${BACKUP_PREFIX}${user.uid}::${stamp}`, snapshot);
    } catch {
      console.warn("A cópia local completa não coube no localStorage; os itens serão copiados individualmente para o Firestore.");
    }
  }

  for (const [key, localValue] of local) {
    const remoteValue = remote.get(key);
    if (remoteValue === undefined) {
      await writeRemote(user, key, localValue);
      remote.set(key, localValue);
      continue;
    }
    if (remoteValue === localValue) {
      clearPending(key);
      continue;
    }

    if (!migrationSnapshot.exists()) {
      await backupEntry(user, stamp, key, localValue, "local-before-first-migration");
      applyRemoteValue(key, remoteValue);
    } else if (pending.has(key)) {
      await backupEntry(user, stamp, key, remoteValue, "remote-before-offline-update");
      await writeRemote(user, key, localValue);
      remote.set(key, localValue);
    } else {
      applyRemoteValue(key, remoteValue);
    }
  }

  for (const [key, remoteValue] of remote) {
    if (!local.has(key)) {
      applyRemoteValue(key, remoteValue);
    }
  }

  await setDoc(migrationReference, {
    completedAt: serverTimestamp(),
    strategy: "remote-wins-with-local-backup"
  }, { merge: true });

  window.dispatchEvent(new CustomEvent("journal:cloud-updated"));
  setStatus("Sincronizado com a nuvem");

  stopRemoteListener = onSnapshot(dataCollection, snapshot => {
    if (applyingRemote) return;
    let changed = false;
    snapshot.docChanges().forEach(change => {
      if (change.type === "removed") return;
      const data = change.doc.data();
      if (typeof data.key !== "string" || typeof data.value !== "string") return;
      if (!isJournalKey(data.key)) return;
      if (localStorage.getItem(data.key) === data.value) return;
      if (readPending().has(data.key)) return;
      applyRemoteValue(data.key, data.value);
      changed = true;
    });
    if (changed) window.dispatchEvent(new CustomEvent("journal:cloud-updated"));
  }, error => {
    console.error(error);
    setStatus("Sincronização interrompida", "error");
  });
}

window.addEventListener("journal:data-change", event => {
  const { key, value } = event.detail || {};
  if (applyingRemote || !isJournalKey(key)) return;
  if (!isSyncable(key, value)) {
    setStatus("Item grande demais para a nuvem", "error");
    notify("Este item ficou salvo neste dispositivo, mas ultrapassa o limite da sincronização");
    return;
  }
  markPending(key);
  if (!currentUser || !db) return;
  const user = currentUser;
  Promise.resolve(activeBootstrap).then(() => queueRemoteWrite(user, key, value))
    .then(() => setStatus("Sincronizado com a nuvem"))
    .catch(error => {
      console.error(error);
      setStatus("Alterações aguardando sincronização", "pending");
    });
});

async function fetchGoogleJson(url, token) {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error(`Google Calendar API: ${response.status}`);
  return response.json();
}

async function fetchAllPages(url, token) {
  const items = [];
  let pageToken = "";
  do {
    const separator = url.includes("?") ? "&" : "?";
    const data = await fetchGoogleJson(`${url}${pageToken ? `${separator}pageToken=${encodeURIComponent(pageToken)}` : ""}`, token);
    items.push(...(data.items || []));
    pageToken = data.nextPageToken || "";
  } while (pageToken);
  return items;
}

function normalizedName(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

function calendarEventDate(event) {
  if (event.start?.date) return event.start.date;
  if (!event.start?.dateTime) return null;
  const date = new Date(event.start.dateTime);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

async function requestCalendarToken() {
  const result = await firebase.authModule.signInWithPopup(auth, calendarProvider());
  const credential = firebase.authModule.GoogleAuthProvider.credentialFromResult(result);
  calendarAccessToken = credential?.accessToken || null;
  if (!calendarAccessToken) throw new Error("O Google não retornou um token para a agenda.");
  return calendarAccessToken;
}

async function syncGoogleCalendar(interactive = true) {
  if (!auth) return notify("Configure o Firebase antes de conectar a agenda");
  setButtonBusy(calendarButton, true, "Sincronizando…");
  try {
    const token = calendarAccessToken || (interactive ? await requestCalendarToken() : null);
    if (!token) return;
    if (activeBootstrap) await activeBootstrap;
    const calendars = await fetchAllPages("https://www.googleapis.com/calendar/v3/users/me/calendarList?maxResults=250", token);
    const selected = calendars.filter(calendar => ["provas", "trabalhos"].includes(normalizedName(calendar.summaryOverride || calendar.summary)));
    if (!selected.length) {
      notify("Não encontrei agendas chamadas “Provas” ou “Trabalhos”");
      return;
    }

    const start = new Date();
    start.setFullYear(start.getFullYear() - 1);
    const end = new Date();
    end.setFullYear(end.getFullYear() + 3);
    const batches = await Promise.all(selected.map(async calendar => {
      const params = new URLSearchParams({
        singleEvents: "true",
        orderBy: "startTime",
        showDeleted: "false",
        maxResults: "2500",
        timeMin: start.toISOString(),
        timeMax: end.toISOString()
      });
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendar.id)}/events?${params}`;
      const events = await fetchAllPages(url, token);
      return events.flatMap(event => {
        const date = calendarEventDate(event);
        if (!date) return [];
        const calendarName = calendar.summaryOverride || calendar.summary;
        return [{
          id: `google:${calendar.id}:${event.id}`,
          type: normalizedName(calendarName) === "provas" ? "Prova" : "Trabalho",
          date,
          title: event.summary || "(Sem título)",
          subject: "",
          checks: [],
          source: "google-calendar",
          readOnly: true,
          calendarName,
          htmlLink: event.htmlLink || ""
        }];
      });
    }));
    const imported = batches.flat();

    window.importGoogleCalendarEvents?.(imported);
    notify(`${imported.length} compromisso(s) importado(s) do Google Agenda`);
  } catch (error) {
    console.error(error);
    notify(error.code === "auth/popup-closed-by-user" ? "Conexão com a agenda cancelada" : "Não foi possível ler o Google Agenda");
  } finally {
    setButtonBusy(calendarButton, false, "Sincronizando…");
  }
}

authButton?.addEventListener("click", signIn);
logoutButton?.addEventListener("click", signOutUser);
calendarButton?.addEventListener("click", () => syncGoogleCalendar(true));

renderSignedOut();
loadFirebase().catch(error => {
  console.error(error);
  renderSignedOut();
  setStatus("Firebase indisponível");
});

