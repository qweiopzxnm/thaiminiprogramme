const https = require('https');

const text = 'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้';

const testUrls = [
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=1`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=2`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=3`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=4`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=5`
];

function test(index) {
  if (index >= testUrls.length) return;
  const url = testUrls[index];
  
  https.get(url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`Type ${index + 1}: Status = ${res.statusCode}, Length = ${buffer.length}, Content-Type = ${res.headers['content-type']}`);
      if (res.statusCode === 200 && res.headers['content-type'].includes('audio')) {
        console.log(`  SUCCESS! Match found for long sentence: ${url}`);
      }
      test(index + 1);
    });
  });
}

test(0);
