const https = require('https');

const text = 'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้';
// Baidu Translate getvoice URL
const url = `https://fanyi.baidu.com/getvoice?lan=th&text=${encodeURIComponent(text)}&spd=5&source=web`;

console.log('Requesting Baidu Translate getvoice:', url);

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
      console.log('Error Response:', buffer.toString('utf8').substring(0, 300));
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err);
});
