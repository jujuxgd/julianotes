const SUBJECTS=[{"key": "dpt", "name": "Direito Processual do Trabalho", "short": "DPT", "docs": {"1": "18LI2DrdzGho_3DEFZ_ROZHV51qGGaS9UXh43Yfa4tiY", "2": "1D4nLg9cglxKzhnLt1A3xfSH39ihqT11Rz17GqvcFWxI"}}, {"key": "tgot", "name": "Teoria Geral da Obrigação Tributária", "short": "TGOT", "docs": {"1": "1ukUJjwfcPssjPeN5L44iO6ZuUwFHiKESL_ja1FLD-68", "2": "1KoWl8eQ9aBPfXE0gLVFWF6d0V82mFfOKFnGHlc76ueM"}}, {"key": "dec", "name": "Direito Econômico e Concorrencial", "short": "DEC", "docs": {"1": "1BUHEFHI7efE8UEd6Kv3XDgUjTiCBnrDvS_Jx2-virTQ", "2": "1dJ45VFE89xjKi6tXP_-X2JxOzmQHeV9AKdlHoq7RFk0"}}, {"key": "dss", "name": "Direito da Seguridade Social", "short": "DSS", "docs": {"1": "1Nm554dsvS-ZuTIRmulmV5SR8QbfmQNV0JNCPyQmIeIc", "2": "1jRPyNJX6mTGCDZbj_VadROItccVrnmxYjfHzjvvUwKY"}}, {"key": "rebi", "name": "Relações Estatais, Bens e Intervenções", "short": "REBI", "docs": {"1": "1uUUigWIRWbwuJ_MFj5__A9yt97o1NksCJ7u2DY8nPUE", "2": "1GXLY0G2BKnNZ8-_zmTYvQA8w2tWaGDRleQYMiQluCbk"}}, {"key": "etica", "name": "Ética Profissional", "short": "Ética", "docs": {"1": "1HlsXmCxtTFXeh_n9QziKWTeduF4ezXxWHR1SoS1_FHc", "2": "1wiOqh_AS5l7XtWQwZotPAZpGlmXYUgwDEW8unlLmk2o"}}, {"key": "dde", "name": "Direito Digital Eletrônico", "short": "DDE", "docs": {"1": "1sAI1jxgv3QJhE2lwpsJcKj9UeBE9eXzWmu0Wj9qZ9Fo", "2": "12QjQI8qllSNvf-QLrP7XMLjrhWuxrHkQ4gk8YjscbY0"}}, {"key": "di", "name": "Direito da Inovação", "short": "DI", "docs": {"1": "1Y89CJwUbgcmGMMn2s95D-eK2iJsOBGJGTdTDzDz2n2Y", "2": "1GVhAxS_RZq7KDtQfG-Huk3p5Et3wDid069UXf-GvgWU"}}, {"key": "ajt", "name": "Prática Extensionista: Acesso à Justiça do Trabalho", "short": "AJT", "docs": {"1": "14RpF84SEwBWnxvj8Fw6iFh-ZsVAc66AjY69BYIkC1uM", "2": "1pCpHc78qnpJPCYQ1NxcN2f0s7flkH2BrZonV7wdQUq0"}}, {"key": "petss", "name": "Prática Extensionista: Temas de Seguridade", "short": "PETSS", "docs": {"1": "1CIhNd-F_dmT4IICLfPBtvCFvnIW77YXJH7I7btJtDqE", "2": "1WdmLP6wBirGastfD7omY33_H1G9Obvfvky69DSFoIiQ"}}];
const SUBJECT_THEMES={
  dpt:{name:'pink bebê',primary:'#C85A8C',accent:'#F3C4DA',soft:'#FCEBF3',ink:'#7A2E4F'},
  tgot:{name:'lilás rosado',primary:'#A968B8',accent:'#CFABD7',soft:'#F4ECF6',ink:'#593561'},
  dec:{name:'azul bebê',primary:'#3E80B0',accent:'#B7DAF3',soft:'#EAF4FC',ink:'#2A5580'},
  dss:{name:'verde turquesa',primary:'#2C9689',accent:'#A9E0D8',soft:'#E6F7F4',ink:'#1F5F58'},
  rebi:{name:'pink choque',primary:'#D13E7C',accent:'#F3B0CC',soft:'#FCE9F0',ink:'#7A2649'},
  etica:{name:'amarelo pastel',primary:'#B08228',accent:'#F7DFA0',soft:'#FDF5E2',ink:'#5A4212'},
  dde:{name:'lavanda',primary:'#8267D0',accent:'#D8CDF5',soft:'#F3EFFC',ink:'#4E3F86'},
  di:{name:'verde menta',primary:'#33A17E',accent:'#B0E8D4',soft:'#E9FAF3',ink:'#256652'},
  ajt:{name:'coral pastel',primary:'#D6725F',accent:'#F6C9BE',soft:'#FDEEEA',ink:'#7A3A2E'},
  petss:{name:'ciano turquesa',primary:'#2896A8',accent:'#A6E1EA',soft:'#E6F8FA',ink:'#1B5D68'}
};
const RESUMO_THEMES={
  dpt:{name:'pink bebê',primary:'#D37A9A',accent:'#F3C8D8',soft:'#FCEDF3',ink:'#AB3C64'},
  tgot:{name:'lilás rosado',primary:'#8A6EA7',accent:'#D7C7E7',soft:'#F0EAF7',ink:'#57446B'},
  dec:{name:'azul bebê',primary:'#90BEE0',accent:'#C6E1F5',soft:'#EDF6FD',ink:'#438FC7'},
  dss:{name:'verde turquesa',primary:'#2A9D8F',accent:'#76EADC',soft:'#9FF4EA',ink:'#174F49'},
  rebi:{name:'pink choque',primary:'#FF1493',accent:'#FFADD9',soft:'#FFE0F1',ink:'#AB025D'},
  di:{name:'verde menta',primary:'#81C784',accent:'#CCF0CE',soft:'#EFFBEF',ink:'#489A4B'},
  ajt:{name:'coral pastel',primary:'#D97A3E',accent:'#F8D1B8',soft:'#FEEFE5',ink:'#924B1F'}
};
const SUMMARY_HIGHLIGHTS={
  pink:{label:'Rosa',bg:'#FFD9E1',text:'#7A2E44'},
  purple:{label:'Lilás',bg:'#E6D6FF',text:'#4E3480'},
  blue:{label:'Azul',bg:'#CDEBFB',text:'#245776'},
  mint:{label:'Verde Menta',bg:'#C7F6DC',text:'#215F41'},
  yellow:{label:'Amarelo',bg:'#FFF6B0',text:'#5F5213'},
  peach:{label:'Pêssego',bg:'#FFDEC2',text:'#7A4416'}
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

function showView(v){hideSummaryHighlightPopover();$$('.view').forEach(x=>{let active=x.id===v;x.classList.toggle('active',active);x.setAttribute('aria-hidden',String(!active))});$$('.nav-link[data-view]').forEach(x=>{let active=x.dataset.view===v;x.classList.toggle('active',active);if(active)x.setAttribute('aria-current','page');else x.removeAttribute('aria-current')});$('.topbar').classList.toggle('home-topbar',v==='home');$('#crumb').textContent=titles[v][0];$('#title').innerHTML=v==='subjectDetail'?subj(currentSubject).name:titles[v][1];if(innerWidth<=768)closeSidebar();if(v==='subjects')renderSubjects();if(v==='calendar')renderCalendar();if(v==='flashcards')renderFlashcards();if(v==='errors')renderErrors();renderHome();saveLastRoute(v)}
const lastRouteKey='msj7-last-route';
function saveLastRoute(v){try{let route={view:v};if(v==='subjectDetail'){route.subject=currentSubject;route.stage=currentStage}localStorage.setItem(lastRouteKey,JSON.stringify(route))}catch(e){}}
function restoreLastRoute(){try{let raw=localStorage.getItem(lastRouteKey);if(!raw)return showView('home');let route=JSON.parse(raw);if(route.view==='subjectDetail'&&route.subject&&subj(route.subject)){openSubject(route.subject,route.stage==='2'?'2':'1');return}if(route.view&&titles[route.view]){showView(route.view);return}showView('home')}catch(e){showView('home')}}
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
  $('#matGrid').innerHTML=SUBJECTS.map(s=>{let h1=localStorage.getItem(`msj7-summary::${s.key}::1`),h2=localStorage.getItem(`msj7-summary::${s.key}::2`),fc=getFlashcards().filter(f=>f.subject===s.key&&!f.stale).length,done=[h1,h2].filter(Boolean).length;
    return `<article class="mat-card" role="button" tabindex="0" aria-label="Abrir ${escapeHtml(s.name)}" onclick="openSubject('${s.key}','1')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openSubject('${s.key}','1')}"><div class="mat-header"><span class="mat-badge">${s.short}</span><span class="mat-info"><span class="mat-name">${s.name}</span><span class="mat-sub">${done}/2 resumos salvos · ${fc} flashcards</span></span><span class="chev" aria-hidden="true">›</span></div></article>`}).join('');
}
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
function injectSummaryFonts(doc){if(!doc?.head||doc.querySelector('#journal-fonts'))return;try{let style=doc.createElement('style');style.id='journal-fonts';let fonts=typeof JOURNAL_FONTS!=='undefined'?JOURNAL_FONTS:null;style.textContent=fonts?`@font-face{font-family:'Muthiara';src:url('${fonts.Muthiara}') format('opentype');font-display:swap}@font-face{font-family:'Kathen';src:url('${fonts.Kathen}') format('opentype');font-display:swap}@font-face{font-family:'Inter';src:url('${fonts.Inter}') format('woff2');font-weight:100 900;font-display:swap}`:'';doc.head.prepend(style)}catch(e){}}
function prepareSummaryDocument(){try{let doc=$('#summaryFrame').contentDocument;if(!doc?.head||!doc.body)return;injectSummaryFonts(doc);let meta=doc.querySelector('meta[name="viewport"]');if(!meta){meta=doc.createElement('meta');meta.name='viewport';doc.head.prepend(meta)}meta.content='width=device-width, initial-scale=1';if(!doc.querySelector('#journal-reader-fix')){let style=doc.createElement('style');style.id='journal-reader-fix';style.textContent=`html,body{max-width:100%;overflow-x:hidden}img,svg{max-width:100%;height:auto}table{max-width:100%}*{box-sizing:border-box}@media screen and (max-width:760px){html,body{width:100%!important;min-width:0!important;max-width:100%!important;overflow-x:hidden!important}body{margin:0!important;zoom:1!important;transform:none!important}body>[data-journal-fit-mobile],.page,.sheet,.paper,.document-page,.summary-page,.cover{box-sizing:border-box!important;width:100%!important;min-width:0!important;max-width:100%!important;margin-left:0!important;margin-right:0!important;border-radius:0!important;box-shadow:none!important}.page,.sheet,.paper,.document-page,.summary-page{padding:clamp(18px,5.5vw,30px)!important}.cover{min-height:100svh!important;height:auto!important;padding:clamp(24px,7vw,42px)!important}table{display:block!important;width:100%!important;max-width:100%!important;overflow-x:auto!important;-webkit-overflow-scrolling:touch}pre,code{white-space:pre-wrap!important;overflow-wrap:anywhere}h1,h2,h3,p,li,td,th{overflow-wrap:anywhere}}`;doc.head.appendChild(style)}[...doc.body.children].filter(el=>!['SCRIPT','STYLE'].includes(el.tagName)).forEach(el=>el.dataset.journalFitMobile='true')}catch(e){}}
function hideSummaryHighlightPopover(){let popover=$('#summaryHighlightPopover');if(popover)popover.classList.remove('visible')}
function showSummaryHighlightPopover(range){let popover=$('#summaryHighlightPopover'),frame=$('#summaryFrame');if(!popover||!frame)return;let rect=range.getBoundingClientRect(),frameRect=frame.getBoundingClientRect(),left=frameRect.left+rect.left+rect.width/2,top=frameRect.top+rect.top-10;popover.classList.add('visible');let width=popover.offsetWidth||190,height=popover.offsetHeight||42;popover.style.left=`${Math.max(10,Math.min(innerWidth-width-10,left-width/2))}px`;popover.style.top=`${Math.max(10,top-height)}px`}
function bindSummarySelection(){try{prepareSummaryDocument();let doc=$('#summaryFrame').contentDocument;if(doc.__journalSelectionBound)return;doc.__journalSelectionBound=true;let save=()=>{let sel=doc.getSelection();if(sel&&sel.rangeCount&&!sel.isCollapsed){savedSummaryRange=sel.getRangeAt(0).cloneRange();showSummaryHighlightPopover(savedSummaryRange)}else hideSummaryHighlightPopover()};doc.addEventListener('mouseup',save);doc.addEventListener('keyup',save);doc.addEventListener('touchend',()=>setTimeout(save,120));doc.addEventListener('scroll',hideSummaryHighlightPopover,true);doc.addEventListener('click',event=>{let anchor=event.target.closest?.('a[href^="#"]');if(anchor){event.preventDefault();let id=anchor.getAttribute('href').slice(1);if(id){let target=doc.getElementById(id)||doc.querySelector(`[name="${CSS.escape(id)}"]`);target?.scrollIntoView({behavior:'smooth',block:'start'})}return}let mark=event.target.closest?.('mark[data-journal-highlight]');if(!mark)return;let range=doc.createRange();range.selectNodeContents(mark);savedSummaryRange=range;showSummaryHighlightPopover(range)});}catch(e){}}
function persistSummaryIframe(){try{let doc=$('#summaryFrame').contentDocument,clone=doc.documentElement.cloneNode(true);clone.querySelector('#journal-reader-fix')?.remove();clone.querySelectorAll('[data-journal-fit-mobile]').forEach(el=>el.removeAttribute('data-journal-fit-mobile'));setLocalItem(sumKey(),sanitizeSummaryHtml('<!DOCTYPE html>'+clone.outerHTML));}catch(e){}}
function selectedTextSlices(range,doc){let root=range.commonAncestorContainer.nodeType===Node.TEXT_NODE?range.commonAncestorContainer.parentNode:range.commonAncestorContainer,walker=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT),slices=[],node;while(node=walker.nextNode()){if(!node.data.trim())continue;try{if(!range.intersectsNode(node))continue}catch{continue}let start=node===range.startContainer?range.startOffset:0,end=node===range.endContainer?range.endOffset:node.length;if(start<end)slices.push({node,start,end})}return slices}
function styleSummaryMark(mark,kind,style){mark.dataset.journalHighlight=kind;mark.dataset.highlightLabel=style.label;mark.title='Toque para alterar ou remover o grifo';mark.style.cssText=`background:${style.bg};color:${style.text};border-radius:2px;padding:0 1px;box-shadow:inset 0 -2px 0 ${style.text}66;box-decoration-break:clone;-webkit-box-decoration-break:clone`}
function applySemanticHighlight(kind){let style=SUMMARY_HIGHLIGHTS[kind];try{if(!style||!savedSummaryRange||savedSummaryRange.collapsed)throw new Error('empty');let doc=$('#summaryFrame').contentDocument,existing=[...doc.querySelectorAll('mark[data-journal-highlight]')].filter(mark=>{try{return savedSummaryRange.intersectsNode(mark)}catch{return false}});if(existing.length)existing.forEach(mark=>styleSummaryMark(mark,kind,style));else{let slices=selectedTextSlices(savedSummaryRange,doc);if(!slices.length)throw new Error('empty');slices.reverse().forEach(({node,start,end})=>{if(!node.parentNode||node.parentElement?.closest('mark[data-journal-highlight]'))return;if(end<node.length)node.splitText(end);let selected=start?node.splitText(start):node,mark=doc.createElement('mark');styleSummaryMark(mark,kind,style);selected.parentNode.replaceChild(mark,selected);mark.appendChild(selected)})}savedSummaryRange=null;hideSummaryHighlightPopover();persistSummaryIframe();toast(`Grifo ${style.label.toLowerCase()} aplicado`)}catch(e){toast('Selecione um trecho do resumo primeiro')}}
function clearHighlight(){try{if(!savedSummaryRange||savedSummaryRange.collapsed)throw new Error('empty');let doc=$('#summaryFrame').contentDocument,marks=[...doc.querySelectorAll('mark[data-journal-highlight]')].filter(mark=>{try{return savedSummaryRange.intersectsNode(mark)}catch{return false}});if(!marks.length){let node=savedSummaryRange.commonAncestorContainer;let mark=(node.nodeType===1?node:node.parentElement)?.closest?.('mark[data-journal-highlight]');if(mark)marks=[mark]}if(!marks.length)throw new Error('none');marks.forEach(mark=>{let parent=mark.parentNode;while(mark.firstChild)parent.insertBefore(mark.firstChild,mark);mark.remove();parent.normalize()});savedSummaryRange=null;hideSummaryHighlightPopover();persistSummaryIframe();toast('Grifo removido')}catch(e){toast('Toque em um grifo para removê-lo')}}

function summaryFilename(){let s=subj(currentSubject),stage=currentStage==='1'?'primeira-etapa':'segunda-etapa';return `resumo-${normalizeId(s.short)}-${stage}.pdf`}
function injectPrintPageRule(doc){if(!doc?.head||doc.querySelector('#journal-print-rule'))return;try{let style=doc.createElement('style');style.id='journal-print-rule';style.textContent='@media print{@page{size:auto;margin:12mm}}';doc.head.appendChild(style)}catch(e){}}
function openSummaryPrintDialog(){let html=localStorage.getItem(sumKey());if(!html)return toast('Ainda não existe resumo para baixar');let preview=window.open('','_blank');if(!preview)return toast('Permita pop-ups para salvar o PDF');let doc=new DOMParser().parseFromString(sanitizeSummaryHtml(html),'text/html'),base=doc.createElement('base');base.href=new URL('.',location.href).href;doc.head.prepend(base);injectSummaryFonts(doc);injectPrintPageRule(doc);doc.title=summaryFilename().replace(/\.pdf$/,'');preview.document.open();preview.document.write('<!DOCTYPE html>'+doc.documentElement.outerHTML);preview.document.close();setTimeout(async()=>{try{await preview.document.fonts?.ready}catch{}preview.focus();preview.print()},500)}
function downloadSummaryPdf(){if(!localStorage.getItem(sumKey()))return toast('Ainda não existe resumo para baixar');toast('Na próxima tela, escolha “Salvar como PDF”.');openSummaryPrintDialog()}
function clearSummary(){if(!localStorage.getItem(sumKey()))return toast('Já não há resumo salvo nesta etapa');if(!confirm('Apagar o resumo salvo desta etapa? Isso não apaga os flashcards, mas na próxima geração o Claude vai começar do zero em vez de atualizar o antigo.'))return;localStorage.removeItem(sumKey());$('#materialResponse').value='';renderSubject({resetReader:false});renderSubjects();renderHome();toast('Resumo apagado')}

function openSummaryModal(){let s=subj(currentSubject),id=s.docs[currentStage],theme=RESUMO_THEMES[currentSubject]||SUBJECT_THEMES[currentSubject],old=localStorage.getItem(sumKey()),existing=getFlashcards().filter(f=>f.subject===currentSubject&&f.stage===currentStage&&!f.stale).map(f=>({id:f.id,topic:f.topic,type:f.type,question:f.question,answer:f.answer}));
$('#summaryMeta').textContent=`${s.name} · ${currentStage==='1'?'primeira':'segunda'} etapa`;
$('#materialResponse').value='';
$('#summaryPrompt').value=`FONTE PRINCIPAL DAS ANOTAÇÕES
Leia integralmente minhas anotações diretamente neste Google Docs:
${`https://docs.google.com/document/d/${id}/edit`}
Este Google Docs é a fonte original e cumulativa da matéria e será atualizado semanalmente com novas aulas. Sempre consulte o documento inteiro antes de gerar a nova versão.

COMO LER O GOOGLE DOCS: primeiro verifique se você tem um conector/ferramenta do Google Drive ou Google Docs disponível nesta conversa (procure por ferramentas como "Google Drive: read_file_content" ou equivalente) e use-o para ler o arquivo pelo ID do documento (a parte entre /d/ e /edit na URL acima). NÃO tente abrir o link direto no navegador nem usar apenas busca/fetch de página como primeira tentativa — a página do Google Docs exige JavaScript e o fetch comum só traz um preview truncado, não o conteúdo integral. Só se você não tiver nenhum conector do Google Drive/Docs disponível, ou se ele falhar mesmo depois de tentado, é que você deve recorrer a outra forma de leitura.
Se mesmo assim você não conseguir acessar ou ler integralmente o Google Docs, não gere o resumo com base apenas no RESUMO ANTERIOR. Avise-me que não conseguiu acessar a fonte original e peça que eu forneça o conteúdo por outro meio.

MATÉRIA: ${s.name}
ETAPA: ${currentStage==='1'?'Primeira':'Segunda'} etapa do semestre
INSTITUIÇÃO: Mackenzie · Direito · 8º semestre
IDENTIDADE FIXA DESTA MATÉRIA: ${theme.name}
CORES OBRIGATÓRIAS: --primary:${theme.primary}; --accent:${theme.accent}; --soft:${theme.soft}; --subject-ink:${theme.ink};

MISSÃO
Crie um material de Direito cumulativo, rigoroso e realmente útil para prova. O resultado deve parecer um caderno editorial premium — texto que FLUI como se um bom aluno tivesse escrito à mão, não uma apostila cinza nem uma parede de cards nem uma planilha de glossário. Aplique toda a lógica abaixo diretamente, sem me perguntar se pode prosseguir.

REGRA CENTRAL: COMPACTE A LINGUAGEM, NUNCA O CONHECIMENTO — E NUNCA A LINGUAGEM EM TABELA DE GLOSSÁRIO. Prosa explica, recurso estruturado reforça; um nunca substitui o outro por inteiro.

1 — CONTEÚDO CUMULATIVO
- "Atualizar" o RESUMO ANTERIOR é sobre CONTEÚDO (texto, tópicos, artigos novos), NUNCA sobre a estrutura/CSS. Você é PROIBIDO de copiar/colar o <style> ou o esqueleto de HTML do RESUMO ANTERIOR: gere o <style> e a estrutura inteira do zero, seguindo item por item a seção 2 (ESTRUTURA EDITORIAL OBRIGATÓRIA) abaixo, mesmo que o RESUMO ANTERIOR já pareça "pronto" ou tenha uma estrutura diferente da descrita ali — se o RESUMO ANTERIOR estiver em desacordo com as regras abaixo (cores, hero, cards etc.), corrija na nova versão, não repita o erro só porque já estava lá.
- Leia integralmente o Google Docs indicado em FONTE PRINCIPAL DAS ANOTAÇÕES. Compare seu conteúdo atual com o RESUMO ANTERIOR e incorpore todo conteúdo novo nos pontos logicamente adequados.
- Atualize o RESUMO ANTERIOR abaixo; não crie outro documento desconectado.
- Preserve o que continua correto e encaixe as aulas novas no lugar lógico.
- Não omita requisitos, elementos, classificações, exceções, hipóteses, prazos, artigos, competências, efeitos, distinções, jurisprudência ou observações de aula cobradas em prova.
- Não invente professor, período de prova, jurisprudência, artigo ou dado ausente. Se uma informação de capa não estiver nas anotações, simplesmente omita.
- ESCRITA: o texto precisa FLUIR como um caderno bem escrito, não como uma planilha de glossário. Cada seção abre com 1–2 parágrafos corridos (3–5 linhas) que explicam o instituto com prosa real — contexto, lógica, encadeamento — antes de qualquer recurso estruturado. Os recursos estruturados (caixas, tabelas, listas) COMPLEMENTAM a prosa, nunca a substituem inteira. Nunca converta uma seção inteira em lista de bullets soltos ou tabela de duas colunas tipo glossário — isso lê como flashcard impresso, não como resumo.
- Fatos memorizáveis, definições, regras, dados e distinções pontuais vão para recursos estruturados (caixas semânticas, listas curtas dentro do texto), mas SEMPRE ancorados a um parágrafo de prosa que os introduz — nunca soltos um atrás do outro sem transição.
- Abra o conteúdo com “EM 1 MINUTO” e encerre com “ANTES DA PROVA, LEMBRE”; nenhum deles substitui o desenvolvimento completo. Esses dois blocos usam padding vertical contido (16–24px no topo, não mais que isso) entre a borda do card e o título — nada de espaço vazio grande acima do título "EM 1 MINUTO" ou "ANTES DA PROVA, LEMBRE".

2 — ESTRUTURA EDITORIAL OBRIGATÓRIA — CSS REAL DO MODELO DE REFERÊNCIA, COPIE QUASE LITERALMENTE
Entregue um único HTML5 autocontido, com CSS dentro de <style>, sem JavaScript, imagens, iframes, links externos, @import ou dependências de rede.
NADA DE PARÁFRASE: abaixo está o CSS de verdade, testado, do modelo de referência (mackenzie-study-journal), já com os nomes de classe e variáveis que você deve usar. Isso não é uma sugestão de estilo pra você reinterpretar — é o CSS que você copia para dentro do seu <style>, célula por célula, exatamente como está, só preenchendo os valores de :root com CORES OBRIGATÓRIAS (linha 1) e escrevendo o HTML do conteúdo (hero, índice, seções) usando essas mesmas classes. NÃO troque nomes de classe, NÃO invente um layout diferente, NÃO "resuma" as regras, NÃO copie a estrutura de um RESUMO ANTERIOR que tenha ficado diferente disto — se sobrar espaço vazio de um lado, se a numeração não bater, se o texto sair justificado, é sinal de que você se afastou deste CSS; volte e copie de novo:

:root{--primary:${theme.primary};--accent:${theme.accent};--soft:${theme.soft};--subject-ink:${theme.ink};--ink:#211C19;--paper:#FFFFFF;--canvas:#ECE8E3;--border-color:#e5e5e5}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',Arial,sans-serif;background:var(--canvas);color:var(--ink);line-height:1.65;font-size:15px;overflow-wrap:anywhere}
.hero{background:linear-gradient(135deg,var(--primary) 0%,var(--subject-ink) 100%);color:#FFFFFF;text-align:center;padding:clamp(40px,7vw,58px) 28px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;pointer-events:none;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}
.hero>*{position:relative}
.hero .top{font-size:.75rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;opacity:.85;margin-bottom:14px}
.hero h1{font-family:'Muthiara',cursive;font-size:clamp(1.8rem,4.5vw,2.8rem);font-weight:400;line-height:1.2;margin-bottom:14px;text-shadow:0 2px 12px rgba(0,0,0,.15)}
.hero .subtitle,.hero .prof{font-size:.95rem;opacity:.9;font-weight:400;margin-bottom:4px}
.hero .tags{margin-top:22px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.hero .tag{background:rgba(255,255,255,.18);border:1.5px solid rgba(255,255,255,.4);border-radius:20px;padding:4px 14px;font-size:.78rem;font-weight:600;transition:transform .15s}
.hero .tag:hover{transform:translateY(-1px)}
.toc-card{background:var(--paper);border:2px solid var(--primary);max-width:820px;margin:32px auto 0 auto;padding:24px 32px;border-radius:12px;box-shadow:0 4px 18px rgba(0,0,0,.06)}
.toc-card .toc-title{color:var(--subject-ink);font-size:.88rem;margin-bottom:16px;text-transform:uppercase;letter-spacing:1.5px;text-align:center;font-weight:800}
.toc-card ol{list-style:none;columns:2;column-gap:32px}
.toc-card li{margin:5px 0;break-inside:avoid;font-weight:600;border-bottom:0}
.toc-card a{color:var(--ink);text-decoration:none;font-size:.875rem;transition:color .2s;display:flex;gap:8px;align-items:baseline}
.toc-card a:hover{color:var(--primary);text-decoration:underline}
.toc-card a .tn{color:var(--primary);font-weight:800;flex-shrink:0}
@media(max-width:600px){.toc-card ol{columns:1}.toc-card{margin:20px 14px 0 14px;padding:18px}}
.content{max-width:1080px;margin:0 auto;padding:32px 40px 60px 40px}
.section{background:var(--paper);border-radius:10px;box-shadow:0 2px 14px rgba(0,0,0,.06);margin-bottom:36px;overflow:hidden;border:1px solid var(--border-color)}
.sec-head{background:var(--primary);color:#fff;padding:14px 24px;display:flex;align-items:center;gap:14px}
.sec-head .num{background:rgba(255,255,255,.25);border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1rem;flex-shrink:0}
.sec-head h2{font-size:1.15rem;font-weight:700;letter-spacing:.3px;margin:0}
.section-body{padding:28px 30px}
h3{color:var(--subject-ink);font-size:1rem;font-weight:700;margin:0 0 12px;padding-bottom:4px;border-bottom:2px solid var(--soft)}
h4{color:var(--subject-ink);font-size:.92rem;font-weight:700;margin:18px 0 8px}
p{margin-bottom:12px;text-align:left}
p:last-child{margin-bottom:0}
ul,ol{padding-left:22px;margin-bottom:12px}
li{margin-bottom:5px}
.box{border-left:5px solid;padding:14px 18px;border-radius:0 8px 8px 0;margin:18px 0}
.label{display:block;font-weight:800;font-size:.82rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.tw{overflow-x:auto;margin:18px 0;border-radius:6px;border:1px solid var(--border-color)}
table{width:100%;border-collapse:collapse;font-size:.875rem}
thead th{background:var(--primary);color:#fff;padding:12px 14px;text-align:left;font-weight:700;font-size:.82rem}
tbody tr:nth-child(even){background:var(--soft)}
tbody tr:nth-child(odd){background:var(--paper)}
tbody td{padding:12px 14px;border-bottom:1px solid var(--border-color);vertical-align:top}
tbody tr{transition:filter .12s}
tbody tr:hover{filter:brightness(.97)}
.minute{background:var(--soft);border-top:5px solid var(--primary);padding:16px 25px 22px;border-radius:8px;margin-bottom:36px}
.minute h2{margin:0 0 10px;font-size:1.05rem;letter-spacing:.04em;color:var(--subject-ink)}
.remember{background:var(--subject-ink);color:#fff;padding:16px 25px 22px;border-radius:10px;margin-top:36px}
.remember h2{margin:0 0 10px;font-size:1.05rem;letter-spacing:.04em}
.to-top{position:fixed;right:22px;bottom:22px;width:44px;height:44px;border-radius:50%;background:var(--primary);color:#fff;display:grid;place-items:center;font-size:1.15rem;text-decoration:none;box-shadow:0 4px 16px rgba(0,0,0,.18);transition:transform .15s}
.to-top:hover{transform:scale(1.07)}
@media screen and (max-width:760px){.content{padding:18px 16px 40px}.toc-card{margin:20px 14px 0 14px;padding:18px}.hero{padding:28px 18px}.section-body{padding:18px 16px}}
@media print{@page{size:auto;margin:12mm}}

Sobre o HTML que usa esse CSS:
- <body> contém direto: <header class="hero" id="topo">...</header>, depois <nav class="toc-card">...</nav> (FORA de qualquer wrapper com max-width — o toc-card já centraliza sozinho), depois <main class="content"> com o .minute, cada .section, e o .remember dentro dele, e por fim <a href="#topo" class="to-top">↑</a> solto no fim do body (fora do .content). É o link de âncora inteiro que faz o "voltar ao topo" funcionar — sem JavaScript nenhum (o iframe onde o resumo aparece bloqueia <script>, então onclick/addEventListener/scrollIntoView simplesmente não rodam; scroll-behavior:smooth + href="#topo" é a única forma que funciona aqui).
- Círculo de cada seção (.num) tem só o número inteiro (1, 2, 3...) igual ao índice — NUNCA "1.0". h3 e h4 NUNCA levam número na frente (nada de "1.1", "3.1.2" etc.) — só o texto do título.
- .box leva uma segunda classe com a cor semântica (ex. class="box def"), com border-color e background definidos por essa segunda classe — ver seção 4 abaixo pros 6 tipos fixos.
- Kathen fica reservado só pra um detalhe pequeno opcional, nunca em título de seção nem em h3/h4.
- TABELAS — reserve tabela SOMENTE para comparar 2+ itens reais (institutos, hipóteses, prazos) através das MESMAS 3+ colunas de atributo. É PROIBIDO usar tabela como glossário de 2 colunas (tipo "Elemento / Memorize") — isso é lista dentro de um parágrafo, nunca tabela.
- NOTA DE AULA: itálico, com rótulo "Análise de Aula —" ou "Regra de Ouro Didática —", sem caixa colorida, dentro de um <p> normal.

3 — IDENTIDADE VISUAL POR MATÉRIA
- Esta matéria usa SEMPRE a paleta ${theme.name}: --primary:${theme.primary}; --accent:${theme.accent}; --soft:${theme.soft}; --subject-ink:${theme.ink}; --ink:#211C19; --paper:#FFFFFF; --canvas:#ECE8E3; --border-color:#e5e5e5.
- Não mude essa paleta em atualizações futuras. Ela identifica a matéria antes mesmo da leitura.
- A cor da matéria é estrutural: gradiente do hero, borda do card de índice, cabeçalho de cada card de seção, bordas de h3 e cabeçalhos de tabela. Não use a cor da matéria nas caixas semânticas (elas têm cor própria fixa, ver item 4).
- Não use cores aleatórias nem vários gradientes diferentes na mesma página — apenas o gradiente do hero definido acima. Não use emoji como decoração; os ícones abaixo são rótulos semânticos e são a única exceção.
- Objetivo geral de acabamento: denso, editorial, fácil de escanear — cards de seção bem definidos, callouts discretos, tabelas limpas. Nada de espaço vazio decorativo grande; a página deve parecer um caderno de aula bem organizado, não um cartaz.

4 — CAIXAS SEMÂNTICAS FIXAS EM TODAS AS MATÉRIAS (use com moderação)
Cada caixa segue o padrão callout: borda lateral esquerda de 5px, fundo pastel, cantos arredondados só à direita, rótulo em caixa alta pequeno e negrito no topo, ícone + rótulo semântico, texto normal abaixo, sem sombra pesada. Use apenas quando a função semântica existir — e não em todo parágrafo:
- .box-definicao — 📘 DEFINIÇÃO DOUTRINÁRIA — fundo #EAF4FB, borda #5B93B8.
- .box-atencao — ⚠️ DADO / ATENÇÃO — fundo #DFEEF8, borda #397DA8.
- .box-critico — ⚡ PONTO CRÍTICO — fundo #F1E9FA, borda #8B68B4.
- .box-regra — 🚫 REGRA ABSOLUTA — fundo #FBE8EC, borda #C95B77.
- .box-jurisprudencia — ⚖️ JURISPRUDÊNCIA / CASO — fundo #F0F0F2, borda #73747A; comece pelo nome do caso em negrito.
- .box-distincao — 🔍 DISTINÇÃO CRÍTICA — fundo #E7F4F0, borda #3D8A78; coloque Termo A e Termo B no mesmo quadro.
- LIMITE: no máximo 1 caixa a cada 2–3 parágrafos de uma seção. Se uma seção tem só fatos memorizáveis (ex.: uma lista de artigos), prefira UMA tabela em vez de várias caixas em sequência — várias caixas empilhadas pesam a leitura e parecem uma parede de quadrados coloridos.
- A cor de cada caixa significa sempre a mesma coisa, independentemente da matéria.

5 — FONTES: REFERENCIE OS NOMES, NÃO DECLARE @font-face
As fontes Muthiara e Inter são injetadas automaticamente pelo site no documento do resumo (o site cuida disso via script próprio, incluindo dentro do iframe isolado onde o resumo é exibido). Por isso, dentro do seu <style>: NÃO declare @font-face, NÃO inclua src:url(...) de fonte nenhuma — apenas referencie os nomes diretamente nas declarações font-family, exatamente como abaixo:
font-family:'Muthiara',cursive; → EXCLUSIVAMENTE o h1 do hero (nome da matéria). Não use Muthiara em mais nenhum outro lugar do documento — nem títulos de seção, nem subtítulos, nem detalhes decorativos.
font-family:'Inter',Arial,sans-serif; → todo o restante do documento (hero label/subtítulo, títulos de seção, corpo, subtítulos, tabelas, boxes, índice).
Se por qualquer motivo a fonte de destaque não carregar no dispositivo do usuário, o navegador cai automaticamente no fallback cursive declarado acima — você não precisa e não deve tratar isso.

6 — WEB-FIRST: ESTE RESUMO É UMA PÁGINA, NÃO UM PDF
Este HTML é exibido dentro de um iframe no site e cresce naturalmente com o conteúdo — ele NUNCA é uma simulação de folha A4 impressa. É proibido usar, em qualquer lugar do CSS:
- @page, page:cover, break-before:page, break-after:page, break-inside:avoid ou orphans/widows;
- width:210mm, height:297mm, ou qualquer unidade mm/pt para dimensionar contêineres;
- height fixo (não min-height) em vh/vw pensado para caber "uma tela" ou "uma página" — height corta conteúdo se ele for maior que a tela, o que é sempre errado aqui;
- qualquer classe ou wrapper que simule uma folha impressa (.page, .sheet, .paper como página A4 inteira).
Sem exceção para o hero: ele é um banner de altura natural (auto), nunca tela cheia — height/min-height fixos em vh/svh continuam proibidos em todo o documento, hero incluído.
Cada seção grande simplesmente segue a anterior no fluxo normal da página, sem forçar quebra. Use margem/espaçamento (não break-before) para separar seções visualmente.
body e .doc (o wrapper mais externo) têm width:100%, max-width:100%, min-width:0 — isso é só pra permitir que o FUNDO do hero (o banner colorido) se estique 100% da largura disponível, sem faixas vazias nas laterais dele.
MAS todo o conteúdo que vem depois do hero (índice + cada seção) fica dentro de um wrapper de leitura ÚNICO (ex. .content), que é OBRIGATÓRIO ter max-width:1000px e margin:0 auto — exatamente como o modelo de referência, cujo .container usa max-width:1080px;margin:0 auto. Sem esse max-width+margin:auto no wrapper de conteúdo, os parágrafos ficam largos demais e desalinhados à esquerda em vez de formarem uma coluna de leitura centralizada — é isso que este parágrafo existe pra evitar. Índice, cada card de seção, tabelas e boxes ficam todos dentro desse mesmo wrapper centralizado, ocupando 100% da largura DELE (não da tela) — assim tudo fica alinhado nas mesmas bordas esquerda/direita, com nada "flutuando" mais largo ou mais estreito que o resto. Não crie um max-width menor e separado só para o texto corrido (nada de max-width:70–75ch isolado no <p>) — quem centraliza é o wrapper .content inteiro, os parágrafos dentro dele simplesmente ocupam 100% dessa coluna já confortável.
Em @media screen and (max-width:760px): reduza padding para 18–24px, títulos com clamp(), remova sombras/raios exagerados, e deixe overflow-x:auto somente no wrapper de cada tabela — nunca na página inteira.
Nunca produza rolagem horizontal na página. Textos longos usam overflow-wrap:anywhere.

7 — IMPRESSÃO (SECUNDÁRIA, NÃO PODE ALTERAR A TELA)
O site tem seu próprio botão de "Salvar PDF" que abre uma janela separada só para imprimir. Inclua obrigatoriamente este bloco simples no final do seu <style>, sem alterações: @media print{@page{size:auto;margin:12mm}} — isso evita que o navegador force o tamanho de página padrão (A4 com margens grandes) na hora de salvar o PDF, deixando a página se ajustar ao conteúdo. Fora isso, você não precisa e não deve otimizar mais nada do HTML para impressão. Pode opcionalmente esconder elementos de UI do site (não existem no seu HTML) ou ajustar cor de fundo para não gastar tinta, mas nunca mude largura, altura, quebra de página ou remova conteúdo da versão de tela. A versão de tela é a única que importa: não construa o HTML pensando em como ele vai imprimir, além da linha @page acima.

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
Não escreva nenhuma explicação fora destes dois blocos. Não envolva os blocos em \`\`\`html, \`\`\`json ou qualquer cerca de código markdown — o site procura literalmente pelas tags abaixo no texto puro, e uma cerca de código extra quebra a importação.

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
function importMaterialResponse(){let raw=$('#materialResponse').value.trim();if(!raw)return toast('Cole a resposta do Claude');let sm=raw.match(/<SUMMARY_HTML>([\s\S]*?)<\/SUMMARY_HTML>/i),fm=raw.match(/<FLASHCARDS_JSON>([\s\S]*?)<\/FLASHCARDS_JSON>/i);if(!sm||!fm)return toast('Não encontrei os dois blocos esperados');let html=sanitizeSummaryHtml(sm[1].trim()),data;try{data=JSON.parse(fm[1].trim())}catch(e){return toast('O JSON dos flashcards está inválido')};if(!/<body[\s>]/i.test(html)||!/<style[\s>]/i.test(html))return toast('O bloco do resumo precisa conter HTML completo e CSS');let source=Array.isArray(data)?data:data.flashcards;if(!Array.isArray(source))return toast('O JSON precisa conter uma lista de flashcards');let cards=source.slice(0,16),ignored=Math.max(0,source.length-cards.length);if(!setLocalItem(sumKey(),html))return;let stats=syncFlashcards(cards,currentSubject,currentStage);renderSubject({resetReader:false});renderSubjects();renderFlashcards();renderHome();openSummaryModal();toast(`Resumo atualizado · ${stats.new} novos · ${stats.updated} mantidos${ignored?` · ${ignored} extras ignorados`:''}`) }

function readArray(key){try{let value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return []}}
function getEvents(){return readArray(evKey)}function setEvents(v){setLocalItem(evKey,JSON.stringify(v))}
function getUpcomingEvents(){let today=todayStr();return getEvents().filter(e=>e.date&&e.date>=today).sort((a,b)=>a.date.localeCompare(b.date))}
function clearEventForm(){$('#evId').value='';$('#evType').value='Prova';$('#evDate').value='';$('#evTitle').value='';$('#evSubject').value=currentSubject||SUBJECTS[0].key;$('#evChecklist').value='';$('#eventModalTitle').textContent='Novo compromisso';$('#deleteEventBtn').style.display='none';}
function openEventModal(date=''){clearEventForm();if(date)$('#evDate').value=date;openModal('eventModal')}
function editEvent(id){let e=getEvents().find(x=>String(x.id)===String(id));if(!e)return;if(e.readOnly){if(e.htmlLink)window.open(e.htmlLink,'_blank','noopener');else toast('Este compromisso vem do Google Agenda e é somente leitura');return}$('#evId').value=e.id;$('#evType').value=e.type;$('#evDate').value=e.date;$('#evTitle').value=e.title;$('#evSubject').value=e.subject;$('#evChecklist').value=(e.checks||[]).map(c=>c.text).join('\n');$('#eventModalTitle').textContent='Editar compromisso';$('#deleteEventBtn').style.display='inline-flex';openModal('eventModal')}
function saveEvent(){let title=$('#evTitle').value.trim(),date=$('#evDate').value;if(!title||!date)return toast('Preencha título e data');let arr=getEvents(),id=Number($('#evId').value)||Date.now(),old=arr.find(x=>x.id===id),lines=$('#evChecklist').value.split('\n').map(x=>x.trim()).filter(Boolean),checks=lines.map(t=>({text:t,done:old?.checks?.find(c=>c.text===t)?.done||false})),obj={id,type:$('#evType').value,date,title,subject:$('#evSubject').value,checks};let pos=arr.findIndex(x=>x.id===id);if(pos>=0)arr[pos]=obj;else arr.push(obj);setEvents(arr);closeModal('eventModal');renderCalendar();renderHome();toast(pos>=0?'Compromisso atualizado':'Compromisso salvo')}
function deleteEvent(){let id=$('#evId').value;if(!id)return;let target=getEvents().find(x=>String(x.id)===String(id));if(target?.readOnly)return toast('Eventos do Google Agenda não podem ser excluídos aqui');setEvents(getEvents().filter(x=>String(x.id)!==String(id)));closeModal('eventModal');renderCalendar();renderHome();toast('Compromisso excluído')}
function toggleCheck(eid,idx){let arr=getEvents(),e=arr.find(x=>String(x.id)===String(eid));if(!e||!e.checks||!e.checks[idx])return;e.checks[idx].done=!e.checks[idx].done;setEvents(arr);renderCalendar();renderHome();}
function addChecklistItem(eid){let input=$('#newChecklistItem'),text=input?.value.trim();if(!text)return;let arr=getEvents(),e=arr.find(x=>String(x.id)===String(eid));if(!e)return;e.checks=e.checks||[];e.checks.push({text,done:false});setEvents(arr);if(input)input.value='';renderCalendar();renderHome();openEventDetail(eid)}
function removeChecklistItem(eid,idx){let arr=getEvents(),e=arr.find(x=>String(x.id)===String(eid));if(!e||!e.checks)return;e.checks.splice(idx,1);setEvents(arr);renderCalendar();renderHome();openEventDetail(eid)}
function moveMonth(n){calDate=new Date(calDate.getFullYear(),calDate.getMonth()+n,1);renderCalendar()}
function goToCurrentMonth(){calDate=new Date();renderCalendar()}
function renderCalendar(){let y=calDate.getFullYear(),m=calDate.getMonth(),first=new Date(y,m,1),start=(first.getDay()+6)%7,last=new Date(y,m+1,0).getDate(),ev=getEvents();$('#calTitle').textContent=new Intl.DateTimeFormat('pt-BR',{month:'long',year:'numeric'}).format(calDate);let h=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(x=>`<div class="dow">${x}</div>`).join('');for(let i=0;i<42;i++){let d=i-start+1;if(d<1||d>last){h+='<div class="day outside" aria-hidden="true"></div>';continue}let ds=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,today=todayStr(),dayEvents=ev.filter(e=>e.date===ds),dateLabel=new Intl.DateTimeFormat('pt-BR',{day:'numeric',month:'long',year:'numeric'}).format(new Date(ds+'T12:00')),chips=dayEvents.slice(0,2).map(e=>`<button class="evchip" onclick="event.stopPropagation();openEventDetail('${escapeHtml(String(e.id))}')" onkeydown="event.stopPropagation()" title="${escapeHtml(e.type)}: ${escapeHtml(e.title)}"><span>${escapeHtml(e.title)}</span></button>`).join(''),more=dayEvents.length>2?`<span class="more-events">+${dayEvents.length-2}</span>`:'';h+=`<div class="day ${ds===today?'today':''} ${dayEvents.length?'has-events':''}" role="button" tabindex="0" aria-label="${escapeHtml(dateLabel)}${dayEvents.length?` · ${dayEvents.length} compromisso(s)`:''}" onclick="openEventModal('${ds}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openEventModal('${ds}')} "><div class="daynum"><b>${d}</b></div>${dayEvents.length?`<div class="day-events">${chips}${more}</div>`:''}</div>`}$('#calGrid').innerHTML=h;renderAgendaList();syncPlannerAgendaHeight();}
function syncPlannerAgendaHeight(){let cal=$('.planner-calendar-card'),agenda=$('.planner-agenda-card');if(!cal||!agenda)return;if(innerWidth<=1100){agenda.style.height='';agenda.style.maxHeight='';return}requestAnimationFrame(()=>{let h=cal.getBoundingClientRect().height;if(h){agenda.style.height=h+'px';agenda.style.maxHeight=h+'px'}})}
window.addEventListener('resize',()=>{if($('#calendar')?.classList.contains('active'))syncPlannerAgendaHeight()});
function relativeEventDate(date){let start=new Date(todayStr()+'T12:00'),target=new Date(date+'T12:00'),days=Math.round((target-start)/86400000);if(days===0)return'Hoje';if(days===1)return'Amanhã';if(days<7)return`Em ${days} dias`;return new Intl.DateTimeFormat('pt-BR',{weekday:'long'}).format(target)}
function renderAgendaList(){let arr=getUpcomingEvents(),counter=$('#agendaCount');if(counter)counter.textContent=arr.length;$('#agendaList').innerHTML=arr.length?arr.map(e=>{let id=escapeHtml(String(e.id)),date=new Date(e.date+'T12:00'),month=new Intl.DateTimeFormat('pt-BR',{month:'short'}).format(date).replace('.','').toUpperCase(),source=e.readOnly?`<span class="sync-source">${escapeHtml(e.calendarName||'Google Agenda')}</span>`:'',checks=e.checks||[],done=checks.filter(c=>c.done).length;return `<article class="planner-item" role="button" tabindex="0" aria-label="Ver ${escapeHtml(e.title)}" onclick="openEventDetail('${id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openEventDetail('${id}')}"><div class="planner-date"><strong>${String(date.getDate()).padStart(2,'0')}</strong><span>${month}</span></div><div class="planner-item-body"><div class="planner-item-top"><span class="planner-when">${relativeEventDate(e.date)}</span><span class="planner-type">${escapeHtml(e.type||'Agenda')}</span>${e.subject?`<span class="planner-subject">${escapeHtml(subj(e.subject)?.short||e.subject)}</span>`:''}${source}</div><h3>${escapeHtml(e.title)}</h3>${checks.length?`<div class="planner-progress"><span>${done}/${checks.length} concluídos</span><i><b style="width:${Math.round(done/checks.length*100)}%"></b></i></div>`:''}</div><span class="planner-item-chevron" aria-hidden="true">›</span></article>`}).join(''):'<div class="planner-empty"><span>○</span><strong>Agenda livre por enquanto</strong><small>Adicione provas, trabalhos e entregas para acompanhar tudo aqui.</small><button class="btn primary" onclick="openEventModal()">+ compromisso</button></div>'}
function openEventDetail(id){let e=getEvents().find(x=>String(x.id)===String(id));if(!e)return;let date=new Date(e.date+'T12:00'),checks=e.checks||[],done=checks.filter(c=>c.done).length;$('#eventDetailTags').innerHTML=`<span>${escapeHtml(e.type||'Agenda')}</span>${e.subject?`<span>${escapeHtml(subj(e.subject)?.short||e.subject)}</span>`:''}${e.readOnly?`<span>${escapeHtml(e.calendarName||'Google Agenda')}</span>`:''}`;$('#eventDetailTitle').textContent=e.title;$('#eventDetailWhen').textContent=`${relativeEventDate(e.date)} · ${new Intl.DateTimeFormat('pt-BR',{day:'numeric',month:'long',year:'numeric'}).format(date)}`;$('#eventDetailProgress').innerHTML=checks.length?`<span>${done}/${checks.length} concluídos</span><i><b style="width:${Math.round(done/checks.length*100)}%"></b></i>`:'';$('#eventDetailChecklist').innerHTML=(checks.length?checks.map((c,i)=>`<label class="event-detail-check"><input type="checkbox" ${c.done?'checked':''} onchange="toggleCheck('${escapeHtml(String(e.id))}',${i});openEventDetail('${escapeHtml(String(e.id))}')"><span>${escapeHtml(c.text)}</span><button type="button" class="check-remove" aria-label="Remover item" onclick="removeChecklistItem('${escapeHtml(String(e.id))}',${i})">×</button></label>`).join(''):'<div class="event-detail-empty">Sem checklist neste compromisso ainda.</div>')+`<div class="checklist-add-row"><input type="text" id="newChecklistItem" placeholder="Adicionar item ao checklist…" onkeydown="if(event.key==='Enter'){event.preventDefault();addChecklistItem('${escapeHtml(String(e.id))}')}"><button type="button" class="btn" onclick="addChecklistItem('${escapeHtml(String(e.id))}')">+ item</button></div>`;$('#eventDetailActions').innerHTML=e.readOnly?(e.htmlLink?`<button class="btn" onclick="window.open('${e.htmlLink}','_blank','noopener')">Abrir no Google Agenda ↗</button>`:''):`<button class="btn primary" onclick="closeModal('eventDetailModal');editEvent('${escapeHtml(String(e.id))}')">Editar</button><button class="btn danger" onclick="closeModal('eventDetailModal');$('#evId').value='${escapeHtml(String(e.id))}';deleteEvent()">Excluir</button>`;openModal('eventDetailModal')}
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
function renderFlashcards(){let all=getFlashcards(),active=all.filter(f=>!f.stale),types=[...new Set(active.map(f=>f.type).filter(Boolean))].sort(),sel=$('#fcTypeFilter').value||getFlashcardFilters().type||'';$('#fcTypeFilter').innerHTML='<option value="">Todos os tipos</option>'+types.map(t=>`<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join('');$('#fcTypeFilter').value=types.includes(sel)?sel:'';let due=active.filter(f=>cardStatus(f)==='due').length,nw=active.filter(f=>cardStatus(f)==='new').length,master=active.filter(f=>cardStatus(f)==='mastered').length;$('#fcTotal').textContent=active.length;$('#fcDue').textContent=due;$('#fcNew').textContent=nw;$('#fcMastered').textContent=master;let arr=filteredFlashcards(),labels=[];if($('#fcSubjectFilter').value)labels.push(subj($('#fcSubjectFilter').value)?.short);if($('#fcStageFilter').value)labels.push($('#fcStageFilter').value==='1'?'1ª etapa':'2ª etapa');if($('#fcTypeFilter').value)labels.push($('#fcTypeFilter').value);if($('#fcStatusFilter').value)labels.push($('#fcStatusFilter').selectedOptions[0].textContent);if($('#fcTopicFilter').value)labels.push(`Tópico: ${$('#fcTopicFilter').value}`);$('#activeFcFilters').innerHTML=`<span>${arr.length} ${arr.length===1?'cartão':'cartões'}</span>${labels.map(x=>`<span class="tag rose">${escapeHtml(x)}</span>`).join('')}${!$('#fcStatusFilter').value?'<span class="filter-note">Ativos · arquivados ficam ocultos</span>':''}`;$('#flashList').innerHTML=arr.length?arr.map(f=>{let st=cardStatus(f),r=f.review||{},subject=escapeHtml(subj(f.subject)?.short||f.subject),fcColor=(SUBJECT_THEMES[f.subject]||{}).primary||'var(--rose)';return `<div class="flash-row" style="--fc-color:${fcColor}"><div><div class="flash-q">${escapeHtml(f.question)}</div><div class="flash-meta"><span class="tag rose">${subject}</span><span class="tag">${f.stage==='1'?'1ª etapa':'2ª etapa'}</span><span class="tag">${escapeHtml(f.topic)}</span><span class="tag">${escapeHtml(f.type)}</span><span class="tag ${st==='mastered'?'good':st==='stale'?'warn':''}">${st==='new'?'novo':st==='due'?'revisar hoje':st==='mastered'?'dominado':st==='stale'?'fora da última atualização':'em estudo'}</span></div><div class="agenda-meta" style="margin-top:.35rem">${r.last?'Última revisão: '+new Date(r.last+'T12:00').toLocaleDateString('pt-BR'):''}${r.due?' · Próxima: '+new Date(r.due+'T12:00').toLocaleDateString('pt-BR'):''}</div></div><button class="btn danger" onclick="deleteFlashcard('${f.id}')">Excluir</button></div>`}).join(''):'<div class="empty">Nenhum flashcard corresponde aos filtros.</div>';renderHome();}
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
  if(!bd){bd=document.createElement('div');bd.id='viewerBackdrop';bd.className='viewer-backdrop';bd.setAttribute('aria-hidden','true');bd.addEventListener('click',()=>{const open=$('.viewer-fullscreen');if(open){if(open.id==='studyPane'){toggleStudyFullscreen();return}const kind=open.id==='summaryPane'?'summary':'notes';toggleViewerFullscreen(kind)}});document.body.appendChild(bd)}
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
function toggleStudyFullscreen(){
  const pane=$('#studyPane');
  if(!pane)return;
  const opening=!pane.classList.contains('viewer-fullscreen');
  const bd=getViewerBackdrop();
  if(opening){
    pane.classList.add('viewer-fullscreen');
    document.body.classList.add('viewer-open');
    bd.classList.add('show');
    let btn=$('#studyFocusBtn');if(btn)btn.textContent='Sair do foco';
  }else{
    pane.classList.remove('viewer-fullscreen');
    document.body.classList.remove('viewer-open');
    bd.classList.remove('show');
    let btn=$('#studyFocusBtn');if(btn)btn.textContent='Modo foco';
  }
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&activeModal){closeModal(activeModal.id);return}
  if(e.key==='Tab'&&activeModal){let focusable=[...activeModal.querySelectorAll('button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),a[href]')].filter(el=>el.offsetParent!==null);if(focusable.length){let first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}
  if(e.key==='Escape'){
    const open=$('.viewer-fullscreen');
    if(open){
      if(open.id==='studyPane'){toggleStudyFullscreen();return}
      const kind=open.id==='summaryPane'?'summary':'notes';toggleViewerFullscreen(kind)
    }
  }
});

window.addEventListener('journal:cloud-updated',()=>{loadAvatar();renderSubjects();renderCalendar();renderFlashcards();renderErrors();renderHome()});
renderGreeting();initSubjects();loadAvatar();renderCalendar();renderFlashcards();renderErrors();restoreLastRoute();

