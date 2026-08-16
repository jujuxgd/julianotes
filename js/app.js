const SUBJECTS=[{"key": "dpt", "name": "Direito Processual do Trabalho", "short": "DPT", "docs": {"1": "18LI2DrdzGho_3DEFZ_ROZHV51qGGaS9UXh43Yfa4tiY", "2": "1D4nLg9cglxKzhnLt1A3xfSH39ihqT11Rz17GqvcFWxI"}}, {"key": "tgot", "name": "Teoria Geral da Obrigação Tributária", "short": "TGOT", "docs": {"1": "1ukUJjwfcPssjPeN5L44iO6ZuUwFHiKESL_ja1FLD-68", "2": "1KoWl8eQ9aBPfXE0gLVFWF6d0V82mFfOKFnGHlc76ueM"}}, {"key": "dec", "name": "Direito Econômico e Concorrencial", "short": "DEC", "docs": {"1": "1BUHEFHI7efE8UEd6Kv3XDgUjTiCBnrDvS_Jx2-virTQ", "2": "1dJ45VFE89xjKi6tXP_-X2JxOzmQHeV9AKdlHoq7RFk0"}}, {"key": "dss", "name": "Direito da Seguridade Social", "short": "DSS", "docs": {"1": "1Nm554dsvS-ZuTIRmulmV5SR8QbfmQNV0JNCPyQmIeIc", "2": "1jRPyNJX6mTGCDZbj_VadROItccVrnmxYjfHzjvvUwKY"}}, {"key": "rebi", "name": "Relações Estatais, Bens e Intervenções", "short": "REBI", "docs": {"1": "1uUUigWIRWbwuJ_MFj5__A9yt97o1NksCJ7u2DY8nPUE", "2": "1GXLY0G2BKnNZ8-_zmTYvQA8w2tWaGDRleQYMiQluCbk"}}, {"key": "etica", "name": "Ética Profissional", "short": "Ética", "docs": {"1": "1HlsXmCxtTFXeh_n9QziKWTeduF4ezXxWHR1SoS1_FHc", "2": "1wiOqh_AS5l7XtWQwZotPAZpGlmXYUgwDEW8unlLmk2o"}}, {"key": "dde", "name": "Direito Digital Eletrônico", "short": "DDE", "docs": {"1": "1sAI1jxgv3QJhE2lwpsJcKj9UeBE9eXzWmu0Wj9qZ9Fo", "2": "12QjQI8qllSNvf-QLrP7XMLjrhWuxrHkQ4gk8YjscbY0"}}, {"key": "di", "name": "Direito da Inovação", "short": "DI", "docs": {"1": "1Y89CJwUbgcmGMMn2s95D-eK2iJsOBGJGTdTDzDz2n2Y", "2": "1GVhAxS_RZq7KDtQfG-Huk3p5Et3wDid069UXf-GvgWU"}}, {"key": "ajt", "name": "Prática Extensionista: Acesso à Justiça do Trabalho", "short": "AJT", "docs": {"1": "14RpF84SEwBWnxvj8Fw6iFh-ZsVAc66AjY69BYIkC1uM", "2": "1pCpHc78qnpJPCYQ1NxcN2f0s7flkH2BrZonV7wdQUq0"}}, {"key": "petss", "name": "Prática Extensionista: Temas de Seguridade", "short": "PETSS", "docs": {"1": "1CIhNd-F_dmT4IICLfPBtvCFvnIW77YXJH7I7btJtDqE", "2": "1WdmLP6wBirGastfD7omY33_H1G9Obvfvky69DSFoIiQ"}}];
const SUBJECT_THEMES={
  dpt:{name:'rosa antigo',primary:'#B83E70',accent:'#E9A6C0',soft:'#FBE7EF',ink:'#6B2344'},
  tgot:{name:'lilás',primary:'#7257A8',accent:'#B9A7DF',soft:'#EEE8FA',ink:'#443568'},
  dec:{name:'azul bebê',primary:'#4A7FA9',accent:'#A9D1F0',soft:'#E6F2FC',ink:'#2D587B'},
  dss:{name:'verde sálvia',primary:'#4F7D64',accent:'#A8CCB2',soft:'#E7F2EA',ink:'#315340'},
  rebi:{name:'turquesa',primary:'#317F82',accent:'#91CFCC',soft:'#E0F2F1',ink:'#20585B'},
  etica:{name:'pêssego',primary:'#A96749',accent:'#E8B99F',soft:'#F8EBE3',ink:'#70442F'},
  dde:{name:'lavanda',primary:'#685E9B',accent:'#B9B2E3',soft:'#ECEAFA',ink:'#423B6B'},
  di:{name:'menta',primary:'#3B806E',accent:'#9ED3C4',soft:'#E3F4EF',ink:'#285A4D'},
  ajt:{name:'rosa queimado',primary:'#A95F75',accent:'#D7A6B5',soft:'#F6E6EB',ink:'#6F3E4E'},
  petss:{name:'azul turquesa',primary:'#3E7E94',accent:'#9ACAD9',soft:'#E3F2F7',ink:'#285566'}
};
const SUMMARY_HIGHLIGHTS={
  yellow:{label:'Amarelo',bg:'#FEF9C3',text:'#5F5213'},
  green:{label:'Verde',bg:'#DCFCE7',text:'#27633A'},
  blue:{label:'Azul',bg:'#DBEAFE',text:'#285B92'},
  pink:{label:'Rosa',bg:'#FCE7F3',text:'#9B3567'},
  purple:{label:'Lilás',bg:'#EDE9FE',text:'#604A91'}
};
let currentSubject=SUBJECTS[0].key,currentStage='1',calDate=new Date(),savedSummaryRange=null,studyQueue=[],studyIndex=0,studyRetries=new Set(),toastTimer=null,activeModal=null,modalReturnFocus=null;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],subj=k=>SUBJECTS.find(x=>x.key===k);
const sumKey=()=>`msj7-summary::${currentSubject}::${currentStage}`,evKey='msj7-events',fcKey='msj7-flashcards',fcFilterKey='msj7-flashcard-filters',errKey='msj7-errors';
const titles={home:['Study Journal · 8º semestre','Um lugar bonito para <em>lembrar.</em>'],calendar:['Planner acadêmico','Calendário do <em>semestre</em>'],subjects:['Estudo · Biblioteca','Suas <em>matérias</em>'],flashcards:['Memória ativa','Seus <em>flashcards</em>'],errors:['Questões · Caderno de erros','Seus <em>erros</em>'],subjectDetail:['Estudo · Matéria','']};

const themeKey='msj7-theme';
function applyTheme(theme,{persist=false}={}){const dark=theme==='dark';document.documentElement.dataset.theme=dark?'dark':'light';document.querySelector('meta[name="theme-color"]')?.setAttribute('content',dark?'#1A1714':'#FAF8F5');const toggle=$('#themeToggle');if(toggle){toggle.setAttribute('aria-pressed',String(dark));toggle.setAttribute('title',dark?'Ativar modo claro':'Ativar modo escuro');toggle.querySelector('.theme-icon').textContent=dark?'☀':'☾';toggle.querySelector('.theme-label').textContent=dark?'Modo claro':'Modo escuro'}if(persist)localStorage.setItem(themeKey,dark?'dark':'light')}
function toggleTheme(){applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark',{persist:true})}
applyTheme(document.documentElement.dataset.theme||'light');
$('#themeToggle').onclick=toggleTheme;
const themePreference=window.matchMedia('(prefers-color-scheme: dark)');
themePreference.addEventListener?.('change',event=>{if(!localStorage.getItem(themeKey))applyTheme(event.matches?'dark':'light')});
Array.from({length:localStorage.length},(_,i)=>localStorage.key(i)).filter(key=>key?.startsWith('msj7-prompt::')).forEach(key=>localStorage.removeItem(key));

function showView(v){hideSummaryHighlightPopover();$$('.view').forEach(x=>{let active=x.id===v;x.classList.toggle('active',active);x.setAttribute('aria-hidden',String(!active))});$$('.nav-link[data-view]').forEach(x=>{let active=x.dataset.view===v;x.classList.toggle('active',active);if(active)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});$('.topbar').classList.toggle('home-topbar',v==='home');$('#crumb').textContent=titles[v][0];$('#title').innerHTML=v==='subjectDetail'?subj(currentSubject).name:titles[v][1];if(innerWidth<=768)closeSidebar();if(v==='subjects')renderSubjects();if(v==='calendar')renderCalendar();if(v==='flashcards')renderFlashcards();if(v==='errors')renderErrors();renderHome();}
$$('.nav-link[data-view]').forEach(b=>b.onclick=()=>showView(b.dataset.view));
function toggleSidebar(){if(innerWidth<=768){let open=$('#sidebar').classList.toggle('open');$('#backdrop').classList.toggle('show',open);$('#mobileMenu').setAttribute('aria-expanded',String(open))}else{$('#app').classList.toggle('collapsed');$('#sideToggle').textContent=$('#app').classList.contains('collapsed')?'›':'‹'}}
function closeSidebar(){$('#sidebar').classList.remove('open');$('#backdrop').classList.remove('show');$('#mobileMenu').setAttribute('aria-expanded','false')}
$('#mobileMenu').onclick=toggleSidebar;$('#backdrop').onclick=closeSidebar;$('#sideToggle').onclick=toggleSidebar;
function openModal(id){let modal=$('#'+id);if(!modal)return;modalReturnFocus=document.activeElement;activeModal=modal;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('input:not([type="hidden"]),select,textarea,button')?.focus(),0)}
function closeModal(id){let modal=$('#'+id);if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');activeModal=null;modalReturnFocus?.focus?.();modalReturnFocus=null}
function toast(m){let t=$('#toast');if(!t)return;clearTimeout(toastTimer);t.textContent=m;t.classList.add('show');toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
const localDateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const todayStr=()=>localDateKey(new Date());function addDaysISO(n){let d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+n);return localDateKey(d)}
function renderGreeting(){const hour=new Date().getHours();const greeting=hour<12?'Bom dia':hour<18?'Boa tarde':'Boa noite';$('#timeGreeting').innerHTML=`${greeting}, <em>Julia</em>.`}
function setLocalItem(key,value){try{localStorage.setItem(key,value);window.dispatchEvent(new CustomEvent('journal:data-change',{detail:{key,value}}));return true}catch(error){console.error(error);toast('O armazenamento deste navegador está cheio. Exporte seus dados antes de continuar.');return false}}

function initSubjects(){
  $('#evSubject').innerHTML=SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  $('#errSubject').innerHTML=SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  $('#fcSubjectFilter').innerHTML='<option value="">Todas as matérias</option>'+SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  $('#errSubjectFilter').innerHTML='<option value="">Todas as matérias</option>'+SUBJECTS.map(s=>`<option value="${s.key}">${s.name}</option>`).join('');
  restoreFlashcardFilters();
  renderSubjects();
}

function renderSubjects(){
  $('#matGrid').innerHTML=SUBJECTS.map(s=>{let h1=localStorage.getItem(`msj7-summary::${s.key}::1`),h2=localStorage.getItem(`msj7-summary::${s.key}::2`),fc=getFlashcards().filter(f=>f.subject===s.key&&!f.stale).length;
    return `<article class="mat-card" id="mc-${s.key}"><button type="button" class="mat-header" aria-expanded="false" aria-controls="mb-${s.key}" onclick="toggleSubjectCard(this)"><span class="mat-badge">${s.short}</span><span class="mat-info"><span class="mat-name">${s.name}</span><span class="mat-sub">2 cadernos no Drive · ${[h1,h2].filter(Boolean).length}/2 resumos · ${fc} flashcards</span></span><span class="chev" aria-hidden="true">›</span></button><div class="mat-body" id="mb-${s.key}"><div class="doc-row"><div class="stage">Primeira etapa</div><div class="doc-main"><b>Anotações ${s.short}</b><small>Google Docs da matéria</small></div><span class="summary-status ${h1?'done':''}">${h1?'resumo salvo':'sem resumo'}</span><button class="btn" onclick="openSubject('${s.key}','1')">Abrir</button></div><div class="doc-row"><div class="stage">Segunda etapa</div><div class="doc-main"><b>Anotações ${s.short}</b><small>Google Docs da matéria</small></div><span class="summary-status ${h2?'done':''}">${h2?'resumo salvo':'sem resumo'}</span><button class="btn" onclick="openSubject('${s.key}','2')">Abrir</button></div></div></article>`}).join('');
}
function toggleSubjectCard(button){let card=button.closest('.mat-card'),open=card.classList.toggle('open');button.setAttribute('aria-expanded',String(open))}
function openSubject(k,st){currentSubject=k;currentStage=st;$$('.period').forEach(x=>x.classList.toggle('active',x.dataset.stage===st));showView('subjectDetail');renderSubject();}
$$('.period').forEach(b=>b.onclick=()=>{currentStage=b.dataset.stage;$$('.period').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#materialResponse').value='';renderSubject()});
function renderSubject({resetReader=true}={}){
  let s=subj(currentSubject),id=s.docs[currentStage];
  $('#detailShort').textContent=s.short+' · '+(currentStage==='1'?'primeira etapa':'segunda etapa');
  $('#openDrive').href=`https://docs.google.com/document/d/${id}/edit`;
  updateDriveFrame();
  let h=localStorage.getItem(sumKey()),safeHtml=h?sanitizeSummaryHtml(h):'';
  $('#summaryFrame').onload=bindSummarySelection;
  $('#summaryEmpty').style.display=h?'none':'grid';
  $('#summaryFrame').style.display=h?'block':'none';
  $('#summaryFrame').srcdoc=safeHtml;
  $('#title').innerHTML=s.name;
  if(h)setTimeout(bindSummarySelection,0);
  if(resetReader)setReader('notes');
}
function updateDriveFrame(){
  let id=subj(currentSubject).docs[currentStage];
  const frame=$('#driveFrame');
  frame.classList.remove('loaded');frame.parentElement?.classList.remove('is-loaded');
  frame.removeAttribute('style');
  frame.src=`https://docs.google.com/document/d/${id}/preview?rm=minimal&embedded=true`;
}
function setReader(which){hideSummaryHighlightPopover();let w=$('#studyWorkspace');if(!w)return;w.classList.remove('reader-notes','reader-summary','reader-prompt');w.classList.add('reader-'+which);$$('.reader-tab').forEach(b=>{let active=b.dataset.reader===which;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});[['notes','#notesPane'],['summary','#summaryPane'],['prompt','#promptPane']].forEach(([name,selector])=>$(selector)?.setAttribute('aria-hidden',String(name!==which)));}
function toggleNotesFocus(){let w=$('#studyWorkspace');w.classList.toggle('notes-focus');let btn=$('.reader-expand');if(btn)btn.textContent=w.classList.contains('notes-focus')?'Dividir tela':'Expandir';}

function sanitizeCss(css){return String(css||'').replace(/@import[^;]+;?/gi,'').replace(/url\(([^)]+)\)/gi,(match,raw)=>{let value=raw.trim().replace(/^['"]|['"]$/g,'');return /^(data:|fonts\/)/i.test(value)?match:'none'})}
function sanitizeSummaryHtml(html){let doc=new DOMParser().parseFromString(String(html||''),'text/html');doc.querySelectorAll('script,iframe,object,embed,form,input,button,link,base').forEach(el=>el.remove());doc.querySelectorAll('meta[http-equiv]').forEach(el=>el.remove());doc.querySelectorAll('style').forEach(el=>{el.textContent=sanitizeCss(el.textContent)});doc.querySelectorAll('*').forEach(el=>{[...el.attributes].forEach(attr=>{let name=attr.name.toLowerCase(),value=attr.value.trim();if(name.startsWith('on')||['srcdoc','formaction'].includes(name))el.removeAttribute(attr.name);else if(name==='style')el.setAttribute('style',sanitizeCss(value));else if(name==='href'&&!value.startsWith('#'))el.removeAttribute(attr.name);else if(name==='src'&&!/^data:image\//i.test(value))el.removeAttribute(attr.name)})});let viewport=doc.querySelector('meta[name="viewport"]');if(!viewport){viewport=doc.createElement('meta');viewport.name='viewport';doc.head.prepend(viewport)}viewport.content='width=device-width, initial-scale=1';return '<!DOCTYPE html>'+doc.documentElement.outerHTML}
function prepareSummaryDocument(){try{let doc=$('#summaryFrame').contentDocument;if(!doc?.head||!doc.body)return;let meta=doc.querySelector('meta[name="viewport"]');if(!meta){meta=doc.createElement('meta');meta.name='viewport';doc.head.prepend(meta)}meta.content='width=device-width, initial-scale=1';if(!doc.querySelector('#journal-reader-fix')){let style=doc.createElement('style');style.id='journal-reader-fix';style.textContent=`html,body{max-width:100%;overflow-x:hidden}img,svg{max-width:100%;height:auto}@media screen and (max-width:760px){html,body{width:100%!important;min-width:0!important;max-width:100%!important;overflow-x:hidden!important}body{margin:0!important;zoom:1!important;transform:none!important}body>[data-journal-fit-mobile],.page,.sheet,.paper,.document-page,.summary-page,.cover{box-sizing:border-box!important;width:100%!important;min-width:0!important;max-width:100%!important;margin-left:0!important;margin-right:0!important;border-radius:0!important;box-shadow:none!important}.page,.sheet,.paper,.document-page,.summary-page{padding:clamp(18px,5.5vw,30px)!important}.cover{min-height:100svh!important;height:auto!important;padding:clamp(24px,7vw,42px)!important}table{display:block!important;width:100%!important;max-width:100%!important;overflow-x:auto!important;-webkit-overflow-scrolling:touch}pre,code{white-space:pre-wrap!important;overflow-wrap:anywhere}h1,h2,h3,p,li,td,th{overflow-wrap:anywhere}}`;doc.head.appendChild(style)}[...doc.body.children].filter(el=>!['SCRIPT','STYLE'].includes(el.tagName)).forEach(el=>el.dataset.journalFitMobile='true')}catch(e){}}
function hideSummaryHighlightPopover(){let popover=$('#summaryHighlightPopover');if(popover)popover.classList.remove('visible')}
function showSummaryHighlightPopover(range){let popover=$('#summaryHighlightPopover'),frame=$('#summaryFrame');if(!popover||!frame)return;let rect=range.getBoundingClientRect(),frameRect=frame.getBoundingClientRect(),left=frameRect.left+rect.left+rect.width/2,top=frameRect.top+rect.top-10;popover.classList.add('visible');let width=popover.offsetWidth||190,height=popover.offsetHeight||42;popover.style.left=`${Math.max(10,Math.min(innerWidth-width-10,left-width/2))}px`;popover.style.top=`${Math.max(10,top-height)}px`}
function bindSummarySelection(){try{prepareSummaryDocument();let doc=$('#summaryFrame').contentDocument;if(doc.__journalSelectionBound)return;doc.__journalSelectionBound=true;let save=()=>{let sel=doc.getSelection();if(sel&&sel.rangeCount&&!sel.isCollapsed){savedSummaryRange=sel.getRangeAt(0).cloneRange();showSummaryHighlightPopover(savedSummaryRange)}else hideSummaryHighlightPopover()};doc.addEventListener('mouseup',save);doc.addEventListener('keyup',save);doc.addEventListener('touchend',()=>setTimeout(save,120));doc.addEventListener('scroll',hideSummaryHighlightPopover,true);doc.addEventListener('click',event=>{let mark=event.target.closest?.('mark[data-journal-highlight]');if(!mark)return;let range=doc.createRange();range.selectNodeContents(mark);savedSummaryRange=range;showSummaryHighlightPopover(range)});}catch(e){}}
function persistSummaryIframe(){try{let doc=$('#summaryFrame').contentDocument,clone=doc.documentElement.cloneNode(true);clone.querySelector('#journal-reader-fix')?.remove();clone.querySelectorAll('[data-journal-fit-mobile]').forEach(el=>el.removeAttribute('data-journal-fit-mobile'));setLocalItem(sumKey(),sanitizeSummaryHtml('<!DOCTYPE html>'+clone.outerHTML));}catch(e){}}
function selectedTextSlices(range,doc){let root=range.commonAncestorContainer.nodeType===Node.TEXT_NODE?range.commonAncestorContainer.parentNode:range.commonAncestorContainer,walker=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT),slices=[],node;while(node=walker.nextNode()){if(!node.data.trim())continue;try{if(!range.intersectsNode(node))continue}catch{continue}let start=node===range.startContainer?range.startOffset:0,end=node===range.endContainer?range.endOffset:node.length;if(start<end)slices.push({node,start,end})}return slices}
function styleSummaryMark(mark,kind,style){mark.dataset.journalHighlight=kind;mark.dataset.highlightLabel=style.label;mark.title='Toque para alterar ou remover o grifo';mark.style.cssText=`background:${style.bg};color:${style.text};border-radius:2px;padding:0 1px;box-shadow:inset 0 -2px 0 ${style.text}66;box-decoration-break:clone;-webkit-box-decoration-break:clone`}
function applySemanticHighlight(kind){let style=SUMMARY_HIGHLIGHTS[kind];try{if(!style||!savedSummaryRange||savedSummaryRange.collapsed)throw new Error('empty');let doc=$('#summaryFrame').contentDocument,existing=[...doc.querySelectorAll('mark[data-journal-highlight]')].filter(mark=>{try{return savedSummaryRange.intersectsNode(mark)}catch{return false}});if(existing.length)existing.forEach(mark=>styleSummaryMark(mark,kind,style));else{let slices=selectedTextSlices(savedSummaryRange,doc);if(!slices.length)throw new Error('empty');slices.reverse().forEach(({node,start,end})=>{if(!node.parentNode||node.parentElement?.closest('mark[data-journal-highlight]'))return;if(end<node.length)node.splitText(end);let selected=start?node.splitText(start):node,mark=doc.createElement('mark');styleSummaryMark(mark,kind,style);selected.parentNode.replaceChild(mark,selected);mark.appendChild(selected)})}savedSummaryRange=null;hideSummaryHighlightPopover();persistSummaryIframe();toast(`Grifo ${style.label.toLowerCase()} aplicado`)}catch(e){toast('Selecione um trecho do resumo primeiro')}}
function clearHighlight(){try{if(!savedSummaryRange||savedSummaryRange.collapsed)throw new Error('empty');let doc=$('#summaryFrame').contentDocument,marks=[...doc.querySelectorAll('mark[data-journal-highlight]')].filter(mark=>{try{return savedSummaryRange.intersectsNode(mark)}catch{return false}});if(!marks.length){let node=savedSummaryRange.commonAncestorContainer;let mark=(node.nodeType===1?node:node.parentElement)?.closest?.('mark[data-journal-highlight]');if(mark)marks=[mark]}if(!marks.length)throw new Error('none');marks.forEach(mark=>{let parent=mark.parentNode;while(mark.firstChild)parent.insertBefore(mark.firstChild,mark);mark.remove();parent.normalize()});savedSummaryRange=null;hideSummaryHighlightPopover();persistSummaryIframe();toast('Grifo removido')}catch(e){toast('Toque em um grifo para removê-lo')}}

function summaryFilename(){let s=subj(currentSubject),stage=currentStage==='1'?'primeira-etapa':'segunda-etapa';return `resumo-${normalizeId(s.short)}-${stage}.pdf`}
function openSummaryPrintDialog(){let html=localStorage.getItem(sumKey());if(!html)return toast('Ainda não existe resumo para baixar');let preview=window.open('','_blank');if(!preview)return toast('Permita pop-ups para salvar o PDF');let doc=new DOMParser().parseFromString(sanitizeSummaryHtml(html),'text/html'),base=doc.createElement('base');base.href=new URL('.',location.href).href;doc.head.prepend(base);doc.title=summaryFilename().replace(/\.pdf$/,'');preview.document.open();preview.document.write('<!DOCTYPE html>'+doc.documentElement.outerHTML);preview.document.close();setTimeout(async()=>{try{await preview.document.fonts?.ready}catch{}preview.focus();preview.print()},500)}
function downloadSummaryPdf(){if(!localStorage.getItem(sumKey()))return toast('Ainda não existe resumo para baixar');toast('Na próxima tela, escolha “Salvar como PDF”.');openSummaryPrintDialog()}

function openSummaryModal(){let s=subj(currentSubject),id=s.docs[currentStage],theme=SUBJECT_THEMES[currentSubject],old=localStorage.getItem(sumKey()),existing=getFlashcards().filter(f=>f.subject===currentSubject&&f.stage===currentStage&&!f.stale).map(f=>({id:f.id,topic:f.topic,type:f.type,question:f.question,answer:f.answer}));
$('#summaryMeta').textContent=`${s.name} · ${currentStage==='1'?'primeira':'segunda'} etapa`;
$('#materialResponse').value='';
$('#summaryPrompt').value=`Leia integralmente minhas anotações neste Google Docs:
https://docs.google.com/document/d/${id}/edit

MATÉRIA: ${s.name}
ETAPA: ${currentStage==='1'?'Primeira':'Segunda'} etapa do semestre
INSTITUIÇÃO: Mackenzie · Direito · 8º semestre
IDENTIDADE FIXA DESTA MATÉRIA: ${theme.name}
CORES OBRIGATÓRIAS: --primary:${theme.primary}; --accent:${theme.accent}; --soft:${theme.soft}; --subject-ink:${theme.ink};

MISSÃO
Crie um material de Direito cumulativo, rigoroso e realmente útil para prova. O resultado deve parecer um caderno editorial premium, e não uma apostila cinza nem uma parede de cards. Entenda e aplique toda a lógica abaixo sem pedir validação intermediária.

REGRA CENTRAL: COMPACTE A LINGUAGEM, NUNCA O CONHECIMENTO.

1 — CONTEÚDO CUMULATIVO
- Leia o documento inteiro.
- Atualize o RESUMO ANTERIOR abaixo; não crie outro documento desconectado.
- Preserve o que continua correto e encaixe as aulas novas no lugar lógico.
- Não omita requisitos, elementos, classificações, exceções, hipóteses, prazos, artigos, competências, efeitos, distinções, jurisprudência ou observações de aula cobradas em prova.
- Não invente professor, período de prova, jurisprudência, artigo ou dado ausente. Se uma informação de capa não estiver nas anotações, simplesmente omita.
- Parágrafos corridos devem ter 3–5 linhas e apenas costurar o raciocínio. Fatos memorizáveis, definições, regras, dados e distinções vão para recursos estruturados.
- Abra o conteúdo com “EM 1 MINUTO” e encerre com “ANTES DA PROVA, LEMBRE”; nenhum deles substitui o desenvolvimento completo.

2 — ESTRUTURA EDITORIAL OBRIGATÓRIA
- Entregue um único HTML5 autocontido, com CSS dentro de <style>, sem JavaScript, imagens, iframes, links externos, @import ou dependências de rede.
- CAPA: instituição e semestre no topo em caixa alta espaçada; nome da matéria em Muthiara grande e branca; “Resumo Completo” ou “Resumo Avançado”; professor em itálico somente se constar nas anotações; 3–4 tags com temas centrais; contexto da etapa no rodapé.
- SUMÁRIO: lista numerada, cada item com âncora funcional para a seção correspondente, círculo numerado e separador fino.
- SEÇÕES: cada seção grande numerada começa com faixa sólida --primary, número em círculo e título branco. Seções se sucedem no fluxo normal da página, separadas por espaçamento generoso — não force quebra de página.
- SUBTÍTULOS: hierarquia inequívoca, sans-serif, negrito e cor --subject-ink. Use no máximo três níveis de título.
- TEXTO: Inter/Arial, tamanho confortável para leitura em tela (equivalente a 15–17px), line-height 1.55–1.7. Use listas somente quando forem mais claras que prosa.
- TABELAS: apenas para comparação com múltiplos atributos; header --primary com texto branco, linhas zebradas; em telas estreitas, a tabela ganha scroll horizontal próprio (nunca a página inteira).
- NOTA DE AULA: itálico, com rótulo “Análise de Aula —” ou “Regra de Ouro Didática —”, sem caixa colorida.

3 — IDENTIDADE VISUAL POR MATÉRIA
- Esta matéria usa SEMPRE a paleta ${theme.name}: --primary:${theme.primary}; --accent:${theme.accent}; --soft:${theme.soft}; --subject-ink:${theme.ink}; --ink:#211C19; --paper:#FFFFFF; --canvas:#ECE8E3.
- Não mude essa paleta em atualizações futuras. Ela identifica a matéria antes mesmo da leitura.
- A cor da matéria é estrutural: gradiente da capa, círculos do sumário, faixas/títulos de seção e cabeçalhos de tabela. Não use a cor da matéria nas caixas semânticas.
- Não use cores aleatórias nem vários gradientes. Não use emoji como decoração; os ícones abaixo são rótulos semânticos e são a única exceção.

4 — CAIXAS SEMÂNTICAS FIXAS EM TODAS AS MATÉRIAS
Cada caixa tem borda lateral de 5px, fundo pastel, ícone + rótulo em caixa alta e texto escuro. Use apenas quando a função semântica existir:
- .box-definicao — 📘 DEFINIÇÃO DOUTRINÁRIA — fundo #EAF4FB, borda #5B93B8.
- .box-atencao — ⚠️ DADO / ATENÇÃO — fundo #DFEEF8, borda #397DA8.
- .box-critico — ⚡ PONTO CRÍTICO — fundo #F1E9FA, borda #8B68B4.
- .box-regra — 🚫 REGRA ABSOLUTA — fundo #FBE8EC, borda #C95B77.
- .box-jurisprudencia — ⚖️ JURISPRUDÊNCIA / CASO — fundo #F0F0F2, borda #73747A; comece pelo nome do caso em negrito.
- .box-distincao — 🔍 DISTINÇÃO CRÍTICA — fundo #E7F4F0, borda #3D8A78; coloque Termo A e Termo B no mesmo quadro.
- Não transforme cada parágrafo em caixa. A cor de cada caixa significa sempre a mesma coisa, independentemente da matéria.

5 — FONTES: NÃO EMBUTA, USE AS DO SITE
As fontes Muthiara, Kathen e Inter já estão carregadas pela página que exibe este resumo. NÃO declare @font-face, NÃO inclua src:url(...) de fonte nenhuma dentro do seu <style>. Apenas referencie os nomes diretamente:
font-family:'Muthiara',cursive; → somente no grande título da capa.
font-family:'Kathen',cursive; → somente em um detalhe manuscrito pequeno.
font-family:'Inter',Arial,sans-serif; → todo o restante.
Se as fontes não carregarem por qualquer motivo, o navegador já cai automaticamente no fallback (cursive/sans-serif) declarado acima — você não precisa e não deve tratar isso.

6 — WEB-FIRST: ESTE RESUMO É UMA PÁGINA, NÃO UM PDF
Este HTML é exibido dentro de um iframe no site e cresce naturalmente com o conteúdo — ele NUNCA é uma simulação de folha A4 impressa. É proibido usar, em qualquer lugar do CSS:
- @page, page:cover, break-before:page, break-after:page, break-inside:avoid ou orphans/widows;
- width:210mm, height:297mm, ou qualquer unidade mm/pt para dimensionar contêineres;
- alturas fixas em vh/vw pensadas para caber "uma tela" ou "uma página";
- qualquer classe ou wrapper que simule uma folha (.page, .sheet, .paper, .cover como página inteira).
A capa é apenas a primeira seção do fluxo normal do documento — um bloco com gradiente/cor de fundo e padding generoso, do tamanho do seu próprio conteúdo, e não uma div de 297mm de altura.
Cada seção grande simplesmente segue a anterior no fluxo normal da página, sem forçar quebra. Use margem/espaçamento (não break-before) para separar seções visualmente.
body e contêineres têm width:100%, max-width:100%, min-width:0. O documento central pode ter max-width:860px no desktop, centralizado, para conforto de leitura — mas no celular ocupa 100% da largura sem zoom, escala ou transform.
Em @media screen and (max-width:760px): reduza padding para 18–24px, títulos com clamp(), remova sombras/raios exagerados, e deixe overflow-x:auto somente no wrapper de cada tabela — nunca na página inteira.
Nunca produza rolagem horizontal na página. Textos longos usam overflow-wrap:anywhere.

7 — IMPRESSÃO (SECUNDÁRIA, NÃO PODE ALTERAR A TELA)
O site tem seu próprio botão de "Salvar PDF" que abre uma janela separada só para imprimir — você não precisa e não deve otimizar o HTML principal para impressão. Se quiser, pode incluir um bloco @media print bem simples e opcional (ex.: esconder um botão, ajustar cor de fundo para não gastar tinta), mas ele nunca deve mudar largura, altura, quebra de página ou remover conteúdo da versão de tela. A versão de tela é a única que importa: não construa o HTML pensando em como ele vai imprimir.

8 — FLASHCARDS SELETIVOS
Não converta cada bullet do resumo em cartão. Flashcard é para recuperação ativa de alto valor, não para duplicar o texto inteiro.
- Gere de 8 a 14 flashcards para a etapa inteira quando houver conteúdo suficiente. Se houver menos pontos de alto valor, gere menos. LIMITE ABSOLUTO: 16.
- Priorize: regra central, conceito que confunde, artigo indispensável, prazo, requisito, exceção, comparação e pegadinha de prova.
- Ignore contexto introdutório, exemplos redundantes, listas óbvias e detalhes que podem ser consultados sem necessidade de memorização.
- Cada cartão deve testar UM alvo de memória. Uma lista fechada de requisitos do mesmo instituto pode ficar em um único cartão; não crie um cartão por item dessa mesma lista.
- Pergunta direta, sem pistas. Resposta corrigível em até quatro linhas. Nada de “explique tudo sobre”.
- Não gere duplicatas semânticas nem versões quase iguais da mesma pergunta.
- IDs devem ser ESTÁVEIS entre atualizações semanais. Para um mesmo fato jurídico, preserve exatamente o mesmo ID já existente abaixo.
- Só crie ID novo para informação realmente nova.
- Formato do ID: ${s.short.toLowerCase()}-${currentStage}-topico-fato-curto, sem acentos e sem espaços.
- Cada cartão deve conter: id, subject="${currentSubject}", stage="${currentStage}", topic, type, question, answer.
- type deve ser um entre: conceito, artigo, prazo, requisito, exceção, comparação, pegadinha, exemplo.

9 — FORMATO FINAL OBRIGATÓRIO
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
setReader('prompt')}
async function copyPrompt(){try{await navigator.clipboard.writeText($('#summaryPrompt').value);toast('Prompt copiado')}catch{toast('Selecione e copie o prompt')}}
function importMaterialResponse(){let raw=$('#materialResponse').value.trim();if(!raw)return toast('Cole a resposta do ChatGPT');let sm=raw.match(/<SUMMARY_HTML>([\s\S]*?)<\/SUMMARY_HTML>/i),fm=raw.match(/<FLASHCARDS_JSON>([\s\S]*?)<\/FLASHCARDS_JSON>/i);if(!sm||!fm)return toast('Não encontrei os dois blocos esperados');let html=sanitizeSummaryHtml(sm[1].trim()),data;try{data=JSON.parse(fm[1].trim())}catch(e){return toast('O JSON dos flashcards está inválido')};if(!/<body[\s>]/i.test(html)||!/<style[\s>]/i.test(html))return toast('O bloco do resumo precisa conter HTML completo e CSS');let source=Array.isArray(data)?data:data.flashcards;if(!Array.isArray(source))return toast('O JSON precisa conter uma lista de flashcards');let cards=source.slice(0,16),ignored=Math.max(0,source.length-cards.length);if(!setLocalItem(sumKey(),html))return;let stats=syncFlashcards(cards,currentSubject,currentStage);renderSubject({resetReader:false});renderSubjects();renderFlashcards();renderHome();openSummaryModal();toast(`Resumo atualizado · ${stats.new} novos · ${stats.updated} mantidos${ignored?` · ${ignored} extras ignorados`:''}`) }

function readArray(key){try{let value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return []}}
function getEvents(){return readArray(evKey)}function setEvents(v){setLocalItem(evKey,JSON.stringify(v))}
function getUpcomingEvents(){let today=todayStr();return getEvents().filter(e=>e.date&&e.date>=today).sort((a,b)=>a.date.localeCompare(b.date))}
function clearEventForm(){$('#evId').value='';$('#evType').value='Prova';$('#evDate').value='';$('#evTitle').value='';$('#evSubject').value=currentSubject||SUBJECTS[0].key;$('#evChecklist').value='';$('#eventModalTitle').textContent='Novo compromisso';$('#deleteEventBtn').style.display='none';}
function openEventModal(date=''){clearEventForm();if(date)$('#evDate').value=date;openModal('eventModal')}
function editEvent(id){let e=getEvents().find(x=>String(x.id)===String(id));if(!e)return;if(e.readOnly){if(e.htmlLink)window.open(e.htmlLink,'_blank','noopener');else toast('Este compromisso vem do Google Agenda e é somente leitura');return}$('#evId').value=e.id;$('#evType').value=e.type;$('#evDate').value=e.date;$('#evTitle').value=e.title;$('#evSubject').value=e.subject;$('#evChecklist').value=(e.checks||[]).map(c=>c.text).join('\n');$('#eventModalTitle').textContent='Editar compromisso';$('#deleteEventBtn').style.display='inline-flex';openModal('eventModal')}
function saveEvent(){let title=$('#evTitle').value.trim(),date=$('#evDate').value;if(!title||!date)return toast('Preencha título e data');let arr=getEvents(),id=Number($('#evId').value)||Date.now(),old=arr.find(x=>x.id===id),lines=$('#evChecklist').value.split('\n').map(x=>x.trim()).filter(Boolean),checks=lines.map(t=>({text:t,done:old?.checks?.find(c=>c.text===t)?.done||false})),obj={id,type:$('#evType').value,date,title,subject:$('#evSubject').value,checks};let pos=arr.findIndex(x=>x.id===id);if(pos>=0)arr[pos]=obj;else arr.push(obj);setEvents(arr);closeModal('eventModal');renderCalendar();renderHome();toast(pos>=0?'Compromisso atualizado':'Compromisso salvo')}
function deleteEvent(){let id=$('#evId').value;if(!id)return;let target=getEvents().find(x=>String(x.id)===String(id));if(target?.readOnly)return toast('Eventos do Google Agenda não podem ser excluídos aqui');setEvents(getEvents().filter(x=>String(x.id)!==String(id)));closeModal('eventModal');renderCalendar();renderHome();toast('Compromisso excluído')}
function toggleCheck(eid,idx){let arr=getEvents(),e=arr.find(x=>String(x.id)===String(eid));if(!e||e.readOnly)return;e.checks[idx].done=!e.checks[idx].done;setEvents(arr);renderCalendar();renderHome();}
function moveMonth(n){calDate=new Date(calDate.getFullYear(),calDate.getMonth()+n,1);renderCalendar()}
function goToCurrentMonth(){calDate=new Date();renderCalendar()}
function renderCalendar(){let y=calDate.getFullYear(),m=calDate.getMonth(),first=new Date(y,m,1),start=(first.getDay()+6)%7,last=new Date(y,m+1,0).getDate(),ev=getEvents();$('#calTitle').textContent=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(calDate);let h=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(x=>`<div class="dow">${x}</div>`).join('');for(let i=0;i<42;i++){let d=i-start+1;if(d<1||d>last){h+='<div class="day outside" aria-hidden="true"></div>';continue}let ds=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,today=todayStr(),dayEvents=ev.filter(e=>e.date===ds),dateLabel=new Intl.DateTimeFormat('pt-BR',{day:'numeric',month:'long',year:'numeric'}).format(new Date(ds+'T12:00')),chips=dayEvents.slice(0,2).map(e=>`<button class="evchip" onclick="event.stopPropagation();editEvent('${escapeHtml(String(e.id))}')" onkeydown="event.stopPropagation()" title="${escapeHtml(e.type)}: ${escapeHtml(e.title)}"><span>${escapeHtml(e.title)}</span></button>`).join(''),more=dayEvents.length>2?`<span class="more-events">+${dayEvents.length-2}</span>`:'';h+=`<div class="day ${ds===today?'today':''} ${dayEvents.length?'has-events':''}" role="button" tabindex="0" aria-label="${escapeHtml(dateLabel)}${dayEvents.length?` · ${dayEvents.length} compromisso(s)`:''}" onclick="openEventModal('${ds}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openEventModal('${ds}')} "><div class="daynum"><b>${d}</b></div>${dayEvents.length?`<div class="day-events">${chips}${more}</div>`:''}</div>`}$('#calGrid').innerHTML=h;renderAgendaList();}
function relativeEventDate(date){let start=new Date(todayStr()+'T12:00'),target=new Date(date+'T12:00'),days=Math.round((target-start)/86400000);if(days===0)return'Hoje';if(days===1)return'Amanhã';if(days<7)return`Em ${days} dias`;return new Intl.DateTimeFormat('pt-BR',{weekday:'long'}).format(target)}
function renderAgendaList(){let arr=getUpcomingEvents(),counter=$('#agendaCount');if(counter)counter.textContent=arr.length;$('#agendaList').innerHTML=arr.length?arr.map(e=>{let id=escapeHtml(String(e.id)),date=new Date(e.date+'T12:00'),month=new Intl.DateTimeFormat('pt-BR',{month:'short'}).format(date).replace('.','').toUpperCase(),source=e.readOnly?`<span class="sync-source">${escapeHtml(e.calendarName||'Google Agenda')}</span>`:'',actions=e.readOnly?`<button class="btn" onclick="editEvent('${id}')">Abrir</button>`:`<button class="btn" onclick="editEvent('${id}')">Editar</button><button class="btn danger" onclick="$('#evId').value='${id}';deleteEvent()">Excluir</button>`,checks=e.readOnly?[]:(e.checks||[]),visible=checks.slice(0,3),remaining=checks.length-visible.length,done=checks.filter(c=>c.done).length;return `<article class="planner-item"><div class="planner-date"><strong>${String(date.getDate()).padStart(2,'0')}</strong><span>${month}</span></div><div class="planner-item-body"><div class="planner-item-top"><span class="planner-when">${relativeEventDate(e.date)}</span><span class="planner-type">${escapeHtml(e.type||'Agenda')}</span>${e.subject?`<span class="planner-subject">${escapeHtml(subj(e.subject)?.short||e.subject)}</span>`:''}${source}</div><h3>${escapeHtml(e.title)}</h3>${checks.length?`<div class="planner-progress"><span>${done}/${checks.length} concluídos</span><i><b style="width:${Math.round(done/checks.length*100)}%"></b></i></div>`:''}${visible.map((c,i)=>`<label class="planner-check"><input type="checkbox" ${c.done?'checked':''} onchange="toggleCheck('${id}',${i})"><span>${escapeHtml(c.text)}</span></label>`).join('')}${remaining?`<div class="planner-more">+ ${remaining} ${remaining===1?'item':'itens'} no checklist</div>`:''}<div class="agenda-actions">${actions}</div></div></article>`}).join(''):'<div class="planner-empty"><span>○</span><strong>Agenda livre por enquanto</strong><small>Adicione provas, trabalhos e entregas para acompanhar tudo aqui.</small><button class="btn primary" onclick="openEventModal()">+ compromisso</button></div>'}
function importGoogleCalendarEvents(events){let manual=getEvents().filter(e=>e.source!=='google-calendar');setEvents([...manual,...events]);renderCalendar();renderHome()}
window.importGoogleCalendarEvents=importGoogleCalendarEvents;

function getFlashcards(){return readArray(fcKey)}function setFlashcards(v){setLocalItem(fcKey,JSON.stringify(v))}
function getFlashcardFilters(){try{return JSON.parse(localStorage.getItem(fcFilterKey)||'{}')}catch{return {}}}
function saveFlashcardFilters(){let filters={subject:$('#fcSubjectFilter')?.value||'',stage:$('#fcStageFilter')?.value||'',type:$('#fcTypeFilter')?.value||'',status:$('#fcStatusFilter')?.value||'',topic:$('#fcTopicFilter')?.value||''};setLocalItem(fcFilterKey,JSON.stringify(filters))}
function restoreFlashcardFilters(){let f=getFlashcardFilters();if($('#fcSubjectFilter'))$('#fcSubjectFilter').value=f.subject||'';if($('#fcStageFilter'))$('#fcStageFilter').value=f.stage||'';if($('#fcStatusFilter'))$('#fcStatusFilter').value=f.status||'';if($('#fcTopicFilter'))$('#fcTopicFilter').value=f.topic||''}
function clearFlashcardFilters(){['fcSubjectFilter','fcStageFilter','fcTypeFilter','fcStatusFilter','fcTopicFilter'].forEach(id=>{if($('#'+id))$('#'+id).value=''});saveFlashcardFilters();renderFlashcards()}
function normalizeId(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function cleanText(value,max=600){return String(value??'').trim().replace(/\s+/g,' ').slice(0,max)}
function syncFlashcards(incoming,subject,stage){let all=getFlashcards(),scope=all.filter(f=>f.subject===subject&&f.stage===stage),other=all.filter(f=>!(f.subject===subject&&f.stage===stage)),byId=new Map(scope.map(f=>[f.id,f])),seen=new Set(),out=[],nNew=0,nUpdated=0;for(let raw of incoming){if(!raw||typeof raw!=='object')continue;let fallback=`${subject}-${stage}-${normalizeId(raw.topic)}-${normalizeId(raw.question||raw.pergunta).slice(0,40)}`,id=normalizeId(raw.id)||fallback;if(!id||seen.has(id))continue;seen.add(id);let old=byId.get(id),base={id,subject,stage,topic:cleanText(raw.topic||'Geral',100),type:cleanText(raw.type||'conceito',40),question:cleanText(raw.question||raw.pergunta,500),answer:cleanText(raw.answer||raw.resposta,900),stale:false};if(!base.question||!base.answer)continue;if(old){out.push({...old,...base,review:old.review||{due:todayStr(),interval:0,streak:0,last:null,lastGrade:null}});nUpdated++}else{out.push({...base,createdAt:new Date().toISOString(),review:{due:todayStr(),interval:0,streak:0,last:null,lastGrade:null}});nNew++}}for(let old of scope){if(!seen.has(old.id))out.push({...old,stale:true})}setFlashcards([...other,...out]);return {new:nNew,updated:nUpdated,stale:out.filter(f=>f.stale).length}}
function cardStatus(f){let r=f.review||{};if(f.stale)return 'stale';if((r.streak||0)>=3)return 'mastered';if(!r.last)return 'new';if((r.due||todayStr())<=todayStr())return 'due';return 'learning'}
function filteredFlashcards(){let s=$('#fcSubjectFilter')?.value||'',st=$('#fcStageFilter')?.value||'',ty=$('#fcTypeFilter')?.value||'',status=$('#fcStatusFilter')?.value||'',topic=($('#fcTopicFilter')?.value||'').toLowerCase();return getFlashcards().filter(f=>(!s||f.subject===s)&&(!st||f.stage===st)&&(!ty||f.type===ty)&&(!status?!f.stale:cardStatus(f)===status)&&(!topic||String(f.topic||'').toLowerCase().includes(topic)))}
function renderFlashcards(){let all=getFlashcards(),active=all.filter(f=>!f.stale),types=[...new Set(active.map(f=>f.type).filter(Boolean))].sort(),sel=$('#fcTypeFilter').value||getFlashcardFilters().type||'';$('#fcTypeFilter').innerHTML='<option value="">Todos os tipos</option>'+types.map(t=>`<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join('');$('#fcTypeFilter').value=types.includes(sel)?sel:'';let due=active.filter(f=>cardStatus(f)==='due').length,nw=active.filter(f=>cardStatus(f)==='new').length,master=active.filter(f=>cardStatus(f)==='mastered').length;$('#fcTotal').textContent=active.length;$('#fcDue').textContent=due;$('#fcNew').textContent=nw;$('#fcMastered').textContent=master;let arr=filteredFlashcards(),labels=[];if($('#fcSubjectFilter').value)labels.push(subj($('#fcSubjectFilter').value)?.short);if($('#fcStageFilter').value)labels.push($('#fcStageFilter').value==='1'?'1ª etapa':'2ª etapa');if($('#fcTypeFilter').value)labels.push($('#fcTypeFilter').value);if($('#fcStatusFilter').value)labels.push($('#fcStatusFilter').selectedOptions[0].textContent);if($('#fcTopicFilter').value)labels.push(`Tópico: ${$('#fcTopicFilter').value}`);$('#activeFcFilters').innerHTML=`<span>${arr.length} ${arr.length===1?'cartão':'cartões'}</span>${labels.map(x=>`<span class="tag rose">${escapeHtml(x)}</span>`).join('')}${!$('#fcStatusFilter').value?'<span class="filter-note">Ativos · arquivados ficam ocultos</span>':''}`;$('#flashList').innerHTML=arr.length?arr.map(f=>{let st=cardStatus(f),r=f.review||{},subject=escapeHtml(subj(f.subject)?.short||f.subject);return `<div class="flash-row"><div><div class="flash-q">${escapeHtml(f.question)}</div><div class="flash-meta"><span class="tag rose">${subject}</span><span class="tag">${f.stage==='1'?'1ª etapa':'2ª etapa'}</span><span class="tag">${escapeHtml(f.topic)}</span><span class="tag">${escapeHtml(f.type)}</span><span class="tag ${st==='mastered'?'good':st==='stale'?'warn':''}">${st==='new'?'novo':st==='due'?'revisar hoje':st==='mastered'?'dominado':st==='stale'?'fora da última atualização':'em estudo'}</span></div><div class="agenda-meta" style="margin-top:.35rem">${r.last?'Última revisão: '+new Date(r.last+'T12:00').toLocaleDateString('pt-BR'):''}${r.due?' · Próxima: '+new Date(r.due+'T12:00').toLocaleDateString('pt-BR'):''}</div></div><button class="btn danger" onclick="deleteFlashcard('${f.id}')">Excluir</button></div>`}).join(''):'<div class="empty">Nenhum flashcard corresponde aos filtros.</div>';renderHome();}
function startStudy(){let arr=filteredFlashcards(),statusFilter=$('#fcStatusFilter').value;if(!statusFilter)arr=arr.filter(f=>['due','new'].includes(cardStatus(f)));arr.sort((a,b)=>{let sa=cardStatus(a),sb=cardStatus(b),rank={due:0,new:1,learning:2,mastered:3,stale:4};return (rank[sa]??9)-(rank[sb]??9)});studyQueue=arr;studyIndex=0;studyRetries=new Set();showStudyCard()}
function showStudyCard(){let host=$('#studyCard'),total=studyQueue.length,remaining=Math.max(total-studyIndex-1,0);if(!total){host.innerHTML='<div class="empty">Nada para revisar hoje. ✦</div>';return}if(studyIndex>=total){host.innerHTML=`<div class="study-progress">${total} de ${total} · faltam 0</div><div class="empty">Sessão concluída. Você revisou ${total} ${total===1?'cartão':'cartões'}. ✦</div>`;renderFlashcards();return}let f=studyQueue[studyIndex];host.innerHTML=`<div class="study-progress">${studyIndex+1} de ${total} · ${remaining===1?'falta':'faltam'} ${remaining}</div><div class="eyebrow">${escapeHtml(subj(f.subject)?.short||f.subject)} · ${escapeHtml(f.topic)} · ${escapeHtml(f.type)}</div><div class="fc-prompt">${escapeHtml(f.question)}</div><button class="btn primary" style="margin:1.2rem auto 0" onclick="revealAnswer()">Mostrar resposta</button><div class="fc-answer" id="fcAnswer">${escapeHtml(f.answer)}</div><div class="rate-row" id="rateRow"><button class="btn rate-bad" onclick="gradeCard('bad')">Não sabia</button><button class="btn rate-mid" onclick="gradeCard('mid')">Quase</button><button class="btn rate-good" onclick="gradeCard('good')">Sabia</button></div>`}
function revealAnswer(){$('#fcAnswer').classList.add('show');$('#rateRow').classList.add('show')}
function gradeCard(grade){let f=studyQueue[studyIndex],all=getFlashcards(),c=all.find(x=>x.id===f.id);if(!c)return;let r=c.review||{due:todayStr(),interval:0,streak:0},failedToday=r.lastFailed===todayStr();if(grade==='bad'){r.interval=1;r.streak=0;r.lastFailed=todayStr();r.lapses=(r.lapses||0)+1;if(!studyRetries.has(f.id)){studyRetries.add(f.id);studyQueue.push(f)}}else if(grade==='mid'){r.interval=failedToday?1:Math.max(2,Math.round((r.interval||1)*1.4));r.streak=failedToday?0:Math.max(0,(r.streak||0)-1)}else{r.interval=failedToday?1:Math.max(3,Math.round((r.interval||1)*2.3));r.streak=failedToday?0:(r.streak||0)+1}r.interval=Math.min(r.interval,90);r.last=todayStr();r.lastGrade=grade;let d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+r.interval);r.due=localDateKey(d);c.review=r;setFlashcards(all);studyIndex++;showStudyCard();renderHome()}
function deleteFlashcard(id){setFlashcards(getFlashcards().filter(f=>f.id!==id));renderFlashcards();toast('Flashcard excluído')}
function exportFlashcards(){let data={exportedAt:new Date().toISOString(),flashcards:filteredFlashcards()},blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='flashcards-study-journal.json';a.click();URL.revokeObjectURL(a.href)}

function getErrors(){return readArray(errKey)}function setErrors(v){setLocalItem(errKey,JSON.stringify(v))}
function openErrorModal(id=null){$('#errId').value='';$('#errSubject').value=currentSubject||SUBJECTS[0].key;$('#errTopic').value='';$('#errReason').value='Não sabia o conteúdo';$('#errExplanation').value='';$('#deleteErrorBtn').style.display='none';$('#errorModalTitle').textContent='Nova questão errada';if(id){let e=getErrors().find(x=>x.id===id);if(e){$('#errId').value=e.id;$('#errSubject').value=e.subject;$('#errTopic').value=e.topic;$('#errReason').value=e.reason;$('#errExplanation').value=e.explanation;$('#deleteErrorBtn').style.display='inline-flex';$('#errorModalTitle').textContent='Editar questão errada'}}openModal('errorModal')}
function saveError(){let topic=$('#errTopic').value.trim(),ex=$('#errExplanation').value.trim();if(!topic||!ex)return toast('Preencha tópico e explicação');let arr=getErrors(),id=Number($('#errId').value)||Date.now(),old=arr.find(x=>x.id===id),obj={id,subject:$('#errSubject').value,topic,reason:$('#errReason').value,explanation:ex,mastered:old?.mastered||false,createdAt:old?.createdAt||new Date().toISOString()};let i=arr.findIndex(x=>x.id===id);if(i>=0)arr[i]=obj;else arr.unshift(obj);setErrors(arr);closeModal('errorModal');renderErrors();renderHome();toast(i>=0?'Erro atualizado':'Erro salvo')}
function deleteError(){let id=Number($('#errId').value);setErrors(getErrors().filter(e=>e.id!==id));closeModal('errorModal');renderErrors();renderHome();toast('Erro excluído')}
function toggleErrorMastered(id){let arr=getErrors(),e=arr.find(x=>x.id===id);if(e)e.mastered=!e.mastered;setErrors(arr);renderErrors();renderHome()}
function renderErrors(){let s=$('#errSubjectFilter').value,topic=$('#errTopicFilter').value.toLowerCase(),arr=getErrors().filter(e=>(!s||e.subject===s)&&(!topic||String(e.topic||'').toLowerCase().includes(topic)));$('#errorList').innerHTML=arr.length?arr.map(e=>`<div class="error-row"><div class="error-head"><div><b>${escapeHtml(e.topic)}</b><div class="flash-meta"><span class="tag rose">${escapeHtml(subj(e.subject)?.short||'')}</span><span class="tag">${escapeHtml(e.reason)}</span>${e.mastered?'<span class="tag good">aprendi</span>':''}</div></div></div><div class="error-text">${escapeHtml(e.explanation)}</div><div class="error-actions"><button class="btn" onclick="openErrorModal(${Number(e.id)})">Editar</button><button class="btn" onclick="toggleErrorMastered(${Number(e.id)})">${e.mastered?'Voltar para ativos':'✓ Aprendi'}</button><button class="btn danger" onclick="$('#errId').value='${Number(e.id)}';deleteError()">Excluir</button></div></div>`).join(''):'<div class="empty">Nenhuma questão errada cadastrada.</div>'}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}

function renderHome(){let events=getUpcomingEvents(),fc=getFlashcards();$('#homeCount').textContent=events.length;$('#homeAgenda').innerHTML=events.length?events.slice(0,5).map(e=>`<div class="agenda-item"><b>${escapeHtml(e.title)}</b><div class="agenda-meta">${new Date(e.date+'T12:00').toLocaleDateString('pt-BR')} · ${escapeHtml(e.type)} · ${subj(e.subject)?.short||''}</div></div>`).join(''):'<div class="empty">Nenhum compromisso próximo.</div>';$('#homeDue').textContent=fc.filter(f=>cardStatus(f)==='due').length;$('#homeNew').textContent=fc.filter(f=>cardStatus(f)==='new').length;$('#homeErrors').textContent=getErrors().filter(e=>!e.mastered).length}


async function saveAvatar(input){
  const file=input.files&&input.files[0];
  if(!file)return;
  if(!file.type.startsWith('image/'))return toast('Escolha uma imagem válida');
  if(file.size>12*1024*1024)return toast('Escolha uma imagem de até 12 MB');
  const url=URL.createObjectURL(file),image=new Image();
  try{
    await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;image.src=url});
    const size=320,side=Math.min(image.naturalWidth,image.naturalHeight),sx=(image.naturalWidth-side)/2,sy=(image.naturalHeight-side)/2,canvas=document.createElement('canvas');
    canvas.width=size;canvas.height=size;
    const context=canvas.getContext('2d');context.fillStyle='#FAF8F5';context.fillRect(0,0,size,size);context.drawImage(image,sx,sy,side,side,0,0,size,size);
    if(setLocalItem('msj7-avatar',canvas.toDataURL('image/jpeg',.84))){loadAvatar();toast('Foto atualizada')}
  }catch(error){console.error(error);toast('Não consegui processar essa foto')}
  finally{URL.revokeObjectURL(url);input.value=''}
}
function loadAvatar(){
  const data=localStorage.getItem('msj7-avatar'),btn=$('#avatarBtn'),img=$('#avatarImg');
  if(data&&btn&&img){img.src=data;btn.classList.add('has-photo')}
  else if(btn){btn.classList.remove('has-photo')}
}

const _driveFrame=document.getElementById('driveFrame');
if(_driveFrame)_driveFrame.addEventListener('load',()=>{_driveFrame.classList.add('loaded');_driveFrame.parentElement?.classList.add('is-loaded')});

$('.reader-tabs')?.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight'].includes(event.key))return;let tabs=$$('.reader-tab'),current=tabs.indexOf(document.activeElement);if(current<0)return;event.preventDefault();let next=tabs[(current+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];next.focus();next.click()});
window.addEventListener('resize',hideSummaryHighlightPopover);
document.addEventListener('pointerdown',event=>{if(!event.target.closest?.('#summaryHighlightPopover')&&event.target!==$('#summaryFrame'))hideSummaryHighlightPopover()});

let _viewerScroll={x:0,y:0,frameTop:0};
function getViewerBackdrop(){
  let bd=$('#viewerBackdrop');
  if(!bd){bd=document.createElement('div');bd.id='viewerBackdrop';bd.className='viewer-backdrop';bd.setAttribute('aria-hidden','true');bd.addEventListener('click',()=>{const open=$('.viewer-fullscreen');if(open){const kind=open.id==='summaryPane'?'summary':'notes';toggleViewerFullscreen(kind)}});document.body.appendChild(bd)}
  return bd;
}
function toggleViewerFullscreen(kind){
  const pane=kind==='notes'?($('#notesPane')||$('.notes-pane')):($('#summaryPane')||$('.summary-pane'));
  if(!pane)return;
  const opening=!pane.classList.contains('viewer-fullscreen');
  const bd=getViewerBackdrop();
  if(opening){
    _viewerScroll={x:window.scrollX,y:window.scrollY,frameTop:pane.querySelector('iframe')?.scrollTop||0};
    $$('.viewer-fullscreen').forEach(x=>x.classList.remove('viewer-fullscreen'));
    pane.classList.add('viewer-fullscreen');
    document.body.classList.add('viewer-open');
    bd.classList.add('show');
  }else{
    pane.classList.remove('viewer-fullscreen');
    document.body.classList.remove('viewer-open');
    bd.classList.remove('show');
    const savedX=_viewerScroll.x,savedY=_viewerScroll.y,savedFrameTop=_viewerScroll.frameTop,frame=pane.querySelector('iframe');
    requestAnimationFrame(()=>{window.scrollTo(savedX,savedY);if(frame)frame.scrollTop=savedFrameTop});
  }
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&activeModal){closeModal(activeModal.id);return}
  if(e.key==='Tab'&&activeModal){let focusable=[...activeModal.querySelectorAll('button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),a[href]')].filter(el=>el.offsetParent!==null);if(focusable.length){let first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}
  if(e.key==='Escape'){
    const open=$('.viewer-fullscreen');
    if(open){const kind=open.id==='summaryPane'?'summary':'notes';toggleViewerFullscreen(kind)}
  }
});

window.addEventListener('journal:cloud-updated',()=>{loadAvatar();renderSubjects();renderCalendar();renderFlashcards();renderErrors();renderHome()});
renderGreeting();initSubjects();loadAvatar();renderCalendar();renderFlashcards();renderErrors();showView('home');

