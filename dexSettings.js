/* Reuse the language and colour mode selected in the main Safe Beach app. */
(function () {
  const lang = localStorage.getItem('lang') || 'ko';
  const theme = localStorage.getItem('theme') || 'light';
  const copy = {
    ko: { journal: '나의 바다 도감', analysis: '해양생물 관찰 분석', desc: '사진 한 장으로 종·행동·위험도와 안전 대처법을 알려드려요.', upload: '사진 촬영 또는 업로드', back: '해수욕장 안전 정보' },
    en: { journal: 'My Sea Journal', analysis: 'Marine-life analysis', desc: 'One photo reveals the species, behaviour, risk and safety advice.', upload: 'Take or upload a photo', back: 'Beach safety' },
    ja: { journal: 'わたしの海図鑑', analysis: '海洋生物の観察分析', desc: '写真1枚から種類・行動・危険度・安全な対処法を案内します。', upload: '写真を撮影・アップロード', back: '海水浴場の安全情報' },
    zh: { journal: '我的海洋图鉴', analysis: '海洋生物观察分析', desc: '通过一张照片了解物种、行为、风险和安全应对方法。', upload: '拍摄或上传照片', back: '海滩安全信息' }
  };
  const text = copy[lang] || copy.ko;
  document.documentElement.lang = lang;
  document.body.classList.toggle('dark', theme === 'dark');
  document.title = `안전해수욕장 · ${text.journal}`;

  const brand = document.querySelector('.brand');
  if (brand) brand.innerHTML = '<b>안전해</b>수욕장';
  const journal = document.querySelector('.top small');
  if (journal) journal.textContent = text.journal;
  const back = document.querySelector('.back');
  if (back) back.textContent = text.back;
  const cards = document.querySelectorAll('main .card');
  const analysis = cards[0];
  if (analysis) {
    const title = analysis.querySelector('h2');
    const description = analysis.querySelector('.muted');
    const upload = analysis.querySelector('.upload');
    if (title) title.textContent = `🔎 ${text.analysis}`;
    if (description) description.textContent = text.desc;
    if (upload) {
      const input = upload.querySelector('input');
      upload.textContent = text.upload;
      if (input) upload.appendChild(input);
    }
  }
}());
