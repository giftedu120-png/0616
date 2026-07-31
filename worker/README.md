# 안전해수욕장 AI 분석 서버

1. Cloudflare 계정으로 로그인한 뒤 `worker` 폴더에서 `npx wrangler login`을 실행합니다.
2. `npx wrangler secret put OPENAI_API_KEY`를 실행하고 OpenAI API 키를 입력합니다. 키는 저장소에 넣지 않습니다.
3. `npx wrangler deploy`를 실행합니다.
4. 출력된 Worker 주소에 `/analyze`를 붙여 `dexProxy.js`의 `AI_PROXY_URL` 값으로 교체합니다.

Worker는 OpenAI API 키를 비공개 환경 변수로 사용하며, 공개 도감 페이지에는 키가 전달되지 않습니다.
