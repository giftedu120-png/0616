/* Complete visitor-facing localisation for the four supported languages. */
(function () {
  const locales = {
    ko: {
      brand:['안전해','수욕장'], beach:'해수욕장', title:'안전해수욕장',
      start:'부산 바다의 안전 신호를 읽고,<br>더 안심되는 물놀이를 시작하세요.', chooseLang:'언어를 선택하세요', chooseTheme:'화면 모드', light:'☀ 라이트 모드', dark:'☾ 다크 모드', begin:'한국어로 시작하기 →',
      live:'BUSAN OCEAN SAFETY · LIVE', nearest:'내 위치에서 가장 가까운 해수욕장', gpsTitle:'내 주변 해수욕장 찾기', gpsText:'GPS로 가장 가까운 해수욕장을 선택합니다.', gpsButton:'현재 위치 사용',
      safety:'안전 적합도', overall:'AI 종합 판단', rating:'물놀이에 비교적 적합해요', ratingText:'파도, 풍속, 수온과 최근 사고 현황을 종합했어요. 입수 전 현장 안전 깃발을 꼭 확인하세요.', wave:'최대 파도', water:'수온', wind:'풍속',
      incidents:'최근 30일 물놀이 사고', official:'공식 확인 사고 기록 · 최근 30일', noIncidents:'등록된 공식 확인 사고 기록이 없습니다.', incidentNote:'관리자가 공식 기관 자료를 확인한 뒤 직접 등록한 기록입니다.',
      guide:'안전 수칙 · 응급 대응', guide1:'구명조끼는 필수', guide1t:'어린이·초보자는 얕은 곳에서도 반드시 착용하세요.', guide2:'이안류를 만났다면', guide2t:'해안과 나란히 헤엄쳐 벗어난 뒤 도움을 요청하세요.',
      journal:'나의 바다 도감', journalText:'사진 한 장으로 종·행동·위험도를 분석합니다.', journalLink:'✦ 나의 바다 도감 열기', discovered:'종 발견', observed:'관찰 완료', empty:'첫 해양생물 사진을 올려<br>나의 바다 도감을 시작하세요.', source:'실시간 해양 예보 · Open-Meteo', detail:'현장 안전요원의 안내와 기상 변화를 확인한 뒤 안전 구역 안에서 물놀이하세요.', emergency:'위급 시 119', settings:'설정', settingsText:'언어와 화면 테마를 직접 선택하세요.'
    },
    en: {
      brand:['Safe','Beach'], beach:'Beach', title:'Safe Beach',
      start:'Read Busan’s ocean safety signals<br>and enjoy the water with confidence.', chooseLang:'Choose your language', chooseTheme:'Choose display mode', light:'☀ Light mode', dark:'☾ Dark mode', begin:'Start in English →',
      live:'BUSAN BEACH SAFETY · LIVE', nearest:'Find the nearest beach', gpsTitle:'Find a beach near me', gpsText:'Use GPS to select the nearest beach.', gpsButton:'Use my location',
      safety:'Swimming safety score', overall:'AI overall assessment', rating:'Generally suitable for swimming', ratingText:'This combines waves, wind, water temperature and recent incidents. Check the beach safety flags before entering.', wave:'Maximum wave', water:'Water temperature', wind:'Wind speed',
      incidents:'Water incidents · last 30 days', official:'Officially verified incident records · last 30 days', noIncidents:'No officially verified incident records have been added.', incidentNote:'These records are added only after an administrator checks an official source.',
      guide:'Safety rules & first aid', guide1:'Wear a life jacket', guide1t:'Children and beginners should wear one even in shallow water.', guide2:'If caught in a rip current', guide2t:'Swim parallel to shore, then call for help.',
      journal:'My Sea Journal', journalText:'One photo identifies the species, behaviour and risk.', journalLink:'✦ Open My Sea Journal', discovered:'species found', observed:'Observed', empty:'Upload your first marine-life photo<br>to begin your Sea Journal.', source:'Live marine forecast · Open-Meteo', detail:'Follow lifeguard guidance, watch changing conditions and stay within the designated swimming area.', emergency:'Emergency: 119', settings:'Settings', settingsText:'Choose your language and display mode.'
    },
    ja: {
      brand:['安全','海水浴場'], beach:'海水浴場', title:'安全海水浴場',
      start:'釜山の海の安全サインを読み取り、<br>もっと安心して海水浴を始めましょう。', chooseLang:'言語を選択してください', chooseTheme:'表示モードを選択してください', light:'☀ ライトモード', dark:'☾ ダークモード', begin:'日本語で始める →',
      live:'BUSAN BEACH SAFETY · LIVE', nearest:'現在地から最も近い海水浴場', gpsTitle:'近くの海水浴場を探す', gpsText:'GPSで最も近い海水浴場を選択します。', gpsButton:'現在地を使用',
      safety:'遊泳安全スコア', overall:'AI総合判断', rating:'比較的海水浴に適した状態です', ratingText:'波・風・水温・最近の事故状況を総合しています。入水前に現地の安全旗を確認してください。', wave:'最大波高', water:'水温', wind:'風速',
      incidents:'過去30日の水遊び事故', official:'公式確認済み事故記録・過去30日', noIncidents:'公式確認済みの事故記録はありません。', incidentNote:'管理者が公式機関の資料を確認してから登録した記録です。',
      guide:'安全ルール・応急対応', guide1:'ライフジャケットを着用', guide1t:'子どもや初心者は浅瀬でも必ず着用してください。', guide2:'離岸流に遭遇したら', guide2t:'岸と平行に泳いで抜け、助けを求めてください。',
      journal:'わたしの海図鑑', journalText:'写真1枚から種類・行動・危険度を分析します。', journalLink:'✦ わたしの海図鑑を開く', discovered:'種を発見', observed:'観察完了', empty:'最初の海洋生物の写真をアップロードして<br>海図鑑を始めましょう。', source:'海洋予報（リアルタイム）・Open-Meteo', detail:'ライフガードの案内と気象の変化を確認し、指定された遊泳区域内で楽しんでください。', emergency:'緊急時：119', settings:'設定', settingsText:'言語と表示モードを選択してください。'
    },
    zh: {
      brand:['安全','海滩'], beach:'海滩', title:'安全海滩',
      start:'读取釜山海洋安全信号，<br>更安心地开始戏水吧。', chooseLang:'请选择语言', chooseTheme:'请选择显示模式', light:'☀ 浅色模式', dark:'☾ 深色模式', begin:'用中文开始 →',
      live:'BUSAN BEACH SAFETY · LIVE', nearest:'离您最近的海滩', gpsTitle:'查找附近海滩', gpsText:'使用 GPS 选择最近的海滩。', gpsButton:'使用当前位置',
      safety:'戏水安全评分', overall:'AI 综合判断', rating:'较适合进行水上活动', ratingText:'综合波浪、风速、水温和近期事故情况。下水前请确认现场安全旗帜。', wave:'最大浪高', water:'水温', wind:'风速',
      incidents:'近30天戏水事故', official:'官方确认事故记录 · 近30天', noIncidents:'暂无已登记的官方确认事故记录。', incidentNote:'这些记录由管理员核实官方资料后登记。',
      guide:'安全守则与急救', guide1:'请穿救生衣', guide1t:'儿童和初学者即使在浅水区也应穿着救生衣。', guide2:'遇到离岸流时', guide2t:'沿着与海岸平行的方向游出，再呼救。',
      journal:'我的海洋图鉴', journalText:'一张照片即可分析物种、行为和风险。', journalLink:'✦ 打开我的海洋图鉴', discovered:'种已发现', observed:'已观察', empty:'上传第一张海洋生物照片，<br>开始创建您的海洋图鉴。', source:'实时海洋预报 · Open-Meteo', detail:'请遵从救生员指引，留意天气变化，并在指定的游泳区域内活动。', emergency:'紧急情况：119', settings:'设置', settingsText:'请选择语言和显示模式。'
    }
  };
  const beachNames = {
    ko:['해운대','광안리','송정','다대포','송도','일광','임랑'],
    en:['Haeundae','Gwangalli','Songjeong','Dadaepo','Songdo','Ilgwang','Imrang'],
    ja:['ヘウンデ','広安里','松亭','多大浦','松島','日光','林浪'],
    zh:['海云台','广安里','松亭','多大浦','松岛','日光','林浪']
  };
  const reasons = {
    ko:['이안류·높은 파도','음주·무리한 입수','안전구역 이탈','해파리·해양생물 접촉','기타'],
    en:['Rip current & high waves','Alcohol / unsafe entry','Outside safety zone','Jellyfish / marine-life contact','Other'],
    ja:['離岸流・高波','飲酒・無理な入水','安全区域外への立ち入り','クラゲ・海洋生物との接触','その他'],
    zh:['离岸流与大浪','饮酒或冒险下水','离开安全区域','水母或海洋生物接触','其他']
  };
  const languageNames = {ko:['한국어','English','日本語','中文'],en:['Korean','English','Japanese','Chinese'],ja:['韓国語','英語','日本語','中国語'],zh:['韩语','英语','日语','中文']};
  const languageCodes = ['ko','en','ja','zh'];
  const emergencyTips = {
    ko:[
      ['입수 전 10분 확인','파도·풍속·안전 깃발을 확인하고, 혼자 먼 곳까지 들어가지 마세요.'],
      ['물에 빠진 사람을 보면','직접 뛰어들기보다 119와 안전요원에게 알리고, 튜브·페트병처럼 뜨는 물건을 던져 주세요.'],
      ['해파리에 쏘였을 때','바닷물로 촉수를 씻어내고 문지르지 마세요. 통증이나 호흡 이상이 있으면 즉시 119에 연락하세요.'],
      ['이안류에 휩쓸렸을 때','해안과 평행한 방향으로 이동해 흐름을 벗어난 뒤, 팔을 들어 도움을 요청하세요.'],
      ['어린이와 물놀이할 때','보호자는 어린이와 팔이 닿는 거리를 유지하고, 구명조끼를 반드시 착용시켜 주세요.']
    ],
    en:[
      ['Check conditions for 10 minutes','Check waves, wind and safety flags before entering. Do not swim far out alone.'],
      ['If you see someone in trouble','Call 119 and alert a lifeguard. Throw a floating object instead of entering the water yourself.'],
      ['If stung by a jellyfish','Rinse tentacles with seawater and do not rub. Call 119 immediately for severe pain or breathing problems.'],
      ['If caught in a rip current','Move parallel to shore to leave the current, then raise an arm and call for help.'],
      ['Swimming with children','Stay within arm’s reach and make sure every child wears a life jacket.']
    ],
    ja:[
      ['入水前に10分確認','波・風・安全旗を確認し、1人で沖まで行かないでください。'],
      ['おぼれている人を見かけたら','自分で飛び込まず、119とライフガードに知らせ、浮く物を投げてください。'],
      ['クラゲに刺されたら','海水で触手を洗い流し、こすらないでください。強い痛みや呼吸の異常は直ちに119へ。'],
      ['離岸流に流されたら','岸と平行に移動して流れから抜け、腕を上げて助けを求めてください。'],
      ['子どもと海水浴するとき','保護者は子どもの腕が届く距離を保ち、必ずライフジャケットを着用させてください。']
    ],
    zh:[
      ['下水前确认10分钟','请确认波浪、风速和安全旗帜，不要独自游向深水区。'],
      ['看到有人遇险时','不要贸然下水，请拨打119并通知救生员，同时抛出救生圈等漂浮物。'],
      ['被水母蜇伤时','用海水冲洗触手，不要揉搓。若疼痛严重或呼吸异常，请立即拨打119。'],
      ['被离岸流卷走时','沿着与海岸平行的方向游出水流，再举起手臂呼救。'],
      ['与儿童戏水时','监护人应始终保持一臂距离，并确保儿童穿着救生衣。']
    ]
  };
  const tipIndex = Math.floor(Math.random() * emergencyTips.ko.length);
  const t = () => locales[state.lang] || locales.ko;
  const setText = (node, value) => { if (node) node.textContent = value; };
  const setHTML = (node, value) => { if (node) node.innerHTML = value; };
  const brandHTML = p => `<span class="brand-orange">${p.brand[0]}</span><span class="title-white">${p.brand[1]}</span>`;

  const originalStart = window.start;
  if (originalStart) window.start = function () { originalStart(); apply(); };
  const originalRender = window.render;
  window.render = function () { originalRender(); apply(); };

  function applyLaunch(p) {
    const start = document.querySelector('.start'); if (!start) return;
    const h1 = start.querySelector('h1'); if (h1) h1.innerHTML = brandHTML(p);
    setHTML(start.querySelector('p'), p.start);
    const labels = start.querySelectorAll('.choose-label'); setText(labels[0], p.chooseLang); setText(labels[1], p.chooseTheme);
    const choices = start.querySelectorAll('.choice');
    choices.forEach((choice, i) => { if (i < 4) setText(choice, languageNames[state.lang][i]); });
    setText(choices[4], p.light); setText(choices[5], p.dark); setText(start.querySelector('.go'), p.begin);
  }

  function apply() {
    const p = t(), lang = state.lang || 'ko';
    document.documentElement.lang = lang;
    document.title = p.title;
    document.body.classList.remove('locale-ko','locale-en','locale-ja','locale-zh');
    document.body.classList.add(`locale-${lang}`);
    applyLaunch(p);
    const brand = document.querySelector('.top .brand'); if (brand) brand.innerHTML = brandHTML(p);
    setText(document.querySelector('.hero .eyebrow'), p.live);
    const names = beachNames[lang];
    setText(document.querySelector('.place'), `📍 ${names[state.beach]} ${p.beach}`);
    setText(document.querySelector('.locate'), `◎ ${p.nearest}`);
    document.querySelectorAll('.beach').forEach((button, i) => setText(button, `${names[i]} ${p.beach}`));
    const sectionTitles = document.querySelectorAll('.section-head h2');
    setText(sectionTitles[0], p.safety); setText(sectionTitles[1], p.incidents); setText(sectionTitles[2], p.guide); setText(sectionTitles[3], p.journal);
    const sectionSubtitles = document.querySelectorAll('.section-head .sub');
    setText(sectionSubtitles[0], p.overall); setText(sectionSubtitles[1], `${names[state.beach]} ${p.beach}`); setText(sectionSubtitles[2], p.emergency);
    setText(document.querySelector('.score h3'), p.rating); setText(document.querySelector('.score p'), p.ratingText);
    document.querySelectorAll('.stat span').forEach((node, i) => setText(node, [p.wave,p.water,p.wind][i]));
    setText(document.querySelector('.acc-top b'), p.official);
    document.querySelectorAll('.reason span').forEach((node, i) => setText(node, reasons[lang][i] || reasons[lang][4]));
    setText(document.querySelector('.empty-incidents'), p.noIncidents);
    setText(document.querySelector('.incident-data-note'), p.incidentNote);
    document.querySelectorAll('.tips .tip').forEach((tip, i) => {
      const advice = emergencyTips[lang][(tipIndex + i) % emergencyTips[lang].length];
      setText(tip.querySelector('strong'), advice[0]); setText(tip.querySelector('p'), advice[1]);
    });
    document.querySelectorAll('.badge small').forEach(node => setText(node, p.observed));
    setHTML(document.querySelector('.journal-empty'), p.empty);
    setText(document.querySelector('.field h3'), p.journal); setText(document.querySelector('.field p'), p.journalText);
    const link = document.querySelector('.lovable-journal-link'); if (link) link.innerHTML = `${p.journalLink} <span>→</span>`;
    const gallerySub = sectionTitles[3]?.parentElement?.querySelector('.sub'); if (gallerySub) gallerySub.textContent = `${state.seen.length} ${p.discovered}`;
    setText(document.querySelector('.gps-card b'), p.gpsTitle); setText(document.querySelector('.gps-card button'), p.gpsButton);
    const gps = document.querySelector('#gps-message'); if (gps && !gps.dataset.distance) gps.textContent = p.gpsText;
    document.querySelectorAll('.live-data-note').forEach(node => setText(node, p.source));
    const sheet = document.querySelector('.modal .sheet');
    if (sheet && sheet.querySelector('.choices')) {
      setText(sheet.querySelector('h2'), p.settings); setText(sheet.querySelector('p'), p.settingsText);
      const labels = sheet.querySelectorAll('.choose-label'); setText(labels[0], p.chooseLang); setText(labels[1], p.chooseTheme);
      sheet.querySelectorAll('.choice').forEach((button, i) => { if (i < 4) setText(button, languageNames[lang][i]); else setText(button, i === 4 ? p.light : p.dark); });
    }
    if (lang !== 'ko') { document.querySelector('.incident-manager')?.remove(); document.querySelector('.incident-detail') && setText(document.querySelector('.incident-detail'), p.detail); }
  }
  window.localizeDataNotes = apply;
  apply();
  const style = document.createElement('style');
  style.textContent = `.title-white{color:#63d5ff!important;text-shadow:0 1px 12px #0a78a655}.top .brand .title-white{color:#63d5ff!important}.start h1{font-size:40px!important}.start h1::after{content:none!important}body.locale-en{--ocean:#146c94;--deep:#0e4c6c}body.locale-ja{--ocean:#a84b56;--deep:#74333c}body.locale-zh{--ocean:#16816f;--deep:#0d5c51}.locale-en .start,.locale-en .hero{background-image:linear-gradient(135deg,#0e4c6c,#146c94)}.locale-ja .start,.locale-ja .hero{background-image:linear-gradient(135deg,#74333c,#a84b56)}.locale-zh .start,.locale-zh .hero{background-image:linear-gradient(135deg,#0d5c51,#16816f)}`;
  document.head.appendChild(style);
}());
