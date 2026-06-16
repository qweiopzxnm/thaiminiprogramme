const WebSocket = require('ws');
const crypto = require('crypto');
const url = require('url');

const TRUSTED_CLIENT_TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const WINDOWS_FILE_TIME_EPOCH = 11644473600n;

// Sec-MS-GEC signature generator
function generateSecMsGecToken() {
  const epochSeconds = BigInt(Math.floor(Date.now() / 1000) + Number(WINDOWS_FILE_TIME_EPOCH));
  const ticks = epochSeconds * 10000000n;
  const roundedTicks = ticks - (ticks % 3000000000n);
  const strToHash = `${roundedTicks}${TRUSTED_CLIENT_TOKEN}`;
  const hash = crypto.createHash('sha256');
  hash.update(strToHash, 'ascii');
  return hash.digest('hex').toUpperCase();
}

function getUUID() {
  return crypto.randomBytes(16).toString('hex');
}

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
  const voice = parsedUrl.query.voice || 'th-TH-PremwadeeNeural';

  if (!text) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Error: Missing required "text" parameter.');
  }

  try {
    const trustedToken = TRUSTED_CLIENT_TOKEN;
    const gecToken = generateSecMsGecToken();
    const gecVersion = '1-143.0.3650.75';
    
    // Connect to Bing Speech ReadAloud WebSocket API
    const wsUrl = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${trustedToken}&Sec-MS-GEC=${gecToken}&Sec-MS-GEC-Version=${gecVersion}`;
    
    const ws = new WebSocket(wsUrl, {
      headers: {
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0',
        'Origin': 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
        'Cookie': `muid=${crypto.randomBytes(16).toString('hex').toUpperCase()};`
      }
    });

    const requestId = getUUID();
    let responseEnded = false;

    // Send HTTP headers to start streaming MP3 chunks to client instantly
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Transfer-Encoding': 'chunked'
    });

    ws.on('open', () => {
      // 1. Send speech.config
      const configMsg = 
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        JSON.stringify({
          context: {
            synthesis: {
              audio: {
                metadataoptions: {
                  sentenceBoundaryEnabled: "false",
                  wordBoundaryEnabled: "false"
                },
                outputFormat: "audio-24khz-48kbitrate-mono-mp3"
              }
            }
          }
        });
      ws.send(configMsg);

      // 2. Send ssml synthesis request
      const ssmlMsg = 
        `X-RequestId:${requestId}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `Path:ssml\r\n\r\n` +
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='th-TH'>` +
        `<voice name='${voice}'>` +
        `<prosody pitch='+0Hz' rate='+0%' volume='+0%'>${text}</prosody>` +
        `</voice></speak>`;
      ws.send(ssmlMsg);
    });

    ws.on('message', (data, isBinary) => {
      if (isBinary) {
        try {
          const headerLength = data.readUInt16BE(0);
          const headerText = data.slice(2, 2 + headerLength).toString('utf8');
          
          if (headerText.includes('Path:audio')) {
            const audioData = data.slice(2 + headerLength);
            if (!responseEnded) {
              res.write(audioData); // Stream binary MP3 chunk to client
            }
          }
        } catch (e) {
          console.error('Failed to parse binary message:', e);
        }
      } else {
        const textMsg = data.toString('utf8');
        if (textMsg.includes('Path:turn.end')) {
          ws.close();
        }
      }
    });

    ws.on('close', () => {
      if (!responseEnded) {
        responseEnded = true;
        res.end(); // Synthesis complete, end HTTP stream
      }
    });

    ws.on('error', (err) => {
      console.error('WS Error:', err);
      if (!responseEnded) {
        responseEnded = true;
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end(`Internal Synthesis Error: ${err.message}`);
        } else {
          res.end();
        }
      }
    });

  } catch (err) {
    console.error('Proxy Error:', err);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Server Error: ${err.message}`);
    }
  }
};
