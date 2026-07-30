/* Keeps a repeat observation from being registered as a first discovery. */
function analyze(input){
  const f=input.files[0]; if(!f)return;
  const n=f.name.toLowerCase();
  const s=n.includes('crab')||n.includes('게')?['게','🦀','모래 위로 이동하며 숨을 공간을 찾고 있어요. 기압 변화나 조수 변화 전 활동이 늘 수 있습니다.']:n.includes('gull')||n.includes('갈매기')?['갈매기','🕊️','무리 비행은 먹이 이동이나 바람 변화에 따른 행동일 수 있어요. 낙하물과 접근에 주의하세요.']:n.includes('jelly')||n.includes('해파리')?['해파리','🪼','해류를 따라 이동 중인 해파리로 보여요. 맨손 접촉은 피하고 안전요원에게 알려주세요.']:['바다 생물','🐚','사진 속 해양생물을 분석했어요. 조간대 생물은 밀물 때 서식지로 돌아갈 수 있으니 관찰 후 제자리에 두세요.'];
  const first=!state.seen.some(x=>x.name===s[0]);
  if(first){state.seen.push({name:s[0],icon:s[1]});localStorage.seen=JSON.stringify(state.seen)}
  const url=URL.createObjectURL(f);render();
  document.body.insertAdjacentHTML('beforeend',`<div class="modal" onclick="if(event.target===this)this.remove()"><div class="sheet"><button class="icon-btn close" onclick="this.closest('.modal').remove()">×</button><h2>AI 관찰 분석</h2><p>${first?'새로운 생물을 도감에 등록했어요!':'이미 발견한 생물이에요. 관찰 기록만 추가했어요.'}</p><div class="analysis"><img src="${url}"><div><h3>${s[1]} ${s[0]}</h3><p>${s[2]}</p></div></div><span class="tag">행동 분석 완료</span><span class="tag new">${first?'첫 관찰 배지 획득':'관찰 기록 추가'}</span></div></div>`);
}
