/* UI component for the marine behaviour translator. */
(function () {
  const previousRender = window.render;
  const translatorMarkup = () => `
    <section class="translator" aria-label="해양생물 행동 번역기">
      <div class="translator-title"><span>🐚</span><div><strong>해양생물 행동 번역기</strong><small>생물을 선택해 행동의 의미를 확인하세요</small></div></div>
      <select id="animal-select" aria-label="해양생물 선택" onchange="showMarineTranslation(this.value)">
        <option value="">생물을 선택하세요</option>
        ${window.marineAnimals.map(animal => `<option value="${animal.id}">${animal.icon} ${animal.name}</option>`).join('')}
      </select>
    </section>`;

  window.render = function () {
    previousRender();
    const field = document.querySelector('.field');
    if (field && !document.querySelector('.translator')) field.insertAdjacentHTML('afterend', translatorMarkup());
  };

  window.showMarineTranslation = function (id) {
    const animal = window.getMarineAnimal(id);
    if (!animal) return;
    const isFirst = !state.seen.some(entry => entry.name === animal.name);
    if (isFirst) {
      state.seen.push({ name: animal.name, icon: animal.icon });
      localStorage.seen = JSON.stringify(state.seen);
    }
    window.render();
    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal" onclick="if(event.target===this)this.remove()">
        <div class="sheet translation-sheet">
          <button class="icon-btn close" onclick="this.closest('.modal').remove()">×</button>
          <div class="translation-heading"><span>${animal.icon}</span><div><p>AI 행동 번역 결과</p><h2>${animal.name}</h2></div></div>
          <div class="translation-row"><b>관찰된 행동</b><span>${animal.behavior}</span></div>
          <div class="translation-row"><b>행동의 의미</b><span>${animal.meaning}</span></div>
          <div class="translation-row"><b>위험도</b><span class="risk ${animal.color}">${animal.risk}</span></div>
          <div class="translation-advice">💡 <strong>관광객 행동 가이드</strong><br>${animal.advice}</div>
          <span class="tag new">${isFirst ? '새 도감 배지 획득' : '관찰 기록 추가'}</span>
        </div>
      </div>`);
  };

  const originalAnalyze = window.analyze;
  window.analyze = function (input) {
    const file = input.files && input.files[0];
    const match = file && window.identifyMarineAnimal(file.name);
    if (match) {
      window.showMarineTranslation(match.id);
      return;
    }
    originalAnalyze(input);
  };

  const style = document.createElement('style');
  style.textContent = `.translator{margin-top:12px;padding:15px;border-radius:18px;background:var(--card);border:1px solid var(--line)}.translator-title{display:flex;gap:10px;align-items:center}.translator-title>span{font-size:26px}.translator-title strong{display:block;font-size:14px}.translator-title small{display:block;color:var(--muted);font-size:11px;margin-top:3px}.translator select{width:100%;margin-top:12px;padding:12px 13px;border-radius:12px;border:1px solid var(--line);background:var(--surface);color:var(--ink);font:inherit;font-size:13px}.translation-heading{display:flex;align-items:center;gap:13px;margin-bottom:15px}.translation-heading>span{font-size:42px}.translation-heading p{margin:0 0 3px;font-size:12px;color:var(--ocean);font-weight:700}.translation-heading h2{margin:0}.translation-row{padding:12px 0;border-top:1px solid var(--line)}.translation-row b{display:block;font-size:12px;margin-bottom:5px}.translation-row span{font-size:13px;color:var(--muted);line-height:1.5}.risk{display:inline-block!important;padding:4px 9px;border-radius:20px;font-weight:700}.risk.green{background:#dff3e7;color:#187148}.risk.yellow{background:#fff3d6;color:#986300}.risk.red{background:#ffe4df;color:#b93a27}.translation-advice{margin-top:14px;padding:13px;background:#eaf7f6;border-radius:13px;font-size:12px;line-height:1.6;color:#31646b}.translation-advice strong{color:var(--ink)}body.dark .translation-advice{background:#173c44;color:#c4e7e5}`;
  document.head.appendChild(style);
  window.render();
}());
