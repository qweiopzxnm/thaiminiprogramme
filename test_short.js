const https = require('https');

const shortPhrases = [
  'ลูกค้า',          // 6 chars
  'ให้ข้อกำหนด',      // 10 chars
  'ต้นทุนต่ำที่สุด',     // 15 chars
  'คุณรู้ไหม',        // 9 chars
  'ใครจะรับผิดชอบ',    // 14 chars
  'เรื่องนี้',         // 8 chars
  'สวัสดีครับ'        // 10 chars
];

function test(index) {
  if (index >= shortPhrases.length) return;
  const text = shortPhrases[index];
  const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th`;
  
  https.get(url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`Phrase ${index + 1} "${text}" (${text.length} chars): Status = ${res.statusCode}, Length = ${buffer.length}, Content-Type = ${res.headers['content-type']}`);
      test(index + 1);
    });
  });
}

test(0);
