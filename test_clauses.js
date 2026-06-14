const https = require('https');

const parts = [
  'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด', // Part 1 (36 chars)
  'คุณรู้ไหมว่าเราจะทำอย่างไร',             // Part 2 (26 chars)
  'ใครจะรับผิดชอบเรื่องนี้',                 // Part 3 (21 chars)
  'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร' // Parts 1+2 (63 chars)
];

function test(index) {
  if (index >= parts.length) return;
  const text = parts[index];
  const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th`;
  
  https.get(url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`Part ${index + 1} (${text.length} chars): Status = ${res.statusCode}, Length = ${buffer.length}, Content-Type = ${res.headers['content-type']}`);
      if (res.statusCode !== 200) {
        console.log('Error msg:', buffer.toString('utf8'));
      }
      test(index + 1);
    });
  });
}

test(0);
