import { firebaseConfig, hasFirebaseConfig } from "./firebase-config.js";

const FIREBASE_VERSION = "12.16.0";
const CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.readonly";
const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.readonly";
const DRIVE_TOKEN_KEY = "julianotes-drive-token";
const DATA_PREFIX = "msj7-";
const PENDING_KEY = "msj7-sync-pending";
const BACKUP_PREFIX = "msj7-migration-backup::";
const MAX_VALUE_SIZE = 700_000;

const authButton = document.querySelector("#authBtn");
const logoutButton = document.querySelector("#logoutBtn");
const calendarButton = document.querySelector("#calendarSyncBtn");
const driveButton = document.querySelector("#driveSyncBtn");
const syncStatus = document.querySelector("#syncStatus");
const profileName = document.querySelector("#profileName");

let auth;
let db;
let firebase;
let currentUser = null;
let calendarAccessToken = null;
let driveAccessToken = null;
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
  driveAccessToken = null;
  try { sessionStorage.removeItem(DRIVE_TOKEN_KEY); } catch {}
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
    if (error.code === "auth/popup-blocked" || error.code === "auth/operation-not-supported-in-this-environment") {
      try {
        await firebase.authModule.signInWithRedirect(auth, basicProvider());
        return;
      } catch (redirectError) {
        console.error(redirectError);
      }
    }
    const reasons = {
      "auth/unauthorized-domain": `Este endereço (${location.hostname}) não está autorizado no Firebase. Adicione-o em Authentication → Configurações → Domínios autorizados.`,
      "auth/operation-not-allowed": "O login com Google está desativado no Firebase (Authentication → Método de login).",
      "auth/network-request-failed": "Sem conexão com o Google. Verifique a internet ou um bloqueador de anúncios.",
      "auth/popup-blocked": "O navegador bloqueou a janela de login. Permita pop-ups para este site."
    };
    const message = cancelled ? "Login cancelado" : reasons[error.code] || `Não foi possível entrar com o Google (${error.code || error.message})`;
    notify(message);
    if (!cancelled) setStatus(message, "error");
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

function storedDriveToken() {
  if (driveAccessToken) return driveAccessToken;
  try {
    const saved = JSON.parse(sessionStorage.getItem(DRIVE_TOKEN_KEY) || "null");
    if (saved?.token && saved.expires > Date.now()) driveAccessToken = saved.token;
  } catch {}
  return driveAccessToken;
}

async function requestDriveToken() {
  const provider = basicProvider();
  provider.addScope(DRIVE_SCOPE);
  if (currentUser?.email) provider.setCustomParameters({ login_hint: currentUser.email });
  const result = await firebase.authModule.signInWithPopup(auth, provider);
  const credential = firebase.authModule.GoogleAuthProvider.credentialFromResult(result);
  driveAccessToken = credential?.accessToken || null;
  if (!driveAccessToken) throw new Error("O Google não retornou um token para o Drive.");
  try {
    sessionStorage.setItem(DRIVE_TOKEN_KEY, JSON.stringify({ token: driveAccessToken, expires: Date.now() + 50 * 60 * 1000 }));
  } catch {}
  return driveAccessToken;
}

window.journalApiKey = firebaseConfig.apiKey;
window.journalDriveToken = async (interactive = false) => {
  const saved = storedDriveToken();
  if (saved || !interactive) return saved;
  if (!auth) {
    notify("O login do Google ainda não carregou. Tente de novo em instantes.");
    return null;
  }
  try {
    return await requestDriveToken();
  } catch (error) {
    console.error(error);
    notify(error.code === "auth/unauthorized-domain" ? `Autorize ${location.hostname} no Firebase (Authentication → Configurações → Domínios autorizados).` : "Não foi possível conectar o Drive");
    return null;
  }
};

async function listFolder(folderId, token) {
  const files = [];
  let pageToken = "";
  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false`,
      fields: "nextPageToken,files(id,name,mimeType,modifiedTime)",
      pageSize: "200",
      supportsAllDrives: "true",
      includeItemsFromAllDrives: "true"
    });
    if (pageToken) params.set("pageToken", pageToken);
    const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!response.ok) {
      const error = new Error(`Google Drive API: ${response.status}`);
      error.status = response.status;
      throw error;
    }
    const data = await response.json();
    (data.files || []).forEach(file => files.push({
      id: file.id,
      name: file.name,
      mime: file.mimeType,
      modified: file.modifiedTime
    }));
    pageToken = data.nextPageToken || "";
  } while (pageToken);
  return files;
}

async function syncDriveFolders() {
  if (!auth) return notify("Configure o Firebase antes de conectar o Drive");
  setButtonBusy(driveButton, true, "Buscando no Drive…");
  try {
    let token = storedDriveToken() || await requestDriveToken();
    const folders = window.journalDriveFolders?.() || [];
    const run = async currentToken => Object.fromEntries(await Promise.all(
      folders.map(async id => [id, await listFolder(id, currentToken)])
    ));
    let result;
    try {
      result = await run(token);
    } catch (error) {
      if (error.status !== 401) throw error;
      token = await requestDriveToken();
      result = await run(token);
    }
    window.importDriveCatalog?.(result);
    const total = Object.values(result).reduce((sum, list) => sum + list.length, 0);
    notify(`Drive atualizado · ${total} arquivo(s) em ${folders.length} pasta(s)`);
  } catch (error) {
    console.error(error);
    if (["auth/popup-closed-by-user", "auth/cancelled-popup-request"].includes(error.code)) notify("Conexão com o Drive cancelada");
    else if (error.status === 403) notify("Ative a Google Drive API no projeto do Firebase/Google Cloud");
    else notify("Não foi possível ler as pastas do Drive");
  } finally {
    setButtonBusy(driveButton, false, "Buscando no Drive…");
  }
}

authButton?.addEventListener("click", signIn);
driveButton?.addEventListener("click", syncDriveFolders);
logoutButton?.addEventListener("click", signOutUser);
calendarButton?.addEventListener("click", () => syncGoogleCalendar(true));

renderSignedOut();
loadFirebase().catch(error => {
  console.error(error);
  renderSignedOut();
  setStatus("Firebase indisponível");
});

