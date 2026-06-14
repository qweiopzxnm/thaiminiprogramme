const https = require('https');

const text = 'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้';
const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th`;

console.log('Requesting URL:', url);

https.get(url, (res) => {
  console.log('HTTP Status Code:', res.statusCode);
  console.log('Response Headers:', res.headers);

  let data = [];
  res.on('data', (chunk) => {
    data.push(chunk);
  });

  res.on('end', () => {
    const buffer = Buffer.concat(data);
    console.log('Response body length:', buffer.length);
    if (res.statusCode !== 200) {
      console.log('Response body (first 200 chars):', buffer.toString('utf8').substring(0, 200));
    } else {
      console.log('Response content type:', res.headers['content-type']);
      // Print first 50 bytes of response to see if it starts with ID3 (MP3 signature)
      console.log('First 20 bytes (hex):', buffer.slice(0, 20).toString('hex'));
      console.log('First 20 bytes (ascii):', buffer.slice(0, 20).toString('ascii'));
    }
  });
}).on('error', (err) => {
  console.error('Request failed:', err);
});
