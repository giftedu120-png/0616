/* Live marine forecast data: Open-Meteo Marine Weather API + Weather API. */
(function () {
  const locations = [
    {lat:35.1587,lng:129.1604},{lat:35.1531,lng:129.1186},{lat:35.1781,lng:129.1993},
    {lat:35.0462,lng:128.9650},{lat:35.0765,lng:129.0208},{lat:35.2643,lng:129.2334},{lat:35.3184,lng:129.2643}
  ];
  const cache = new Map();
  const baseRender = window.render;
  window.render = function () { baseRender(); refreshBeach(); };

  async function refreshBeach() {
    markIncidentSource();
    const index = state.beach;
    const cached = cache.get(index);
    if (cached && Date.now() - cached.savedAt < 10 * 60 * 1000) return show(cached.data);
    const point = locations[index]; if (!point) return;
    try {
      const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${point.lat}&longitude=${point.lng}&current=sea_surface_temperature&daily=wave_height_max&timezone=Asia%2FSeoul`;
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${point.lat}&longitude=${point.lng}&current=wind_speed_10m&timezone=Asia%2FSeoul`;
      const [marineResponse, weatherResponse] = await Promise.all([fetch(marineUrl), fetch(weatherUrl)]);
      if (!marineResponse.ok || !weatherResponse.ok) throw new Error('Live data unavailable');
      const [marine, weather] = await Promise.all([marineResponse.json(), weatherResponse.json()]);
      const data = {wave:marine.daily?.wave_height_max?.[0], water:marine.current?.sea_surface_temperature, wind:weather.current?.wind_speed_10m};
      if (![data.wave,data.water,data.wind].every(Number.isFinite)) throw new Error('Incomplete live data');
      cache.set(index,{data,savedAt:Date.now()}); show(data);
    } catch (_) { showFallback(); }
  }

  function show(data) {
    const values = document.querySelectorAll('.stat b');
    if (values.length < 3) return;
    values[0].textContent = `${data.wave.toFixed(1)}m`;
    values[1].textContent = `${data.water.toFixed(1)}°C`;
    values[2].textContent = `${data.wind.toFixed(1)}m/s`;
    mark('실시간 해양 예보 · Open-Meteo');
  }
  function showFallback() { mark('예보 데이터를 불러오지 못해 최근 값 표시'); }
  function mark(label) {
    let note=document.querySelector('.live-data-note');
    if (!note) { note=document.createElement('p'); note.className='live-data-note'; document.querySelector('.stats')?.insertAdjacentElement('afterend',note); }
    note.textContent=label;
  }
  function markIncidentSource() {
    const card=document.querySelector('.accident'); if (!card || document.querySelector('.incident-data-note')) return;
    const note=document.createElement('p'); note.className='incident-data-note';
    note.textContent='사고 통계: 공식 공공데이터 API 인증키 연동이 필요합니다. 현재 화면의 사고 수치는 예시입니다.';
    card.insertAdjacentElement('afterend',note);
  }
  const style=document.createElement('style');
  style.textContent='.live-data-note{margin:7px 1px 0;color:var(--muted);font-size:10px;text-align:right}.live-data-note::before{content:"● ";color:#23a57a}.incident-data-note{margin:8px 2px 0;color:var(--muted);font-size:10px;line-height:1.45}';
  document.head.appendChild(style);
  markIncidentSource();
  refreshBeach();
}());
