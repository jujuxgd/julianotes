/* Leitor de PDF do Drive com grifos (PDF.js).
   Ordem de acesso ao arquivo: cópia guardada no navegador → conta Google conectada →
   chave de API (arquivos com link aberto) → preview do Drive, sem grifos.
   Grifos ficam em localStorage (msj7-grifos::<idDoArquivo>) e sincronizam com a conta. */
(function(){
  const PDFJS=window.JOURNAL_PDFJS_BASE||'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
  const COLORS=[['yellow','Amarelo','rgba(255,214,10,.45)'],['green','Verde','rgba(110,200,120,.42)'],['pink','Rosa','rgba(240,120,170,.4)'],['blue','Azul','rgba(90,160,240,.38)']];
  const colorOf=id=>(COLORS.find(c=>c[0]===id)||COLORS[0])[2];
  const zoomKey='msj7-pdf-zoom',hlKey=id=>`msj7-grifos::${id}`;
  let libPromise=null,current=null,bar=null,pending=null;

  function loadLib(){
    if(window.pdfjsLib)return Promise.resolve(window.pdfjsLib);
    if(libPromise)return libPromise;
    libPromise=new Promise((ok,fail)=>{let s=document.createElement('script');s.src=PDFJS+'pdf.min.js';s.onload=()=>{window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS+'pdf.worker.min.js';ok(window.pdfjsLib)};s.onerror=()=>{libPromise=null;fail(new Error('pdfjs'))};document.head.appendChild(s)});
    return libPromise;
  }
  const readHl=id=>{try{let v=JSON.parse(localStorage.getItem(hlKey(id))||'[]');return Array.isArray(v)?v:[]}catch{return []}};
  function writeHl(id,list){let value=JSON.stringify(list);if(typeof setLocalItem==='function')setLocalItem(hlKey(id),value);else localStorage.setItem(hlKey(id),value)}

  async function cached(id){try{if(!window.caches)return null;let c=await caches.open('julianotes-pdfs-v1'),r=await c.match(`${location.origin}/__pdf/${id}`);return r?r.arrayBuffer():null}catch{return null}}
  async function store(id,response){try{if(!window.caches)return;let c=await caches.open('julianotes-pdfs-v1');await c.put(`${location.origin}/__pdf/${id}`,response)}catch{}}
  async function download(file,interactive){
    let key=`${file.id}@${file.modified||''}`,hit=await cached(key);if(hit)return hit;
    let attempts=[];
    let token=await window.journalDriveToken?.(interactive).catch(()=>null);
    if(token)attempts.push({headers:{Authorization:`Bearer ${token}`},url:`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`});
    if(window.journalApiKey)attempts.push({headers:{},url:`https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${window.journalApiKey}`});
    for(let a of attempts){try{let r=await fetch(a.url,{headers:a.headers});if(!r.ok)continue;store(key,r.clone());return await r.arrayBuffer()}catch{}}
    throw new Error('sem acesso');
  }

  function fallback(root,file,message){
    root.innerHTML=`<div class="pdf-notice"><span>${message}</span><button type="button" class="btn primary" data-connect>Conectar o Drive para grifar</button></div><iframe class="pdf-fallback" title="Resumo em PDF" src="https://drive.google.com/file/d/${file.id}/preview" allow="fullscreen"></iframe>`;
    root.querySelector('[data-connect]').onclick=()=>open(root,file,{interactive:true,force:true});
  }

  async function open(root,file,{interactive=false,force=false}={}){
    if(!force&&current&&current.root===root&&current.file.id===file.id&&root.dataset.file===file.id)return;
    hideBar();
    root.dataset.file=file.id;
    root.innerHTML='<div class="pdf-loading">Abrindo o resumo…</div>';
    let state={root,file,pages:new Map(),zoom:Math.min(2.5,Math.max(.6,parseFloat(localStorage.getItem(zoomKey))||1))};
    current=state;
    let lib,data;
    try{[lib,data]=await Promise.all([loadLib(),download(file,interactive)])}
    catch(error){if(current===state)fallback(root,file,interactive?'Não consegui baixar o PDF pela sua conta. Mostrando pelo Drive, sem grifos.':'Para grifar o resumo, conecte sua conta do Google Drive (uma vez por sessão).');return}
    if(current!==state)return;
    try{state.doc=await lib.getDocument({data:new Uint8Array(data)}).promise}
    catch(error){fallback(root,file,'Este PDF não abriu no leitor. Mostrando pelo Drive, sem grifos.');return}
    if(current!==state)return;
    root.innerHTML=`<div class="pdf-bar"><span class="pdf-hint">Selecione um trecho para grifar · toque num grifo para apagar</span><span class="pdf-count"></span><span class="pdf-zoom"><button type="button" data-zoom="-" aria-label="Diminuir zoom">−</button><b></b><button type="button" data-zoom="+" aria-label="Aumentar zoom">+</button></span></div><div class="pdf-pages"></div>`;
    root.querySelector('.pdf-bar').addEventListener('click',e=>{let b=e.target.closest('[data-zoom]');if(!b)return;state.zoom=Math.round(Math.min(2.5,Math.max(.6,state.zoom+(b.dataset.zoom==='+'?.2:-.2)))*100)/100;localStorage.setItem(zoomKey,String(state.zoom));layout(state)});
    await layout(state);
  }

  async function layout(state){
    let {root,doc}=state,box=root.querySelector('.pdf-pages'),first=await doc.getPage(1),base=first.getViewport({scale:1});
    if(current!==state)return;
    let width=Math.max(280,Math.min(box.clientWidth-24,940))*state.zoom;
    state.scale=width/base.width;state.pages.clear();state.observer?.disconnect();
    root.querySelector('.pdf-zoom b').textContent=Math.round(state.zoom*100)+'%';
    box.innerHTML=Array.from({length:doc.numPages},(_,i)=>`<div class="pdf-page" data-p="${i+1}" style="width:${Math.round(width)}px;height:${Math.round(base.height*state.scale)}px"></div>`).join('');
    state.observer=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting)renderPage(state,+en.target.dataset.p,en.target)}),{root:box,rootMargin:'600px 0px'});
    box.querySelectorAll('.pdf-page').forEach(el=>state.observer.observe(el));
    count(state);
  }

  async function renderPage(state,n,el){
    if(state.pages.has(n))return;state.pages.set(n,el);
    let page=await state.doc.getPage(n),viewport=page.getViewport({scale:state.scale}),dpr=Math.min(window.devicePixelRatio||1,2);
    if(current!==state||!el.isConnected)return;
    el.style.width=Math.round(viewport.width)+'px';el.style.height=Math.round(viewport.height)+'px';
    let canvas=document.createElement('canvas');canvas.width=Math.round(viewport.width*dpr);canvas.height=Math.round(viewport.height*dpr);
    let marks=document.createElement('div');marks.className='pdf-marks';
    let text=document.createElement('div');text.className='textLayer';text.style.setProperty('--scale-factor',viewport.scale);
    el.replaceChildren(canvas,marks,text);
    await page.render({canvasContext:canvas.getContext('2d'),viewport,transform:dpr!==1?[dpr,0,0,dpr,0,0]:null}).promise;
    try{let content=await page.getTextContent();await window.pdfjsLib.renderTextLayer({textContentSource:content,container:text,viewport}).promise}catch(error){console.warn(error)}
    drawMarks(state,n);
  }
  function drawMarks(state,n){let el=state.pages.get(n),layer=el?.querySelector('.pdf-marks');if(!layer)return;layer.innerHTML=readHl(state.file.id).filter(h=>h.p===n).map(h=>h.r.map(r=>`<i style="left:${r[0]*100}%;top:${r[1]*100}%;width:${r[2]*100}%;height:${r[3]*100}%;background:${colorOf(h.c)}"></i>`).join('')).join('')}
  function count(state){let n=readHl(state.file.id).length,el=state.root.querySelector('.pdf-count');if(el)el.textContent=n?`${n} grifo${n>1?'s':''}`:''}

  /* ---------- seleção e barra de cores ---------- */
  function ensureBar(){
    if(bar)return bar;
    bar=document.createElement('div');bar.className='pdf-colors';bar.setAttribute('role','toolbar');bar.setAttribute('aria-label','Grifar');
    bar.addEventListener('mousedown',e=>e.preventDefault());
    bar.addEventListener('click',e=>{let b=e.target.closest('button');if(!b||!pending||!current)return;let p=pending,state=current,list=readHl(state.file.id);pending=null;hideBar();
      if(b.dataset.remove){list=list.filter(h=>h.id!==p.remove);writeHl(state.file.id,list);drawMarks(state,p.page);count(state);return}
      Object.entries(p.byPage).forEach(([page,rects])=>{list.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),p:+page,c:b.dataset.color,r:rects,t:p.text})});
      writeHl(state.file.id,list);window.getSelection()?.removeAllRanges();Object.keys(p.byPage).forEach(page=>drawMarks(state,+page));count(state)});
    document.body.appendChild(bar);return bar;
  }
  function showBar(x,y,removing){ensureBar();bar.innerHTML=removing?'<button type="button" class="pdf-remove" data-remove="1">Apagar grifo</button>':COLORS.map(c=>`<button type="button" data-color="${c[0]}" title="${c[1]}" aria-label="Grifar em ${c[1].toLowerCase()}" style="background:${c[2].replace(/[\d.]+\)$/,'1)')}"></button>`).join('');bar.classList.add('on');let w=bar.offsetWidth;bar.style.left=Math.max(8,Math.min(x-w/2,innerWidth-w-8))+'px';bar.style.top=Math.max(8,y-52)+'px'}
  function hideBar(){bar?.classList.remove('on')}
  function checkSelection(){
    if(!current)return;let sel=window.getSelection();
    if(!sel||sel.isCollapsed||!sel.rangeCount){if(!pending?.remove){pending=null;hideBar()}return}
    let range=sel.getRangeAt(0),node=range.commonAncestorContainer,el=node.nodeType===1?node:node.parentElement;
    if(!el||!current.root.contains(el))return;
    let text=sel.toString().replace(/\s+/g,' ').trim();if(text.length<2)return;
    let pages=[...current.root.querySelectorAll('.pdf-page')].map(p=>({p:+p.dataset.p,box:p.getBoundingClientRect()})),byPage={};
    [...range.getClientRects()].forEach(q=>{if(q.width<2||q.height<2)return;let cx=q.left+q.width/2,cy=q.top+q.height/2,pg=pages.find(o=>cx>=o.box.left&&cx<=o.box.right&&cy>=o.box.top&&cy<=o.box.bottom);if(!pg)return;
      let r=[(q.left-pg.box.left)/pg.box.width,(q.top-pg.box.top)/pg.box.height,q.width/pg.box.width,q.height/pg.box.height].map(v=>Math.round(v*10000)/10000),list=byPage[pg.p]||(byPage[pg.p]=[]),prev=list[list.length-1];
      if(prev&&Math.abs(prev[1]-r[1])<.004&&r[0]<=prev[0]+prev[2]+.01){let right=Math.max(prev[0]+prev[2],r[0]+r[2]);prev[0]=Math.min(prev[0],r[0]);prev[2]=right-prev[0];prev[3]=Math.max(prev[3],r[3])}else list.push(r)});
    if(!Object.keys(byPage).length)return;
    pending={byPage,text:text.slice(0,300)};let last=range.getBoundingClientRect();showBar(last.left+last.width/2,last.top,false);
  }
  let timer=null;
  document.addEventListener('selectionchange',()=>{clearTimeout(timer);timer=setTimeout(checkSelection,220)});
  document.addEventListener('click',e=>{
    if(!current||e.target.closest?.('.pdf-colors'))return;
    let page=e.target.closest?.('.pdf-page');
    if(!page||!current.root.contains(page)||!window.getSelection()?.isCollapsed){if(!page){pending=null;hideBar()}return}
    let box=page.getBoundingClientRect(),x=(e.clientX-box.left)/box.width,y=(e.clientY-box.top)/box.height,n=+page.dataset.p;
    let hit=readHl(current.file.id).find(h=>h.p===n&&h.r.some(r=>x>=r[0]&&x<=r[0]+r[2]&&y>=r[1]&&y<=r[1]+r[3]));
    if(hit){pending={remove:hit.id,page:n};showBar(e.clientX,e.clientY,true)}else{pending=null;hideBar()}
  });
  document.addEventListener('scroll',()=>{if(pending){pending=null;hideBar()}},true);
  let resizeTimer=null;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(current?.doc&&current.root.isConnected&&current.root.offsetParent)layout(current)},300)});
  window.addEventListener('journal:cloud-updated',()=>{if(current?.doc){current.pages.forEach((_,n)=>drawMarks(current,n));count(current)}});

  window.JournalPdf={open,close(root){if(current?.root===root){current.observer?.disconnect();current=null}hideBar();root.innerHTML='';delete root.dataset.file}};
})();
