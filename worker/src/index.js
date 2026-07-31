const allowedOrigins = new Set(['https://giftedu120-png.github.io', 'https://shore-scribe.lovable.app']);
const cors = origin => ({
  'Access-Control-Allow-Origin': allowedOrigins.has(origin) ? origin : 'https://giftedu120-png.github.io',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json; charset=utf-8'
});

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') return new Response(null, {headers:cors(origin)});
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/analyze') return json({error:'Not found'},404,origin);
    try {
      const {image} = await request.json();
      if (typeof image !== 'string' || !image.startsWith('data:image/') || image.length > 7_000_000) return json({error:'이미지 형식 또는 크기가 올바르지 않습니다.'},400,origin);
      const prompt = `You are a marine biologist and beach-safety expert. Analyze the image carefully. Return only a JSON object in Korean with these keys: speciesName, scientificName, emoji, behavior, meaning, riskLevel (low|medium|high), riskReason, advice, confidence. Identify only organisms visible in the image; if there is no marine organism, use speciesName '해양생물 미확인' and explain why.`;
      const openai = await fetch('https://api.openai.com/v1/responses', {
        method:'POST', headers:{'Authorization':`Bearer ${env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
        body:JSON.stringify({model:'gpt-5.6-luna',input:[{role:'user',content:[{type:'input_text',text:prompt},{type:'input_image',image_url:image}]}]})
      });
      if (!openai.ok) return json({error:'AI 분석 서비스에 일시적인 문제가 있습니다.'},502,origin);
      const payload=await openai.json();
      const text=(payload.output_text || '').replace(/^```json\s*|\s*```$/g,'').trim();
      return json(JSON.parse(text),200,origin);
    } catch (_) { return json({error:'사진을 분석하지 못했습니다. 다시 시도해 주세요.'},500,origin); }
  }
};
function json(body,status,origin){return new Response(JSON.stringify(body),{status,headers:cors(origin)});}
