// utils/translate.ts
import { getConfig } from './config';

// --- Accurate MD5 Implementation (from blueimp-md5) ---
function safeAdd(x: number, y: number): number {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xffff);
}

function bitRotateLeft(num: number, cnt: number): number {
  return (num << cnt) | (num >>> (32 - cnt));
}

function md5cmn(q: number, a: number, b: number, x: number, s: number, t: number): number {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  return md5cmn((b & c) | (~b & d), a, b, x, s, t);
}

function md5gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
}

function md5hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

function binlMD5(x: number[], len: number): number[] {
  x[len >> 5] |= 0x80 << len % 32;
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;

    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}

function binl2rstr(input: number[]): string {
  let output = '';
  const length32 = input.length * 32;
  for (let i = 0; i < length32; i += 8) {
    output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
  }
  return output;
}

function rstr2binl(input: string): number[] {
  const output: number[] = [];
  const outputLen = input.length >> 2;
  for (let i = 0; i < outputLen; i++) {
    output[i] = 0;
  }
  const length8 = input.length * 8;
  for (let i = 0; i < length8; i += 8) {
    const idx = i >> 5;
    if (output[idx] === undefined) {
      output[idx] = 0;
    }
    output[idx] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
  }
  return output;
}

function rstrMD5(s: string): string {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}

function rstr2hex(input: string): string {
  const hexTab = '0123456789abcdef';
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    const x = input.charCodeAt(i);
    output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
  }
  return output;
}

function str2rstrUTF8(input: string): string {
  return unescape(encodeURIComponent(input));
}

function rawMD5(s: string): string {
  return rstrMD5(str2rstrUTF8(s));
}

function hexMD5(s: string): string {
  return rstr2hex(rawMD5(s));
}

function md5(string: string): string {
  return hexMD5(string);
}

// --- Preset Examples for Offline/Fallback Testing ---
const PRESET_TRANSLATIONS: Record<string, string> = {
  '客人提供的要求是，把成本做到最小，你知道我们如何做吗，谁会负责这个事情':
    'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้',
  '客人提供的要求是，把成本做到最小，你知道我们如何做吗，谁会负责这个事情。':
    'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด คุณรู้ไหมว่าเราจะทำอย่างไร ใครจะรับผิดชอบเรื่องนี้',
  '你好': 'สวัสดีครับ',
  '你好。': 'สวัสดีครับ',
  '谢谢': 'ขอบคุณครับ',
  '谢谢。': 'ขอบคุณครับ',
  '这个多少钱': 'อันนี้เท่าไหร่',
  '这个多少钱？': 'อันนี้เท่าไหร่',
  '太贵了，便宜点可以吗': 'แพงเกินไป ลดหน่อยได้ไหม',
  '太贵了，便宜点可以吗？': 'แพงเกินไป ลดหน่อยได้ไหม',
  '去机场怎么走': 'ไปสนามบินอย่างไร',
  '去机场怎么走？': 'ไปสนามบินอย่างไร',
  '厕所在哪里': 'ห้องน้ำอยู่ที่ไหน',
  '厕所在哪里？': 'ห้องน้ำอยู่ที่ไหน',
  '泰餐很好吃': 'อาหารไทยอร่อยมาก',
  '泰餐很好吃。': 'อาหารไทยอร่อยมาก',
  '没关系': 'ไม่เป็นไร',
  '没关系。': 'ไม่เป็นไร',
  '对不起': 'ขอโทษครับ',
  '对不起。': 'ขอโทษครับ',
  '等一下': 'รอสักครู่ครับ',
  '等一下。': 'รอสักครู่ครับ',
  '你要去哪里': 'คุณจะไปไหนครับ',
  '你要去哪里？': 'คุณจะไปไหนครับ',
  '我是中国人': 'ฉันเป็นคนจีน',
  '我是中国人。': 'ฉันเป็นคนจีน',
  '你会说汉语吗': 'คุณพูดภาษาจีนได้ไหมครับ',
  '你会说汉语吗？': 'คุณพูดภาษาจีนได้ไหมครับ',
  '我不会说泰语': 'ฉันพูดภาษาไทยไม่ได้',
  '我不会说泰语。': 'ฉันพูดภาษาไทยไม่ได้',
  '我想去这里': 'อยากไปที่นี่ครับ',
  '我想去这里。': 'อยากไปที่นี่ครับ',
  '请慢点说': 'พูดช้าๆ หน่อยครับ',
  '请慢点说。': 'พูดช้าๆ หน่อยครับ',
  '再见': 'ลาก่อนครับ',
  '再见。': 'ลาก่อนครับ',
  '太好了': 'ดีมากเลยครับ',
  '太好了！': 'ดีมากเลยครับ',
  '真的吗': 'จริงเหรอครับ',
  '真的吗？': 'จริงเหรอครับ',
  '好的': 'ตกลงครับ',
  '好的。': 'ตกลงครับ',
  '现在几点': 'ตอนนี้กี่โมงแล้วครับ',
  '现在几点？': 'ตอนนี้กี่โมงแล้วครับ',
  '我不吃辣': 'ไม่กินเผ็ดครับ',
  '我不吃辣。': 'ไม่กินเผ็ดครับ'
};

export function translateChineseToThai(text: string): Promise<string> {
  const trimmedText = text.trim();
  
  // 辅助函数：去除所有空格和标点符号，进行模糊归一化比对
  const normalize = (s: string) => s.replace(/[\s\p{P}]/gu, '');
  const normalizedInput = normalize(trimmedText);

  // 1. 优先模糊匹配预设例句
  for (const [key, value] of Object.entries(PRESET_TRANSLATIONS)) {
    if (normalize(key) === normalizedInput) {
      return Promise.resolve(value);
    }
  }

  const config = getConfig();
  return translateViaBaidu(trimmedText, config.baiduAppId, config.baiduApiKey);
}

/**
 * 百度翻译通用文本翻译接口 (每月100万字符免费额度)
 */
function translateViaBaidu(text: string, appId: string, apiKey: string): Promise<string> {
  if (!appId || !apiKey) {
    return Promise.reject(new Error('未配置百度翻译 AppID 或 密钥，请先在下方“设置”中配置。如果您输入的是测试预设例句，则不需要配置 Key。'));
  }

  return new Promise((resolve, reject) => {
    const salt = Date.now().toString();
    // 签名规则: MD5(appid + q + salt + securityKey)
    const sign = md5(appId + text + salt + apiKey);

    // 微信小程序中的合法域名需要配置: https://api.fanyi.baidu.com
    wx.request({
      url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
      data: {
        q: text,
        from: 'zh',
        to: 'th',
        appid: appId,
        salt: salt,
        sign: sign
      },
      method: 'GET',
      success: (res) => {
        const data = res.data as any;
        if (data && data.trans_result && Array.isArray(data.trans_result)) {
          let result = '';
          for (const item of data.trans_result) {
            result += item.dst;
          }
          resolve(result);
        } else if (data && data.error_code) {
          console.error('Baidu Translate API Error:', data.error_msg);
          reject(new Error(`百度翻译报错: ${data.error_msg} (代码 ${data.error_code})`));
        } else {
          reject(new Error('百度翻译返回数据格式错误'));
        }
      },
      fail: (err) => {
        console.error('Baidu Translate request failed:', err);
        reject(err);
      }
    });
  });
}

/**
 * 将 ISO 11940 罗马音标转换为易读的 RTGS 发音拼写
 */
export function convertIsoToReadable(iso: string): string {
  if (!iso) return '';
  let s = iso.toLowerCase();
  
  // 替换字母组合
  s = s.replace(/k̄h/g, 'kh');
  s = s.replace(/c̄h/g, 'ch');
  s = s.replace(/p̄h/g, 'ph');
  s = s.replace(/t̄h/g, 'th');
  s = s.replace(/f̄/g, 'f');
  s = s.replace(/s̄/g, 's');
  s = s.replace(/h̄/g, ''); // 弱化/静音高音标记
  s = s.replace(/d̄/g, 'd');
  s = s.replace(/b̄/g, 'b');
  s = s.replace(/p̄/g, 'ph');
  
  s = s.replace(/c̣h/g, 'ch');
  s = s.replace(/ṭh/g, 'th');
  s = s.replace(/ṇ/g, 'n');
  s = s.replace(/ḷ/g, 'l');
  s = s.replace(/ṭ/g, 't');
  s = s.replace(/p̣/g, 'ph');
  s = s.replace(/ṣ/g, 's');
  s = s.replace(/ñ/g, 'y');
  
  // 元音
  s = s.replace(/ụ̄/g, 'ue');
  s = s.replace(/ụ/g, 'ue');
  s = s.replace(/ạ/g, 'a');
  s = s.replace(/ā/g, 'aa');
  s = s.replace(/ī/g, 'ii');
  s = s.replace(/ū/g, 'uu');
  s = s.replace(/x/g, 'o'); // อ 作为元音时
  
  // 去除其他音调符号
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  s = s.replace(/iy/g, 'ia');
  s = s.replace(/ey/g, 'ei');
  s = s.replace(/o-([a-z])/g, 'o$1');
  s = s.replace(/c/g, 'ch'); // จ -> ch
  
  return s.trim();
}

/**
 * 在后台尝试查询生词的释义（使用百度翻译接口）
 */
export function lookupUnknownWord(word: string): Promise<{ phonetic: string; meaning: string }> {
  // 不再调用 Google 接口以符合本地域名安全策略，直接使用百度翻译进行生词查询
  return fallbackToBaidu(word);
}

function fallbackToBaidu(word: string): Promise<{ phonetic: string; meaning: string }> {
  const config = getConfig();
  if (!config.baiduAppId || !config.baiduApiKey) {
    return Promise.reject(new Error('未配置百度翻译 Key，无法获取生词释义'));
  }
  
  return new Promise((resolve, reject) => {
    const salt = Date.now().toString();
    const sign = md5(config.baiduAppId + word + salt + config.baiduApiKey);
    
    wx.request({
      url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
      data: {
        q: word,
        from: 'th',
        to: 'zh',
        appid: config.baiduAppId,
        salt: salt,
        sign: sign
      },
      method: 'GET',
      success: (res) => {
        const data = res.data as any;
        if (data && data.trans_result && Array.isArray(data.trans_result)) {
          let meaning = '';
          for (const item of data.trans_result) {
            meaning += item.dst;
          }
          resolve({
            phonetic: '', // 百度不提供拼音音标
            meaning: meaning.trim()
          });
        } else {
          reject(new Error('百度翻译生词失败'));
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

/**
 * 自动调用百度翻译将泰语整句翻译为中文
 */
export function translateThaiToChinese(thaiText: string): Promise<string> {
  const config = getConfig();
  const appId = config.baiduAppId;
  const apiKey = config.baiduApiKey;

  if (!appId || !apiKey) {
    return Promise.reject(new Error('未配置百度翻译 AppID 或 密钥，请在“设置”中配置。如果您不配置Key，可以在导入时手动填写整句中文翻译。'));
  }

  return new Promise((resolve, reject) => {
    const salt = Date.now().toString();
    const sign = md5(appId + thaiText + salt + apiKey);

    wx.request({
      url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
      data: {
        q: thaiText,
        from: 'th',
        to: 'zh',
        appid: appId,
        salt: salt,
        sign: sign
      },
      method: 'GET',
      success: (res) => {
        const data = res.data as any;
        if (data && data.trans_result && Array.isArray(data.trans_result)) {
          let result = '';
          for (const item of data.trans_result) {
            result += item.dst;
          }
          resolve(result);
        } else if (data && data.error_code) {
          console.error('Baidu Translate API Error:', data.error_msg);
          reject(new Error(`百度翻译报错: ${data.error_msg} (代码 ${data.error_code})`));
        } else {
          reject(new Error('百度翻译返回数据格式错误'));
        }
      },
      fail: (err) => {
        console.error('Baidu Translate request failed:', err);
        reject(err);
      }
    });
  });
}
