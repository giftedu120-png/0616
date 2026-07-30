/* Interface translations kept separate from beach and safety data. */
(function () {
  const copy = {
    en:{ beach:'Beach', live:'BUSAN OCEAN SAFETY · LIVE', near:'Find nearest beach', gpsTitle:'Find a beach near me', gpsText:'Uses GPS to select the nearest beach', gpsButton:'Use current location', score:'Generally suitable for swimming', scoreText:'We combine waves, wind, water temperature and recent incidents. Check beach flags before entering.', wave:'Max wave', water:'Water temp.', wind:'Wind speed', total:'Total incidents', guide1:'Life jacket first', guide1t:'Children and beginners should wear one even in shallow water.', guide2:'If caught in a rip current', guide2t:'Swim parallel to shore, then call for help.', journal:'My Sea Journal', journalText:'One photo identifies species, behaviour and risk.', upload:'Upload marine-life photo', empty:'Upload your first marine-life photo<br>to start your Sea Journal.', reasons:['Rip currents & waves','Alcohol / unsafe entry','Outside safety zone'] },
    ja:{ beach:'海水浴場', live:'BUSAN OCEAN SAFETY · LIVE', near:'最寄りの海水浴場を探す', gpsTitle:'近くの海水浴場を探す', gpsText:'GPSで最寄りの海水浴場を選びます', gpsButton:'現在地を使う', score:'比較的泳ぎやすい状態です', scoreText:'波、風、水温、最近の事故情報を総合しています。入水前に安全旗を確認してください。', wave:'最大波', water:'水温', wind:'風速', total:'事故総数', guide1:'ライフジャケット必須', guide1t:'子どもや初心者は浅い場所でも着用してください。', guide2:'離岸流に遭ったら', guide2t:'岸と平行に泳いで抜け、助けを求めてください。', journal:'私の海図鑑', journalText:'写真一枚で種・行動・危険度を分析します。', upload:'海洋生物の写真をアップロード', empty:'最初の海洋生物写真をアップロードして<br>海図鑑を始めましょう。', reasons:['離岸流・高波','飲酒・無理な入水','安全区域外'] },
    zh:{ beach:'海水浴场', live:'BUSAN OCEAN SAFETY · LIVE', near:'查找最近的海水浴场', gpsTitle:'查找附近海水浴场', gpsText:'使用 GPS 选择最近的海水浴场', gpsButton:'使用当前位置', score:'较适合进行水上活动', scoreText:'综合波浪、风速、水温和近期事故信息。入水前请查看安全旗。', wave:'最大浪高', water:'水温', wind:'风速', total:'事故总数', guide1:'务必穿救生衣', guide1t:'儿童和初学者即使在浅水区也应穿着。', guide2:'遇到离岸流时', guide2t:'沿海岸平行游出后寻求帮助。', journal:'我的海洋图鉴', journalText:'一张照片分析物种、行为和风险。', upload:'上传海洋生物照片', empty:'上传第一张海洋生物照片<br>开始你的海洋图鉴。', reasons:['离岸流与高浪','饮酒或冒险下水','离开安全区域'] }
  };
  const originalRender = window.render;
  window.render = function () { originalRender(); apply(); };
  window.setLang = function (lang) { state.lang=lang; localStorage.lang=lang; document.querySelector('.modal')?.remove(); window.render(); };
  document.addEventListener('click', event => {
    if (event.target.closest('.go')) setTimeout(() => window.render(), 0);
  });
  function set(selector, value) { const node=document.querySelector(selector); if(node) node.innerHTML=value; }
  function apply() {
    const p=copy[state.lang]; if(!p) return;
    set('.hero .eyebrow',p.live); set('.place',`📍 ${beaches[state.beach].n} ${p.beach}`); set('.locate',`◎ ${p.near}`);
    set('.score h3',p.score); set('.score p',p.scoreText);
    document.querySelectorAll('.stat span').forEach((node,index)=>node.textContent=[p.wave,p.water,p.wind][index]);
    set('.acc-top b',p.total); document.querySelectorAll('.reason span').forEach((node,index)=>node.textContent=p.reasons[index]||p.reasons[2]);
    const tips=document.querySelector('.tips'); if(tips) tips.innerHTML=`<div class="tip">🦺<strong>${p.guide1}</strong><p>${p.guide1t}</p></div><div class="tip">🆘<strong>${p.guide2}</strong><p>${p.guide2t}</p></div>`;
    set('.field h3',p.journal); set('.field p',p.journalText); set('.upload',`＋ ${p.upload}`); set('.journal-empty',p.empty);
    set('.gps-card b',p.gpsTitle); set('.gps-card button',p.gpsButton);
    const gps=document.querySelector('#gps-message'); if(gps && !gps.dataset.distance) gps.textContent=p.gpsText;
  }
  apply();
}());
