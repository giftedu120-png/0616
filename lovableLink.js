/* Seamless hand-off from Safe Beach's journal card to the Lovable journal app. */
(function () {
  const lovableJournalUrl='https://lovable.dev/projects/b6429851-01a5-45f1-8c71-96c7d80aa8fb?view=files&file=safe-beach.html';
  const baseRender=window.render;
  window.render=function(){baseRender();addJournalLink();};
  function addJournalLink(){
    const field=document.querySelector('.field');
    if(!field||field.querySelector('.lovable-journal-link'))return;
    const link=document.createElement('button');
    link.className='lovable-journal-link';
    link.type='button';
    link.innerHTML='✦ 더 자세한 도감 보기 <span>→</span>';
    link.setAttribute('aria-label','Lovable 도감 페이지 열기');
    link.onclick=()=>{window.location.href=lovableJournalUrl;};
    field.appendChild(link);
  }
  const style=document.createElement('style');
  style.textContent='.lovable-journal-link{width:100%;margin-top:10px;padding:12px 14px;border:1px solid #56c1c6;border-radius:13px;background:transparent;color:var(--ocean);font:inherit;font-size:13px;font-weight:700;text-align:left;cursor:pointer}.lovable-journal-link span{float:right;font-size:16px;line-height:13px}.lovable-journal-link:hover{background:#eaf7f6}body.dark .lovable-journal-link:hover{background:#173c44}';
  document.head.appendChild(style);
  addJournalLink();
}());
