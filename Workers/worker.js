export default {
  async fetch(request) {
    const { method } = request;

    if (method === 'POST') {
      try {
        const requestBody = await request.json();
        const payload = {
          messages: requestBody.messages
        };
        const apiResponse = await fetch('https://api.cloudflare.com/client/v4/accounts/c999ea1c681f2365538b342d64bccbe2/ai/run/@cf/qwen/qwen1.5-14b-chat-awq', {
          method: 'POST',
          headers: {
                        'Authorization': 'Bearer ZKt1bFhGDQ9vwtsX7Hr6KDl1sTHpbadZW3EEoEPp',
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify(payload)
        });

        const apiData = await apiResponse.json();

        return new Response(JSON.stringify(apiData), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // 允许所有来源
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ success: false, errors: [error.message] }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // 允许所有来源
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
          }
        });
      }
    }

    // 处理预检请求
    if (method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      });
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};
