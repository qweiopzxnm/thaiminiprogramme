const https = require('https');

const text = 'ลูกค้า'; // Failed with le=th

const testUrls = [
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&lang=th`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=2`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=th`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=2`,
  `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=th&type=4`
];

function test(index) {
  if (index >= testUrls.length) return;
  const url = testUrls[index];
  
  https.get(url, (res) => {
    let data = [];
    res.on('data', chunk => data.push(chunk));
    res.on('end', () => {
      const buffer = Buffer.concat(data);
      console.log(`URL ${index + 1}: Status = ${res.statusCode}, Length = ${buffer.length}, Content-Type = ${res.headers['content-type']}`);
      if (res.statusCode === 200 && res.headers['content-type'].includes('audio')) {
        console.log(`  SUCCESS! Match found: ${url}`);
      }
      test(index + 1);
    });
  });
}

test(0);
