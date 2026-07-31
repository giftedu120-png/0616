/* Visitor safety content: marine-life awareness, beach notes and practical first aid. */
(function () {
  const content = {
    ko: {
      watchTitle: '이번 달 주의 해양생물', watchSub: '5종 알아보기', watchNote: '출현 여부는 계절·해역·날씨에 따라 달라집니다. 현장 안전요원의 안내를 우선하세요.',
      beachTitle: '선택한 해수욕장 한눈에 보기', beachLabel: '해수욕장 특징',
      guideTitle: '안전수칙 · 응급대응', guideSub: '위급 시 119',
      animals: [
        ['🪼', '해파리', '촉수에 닿지 말고 발견하면 안전요원에게 알리세요.'],
        ['🐟', '쏠배감펭', '등지느러미 가시에 독이 있어 맨손으로 잡지 마세요.'],
        ['🦔', '성게', '바위·갯바위에서는 물속 신발을 신고 발로 밟지 마세요.'],
        ['🛼', '가오리', '모래 바닥에 숨어 있을 수 있어 발을 끌며 천천히 이동하세요.'],
        ['🐙', '푸른고리문어', '작아도 강한 독이 있어 절대 만지거나 잡지 마세요.']
      ],
      beaches: [
        ['해운대', '폭이 넓고 이용객이 많은 대표 해수욕장입니다. 혼잡 시간에는 일행과 만남 장소를 미리 정하세요.'],
        ['광안리', '도심과 가까워 야간 이용객이 많습니다. 밤에는 시야가 줄어 지정 구역 밖 입수를 피하세요.'],
        ['송정', '파도와 서핑 활동이 활발한 편입니다. 초보자는 파도·서핑 구역을 확인한 뒤 입수하세요.'],
        ['다대포', '모래사장과 갯벌이 넓고 조류 변화가 있을 수 있습니다. 물때와 안전 깃발을 먼저 확인하세요.'],
        ['송도', '도심 접근성이 좋은 해수욕장입니다. 수심 변화가 있는 곳은 부표 안쪽에서만 물놀이하세요.'],
        ['일광', '비교적 한적하고 완만한 해변입니다. 인명구조요원 운영 시간과 날씨 변화를 확인하세요.'],
        ['임랑', '파도와 바람의 영향을 받을 수 있는 해변입니다. 파고가 높으면 물놀이를 미루세요.']
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
      watchTitle: 'Marine life to watch this month', watchSub: '5 species', watchNote: 'Presence varies by season, area and weather. Always follow lifeguard instructions first.', beachTitle: 'Your selected beach at a glance', beachLabel: 'Beach character', guideTitle: 'Safety rules & first aid', guideSub: 'Emergency: 119',
      animals: [['🪼','Jellyfish','Do not touch tentacles; tell a lifeguard if you spot one.'],['🐟','Lionfish','Venomous dorsal spines: never handle it with bare hands.'],['🦔','Sea urchin','Wear water shoes around rocks and do not step on it.'],['🛼','Stingray','It may hide in sand; shuffle your feet slowly in shallow water.'],['🐙','Blue-ringed octopus','Even small animals can be highly venomous. Never touch or catch one.']],
      beaches: [['Haeundae','A wide, popular beach with large crowds. Arrange a meeting point before entering.'],['Gwangalli','A city beach with many evening visitors. Avoid swimming outside designated areas after dark.'],['Songjeong','Waves and surfing are common. Check wave and surfing zones before entering.'],['Dadaepo','A broad beach with tidal-flat areas and changing currents. Check tide and safety flags first.'],['Songdo','An accessible urban beach. Swim only inside buoy-marked areas where depth changes.'],['Ilgwang','A relatively quiet, gently sloped beach. Check lifeguard hours and changing weather.'],['Imrang','A beach affected by waves and wind. Postpone swimming when waves are high.']],
      guides: [['Warm up','Before entering, spend 5–10 minutes on ankle circles and calf and shoulder stretches. Delay entry if you are cold or tired.','Safety rule'],['Children','Keep children within arm’s reach. Use a life jacket; do not leave a child alone with only an inflatable.','Safety rule'],['Inflatables','An inflatable is not rescue equipment. Do not use one in strong wind or suspected rip currents; check inflation first.','Safety rule'],['Rip current','Do not fight directly toward shore. Move parallel to shore, then raise an arm and call for help if needed.','Safety rule'],['Jellyfish sting','Rinse tentacles with seawater and do not rub. For severe pain or breathing trouble, call 119 and alert a lifeguard.','First aid'],['Possible heatstroke','Move to shade and loosen clothing. If conscious, give small sips of cool water; call 119 for confusion, fainting or vomiting.','First aid']]
    },
    ja: {
      watchTitle: '今月注意したい海の生き物', watchSub: '5種類', watchNote: '出現は季節・海域・天候で変わります。現地のライフガードの案内を最優先してください。', beachTitle: '選択中の海水浴場の特徴', beachLabel: '海水浴場の特徴', guideTitle: '安全ルール・応急対応', guideSub: '緊急時: 119',
      animals: [['🪼','クラゲ','触手に触れず、見つけたらライフガードに知らせてください。'],['🐟','ミノカサゴ','背びれの毒棘に注意。素手でつかまないでください。'],['🦔','ウニ','岩場ではマリンシューズを履き、踏まないようにしてください。'],['🛼','エイ','砂に隠れていることがあります。浅瀬では足を引きずるように歩きます。'],['🐙','ヒョウモンダコ','小さくても強い毒があります。絶対に触ったり捕まえたりしないでください。']],
      beaches: [['ヘウンデ','広く利用者の多い代表的な海水浴場です。混雑時は集合場所を決めておきましょう。'],['クァンアンリ','都心に近く夜間の利用者も多い海岸です。夜は指定区域外への入水を避けましょう。'],['ソンジョン','波とサーフィンが活発です。初心者は波・サーフィン区域を確認してから入水してください。'],['タデポ','砂浜と干潟が広く、潮流が変化することがあります。潮位と安全旗を確認しましょう。'],['ソンド','都心から訪れやすい海水浴場です。水深が変わる場所ではブイの内側で泳ぎましょう。'],['イルグァン','比較的静かで緩やかな海岸です。監視員の勤務時間と天候を確認してください。'],['イムラン','波と風の影響を受けやすい海岸です。波が高い日は遊泳を見合わせましょう。']],
      guides: [['準備運動','入水前に5〜10分、足首回し・ふくらはぎ・肩のストレッチをしてください。寒気や疲れがあれば延期します。','安全ルール'],['子どもの安全','子どもは保護者の手が届く範囲で遊ばせます。ライフジャケットを着せ、浮き輪だけで一人にしないでください。','安全ルール'],['浮き輪の使い方','浮き輪は救助器具ではありません。強風や離岸流が疑われる時は使わず、空気量を確認してください。','安全ルール'],['離岸流への対応','岸へ逆らって泳がず、岸と平行に移動してください。難しい時は腕を上げて助けを求めます。','安全ルール'],['クラゲに刺された時','海水で触手を流し、こすらないでください。強い痛みや呼吸の苦しさがあれば119とライフガードに連絡します。','応急対応'],['熱中症が疑われる時','日陰へ移し衣服を緩めます。意識があれば冷たい水を少しずつ。意識低下・嘔吐は119へ連絡します。','応急対応']]
    },
    zh: {
      watchTitle: '本月需注意的海洋生物', watchSub: '5种', watchNote: '是否出现会因季节、海域和天气而变化。请优先听从现场救生员指引。', beachTitle: '所选海滩简介', beachLabel: '海滩特点', guideTitle: '安全守则 · 应急处理', guideSub: '紧急情况：119',
      animals: [['🪼','水母','不要触碰触手；发现后请告知救生员。'],['🐟','蓑鲉','背鳍有毒刺，切勿徒手抓取。'],['🦔','海胆','在礁石区域请穿涉水鞋，避免踩到。'],['🛼','黄貂鱼','可能藏在沙中；浅水行走时请慢慢拖步。'],['🐙','蓝环章鱼','体型虽小但毒性很强。绝对不要触碰或捕捉。']],
      beaches: [['海云台','宽阔且游客众多的代表性海滩。拥挤时请提前约定集合地点。'],['广安里','靠近市区，夜间游客较多。天黑后请勿在指定区域外下水。'],['松亭','海浪和冲浪活动较多。初学者下水前应确认海浪和冲浪区域。'],['多大浦','沙滩和潮滩开阔，潮流可能变化。请先确认潮汐和安全旗。'],['松岛','交通便利的城市海滩。水深变化区域请只在浮标内活动。'],['日光','较安静、坡度平缓的海滩。请确认救生员值班时间和天气变化。'],['林浪','容易受海浪和风力影响。浪高时请推迟戏水。']],
      guides: [['入水前热身','下水前用5—10分钟做脚踝、腿部和肩部拉伸。发冷或疲劳时请推迟下水。','安全守则'],['儿童安全','让儿童始终处在监护人伸手可及的范围内。穿救生衣，不要只依靠泳圈让儿童单独玩水。','安全守则'],['泳圈使用','泳圈不是救援设备。强风或疑似离岸流时不要使用，并先检查充气状态。','安全守则'],['离岸流应对','不要逆着海岸方向硬游；沿海岸平行移动。难以脱离时举手求救。','安全守则'],['被水母蜇伤','用海水冲去触手，不要揉搓。剧痛或呼吸困难时，请立即拨打119并通知救生员。','应急处理'],['疑似中暑','移到阴凉处，松开衣物；意识清醒时少量多次喝凉水。意识不清、昏厥或呕吐时拨打119。','应急处理']]
    }
  };

  const currentState = () => typeof state === 'undefined' ? {lang:'ko', beach:0} : state;
  const language = () => content[currentState().lang] || content.ko;
  const beachIndex = () => Math.min(Math.max(Number(currentState().beach || 0), 0), 6);

  function watchCard(p) {
    return `<article class="marine-watch"><div class="marine-items">${p.animals.map(([icon,name,text]) => `<div class="marine-item"><span>${icon}</span><div><b>${name}</b><p>${text}</p></div></div>`).join('')}</div><p class="marine-note">ⓘ ${p.watchNote}</p></article>`;
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
  applyMarineSafetyContent();

  const style = document.createElement('style');
  style.textContent = `
    .beach-intro{margin-top:12px;padding:14px 15px;border:1px solid var(--line);border-radius:17px;background:var(--card);box-shadow:var(--shadow)}
    .beach-intro span{display:block;color:var(--ocean);font-size:11px;font-weight:800}.beach-intro b{display:block;margin-top:5px;font-size:15px}.beach-intro p{margin:5px 0 0;color:var(--muted);font-size:12px;line-height:1.55}
    .marine-watch{border-radius:19px;background:var(--card);box-shadow:var(--shadow);overflow:hidden}.marine-items{display:grid;grid-template-columns:1fr 1fr}.marine-item{display:flex;gap:8px;padding:13px 11px;border-bottom:1px solid var(--line)}.marine-item:nth-child(odd){border-right:1px solid var(--line)}.marine-item:last-child{grid-column:1 / -1;border-bottom:0}.marine-item>span{font-size:23px;line-height:1}.marine-item b{display:block;font-size:13px}.marine-item p{margin:4px 0 0;color:var(--muted);font-size:10px;line-height:1.45}.marine-note{margin:0;padding:10px 12px;background:#eaf7f6;color:#35646c;font-size:10px;line-height:1.45}
    .practical-guide{display:grid;grid-template-columns:1fr 1fr;gap:10px}.guide-card{min-height:150px;padding:14px;border:1px solid var(--line);border-radius:17px;background:var(--card)}.guide-card:nth-child(5),.guide-card:nth-child(6){background:#fff4ed}.guide-card>span{display:inline-block;padding:3px 7px;border-radius:99px;background:#dff5f3;color:var(--ocean);font-size:10px;font-weight:800}.guide-card:nth-child(5)>span,.guide-card:nth-child(6)>span{background:#ffe1d7;color:#b85037}.guide-card b{display:block;margin:9px 0 5px;font-size:13px}.guide-card p{margin:0;color:var(--muted);font-size:11px;line-height:1.52}
    body.dark .beach-intro,.dark .marine-watch,.dark .guide-card{background:#15333f;border-color:#315563}.dark .marine-note{background:#173c44;color:#c4e7e5}.dark .guide-card:nth-child(5),body.dark .guide-card:nth-child(6){background:#3a302f}
  `;
  document.head.appendChild(style);
}());
