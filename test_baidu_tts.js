const https = require('https');

const text = 'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้';
// Baidu TTS URL: lan=th, spd=5 (default speed)
const url = `https://tts.baidu.com/text2audio?tex=${encodeURIComponent(text)}&lan=th&spd=5`;

console.log('Requesting Baidu TTS:', url);

https.get(url, (res) => {
  console.log('HTTP Status Code:', res.statusCode);
  console.log('Response Headers:', res.headers);

  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(data);
    console.log('Response body length:', buffer.length);
    console.log('Content-Type:', res.headers['content-type']);
    if (res.statusCode === 200) {
      console.log('First 20 bytes (hex):', buffer.slice(0, 20).toString('hex'));
      console.log('First 20 bytes (ascii):', buffer.slice(0, 20).toString('ascii'));
    } else {
      console.log('Error Response:', buffer.toString('utf8'));
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err);
});
