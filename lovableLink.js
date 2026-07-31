/* Seamless hand-off from Safe Beach's journal card to the Lovable journal app. */
(function () {
  const lovableJournalUrl='https://shore-scribe.lovable.app/';
  const baseRender=window.render;
  window.render=function(){baseRender();cleanJournalArea();addJournalLink();};
  function cleanJournalArea(){
    const gallery=document.querySelector('.gallery');
    if(gallery) gallery.closest('.section')?.remove();
    const bottom=document.querySelector('.bottom');
    if(bottom) bottom.remove();
    const field=document.querySelector('.field');
    if(field){field.querySelector('.upload')?.remove();const description=field.querySelector('p');if(description)description.textContent='해양생물 사진 분석과 나만의 도감 수집은 나의 바다 도감에서 이용할 수 있어요.';}
  }
  function addJournalLink(){
    const field=document.querySelector('.field');
    if(!field||field.querySelector('.lovable-journal-link'))return;
    const link=document.createElement('button');
    link.className='lovable-journal-link';
    link.type='button';
    link.innerHTML='✦ 나의 바다 도감으로 이동 <span>→</span>';
    link.setAttribute('aria-label','나의 바다 도감 페이지 열기');
    link.onclick=()=>{window.location.href=lovableJournalUrl;};
    field.appendChild(link);
  }
  const style=document.createElement('style');
  style.textContent='.lovable-journal-link{width:100%;margin-top:10px;padding:12px 14px;border:1px solid #56c1c6;border-radius:13px;background:transparent;color:var(--ocean);font:inherit;font-size:13px;font-weight:700;text-align:left;cursor:pointer}.lovable-journal-link span{float:right;font-size:16px;line-height:13px}.lovable-journal-link:hover{background:#eaf7f6}body.dark .lovable-journal-link:hover{background:#173c44}';
  document.head.appendChild(style);
  cleanJournalArea();addJournalLink();
}());
