/* Visitor safety content: marine-life awareness, beach notes and practical first aid. */
(function () {
  const content = {
    ko: {
      watchTitle: '이번 달 해변에서 주의할 생물', watchSub: '5종 알아보기', watchNote: '해수욕장·갯바위에서 자주 마주칠 수 있는 생물입니다. 출현 여부는 계절·해역·날씨에 따라 달라지므로 현장 안내를 우선하세요.',
      beachTitle: '선택한 해수욕장 한눈에 보기', beachLabel: '해수욕장 매력',
      guideTitle: '안전수칙 · 응급대응', guideSub: '위급 시 119',
      animals: [
        ['해파리', '촉수의 자포에 쏘이면 통증·발진이 생길 수 있습니다. 보이면 만지지 말고 안전요원에게 알리세요.'],
        ['성게', '바위 주변에 붙어 있으며 가시에 찔리면 상처와 통증이 생길 수 있습니다. 물속 신발을 착용하세요.'],
        ['말미잘', '촉수에 쏘는 세포가 있어 피부가 따갑거나 붉어질 수 있습니다. 호기심으로 만지지 마세요.'],
        ['따개비', '바위와 시설물에 붙은 단단하고 날카로운 껍데기에 베일 수 있습니다. 맨발로 밟거나 손을 짚지 마세요.'],
        ['게', '돌 틈이나 모래에 숨어 있으며 집게에 물릴 수 있습니다. 잡거나 괴롭히지 말고 관찰만 하세요.']
      ],
      beaches: [
        ['해운대', '넓게 펼쳐진 백사장과 활기찬 해변 분위기를 함께 즐길 수 있는 부산의 대표 명소입니다.'],
        ['광안리', '광안대교를 바라보는 탁 트인 야경이 매력적이며, 카페·식당과 함께 산책하기 좋습니다.'],
        ['송정', '여유로운 해변 풍경과 서핑 문화가 어우러져, 바다를 가까이에서 즐기기 좋은 곳입니다.'],
        ['다대포', '넓은 모래사장과 아름다운 일몰로 유명해, 가족 나들이와 노을 산책에 잘 어울립니다.'],
        ['송도', '도심에서 찾기 쉬우며 해상 케이블카와 바다 산책길까지 함께 즐길 수 있습니다.'],
        ['일광', '한적하고 편안한 분위기의 바다를 찾는 사람에게 어울리며, 잔잔한 해변 산책을 즐기기 좋습니다.'],
        ['임랑', '자연스러운 해안 풍경과 시원한 바닷바람이 매력적인, 비교적 여유로운 해변입니다.']
      ],
      guides: [
        ['준비운동', '물에 들어가기 전 5~10분간 발목 돌리기·종아리·어깨 스트레칭을 하세요. 몸이 떨리거나 피곤하면 입수를 미루세요.', '안전수칙'],
        ['어린이 안전', '어린이는 보호자의 팔이 닿는 거리에서만 놀게 하세요. 구명조끼를 착용하고 튜브만 믿고 혼자 두지 마세요.', '안전수칙'],
        ['튜브 사용', '튜브는 구조장비가 아닌 보조용품입니다. 바람이 강하거나 이안류가 의심되면 사용하지 말고, 공기 주입 상태를 확인하세요.', '안전수칙'],
        ['이안류 대처', '해안 쪽으로 맞서 헤엄치지 말고 해안과 나란히 이동하세요. 벗어나기 어렵다면 팔을 들어 구조를 요청하세요.', '안전수칙'],
        ['해파리에 쏘였을 때', '바닷물로 촉수를 씻어내고 문지르지 마세요. 통증이 심하거나 호흡이 불편하면 즉시 119와 안전요원에게 도움을 요청하세요.', '응급대응'],
        ['열사병이 의심될 때', '그늘로 옮겨 옷을 느슨하게 하고, 의식이 있으면 시원한 물을 조금씩 마시게 하세요. 의식 저하·구토 시 119에 신고하세요.', '응급대응']
      ]
    },
    en: {
      watchTitle: 'Beach creatures to watch this month', watchSub: '5 species', watchNote: 'These may be encountered at beaches and rocky shores. Presence varies by season, area and weather; follow local guidance first.', beachTitle: 'Your selected beach at a glance', beachLabel: 'Beach highlights', guideTitle: 'Safety rules & first aid', guideSub: 'Emergency: 119',
      animals: [['Jellyfish','Tentacles can sting and cause pain or rash. Do not touch; tell a lifeguard if spotted.'],['Sea urchin','Spines around rocky areas can puncture skin and cause pain. Wear water shoes.'],['Sea anemone','Stinging cells in tentacles can irritate skin. Do not touch out of curiosity.'],['Barnacles','Hard, sharp shells on rocks and structures can cut bare feet or hands.'],['Crabs','They hide among rocks or sand and may pinch. Observe without catching or disturbing them.']],
      beaches: [['Haeundae','Busan’s signature beach, with a long sandy shore and a lively waterfront atmosphere.'],['Gwangalli','Enjoy open views of Gwangan Bridge, especially at night, plus cafés and a pleasant waterfront walk.'],['Songjeong','A relaxed shoreline where beach time and Busan’s surfing culture meet.'],['Dadaepo','Known for its broad sand, beautiful sunsets and an easygoing setting for family walks.'],['Songdo','An easy city escape with a sea cable car and coastal walks to enjoy alongside the beach.'],['Ilgwang','A quieter, more relaxed stretch of coast that is lovely for an unhurried beach walk.'],['Imrang','A spacious, less crowded beach with natural coastal scenery and refreshing sea breezes.']],
      guides: [['Warm up','Before entering, spend 5–10 minutes on ankle circles and calf and shoulder stretches. Delay entry if you are cold or tired.','Safety rule'],['Children','Keep children within arm’s reach. Use a life jacket; do not leave a child alone with only an inflatable.','Safety rule'],['Inflatables','An inflatable is not rescue equipment. Do not use one in strong wind or suspected rip currents; check inflation first.','Safety rule'],['Rip current','Do not fight directly toward shore. Move parallel to shore, then raise an arm and call for help if needed.','Safety rule'],['Jellyfish sting','Rinse tentacles with seawater and do not rub. For severe pain or breathing trouble, call 119 and alert a lifeguard.','First aid'],['Possible heatstroke','Move to shade and loosen clothing. If conscious, give small sips of cool water; call 119 for confusion, fainting or vomiting.','First aid']]
    },
    ja: {
      watchTitle: '今月海辺で注意したい生き物', watchSub: '5種類', watchNote: '海水浴場や岩場で出会うことがある生き物です。出現は季節・海域・天候で変わるため、現地案内を優先してください。', beachTitle: '選択中の海水浴場の特徴', beachLabel: '海水浴場の魅力', guideTitle: '安全ルール・応急対応', guideSub: '緊急時: 119',
      animals: [['クラゲ','触手に刺されると痛みや発疹が出ることがあります。触れずにライフガードへ知らせてください。'],['ウニ','岩場の棘が皮膚に刺さり、けがや痛みにつながることがあります。マリンシューズを履きましょう。'],['イソギンチャク','触手の刺胞で皮膚が刺激されることがあります。興味本位で触らないでください。'],['フジツボ','岩や施設に付く硬く鋭い殻で、素足や手を切ることがあります。'],['カニ','岩陰や砂に隠れ、はさまれることがあります。捕まえず観察だけにしましょう。']],
      beaches: [['ヘウンデ','広い砂浜と活気ある海辺の雰囲気を楽しめる、釜山を代表するビーチです。'],['クァンアンリ','広安大橋を望む開放的な夜景が魅力で、カフェ巡りや海辺の散歩にもぴったりです。'],['ソンジョン','ゆったりした海辺の景色とサーフィン文化が調和した、海を身近に感じられる場所です。'],['タデポ','広い砂浜と美しい夕日で知られ、家族での外出や夕暮れの散歩に似合います。'],['ソンド','市内から訪れやすく、海上ケーブルカーや海辺の散策路も一緒に楽しめます。'],['イルグァン','静かで穏やかな雰囲気が魅力。のんびり海辺を歩きたい人におすすめです。'],['イムラン','自然な海岸風景と爽やかな潮風が魅力の、比較的ゆったりしたビーチです。']],
      guides: [['準備運動','入水前に5〜10分、足首回し・ふくらはぎ・肩のストレッチをしてください。寒気や疲れがあれば延期します。','安全ルール'],['子どもの安全','子どもは保護者の手が届く範囲で遊ばせます。ライフジャケットを着せ、浮き輪だけで一人にしないでください。','安全ルール'],['浮き輪の使い方','浮き輪は救助器具ではありません。強風や離岸流が疑われる時は使わず、空気量を確認してください。','安全ルール'],['離岸流への対応','岸へ逆らって泳がず、岸と平行に移動してください。難しい時は腕を上げて助けを求めます。','安全ルール'],['クラゲに刺された時','海水で触手を流し、こすらないでください。強い痛みや呼吸の苦しさがあれば119とライフガードに連絡します。','応急対応'],['熱中症が疑われる時','日陰へ移し衣服を緩めます。意識があれば冷たい水を少しずつ。意識低下・嘔吐は119へ連絡します。','応急対応']]
    },
    zh: {
      watchTitle: '本月海边需注意的生物', watchSub: '5种', watchNote: '这些生物可能在海滩或礁石区遇到。是否出现会因季节、海域和天气而变化，请优先听从现场指引。', beachTitle: '所选海滩简介', beachLabel: '海滩亮点', guideTitle: '安全守则 · 应急处理', guideSub: '紧急情况：119',
      animals: [['水母','触手蜇伤可能造成疼痛或皮疹。请勿触碰，发现后告知救生员。'],['海胆','礁石区的棘可能刺伤皮肤并引发疼痛。请穿涉水鞋。'],['海葵','触手中的刺细胞可能刺激皮肤。请勿因好奇触摸。'],['藤壶','岩石和设施上的坚硬尖锐外壳可能割伤赤脚或手。'],['螃蟹','可能藏在岩缝或沙中，并会夹人。请只观察，不要抓取或打扰。']],
      beaches: [['海云台','釜山最具代表性的海滩，拥有开阔沙滩和充满活力的海滨氛围。'],['广安里','可欣赏广安大桥的开阔夜景，适合逛咖啡馆和沿海散步。'],['松亭','悠闲的海滩风景与冲浪文化相结合，适合近距离感受大海。'],['多大浦','以宽阔沙滩和美丽落日闻名，很适合家庭出游和傍晚散步。'],['松岛','从市区前往方便，还可一并体验海上缆车和海边步道。'],['日光','氛围安静舒适，适合想慢慢享受海边散步的人。'],['林浪','自然海岸景观和清爽海风令人放松，是相对悠闲的海滩。']],
      guides: [['入水前热身','下水前用5—10分钟做脚踝、腿部和肩部拉伸。发冷或疲劳时请推迟下水。','安全守则'],['儿童安全','让儿童始终处在监护人伸手可及的范围内。穿救生衣，不要只依靠泳圈让儿童单独玩水。','安全守则'],['泳圈使用','泳圈不是救援设备。强风或疑似离岸流时不要使用，并先检查充气状态。','安全守则'],['离岸流应对','不要逆着海岸方向硬游；沿海岸平行移动。难以脱离时举手求救。','安全守则'],['被水母蜇伤','用海水冲去触手，不要揉搓。剧痛或呼吸困难时，请立即拨打119并通知救生员。','应急处理'],['疑似中暑','移到阴凉处，松开衣物；意识清醒时少量多次喝凉水。意识不清、昏厥或呕吐时拨打119。','应急处理']]
    }
  };

  const currentState = () => typeof state === 'undefined' ? {lang:'ko', beach:0} : state;
  const language = () => content[currentState().lang] || content.ko;
  const beachIndex = () => Math.min(Math.max(Number(currentState().beach || 0), 0), 6);

  function watchCard(p) {
    return `<article class="marine-watch"><div class="marine-items">${p.animals.map(([name,text]) => `<div class="marine-item"><div><b>${name}</b><p>${text}</p></div></div>`).join('')}</div><p class="marine-note">${p.watchNote}</p></article>`;
  }

  function beachCard(p) {
    const [name, text] = p.beaches[beachIndex()];
    return `<article class="beach-intro"><span>📍 ${p.beachLabel}</span><b>${name}</b><p>${text}</p></article>`;
  }

  function guideCards(p) {
    return `<div class="practical-guide">${p.guides.map(([title,text,type]) => `<article class="guide-card"><span>${type}</span><b>${title}</b><p>${text}</p></article>`).join('')}</div>`;
  }

  function applyMarineSafetyContent() {
    const p = language();
    const sections = [...document.querySelectorAll('.section')];
    const incidentSection = sections.find(section => section.querySelector('.accident'));
    if (incidentSection) {
      const title = incidentSection.querySelector('.section-head h2');
      const sub = incidentSection.querySelector('.section-head .sub');
      if (title) title.textContent = p.watchTitle;
      if (sub) sub.textContent = p.watchSub;
      incidentSection.querySelector('.accident')?.replaceWith(document.createRange().createContextualFragment(watchCard(p)));
      document.querySelector('.incident-data-note')?.remove();
      document.querySelector('.incident-detail')?.remove();
    }

    const beachSection = sections.find(section => section.querySelector('.beaches'));
    if (beachSection) {
      beachSection.querySelector('.beach-intro')?.remove();
      beachSection.insertAdjacentHTML('beforeend', beachCard(p));
    }

    const guideSection = sections.find(section => section.querySelector('.tips'));
    if (guideSection) {
      const title = guideSection.querySelector('.section-head h2');
      const sub = guideSection.querySelector('.section-head .sub');
      if (title) title.textContent = p.guideTitle;
      if (sub) sub.textContent = p.guideSub;
      guideSection.querySelector('.tips')?.replaceWith(document.createRange().createContextualFragment(guideCards(p)));
    }
  }

  const previousRender = window.render;
  window.render = function () { previousRender(); applyMarineSafetyContent(); };
  // Live environmental data re-applies the language labels after each beach change.
  // Re-apply this section afterwards so its title never turns back into an incident label.
  const previousLocalizeDataNotes = window.localizeDataNotes;
  window.localizeDataNotes = function () {
    previousLocalizeDataNotes?.();
    applyMarineSafetyContent();
  };
  applyMarineSafetyContent();

  const style = document.createElement('style');
  style.textContent = `
    .beach-intro{margin-top:12px;padding:14px 15px;border:1px solid var(--line);border-radius:17px;background:var(--card);box-shadow:var(--shadow)}
    .beach-intro span{display:block;color:var(--ocean);font-size:11px;font-weight:800}.beach-intro b{display:block;margin-top:5px;font-size:15px}.beach-intro p{margin:5px 0 0;color:var(--muted);font-size:12px;line-height:1.55}
    .marine-watch{border-radius:19px;background:var(--card);box-shadow:var(--shadow);overflow:hidden}.marine-items{display:grid;grid-template-columns:1fr 1fr}.marine-item{padding:13px 11px;border-bottom:1px solid var(--line)}.marine-item:nth-child(odd){border-right:1px solid var(--line)}.marine-item:last-child{grid-column:1 / -1;border-bottom:0}.marine-item b{display:block;font-size:13px}.marine-item p{margin:4px 0 0;color:var(--muted);font-size:10px;line-height:1.45}.marine-note{margin:0;padding:10px 12px;background:#eaf7f6;color:#35646c;font-size:10px;line-height:1.45}
    .practical-guide{display:grid;grid-template-columns:1fr 1fr;gap:10px}.guide-card{min-height:150px;padding:14px;border:1px solid var(--line);border-radius:17px;background:var(--card)}.guide-card:nth-child(5),.guide-card:nth-child(6){background:#fff4ed}.guide-card>span{display:inline-block;padding:3px 7px;border-radius:99px;background:#dff5f3;color:var(--ocean);font-size:10px;font-weight:800}.guide-card:nth-child(5)>span,.guide-card:nth-child(6)>span{background:#ffe1d7;color:#b85037}.guide-card b{display:block;margin:9px 0 5px;font-size:13px}.guide-card p{margin:0;color:var(--muted);font-size:11px;line-height:1.52}
    body.dark .beach-intro,.dark .marine-watch,.dark .guide-card{background:#15333f;border-color:#315563}.dark .marine-note{background:#173c44;color:#c4e7e5}.dark .guide-card:nth-child(5),body.dark .guide-card:nth-child(6){background:#3a302f}
  `;
  document.head.appendChild(style);
}());
