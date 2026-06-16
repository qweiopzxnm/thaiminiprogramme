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
  const hash = parsedUrl.query.hash;

  if (!hash) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Error: Missing required "hash" parameter.');
  }

  // Compute package number matching the layout of audio-assets branch
  const pkgNum = (parseInt(hash.substring(0, 6), 16) % 10) + 1;
  const githubUrl = `https://raw.githubusercontent.com/qweiopzxnm/thaiminiprogramme/audio-assets/miniprogram/audio_pkg_${pkgNum}/${hash}.mp3`;

  try {
    const response = await fetch(githubUrl);
    if (!response.ok) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end(`Audio file not found on CDN: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    
    // Set headers to cache the file for 1 year both on Edge CDN and client browser
    res.setHeader('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');
    res.setHeader('Content-Type', 'audio/mpeg');
    res.writeHead(200);
    res.end(Buffer.from(buffer));
  } catch (err) {
    console.error('Static proxy fetch error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`Server Error: ${err.message}`);
  }
};
