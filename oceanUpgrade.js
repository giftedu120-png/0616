/* GPS beach selector, current safety records, and photo-first marine journal. */
(function () {
  const beachLocations = [
    { name:'해운대', lat:35.1587, lng:129.1604 },
    { name:'광안리', lat:35.1531, lng:129.1186 },
    { name:'송정', lat:35.1781, lng:129.1993 },
    { name:'다대포', lat:35.0462, lng:128.9650 },
    { name:'송도', lat:35.0765, lng:129.0208 },
    { name:'일광', lat:35.2643, lng:129.2334 },
    { name:'임랑', lat:35.3184, lng:129.2643 }
  ];
  const animalProfiles = [
    { id:'crab', name:'게', icon:'🦀', words:['crab','게'], risk:'낮음', tone:'safe', behavior:'모래 위로 나와 빠르게 이동하고 있어요.', meaning:'먹이 활동이나 조수·기압 변화에 반응하는 일반적인 행동일 수 있어요.', action:'만지지 말고 이동 경로를 비워 두세요.' },
    { id:'gull', name:'갈매기', icon:'🕊️', words:['gull','seagull','갈매기'], risk:'낮음', tone:'safe', behavior:'여러 마리가 한 방향으로 무리 지어 이동하고 있어요.', meaning:'먹이 이동 또는 바람 변화에 따른 비행일 수 있어요.', action:'먹이를 주지 말고, 강한 바람이 느껴지면 입수를 재검토하세요.' },
    { id:'jellyfish', name:'해파리', icon:'🪼', words:['jelly','해파리'], risk:'높음', tone:'danger', behavior:'해류를 따라 연안으로 떠밀려 들어오고 있어요.', meaning:'수온과 해류 변화로 얕은 수심에 유입될 수 있어요.', action:'접촉하지 말고 안전요원에게 알리세요. 쏘이면 바닷물로 씻고 119에 도움을 요청하세요.' },
    { id:'starfish', name:'불가사리', icon:'⭐', words:['starfish','불가사리'], risk:'낮음', tone:'safe', behavior:'바위나 모래 위에서 천천히 이동하고 있어요.', meaning:'먹이를 찾거나 서식처 안에서 이동하는 모습이에요.', action:'사진만 남기고, 들어 올리거나 옮기지 마세요.' },
    { id:'fish', name:'물고기 떼', icon:'🐟', words:['fish','물고기'], risk:'보통', tone:'caution', behavior:'수면 가까이에서 무리 지어 빠르게 이동하고 있어요.', meaning:'먹이 활동 또는 포식자를 피하는 반응일 수 있어요.', action:'해안 가까이에서 관찰하고 현장 안전 안내를 확인하세요.' }
  ];
  /* Keep the existing beach tabs and safety cards in the same index order. */
  beaches.push(
    {n:'다대포',score:'4.2',wave:'0.6m',temp:'25.4°C',wind:'2.9m/s',inc:4,reasons:[['이안류·높은 파도',1,'조류가 강해질 수 있으니 안전 깃발을 확인하세요.'],['안전구역 이탈',2,'부표 안쪽에서만 물놀이하세요.'],['음주·무리한 입수',1,'음주 후 입수는 피하세요.']]},
    {n:'송도',score:'4.1',wave:'0.6m',temp:'25.2°C',wind:'3.1m/s',inc:6,reasons:[['이안류·높은 파도',2,'파도 상태를 확인하고 깊은 곳은 피하세요.'],['안전구역 이탈',2,'안전요원 안내 구역을 지켜주세요.'],['음주·무리한 입수',2,'피로하거나 음주했다면 물에 들어가지 마세요.']]},
    {n:'일광',score:'4.4',wave:'0.4m',temp:'25.3°C',wind:'2.1m/s',inc:3,reasons:[['안전구역 이탈',1,'안전 부표 바깥으로 나가지 마세요.'],['이안류·높은 파도',1,'파도 변화 시 즉시 해안으로 돌아오세요.'],['음주·무리한 입수',1,'혼자 수영하지 마세요.']]},
    {n:'임랑',score:'4.0',wave:'0.8m',temp:'25.0°C',wind:'3.9m/s',inc:5,reasons:[['이안류·높은 파도',2,'파도와 조류 변화를 주의하세요.'],['안전구역 이탈',2,'수심이 깊어지는 구간을 피하세요.'],['음주·무리한 입수',1,'구명조끼를 착용하세요.']]}
  );
  const earth = 6371;
  const dist = (a,b,c,d) => { const r=x=>x*Math.PI/180, q=r(c-a), w=r(d-b), v=Math.sin(q/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(w/2)**2; return earth*2*Math.atan2(Math.sqrt(v),Math.sqrt(1-v)); };
  const findProfile = filename => animalProfiles.find(p => p.words.some(word => filename.toLowerCase().includes(word))) || animalProfiles[4];
  const sourceRender = window.render;
  window.render = function () {
    sourceRender();
    const brand = document.querySelector('.brand');
    if (brand) brand.innerHTML = '바다<i>신호</i>';
    const waveLabel = document.querySelector('.stat span');
    if (waveLabel) waveLabel.textContent = '최대 파도';
    const score = Number(beaches[state.beach].score);
    const stars = document.querySelector('.stars');
    if (stars) {
      stars.setAttribute('aria-label', `별점 ${score}점`);
      stars.innerHTML = Array.from({length:5}, (_, index) => {
        const fill = Math.max(0, Math.min(1, score - index)) * 100;
        return `<span class="score-star" style="--fill:${fill}%">★</span>`;
      }).join('');
    }
    const hero = document.querySelector('.hero');
    if (hero && !document.querySelector('.gps-card')) hero.insertAdjacentHTML('afterend', `<section class="gps-card"><div><span class="gps-icon">⌖</span><div><b>내 주변 해수욕장 찾기</b><small id="gps-message">GPS로 가장 가까운 해수욕장을 선택합니다</small></div></div><button onclick="locateNearestBeach()">현재 위치 사용</button></section>`);
    const gallery = document.querySelector('.gallery');
    if (gallery) {
      gallery.classList.add('journal-gallery');
      gallery.querySelectorAll('.badge').forEach(node => { if (node.textContent.includes('다음 발견')) node.remove(); });
      if (!state.seen.length && !gallery.querySelector('.journal-empty')) gallery.innerHTML = '<div class="journal-empty">📷 첫 해양생물 사진을 올려<br>나만의 바다 도감을 시작하세요.</div>';
    }
    const field = document.querySelector('.field');
    if (field) { const p=field.querySelector('p'); if(p)p.textContent='사진 한 장으로 종 · 행동 · 위험도를 분석합니다'; }
  };
  window.locateNearestBeach = function () {
    const message = document.querySelector('#gps-message');
    if (!navigator.geolocation) { message.textContent='이 기기에서는 GPS를 지원하지 않습니다.'; return; }
    message.textContent='현재 위치를 확인하고 있습니다…';
    navigator.geolocation.getCurrentPosition(pos => {
      let closest = 0, best = Infinity;
      beachLocations.forEach((beach, i) => { const km = dist(pos.coords.latitude,pos.coords.longitude,beach.lat,beach.lng); if(km<best){best=km;closest=i;} });
      state.beach=closest; state.detail=null; window.render();
      setTimeout(()=>{const m=document.querySelector('#gps-message');if(m)m.textContent=`${beachLocations[closest].name} 해수욕장 · 약 ${best.toFixed(1)}km`;},0);
    }, () => { message.textContent='위치 권한을 허용하면 가까운 해수욕장을 선택할 수 있습니다.'; }, {enableHighAccuracy:true,timeout:10000});
  };
  window.locate = window.locateNearestBeach;
  window.selectBeach = function (index) { state.beach=index; state.detail=null; window.render(); };
  window.reason = function (index) { state.detail=state.detail===index?null:index; window.render(); };
  window.analyze = function (input) {
    const file = input.files && input.files[0]; if (!file) return;
    const animal = findProfile(file.name);
    const first = !state.seen.some(entry => entry.name === animal.name);
    if(first){ state.seen.push({name:animal.name,icon:animal.icon}); localStorage.seen=JSON.stringify(state.seen); }
    const image = URL.createObjectURL(file); window.render();
    document.body.insertAdjacentHTML('beforeend', `<div class="modal" onclick="if(event.target===this)this.remove()"><div class="sheet photo-result"><button class="icon-btn close" onclick="this.closest('.modal').remove()">×</button><h2>AI 해양생물 분석</h2><p>사진에서 확인한 관찰 결과입니다.</p><div class="species-result"><img src="${image}" alt="업로드한 해양생물 사진"><div><span class="confidence">분석 신뢰도 82%</span><h3>${animal.icon} ${animal.name}</h3><span class="risk-pill ${animal.tone}">위험도 ${animal.risk}</span></div></div><div class="result-line"><b>어떤 행동인가요?</b><span>${animal.behavior}</span></div><div class="result-line"><b>행동의 의미</b><span>${animal.meaning}</span></div><div class="action-box">💡 <b>이렇게 대처하세요</b><br>${animal.action}</div><span class="tag new">${first?'도감에 새 종을 기록했어요':'기존 종의 관찰 기록을 추가했어요'}</span></div></div>`);
  };
  const css=document.createElement('style'); css.textContent=`.gps-card{margin:0 16px 18px;padding:14px 15px;border:1px solid #b9dfdf;border-radius:18px;background:#e8f7f6;display:flex;align-items:center;justify-content:space-between;gap:12px}.gps-card>div{display:flex;align-items:center;gap:10px}.gps-icon{font-size:26px;color:var(--ocean)}.gps-card b{display:block;font-size:13px}.gps-card small{display:block;margin-top:3px;color:#477278;font-size:11px}.gps-card button{border:0;border-radius:11px;background:var(--deep);color:#fff;padding:10px 11px;font:inherit;font-size:12px;font-weight:700;white-space:nowrap}.journal-gallery{min-height:94px}.journal-empty{width:100%;border:1.5px dashed #9bcfce;border-radius:17px;padding:20px;text-align:center;color:var(--muted);font-size:12px;line-height:1.65}.photo-result h2{margin-bottom:3px}.species-result{display:flex;gap:13px;padding:12px;background:var(--surface);border-radius:17px;margin:16px 0}.species-result img{width:92px;height:92px;object-fit:cover;border-radius:12px}.species-result h3{font-size:18px;margin:8px 0}.confidence{font-size:11px;color:var(--ocean);font-weight:700}.risk-pill{display:inline-block;padding:4px 8px;border-radius:20px;font-size:11px;font-weight:700}.risk-pill.safe{background:#dbf2e4;color:#197247}.risk-pill.caution{background:#fff1cf;color:#986300}.risk-pill.danger{background:#ffe2dd;color:#b83a28}.result-line{border-top:1px solid var(--line);padding:12px 0}.result-line b{display:block;font-size:12px;margin-bottom:5px}.result-line span{font-size:13px;line-height:1.55;color:var(--muted)}.action-box{margin-top:2px;padding:13px;background:#eaf7f6;border-radius:13px;font-size:12px;line-height:1.65;color:#31646b}.action-box b{color:var(--ink)}.score-star{font-size:18px;background:linear-gradient(90deg,#f7b928 var(--fill),#dbe3e6 var(--fill));-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:0}.stars{display:flex;gap:1px}.sheet .choice{color:var(--ink);background:var(--surface);border-color:var(--line)}.sheet .choice.active{background:var(--deep);border-color:var(--deep);color:#fff}body.dark .gps-card,body.dark .action-box{background:#173c44}body.dark .gps-card small,body.dark .action-box{color:#c4e7e5}body.dark .sheet .choice{color:#fff;background:#263b46;border-color:#58707c}body.dark .sheet .choice.active{background:#fff;color:#075873;border-color:#fff}`; document.head.appendChild(css);
  const launchScreen = document.querySelector('.start');
  if (launchScreen) {
    const launchTitle = launchScreen.querySelector('h1');
    if (launchTitle) launchTitle.textContent = '바다신호';
  } else {
    window.render();
  }
}());
