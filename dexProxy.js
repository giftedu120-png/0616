/* Public page client: sends photos to the private Worker, never directly to an AI provider. */
(function () {
  const AI_PROXY_URL = 'https://safe-beach-ai-proxy.YOUR_SUBDOMAIN.workers.dev/analyze';
  const keyBox = document.querySelector('.key');
  if (keyBox) keyBox.remove();
  document.querySelector('.note')?.remove();
  const previous = document.getElementById('photo');
  const photo = previous.cloneNode(true);
  previous.replaceWith(photo);
  photo.addEventListener('change', async event => {
    const file = event.target.files?.[0]; if (!file) return;
    const work = document.getElementById('work');
    if (!/^image\//.test(file.type) || file.size > 5 * 1024 * 1024) { work.innerHTML='<p class="muted">5MB 이하의 이미지 파일만 올려주세요.</p>'; return; }
    const dataUrl = await new Promise((resolve, reject) => { const reader=new FileReader(); reader.onload=()=>resolve(reader.result); reader.onerror=reject; reader.readAsDataURL(file); });
    work.innerHTML=`<img class="preview" src="${dataUrl}"><div class="loading">AI가 사진을 분석하고 있습니다…</div>`;
    try {
      if (AI_PROXY_URL.includes('YOUR_SUBDOMAIN')) throw new Error('AI 분석 서버 설정이 아직 완료되지 않았습니다.');
      const response = await fetch(AI_PROXY_URL, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({image:dataUrl})});
      const result = await response.json(); if (!response.ok) throw new Error(result.error || '분석 요청에 실패했습니다.');
      const existing = entries.find(entry => entry.speciesName === result.speciesName);
      if (existing) { existing.count=(existing.count||1)+1; existing.photo=dataUrl; } else { entries.unshift({...result,photo:dataUrl,count:1}); }
      localStorage.setItem(DEX,JSON.stringify(entries)); draw();
      const label=result.riskLevel==='high'?'높음':result.riskLevel==='medium'?'보통':'낮음';
      work.innerHTML=`<img class="preview" src="${dataUrl}"><div class="result"><h2>${result.emoji||'🐚'} ${result.speciesName}</h2><span class="pill ${result.riskLevel==='high'?'high':result.riskLevel==='medium'?'medium':''}">위험도 ${label}</span><div class="row"><b>관찰된 행동</b>${result.behavior}</div><div class="row"><b>행동의 의미</b>${result.meaning}</div><div class="row"><b>관광객 대처법</b>${result.advice}</div></div>`;
    } catch (error) { work.innerHTML=`<p class="muted">${error.message}</p>`; }
    event.target.value='';
  });
}());
