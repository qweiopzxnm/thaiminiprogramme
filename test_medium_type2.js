const https = require('https');

const clauses = [
  'ใครจะรับผิดชอบเรื่องนี้',                 // 23 chars
  'คุณรู้ไหมว่าเราจะทำอย่างไร',             // 26 chars
  'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด', // 38 chars
];

function test(index) {
  if (index >= clauses.length) return;
  const text = clauses[index];
  const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=2`;
  
  https.get(url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`Clause ${index + 1} "${text}" (${text.length} chars): Status = ${res.statusCode}, Length = ${buffer.length}, Content-Type = ${res.headers['content-type']}`);
      test(index + 1);
    });
  });
}

test(0);
