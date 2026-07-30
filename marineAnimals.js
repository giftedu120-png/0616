/* Marine behaviour reference data. Add new records here without changing the UI. */
window.marineAnimals = [
  { id:'crab', name:'게', icon:'🦀', keywords:['crab','게'], behavior:'모래 위로 빠르게 이동하거나 밖으로 나오는 모습', meaning:'먹이를 찾거나 조수·기압 변화에 반응하는 행동일 수 있어요.', risk:'낮음', color:'green', advice:'맨손으로 잡지 말고, 관찰한 뒤 이동 경로를 비워 주세요.' },
  { id:'gull', name:'갈매기', icon:'🕊️', keywords:['gull','seagull','갈매기'], behavior:'여러 마리가 한 방향으로 단체 비행하는 모습', meaning:'먹이 이동, 바람 변화 또는 휴식 장소 이동 신호일 수 있어요.', risk:'낮음', color:'green', advice:'먹이를 주지 말고 낙하물에 주의하세요. 바람이 강해진다면 입수를 재검토하세요.' },
  { id:'jellyfish', name:'해파리', icon:'🪼', keywords:['jelly','해파리'], behavior:'해류를 따라 수면 또는 얕은 바다를 떠다니는 모습', meaning:'수온·해류 조건에 따라 연안으로 유입될 수 있어요.', risk:'높음', color:'red', advice:'절대 만지지 말고 안전요원에게 알리세요. 쏘이면 바닷물로 씻고 119에 도움을 요청하세요.' },
  { id:'starfish', name:'불가사리', icon:'⭐', keywords:['starfish','불가사리'], behavior:'바위나 조간대에 붙어 천천히 이동하는 모습', meaning:'먹이를 찾거나 서식처를 이동하는 일반적인 행동이에요.', risk:'낮음', color:'green', advice:'들어 올리지 말고 사진만 남긴 뒤 제자리에 두세요.' },
  { id:'fish', name:'물고기 떼', icon:'🐟', keywords:['fish','물고기'], behavior:'수면 가까이에서 무리 지어 빠르게 이동하는 모습', meaning:'먹이 활동 또는 포식자를 피하는 반응일 수 있어요.', risk:'보통', color:'yellow', advice:'해안 가까이에서만 관찰하고, 수면 상태·안전요원 안내를 함께 확인하세요.' }
];
window.getMarineAnimal = id => window.marineAnimals.find(animal => animal.id === id);
window.identifyMarineAnimal = fileName => {
  const value = (fileName || '').toLowerCase();
  return window.marineAnimals.find(animal => animal.keywords.some(word => value.includes(word)));
};
