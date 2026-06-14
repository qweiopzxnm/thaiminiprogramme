const fs = require('fs');

const dictPath = 'miniprogram/utils/dict.ts';
console.log('Reading corrupted dict.ts...');
const content = fs.readFileSync(dictPath, 'utf8');

// Find the index of the corrupted "};,"
const corruptionIndex = content.indexOf('};,');
if (corruptionIndex === -1) {
  console.log('Could not find corrupted "};," in dict.ts, maybe it is already clean or different.');
  process.exit(1);
}

// Slice the content to keep only the clean original dictionary entries
const cleanBaseContent = content.substring(0, corruptionIndex).trimEnd();

console.log('Cleaned dict.ts base content length:', cleanBaseContent.length);

// Now load the generated scenarios to harvest the missing words again
console.log('Loading generated scenarios...');
const batch1 = require('./new_scenarios_batch1.js');
const batch2 = require('./new_scenarios_batch2.js');
const batch3 = require('./new_scenarios_batch3.js');
const batch4 = require('./new_scenarios_batch4.js');

const allScenarios = [...batch1, ...batch2, ...batch3, ...batch4];

// Extract all Thai words from original dictionary to avoid duplicates
const existingKeys = new Set();
const keyRegex = /^\s*"([^"]+)":\s*\{/gm;
let match;
while ((match = keyRegex.exec(cleanBaseContent)) !== null) {
  existingKeys.add(match[1]);
}
console.log('Original keys count:', existingKeys.size);

// Extract all Thai dialogue texts
const thaiTexts = [];
allScenarios.forEach(sc => {
  sc.dialogues.forEach(d => {
    if (d.thai) {
      thaiTexts.push(d.thai);
    }
  });
});

// Segment the texts
const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
const uniqueNewWords = new Set();

thaiTexts.forEach(text => {
  const segments = segmenter.segment(text);
  for (const { segment } of segments) {
    const word = segment.trim();
    if (word && /[\u0e00-\u0e7f]/.test(word)) {
      if (!existingKeys.has(word)) {
        uniqueNewWords.add(word);
      }
    }
  }
});

console.log('Unique missing Thai words to add:', uniqueNewWords.size);

// Load the vocab database
const vocabDb = require('./vocab_db.json');

// Transliterate helper
function transliterateThai(word) {
  const cons = {
    'ก': 'g', 'ข': 'kh', 'ค': 'kh', 'ฆ': 'kh', 'ง': 'ng',
    'จ': 'j', 'ฉ': 'ch', 'ช': 'ch', 'ฌ': 'ch', 'ซ': 's',
    'ศ': 's', 'ษ': 's', 'ส': 's', 'ย': 'y', 'ญ': 'y',
    'ด': 'd', 'ฎ': 'd', 'ต': 'dt', 'ฏ': 'dt', 'ถ': 'th',
    'ท': 'th', 'ธ': 'th', 'ฑ': 'th', 'ฒ': 'th', 'น': 'n',
    'ณ': 'n', 'บ': 'b', 'ป': 'bp', 'ผ': 'ph', 'พ': 'ph',
    'ภ': 'ph', 'ฝ': 'f', 'ฟ': 'f', 'ม': 'm', 'ร': 'r',
    'ล': 'l', 'ฬ': 'l', 'ว': 'w', 'ห': 'h', 'ฮ': 'h',
    'อ': 'o'
  };
  const vowels = {
    'ะ': 'a', 'ั': 'a', 'า': 'aa', 'ิ': 'i', 'ี': 'ii',
    'ึ': 'ue', 'ื': 'ue', 'ุ': 'u', 'ู': 'u', 'เ': 'e',
    'แ': 'ae', 'โ': 'oo', 'ไ': 'ai', 'ใ': 'ai', 'ำ': 'am'
  };
  
  let res = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (cons[char]) {
      res += cons[char];
    } else if (vowels[char]) {
      res += vowels[char];
    }
  }
  return res || 'thai';
}

const subsegments = {
  'กะเพรา': { phonetic: 'ga-phrao', meaning: '罗勒' },
  'หมูสับ': { phonetic: 'muu-sap', meaning: '肉末' },
  'ผัดไทย': { phonetic: 'phat-thai', meaning: '炒泰粉' },
  'กุ้งสด': { phonetic: 'gung-sot', meaning: '鲜虾' },
  'ต้มยำ': { phonetic: 'tom-yam', meaning: '冬阴功' },
  'กุ้ง': { phonetic: 'gung', meaning: '虾' },
  'ข้าวเหนียว': { phonetic: 'khaaw-niaw', meaning: '糯米饭' },
  'มะม่วง': { phonetic: 'ma-muuang', meaning: '芒果' },
  'แกงเขียวหวาน': { phonetic: 'gaeng-khiao-waan', meaning: '绿咖喱' },
  'ไก่': { phonetic: 'gai', meaning: '鸡肉' },
  'ส้มตำ': { phonetic: 'som-tam', meaning: '青木瓜沙拉' },
  'ข้าวผัด': { phonetic: 'khaaw-phat', meaning: '炒饭' },
  'ปู': { phonetic: 'puu', meaning: '螃蟹' },
  'ต้มข่า': { phonetic: 'tom-khaa', meaning: '椰汁汤' },
  'แกงเผ็ด': { phonetic: 'gaeng-phet', meaning: '红咖喱' },
  'เป็ดย่าง': { phonetic: 'bpet-yaang', meaning: '烤鸭' },
  'สะเต๊ะ': { phonetic: 'sa-te', meaning: '沙爹' },
  'รสชาติ': { phonetic: 'rot-chaat', meaning: '味道' },
  'น้ำมะพร้าว': { phonetic: 'nam-ma-phraaw', meaning: '椰子水' },
  'น้ำมะม่วง': { phonetic: 'nam-ma-muuang', meaning: '芒果汁' },
  'ชาเขียว': { phonetic: 'chaa-khiao', meaning: '绿茶' },
  'นม': { phonetic: 'nom', meaning: '牛奶' },
  'หมอนทอง': { phonetic: 'mɔɔn-thɔɔng', meaning: '金枕头' },
  'มังคุด': { phonetic: 'mang-khut', meaning: '山竹' },
  'เงาะ': { phonetic: 'ngɔ́', meaning: '红毛丹' },
  'สับปะรด': { phonetic: 'sap-bpa-rot', meaning: '菠萝' },
  'ภูแล': { phonetic: 'phuu-lae', meaning: '普莱' },
  'เสื้อยืด': { phonetic: 'sʉ̂a-yʉ̂at', meaning: 'T恤' },
  'ลาย': { phonetic: 'laai', meaning: '花纹' },
  'น่ารัก': { phonetic: 'naa-rak', meaning: '可爱' },
  'กางเกง': { phonetic: 'gaang-geeng', meaning: '裤子' },
  'เดรส': { phonetic: 'dret', meaning: '连衣裙' },
  'ผ้าฝ้าย': { phonetic: 'phaa-faai', meaning: '棉布' },
  'แท้': { phonetic: 'thae', meaning: '纯' },
  'เสื้อเชิ้ต': { phonetic: 'sʉ̂a-chə́ət', meaning: '衬衫' },
  'ดอก': { phonetic: 'dɔɔk', meaning: '花' },
  'มวยไทย': { phonetic: 'muai-thai', meaning: '泰拳' },
  'กระโปรง': { phonetic: 'gra-bproong', meaning: '裙子' },
  'ผ้าซิ่น': { phonetic: 'phaa-sîn', meaning: '筒裙' },
  'น้ำเงิน': { phonetic: 'nam-ngən', meaning: '蓝色' },
  'เข้ม': { phonetic: 'khem', meaning: '深' },
  'แดงสด': { phonetic: 'daeng-sot', meaning: '鲜红' },
  'ขาว': { phonetic: 'khaaw', meaning: '白色' },
  'ครีม': { phonetic: 'khriim', meaning: '奶油' },
  'ดำสนิท': { phonetic: 'dam-sa-nit', meaning: '乌黑' },
  'เหลือง': { phonetic: 'lʉang', meaning: '黄色' },
  'พาสเทล': { phonetic: 'phaas-then', meaning: '马卡龙' },
  'เขียว': { phonetic: 'khiao', meaning: '绿色' },
  'ขี้ม้า': { phonetic: 'khii-maa', meaning: '军绿' },
  'วัดพระแก้ว': { phonetic: 'wat-phra-gaeaw', meaning: '玉佛寺' },
  'จตุจักร': { phonetic: 'ja-dtu-jak', meaning: '乍都乍' },
  'วัดอรุณ': { phonetic: 'wat-a-run', meaning: '郑王庙' },
  'สถานีรถไฟ': { phonetic: 'sa-thaa-nii-rot-fai', meaning: '火车站' },
  'ไอคอนสยาม': { phonetic: 'ai-khɔn-sa-yaam', meaning: '暹罗天地' },
  'เยาวราช': { phonetic: 'yao-wa-raat', meaning: '唐人街' },
  'แอป': { phonetic: 'aep', meaning: 'APP' },
  'เน็ต': { phonetic: 'net', meaning: '网络' },
  'หลุด': { phonetic: 'lut', meaning: '断开' },
  'บ่อย': { phonetic: 'bɔi', meaning: '经常' },
  'พิมพ์งาน': { phonetic: 'phim-ngaan', meaning: '打印' },
  'ฮาร์ดดิสก์': { phonetic: 'haat-dis', meaning: '硬盘' },
  'เสีย': { phonetic: 'siia', meaning: '坏了' },
  'สูญหาย': { phonetic: 'suun-haai', meaning: '丢失' },
  'เซ็นเซอร์': { phonetic: 'sen-səə', meaning: '传感器' },
  'ไอโอที': { phonetic: 'ai-oo-thii', meaning: '物联网' },
  'ความชื้น': { phonetic: 'khwaam-chʉ́n', meaning: '湿度' },
  'โปรแกรม': { phonetic: 'proo-graem', meaning: '程序' },
  'บัญชี': { phonetic: 'ban-chii', meaning: '账目/财务' },
  'คลาวด์': { phonetic: 'khlaao', meaning: '云端' },
  'แพลตฟอร์ม': { phonetic: 'phaet-fɔɔm', meaning: '平台' },
  'การจัดการ': { phonetic: 'gaan-jat-gaan', meaning: '管理' },
  'เรียนการสอน': { phonetic: 'riian-gaan-sɔ̌ɔn', meaning: '教学' },
  'วันศุกร์': { phonetic: 'wan-suk', meaning: '周五' },
  'บ่ายสามโมง': { phonetic: 'baai-saam-moong', meaning: '下午三点' },
  'สิ้นเดือน': { phonetic: 'sin-dʉan', meaning: '月底' },
  'ห้าโมงเย็น': { phonetic: 'haa-moong-yen', meaning: '下午五点' },
  'สัปดาห์หน้า': { phonetic: 'sap-daa-naa', meaning: '下周' },
  'วันอังคาร': { phonetic: 'wan-ang-khaan', meaning: '周二' },
  'วันพรุ่งนี้': { phonetic: 'wan-phrung-nii', meaning: '明天' },
  'เที่ยงตรง': { phonetic: 'thiang-trong', meaning: '正午' },
  'สื่อ': { phonetic: 'sʉʉ', meaning: '媒体' },
  'โฆษณา': { phonetic: 'khoo-sa-naa', meaning: '广告' },
  'โซเชียลมีเดีย': { phonetic: 'soo-chian-mii-diia', meaning: '社交媒体' },
  'บล็อกเกอร์': { phonetic: 'blok-gəə', meaning: '博主' },
  'รีวิว': { phonetic: 'ri-wiu', meaning: '测评' },
  'อีเมล': { phonetic: 'ii-mel', meaning: '邮件' },
  'จัดแสดง': { phonetic: 'jat-sa-daeng', meaning: '展览' },
  'นอกสถานที่': { phonetic: 'nɔɔk-sa-thaan-thii', meaning: '户外' },
  'ชิ้นส่วน': { phonetic: 'chin-suan', meaning: '部件' },
  'รถยนต์ไฟฟ้า': { phonetic: 'rot-yon-fai-faa', meaning: '电动汽车' },
  'แสงอาทิตย์': { phonetic: 'saeng-aa-thit', meaning: '阳光' },
  'ฟรีวีซ่า': { phonetic: 'frii-wii-saa', meaning: '免签' },
  'ข้าวเหนียว': { phonetic: 'khaaw-niaw', meaning: '糯米' },
  'ทะลุเป้า': { phonetic: 'tha-lu-bpao', meaning: '超额' },
  'ทัศนคติ': { phonetic: 'that-sa-na-kha-ti', meaning: '态度' },
  'ตลอดชีวิต': { phonetic: 'dtlaawt-chii-wit', meaning: '终身' },
  'ความยืดหยุ่น': { phonetic: 'khwaam-yʉʉt-yun', meaning: '弹性/韧性' },
  'ทางอารมณ์': { phonetic: 'thaang-aa-rom', meaning: '情绪' },
  'วิกฤต': { phonetic: 'wi-grit', meaning: '危机' },
  'มินิมอลลิซึม': { phonetic: 'mi-ni-mɔɔl-li-sum', meaning: '极简主义' },
  'จิตใจ': { phonetic: 'jit-jai', meaning: '心灵' },
  'อิสระ': { phonetic: 'i-sa-ra', meaning: '自由' },
  'ความมหัศจรรย์': { phonetic: 'khwaam-ma-hat-sa-jan', meaning: '奇迹' },
  '复利': { phonetic: 'fup-li', meaning: '复利' },
  'การวางแผน': { phonetic: 'gaan-waang-phaen', meaning: '规划' },
  'ระยะยาว': { phonetic: 'ra-ya-yaao', meaning: '长期' },
  'พยากรณ์': { phonetic: 'pha-yaa-gɔɔn', meaning: '预报' },
  'ศุลกากร': { phonetic: 'sun-la-ghaa-gɔɔn', meaning: '海关' },
  'คาร์บอน': { phonetic: 'khaa-bɔɔn', meaning: '碳' },
  'ยานยนต์': { phonetic: 'yaan-yon', meaning: '汽车' },
  'ไฮบริด': { phonetic: 'hai-brit', meaning: '混动' },
  'จราจร': { phonetic: 'ja-raa-jɔɔn', meaning: '交通' },
  'อุทกภัย': { phonetic: 'u-thok-ka-phai', meaning: '水灾' },
  'มรสุม': { phonetic: 'mɔɔ-ra-sum', meaning: '季风' },
  'ระบาย': { phonetic: 'ra-baai', meaning: '排放' },
  'เยียวยา': { phonetic: 'yiaw-yaa', meaning: '抚恤' },
  'เกษตรกร': { phonetic: 'ga-set-tra-gɔɔn', meaning: '农民' },
  'นโยบาย': { phonetic: 'na-yoo-baai', meaning: '政策' },
  'ท่องเที่ยว': { phonetic: 'thɔ̂ɔng-thîaw', meaning: '旅游' },
  'วีซ่า': { phonetic: 'wii-sâa', meaning: '签证' },
  'ความมั่นคง': { phonetic: 'khwaam-man-khong', meaning: '稳定/安全' },
  'ทักษะ': { phonetic: 'thak-sa', meaning: '技能' }
};

let entriesToAppend = '\n';
let addedCount = 0;

for (const word of uniqueNewWords) {
  let phonetic = '';
  let meaning = '';
  
  if (vocabDb[word]) {
    phonetic = vocabDb[word].phonetic;
    meaning = vocabDb[word].meaning;
  } else if (subsegments[word]) {
    phonetic = subsegments[word].phonetic;
    meaning = subsegments[word].meaning;
  } else {
    let matched = false;
    for (const key of Object.keys(vocabDb)) {
      if (key.includes(word) || word.includes(key)) {
        phonetic = transliterateThai(word);
        meaning = vocabDb[key].meaning.substring(0, 4);
        matched = true;
        break;
      }
    }
    if (!matched) {
      for (const key of Object.keys(subsegments)) {
        if (key.includes(word) || word.includes(key)) {
          phonetic = transliterateThai(word);
          meaning = subsegments[key].meaning.substring(0, 4);
          matched = true;
          break;
        }
      }
    }
    if (!matched) {
      phonetic = transliterateThai(word);
      meaning = '词汇';
    }
  }

  if (meaning.length > 4) {
    meaning = meaning.substring(0, 4);
  }

  entriesToAppend += `  "${word}": {\n    "phonetic": "${phonetic}",\n    "meaning": "${meaning}"\n  },\n`;
  addedCount++;
}

console.log('Formatted', addedCount, 'new entries to append.');

const tailContent = `
/**
 * 查询单词
 * 优先从用户自建词典查询，如果没有再从内置词典查询
 */
export function lookupWord(word: string): DictWord | null {
  // 1. 从用户自建词典查找
  const userDict = getUserDict();
  if (userDict[word]) {
    return {
      phonetic: userDict[word].phonetic,
      meaning: userDict[word].meaning,
    };
  }

  // 2. 从内置词典查找
  if (BUILTIN_DICT[word]) {
    return BUILTIN_DICT[word];
  }

  return null;
}
`;

// Combine the content
// cleanBaseContent ends with:
//   "แฟต": {
//     "phonetic": "fæt",
//     "meaning": "胖的"
//   }
// So we append a comma, then the new entries, then the closing }; and the tail content.
const finalContent = cleanBaseContent + ',' + entriesToAppend.trimEnd() + '\n};' + tailContent;

fs.writeFileSync(dictPath, finalContent, 'utf8');
console.log('Successfully fixed and re-harvested dict.ts!');
