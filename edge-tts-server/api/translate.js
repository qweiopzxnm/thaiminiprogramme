const url = require('url');

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle pre-flight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const text = parsedUrl.query.text;
  const from = parsedUrl.query.from || 'zh-CN';
  const to = parsedUrl.query.to || 'th';

  if (!text) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Error: Missing required "text" parameter.');
  }

  try {
    // Map standard language codes to Google Translate codes
    let sl = from;
    let tl = to;
    if (sl === 'zh') sl = 'zh-CN';
    if (tl === 'zh') tl = 'zh-CN';

    const googleUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(googleUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Google Translate API responded with status ${response.status}`);
    }

    const data = await response.json();
    if (data && data[0] && Array.isArray(data[0])) {
      let translatedText = '';
      for (const part of data[0]) {
        if (part && part[0]) {
          translatedText += part[0];
        }
      }
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
      return res.end(JSON.stringify({ translation: translatedText }));
    } else {
      throw new Error('Invalid response structure from Google Translate API');
    }
  } catch (err) {
    console.error('Translation proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end(`Translation Error: ${err.message}`);
  }
};
