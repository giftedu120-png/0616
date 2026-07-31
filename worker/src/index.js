const allowedOrigins = new Set([
  'https://giftedu120-png.github.io',
  'https://shore-scribe.lovable.app'
]);

function cors(origin) {
  return {
    'Access-Control-Allow-Origin': allowedOrigins.has(origin)
      ? origin
      : 'https://giftedu120-png.github.io',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8'
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), { status, headers: cors(origin) });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors(origin) });
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/analyze') {
      return json({ error: 'Not found' }, 404, origin);
    }

    try {
      const { image } = await request.json();
      const match = typeof image === 'string' && image.match(/^data:(image\/[\w.+-]+);base64,(.+)$/);
      if (!match || image.length > 7_000_000) {
        return json({ error: '사진 형식이 올바르지 않거나 파일이 너무 큽니다.' }, 400, origin);
      }
      if (!env.GEMINI_API_KEY) {
        return json({ error: 'AI 분석 서버 키가 설정되지 않았습니다.' }, 500, origin);
      }

      const prompt = `당신은 해양생물 전문가이자 해수욕장 안전 안내자입니다.
사진 속에 실제로 보이는 생물만 분석하세요.
반드시 마크다운 없이 한국어 JSON 객체만 반환하세요.

반환 키: speciesName, scientificName, emoji, behavior, meaning, riskLevel, riskReason, advice, confidence
riskLevel은 low, medium, high 중 하나입니다.
생물을 확인할 수 없으면 speciesName에 "해양생물 확인 불가"라고 쓰고 이유를 설명하세요.`;

      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'x-goog-api-key': env.GEMINI_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: prompt },
                { inlineData: { mimeType: match[1], data: match[2] } }
              ]
            }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        }
      );

      if (!response.ok) {
        console.error('Gemini request failed', response.status, (await response.text()).slice(0, 300));
        return json({ error: 'AI 분석 서비스에 일시적인 문제가 있습니다.' }, 502, origin);
      }

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts
        ?.map(part => part.text || '')
        .join('')
        .replace(/^```json\s*|\s*```$/g, '')
        .trim();
      if (!text) throw new Error('Empty Gemini response');
      return json(JSON.parse(text), 200, origin);
    } catch (error) {
      console.error('Marine analysis failed', error?.message || error);
      return json({ error: '사진 분석에 실패했습니다. 다시 시도해 주세요.' }, 500, origin);
    }
  }
};
