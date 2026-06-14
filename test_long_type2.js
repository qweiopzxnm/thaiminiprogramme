const https = require('https');

const text = 'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้';
// Youdao TTS URL with type=2
const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=2`;

console.log('Requesting Youdao TTS with type=2:', url);

https.get(url, (res) => {
  console.log('HTTP Status Code:', res.statusCode);
  console.log('Response Headers:', res.headers);

  let data = [];
  res.on('data', chunk => data.push(chunk));
  res.on('end', () => {
    const buffer = Buffer.concat(data);
    console.log('Response body length:', buffer.length);
    console.log('Content-Type:', res.headers['content-type']);
    if (res.statusCode === 200 && res.headers['content-type'].includes('audio')) {
      console.log('SUCCESS! Audio file received.');
      console.log('First 20 bytes (hex):', buffer.slice(0, 20).toString('hex'));
    } else {
      console.log('Error Response:', buffer.toString('utf8'));
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err);
});
