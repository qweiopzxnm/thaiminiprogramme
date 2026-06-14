const https = require('https');

const shortClauses = [
  'เรื่องนี้',         // 9 chars
  'ให้ข้อกำหนด',      // 11 chars
  'ใครจะรับผิดชอบ',    // 14 chars
  'ลูกค้าให้ข้อกำหนด'   // 16 chars
];

function test(index) {
  if (index >= shortClauses.length) return;
  const text = shortClauses[index];
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
