const SUBJECTS=[{"key": "dpt", "name": "Direito Processual do Trabalho", "short": "DPT", "docs": {"1": "18LI2DrdzGho_3DEFZ_ROZHV51qGGaS9UXh43Yfa4tiY", "2": "1D4nLg9cglxKzhnLt1A3xfSH39ihqT11Rz17GqvcFWxI"}}, {"key": "tgot", "name": "Teoria Geral da Obrigação Tributária", "short": "TGOT", "docs": {"1": "1ukUJjwfcPssjPeN5L44iO6ZuUwFHiKESL_ja1FLD-68", "2": "1KoWl8eQ9aBPfXE0gLVFWF6d0V82mFfOKFnGHlc76ueM"}}, {"key": "dec", "name": "Direito Econômico e Concorrencial", "short": "DEC", "docs": {"1": "1BUHEFHI7efE8UEd6Kv3XDgUjTiCBnrDvS_Jx2-virTQ", "2": "1dJ45VFE89xjKi6tXP_-X2JxOzmQHeV9AKdlHoq7RFk0"}}, {"key": "dss", "name": "Direito da Seguridade Social", "short": "DSS", "docs": {"1": "1Nm554dsvS-ZuTIRmulmV5SR8QbfmQNV0JNCPyQmIeIc", "2": "1jRPyNJX6mTGCDZbj_VadROItccVrnmxYjfHzjvvUwKY"}}, {"key": "rebi", "name": "Relações Estatais, Bens e Intervenções", "short": "REBI", "docs": {"1": "1uUUigWIRWbwuJ_MFj5__A9yt97o1NksCJ7u2DY8nPUE", "2": "1GXLY0G2BKnNZ8-_zmTYvQA8w2tWaGDRleQYMiQluCbk"}}, {"key": "etica", "name": "Ética Profissional", "short": "Ética", "docs": {"1": "1HlsXmCxtTFXeh_n9QziKWTeduF4ezXxWHR1SoS1_FHc", "2": "1wiOqh_AS5l7XtWQwZotPAZpGlmXYUgwDEW8unlLmk2o"}}, {"key": "dde", "name": "Direito Digital Eletrônico", "short": "DDE", "docs": {"1": "1sAI1jxgv3QJhE2lwpsJcKj9UeBE9eXzWmu0Wj9qZ9Fo", "2": "12QjQI8qllSNvf-QLrP7XMLjrhWuxrHkQ4gk8YjscbY0"}}, {"key": "di", "name": "Direito da Inovação", "short": "DI", "docs": {"1": "1Y89CJwUbgcmGMMn2s95D-eK2iJsOBGJGTdTDzDz2n2Y", "2": "1GVhAxS_RZq7KDtQfG-Huk3p5Et3wDid069UXf-GvgWU"}}, {"key": "ajt", "name": "Prática Extensionista: Acesso à Justiça do Trabalho", "short": "AJT", "docs": {"1": "14RpF84SEwBWnxvj8Fw6iFh-ZsVAc66AjY69BYIkC1uM", "2": "1pCpHc78qnpJPCYQ1NxcN2f0s7flkH2BrZonV7wdQUq0"}}, {"key": "petss", "name": "Prática Extensionista: Temas de Seguridade", "short": "PETSS", "docs": {"1": "1CIhNd-F_dmT4IICLfPBtvCFvnIW77YXJH7I7btJtDqE", "2": "1WdmLP6wBirGastfD7omY33_H1G9Obvfvky69DSFoIiQ"}}];
let currentSubject=SUBJECTS[0].key,currentStage='1',calDate=new Date(),savedSummaryRange=null,studyQueue=[],studyIndex=0,docMode='a4';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],subj=k=>SUBJECTS.find(x=>x.key===k);
const sumKey=()=>`msj7-summary::${currentSubject}::${currentStage}`,evKey='msj7-events',fcKey='msj7-flashcards',errKey='msj7-errors';
const titles={home:['Study Journal · 8º semestre','Um lugar bonito para <em>lembrar.</em>'],calendar:['Planner acadêmico','Calendário do <em>semestre</em>'],subjects:['Estudo · Biblioteca','Suas <em>matérias</em>'],flashcards:['Memória ativa','Seus <em>flashcards</em>'],errors:['Questões · Caderno de erros','Seus <em>erros</em>'],subjectDetail:['Estudo · Matéria','']};

function showView(v){$$('.view').forEach(x=>x.classList.toggle('active',x.id===v));$$('.nav-link').forEach(x=>x.classList.toggle('active',x.dataset.view===v));$('.topbar').classList.toggle('home-topbar',v==='home');$('#crumb').textContent=titles[v][0];$('#title').innerHTML=v==='subjectDetail'?subj(currentSubject).name:titles[v][1];if(innerWidth<=768)closeSidebar();if(v==='subjects')renderSubjects();if(v==='calendar')renderCalendar();if(v==='flashcards')renderFlashcards();if(v==='errors')renderErrors();renderHome();}
$$('.nav-link').forEach(b=>b.onclick=()=>showView(b.dataset.view));
function toggleSidebar(){if(innerWidth<=768){$('#sidebar').classList.toggle('open');$('#backdrop').classList.toggle('show')}else{$('#app').classList.toggle('collapsed');$('#sideToggle').textContent=$('#app').classList.contains('collapsed')?'›':'‹'}}
function closeSidebar(){$('#sidebar').classList.remove('open');$('#backdrop').classList.remove('show')}
$('#mobileMenu').onclick=toggleSidebar;$('#backdrop').onclick=closeSidebar;$('#sideToggle').onclick=toggleSidebar;
function openModal(id){$('#'+id).classList.add('open')}function closeModal(id){$('#'+id).classList.remove('open')}function toast(m){let t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
const localDateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const todayStr=()=>localDateKey(new Date());function addDaysISO(n){let d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+n);return localDateKey(d)}
function renderGreeting(){const hour=new Date().getHours();const greeting=hour<12?'Bom dia':hour<18?'Boa tarde':'Boa noite';$('#timeGreeting').innerHTML=`${greeting}, <em>Julia</em>.`}
function setLocalItem(key,value){localStorage.setItem(key,value);window.dispatchEvent(new CustomEvent('journal:data-change',{detail:{key,value}}))}

function initSubjects(){
  $('#evSubject').innerHTML=SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  $('#errSubject').innerHTML=SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  $('#fcSubjectFilter').innerHTML='<option value="">Todas as matérias</option>'+SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  $('#errSubjectFilter').innerHTML='<option value="">Todas as matérias</option>'+SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  renderSubjects();
}

function renderSubjects(){
  $('#matGrid').innerHTML=SUBJECTS.map(s=>{let h1=localStorage.getItem(`msj7-summary::${s.key}::1`),h2=localStorage.getItem(`msj7-summary::${s.key}::2`),fc=getFlashcards().filter(f=>f.subject===s.key).length;
    return `<article class="mat-card" id="mc-${s.key}"><div class="mat-header" onclick="this.parentElement.classList.toggle('open')"><div class="mat-badge">${s.short}</div><div class="mat-info"><div class="mat-name">${s.name}</div><div class="mat-sub">2 cadernos no Drive · ${[h1,h2].filter(Boolean).length}/2 resumos · ${fc} flashcards</div></div><span class="chev">›</span></div><div class="mat-body"><div class="doc-row"><div class="stage">Primeira etapa</div><div class="doc-main"><b>Anotações ${s.short}</b><small>Google Docs da matéria</small></div><span class="summary-status ${h1?'done':''}">${h1?'resumo salvo':'sem resumo'}</span><button class="btn" onclick="openSubject('${s.key}','1')">Abrir</button></div><div class="doc-row"><div class="stage">Segunda etapa</div><div class="doc-main"><b>Anotações ${s.short}</b><small>Google Docs da matéria</small></div><span class="summary-status ${h2?'done':''}">${h2?'resumo salvo':'sem resumo'}</span><button class="btn" onclick="openSubject('${s.key}','2')">Abrir</button></div></div></article>`}).join('');
}
function openSubject(k,st){currentSubject=k;currentStage=st;$$('.period').forEach(x=>x.classList.toggle('active',x.dataset.stage===st));showView('subjectDetail');renderSubject();}
$$('.period').forEach(b=>b.onclick=()=>{currentStage=b.dataset.stage;$$('.period').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderSubject()});
function renderSubject(){
  let s=subj(currentSubject),id=s.docs[currentStage];
  $('#detailShort').textContent=s.short+' · '+(currentStage==='1'?'primeira etapa':'segunda etapa');
  $('#openDrive').href=`https://docs.google.com/document/d/${id}/edit`;
  updateDriveFrame();
  let h=localStorage.getItem(sumKey());
  $('#summaryEmpty').style.display=h?'none':'grid';
  $('#summaryFrame').style.display=h?'block':'none';
  $('#summaryFrame').srcdoc=h||'';
  $('#title').innerHTML=s.name;
  $('#summaryFrame').onload=bindSummarySelection;
  setReader('notes');
}
function updateDriveFrame(){
  let id=subj(currentSubject).docs[currentStage];
  const frame=$('#driveFrame');
  if(docMode==='docs'){
    frame.style.transform='none';
    frame.style.width='100%';
    frame.style.height='100%';
    frame.src=`https://docs.google.com/document/d/${id}/preview?rm=minimal&embedded=true`;
  }else{
    frame.src=`https://docs.google.com/document/d/${id}/preview?rm=minimal&embedded=true`;
    setTimeout(fitDriveA4,120);
  }
  $('#pageModeBtn')?.classList.toggle('active',docMode!=='docs');
  $('#docsModeBtn')?.classList.toggle('active',docMode==='docs');
}
function fitDriveA4(){
  if(docMode==='docs')return;
  const wrap=$('#a4Viewport'),frame=$('#driveFrame');
  if(!wrap||!frame)return;
  const a4Width=794;
  const scale=Math.min(1,wrap.clientWidth/a4Width);
  frame.style.width=a4Width+'px';
  frame.style.height=Math.max(900,wrap.clientHeight/scale)+'px';
  frame.style.transform=`scale(${scale})`;
}
function setDocMode(mode){
  docMode=mode==='docs'?'docs':'a4';
  updateDriveFrame();
  toast(docMode==='a4'?'Visualização A4 ajustada':'Visualização do Docs');
}
function setReader(which){let w=$('#studyWorkspace');if(!w)return;w.classList.remove('reader-notes','reader-summary');w.classList.add('reader-'+which);$$('.reader-tab').forEach(b=>b.classList.toggle('active',b.dataset.reader===which));}
function toggleNotesFocus(){let w=$('#studyWorkspace');w.classList.toggle('notes-focus');let btn=$('.reader-expand');if(btn)btn.textContent=w.classList.contains('notes-focus')?'Dividir tela':'Expandir';}

function bindSummarySelection(){try{let doc=$('#summaryFrame').contentDocument;let save=()=>{let sel=doc.getSelection();if(sel&&sel.rangeCount&&!sel.isCollapsed)savedSummaryRange=sel.getRangeAt(0).cloneRange()};doc.addEventListener('mouseup',save);doc.addEventListener('touchend',()=>setTimeout(save,50));}catch(e){}}
function persistSummaryIframe(){try{let doc=$('#summaryFrame').contentDocument;setLocalItem(sumKey(),'<!DOCTYPE html>'+doc.documentElement.outerHTML);}catch(e){}}
function applyHighlight(color){try{let frame=$('#summaryFrame'),doc=frame.contentDocument,sel=doc.getSelection();if(savedSummaryRange){sel.removeAllRanges();sel.addRange(savedSummaryRange)}doc.execCommand('hiliteColor',false,color);persistSummaryIframe();toast('Grifo salvo')}catch(e){toast('Selecione um trecho do resumo primeiro')}}
function clearHighlight(){try{let frame=$('#summaryFrame'),doc=frame.contentDocument,sel=doc.getSelection();if(savedSummaryRange){sel.removeAllRanges();sel.addRange(savedSummaryRange)}doc.execCommand('removeFormat',false,null);persistSummaryIframe();toast('Formatação removida')}catch(e){toast('Selecione um trecho primeiro')}}

function openSummaryModal(){let s=subj(currentSubject),id=s.docs[currentStage],old=localStorage.getItem(sumKey()),existing=getFlashcards().filter(f=>f.subject===currentSubject&&f.stage===currentStage).map(f=>({id:f.id,topic:f.topic,type:f.type,question:f.question,answer:f.answer}));
$('#summaryMeta').textContent=`${s.name} · ${currentStage==='1'?'primeira':'segunda'} etapa`;
$('#materialResponse').value='';
$('#summaryPrompt').value=`Leia integralmente minhas anotações neste Google Docs do Drive:
https://docs.google.com/document/d/${id}/edit

MATÉRIA: ${s.name}
ETAPA: ${currentStage==='1'?'Primeira':'Segunda'} etapa do semestre

MEU OBJETIVO:
Sou estudante de Direito e quero dominar, memorizar e saber aplicar o conteúdo em prova. Este Google Docs é atualizado semanalmente conforme tenho novas aulas. Não quero um resumo superficial. Quero linguagem enxuta para memorizar, mas sem perder conhecimento importante.

REGRA CENTRAL:
COMPACTE A LINGUAGEM, NÃO O CONHECIMENTO.

PARTE 1 — RESUMO CUMULATIVO
- Leia o documento inteiro.
- Atualize o resumo anterior em vez de criar um resumo novo desconectado.
- Preserve tudo que continua correto, útil e relevante.
- Incorpore as aulas novas nos lugares logicamente corretos.
- NÃO omita requisitos, elementos, classificações, exceções, hipóteses, prazos, artigos, competências, efeitos, diferenças entre institutos ou observações que possam ser cobradas.
- Conceitos devem ser curtos, precisos e fáceis de decorar.
- Use exemplos pequenos e concretos sempre que eles ajudarem a entender ou diferenciar um instituto.
- Quando houver institutos parecidos, use quadros comparativos.
- Destaque pegadinhas, exceções, palavras-chave, artigos e pontos de decoreba.
- Evite parágrafos enormes quando uma estrutura visual mais clara preservar o mesmo conteúdo.
- Comece com “EM 1 MINUTO”, mas esse bloco é apenas visão geral e NÃO substitui o conteúdo completo.
- Termine com “ANTES DA PROVA, LEMBRE”.
- O visual deve ser tão caprichado quanto um study journal editorial: papel quente, rosa sofisticado, hierarquia bonita, cards pontuais, tabelas elegantes, ótima leitura no celular.
- Use HTML completo com CSS interno. Sem JavaScript, fontes externas, imagens externas ou links externos.

PARTE 2 — FLASHCARDS ATÔMICOS
Gere flashcards de TODO ponto que mereça recuperação ativa, mas cada flashcard deve testar UMA única informação.
Exemplo ruim: “Explique competência territorial, exceções e empregado viajante.”
Exemplo bom: um cartão para a regra geral; outro para o artigo; outro para cada exceção relevante.
- Faça cartões de conceitos, artigos, prazos, requisitos, exceções, diferenças, pegadinhas e exemplos jurídicos importantes.
- Perguntas devem ser objetivas e respostas curtas o suficiente para correção imediata, sem empobrecer a informação.
- Se um assunto exige várias informações independentes, DIVIDA em vários cartões.
- Não gere duplicatas semânticas.
- IDs devem ser ESTÁVEIS entre atualizações semanais. Para um mesmo fato jurídico, preserve exatamente o mesmo ID já existente abaixo.
- Só crie ID novo para informação realmente nova.
- Formato do ID: ${s.short.toLowerCase()}-${currentStage}-topico-fato-curto, sem acentos e sem espaços.
- Cada cartão deve conter: id, subject="${currentSubject}", stage="${currentStage}", topic, type, question, answer.
- type deve ser um entre: conceito, artigo, prazo, requisito, exceção, comparação, pegadinha, exemplo.

FORMATO FINAL DA RESPOSTA — OBRIGATÓRIO:
Não escreva nenhuma explicação fora destes dois blocos.

<SUMMARY_HTML>
[HTML COMPLETO DO RESUMO]
</SUMMARY_HTML>

<FLASHCARDS_JSON>
{"flashcards":[ ... ]}
</FLASHCARDS_JSON>

RESUMO ANTERIOR:
${old||'[Ainda não existe resumo anterior.]'}

FLASHCARDS JÁ EXISTENTES — preserve os IDs quando a informação continuar sendo a mesma:
${existing.length?JSON.stringify(existing):'[Nenhum flashcard existente.]'}`;
openModal('summaryModal')}
async function copyPrompt(){try{await navigator.clipboard.writeText($('#summaryPrompt').value);toast('Prompt copiado')}catch{toast('Selecione e copie o prompt')}}
function importMaterialResponse(){let raw=$('#materialResponse').value.trim();if(!raw)return toast('Cole a resposta do ChatGPT');let sm=raw.match(/<SUMMARY_HTML>([\s\S]*?)<\/SUMMARY_HTML>/i),fm=raw.match(/<FLASHCARDS_JSON>([\s\S]*?)<\/FLASHCARDS_JSON>/i);if(!sm||!fm)return toast('Não encontrei os dois blocos esperados');let html=sm[1].trim(),data;try{data=JSON.parse(fm[1].trim())}catch(e){return toast('O JSON dos flashcards está inválido')};setLocalItem(sumKey(),html);let stats=syncFlashcards(Array.isArray(data)?data:(data.flashcards||[]),currentSubject,currentStage);closeModal('summaryModal');renderSubject();renderSubjects();renderFlashcards();renderHome();toast(`Resumo atualizado · ${stats.new} novos · ${stats.updated} mantidos`) }

function readArray(key){try{let value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return []}}
function getEvents(){return readArray(evKey)}function setEvents(v){setLocalItem(evKey,JSON.stringify(v))}
function clearEventForm(){$('#evId').value='';$('#evType').value='Prova';$('#evDate').value='';$('#evTitle').value='';$('#evSubject').value=currentSubject||SUBJECTS[0].key;$('#evChecklist').value='';$('#eventModalTitle').textContent='Novo compromisso';$('#deleteEventBtn').style.display='none';}
function openEventModal(date=''){clearEventForm();if(date)$('#evDate').value=date;openModal('eventModal')}
function editEvent(id){let e=getEvents().find(x=>String(x.id)===String(id));if(!e)return;if(e.readOnly){if(e.htmlLink)window.open(e.htmlLink,'_blank','noopener');else toast('Este compromisso vem do Google Agenda e é somente leitura');return}$('#evId').value=e.id;$('#evType').value=e.type;$('#evDate').value=e.date;$('#evTitle').value=e.title;$('#evSubject').value=e.subject;$('#evChecklist').value=(e.checks||[]).map(c=>c.text).join('\n');$('#eventModalTitle').textContent='Editar compromisso';$('#deleteEventBtn').style.display='inline-flex';openModal('eventModal')}
function saveEvent(){let title=$('#evTitle').value.trim(),date=$('#evDate').value;if(!title||!date)return toast('Preencha título e data');let arr=getEvents(),id=Number($('#evId').value)||Date.now(),old=arr.find(x=>x.id===id),lines=$('#evChecklist').value.split('\n').map(x=>x.trim()).filter(Boolean),checks=lines.map(t=>({text:t,done:old?.checks?.find(c=>c.text===t)?.done||false})),obj={id,type:$('#evType').value,date,title,subject:$('#evSubject').value,checks};let pos=arr.findIndex(x=>x.id===id);if(pos>=0)arr[pos]=obj;else arr.push(obj);setEvents(arr);closeModal('eventModal');renderCalendar();renderHome();toast(pos>=0?'Compromisso atualizado':'Compromisso salvo')}
function deleteEvent(){let id=$('#evId').value;if(!id)return;let target=getEvents().find(x=>String(x.id)===String(id));if(target?.readOnly)return toast('Eventos do Google Agenda não podem ser excluídos aqui');setEvents(getEvents().filter(x=>String(x.id)!==String(id)));closeModal('eventModal');renderCalendar();renderHome();toast('Compromisso excluído')}
function toggleCheck(eid,idx){let arr=getEvents(),e=arr.find(x=>String(x.id)===String(eid));if(!e||e.readOnly)return;e.checks[idx].done=!e.checks[idx].done;setEvents(arr);renderCalendar();renderHome();}
function moveMonth(n){calDate=new Date(calDate.getFullYear(),calDate.getMonth()+n,1);renderCalendar()}
function renderCalendar(){let y=calDate.getFullYear(),m=calDate.getMonth(),first=new Date(y,m,1),start=(first.getDay()+6)%7,last=new Date(y,m+1,0).getDate(),ev=getEvents();$('#calTitle').textContent=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(calDate);let h=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(x=>`<div class="dow">${x}</div>`).join('');for(let i=0;i<42;i++){let d=i-start+1;if(d<1||d>last){h+='<div class="day" style="opacity:.22;cursor:default"></div>';continue}let ds=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,today=todayStr(),dayEvents=ev.filter(e=>e.date===ds),chips=dayEvents.map(e=>`<button class="evchip" onclick="event.stopPropagation();editEvent('${escapeHtml(String(e.id))}')" title="${escapeHtml(e.type)}: ${escapeHtml(e.title)}">${escapeHtml(e.title)}</button>`).join('');h+=`<div class="day ${ds===today?'today':''}" onclick="openEventModal('${ds}')"><div class="daynum"><b>${d}</b></div>${dayEvents.length?`<div class="day-events">${chips}</div>`:''}</div>`}$('#calGrid').innerHTML=h;renderAgendaList();}
function renderAgendaList(){let arr=getEvents().sort((a,b)=>a.date.localeCompare(b.date));$('#agendaList').innerHTML=arr.length?arr.map(e=>{let id=escapeHtml(String(e.id)),source=e.readOnly?`<span class="sync-source">${escapeHtml(e.calendarName||'Google Agenda')}</span>`:'',actions=e.readOnly?`<button class="btn" onclick="editEvent('${id}')">Abrir no Google</button>`:`<button class="btn" onclick="editEvent('${id}')">Editar</button><button class="btn danger" onclick="$('#evId').value='${id}';deleteEvent()">Excluir</button>`;return `<div class="agenda-item"><b>${escapeHtml(e.title)}</b><div class="agenda-meta">${escapeHtml(e.type)} · ${subj(e.subject)?.short||''} · ${new Date(e.date+'T12:00').toLocaleDateString('pt-BR')} ${source}</div>${(e.checks||[]).map((c,i)=>`<label class="checkline"><input type="checkbox" ${c.done?'checked':''} onchange="toggleCheck('${id}',${i})"><span>${escapeHtml(c.text)}</span></label>`).join('')}<div class="agenda-actions">${actions}</div></div>`}).join(''):'<div class="empty">Nenhum compromisso cadastrado.</div>'}
function importGoogleCalendarEvents(events){let manual=getEvents().filter(e=>e.source!=='google-calendar');setEvents([...manual,...events]);renderCalendar();renderHome()}
window.importGoogleCalendarEvents=importGoogleCalendarEvents;

function getFlashcards(){return readArray(fcKey)}function setFlashcards(v){setLocalItem(fcKey,JSON.stringify(v))}
function normalizeId(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function syncFlashcards(incoming,subject,stage){let all=getFlashcards(),scope=all.filter(f=>f.subject===subject&&f.stage===stage),other=all.filter(f=>!(f.subject===subject&&f.stage===stage)),byId=new Map(scope.map(f=>[f.id,f])),seen=new Set(),out=[],nNew=0,nUpdated=0;for(let raw of incoming){let id=raw.id||`${subject}-${stage}-${normalizeId(raw.topic)}-${normalizeId(raw.question).slice(0,40)}`;if(seen.has(id))continue;seen.add(id);let old=byId.get(id),base={id,subject,stage,topic:String(raw.topic||'Geral'),type:String(raw.type||'conceito'),question:String(raw.question||raw.pergunta||''),answer:String(raw.answer||raw.resposta||''),stale:false};if(!base.question||!base.answer)continue;if(old){out.push({...old,...base,review:old.review||{due:todayStr(),interval:0,streak:0,last:null,lastGrade:null}});nUpdated++}else{out.push({...base,createdAt:new Date().toISOString(),review:{due:todayStr(),interval:0,streak:0,last:null,lastGrade:null}});nNew++}}for(let old of scope){if(!seen.has(old.id))out.push({...old,stale:true})}setFlashcards([...other,...out]);return {new:nNew,updated:nUpdated,stale:out.filter(f=>f.stale).length}}
function cardStatus(f){let r=f.review||{};if(f.stale)return 'stale';if((r.streak||0)>=3)return 'mastered';if(!r.last)return 'new';if((r.due||todayStr())<=todayStr())return 'due';return 'learning'}
function filteredFlashcards(){let s=$('#fcSubjectFilter')?.value||'',st=$('#fcStageFilter')?.value||'',ty=$('#fcTypeFilter')?.value||'',status=$('#fcStatusFilter')?.value||'',topic=($('#fcTopicFilter')?.value||'').toLowerCase();return getFlashcards().filter(f=>(!s||f.subject===s)&&(!st||f.stage===st)&&(!ty||f.type===ty)&&(!status||cardStatus(f)===status)&&(!topic||f.topic.toLowerCase().includes(topic)))}
function renderFlashcards(){let all=getFlashcards(),types=[...new Set(all.map(f=>f.type).filter(Boolean))].sort(),sel=$('#fcTypeFilter').value;$('#fcTypeFilter').innerHTML='<option value="">Todos os tipos</option>'+types.map(t=>`<option ${t===sel?'selected':''}>${t}</option>`).join('');let due=all.filter(f=>cardStatus(f)==='due').length,nw=all.filter(f=>cardStatus(f)==='new').length,master=all.filter(f=>cardStatus(f)==='mastered').length;$('#fcTotal').textContent=all.length;$('#fcDue').textContent=due;$('#fcNew').textContent=nw;$('#fcMastered').textContent=master;let arr=filteredFlashcards();$('#flashList').innerHTML=arr.length?arr.map(f=>{let st=cardStatus(f),r=f.review||{};return `<div class="flash-row"><div><div class="flash-q">${f.question}</div><div class="flash-meta"><span class="tag rose">${subj(f.subject)?.short||f.subject}</span><span class="tag">${f.stage==='1'?'1ª etapa':'2ª etapa'}</span><span class="tag">${f.topic}</span><span class="tag">${f.type}</span><span class="tag ${st==='mastered'?'good':st==='stale'?'warn':''}">${st==='new'?'novo':st==='due'?'revisar hoje':st==='mastered'?'dominado':st==='stale'?'fora da última atualização':'em estudo'}</span></div><div class="agenda-meta" style="margin-top:.35rem">${r.last?'Última revisão: '+new Date(r.last+'T12:00').toLocaleDateString('pt-BR'):''}${r.due?' · Próxima: '+new Date(r.due+'T12:00').toLocaleDateString('pt-BR'):''}</div></div><button class="btn danger" onclick="deleteFlashcard('${f.id.replace(/'/g,"\\'")}')">Excluir</button></div>`}).join(''):'<div class="empty">Nenhum flashcard corresponde aos filtros.</div>';renderHome();}
function startStudy(){let arr=filteredFlashcards();arr.sort((a,b)=>{let sa=cardStatus(a),sb=cardStatus(b),rank={due:0,new:1,learning:2,mastered:3,stale:4};return (rank[sa]??9)-(rank[sb]??9)});studyQueue=arr;studyIndex=0;showStudyCard()}
function showStudyCard(){let host=$('#studyCard');if(!studyQueue.length||studyIndex>=studyQueue.length){host.innerHTML='<div class="empty">Sessão concluída. ✦</div>';renderFlashcards();return}let f=studyQueue[studyIndex];host.innerHTML=`<div class="eyebrow">${subj(f.subject)?.short} · ${f.topic} · ${f.type}</div><div class="fc-prompt">${f.question}</div><button class="btn primary" style="margin:1.2rem auto 0" onclick="revealAnswer()">Mostrar resposta</button><div class="fc-answer" id="fcAnswer">${f.answer}</div><div class="rate-row" id="rateRow"><button class="btn rate-bad" onclick="gradeCard('bad')">Não sabia</button><button class="btn rate-mid" onclick="gradeCard('mid')">Quase</button><button class="btn rate-good" onclick="gradeCard('good')">Sabia</button></div>`}
function revealAnswer(){$('#fcAnswer').classList.add('show');$('#rateRow').classList.add('show')}
function gradeCard(grade){let f=studyQueue[studyIndex],all=getFlashcards(),c=all.find(x=>x.id===f.id);if(!c)return;let r=c.review||{due:todayStr(),interval:0,streak:0};if(grade==='bad'){r.interval=1;r.streak=0}else if(grade==='mid'){r.interval=Math.max(2,Math.round((r.interval||1)*1.6));r.streak=Math.max(0,(r.streak||0))}else{r.interval=Math.max(3,Math.round((r.interval||1)*2.3));r.streak=(r.streak||0)+1}r.interval=Math.min(r.interval,90);r.last=todayStr();r.lastGrade=grade;let d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+r.interval);r.due=localDateKey(d);c.review=r;setFlashcards(all);studyIndex++;showStudyCard();renderHome()}
function deleteFlashcard(id){setFlashcards(getFlashcards().filter(f=>f.id!==id));renderFlashcards();toast('Flashcard excluído')}
function exportFlashcards(){let data={exportedAt:new Date().toISOString(),flashcards:filteredFlashcards()},blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='flashcards-study-journal.json';a.click();URL.revokeObjectURL(a.href)}

function getErrors(){return readArray(errKey)}function setErrors(v){setLocalItem(errKey,JSON.stringify(v))}
function openErrorModal(id=null){$('#errId').value='';$('#errSubject').value=currentSubject||SUBJECTS[0].key;$('#errTopic').value='';$('#errReason').value='Não sabia o conteúdo';$('#errExplanation').value='';$('#deleteErrorBtn').style.display='none';$('#errorModalTitle').textContent='Nova questão errada';if(id){let e=getErrors().find(x=>x.id===id);if(e){$('#errId').value=e.id;$('#errSubject').value=e.subject;$('#errTopic').value=e.topic;$('#errReason').value=e.reason;$('#errExplanation').value=e.explanation;$('#deleteErrorBtn').style.display='inline-flex';$('#errorModalTitle').textContent='Editar questão errada'}}openModal('errorModal')}
function saveError(){let topic=$('#errTopic').value.trim(),ex=$('#errExplanation').value.trim();if(!topic||!ex)return toast('Preencha tópico e explicação');let arr=getErrors(),id=Number($('#errId').value)||Date.now(),old=arr.find(x=>x.id===id),obj={id,subject:$('#errSubject').value,topic,reason:$('#errReason').value,explanation:ex,mastered:old?.mastered||false,createdAt:old?.createdAt||new Date().toISOString()};let i=arr.findIndex(x=>x.id===id);if(i>=0)arr[i]=obj;else arr.unshift(obj);setErrors(arr);closeModal('errorModal');renderErrors();renderHome();toast(i>=0?'Erro atualizado':'Erro salvo')}
function deleteError(){let id=Number($('#errId').value);setErrors(getErrors().filter(e=>e.id!==id));closeModal('errorModal');renderErrors();renderHome();toast('Erro excluído')}
function toggleErrorMastered(id){let arr=getErrors(),e=arr.find(x=>x.id===id);if(e)e.mastered=!e.mastered;setErrors(arr);renderErrors();renderHome()}
function renderErrors(){let s=$('#errSubjectFilter').value,topic=$('#errTopicFilter').value.toLowerCase(),arr=getErrors().filter(e=>(!s||e.subject===s)&&(!topic||e.topic.toLowerCase().includes(topic)));$('#errorList').innerHTML=arr.length?arr.map(e=>`<div class="error-row"><div class="error-head"><div><b>${e.topic}</b><div class="flash-meta"><span class="tag rose">${subj(e.subject)?.short||''}</span><span class="tag">${e.reason}</span>${e.mastered?'<span class="tag good">aprendi</span>':''}</div></div></div><div class="error-text">${escapeHtml(e.explanation)}</div><div class="error-actions"><button class="btn" onclick="openErrorModal(${e.id})">Editar</button><button class="btn" onclick="toggleErrorMastered(${e.id})">${e.mastered?'Voltar para ativos':'✓ Aprendi'}</button><button class="btn danger" onclick="$('#errId').value='${e.id}';deleteError()">Excluir</button></div></div>`).join(''):'<div class="empty">Nenhuma questão errada cadastrada.</div>'}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}

function renderHome(){let today=todayStr(),events=getEvents().filter(e=>e.date>=today).sort((a,b)=>a.date.localeCompare(b.date)),fc=getFlashcards();$('#homeCount').textContent=events.length;$('#homeAgenda').innerHTML=events.length?events.slice(0,5).map(e=>`<div class="agenda-item"><b>${e.title}</b><div class="agenda-meta">${new Date(e.date+'T12:00').toLocaleDateString('pt-BR')} · ${e.type} · ${subj(e.subject)?.short||''}</div></div>`).join(''):'<div class="empty">Nenhum compromisso cadastrado ainda.</div>';$('#homeDue').textContent=fc.filter(f=>cardStatus(f)==='due').length;$('#homeNew').textContent=fc.filter(f=>cardStatus(f)==='new').length;$('#homeErrors').textContent=getErrors().filter(e=>!e.mastered).length}


function saveAvatar(input){
  const file=input.files&&input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{setLocalItem('msj7-avatar',reader.result);loadAvatar();toast('Foto atualizada')}
    catch(e){toast('Não consegui salvar essa foto')}
  };
  reader.readAsDataURL(file);
}
function loadAvatar(){
  const data=localStorage.getItem('msj7-avatar'),btn=$('#avatarBtn'),img=$('#avatarImg');
  if(data&&btn&&img){img.src=data;btn.classList.add('has-photo')}
  else if(btn){btn.classList.remove('has-photo')}
}

window.addEventListener('resize',()=>{if(docMode==='a4')fitDriveA4()});
const _driveFrame=document.getElementById('driveFrame');
if(_driveFrame)_driveFrame.addEventListener('load',()=>{if(docMode==='a4')setTimeout(fitDriveA4,80)});

function toggleViewerFullscreen(kind){
  const pane=kind==='notes'?($('#notesPane')||$('.notes-pane')):($('#summaryPane')||$('.summary-pane'));
  if(!pane)return;
  const opening=!pane.classList.contains('viewer-fullscreen');
  $$('.viewer-fullscreen').forEach(x=>x.classList.remove('viewer-fullscreen'));
  pane.classList.toggle('viewer-fullscreen',opening);
  document.body.classList.toggle('viewer-open',opening);
  if(kind==='notes'&&typeof fitDriveA4==='function')setTimeout(fitDriveA4,100);
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    $$('.viewer-fullscreen').forEach(x=>x.classList.remove('viewer-fullscreen'));
    document.body.classList.remove('viewer-open');
    if(typeof fitDriveA4==='function')setTimeout(fitDriveA4,100);
  }
});

window.addEventListener('journal:cloud-updated',()=>{loadAvatar();renderSubjects();renderCalendar();renderFlashcards();renderErrors();renderHome()});
renderGreeting();initSubjects();loadAvatar();renderCalendar();renderFlashcards();renderErrors();renderHome();

