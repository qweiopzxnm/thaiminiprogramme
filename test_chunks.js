const https = require('https');

const chunks = [
  'ลูกค้าให้',         // 9
  'ข้อกำหนดว่า',       // 10
  'ให้ต้นทุน',         // 9
  'ต่ำที่สุด',          // 9
  'คุณรู้ไหม',         // 9
  'ว่าเราจะทำ',        // 10
  'อย่างไร',          // 7
  'ใครจะ',           // 5
  'รับผิดชอบ',         // 9
  'เรื่องนี้'          // 9
];

function test(index) {
  if (index >= chunks.length) return;
  const text = chunks[index];
  const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=2`;
  
  https.get(url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`Chunk ${index + 1} "${text}" (${text.length} chars): Status = ${res.statusCode}, Length = ${buffer.length}, Content-Type = ${res.headers['content-type']}`);
      if (res.statusCode !== 200) {
        console.log('Error msg:', buffer.toString('utf8'));
      }
      test(index + 1);
    });
  });
}

test(0);
