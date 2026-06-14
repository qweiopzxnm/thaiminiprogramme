// utils/dict.ts
import { getUserDict } from './db';

export interface DictWord {
  phonetic: string;
  meaning: string;
}

export const BUILTIN_DICT: Record<string, DictWord> = {
  "แตงโม": {
    "phonetic": "taeng-mo",
    "meaning": "西瓜"
  },
  "น้ำตา": {
    "phonetic": "nam-taa",
    "meaning": "眼泪"
  },
  "ขอถาม": {
    "phonetic": "khɔ̌ɔ-thǎam",
    "meaning": "请问"
  },
  "ราคา": {
    "phonetic": "raa-khaa",
    "meaning": "价格"
  },
  "ครับ": {
    "phonetic": "khráp",
    "meaning": "(语气词) 男性的礼貌语气词，用于句尾或应答"
  },
  "ค่ะ": {
    "phonetic": "khâ",
    "meaning": "(语气词) 女性的礼貌陈述语气词，用于句末陈述"
  },
  "คะ": {
    "phonetic": "khá",
    "meaning": "(语气词) 女性的礼貌疑问语气词，用于句末疑问"
  },
  "นะ": {
    "phonetic": "ná",
    "meaning": "(语气词) 语气缓和词，表示“啊/吧/哦/哈”"
  },
  "นะจ๊ะ": {
    "phonetic": "ná-já",
    "meaning": "(语气词) 亲昵语气词，意为“哦/哈”"
  },
  "จ๊ะ": {
    "phonetic": "já",
    "meaning": "(语气词) 语气缓和词"
  },
  "จ๋า": {
    "phonetic": "jǎa",
    "meaning": "(语气词) 亲昵呼唤词，意为“亲爱的/宝贝”"
  },
  "หน่อย": {
    "phonetic": "nɔ̀i",
    "meaning": "(语气词) 请求缓和词，表示“一下/稍微/请”"
  },
  "สิ": {
    "phonetic": "sì",
    "meaning": "(语气词) 表示促请、命令或肯定，意为“吧/呀”"
  },
  "เถอะ": {
    "phonetic": "thə̀",
    "meaning": "(语气词) 建议或请求词，意为“吧”"
  },
  "หรอก": {
    "phonetic": "rɔ̀ɔk",
    "meaning": "(语气词) 用于否定句末以缓和语气，意为“才不/并不”"
  },
  "ล่ะ": {
    "phonetic": "lâ",
    "meaning": "(语气词) 表示疑问、追问，意为“呢/啦”"
  },
  "ละ": {
    "phonetic": "lá",
    "meaning": "(语气词) 表示“呢/啦”"
  },
  "ละกัน": {
    "phonetic": "la-gan",
    "meaning": "(语气词) 表示提议“吧/就这样吧”"
  },
  "สวัสดี": {
    "phonetic": "sà-wàt-dii",
    "meaning": "你好"
  },
  "ขอบคุณ": {
    "phonetic": "khɔ̀ɔp-khun",
    "meaning": "谢谢"
  },
  "สบายดีไหม": {
    "phonetic": "sà-baai-dii mǎi",
    "meaning": "你好吗？"
  },
  "สบายดี": {
    "phonetic": "sà-baai-dii",
    "meaning": "很好 / 舒服"
  },
  "ไม่เป็นไร": {
    "phonetic": "mâi pen rai",
    "meaning": "没关系 / 不用谢"
  },
  "ขอโทษ": {
    "phonetic": "khɔ̌ɔ-thôot",
    "meaning": "对不起 / 打扰一下"
  },
  "ใช่": {
    "phonetic": "châi",
    "meaning": "是 / 对"
  },
  "ไม่ใช่": {
    "phonetic": "mâi châi",
    "meaning": "不是"
  },
  "คุณ": {
    "phonetic": "khun",
    "meaning": "你"
  },
  "ผม": {
    "phonetic": "phǒm",
    "meaning": "我 (男性)"
  },
  "ฉัน": {
    "phonetic": "chǎn",
    "meaning": "我 (女性/通用)"
  },
  "我们": {
    "phonetic": "rao",
    "meaning": "我们"
  },
  "เรา": {
    "phonetic": "rao",
    "meaning": "我们 / 我"
  },
  "เขา": {
    "phonetic": "khǎo",
    "meaning": "他 / 她 / 他们"
  },
  "มัน": {
    "phonetic": "man",
    "meaning": "它"
  },
  "พวกเรา": {
    "phonetic": "phuuan-rao",
    "meaning": "我们"
  },
  "他们": {
    "phonetic": "phuuan-khao",
    "meaning": "他们"
  },
  "ที่ไหน": {
    "phonetic": "thîi nǎi",
    "meaning": "哪里"
  },
  "อย่างไร": {
    "phonetic": "yàang-rai",
    "meaning": "如何 / 怎么"
  },
  "ทำไม": {
    "phonetic": "tham mai",
    "meaning": "为什么"
  },
  "อะไร": {
    "phonetic": "à-rai",
    "meaning": "什么"
  },
  "ใคร": {
    "phonetic": "khrai",
    "meaning": "谁"
  },
  "เมื่อไหร่": {
    "phonetic": "mʉ̂a rài",
    "meaning": "什么时候"
  },
  "เท่าไหร่": {
    "phonetic": "thâo rài",
    "meaning": "多少钱 / 多少"
  },
  "ไหม": {
    "phonetic": "mǎi",
    "meaning": "吗 (疑问词)"
  },
  "มั้ย": {
    "phonetic": "mái",
    "meaning": "吗 (口语疑问词)"
  },
  "ต่ำที่สุด": {
    "phonetic": "tàm thîi-sùt",
    "meaning": "最小 / 最低"
  },
  "ลูกค้า": {
    "phonetic": "lûuk-kháa",
    "meaning": "客人 / 客户"
  },
  "ให้": {
    "phonetic": "hâi",
    "meaning": "让 / 给 / 提供"
  },
  "ข้อกำหนด": {
    "phonetic": "khâaw-gam-nòt",
    "meaning": "要求 / 规定"
  },
  "ต้นทุน": {
    "phonetic": "dtôn-thun",
    "meaning": "成本"
  },
  "รู้ไหม": {
    "phonetic": "rúu-mǎi",
    "meaning": "知道吗"
  },
  "จะ": {
    "phonetic": "jà",
    "meaning": "将 / 会"
  },
  "ทำ": {
    "phonetic": "tham",
    "meaning": "做"
  },
  "รับผิดชอบ": {
    "phonetic": "ráp phìt chɔ̂ɔp",
    "meaning": "负责"
  },
  "เรื่อง": {
    "phonetic": "rʉ̂ang",
    "meaning": "事情 / 故事 / 关于"
  },
  "เรื่องนี้": {
    "phonetic": "rʉ̂ang-níi",
    "meaning": "这件事"
  },
  "บาท": {
    "phonetic": "bàat",
    "meaning": "泰铢"
  },
  "อันนี้": {
    "phonetic": "an níi",
    "meaning": "这个"
  },
  "อันนั้น": {
    "phonetic": "an nán",
    "meaning": "那个"
  },
  "แพง": {
    "phonetic": "phaeng",
    "meaning": "贵"
  },
  "เกินไป": {
    "phonetic": "gəən bpai",
    "meaning": "太 / 过分"
  },
  "ลด": {
    "phonetic": "lót",
    "meaning": "降价 / 减少"
  },
  "ได้": {
    "phonetic": "dâai",
    "meaning": "可以 / 能 / 获得"
  },
  "ไม่ได้": {
    "phonetic": "mâi dâai",
    "meaning": "不行 / 不能"
  },
  "ได้ไหม": {
    "phonetic": "dâai mǎi",
    "meaning": "可以吗 / 行不行"
  },
  "อร่อย": {
    "phonetic": "à-rɔ̀i",
    "meaning": "好吃 / 美味"
  },
  "เผ็ด": {
    "phonetic": "phèt",
    "meaning": "辣"
  },
  "น้ำ": {
    "phonetic": "náam",
    "meaning": "水"
  },
  "กิน": {
    "phonetic": "gin",
    "meaning": "吃"
  },
  "ข้าว": {
    "phonetic": "khâaw",
    "meaning": "米饭 / 饭"
  },
  "กินข้าว": {
    "phonetic": "gin khâaw",
    "meaning": "吃饭"
  },
  "ไป": {
    "phonetic": "bpai",
    "meaning": "去"
  },
  "มา": {
    "phonetic": "maa",
    "meaning": "来"
  },
  "พูด": {
    "phonetic": "phûut",
    "meaning": "说"
  },
  "ภาษาไทย": {
    "phonetic": "phaa-sǎa thai",
    "meaning": "泰语"
  },
  "ภาษาจีน": {
    "phonetic": "phaa-sǎa jiin",
    "meaning": "中文 / 汉语"
  },
  "เข้าใจ": {
    "phonetic": "khâo jai",
    "meaning": "明白 / 理解"
  },
  "不": {
    "phonetic": "mâi",
    "meaning": "不 / 没"
  },
  "ไม่": {
    "phonetic": "mâi",
    "meaning": "不 / 没"
  },
  "ไม่เข้าใจ": {
    "phonetic": "mâi khâo jai",
    "meaning": "不明白"
  },
  "โรงแรม": {
    "phonetic": "roong raem",
    "meaning": "酒店"
  },
  "สนามบิน": {
    "phonetic": "sà-nǎam bin",
    "meaning": "机场"
  },
  "ห้องน้ำ": {
    "phonetic": "hɔ̂ng náam",
    "meaning": "厕所 / 洗手间"
  },
  "อยู่ที่ไหน": {
    "phonetic": "yùu thîi nǎi",
    "meaning": "在哪里"
  },
  "ชอบ": {
    "phonetic": "chɔ̂ɔp",
    "meaning": "喜欢"
  },
  "รัก": {
    "phonetic": "rák",
    "meaning": "爱"
  },
  "和": {
    "phonetic": "lae",
    "meaning": "和"
  },
  "และ": {
    "phonetic": "lae",
    "meaning": "和"
  },
  "มี": {
    "phonetic": "mii",
    "meaning": "有"
  },
  "ไม่มี": {
    "phonetic": "mâi mii",
    "meaning": "没有"
  },
  "อยาก": {
    "phonetic": "yàak",
    "meaning": "想要"
  },
  "ต้องการ": {
    "phonetic": "dtâung gaan",
    "meaning": "需要 / 想要"
  },
  "คิด": {
    "phonetic": "khít",
    "meaning": "想 / 思考"
  },
  "ดู": {
    "phonetic": "duu",
    "meaning": "看"
  },
  "เห็น": {
    "phonetic": "hěn",
    "meaning": "看见"
  },
  "ฟัง": {
    "phonetic": "fang",
    "meaning": "听"
  },
  "เขียน": {
    "phonetic": "khǐan",
    "meaning": "写"
  },
  "อ่าน": {
    "phonetic": "àan",
    "meaning": "读"
  },
  "เรียน": {
    "phonetic": "rian",
    "meaning": "学习"
  },
  "รู้": {
    "phonetic": "rúu",
    "meaning": "知道"
  },
  "รู้จัก": {
    "phonetic": "rúu jàk",
    "meaning": "认识"
  },
  "จำ": {
    "phonetic": "jam",
    "meaning": "记住"
  },
  "ลืม": {
    "phonetic": "lʉʉm",
    "meaning": "忘记"
  },
  "จะทำ": {
    "phonetic": "jà-tham",
    "meaning": "将会做"
  },
  "จะรับผิดชอบ": {
    "phonetic": "jà-ráp-phìt-chɔ̂ɔp",
    "meaning": "将负责"
  },
  "去": {
    "phonetic": "bpai",
    "meaning": "去"
  },
  "ลาก่อน": {
    "phonetic": "laa-kɔɔn",
    "meaning": "再见"
  },
  "喜欢": {
    "phonetic": "chhɔɔp",
    "meaning": "喜欢"
  },
  "เน": {
    "phonetic": "ne",
    "meaning": "氖"
  },
  "โอเค": {
    "phonetic": "ookhe",
    "meaning": "好的"
  },
  "โอ้": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "เฮ้": {
    "phonetic": "he",
    "meaning": "嘿"
  },
  "เอ่อ": {
    "phonetic": "oeo",
    "meaning": "呃"
  },
  "นี่": {
    "phonetic": "nii",
    "meaning": "这里"
  },
  "อืม": {
    "phonetic": "ouem",
    "meaning": "唔"
  },
  "อะไรนะ": {
    "phonetic": "oari na",
    "meaning": "什么"
  },
  "แต่": {
    "phonetic": "tæ",
    "meaning": "但"
  },
  "เอาล่ะ": {
    "phonetic": "oeaa la",
    "meaning": "好的"
  },
  "พระเจ้า": {
    "phonetic": "phracheaa",
    "meaning": "上帝"
  },
  "ฟังนะ": {
    "phonetic": "fang na",
    "meaning": "听"
  },
  "ได้โปรด": {
    "phonetic": "di pord",
    "meaning": "请"
  },
  "แน่นอน": {
    "phonetic": "nænon",
    "meaning": "确实"
  },
  "ดี": {
    "phonetic": "dii",
    "meaning": "好的"
  },
  "แล้ว": {
    "phonetic": "læw",
    "meaning": "进而"
  },
  "ที่รัก": {
    "phonetic": "thiirak",
    "meaning": "亲爱的"
  },
  "งั้น": {
    "phonetic": "ngan",
    "meaning": "所以"
  },
  "โอ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "เดี๋ยว": {
    "phonetic": "deiiaw",
    "meaning": "等待"
  },
  "ตอนนี้": {
    "phonetic": "ton nii",
    "meaning": "现在"
  },
  "อ่า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "ก็ได้": {
    "phonetic": "kdi",
    "meaning": "好的"
  },
  "แม่": {
    "phonetic": "mæ",
    "meaning": "母亲"
  },
  "พ่อ": {
    "phonetic": "pho",
    "meaning": "父亲"
  },
  "ปี": {
    "phonetic": "pii",
    "meaning": "年"
  },
  "ว้าว": {
    "phonetic": "waaw",
    "meaning": "哇"
  },
  "ไม่นะ": {
    "phonetic": "mi na",
    "meaning": "不"
  },
  "ใช่แล้ว": {
    "phonetic": "chhı læw",
    "meaning": "没错"
  },
  "ใช่ไหม": {
    "phonetic": "chhı im",
    "meaning": "是这样吗"
  },
  "เปล่า": {
    "phonetic": "pelaa",
    "meaning": "不"
  },
  "ใช่มั้ย": {
    "phonetic": "chhı may",
    "meaning": "是这样吗"
  },
  "ดังนั้น": {
    "phonetic": "dang nan",
    "meaning": "所以"
  },
  "คือ": {
    "phonetic": "khueo",
    "meaning": "那是"
  },
  "หวัดดี": {
    "phonetic": "wad dii",
    "meaning": "你好"
  },
  "เพื่อน": {
    "phonetic": "pheueon",
    "meaning": "朋友们"
  },
  "ตกลง": {
    "phonetic": "tklng",
    "meaning": "好的"
  },
  "อ้อ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "เหรอ": {
    "phonetic": "ero",
    "meaning": "所以"
  },
  "หรือ": {
    "phonetic": "rueo",
    "meaning": "或者"
  },
  "เยี่ยม": {
    "phonetic": "yeiiam",
    "meaning": "伟大的"
  },
  "เออ": {
    "phonetic": "oeo",
    "meaning": "是的"
  },
  "คน": {
    "phonetic": "khn",
    "meaning": "人们"
  },
  "ไง": {
    "phonetic": "ngi",
    "meaning": "嘿"
  },
  "ฮัลโหล": {
    "phonetic": "hal ol",
    "meaning": "你好"
  },
  "แต่ว่า": {
    "phonetic": "tæ waa",
    "meaning": "但"
  },
  "หยุด": {
    "phonetic": "yud",
    "meaning": "停止"
  },
  "ขอโทษนะ": {
    "phonetic": "khothosʹ na",
    "meaning": "对不起"
  },
  "ขอบใจ": {
    "phonetic": "khobchı",
    "meaning": "谢谢"
  },
  "นาที": {
    "phonetic": "naathii",
    "meaning": "分钟"
  },
  "ว่าไง": {
    "phonetic": "waa ngi",
    "meaning": "你怎么说"
  },
  "ทำไมล่ะ": {
    "phonetic": "thami la",
    "meaning": "为什么"
  },
  "อา": {
    "phonetic": "oaa",
    "meaning": "太阳"
  },
  "อย่า": {
    "phonetic": "oyaa",
    "meaning": "不"
  },
  "อ้า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "เฮ้ย": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "โทษที": {
    "phonetic": "thosʹ thii",
    "meaning": "对不起"
  },
  "ก็": {
    "phonetic": "k",
    "meaning": "出色地"
  },
  "มานี่": {
    "phonetic": "maa nii",
    "meaning": "过来吧"
  },
  "นั่น": {
    "phonetic": "nan",
    "meaning": "那"
  },
  "โอ้ว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "เอาละ": {
    "phonetic": "oeaala",
    "meaning": "好的"
  },
  "เธอ": {
    "phonetic": "theo",
    "meaning": "你"
  },
  "ดูสิ": {
    "phonetic": "duusi",
    "meaning": "看"
  },
  "กับ": {
    "phonetic": "kab",
    "meaning": "和"
  },
  "อ๋อ": {
    "phonetic": "oo",
    "meaning": "是的"
  },
  "จริงๆ": {
    "phonetic": "chring«",
    "meaning": "真的"
  },
  "บางที": {
    "phonetic": "baangthii",
    "meaning": "或许"
  },
  "บาย": {
    "phonetic": "baay",
    "meaning": "再见"
  },
  "ดีมาก": {
    "phonetic": "dii maak",
    "meaning": "非常好"
  },
  "หา": {
    "phonetic": "aa",
    "meaning": "寻找"
  },
  "จอห์น": {
    "phonetic": "chon",
    "meaning": "约翰"
  },
  "หยุดนะ": {
    "phonetic": "yud na",
    "meaning": "停止吧"
  },
  "พวก": {
    "phonetic": "phwk",
    "meaning": "伙计们"
  },
  "ได้เลย": {
    "phonetic": "di lei",
    "meaning": "你可以"
  },
  "รู้มั้ย": {
    "phonetic": "ruu may",
    "meaning": "你可知道"
  },
  "ไม่หรอก": {
    "phonetic": "mi rok",
    "meaning": "一点也不"
  },
  "แซม": {
    "phonetic": "sæm",
    "meaning": "萨姆"
  },
  "ทุกคน": {
    "phonetic": "thuk khn",
    "meaning": "每个人"
  },
  "ได้สิ": {
    "phonetic": "di si",
    "meaning": "当然"
  },
  "พี่": {
    "phonetic": "phii",
    "meaning": "兄弟"
  },
  "ถูกต้อง": {
    "phonetic": "thuuk tong",
    "meaning": "这是正确的"
  },
  "อืมม": {
    "phonetic": "ouemm",
    "meaning": "唔"
  },
  "เอ๋": {
    "phonetic": "oe",
    "meaning": "呃"
  },
  "ชัค": {
    "phonetic": "chhakh",
    "meaning": "查克"
  },
  "เย้": {
    "phonetic": "ye",
    "meaning": "耶"
  },
  "ไปเถอะ": {
    "phonetic": "pi theoa",
    "meaning": "我们走吧"
  },
  "เร็ว": {
    "phonetic": "rew",
    "meaning": "快速地"
  },
  "หือ": {
    "phonetic": "ueo",
    "meaning": "呵呵"
  },
  "เอาเลย": {
    "phonetic": "oeaalei",
    "meaning": "前进"
  },
  "มาเร็ว": {
    "phonetic": "maa rew",
    "meaning": "快来吧"
  },
  "เอ๊ะ": {
    "phonetic": "oea",
    "meaning": "呃"
  },
  "มาเถอะ": {
    "phonetic": "maa theoa",
    "meaning": "快点"
  },
  "ฝ่าบาท": {
    "phonetic": "faa baath",
    "meaning": "陛下"
  },
  "เลย": {
    "phonetic": "lei",
    "meaning": "黎府"
  },
  "ใช่เลย": {
    "phonetic": "chhı lei",
    "meaning": "这是正确的"
  },
  "ที่": {
    "phonetic": "thii",
    "meaning": "在"
  },
  "ใช่ครับ": {
    "phonetic": "chhı khrab",
    "meaning": "是的"
  },
  "ท่าน": {
    "phonetic": "thaan",
    "meaning": "先生"
  },
  "ถ้างั้น": {
    "phonetic": "thaa ngan",
    "meaning": "然后"
  },
  "นาย": {
    "phonetic": "naay",
    "meaning": "先生"
  },
  "อ๊ะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "ออกไป": {
    "phonetic": "ook pi",
    "meaning": "出去"
  },
  "ช่าย": {
    "phonetic": "chhaay",
    "meaning": "是的"
  },
  "แล้วก็": {
    "phonetic": "læw k",
    "meaning": "进而"
  },
  "โว้ว": {
    "phonetic": "wow",
    "meaning": "哇"
  },
  "ทางนี้": {
    "phonetic": "thaang nii",
    "meaning": "这边走"
  },
  "อะไรน่ะ": {
    "phonetic": "oari na",
    "meaning": "什么"
  },
  "ไม่เลย": {
    "phonetic": "mi lei",
    "meaning": "一点也不"
  },
  "ใช่ค่ะ": {
    "phonetic": "chhı kha",
    "meaning": "是的"
  },
  "วัน": {
    "phonetic": "wan",
    "meaning": "天"
  },
  "ไม่ครับ": {
    "phonetic": "mi khrab",
    "meaning": "不"
  },
  "ใช่สิ": {
    "phonetic": "chhı si",
    "meaning": "没错"
  },
  "ไมค์": {
    "phonetic": "mikh",
    "meaning": "麦克风"
  },
  "ไม่ค่ะ": {
    "phonetic": "mi kha",
    "meaning": "不"
  },
  "จริง": {
    "phonetic": "chring",
    "meaning": "确实如此"
  },
  "ว่าไงนะ": {
    "phonetic": "waa ngi na",
    "meaning": "你怎么说"
  },
  "แค่": {
    "phonetic": "khæ",
    "meaning": "只是"
  },
  "มีอะไร": {
    "phonetic": "mii oari",
    "meaning": "那里有什么"
  },
  "แล้วไง": {
    "phonetic": "læw ngi",
    "meaning": "所以呢"
  },
  "ดีน": {
    "phonetic": "diin",
    "meaning": "院长"
  },
  "มาสิ": {
    "phonetic": "maasi",
    "meaning": "来"
  },
  "หัวหน้า": {
    "phonetic": "awnaa",
    "meaning": "老板"
  },
  "ใน": {
    "phonetic": "nı",
    "meaning": "在"
  },
  "ชั่วโมง": {
    "phonetic": "chhawmong",
    "meaning": "小时"
  },
  "ที่นี่": {
    "phonetic": "thii nii",
    "meaning": "这里"
  },
  "ปีเตอร์": {
    "phonetic": "pii teor",
    "meaning": "彼得"
  },
  "แจ็ค": {
    "phonetic": "chækh",
    "meaning": "杰克"
  },
  "ลูกรัก": {
    "phonetic": "luuk rak",
    "meaning": "我亲爱的孩子"
  },
  "ไมเคิล": {
    "phonetic": "mikheil",
    "meaning": "迈克尔"
  },
  "หืม": {
    "phonetic": "uem",
    "meaning": "嗯"
  },
  "ใจเย็น": {
    "phonetic": "chıyen",
    "meaning": "冷静下来"
  },
  "สอง": {
    "phonetic": "song",
    "meaning": "二"
  },
  "คือว่า": {
    "phonetic": "khueo waa",
    "meaning": "那是"
  },
  "หุบปาก": {
    "phonetic": "ubpaak",
    "meaning": "住口"
  },
  "นี่คือ": {
    "phonetic": "nii khueo",
    "meaning": "这是"
  },
  "ขอบใจนะ": {
    "phonetic": "khobchı na",
    "meaning": "谢谢"
  },
  "วันนี้": {
    "phonetic": "wan nii",
    "meaning": "今天"
  },
  "อะไรกัน": {
    "phonetic": "oari kan",
    "meaning": "什么"
  },
  "ไปเลย": {
    "phonetic": "pi lei",
    "meaning": "我们走吧"
  },
  "หนึ่ง": {
    "phonetic": "nueng",
    "meaning": "一"
  },
  "ไม่ๆ": {
    "phonetic": "mi«",
    "meaning": "不"
  },
  "โอ๊ย": {
    "phonetic": "ooy",
    "meaning": "哦"
  },
  "อือ": {
    "phonetic": "oueo",
    "meaning": "是的"
  },
  "ขอโทษที": {
    "phonetic": "khothosʹ thii",
    "meaning": "对不起"
  },
  "ระวัง": {
    "phonetic": "rawang",
    "meaning": "当心"
  },
  "โอ๊ะ": {
    "phonetic": "ooa",
    "meaning": "哦"
  },
  "แหม": {
    "phonetic": "æm",
    "meaning": "哦"
  },
  "อีก": {
    "phonetic": "oiik",
    "meaning": "再次"
  },
  "ก็ดี": {
    "phonetic": "kdii",
    "meaning": "很好"
  },
  "นี่ไง": {
    "phonetic": "nii ngi",
    "meaning": "这里是"
  },
  "นี้": {
    "phonetic": "nii",
    "meaning": "这"
  },
  "จริงหรอ": {
    "phonetic": "chring ro",
    "meaning": "真的吗"
  },
  "ยังไง": {
    "phonetic": "yang ngi",
    "meaning": "如何"
  },
  "ซู": {
    "phonetic": "suu",
    "meaning": "苏"
  },
  "ใจเย็นๆ": {
    "phonetic": "chı yen«",
    "meaning": "别紧张"
  },
  "นิค": {
    "phonetic": "nikh",
    "meaning": "缺口"
  },
  "ชาร์ลี": {
    "phonetic": "chhaar lii",
    "meaning": "查理"
  },
  "อ่อ": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "รับทราบ": {
    "phonetic": "rab thraab",
    "meaning": "已获承认"
  },
  "ไปเร็ว": {
    "phonetic": "pi rew",
    "meaning": "快点走吧"
  },
  "รอก่อน": {
    "phonetic": "ro kon",
    "meaning": "等待"
  },
  "หมายถึง": {
    "phonetic": "maay thueng",
    "meaning": "方法"
  },
  "วิ่ง": {
    "phonetic": "wing",
    "meaning": "跑步"
  },
  "อื้ม": {
    "phonetic": "ouem",
    "meaning": "嗯"
  },
  "แม่คะ": {
    "phonetic": "mæ kha",
    "meaning": "妈妈"
  },
  "อ้าว": {
    "phonetic": "oaaw",
    "meaning": "哦"
  },
  "ลี": {
    "phonetic": "lii",
    "meaning": "李"
  },
  "มอร์แกน": {
    "phonetic": "mor kæn",
    "meaning": "摩根"
  },
  "โอเคไหม": {
    "phonetic": "oo khe im",
    "meaning": "可以吗"
  },
  "บ้าจริง": {
    "phonetic": "baa chring",
    "meaning": "真的很疯狂"
  },
  "ครั้ง": {
    "phonetic": "khrang",
    "meaning": "次"
  },
  "ของ": {
    "phonetic": "khong",
    "meaning": "的"
  },
  "ได้ครับ": {
    "phonetic": "di khrab",
    "meaning": "是的是的"
  },
  "ดูนี่สิ": {
    "phonetic": "duu nii s��i",
    "meaning": "看看这个"
  },
  "พ่อคะ": {
    "phonetic": "pho kha",
    "meaning": "爸爸"
  },
  "สาม": {
    "phonetic": "saam",
    "meaning": "三"
  },
  "แบบว่า": {
    "phonetic": "bæb waa",
    "meaning": "就这样"
  },
  "ไฮ": {
    "phonetic": "hi",
    "meaning": "你好"
  },
  "ถอยไป": {
    "phonetic": "thoy pi",
    "meaning": "走开"
  },
  "จาก": {
    "phonetic": "chaak",
    "meaning": "从"
  },
  "แก": {
    "phonetic": "kæ",
    "meaning": "你"
  },
  "ครับผม": {
    "phonetic": "khrab phm",
    "meaning": "是的先生"
  },
  "อ๊า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "ด้วย": {
    "phonetic": "dwy",
    "meaning": "还"
  },
  "ยัง": {
    "phonetic": "yang",
    "meaning": "还没有"
  },
  "ฮะ": {
    "phonetic": "ha",
    "meaning": "哈"
  },
  "ว่า": {
    "phonetic": "wâa",
    "meaning": "说 / 表示 / 是否"
  },
  "ตกลงไหม": {
    "phonetic": "tklng im",
    "meaning": "这样可以吗"
  },
  "ได้ค่ะ": {
    "phonetic": "di kha",
    "meaning": "是的"
  },
  "ทอม": {
    "phonetic": "thom",
    "meaning": "汤姆"
  },
  "เหรียญ": {
    "phonetic": "eriiay",
    "meaning": "硬币"
  },
  "เอาน่า": {
    "phonetic": "oeaa naa",
    "meaning": "快点"
  },
  "เพราะ": {
    "phonetic": "pheraaa",
    "meaning": "因为"
  },
  "นั่นไง": {
    "phonetic": "nan ngi",
    "meaning": "就是这样"
  },
  "ลูก": {
    "phonetic": "luuk",
    "meaning": "孩子们"
  },
  "เดวิด": {
    "phonetic": "dewid",
    "meaning": "大卫"
  },
  "อาจารย์": {
    "phonetic": "oaachaary",
    "meaning": "老师"
  },
  "ไม่ล่ะ": {
    "phonetic": "mi la",
    "meaning": "不"
  },
  "จริงๆนะ": {
    "phonetic": "chring«na",
    "meaning": "真的"
  },
  "เฮนรี่": {
    "phonetic": "he nrii",
    "meaning": "亨利"
  },
  "ลุกขึ้น": {
    "phonetic": "luk khuen",
    "meaning": "起床"
  },
  "เด็กๆ": {
    "phonetic": "dek«",
    "meaning": "孩子们"
  },
  "กัปตัน": {
    "phonetic": "kaptan",
    "meaning": "队长"
  },
  "แม่ครับ": {
    "phonetic": "mæ khrab",
    "meaning": "妈妈"
  },
  "โจ": {
    "phonetic": "cho",
    "meaning": "乔"
  },
  "พอล": {
    "phonetic": "phol",
    "meaning": "保罗"
  },
  "เดือน": {
    "phonetic": "deueon",
    "meaning": "月"
  },
  "ดีแล้ว": {
    "phonetic": "diilæw",
    "meaning": "那挺好的"
  },
  "เอมิลี่": {
    "phonetic": "oe mi lii",
    "meaning": "艾米丽"
  },
  "ที่จริง": {
    "phonetic": "thii chring",
    "meaning": "实际上"
  },
  "เห็นไหม": {
    "phonetic": "en im",
    "meaning": "你看到了吗"
  },
  "น่ะ": {
    "phonetic": "na",
    "meaning": "就是这样"
  },
  "โธ่": {
    "phonetic": "tho",
    "meaning": "哦"
  },
  "บ้าเอ๊ย": {
    "phonetic": "baa oei",
    "meaning": "疯狂的"
  },
  "คืนนี้": {
    "phonetic": "khuen nii",
    "meaning": "今晚"
  },
  "ปีก่อน": {
    "phonetic": "pii kon",
    "meaning": "一年前"
  },
  "นี่มัน": {
    "phonetic": "nii man",
    "meaning": "就是这样"
  },
  "วินาที": {
    "phonetic": "winaathii",
    "meaning": "秒"
  },
  "เจมส์": {
    "phonetic": "chems",
    "meaning": "詹姆斯"
  },
  "อายุ": {
    "phonetic": "oaayu",
    "meaning": "年龄"
  },
  "เจน": {
    "phonetic": "chen",
    "meaning": "简"
  },
  "พี่ชาย": {
    "phonetic": "phii chhaay",
    "meaning": "兄弟"
  },
  "ใช่ๆ": {
    "phonetic": "chhı«",
    "meaning": "这是正确的"
  },
  "เจค": {
    "phonetic": "chekh",
    "meaning": "杰克"
  },
  "นั่งลง": {
    "phonetic": "nang lng",
    "meaning": "坐下"
  },
  "ห๊ะ": {
    "phonetic": "a",
    "meaning": "呵呵"
  },
  "อเล็กซ์": {
    "phonetic": "o lek s",
    "meaning": "亚历克斯"
  },
  "เป็น": {
    "phonetic": "pen",
    "meaning": "这是"
  },
  "ตอนที่": {
    "phonetic": "ton thii",
    "meaning": "插曲"
  },
  "เอ้อ": {
    "phonetic": "oeo",
    "meaning": "呃"
  },
  "นั่นมัน": {
    "phonetic": "nan man",
    "meaning": "就是这样"
  },
  "ขวบ": {
    "phonetic": "khwb",
    "meaning": "岁了"
  },
  "โอ้ย": {
    "phonetic": "ooy",
    "meaning": "哦"
  },
  "ก็ใช่": {
    "phonetic": "k chhı",
    "meaning": "这是正确的"
  },
  "โอเคนะ": {
    "phonetic": "oo khen a",
    "meaning": "好的"
  },
  "ฮ่า": {
    "phonetic": "haa",
    "meaning": "哈"
  },
  "พอแล้ว": {
    "phonetic": "pholæw",
    "meaning": "这就够了"
  },
  "ไอ้หนู": {
    "phonetic": "oi nuu",
    "meaning": "男生"
  },
  "เฮ้อ": {
    "phonetic": "heo",
    "meaning": "叹"
  },
  "ดร": {
    "phonetic": "dr",
    "meaning": "博士"
  },
  "เอิ่ม": {
    "phonetic": "oeim",
    "meaning": "嗯"
  },
  "เบน": {
    "phonetic": "ben",
    "meaning": "本"
  },
  "ทีนี้": {
    "phonetic": "thiinii",
    "meaning": "现在"
  },
  "อาจจะ": {
    "phonetic": "oaach cha",
    "meaning": "或许"
  },
  "ตรงนี้": {
    "phonetic": "trng nii",
    "meaning": "就在这里"
  },
  "เอ้า": {
    "phonetic": "oeaa",
    "meaning": "哦"
  },
  "หรอ": {
    "phonetic": "ro",
    "meaning": "所以"
  },
  "หัวเราะ": {
    "phonetic": "awreaaa",
    "meaning": "笑"
  },
  "เมื่อ": {
    "phonetic": "meueo",
    "meaning": "什么时候"
  },
  "ใช่มั๊ย": {
    "phonetic": "chhı may",
    "meaning": "是这样吗"
  },
  "ขอร้อง": {
    "phonetic": "khorong",
    "meaning": "请"
  },
  "เร็วๆ": {
    "phonetic": "rew«",
    "meaning": "匆忙"
  },
  "ดีเลย": {
    "phonetic": "dii lei",
    "meaning": "那挺好的"
  },
  "ไปสิ": {
    "phonetic": "pisi",
    "meaning": "去"
  },
  "ได้แล้ว": {
    "phonetic": "di læw",
    "meaning": "知道了"
  },
  "เอเลน่า": {
    "phonetic": "oe len aa",
    "meaning": "埃琳娜"
  },
  "นี่อะไร": {
    "phonetic": "nii oari",
    "meaning": "这是什么"
  },
  "อ่ะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "สาวๆ": {
    "phonetic": "saaw«",
    "meaning": "女孩们"
  },
  "มาเลย": {
    "phonetic": "maa lei",
    "meaning": "快点"
  },
  "สเตฟาน": {
    "phonetic": "s te faan",
    "meaning": "斯特凡"
  },
  "เข้ามา": {
    "phonetic": "kheaa maa",
    "meaning": "进来吧"
  },
  "มานี่สิ": {
    "phonetic": "maa nii si",
    "meaning": "过来吧"
  },
  "ถ้า": {
    "phonetic": "thaa",
    "meaning": "如果"
  },
  "เอาหล่ะ": {
    "phonetic": "oeaa la",
    "meaning": "好的"
  },
  "โชคดี": {
    "phonetic": "chhokh dii",
    "meaning": "祝你好运"
  },
  "เจสัน": {
    "phonetic": "che san",
    "meaning": "杰森"
  },
  "บิล": {
    "phonetic": "bil",
    "meaning": "账单"
  },
  "ไม่ต้อง": {
    "phonetic": "mi tong",
    "meaning": "不必"
  },
  "แคลร์": {
    "phonetic": "khæ lr",
    "meaning": "克莱尔"
  },
  "ตายแล้ว": {
    "phonetic": "taay læw",
    "meaning": "死的"
  },
  "ทอมมี่": {
    "phonetic": "thom mii",
    "meaning": "汤米"
  },
  "เฮ": {
    "phonetic": "he",
    "meaning": "嘿"
  },
  "เอ": {
    "phonetic": "oe",
    "meaning": "A"
  },
  "จิม": {
    "phonetic": "chim",
    "meaning": "吉姆"
  },
  "แดน": {
    "phonetic": "dæn",
    "meaning": "担"
  },
  "ให้ตาย": {
    "phonetic": "ı taay",
    "meaning": "去死吧"
  },
  "อย่านะ": {
    "phonetic": "oyaa na",
    "meaning": "不"
  },
  "ไมล์": {
    "phonetic": "mil",
    "meaning": "英里"
  },
  "ถึง": {
    "phonetic": "thueng",
    "meaning": "到"
  },
  "เรย์": {
    "phonetic": "rei",
    "meaning": "射线"
  },
  "คิม": {
    "phonetic": "khim",
    "meaning": "金"
  },
  "ซาร่า": {
    "phonetic": "saa raa",
    "meaning": "萨拉"
  },
  "จริงสิ": {
    "phonetic": "chring si",
    "meaning": "这是真的"
  },
  "เอาสิ": {
    "phonetic": "oeaa si",
    "meaning": "拿走吧"
  },
  "แม็กซ์": {
    "phonetic": "mæks",
    "meaning": "最大限度"
  },
  "เจฟ": {
    "phonetic": "chef",
    "meaning": "杰夫"
  },
  "อดัม": {
    "phonetic": "odam",
    "meaning": "亚当"
  },
  "ตาย": {
    "phonetic": "taay",
    "meaning": "死"
  },
  "อะไรล่ะ": {
    "phonetic": "oari la",
    "meaning": "什么"
  },
  "เดอะ": {
    "phonetic": "deoa",
    "meaning": "这"
  },
  "ไม่สิ": {
    "phonetic": "mi si",
    "meaning": "不"
  },
  "ชม": {
    "phonetic": "chhm",
    "meaning": "小时"
  },
  "ซูซาน": {
    "phonetic": "suu saan",
    "meaning": "苏珊"
  },
  "แดนนี่": {
    "phonetic": "dæn nii",
    "meaning": "丹尼"
  },
  "น้อย": {
    "phonetic": "noy",
    "meaning": "小的"
  },
  "แมรี่": {
    "phonetic": "mærii",
    "meaning": "玛丽"
  },
  "สาวน้อย": {
    "phonetic": "saaw noy",
    "meaning": "小女孩"
  },
  "ชั้น": {
    "phonetic": "chhan",
    "meaning": "地面"
  },
  "แฟรงค์": {
    "phonetic": "færngkh",
    "meaning": "坦率"
  },
  "จอร์จ": {
    "phonetic": "chorch",
    "meaning": "乔治"
  },
  "ชื่อ": {
    "phonetic": "chhueo",
    "meaning": "姓名"
  },
  "ปีแล้ว": {
    "phonetic": "pii læw",
    "meaning": "已经一年了"
  },
  "ไม่รู้": {
    "phonetic": "miruu",
    "meaning": "我不知道"
  },
  "อื้อ": {
    "phonetic": "oueo",
    "meaning": "呃"
  },
  "ประมาณ": {
    "phonetic": "pramaan",
    "meaning": "大约"
  },
  "บ้าเอ้ย": {
    "phonetic": "baa oe y",
    "meaning": "该死的"
  },
  "เร็วสิ": {
    "phonetic": "rew si",
    "meaning": "匆忙"
  },
  "โทษทีนะ": {
    "phonetic": "thosʹ thii na",
    "meaning": "对不起"
  },
  "โชคดีนะ": {
    "phonetic": "chhokh dii na",
    "meaning": "祝你好运"
  },
  "เรเชล": {
    "phonetic": "rechhel",
    "meaning": "雷切尔"
  },
  "พ่อครับ": {
    "phonetic": "pho khrab",
    "meaning": "爸爸"
  },
  "ของฉัน": {
    "phonetic": "khong chhan",
    "meaning": "矿"
  },
  "อะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "ทั้งหมด": {
    "phonetic": "thangmd",
    "meaning": "全部"
  },
  "ดูนี่": {
    "phonetic": "duu nii",
    "meaning": "看看这个"
  },
  "หรือว่า": {
    "phonetic": "rueo waa",
    "meaning": "或者那样"
  },
  "เป็นไง": {
    "phonetic": "pen ngi",
    "meaning": "你好吗"
  },
  "ไม่เอา": {
    "phonetic": "mi oeaa",
    "meaning": "我不想要它"
  },
  "นั่นสิ": {
    "phonetic": "nan si",
    "meaning": "就是这样"
  },
  "หมอ": {
    "phonetic": "mo",
    "meaning": "医生"
  },
  "บ๊อบบี้": {
    "phonetic": "b ob bii",
    "meaning": "鲍比"
  },
  "แจ๊ค": {
    "phonetic": "chækh",
    "meaning": "杰克"
  },
  "แบลร์": {
    "phonetic": "bæ lr",
    "meaning": "布莱尔"
  },
  "สุดยอด": {
    "phonetic": "sud yod",
    "meaning": "惊人的"
  },
  "คืออะไร": {
    "phonetic": "khueo oari",
    "meaning": "它是什么"
  },
  "ต่อไป": {
    "phonetic": "to pi",
    "meaning": "下一个"
  },
  "ไปซะ": {
    "phonetic": "pisa",
    "meaning": "去"
  },
  "วันที่": {
    "phonetic": "wan thii",
    "meaning": "日期"
  },
  "อย่าง": {
    "phonetic": "oyaang",
    "meaning": "喜欢"
  },
  "อืมมม": {
    "phonetic": "ouemmm",
    "meaning": "嗯嗯"
  },
  "เด็ก": {
    "phonetic": "dek",
    "meaning": "孩子们"
  },
  "ยิง": {
    "phonetic": "ying",
    "meaning": "射击"
  },
  "ไปกัน": {
    "phonetic": "pi kan",
    "meaning": "我们走吧"
  },
  "เจนนี่": {
    "phonetic": "chen nii",
    "meaning": "珍妮"
  },
  "แอนดี้": {
    "phonetic": "oæn dii",
    "meaning": "安迪"
  },
  "จากนั้น": {
    "phonetic": "chaak nan",
    "meaning": "然后"
  },
  "พวกเขา": {
    "phonetic": "phwk kheaa",
    "meaning": "他们"
  },
  "ไอ้บ้า": {
    "phonetic": "oi baa",
    "meaning": "疯狂的"
  },
  "เถอะน่า": {
    "phonetic": "theoa naa",
    "meaning": "快点"
  },
  "เจ๋ง": {
    "phonetic": "cheng",
    "meaning": "凉爽的"
  },
  "คาร์ล": {
    "phonetic": "khaarl",
    "meaning": "卡尔"
  },
  "คริส": {
    "phonetic": "khris",
    "meaning": "克里斯"
  },
  "แดเนียล": {
    "phonetic": "dæ neiia l",
    "meaning": "丹尼尔"
  },
  "จอช": {
    "phonetic": "chochh",
    "meaning": "乔什"
  },
  "เงียบ": {
    "phonetic": "ngeiiab",
    "meaning": "安静的"
  },
  "ก็แค่": {
    "phonetic": "k khæ",
    "meaning": "只是"
  },
  "ไปได้": {
    "phonetic": "pi di",
    "meaning": "你可以走了"
  },
  "โอเค้": {
    "phonetic": "oo khe",
    "meaning": "好的"
  },
  "ของคุณ": {
    "phonetic": "khong khun",
    "meaning": "你的"
  },
  "หมอบลง": {
    "phonetic": "mob lng",
    "meaning": "蹲下"
  },
  "แอนนี่": {
    "phonetic": "oæ n nii",
    "meaning": "安妮"
  },
  "รู้แล้ว": {
    "phonetic": "ruu læw",
    "meaning": "我知道"
  },
  "เดฟ": {
    "phonetic": "def",
    "meaning": "戴夫"
  },
  "ไม่ๆๆ": {
    "phonetic": "mi« «",
    "meaning": "不不不"
  },
  "แน่ใจนะ": {
    "phonetic": "næchı na",
    "meaning": "我敢肯定"
  },
  "งั้นก็": {
    "phonetic": "ngan k",
    "meaning": "所以"
  },
  "โอว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "นายท่าน": {
    "phonetic": "naay thaan",
    "meaning": "先生"
  },
  "มาร์ค": {
    "phonetic": "maarkh",
    "meaning": "标记"
  },
  "ข้า": {
    "phonetic": "khaa",
    "meaning": "我"
  },
  "เช่น": {
    "phonetic": "chhen",
    "meaning": "例如"
  },
  "ว่าแต่": {
    "phonetic": "waa tæ",
    "meaning": "但"
  },
  "เคท": {
    "phonetic": "kheth",
    "meaning": "凯特"
  },
  "ไทเลอร์": {
    "phonetic": "thi leo r",
    "meaning": "泰勒"
  },
  "เอมี่": {
    "phonetic": "oe mii",
    "meaning": "艾米"
  },
  "ล้าน": {
    "phonetic": "laan",
    "meaning": "百万"
  },
  "เพลง": {
    "phonetic": "phelng",
    "meaning": "音乐"
  },
  "แย่แล้ว": {
    "phonetic": "yæ læw",
    "meaning": "那很糟糕"
  },
  "ดื่ม": {
    "phonetic": "duem",
    "meaning": "喝"
  },
  "ว่ามั้ย": {
    "phonetic": "waa may",
    "meaning": "你这样认为吗"
  },
  "ถูก": {
    "phonetic": "thuuk",
    "meaning": "便宜的"
  },
  "นั่นคือ": {
    "phonetic": "nan khueo",
    "meaning": "那是"
  },
  "แฮร์รี่": {
    "phonetic": "hær rii",
    "meaning": "哈利"
  },
  "ผู้หญิง": {
    "phonetic": "phuu ying",
    "meaning": "女性"
  },
  "งั้นหรอ": {
    "phonetic": "ngan ro",
    "meaning": "所以"
  },
  "รุ่นพี่": {
    "phonetic": "run phii",
    "meaning": "高级的"
  },
  "บี": {
    "phonetic": "bii",
    "meaning": "B"
  },
  "เฮ่": {
    "phonetic": "he",
    "meaning": "嘿"
  },
  "พวกนาย": {
    "phonetic": "phwk naay",
    "meaning": "你们"
  },
  "มาแล้ว": {
    "phonetic": "maa læw",
    "meaning": "它已经到了"
  },
  "ไม่จริง": {
    "phonetic": "mi chring",
    "meaning": "不正确"
  },
  "คุณพ่อ": {
    "phonetic": "khun pho",
    "meaning": "父亲"
  },
  "จิมมี่": {
    "phonetic": "chi m mii",
    "meaning": "吉米"
  },
  "เดม่อน": {
    "phonetic": "de mon",
    "meaning": "达蒙"
  },
  "แม่ง": {
    "phonetic": "mæng",
    "meaning": "他妈的"
  },
  "ฟุต": {
    "phonetic": "fut",
    "meaning": "脚"
  },
  "โว้": {
    "phonetic": "wo",
    "meaning": "哇哦"
  },
  "ริค": {
    "phonetic": "rikh",
    "meaning": "瑞克"
  },
  "สำหรับ": {
    "phonetic": "sarab",
    "meaning": "为了"
  },
  "มาร์ติน": {
    "phonetic": "maar tin",
    "meaning": "马丁"
  },
  "โย่": {
    "phonetic": "yo",
    "meaning": "哟"
  },
  "พร้อม": {
    "phonetic": "phrom",
    "meaning": "准备好"
  },
  "เนท": {
    "phonetic": "neth",
    "meaning": "内特"
  },
  "คุณหมอ": {
    "phonetic": "khun mo",
    "meaning": "医生"
  },
  "โมง": {
    "phonetic": "mong",
    "meaning": "点了"
  },
  "จ้ะ": {
    "phonetic": "cha",
    "meaning": "是的"
  },
  "พี่คะ": {
    "phonetic": "phii kha",
    "meaning": "兄弟"
  },
  "นั้น": {
    "phonetic": "nan",
    "meaning": "那"
  },
  "ซาร่าห์": {
    "phonetic": "saa raa",
    "meaning": "莎拉"
  },
  "อาเบด": {
    "phonetic": "oaa bed",
    "meaning": "阿贝德"
  },
  "เควิน": {
    "phonetic": "khe win",
    "meaning": "凯文"
  },
  "โทษนะ": {
    "phonetic": "thosʹ na",
    "meaning": "对不起"
  },
  "ออกมา": {
    "phonetic": "ook maa",
    "meaning": "出来"
  },
  "ทรอย": {
    "phonetic": "throy",
    "meaning": "特洛伊"
  },
  "เวลา": {
    "phonetic": "welaa",
    "meaning": "时间"
  },
  "ไม่เคย": {
    "phonetic": "mi khei",
    "meaning": "绝不"
  },
  "ก็คือ": {
    "phonetic": "k khueo",
    "meaning": "那是"
  },
  "โอเค๊": {
    "phonetic": "oo khe",
    "meaning": "好的"
  },
  "เจ้า": {
    "phonetic": "cheaa",
    "meaning": "你"
  },
  "เซรีน่า": {
    "phonetic": "se rii naa",
    "meaning": "瑟琳娜"
  },
  "เจ้านาย": {
    "phonetic": "cheaa naay",
    "meaning": "老板"
  },
  "และก็": {
    "phonetic": "læa k",
    "meaning": "还有"
  },
  "ตรงนั้น": {
    "phonetic": "trng nan",
    "meaning": "那里"
  },
  "หนู": {
    "phonetic": "nuu",
    "meaning": "老鼠"
  },
  "ดูซิ": {
    "phonetic": "duusi",
    "meaning": "看"
  },
  "โกหก": {
    "phonetic": "kok",
    "meaning": "说谎"
  },
  "ตัว": {
    "phonetic": "taw",
    "meaning": "身体"
  },
  "ไหน": {
    "phonetic": "in",
    "meaning": "在哪里"
  },
  "บอนนี่": {
    "phonetic": "bon nii",
    "meaning": "邦妮"
  },
  "ดีจัง": {
    "phonetic": "dii chang",
    "meaning": "非常好"
  },
  "เวรเอ้ย": {
    "phonetic": "wer oe y",
    "meaning": "拉屎"
  },
  "วอน": {
    "phonetic": "won",
    "meaning": "求"
  },
  "บรี": {
    "phonetic": "brii",
    "meaning": "布丽"
  },
  "โห": {
    "phonetic": "o",
    "meaning": "哦"
  },
  "ฟินช์": {
    "phonetic": "finchh",
    "meaning": "芬奇"
  },
  "อยู่": {
    "phonetic": "oy��",
    "meaning": "停留"
  },
  "เจสซี่": {
    "phonetic": "ches sii",
    "meaning": "杰西"
  },
  "โดย": {
    "phonetic": "doy",
    "meaning": "经过"
  },
  "ลิลลี่": {
    "phonetic": "lillii",
    "meaning": "百合"
  },
  "เอาหละ": {
    "phonetic": "oeaa la",
    "meaning": "好的"
  },
  "ริชาร์ด": {
    "phonetic": "ri chhaard",
    "meaning": "理查德"
  },
  "แอนนา": {
    "phonetic": "oæ n naa",
    "meaning": "安娜"
  },
  "กลับมา": {
    "phonetic": "klab maa",
    "meaning": "回来"
  },
  "เหมือน": {
    "phonetic": "emueon",
    "meaning": "喜欢"
  },
  "ตกลงนะ": {
    "phonetic": "tklng na",
    "meaning": "好的"
  },
  "เย่": {
    "phonetic": "ye",
    "meaning": "是的"
  },
  "นา": {
    "phonetic": "naa",
    "meaning": "呐"
  },
  "ท่านพ่อ": {
    "phonetic": "thaan pho",
    "meaning": "父亲"
  },
  "ห๊า": {
    "phonetic": "aa",
    "meaning": "哈"
  },
  "เจส": {
    "phonetic": "ches",
    "meaning": "杰西"
  },
  "ถูกไหม": {
    "phonetic": "thuuk im",
    "meaning": "是这样吗"
  },
  "นี่ครับ": {
    "phonetic": "nii khrab",
    "meaning": "这里"
  },
  "โบ": {
    "phonetic": "bo",
    "meaning": "博"
  },
  "เงิน": {
    "phonetic": "ngein",
    "meaning": "钱"
  },
  "ดูนั่น": {
    "phonetic": "duu nan",
    "meaning": "看看那个"
  },
  "พี่สาว": {
    "phonetic": "phii saaw",
    "meaning": "姐姐"
  },
  "หรือไม่": {
    "phonetic": "rueo mi",
    "meaning": "或不"
  },
  "เวร": {
    "phonetic": "wer",
    "meaning": "拼车"
  },
  "ตำรวจ": {
    "phonetic": "tarwch",
    "meaning": "警察"
  },
  "สตีฟ": {
    "phonetic": "stiif",
    "meaning": "史蒂夫"
  },
  "นี่คุณ": {
    "phonetic": "nii khun",
    "meaning": "这就是你"
  },
  "คุณนาย": {
    "phonetic": "khunnaay",
    "meaning": "女士"
  },
  "พร้อมนะ": {
    "phonetic": "phrom na",
    "meaning": "准备好"
  },
  "อแมนด้า": {
    "phonetic": "o mæn daa",
    "meaning": "阿曼达"
  },
  "เกรซ": {
    "phonetic": "kers",
    "meaning": "优雅"
  },
  "ทำไมละ": {
    "phonetic": "thami la",
    "meaning": "为什么"
  },
  "ตอนนั้น": {
    "phonetic": "ton nan",
    "meaning": "当时"
  },
  "แบบนี้": {
    "phonetic": "bæb nii",
    "meaning": "像这样"
  },
  "ก็นะ": {
    "phonetic": "kna",
    "meaning": "出色地"
  },
  "อะไรวะ": {
    "phonetic": "oari wa",
    "meaning": "搞什么鬼"
  },
  "ดีค่ะ": {
    "phonetic": "dii kha",
    "meaning": "好的"
  },
  "อลิซ": {
    "phonetic": "olis",
    "meaning": "爱丽丝"
  },
  "แบบ": {
    "phonetic": "bæb",
    "meaning": "模型"
  },
  "กัน": {
    "phonetic": "kan",
    "meaning": "一起"
  },
  "ได้มั้ย": {
    "phonetic": "di may",
    "meaning": "我能拿到吗"
  },
  "ขวา": {
    "phonetic": "khwaa",
    "meaning": "正确的"
  },
  "ดงอุค": {
    "phonetic": "dng oukh",
    "meaning": "东旭"
  },
  "ในปี": {
    "phonetic": "nıpii",
    "meaning": "当年"
  },
  "เดี๋ยวๆ": {
    "phonetic": "deiiaw«",
    "meaning": "等一下"
  },
  "ทุกๆ": {
    "phonetic": "thuk«",
    "meaning": "每一个"
  },
  "เคลียร์": {
    "phonetic": "kheliiar",
    "meaning": "清除"
  },
  "เช่นกัน": {
    "phonetic": "chhen kan",
    "meaning": "以及"
  },
  "เคน": {
    "phonetic": "khen",
    "meaning": "肯"
  },
  "บอกว่า": {
    "phonetic": "bok waa",
    "meaning": "说"
  },
  "โคลอี้": {
    "phonetic": "khol oii",
    "meaning": "克洛伊"
  },
  "บิลลี่": {
    "phonetic": "bil lii",
    "meaning": "比利"
  },
  "ใต้เท้า": {
    "phonetic": "tıtheaa",
    "meaning": "脚下"
  },
  "ผอ": {
    "phonetic": "pho",
    "meaning": "导演"
  },
  "ว๊าว": {
    "phonetic": "waaw",
    "meaning": "哇"
  },
  "นีล": {
    "phonetic": "niil",
    "meaning": "尼尔"
  },
  "ตอน": {
    "phonetic": "ton",
    "meaning": "插曲"
  },
  "จริงไหม": {
    "phonetic": "chring im",
    "meaning": "这是真的吗"
  },
  "สี่": {
    "phonetic": "sii",
    "meaning": "四"
  },
  "กรุณา": {
    "phonetic": "krunaa",
    "meaning": "请"
  },
  "ไรอัน": {
    "phonetic": "ri oan",
    "meaning": "瑞安"
  },
  "ทำอะไร": {
    "phonetic": "tha oari",
    "meaning": "你在干什么"
  },
  "ทุก": {
    "phonetic": "thuk",
    "meaning": "每一个"
  },
  "พอเถอะ": {
    "phonetic": "pho theoa",
    "meaning": "这就够了"
  },
  "ไบรอัน": {
    "phonetic": "bi roan",
    "meaning": "布莱恩"
  },
  "จ่า": {
    "phonetic": "chaa",
    "meaning": "中士"
  },
  "โทนี่": {
    "phonetic": "tho nii",
    "meaning": "托尼"
  },
  "ไปตายซะ": {
    "phonetic": "pi taay sa",
    "meaning": "去死吧"
  },
  "หมายเลข": {
    "phonetic": "maaylekh",
    "meaning": "数字"
  },
  "โฮ": {
    "phonetic": "ho",
    "meaning": "嗬"
  },
  "ซี": {
    "phonetic": "sii",
    "meaning": "C"
  },
  "ฮา": {
    "phonetic": "haa",
    "meaning": "哈"
  },
  "เอ็ม": {
    "phonetic": "oem",
    "meaning": "M"
  },
  "ผู้พัน": {
    "phonetic": "phuu phan",
    "meaning": "上校"
  },
  "เจ้าหนู": {
    "phonetic": "cheaa nuu",
    "meaning": "青少年"
  },
  "ฮึ": {
    "phonetic": "hue",
    "meaning": "啊"
  },
  "ข้ารู้": {
    "phonetic": "khaa ruu",
    "meaning": "我知道"
  },
  "ฟินน์": {
    "phonetic": "finn",
    "meaning": "芬恩"
  },
  "นั่นล่ะ": {
    "phonetic": "nan la",
    "meaning": "就是这样"
  },
  "ตื่น": {
    "phonetic": "tuen",
    "meaning": "醒来吧"
  },
  "ลา": {
    "phonetic": "laa",
    "meaning": "再见"
  },
  "เก่งมาก": {
    "phonetic": "keng maak",
    "meaning": "非常好"
  },
  "เจอแล้ว": {
    "phonetic": "cheo læw",
    "meaning": "找到了"
  },
  "คัง": {
    "phonetic": "khang",
    "meaning": "炕"
  },
  "ปอนด์": {
    "phonetic": "pond",
    "meaning": "磅"
  },
  "อยู่ไหน": {
    "phonetic": "oyuu in",
    "meaning": "你在哪里"
  },
  "เอเดน": {
    "phonetic": "oeden",
    "meaning": "伊甸园"
  },
  "คุณแม่": {
    "phonetic": "khun mæ",
    "meaning": "母亲"
  },
  "ลิซ่า": {
    "phonetic": "li saa",
    "meaning": "丽莎"
  },
  "เอาเถอะ": {
    "phonetic": "oeaa theoa",
    "meaning": "快点"
  },
  "วิล": {
    "phonetic": "wil",
    "meaning": "将要"
  },
  "มีสิ": {
    "phonetic": "miisi",
    "meaning": "有"
  },
  "แค่นั้น": {
    "phonetic": "khæ nan",
    "meaning": "就是这样"
  },
  "เชิญ": {
    "phonetic": "chheia",
    "meaning": "邀请"
  },
  "โอย": {
    "phonetic": "ooy",
    "meaning": "哦"
  },
  "รอ": {
    "phonetic": "ro",
    "meaning": "等待"
  },
  "ฮืม": {
    "phonetic": "huem",
    "meaning": "唔"
  },
  "เนธาน": {
    "phonetic": "nethaan",
    "meaning": "内森"
  },
  "อาทิตย์": {
    "phonetic": "oaathity",
    "meaning": "星期日"
  },
  "ฉะนั้น": {
    "phonetic": "chhanan",
    "meaning": "所以"
  },
  "ห้อง": {
    "phonetic": "ong",
    "meaning": "房间"
  },
  "น้องชาย": {
    "phonetic": "nong chhaay",
    "meaning": "弟弟"
  },
  "มานี่มา": {
    "phonetic": "maa nii maa",
    "meaning": "过来吧"
  },
  "คิดว่า": {
    "phonetic": "khid waa",
    "meaning": "我认为"
  },
  "เลยนะ": {
    "phonetic": "lei na",
    "meaning": "马上"
  },
  "ใช่มัย": {
    "phonetic": "chhı may",
    "meaning": "是这样吗"
  },
  "นี่ค่ะ": {
    "phonetic": "nii kha",
    "meaning": "这里"
  },
  "บอกมา": {
    "phonetic": "bok maa",
    "meaning": "告诉我"
  },
  "วิลล์": {
    "phonetic": "wi ll",
    "meaning": "将要"
  },
  "ชิน": {
    "phonetic": "chhin",
    "meaning": "习惯它"
  },
  "อีกแล้ว": {
    "phonetic": "oiik læw",
    "meaning": "再次"
  },
  "วู้": {
    "phonetic": "wuu",
    "meaning": "呜"
  },
  "อีธาน": {
    "phonetic": "oii thaan",
    "meaning": "伊森"
  },
  "เอ้านี่": {
    "phonetic": "oe aa nii",
    "meaning": "这里是"
  },
  "เอฟบีไอ": {
    "phonetic": "oefbii oi",
    "meaning": "联邦调查局"
  },
  "ยู": {
    "phonetic": "yuu",
    "meaning": "U"
  },
  "มิน": {
    "phonetic": "min",
    "meaning": "分钟"
  },
  "โรส": {
    "phonetic": "ros",
    "meaning": "玫瑰"
  },
  "ปธน": {
    "phonetic": "pthn",
    "meaning": "总裁"
  },
  "ผู้ชาย": {
    "phonetic": "phuuchhaay",
    "meaning": "男人"
  },
  "ห้า": {
    "phonetic": "aa",
    "meaning": "五"
  },
  "บ้า": {
    "phonetic": "baa",
    "meaning": "疯狂的"
  },
  "เอ็มม่า": {
    "phonetic": "oemmaa",
    "meaning": "艾玛"
  },
  "จริงอ่ะ": {
    "phonetic": "chring oa",
    "meaning": "这是真的"
  },
  "ดีครับ": {
    "phonetic": "dii khrab",
    "meaning": "好的"
  },
  "เบ็น": {
    "phonetic": "ben",
    "meaning": "本"
  },
  "ถูกแล้ว": {
    "phonetic": "thuuk læw",
    "meaning": "这是正确的"
  },
  "แซลลี่": {
    "phonetic": "sæ l lii",
    "meaning": "莎莉"
  },
  "แจ๋ว": {
    "phonetic": "chæw",
    "meaning": "凉爽的"
  },
  "คู่หู": {
    "phonetic": "khuuuu",
    "meaning": "伙伴"
  },
  "จิน": {
    "phonetic": "chin",
    "meaning": "斤"
  },
  "ของเรา": {
    "phonetic": "khong reaa",
    "meaning": "我们的"
  },
  "เยน": {
    "phonetic": "yen",
    "meaning": "日元"
  },
  "พ่อค่ะ": {
    "phonetic": "pho kha",
    "meaning": "爸爸"
  },
  "เปลี่ยน": {
    "phonetic": "peliian",
    "meaning": "改变"
  },
  "ขอรับ": {
    "phonetic": "khorab",
    "meaning": "请接受"
  },
  "หนุ่มๆ": {
    "phonetic": "num«",
    "meaning": "年轻人"
  },
  "มากกว่า": {
    "phonetic": "maakkwaa",
    "meaning": "多于"
  },
  "อีริค": {
    "phonetic": "oii rikh",
    "meaning": "埃里克"
  },
  "เพียร์ซ": {
    "phonetic": "pheiiar s",
    "meaning": "刺穿"
  },
  "ทั้ง": {
    "phonetic": "thang",
    "meaning": "两个都"
  },
  "เจ": {
    "phonetic": "che",
    "meaning": "J"
  },
  "ลูซี่": {
    "phonetic": "luu sii",
    "meaning": "露西"
  },
  "เอียน": {
    "phonetic": "oeiian",
    "meaning": "伊恩"
  },
  "โทมัส": {
    "phonetic": "tho mas",
    "meaning": "托马斯"
  },
  "เดอ": {
    "phonetic": "deo",
    "meaning": "德"
  },
  "ตามมา": {
    "phonetic": "taam maa",
    "meaning": "跟着走吧"
  },
  "ต่อ": {
    "phonetic": "to",
    "meaning": "继续"
  },
  "แอรอน": {
    "phonetic": "oæ ron",
    "meaning": "亚伦"
  },
  "พวกคุณ": {
    "phonetic": "phwk khun",
    "meaning": "你们"
  },
  "พะยะค่ะ": {
    "phonetic": "pha ya kha",
    "meaning": "帕亚"
  },
  "ดอลลาร์": {
    "phonetic": "dollaar",
    "meaning": "美元"
  },
  "บ้าน": {
    "phonetic": "baan",
    "meaning": "家"
  },
  "รู้มั๊ย": {
    "phonetic": "ruu may",
    "meaning": "你可知道"
  },
  "นั่นใคร": {
    "phonetic": "nan khır",
    "meaning": "那是谁"
  },
  "อลัน": {
    "phonetic": "olan",
    "meaning": "艾伦"
  },
  "ลุค": {
    "phonetic": "lukh",
    "meaning": "卢克"
  },
  "จอง": {
    "phonetic": "chong",
    "meaning": "预订"
  },
  "ไม่เหรอ": {
    "phonetic": "mi e ro",
    "meaning": "不"
  },
  "ขออภัย": {
    "phonetic": "khoophhay",
    "meaning": "对不起"
  },
  "ความรัก": {
    "phonetic": "khwaam rak",
    "meaning": "爱"
  },
  "อึน": {
    "phonetic": "ouen",
    "meaning": "恩"
  },
  "คลาร์ก": {
    "phonetic": "khlaa rk",
    "meaning": "克拉克"
  },
  "ซ้าย": {
    "phonetic": "saay",
    "meaning": "左边"
  },
  "บริษัท": {
    "phonetic": "brisʹath",
    "meaning": "公司"
  },
  "โอเคๆ": {
    "phonetic": "oo khe«",
    "meaning": "好的"
  },
  "เยส": {
    "phonetic": "yes",
    "meaning": "是的"
  },
  "ช้าๆ": {
    "phonetic": "chhaa«",
    "meaning": "慢慢地"
  },
  "ปล่อย": {
    "phonetic": "ploy",
    "meaning": "发布"
  },
  "ทุกๆคน": {
    "phonetic": "thuk«khn",
    "meaning": "每个人"
  },
  "นี่แหละ": {
    "phonetic": "nii æla",
    "meaning": "就是这样"
  },
  "เปล่านะ": {
    "phonetic": "pelaa na",
    "meaning": "不"
  },
  "เมตร": {
    "phonetic": "metr",
    "meaning": "仪表"
  },
  "ฆ่ามัน": {
    "phonetic": "khaa man",
    "meaning": "杀掉它"
  },
  "ผู้กอง": {
    "phonetic": "phuu kong",
    "meaning": "队长"
  },
  "สก็อต": {
    "phonetic": "skot",
    "meaning": "斯科特"
  },
  "จริงดิ": {
    "phonetic": "chring di",
    "meaning": "真的"
  },
  "โคล": {
    "phonetic": "khol",
    "meaning": "油菜"
  },
  "คาร์ลอส": {
    "phonetic": "khaarlos",
    "meaning": "卡洛斯"
  },
  "เพื่อ": {
    "phonetic": "pheueo",
    "meaning": "为了"
  },
  "บัซ": {
    "phonetic": "bas",
    "meaning": "嗡嗡声"
  },
  "เข้าไป": {
    "phonetic": "kheaapi",
    "meaning": "进去吧"
  },
  "โอเคค่ะ": {
    "phonetic": "oo khe kha",
    "meaning": "好的"
  },
  "โจนส์": {
    "phonetic": "chon s",
    "meaning": "琼斯"
  },
  "ไอ้โง่": {
    "phonetic": "oi ngo",
    "meaning": "愚蠢的混蛋"
  },
  "และฉัน": {
    "phonetic": "læa chhan",
    "meaning": "还有我"
  },
  "นะคะ": {
    "phonetic": "nakha",
    "meaning": "请"
  },
  "ชาร์ล": {
    "phonetic": "chhaarl",
    "meaning": "查尔斯"
  },
  "แน่ล่ะ": {
    "phonetic": "næ la",
    "meaning": "确实"
  },
  "พีท": {
    "phonetic": "phiith",
    "meaning": "皮特"
  },
  "ซอง": {
    "phonetic": "song",
    "meaning": "信封"
  },
  "แมท": {
    "phonetic": "mæth",
    "meaning": "马特"
  },
  "โอ้วว": {
    "phonetic": "oo ww",
    "meaning": "哦哇"
  },
  "เท็ด": {
    "phonetic": "thed",
    "meaning": "特德"
  },
  "ขยช": {
    "phonetic": "khychh",
    "meaning": "京奥"
  },
  "นั่งสิ": {
    "phonetic": "nang si",
    "meaning": "坐"
  },
  "รขโ": {
    "phonetic": "rkho",
    "meaning": "拉科"
  },
  "เอ็ดดี้": {
    "phonetic": "oed dii",
    "meaning": "艾迪"
  },
  "รึเปล่า": {
    "phonetic": "rue pelaa",
    "meaning": "或不"
  },
  "ว่าไหม": {
    "phonetic": "waa im",
    "meaning": "你这样认为吗"
  },
  "อะไรคะ": {
    "phonetic": "oari kha",
    "meaning": "什么"
  },
  "เอานี่": {
    "phonetic": "oeaa nii",
    "meaning": "这里是"
  },
  "แต่ฉัน": {
    "phonetic": "tæ chhan",
    "meaning": "但我"
  },
  "มาก": {
    "phonetic": "maak",
    "meaning": "很多"
  },
  "ผู้หมวด": {
    "phonetic": "phuu mwd",
    "meaning": "中尉"
  },
  "สัปดาห์": {
    "phonetic": "sapdaa",
    "meaning": "星期"
  },
  "ภายใน": {
    "phonetic": "phhaaynı",
    "meaning": "里面"
  },
  "พอ": {
    "phonetic": "pho",
    "meaning": "足够的"
  },
  "แย่จัง": {
    "phonetic": "yæ chang",
    "meaning": "太糟糕了"
  },
  "บ๊อบ": {
    "phonetic": "bob",
    "meaning": "鲍勃"
  },
  "เคิร์ท": {
    "phonetic": "kheirth",
    "meaning": "库尔特"
  },
  "น่า": {
    "phonetic": "naa",
    "meaning": "好的"
  },
  "สู้": {
    "phonetic": "suu",
    "meaning": "斗争"
  },
  "แฮงค์": {
    "phonetic": "hængkh",
    "meaning": "汉克"
  },
  "ดงชอล": {
    "phonetic": "dng chhol",
    "meaning": "东哲"
  },
  "ว่ามา": {
    "phonetic": "waa maa",
    "meaning": "说吧"
  },
  "ตื่นสิ": {
    "phonetic": "tuen si",
    "meaning": "醒来吧"
  },
  "นะครับ": {
    "phonetic": "na khrab",
    "meaning": "请"
  },
  "องศา": {
    "phonetic": "ongsaa",
    "meaning": "度"
  },
  "เด็กดี": {
    "phonetic": "dek dii",
    "meaning": "好孩子"
  },
  "ฮ้า": {
    "phonetic": "haa",
    "meaning": "哈"
  },
  "โย่ว": {
    "phonetic": "yow",
    "meaning": "哟"
  },
  "แฮนน่า": {
    "phonetic": "hæ n naa",
    "meaning": "汉娜"
  },
  "ยังเลย": {
    "phonetic": "yang lei",
    "meaning": "还没有"
  },
  "แอ๊บบี้": {
    "phonetic": "oæb bii",
    "meaning": "艾比"
  },
  "ดีล่ะ": {
    "phonetic": "dii la",
    "meaning": "好的"
  },
  "ลูอิส": {
    "phonetic": "luu ois",
    "meaning": "刘易斯"
  },
  "อีไล": {
    "phonetic": "oiili",
    "meaning": "伊莱"
  },
  "ตลอดไป": {
    "phonetic": "tlod pi",
    "meaning": "永远"
  },
  "จูเลียต": {
    "phonetic": "chuu leiia t",
    "meaning": "朱丽叶"
  },
  "ทาร่า": {
    "phonetic": "thaa raa",
    "meaning": "塔拉"
  },
  "หึ": {
    "phonetic": "ue",
    "meaning": "呵呵"
  },
  "รปภ": {
    "phonetic": "rpphh",
    "meaning": "保安员"
  },
  "ไม่งั้น": {
    "phonetic": "mi ngan",
    "meaning": "否则"
  },
  "ฮิโระ": {
    "phonetic": "hi roa",
    "meaning": "宏"
  },
  "เอ็ด": {
    "phonetic": "oed",
    "meaning": "埃德"
  },
  "อ้าา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "กู": {
    "phonetic": "kuu",
    "meaning": "我"
  },
  "เอริค": {
    "phonetic": "oe rikh",
    "meaning": "埃里克"
  },
  "ฟังผมนะ": {
    "phonetic": "fang phm na",
    "meaning": "听我说"
  },
  "พี่ครับ": {
    "phonetic": "phii khrab",
    "meaning": "兄弟"
  },
  "เจนน่า": {
    "phonetic": "chen naa",
    "meaning": "珍娜"
  },
  "ปล่อยนะ": {
    "phonetic": "ploy na",
    "meaning": "松手"
  },
  "แฟรงกี้": {
    "phonetic": "fæ rng kii",
    "meaning": "弗兰基"
  },
  "ทุ่ม": {
    "phonetic": "thum",
    "meaning": "晚上7点"
  },
  "ก็จริง": {
    "phonetic": "k chring",
    "meaning": "这是真的"
  },
  "จี": {
    "phonetic": "chii",
    "meaning": "G"
  },
  "โทบี้": {
    "phonetic": "tho bii",
    "meaning": "托比"
  },
  "ใช้": {
    "phonetic": "chhı",
    "meaning": "使用"
  },
  "แคส": {
    "phonetic": "khæs",
    "meaning": "卡斯"
  },
  "ได้ๆ": {
    "phonetic": "di«",
    "meaning": "好的"
  },
  "หยุดเลย": {
    "phonetic": "yud lei",
    "meaning": "停止吧"
  },
  "แม่ค่ะ": {
    "phonetic": "mæ kha",
    "meaning": "妈妈"
  },
  "ตอบด้วย": {
    "phonetic": "tob dwy",
    "meaning": "请回答"
  },
  "บริค": {
    "phonetic": "brikh",
    "meaning": "砖"
  },
  "คุณปู่": {
    "phonetic": "khun puu",
    "meaning": "爷爷"
  },
  "อะไรหรอ": {
    "phonetic": "oari ro",
    "meaning": "它是什么"
  },
  "เจ้าโง่": {
    "phonetic": "cheaa ngo",
    "meaning": "你这个傻瓜"
  },
  "นาฬิกา": {
    "phonetic": "naalikaa",
    "meaning": "钟"
  },
  "แห่ง": {
    "phonetic": "æng",
    "meaning": "的"
  },
  "บ็อบบี้": {
    "phonetic": "bob bii",
    "meaning": "鲍比"
  },
  "และนี่": {
    "phonetic": "læa nii",
    "meaning": "还有这个"
  },
  "มาเรีย": {
    "phonetic": "maa reiia",
    "meaning": "玛丽亚"
  },
  "เบลล่า": {
    "phonetic": "bel laa",
    "meaning": "贝拉"
  },
  "สุดท้าย": {
    "phonetic": "sudthaay",
    "meaning": "最后"
  },
  "ปาร์ค": {
    "phonetic": "paarkh",
    "meaning": "公园"
  },
  "คุณย่า": {
    "phonetic": "khunyaa",
    "meaning": "奶奶"
  },
  "ไม่อ่ะ": {
    "phonetic": "mi oa",
    "meaning": "不"
  },
  "ลูกชาย": {
    "phonetic": "luukchhaay",
    "meaning": "儿子"
  },
  "จู": {
    "phonetic": "chuu",
    "meaning": "朱"
  },
  "เย็นไว้": {
    "phonetic": "yen wi",
    "meaning": "保持冷静"
  },
  "ตั้งแต่": {
    "phonetic": "tangtæ",
    "meaning": "自从"
  },
  "ทหาร": {
    "phonetic": "thaar",
    "meaning": "士兵"
  },
  "แวน": {
    "phonetic": "wæn",
    "meaning": "范"
  },
  "ไกอัส": {
    "phonetic": "ki oas",
    "meaning": "盖乌斯"
  },
  "เข้า": {
    "phonetic": "kheaa",
    "meaning": "进入"
  },
  "โอ้โห": {
    "phonetic": "oo o",
    "meaning": "哦哇"
  },
  "อาเรีย": {
    "phonetic": "oaa reiia",
    "meaning": "咏叹调"
  },
  "ขอ": {
    "phonetic": "kho",
    "meaning": "问"
  },
  "วิ": {
    "phonetic": "wi",
    "meaning": "无线"
  },
  "ค่อยๆ": {
    "phonetic": "khoy«",
    "meaning": "逐步地"
  },
  "แคร์รี่": {
    "phonetic": "khær rii",
    "meaning": "嘉莉"
  },
  "กลับไป": {
    "phonetic": "klab pi",
    "meaning": "回去"
  },
  "ระวังนะ": {
    "phonetic": "rawang na",
    "meaning": "当心"
  },
  "อย่าไป": {
    "phonetic": "oyaa pi",
    "meaning": "别走"
  },
  "ดูนะ": {
    "phonetic": "duuna",
    "meaning": "看"
  },
  "ก่อน": {
    "phonetic": "kon",
    "meaning": "第一的"
  },
  "อู้ว": {
    "phonetic": "ouuw",
    "meaning": "哦"
  },
  "จอร์แดน": {
    "phonetic": "chordæn",
    "meaning": "约旦"
  },
  "เหรอคะ": {
    "phonetic": "e ro kha",
    "meaning": "真的吗"
  },
  "เอา": {
    "phonetic": "oeaa",
    "meaning": "拿"
  },
  "หลบไป": {
    "phonetic": "lb pi",
    "meaning": "逃跑"
  },
  "อี": {
    "phonetic": "oii",
    "meaning": "E"
  },
  "คุณหนู": {
    "phonetic": "khun nuu",
    "meaning": "小姐"
  },
  "มาดาม": {
    "phonetic": "maadaam",
    "meaning": "夫人"
  },
  "ซัง": {
    "phonetic": "sang",
    "meaning": "科布"
  },
  "ไปไหน": {
    "phonetic": "pi in",
    "meaning": "你要去哪里"
  },
  "บริตต้า": {
    "phonetic": "brittaa",
    "meaning": "布丽塔"
  },
  "เฮ้ๆ": {
    "phonetic": "he«",
    "meaning": "嘿嘿"
  },
  "ไอ": {
    "phonetic": "oi",
    "meaning": "我"
  },
  "แซมมี่": {
    "phonetic": "sæm mii",
    "meaning": "萨米"
  },
  "โธ่เว้ย": {
    "phonetic": "tho wei",
    "meaning": "哦不"
  },
  "โรเจอร์": {
    "phonetic": "ro cheor",
    "meaning": "罗杰"
  },
  "เอมม่า": {
    "phonetic": "oem maa",
    "meaning": "艾玛"
  },
  "ไปแล้ว": {
    "phonetic": "pi læw",
    "meaning": "走了"
  },
  "เอาไป": {
    "phonetic": "oeaa pi",
    "meaning": "拿走吧"
  },
  "จีน": {
    "phonetic": "chiin",
    "meaning": "中国"
  },
  "ตามสบาย": {
    "phonetic": "taam sbaay",
    "meaning": "如你所愿"
  },
  "กอร์ดอน": {
    "phonetic": "kor don",
    "meaning": "戈登"
  },
  "แฮรี่": {
    "phonetic": "hæ rii",
    "meaning": "哈利"
  },
  "สโนว์": {
    "phonetic": "s now",
    "meaning": "雪"
  },
  "อยู่นี่": {
    "phonetic": "oyuu nii",
    "meaning": "这里"
  },
  "ออก": {
    "phonetic": "ook",
    "meaning": "出口"
  },
  "ชู่ว": {
    "phonetic": "chhuuw",
    "meaning": "嘘"
  },
  "เชลดอน": {
    "phonetic": "chhe ldon",
    "meaning": "谢尔顿"
  },
  "ไชโย": {
    "phonetic": "chhiao",
    "meaning": "干杯"
  },
  "ทิม": {
    "phonetic": "thim",
    "meaning": "蒂姆"
  },
  "อ๊าก": {
    "phonetic": "oaak",
    "meaning": "啊"
  },
  "เลขที่": {
    "phonetic": "lekh thii",
    "meaning": "不"
  },
  "บรูซ": {
    "phonetic": "bruus",
    "meaning": "布鲁斯"
  },
  "เสียใจ": {
    "phonetic": "seiiachı",
    "meaning": "对不起"
  },
  "หลีกไป": {
    "phonetic": "liik pi",
    "meaning": "逃离"
  },
  "รอย": {
    "phonetic": "roy",
    "meaning": "罗伊"
  },
  "จริงนะ": {
    "phonetic": "chring na",
    "meaning": "这是真的"
  },
  "ลุง": {
    "phonetic": "lung",
    "meaning": "叔叔"
  },
  "ท่านแม่": {
    "phonetic": "thaan mæ",
    "meaning": "母亲"
  },
  "เคลย์": {
    "phonetic": "khely",
    "meaning": "黏土"
  },
  "อึ": {
    "phonetic": "oue",
    "meaning": "拉屎"
  },
  "ทีม": {
    "phonetic": "thiim",
    "meaning": "团队"
  },
  "ลุยเลย": {
    "phonetic": "luy lei",
    "meaning": "前进"
  },
  "รี้ด": {
    "phonetic": "riid",
    "meaning": "芦苇"
  },
  "เสียง": {
    "phonetic": "seiiang",
    "meaning": "声音"
  },
  "โบนส์": {
    "phonetic": "bons",
    "meaning": "骨头"
  },
  "ชอน": {
    "phonetic": "chhon",
    "meaning": "肖恩"
  },
  "ราเชล": {
    "phonetic": "raa chhel",
    "meaning": "雷切尔"
  },
  "ไอ้": {
    "phonetic": "oi",
    "meaning": "该死"
  },
  "ดา": {
    "phonetic": "daa",
    "meaning": "达"
  },
  "อัล": {
    "phonetic": "oal",
    "meaning": "阿尔"
  },
  "ชา": {
    "phonetic": "chhaa",
    "meaning": "茶"
  },
  "โนอาห์": {
    "phonetic": "no oaa",
    "meaning": "诺亚"
  },
  "เพคะ": {
    "phonetic": "phekha",
    "meaning": "唷"
  },
  "สตาร์ค": {
    "phonetic": "s taarkh",
    "meaning": "斯塔克"
  },
  "กับฉัน": {
    "phonetic": "kab chhan",
    "meaning": "与我一起"
  },
  "มิตะซัง": {
    "phonetic": "mi ta sang",
    "meaning": "三田桑"
  },
  "แมทธิว": {
    "phonetic": "mæ ththi w",
    "meaning": "马修"
  },
  "จุน": {
    "phonetic": "chun",
    "meaning": "六月"
  },
  "รูฟัส": {
    "phonetic": "ruu fas",
    "meaning": "鲁弗斯"
  },
  "จูเลีย": {
    "phonetic": "chuu leiia",
    "meaning": "朱莉娅"
  },
  "ที": {
    "phonetic": "thii",
    "meaning": "T"
  },
  "มิโฮ": {
    "phonetic": "miho",
    "meaning": "美穗"
  },
  "บูธ": {
    "phonetic": "buuth",
    "meaning": "展位"
  },
  "คุณลุง": {
    "phonetic": "khun lung",
    "meaning": "叔叔"
  },
  "สัญญา": {
    "phonetic": "sayyaa",
    "meaning": "承诺"
  },
  "เชิญเลย": {
    "phonetic": "chheia lei",
    "meaning": "快点"
  },
  "แฮนนา": {
    "phonetic": "hæ n naa",
    "meaning": "汉娜"
  },
  "ไม่นี่": {
    "phonetic": "mi nii",
    "meaning": "不在这里"
  },
  "ของเขา": {
    "phonetic": "khong kheaa",
    "meaning": "他的"
  },
  "จันดี": {
    "phonetic": "chan dii",
    "meaning": "昌迪"
  },
  "อู้": {
    "phonetic": "ouu",
    "meaning": "哦"
  },
  "โช": {
    "phonetic": "chho",
    "meaning": "曹"
  },
  "นักสืบ": {
    "phonetic": "naksueb",
    "meaning": "侦探"
  },
  "พูดสิ": {
    "phonetic": "phuud si",
    "meaning": "说吧"
  },
  "โธ่เอ๊ย": {
    "phonetic": "tho oei",
    "meaning": "天哪"
  },
  "ขึ้นมา": {
    "phonetic": "khuen maa",
    "meaning": "过来"
  },
  "วันก่อน": {
    "phonetic": "wan kon",
    "meaning": "前一天"
  },
  "ถูกมั้ย": {
    "phonetic": "thuuk may",
    "meaning": "是这样吗"
  },
  "บ้าชิบ": {
    "phonetic": "baa chhib",
    "meaning": "疯狂的"
  },
  "ชาลี": {
    "phonetic": "chhaalii",
    "meaning": "查理"
  },
  "จีฮุน": {
    "phonetic": "chii hun",
    "meaning": "志勋"
  },
  "เริ่ม": {
    "phonetic": "reim",
    "meaning": "开始"
  },
  "อุ๊ย": {
    "phonetic": "ouy",
    "meaning": "哎哟"
  },
  "โค้ช": {
    "phonetic": "khochh",
    "meaning": "教练"
  },
  "เดล": {
    "phonetic": "del",
    "meaning": "德尔"
  },
  "แปลว่า": {
    "phonetic": "pæl waa",
    "meaning": "意义"
  },
  "ดอน": {
    "phonetic": "don",
    "meaning": "大学教师"
  },
  "หก": {
    "phonetic": "k",
    "meaning": "六"
  },
  "จริงรึ": {
    "phonetic": "chring rue",
    "meaning": "真的吗"
  },
  "ซุกกี้": {
    "phonetic": "suk kii",
    "meaning": "苏琪"
  },
  "ก็ดีนะ": {
    "phonetic": "k dii na",
    "meaning": "那挺好的"
  },
  "ฝันดี": {
    "phonetic": "fan dii",
    "meaning": "甜蜜的梦"
  },
  "วอลท์": {
    "phonetic": "wolth",
    "meaning": "沃尔特"
  },
  "ท่านหมอ": {
    "phonetic": "thaan mo",
    "meaning": "医生"
  },
  "แม่จ๋า": {
    "phonetic": "mæ chaa",
    "meaning": "母亲"
  },
  "เพนนี": {
    "phonetic": "phennii",
    "meaning": "一分钱"
  },
  "เด็กซ์": {
    "phonetic": "dek s",
    "meaning": "德克斯"
  },
  "หลังจาก": {
    "phonetic": "lang chaak",
    "meaning": "后"
  },
  "ผู้การ": {
    "phonetic": "phuu kaar",
    "meaning": "指挥官"
  },
  "น่ารัก": {
    "phonetic": "naa rak",
    "meaning": "可爱的"
  },
  "นิ้ว": {
    "phonetic": "niw",
    "meaning": "英寸"
  },
  "ที่นั่น": {
    "phonetic": "thii nan",
    "meaning": "那里"
  },
  "พอกันที": {
    "phonetic": "phokan thii",
    "meaning": "这就够了"
  },
  "คราวนี้": {
    "phonetic": "khraaw nii",
    "meaning": "这次"
  },
  "แม่ฮะ": {
    "phonetic": "mæ ha",
    "meaning": "妈妈"
  },
  "เชน": {
    "phonetic": "chhen",
    "meaning": "链"
  },
  "สหาย": {
    "phonetic": "saay",
    "meaning": "朋友们"
  },
  "เอางี้": {
    "phonetic": "oeaa ngii",
    "meaning": "拿这个"
  },
  "ราย": {
    "phonetic": "raay",
    "meaning": "列表"
  },
  "คำราม": {
    "phonetic": "kharaam",
    "meaning": "吼"
  },
  "ตายจริง": {
    "phonetic": "taay chring",
    "meaning": "真的死了"
  },
  "แบส": {
    "phonetic": "bæs",
    "meaning": "低音"
  },
  "เจอกัน": {
    "phonetic": "cheo kan",
    "meaning": "再见"
  },
  "เคลลี่": {
    "phonetic": "khel lii",
    "meaning": "凯莉"
  },
  "ะต": {
    "phonetic": "at",
    "meaning": "TT"
  },
  "ฟิล": {
    "phonetic": "fil",
    "meaning": "菲尔"
  },
  "จับไว้": {
    "phonetic": "chab wi",
    "meaning": "握住它"
  },
  "โนแลน": {
    "phonetic": "no læn",
    "meaning": "诺兰"
  },
  "โก": {
    "phonetic": "ko",
    "meaning": "去"
  },
  "อีดงชอล": {
    "phonetic": "oii dng chhol",
    "meaning": "李东哲"
  },
  "แน่ใจ": {
    "phonetic": "næchı",
    "meaning": "当然"
  },
  "คงงั้น": {
    "phonetic": "khng ngan",
    "meaning": "大概是这样"
  },
  "ปลอดภัย": {
    "phonetic": "plodphhay",
    "meaning": "安全的"
  },
  "เมษายน": {
    "phonetic": "mesʹaayn",
    "meaning": "四月"
  },
  "ท่านคะ": {
    "phonetic": "thaan kha",
    "meaning": "先生"
  },
  "น่าสนใจ": {
    "phonetic": "naa snchı",
    "meaning": "有趣的"
  },
  "เค": {
    "phonetic": "khe",
    "meaning": "K"
  },
  "ยอง": {
    "phonetic": "yong",
    "meaning": "勇"
  },
  "จ้า": {
    "phonetic": "chaa",
    "meaning": "是的"
  },
  "แม็กกี้": {
    "phonetic": "mæ kkii",
    "meaning": "玛吉"
  },
  "อย่ายิง": {
    "phonetic": "oyaa ying",
    "meaning": "别开枪"
  },
  "เอส": {
    "phonetic": "oes",
    "meaning": "S"
  },
  "อ่าฮะ": {
    "phonetic": "oaa ha",
    "meaning": "啊哈"
  },
  "ไม่ๆๆๆ": {
    "phonetic": "mi« ««",
    "meaning": "不不不"
  },
  "ชอว์น": {
    "phonetic": "chhown",
    "meaning": "肖恩"
  },
  "เนอะ": {
    "phonetic": "neoa",
    "meaning": "正确的"
  },
  "บลา": {
    "phonetic": "blaa",
    "meaning": "废话"
  },
  "จุง": {
    "phonetic": "chung",
    "meaning": "荣格"
  },
  "เจ้าชาย": {
    "phonetic": "cheaa chhaay",
    "meaning": "王子"
  },
  "คิว": {
    "phonetic": "khiw",
    "meaning": "队列"
  },
  "ออกไปซะ": {
    "phonetic": "ook pi sa",
    "meaning": "出去"
  },
  "ฮัน": {
    "phonetic": "han",
    "meaning": "韩"
  },
  "โอ้ไม่": {
    "phonetic": "oo mi",
    "meaning": "哦不"
  },
  "โซฟี": {
    "phonetic": "sofii",
    "meaning": "苏菲"
  },
  "รอน": {
    "phonetic": "ron",
    "meaning": "罗恩"
  },
  "ข้อ": {
    "phonetic": "kho",
    "meaning": "物品"
  },
  "เปิด": {
    "phonetic": "peid",
    "meaning": "打开"
  },
  "ะฐ": {
    "phonetic": "ath",
    "meaning": "啊"
  },
  "มนุษย์": {
    "phonetic": "mnusʹy",
    "meaning": "人类"
  },
  "น้องสาว": {
    "phonetic": "nong saaw",
    "meaning": "妹妹"
  },
  "ทราวิส": {
    "phonetic": "thraa wis",
    "meaning": "特拉维斯"
  },
  "รอบ": {
    "phonetic": "rob",
    "meaning": "大约"
  },
  "หืมม": {
    "phonetic": "uemm",
    "meaning": "唔"
  },
  "สวย": {
    "phonetic": "swy",
    "meaning": "美丽的"
  },
  "และคุณ": {
    "phonetic": "læa khun",
    "meaning": "你呢"
  },
  "งี่เง่า": {
    "phonetic": "ngii ngeaa",
    "meaning": "愚蠢的"
  },
  "ชั้นรู้": {
    "phonetic": "chhan ruu",
    "meaning": "我知道"
  },
  "มาใน": {
    "phonetic": "maanı",
    "meaning": "进来吧"
  },
  "เอลลี่": {
    "phonetic": "oe l lii",
    "meaning": "艾莉"
  },
  "เวรเอ๊ย": {
    "phonetic": "wer oei",
    "meaning": "拉屎"
  },
  "เชิญค่ะ": {
    "phonetic": "chheia kha",
    "meaning": "请来"
  },
  "จำไว้": {
    "phonetic": "cha wi",
    "meaning": "记住"
  },
  "ทำงาน": {
    "phonetic": "thangaan",
    "meaning": "工作"
  },
  "คำว่า": {
    "phonetic": "kha waa",
    "meaning": "这个词"
  },
  "จุนพโย": {
    "phonetic": "chu nph yo",
    "meaning": "杓俊"
  },
  "ฮุน": {
    "phonetic": "hun",
    "meaning": "匈奴"
  },
  "ลูคัส": {
    "phonetic": "luukhas",
    "meaning": "卢卡斯"
  },
  "คะแนน": {
    "phonetic": "khanæn",
    "meaning": "分数"
  },
  "บ๊ายบาย": {
    "phonetic": "baay baay",
    "meaning": "再见"
  },
  "อย่าเลย": {
    "phonetic": "oyaa lei",
    "meaning": "不"
  },
  "ปืน": {
    "phonetic": "puen",
    "meaning": "枪"
  },
  "ใบ": {
    "phonetic": "bı",
    "meaning": "树叶"
  },
  "ลอเรล": {
    "phonetic": "lorel",
    "meaning": "劳雷尔"
  },
  "ก็เลย": {
    "phonetic": "k lei",
    "meaning": "所以"
  },
  "อืมมมม": {
    "phonetic": "ouemmmm",
    "meaning": "嗯嗯"
  },
  "แน่สิ": {
    "phonetic": "næ si",
    "meaning": "确实"
  },
  "ผิด": {
    "phonetic": "phid",
    "meaning": "错误的"
  },
  "โถ่": {
    "phonetic": "tho",
    "meaning": "哦"
  },
  "ตอนแรก": {
    "phonetic": "ton ræk",
    "meaning": "第一集"
  },
  "วู": {
    "phonetic": "wuu",
    "meaning": "呜"
  },
  "เชื่อสิ": {
    "phonetic": "chheueo si",
    "meaning": "相信它"
  },
  "โซเฟีย": {
    "phonetic": "sofeiia",
    "meaning": "索菲亚"
  },
  "ทำไมคะ": {
    "phonetic": "thami kha",
    "meaning": "为什么"
  },
  "หนีไป": {
    "phonetic": "nii pi",
    "meaning": "逃跑"
  },
  "ไอ้เวร": {
    "phonetic": "oi wer",
    "meaning": "混蛋"
  },
  "มอลลี่": {
    "phonetic": "mo l lii",
    "meaning": "莫莉"
  },
  "เชลด้อน": {
    "phonetic": "chhe ldon",
    "meaning": "谢尔顿"
  },
  "คุณป้า": {
    "phonetic": "khun paa",
    "meaning": "阿姨"
  },
  "นอร่า": {
    "phonetic": "no raa",
    "meaning": "诺拉"
  },
  "ซิด": {
    "phonetic": "sid",
    "meaning": "席德"
  },
  "ข่าวดี": {
    "phonetic": "khaawdii",
    "meaning": "好消息"
  },
  "ร้อน": {
    "phonetic": "ron",
    "meaning": "热的"
  },
  "นั่ง": {
    "phonetic": "nang",
    "meaning": "坐"
  },
  "ป้า": {
    "phonetic": "paa",
    "meaning": "阿姨"
  },
  "เลือด": {
    "phonetic": "leueod",
    "meaning": "血"
  },
  "แคสเซิล": {
    "phonetic": "khæ s seil",
    "meaning": "城堡"
  },
  "คนเดียว": {
    "phonetic": "khn deiiaw",
    "meaning": "独自的"
  },
  "เฮเลน": {
    "phonetic": "he len",
    "meaning": "海伦"
  },
  "ริว": {
    "phonetic": "riw",
    "meaning": "隆"
  },
  "โบรดี้": {
    "phonetic": "bo rdii",
    "meaning": "布罗迪"
  },
  "ยูริ": {
    "phonetic": "yuuri",
    "meaning": "尤里"
  },
  "พูดว่า": {
    "phonetic": "phuud waa",
    "meaning": "说"
  },
  "แล้วนะ": {
    "phonetic": "læw na",
    "meaning": "已经"
  },
  "สู้ๆ": {
    "phonetic": "suu«",
    "meaning": "斗争"
  },
  "ไร้สาระ": {
    "phonetic": "ri saara",
    "meaning": "废话"
  },
  "เจ็บ": {
    "phonetic": "cheb",
    "meaning": "好痛"
  },
  "จนท": {
    "phonetic": "chnth",
    "meaning": "军官"
  },
  "ไปเหอะ": {
    "phonetic": "pi eoa",
    "meaning": "我们走吧"
  },
  "ลินดา": {
    "phonetic": "lin daa",
    "meaning": "琳达"
  },
  "เคนซี่": {
    "phonetic": "khen sii",
    "meaning": "肯西"
  },
  "ไอ้เลว": {
    "phonetic": "oi lew",
    "meaning": "混蛋"
  },
  "สาว": {
    "phonetic": "saaw",
    "meaning": "女孩"
  },
  "เบลล์": {
    "phonetic": "bell",
    "meaning": "钟"
  },
  "ชอว์": {
    "phonetic": "chhow",
    "meaning": "肖"
  },
  "เซอร์": {
    "phonetic": "seor",
    "meaning": "先生"
  },
  "พวกนั้น": {
    "phonetic": "phwk nan",
    "meaning": "那些"
  },
  "แจ็คสัน": {
    "phonetic": "chækh san",
    "meaning": "杰克逊"
  },
  "ไว้": {
    "phonetic": "wi",
    "meaning": "保留它"
  },
  "จัสติน": {
    "phonetic": "chas tin",
    "meaning": "贾斯汀"
  },
  "แม้ว่า": {
    "phonetic": "mæwaa",
    "meaning": "虽然"
  },
  "อัน": {
    "phonetic": "oan",
    "meaning": "一个"
  },
  "ลิสบอน": {
    "phonetic": "lisbon",
    "meaning": "里斯本"
  },
  "ไฟ": {
    "phonetic": "fi",
    "meaning": "火"
  },
  "สินะ": {
    "phonetic": "sina",
    "meaning": "这是正确的"
  },
  "ควีน": {
    "phonetic": "khwiin",
    "meaning": "女王"
  },
  "เจมี่": {
    "phonetic": "che mii",
    "meaning": "杰米"
  },
  "หายไป": {
    "phonetic": "aay pi",
    "meaning": "消失了"
  },
  "พี่ค่ะ": {
    "phonetic": "phii kha",
    "meaning": "兄弟"
  },
  "ไคล์": {
    "phonetic": "khil",
    "meaning": "凯尔"
  },
  "รู้สิ": {
    "phonetic": "ruu si",
    "meaning": "你知道"
  },
  "ชีวิต": {
    "phonetic": "chhiiwit",
    "meaning": "生活"
  },
  "ไม่ละ": {
    "phonetic": "mi la",
    "meaning": "不"
  },
  "คนต่อไป": {
    "phonetic": "khn to pi",
    "meaning": "下一个人"
  },
  "เจ็ด": {
    "phonetic": "ched",
    "meaning": "七"
  },
  "ทุกท่าน": {
    "phonetic": "thuk thaan",
    "meaning": "每个人"
  },
  "โจนาธาน": {
    "phonetic": "cho naa thaan",
    "meaning": "乔纳森"
  },
  "ควินน์": {
    "phonetic": "kh win n",
    "meaning": "奎因"
  },
  "ชอย": {
    "phonetic": "chhoy",
    "meaning": "崔"
  },
  "ผ่าน": {
    "phonetic": "phaan",
    "meaning": "经过"
  },
  "แหงล่ะ": {
    "phonetic": "æng la",
    "meaning": "当然"
  },
  "เจเรมี่": {
    "phonetic": "che re mii",
    "meaning": "杰里米"
  },
  "สก๊อต": {
    "phonetic": "skot",
    "meaning": "苏格兰人"
  },
  "ในอีก": {
    "phonetic": "nı oiik",
    "meaning": "在另一个"
  },
  "เซเรน่า": {
    "phonetic": "se re naa",
    "meaning": "瑟琳娜"
  },
  "ลงไป": {
    "phonetic": "lngpi",
    "meaning": "下去"
  },
  "ยกเว้น": {
    "phonetic": "ykwen",
    "meaning": "除了"
  },
  "ไดอาน่า": {
    "phonetic": "dioaanaa",
    "meaning": "戴安娜"
  },
  "คาร่า": {
    "phonetic": "khaa raa",
    "meaning": "卡拉"
  },
  "ตลอด": {
    "phonetic": "tlod",
    "meaning": "一直以来"
  },
  "อาร์ตี้": {
    "phonetic": "oaartii",
    "meaning": "阿蒂"
  },
  "พรรคพวก": {
    "phonetic": "phrrkh phwk",
    "meaning": "盟国"
  },
  "เปล่าๆ": {
    "phonetic": "pelaa«",
    "meaning": "不"
  },
  "วิลลี่": {
    "phonetic": "wi l lii",
    "meaning": "威利"
  },
  "ยังไงซะ": {
    "phonetic": "yang ngi sa",
    "meaning": "反正"
  },
  "แบร์รี่": {
    "phonetic": "bær rii",
    "meaning": "巴里"
  },
  "ด้วยกัน": {
    "phonetic": "dwy kan",
    "meaning": "一起"
  },
  "จูน": {
    "phonetic": "chuun",
    "meaning": "调"
  },
  "เท่า": {
    "phonetic": "theaa",
    "meaning": "次"
  },
  "โว": {
    "phonetic": "wo",
    "meaning": "沃"
  },
  "นี่นาย": {
    "phonetic": "nii naay",
    "meaning": "这就是你"
  },
  "เชียร์": {
    "phonetic": "chheiiar",
    "meaning": "欢呼"
  },
  "ไม่ไม่": {
    "phonetic": "mi mi",
    "meaning": "不不"
  },
  "พอที": {
    "phonetic": "phothii",
    "meaning": "足够的"
  },
  "สวยมาก": {
    "phonetic": "swy maak",
    "meaning": "很漂亮"
  },
  "เอง": {
    "phonetic": "oeng",
    "meaning": "我"
  },
  "ช้าก่อน": {
    "phonetic": "chhaa kon",
    "meaning": "先慢点"
  },
  "คนสวย": {
    "phonetic": "khn swy",
    "meaning": "美丽的人"
  },
  "โทษครับ": {
    "phonetic": "thosʹ khrab",
    "meaning": "对不起"
  },
  "ว้าวว": {
    "phonetic": "waa ww",
    "meaning": "哇"
  },
  "โด": {
    "phonetic": "do",
    "meaning": "做"
  },
  "ลง": {
    "phonetic": "lng",
    "meaning": "向下"
  },
  "แบบนั้น": {
    "phonetic": "b��b nan",
    "meaning": "就这样"
  },
  "แครอล": {
    "phonetic": "khæ rol",
    "meaning": "颂歌"
  },
  "ปัง": {
    "phonetic": "pang",
    "meaning": "砰"
  },
  "ดีกว่า": {
    "phonetic": "dii kwaa",
    "meaning": "更好的"
  },
  "ยอดเลย": {
    "phonetic": "yod lei",
    "meaning": "出色的"
  },
  "นิกิต้า": {
    "phonetic": "ni kitaa",
    "meaning": "尼基塔"
  },
  "เมย์": {
    "phonetic": "mei",
    "meaning": "可能"
  },
  "ใช่ไม๊": {
    "phonetic": "chhı mi",
    "meaning": "是这样吗"
  },
  "หายใจ": {
    "phonetic": "aaychı",
    "meaning": "呼吸"
  },
  "รอด้วย": {
    "phonetic": "ro dwy",
    "meaning": "请稍等"
  },
  "เ่อ่อ": {
    "phonetic": "eoo",
    "meaning": "嗯嗯"
  },
  "บอกฉัน": {
    "phonetic": "bok chhan",
    "meaning": "告诉我"
  },
  "จับมัน": {
    "phonetic": "chab man",
    "meaning": "抓住它"
  },
  "งั้นรึ": {
    "phonetic": "ngan rue",
    "meaning": "所以"
  },
  "ลู": {
    "phonetic": "luu",
    "meaning": "鲁"
  },
  "เรเน่": {
    "phonetic": "rene",
    "meaning": "雷内"
  },
  "มาร์คัส": {
    "phonetic": "maarkhas",
    "meaning": "马库斯"
  },
  "ขึ้น": {
    "phonetic": "khuen",
    "meaning": "向上"
  },
  "มาร์ตี้": {
    "phonetic": "maar tii",
    "meaning": "马蒂"
  },
  "ยุน": {
    "phonetic": "yun",
    "meaning": "尹"
  },
  "นี่ๆ": {
    "phonetic": "nii«",
    "meaning": "这里"
  },
  "ทำได้ดี": {
    "phonetic": "thadi dii",
    "meaning": "干得好"
  },
  "โมงเช้า": {
    "phonetic": "mong chheaa",
    "meaning": "早晨"
  },
  "หลวงพ่อ": {
    "phonetic": "lwng pho",
    "meaning": "父亲"
  },
  "จอน": {
    "phonetic": "chon",
    "meaning": "乔恩"
  },
  "โอ๊": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "เออใช่": {
    "phonetic": "oeo chhı",
    "meaning": "哦是的"
  },
  "หวังว่า": {
    "phonetic": "wang waa",
    "meaning": "希望"
  },
  "งาน": {
    "phonetic": "ngaan",
    "meaning": "工作"
  },
  "เจย์": {
    "phonetic": "chei",
    "meaning": "杰伊"
  },
  "กับคุณ": {
    "phonetic": "kab khun",
    "meaning": "与你"
  },
  "อ่าา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "มายา": {
    "phonetic": "maayaa",
    "meaning": "玛雅"
  },
  "ชนะ": {
    "phonetic": "chhna",
    "meaning": "赢"
  },
  "หลุยส์": {
    "phonetic": "luys",
    "meaning": "路易斯"
  },
  "ท่านพี่": {
    "phonetic": "thaan phii",
    "meaning": "兄弟"
  },
  "ฆ่า": {
    "phonetic": "khaa",
    "meaning": "杀"
  },
  "หน้า": {
    "phonetic": "naa",
    "meaning": "页"
  },
  "ทุกวัน": {
    "phonetic": "thuk wan",
    "meaning": "每天"
  },
  "ระยำ": {
    "phonetic": "raya",
    "meaning": "操蛋"
  },
  "อิน": {
    "phonetic": "oin",
    "meaning": "在"
  },
  "หนีเร็ว": {
    "phonetic": "nii rew",
    "meaning": "奔驰"
  },
  "ย้าย": {
    "phonetic": "yaay",
    "meaning": "移动"
  },
  "นาธาน": {
    "phonetic": "naa thaan",
    "meaning": "内森"
  },
  "ต่างหาก": {
    "phonetic": "taang aak",
    "meaning": "分别地"
  },
  "เจเจ": {
    "phonetic": "cheche",
    "meaning": "杰杰"
  },
  "ไปนะ": {
    "phonetic": "pina",
    "meaning": "我们走吧"
  },
  "ของผม": {
    "phonetic": "khong phm",
    "meaning": "这是我的"
  },
  "นัด": {
    "phonetic": "nad",
    "meaning": "预约"
  },
  "คาเรน": {
    "phonetic": "khaa ren",
    "meaning": "凯伦"
  },
  "คัท": {
    "phonetic": "khath",
    "meaning": "切"
  },
  "จูลี่": {
    "phonetic": "chuu lii",
    "meaning": "朱莉"
  },
  "ไซมอน": {
    "phonetic": "si mon",
    "meaning": "西蒙"
  },
  "ไม่น่ะ": {
    "phonetic": "mi na",
    "meaning": "不"
  },
  "ฟังสิ": {
    "phonetic": "fang si",
    "meaning": "听着"
  },
  "โฮ่": {
    "phonetic": "ho",
    "meaning": "哇哦"
  },
  "มิ": {
    "phonetic": "mi",
    "meaning": "六月"
  },
  "ระหว่าง": {
    "phonetic": "rawaang",
    "meaning": "之间"
  },
  "อ่าห์": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "รึ": {
    "phonetic": "rue",
    "meaning": "或者"
  },
  "แอน": {
    "phonetic": "oæn",
    "meaning": "安"
  },
  "ดีมั้ย": {
    "phonetic": "dii may",
    "meaning": "好不好"
  },
  "โซอี้": {
    "phonetic": "so oii",
    "meaning": "佐伊"
  },
  "เดมอน": {
    "phonetic": "de mon",
    "meaning": "达蒙"
  },
  "ฮืมม": {
    "phonetic": "huemm",
    "meaning": "唔"
  },
  "มานี่ซิ": {
    "phonetic": "maa nii si",
    "meaning": "过来吧"
  },
  "เนี่ย": {
    "phonetic": "neiia",
    "meaning": "这"
  },
  "ถอย": {
    "phonetic": "thoy",
    "meaning": "撤退"
  },
  "ลองดูสิ": {
    "phonetic": "long duu si",
    "meaning": "尝试一下"
  },
  "อาเมน": {
    "phonetic": "oaamen",
    "meaning": "阿门"
  },
  "ให้ฉัน": {
    "phonetic": "ı chhan",
    "meaning": "把它给我"
  },
  "ยา": {
    "phonetic": "yaa",
    "meaning": "药品"
  },
  "เห้ย": {
    "phonetic": "ei",
    "meaning": "嘿"
  },
  "ฟังก่อน": {
    "phonetic": "fang kon",
    "meaning": "先听听"
  },
  "ถนน": {
    "phonetic": "thnn",
    "meaning": "路"
  },
  "แย่จริง": {
    "phonetic": "yæ chring",
    "meaning": "真的很糟糕"
  },
  "ะฐั": {
    "phonetic": "atha",
    "meaning": "那"
  },
  "ฮี": {
    "phonetic": "hii",
    "meaning": "嘻"
  },
  "ป่าว": {
    "phonetic": "paaw",
    "meaning": "不"
  },
  "นิโคลัส": {
    "phonetic": "ni khola s",
    "meaning": "尼古拉斯"
  },
  "ไม่เลว": {
    "phonetic": "mi lew",
    "meaning": "不错"
  },
  "ซึ่ง": {
    "phonetic": "sueng",
    "meaning": "哪个"
  },
  "เคย": {
    "phonetic": "khei",
    "meaning": "曾经"
  },
  "คูเปอร์": {
    "phonetic": "khuu peor",
    "meaning": "库珀"
  },
  "เทรซี่": {
    "phonetic": "ther sii",
    "meaning": "特雷西"
  },
  "เนี่ยนะ": {
    "phonetic": "neiia na",
    "meaning": "就是这样"
  },
  "ระเบิด": {
    "phonetic": "rabeid",
    "meaning": "爆炸"
  },
  "อันตราย": {
    "phonetic": "oantraay",
    "meaning": "危险的"
  },
  "อืมม์": {
    "phonetic": "ouemm",
    "meaning": "唔"
  },
  "อะไรคือ": {
    "phonetic": "oari khueo",
    "meaning": "什么是"
  },
  "หนูน้อย": {
    "phonetic": "nuu noy",
    "meaning": "小一个"
  },
  "อู": {
    "phonetic": "ouu",
    "meaning": "哦"
  },
  "นายหญิง": {
    "phonetic": "naay ying",
    "meaning": "情妇"
  },
  "คุณยาย": {
    "phonetic": "khun yaay",
    "meaning": "奶奶"
  },
  "ทีน่า": {
    "phonetic": "thii naa",
    "meaning": "蒂娜"
  },
  "ช่วย": {
    "phonetic": "chhwy",
    "meaning": "帮助"
  },
  "ขึ้นรถ": {
    "phonetic": "khuen rth",
    "meaning": "上车吧"
  },
  "ริต้า": {
    "phonetic": "ri taa",
    "meaning": "丽塔"
  },
  "ไฟไหม้": {
    "phonetic": "fi im",
    "meaning": "火"
  },
  "ฌอน": {
    "phonetic": "chhon",
    "meaning": "肖恩"
  },
  "เอลเลน": {
    "phonetic": "oel len",
    "meaning": "艾伦"
  },
  "ฮ่ะ": {
    "phonetic": "ha",
    "meaning": "哈"
  },
  "ร้องไห้": {
    "phonetic": "rongi",
    "meaning": "哭了"
  },
  "เบ็ตตี้": {
    "phonetic": "bet tii",
    "meaning": "贝蒂"
  },
  "อาหาร": {
    "phonetic": "oaaaar",
    "meaning": "食物"
  },
  "แกบบี้": {
    "phonetic": "kæb bii",
    "meaning": "爱嘉比"
  },
  "แคท": {
    "phonetic": "khæth",
    "meaning": "吉"
  },
  "กาแฟ": {
    "phonetic": "kaafæ",
    "meaning": "咖啡"
  },
  "แน่": {
    "phonetic": "næ",
    "meaning": "确实"
  },
  "ชู่ว์": {
    "phonetic": "chhuuw",
    "meaning": "嘘"
  },
  "โซ": {
    "phonetic": "so",
    "meaning": "所以"
  },
  "หนี": {
    "phonetic": "nii",
    "meaning": "逃脱"
  },
  "แบรด": {
    "phonetic": "bærd",
    "meaning": "布拉德"
  },
  "โลแกน": {
    "phonetic": "lo kæn",
    "meaning": "洛根"
  },
  "วันนั้น": {
    "phonetic": "wan nan",
    "meaning": "当天"
  },
  "ทางนั้น": {
    "phonetic": "thaang nan",
    "meaning": "那样"
  },
  "ซุก": {
    "phonetic": "suk",
    "meaning": "藏起来了"
  },
  "โคดี้": {
    "phonetic": "kho dii",
    "meaning": "科迪"
  },
  "พ่อรู้": {
    "phonetic": "pho ruu",
    "meaning": "爸爸知道"
  },
  "เชื่อผม": {
    "phonetic": "chheueo phm",
    "meaning": "相信我"
  },
  "เรียก": {
    "phonetic": "reiiak",
    "meaning": "称呼"
  },
  "อ้ะ": {
    "phonetic": "oa",
    "meaning": "啊"
  },
  "แต่นี่": {
    "phonetic": "tæ nii",
    "meaning": "但是这个"
  },
  "เห้": {
    "phonetic": "e",
    "meaning": "嘿"
  },
  "องค์ชาย": {
    "phonetic": "ongkh chhaay",
    "meaning": "王子"
  },
  "คนนั้น": {
    "phonetic": "khn nan",
    "meaning": "那个人"
  },
  "คิดดูสิ": {
    "phonetic": "khid duu si",
    "meaning": "想一想"
  },
  "เอ้ย": {
    "phonetic": "oei",
    "meaning": "天哪"
  },
  "ดีละ": {
    "phonetic": "diila",
    "meaning": "好的"
  },
  "แอล": {
    "phonetic": "oæl",
    "meaning": "L"
  },
  "ไงจ๊ะ": {
    "phonetic": "ngi cha",
    "meaning": "怎么了"
  },
  "ฆาตกร": {
    "phonetic": "khaatkr",
    "meaning": "凶手"
  },
  "ตกลงค่ะ": {
    "phonetic": "tklng kha",
    "meaning": "好的"
  },
  "ตายล่ะ": {
    "phonetic": "taay la",
    "meaning": "我死了"
  },
  "คืองี้": {
    "phonetic": "khueo ngii",
    "meaning": "是这样的"
  },
  "แม่เจ้า": {
    "phonetic": "mæ cheaa",
    "meaning": "我的天啊"
  },
  "หะ": {
    "phonetic": "a",
    "meaning": "哈"
  },
  "ซิตี้": {
    "phonetic": "sitii",
    "meaning": "城市"
  },
  "แจ": {
    "phonetic": "chæ",
    "meaning": "杰"
  },
  "ชู่": {
    "phonetic": "chhuu",
    "meaning": "嘘"
  },
  "ตั้ง": {
    "phonetic": "tang",
    "meaning": "放"
  },
  "เคซี่": {
    "phonetic": "khe sii",
    "meaning": "凯西"
  },
  "ใช": {
    "phonetic": "chhı",
    "meaning": "是的"
  },
  "แกรี่": {
    "phonetic": "kæ rii",
    "meaning": "加里"
  },
  "จะไปไหน": {
    "phonetic": "cha pi in",
    "meaning": "你要去哪里"
  },
  "ปีศาจ": {
    "phonetic": "piisaach",
    "meaning": "魔鬼"
  },
  "ฉลาดมาก": {
    "phonetic": "chhlaad maak",
    "meaning": "非常聪明"
  },
  "เจอรี่": {
    "phonetic": "cheo rii",
    "meaning": "杰瑞"
  },
  "รถ": {
    "phonetic": "rth",
    "meaning": "车"
  },
  "เมสัน": {
    "phonetic": "me san",
    "meaning": "石匠"
  },
  "เงียบนะ": {
    "phonetic": "ngeiiab na",
    "meaning": "安静"
  },
  "แหวะ": {
    "phonetic": "æwa",
    "meaning": "哈哈"
  },
  "ชาร์ลส์": {
    "phonetic": "chhaarls",
    "meaning": "查尔斯"
  },
  "ที่นี้": {
    "phonetic": "thii nii",
    "meaning": "这里"
  },
  "จาง": {
    "phonetic": "chaang",
    "meaning": "褪色了"
  },
  "ใช่มะ": {
    "phonetic": "chhı ma",
    "meaning": "这是正确的"
  },
  "โถ": {
    "phonetic": "tho",
    "meaning": "罐"
  },
  "จู่ๆ": {
    "phonetic": "chuu«",
    "meaning": "突然"
  },
  "เอ้": {
    "phonetic": "oe",
    "meaning": "呃"
  },
  "ซวยแล้ว": {
    "phonetic": "swy læw",
    "meaning": "已经很倒霉了"
  },
  "เจฟฟรี่": {
    "phonetic": "chef frii",
    "meaning": "杰弗里"
  },
  "แมกซ์": {
    "phonetic": "mæk s",
    "meaning": "最大限度"
  },
  "ลอเรน": {
    "phonetic": "loren",
    "meaning": "劳伦"
  },
  "เด็บ": {
    "phonetic": "deb",
    "meaning": "德布"
  },
  "คนนี้": {
    "phonetic": "khn nii",
    "meaning": "这个人"
  },
  "ไอ้น้อง": {
    "phonetic": "oi nong",
    "meaning": "小兄弟"
  },
  "แท": {
    "phonetic": "thæ",
    "meaning": "泰"
  },
  "เวลานี้": {
    "phonetic": "welaa nii",
    "meaning": "这次"
  },
  "โง่": {
    "phonetic": "ngo",
    "meaning": "愚蠢的"
  },
  "เบอร์": {
    "phonetic": "beor",
    "meaning": "数字"
  },
  "นอกจาก": {
    "phonetic": "nokchaak",
    "meaning": "除了"
  },
  "แม่รู้": {
    "phonetic": "mæ ruu",
    "meaning": "妈妈知道"
  },
  "ไหนดูซิ": {
    "phonetic": "in duu si",
    "meaning": "让我们来看看"
  },
  "ตุลาคม": {
    "phonetic": "tulaakhm",
    "meaning": "十月"
  },
  "รีด": {
    "phonetic": "riid",
    "meaning": "铁"
  },
  "เดนนิส": {
    "phonetic": "den nis",
    "meaning": "丹尼斯"
  },
  "อ๋า": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "เฮย": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "ไปๆ": {
    "phonetic": "pi«",
    "meaning": "去"
  },
  "พวกมัน": {
    "phonetic": "phwk man",
    "meaning": "他们"
  },
  "แปลกจัง": {
    "phonetic": "pælk chang",
    "meaning": "太奇怪了"
  },
  "ชิ": {
    "phonetic": "chhi",
    "meaning": "施"
  },
  "แก๊บบี้": {
    "phonetic": "kæb bii",
    "meaning": "爱嘉比"
  },
  "ลุย": {
    "phonetic": "luy",
    "meaning": "前进"
  },
  "มะ": {
    "phonetic": "ma",
    "meaning": "妈"
  },
  "ขณะนี้": {
    "phonetic": "khna nii",
    "meaning": "现在"
  },
  "กว่า": {
    "phonetic": "kwaa",
    "meaning": "比"
  },
  "ฟังฉัน": {
    "phonetic": "fang chhan",
    "meaning": "听我说"
  },
  "สูง": {
    "phonetic": "suung",
    "meaning": "高的"
  },
  "ในอนาคต": {
    "phonetic": "nı onaakht",
    "meaning": "将来"
  },
  "อเมริกา": {
    "phonetic": "omerikaa",
    "meaning": "美国"
  },
  "กอน": {
    "phonetic": "kon",
    "meaning": "贡"
  },
  "ออร์สัน": {
    "phonetic": "oor san",
    "meaning": "奥森"
  },
  "ดีจริงๆ": {
    "phonetic": "dii chring«",
    "meaning": "真的很好"
  },
  "บอส": {
    "phonetic": "bos",
    "meaning": "老板"
  },
  "พ่อฮะ": {
    "phonetic": "pho ha",
    "meaning": "爸爸"
  },
  "แอบบี้": {
    "phonetic": "oæb bii",
    "meaning": "艾比"
  },
  "จริงอะ": {
    "phonetic": "chring oa",
    "meaning": "真的"
  },
  "ทำไมหรอ": {
    "phonetic": "thami ro",
    "meaning": "为什么"
  },
  "ปล่าว": {
    "phonetic": "p laa w",
    "meaning": "不"
  },
  "เงียบๆ": {
    "phonetic": "ngeiiab«",
    "meaning": "静静地"
  },
  "ฉลาด": {
    "phonetic": "chhlaad",
    "meaning": "聪明的"
  },
  "ไปล่ะ": {
    "phonetic": "pi la",
    "meaning": "我们走吧"
  },
  "อดทนไว้": {
    "phonetic": "odthn wi",
    "meaning": "要有耐心"
  },
  "อีดงอุค": {
    "phonetic": "oii dng oukh",
    "meaning": "李栋旭"
  },
  "จำไว้นะ": {
    "phonetic": "cha wi na",
    "meaning": "记住这一点"
  },
  "ก็ได้ๆ": {
    "phonetic": "k di«",
    "meaning": "好的"
  },
  "รอสซี่": {
    "phonetic": "rossii",
    "meaning": "罗西"
  },
  "ยังหรอก": {
    "phonetic": "yang rok",
    "meaning": "还没有"
  },
  "โธมัส": {
    "phonetic": "thomas",
    "meaning": "托马斯"
  },
  "มยองฮุน": {
    "phonetic": "m yong hun",
    "meaning": "明勋"
  },
  "ฮัลโล": {
    "phonetic": "hallo",
    "meaning": "你好"
  },
  "แฟรงก์": {
    "phonetic": "fæ rngk",
    "meaning": "坦率"
  },
  "โจเซฟ": {
    "phonetic": "cho sef",
    "meaning": "约瑟夫"
  },
  "จัง": {
    "phonetic": "chang",
    "meaning": "真的"
  },
  "แองกัส": {
    "phonetic": "oæ ngkas",
    "meaning": "安格斯"
  },
  "ไดสัน": {
    "phonetic": "di san",
    "meaning": "戴森"
  },
  "อะไรนี่": {
    "phonetic": "oari nii",
    "meaning": "这是什么"
  },
  "เฮอะ": {
    "phonetic": "heoa",
    "meaning": "嘿"
  },
  "ศพ": {
    "phonetic": "sph",
    "meaning": "尸体"
  },
  "หลา": {
    "phonetic": "laa",
    "meaning": "码"
  },
  "บูม": {
    "phonetic": "buum",
    "meaning": "繁荣"
  },
  "คล้าก": {
    "phonetic": "khlaa k",
    "meaning": "克拉克"
  },
  "อะไรอีก": {
    "phonetic": "oari oiik",
    "meaning": "还有什么"
  },
  "แคซซี่": {
    "phonetic": "khæs sii",
    "meaning": "卡西"
  },
  "สัก": {
    "phonetic": "sak",
    "meaning": "纹身"
  },
  "คนอื่นๆ": {
    "phonetic": "khn ouen«",
    "meaning": "别人"
  },
  "ออ": {
    "phonetic": "oo",
    "meaning": "或者"
  },
  "เนลสัน": {
    "phonetic": "nel san",
    "meaning": "纳尔逊"
  },
  "ดีแลน": {
    "phonetic": "dii læn",
    "meaning": "迪伦"
  },
  "วิเวียน": {
    "phonetic": "wi weiian",
    "meaning": "维维安"
  },
  "ดีไหม": {
    "phonetic": "dii im",
    "meaning": "好不好"
  },
  "โลก": {
    "phonetic": "lok",
    "meaning": "世界"
  },
  "ยูกิ": {
    "phonetic": "yuuki",
    "meaning": "由希"
  },
  "แปลก": {
    "phonetic": "pælk",
    "meaning": "奇怪的"
  },
  "หยุดมัน": {
    "phonetic": "yud man",
    "meaning": "停止吧"
  },
  "สิ่งที่": {
    "phonetic": "sing thii",
    "meaning": "事物"
  },
  "ง่ายๆ": {
    "phonetic": "ngaay«",
    "meaning": "简单的"
  },
  "ฮือ": {
    "phonetic": "hueo",
    "meaning": "呵呵"
  },
  "วุง": {
    "phonetic": "wung",
    "meaning": "翁"
  },
  "กุญแจ": {
    "phonetic": "kuychæ",
    "meaning": "钥匙"
  },
  "และผม": {
    "phonetic": "læa phm",
    "meaning": "还有我"
  },
  "ซิ": {
    "phonetic": "si",
    "meaning": "斯"
  },
  "ไม่ก็": {
    "phonetic": "mi k",
    "meaning": "或不"
  },
  "ยิงเลย": {
    "phonetic": "ying lei",
    "meaning": "现在拍摄"
  },
  "แทซอง": {
    "phonetic": "th�� song",
    "meaning": "泰成"
  },
  "กรีน": {
    "phonetic": "kriin",
    "meaning": "绿色的"
  },
  "หอบ": {
    "phonetic": "ob",
    "meaning": "气喘吁吁"
  },
  "ดึง": {
    "phonetic": "dueng",
    "meaning": "拉"
  },
  "ทำดีมาก": {
    "phonetic": "tha dii maak",
    "meaning": "做得很好"
  },
  "ฆาตกรรม": {
    "phonetic": "khaatkrrm",
    "meaning": "谋杀"
  },
  "เอเมน": {
    "phonetic": "oe men",
    "meaning": "阿门"
  },
  "สตีเฟ่น": {
    "phonetic": "stii fen",
    "meaning": "史蒂芬"
  },
  "เอาอีก": {
    "phonetic": "oeaa oiik",
    "meaning": "让我们再做一次"
  },
  "เว้นแต่": {
    "phonetic": "wen tæ",
    "meaning": "除了"
  },
  "แต่คุณ": {
    "phonetic": "tæ khun",
    "meaning": "但你"
  },
  "เสมอ": {
    "phonetic": "semo",
    "meaning": "总是"
  },
  "ตะโกน": {
    "phonetic": "takon",
    "meaning": "喊"
  },
  "ลินเน็ท": {
    "phonetic": "li nneth",
    "meaning": "莱内特"
  },
  "เกวน": {
    "phonetic": "kewn",
    "meaning": "格温"
  },
  "โอเว่น": {
    "phonetic": "oo wen",
    "meaning": "欧文"
  },
  "เครน": {
    "phonetic": "khern",
    "meaning": "起重机"
  },
  "เซนต์": {
    "phonetic": "sent",
    "meaning": "圣"
  },
  "เฟย์": {
    "phonetic": "fei",
    "meaning": "菲耶"
  },
  "โอ้ใช่": {
    "phonetic": "oo chhı",
    "meaning": "哦是的"
  },
  "ถามจริง": {
    "phonetic": "thaam chring",
    "meaning": "真的问"
  },
  "โรบิน": {
    "phonetic": "ro bin",
    "meaning": "罗宾"
  },
  "ลิซซี่": {
    "phonetic": "lis sii",
    "meaning": "丽兹"
  },
  "ยินดี": {
    "phonetic": "yindii",
    "meaning": "恭喜"
  },
  "บางทีนะ": {
    "phonetic": "baangthii na",
    "meaning": "或许"
  },
  "อ่ะนี่": {
    "phonetic": "oa nii",
    "meaning": "啊在这里"
  },
  "วู้ว": {
    "phonetic": "wuuw",
    "meaning": "呜呼"
  },
  "ลูกแม่": {
    "phonetic": "luuk mæ",
    "meaning": "母亲的孩子"
  },
  "บัดนี้": {
    "phonetic": "badnii",
    "meaning": "现在"
  },
  "ยิ้ม": {
    "phonetic": "yim",
    "meaning": "微笑"
  },
  "มม": {
    "phonetic": "mm",
    "meaning": "毫米"
  },
  "แวมไพร์": {
    "phonetic": "wæmphir",
    "meaning": "吸血鬼"
  },
  "มิส": {
    "phonetic": "mis",
    "meaning": "小姐"
  },
  "เอล": {
    "phonetic": "oel",
    "meaning": "埃尔"
  },
  "ออฟ": {
    "phonetic": "oof",
    "meaning": "离开"
  },
  "โซวูจิน": {
    "phonetic": "so wuu chin",
    "meaning": "所以吴镇"
  },
  "ซาน": {
    "phonetic": "saan",
    "meaning": "桑"
  },
  "เท็ดดี้": {
    "phonetic": "thed dii",
    "meaning": "泰迪"
  },
  "คิดสิ": {
    "phonetic": "khid si",
    "meaning": "想一想"
  },
  "มอนโร": {
    "phonetic": "mon ro",
    "meaning": "门罗"
  },
  "นั่นน่ะ": {
    "phonetic": "nan na",
    "meaning": "就是这样"
  },
  "เดินไป": {
    "phonetic": "dein pi",
    "meaning": "走开"
  },
  "เจฟฟ์": {
    "phonetic": "cheff",
    "meaning": "杰夫"
  },
  "ได้ซิ": {
    "phonetic": "di si",
    "meaning": "你可以"
  },
  "บอก": {
    "phonetic": "bok",
    "meaning": "告诉"
  },
  "เอามา": {
    "phonetic": "oeaa maa",
    "meaning": "带上它"
  },
  "คิง": {
    "phonetic": "khing",
    "meaning": "国王"
  },
  "เกรย์": {
    "phonetic": "ke ry",
    "meaning": "灰色的"
  },
  "ดันแฮม": {
    "phonetic": "dan hæm",
    "meaning": "邓纳姆"
  },
  "ประตู": {
    "phonetic": "pratuu",
    "meaning": "门"
  },
  "ตา": {
    "phonetic": "taa",
    "meaning": "眼睛"
  },
  "สมิธ": {
    "phonetic": "smith",
    "meaning": "史密斯"
  },
  "เบธ": {
    "phonetic": "beth",
    "meaning": "贝丝"
  },
  "ฟิลลิป": {
    "phonetic": "fil lip",
    "meaning": "菲利普"
  },
  "ที่ดี": {
    "phonetic": "thii dii",
    "meaning": "那挺好的"
  },
  "เล็ก": {
    "phonetic": "lek",
    "meaning": "小的"
  },
  "อีฟ": {
    "phonetic": "oiif",
    "meaning": "前夕"
  },
  "คนที่": {
    "phonetic": "khn thii",
    "meaning": "那个人"
  },
  "รุกะ": {
    "phonetic": "ruka",
    "meaning": "鲁卡"
  },
  "อือฮึ": {
    "phonetic": "oueo hue",
    "meaning": "啊"
  },
  "มั้ง": {
    "phonetic": "mang",
    "meaning": "或许"
  },
  "แอนด์": {
    "phonetic": "oænd",
    "meaning": "和"
  },
  "ขอโทษคะ": {
    "phonetic": "khothosʹ kha",
    "meaning": "对不起"
  },
  "น้อยๆ": {
    "phonetic": "noy«",
    "meaning": "一点"
  },
  "ชัวร์": {
    "phonetic": "chhawr",
    "meaning": "当然"
  },
  "ไวท์": {
    "phonetic": "with",
    "meaning": "白色的"
  },
  "ฉะ": {
    "phonetic": "chha",
    "meaning": "查"
  },
  "แย่มาก": {
    "phonetic": "yæ maak",
    "meaning": "非常糟糕"
  },
  "กิโล": {
    "phonetic": "kilo",
    "meaning": "公斤"
  },
  "อ๋อเหรอ": {
    "phonetic": "oo e ro",
    "meaning": "哦对吧"
  },
  "ลาน่า": {
    "phonetic": "laa naa",
    "meaning": "拉娜"
  },
  "วิลสัน": {
    "phonetic": "wi l san",
    "meaning": "威尔逊"
  },
  "โจอี้": {
    "phonetic": "cho oii",
    "meaning": "乔伊"
  },
  "เบลค": {
    "phonetic": "belkh",
    "meaning": "布莱克"
  },
  "โมงเย็น": {
    "phonetic": "mong yen",
    "meaning": "下午"
  },
  "วู้ดดี้": {
    "phonetic": "wuu d dii",
    "meaning": "伍迪"
  },
  "ทั้งๆ": {
    "phonetic": "thang«",
    "meaning": "尽管"
  },
  "นายพล": {
    "phonetic": "naay phl",
    "meaning": "一般的"
  },
  "เจมม่า": {
    "phonetic": "chem maa",
    "meaning": "芽"
  },
  "มิเชล": {
    "phonetic": "mi chhel",
    "meaning": "米歇尔"
  },
  "ฝันดีนะ": {
    "phonetic": "fan dii na",
    "meaning": "甜蜜的梦"
  },
  "ชาย": {
    "phonetic": "chhaay",
    "meaning": "男性"
  },
  "คุณตา": {
    "phonetic": "khun taa",
    "meaning": "爷爷"
  },
  "แปด": {
    "phonetic": "pæd",
    "meaning": "八"
  },
  "เอ่ออ": {
    "phonetic": "oeo o",
    "meaning": "呃A"
  },
  "แมนนี่": {
    "phonetic": "mæn nii",
    "meaning": "曼尼"
  },
  "ไรลี่ย์": {
    "phonetic": "ri lii y",
    "meaning": "莱利"
  },
  "ใช่จ้ะ": {
    "phonetic": "chhı cha",
    "meaning": "这是正确的"
  },
  "แต่ก็": {
    "phonetic": "tæ k",
    "meaning": "但"
  },
  "แลนซ์": {
    "phonetic": "læn s",
    "meaning": "槊"
  },
  "เฮลโล": {
    "phonetic": "hello",
    "meaning": "你好"
  },
  "ปีต่อมา": {
    "phonetic": "pii to maa",
    "meaning": "多年以后"
  },
  "คุณครู": {
    "phonetic": "khunkhruu",
    "meaning": "老师"
  },
  "เจ็บนะ": {
    "phonetic": "cheb na",
    "meaning": "好痛"
  },
  "ลิเดีย": {
    "phonetic": "li deiia",
    "meaning": "莉迪亚"
  },
  "เดเร็ค": {
    "phonetic": "derekh",
    "meaning": "德里克"
  },
  "ยังไงก็": {
    "phonetic": "yang ngi k",
    "meaning": "反正"
  },
  "หนูรู้": {
    "phonetic": "nuu ruu",
    "meaning": "我知道"
  },
  "รอนนี่": {
    "phonetic": "ron nii",
    "meaning": "罗尼"
  },
  "มีนาคม": {
    "phonetic": "miinaakhm",
    "meaning": "行进"
  },
  "มาน่า": {
    "phonetic": "maa naa",
    "meaning": "法力"
  },
  "เอพริล": {
    "phonetic": "oe phril",
    "meaning": "四月"
  },
  "ดูคุณสิ": {
    "phonetic": "duu khun si",
    "meaning": "看看你"
  },
  "เพื่อนๆ": {
    "phonetic": "pheueon«",
    "meaning": "朋友们"
  },
  "ดีนี่": {
    "phonetic": "dii nii",
    "meaning": "这里很好"
  },
  "แต่งงาน": {
    "phonetic": "tængngaan",
    "meaning": "已婚"
  },
  "ขอตัวนะ": {
    "phonetic": "khotaw na",
    "meaning": "打扰一下"
  },
  "บอกมาสิ": {
    "phonetic": "bok maa si",
    "meaning": "告诉我"
  },
  "ปกติ": {
    "phonetic": "pkti",
    "meaning": "普通的"
  },
  "นีน่า": {
    "phonetic": "nii naa",
    "meaning": "尼娜"
  },
  "สารวัตร": {
    "phonetic": "saarwatr",
    "meaning": "督察"
  },
  "โธ่เอ้ย": {
    "phonetic": "tho oe y",
    "meaning": "天哪"
  },
  "แนนซี่": {
    "phonetic": "næn sii",
    "meaning": "南希"
  },
  "ตามผมมา": {
    "phonetic": "taam phm maa",
    "meaning": "跟我来"
  },
  "แต่ผม": {
    "phonetic": "tæ phm",
    "meaning": "但我"
  },
  "จบ": {
    "phonetic": "chb",
    "meaning": "完成了"
  },
  "เดวิส": {
    "phonetic": "de wis",
    "meaning": "戴维斯"
  },
  "ไออิกู": {
    "phonetic": "oi oikuu",
    "meaning": "爱久"
  },
  "นี่เหรอ": {
    "phonetic": "nii e ro",
    "meaning": "是这个吗"
  },
  "แต่ก็นะ": {
    "phonetic": "tæ k na",
    "meaning": "但无论如何"
  },
  "กำลังไป": {
    "phonetic": "kalang pi",
    "meaning": "我要去"
  },
  "ลูกพี่": {
    "phonetic": "luukphii",
    "meaning": "我的儿子"
  },
  "ลอร่า": {
    "phonetic": "l oraa",
    "meaning": "劳拉"
  },
  "ทำไงดี": {
    "phonetic": "tha ngi dii",
    "meaning": "我应该怎么办"
  },
  "รับสิ": {
    "phonetic": "rab si",
    "meaning": "拿走吧"
  },
  "ค่า": {
    "phonetic": "khaa",
    "meaning": "价值"
  },
  "ลูกพ่อ": {
    "phonetic": "luuk pho",
    "meaning": "父亲的儿子"
  },
  "เอฟ": {
    "phonetic": "oef",
    "meaning": "F"
  },
  "ลิงค์": {
    "phonetic": "lingkh",
    "meaning": "链接"
  },
  "ร็อบ": {
    "phonetic": "rob",
    "meaning": "抢"
  },
  "ได้ไง": {
    "phonetic": "di ngi",
    "meaning": "我该怎么办"
  },
  "อาา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "เวย์น": {
    "phonetic": "wein",
    "meaning": "韦恩"
  },
  "ถึงแล้ว": {
    "phonetic": "thueng læw",
    "meaning": "我们到了"
  },
  "ดิ": {
    "phonetic": "di",
    "meaning": "这"
  },
  "คนอื่น": {
    "phonetic": "khn ouen",
    "meaning": "别人"
  },
  "สวยจัง": {
    "phonetic": "swy chang",
    "meaning": "如此美丽"
  },
  "ในนี้": {
    "phonetic": "nı nii",
    "meaning": "在此"
  },
  "ว้า": {
    "phonetic": "waa",
    "meaning": "哇"
  },
  "แพทริค": {
    "phonetic": "phæ thrikh",
    "meaning": "帕特里克"
  },
  "ซอล": {
    "phonetic": "sol",
    "meaning": "索尔"
  },
  "และนั่น": {
    "phonetic": "læa nan",
    "meaning": "还有那个"
  },
  "บอกแล้ว": {
    "phonetic": "bok læw",
    "meaning": "我告诉你了"
  },
  "ครู": {
    "phonetic": "khruu",
    "meaning": "老师"
  },
  "แพม": {
    "phonetic": "phæm",
    "meaning": "帕姆"
  },
  "ฮ่าๆ": {
    "phonetic": "haa«",
    "meaning": "哈哈"
  },
  "ย่า": {
    "phonetic": "yaa",
    "meaning": "奶奶"
  },
  "สตีเว่น": {
    "phonetic": "stii wen",
    "meaning": "史蒂文"
  },
  "โม": {
    "phonetic": "mo",
    "meaning": "莫"
  },
  "เรด": {
    "phonetic": "red",
    "meaning": "红色"
  },
  "ย้ำ": {
    "phonetic": "ya",
    "meaning": "我重复一遍"
  },
  "สเปนซ์": {
    "phonetic": "spen s",
    "meaning": "斯彭斯"
  },
  "ชิ้น": {
    "phonetic": "chhin",
    "meaning": "件"
  },
  "แย่": {
    "phonetic": "yæ",
    "meaning": "坏的"
  },
  "ก็อาจจะ": {
    "phonetic": "k oaach cha",
    "meaning": "或许"
  },
  "ส่วน": {
    "phonetic": "swn",
    "meaning": "部分"
  },
  "สัญญานะ": {
    "phonetic": "sayyaa na",
    "meaning": "承诺"
  },
  "เคธี่": {
    "phonetic": "khethii",
    "meaning": "凯蒂"
  },
  "ไลล่า": {
    "phonetic": "li laa",
    "meaning": "莉拉"
  },
  "ออกไปนะ": {
    "phonetic": "ook pi na",
    "meaning": "出去"
  },
  "ตลอดกาล": {
    "phonetic": "tlod kaal",
    "meaning": "永远"
  },
  "ไม่อะ": {
    "phonetic": "mi oa",
    "meaning": "不"
  },
  "ดูเขาสิ": {
    "phonetic": "duu kheaa si",
    "meaning": "看看他"
  },
  "ผิดแล้ว": {
    "phonetic": "phid læw",
    "meaning": "这是错误的"
  },
  "เบียร์": {
    "phonetic": "beiiar",
    "meaning": "啤酒"
  },
  "เวด": {
    "phonetic": "wed",
    "meaning": "韦德"
  },
  "ไอแซค": {
    "phonetic": "oi sækh",
    "meaning": "艾萨克"
  },
  "อนาคิน": {
    "phonetic": "o naakhi n",
    "meaning": "阿纳金"
  },
  "รีบไป": {
    "phonetic": "riib pi",
    "meaning": "匆忙"
  },
  "แบทแมน": {
    "phonetic": "bæ th mæn",
    "meaning": "蝙蝠侠"
  },
  "ลูกๆ": {
    "phonetic": "luuk«",
    "meaning": "孩子们"
  },
  "ความตาย": {
    "phonetic": "khwaam taay",
    "meaning": "死亡"
  },
  "บ็อบ": {
    "phonetic": "bob",
    "meaning": "鲍勃"
  },
  "รัสเซล": {
    "phonetic": "ras sel",
    "meaning": "拉塞尔"
  },
  "เคซี่ย์": {
    "phonetic": "khe sii y",
    "meaning": "凯西"
  },
  "แดวุง": {
    "phonetic": "dæ wung",
    "meaning": "大雄"
  },
  "อีวาน": {
    "phonetic": "oii waan",
    "meaning": "伊万"
  },
  "ดั๊ก": {
    "phonetic": "dak",
    "meaning": "道格"
  },
  "ตามใจ": {
    "phonetic": "taamchı",
    "meaning": "如你所愿"
  },
  "แอนดรู": {
    "phonetic": "oæn druu",
    "meaning": "安德鲁"
  },
  "ลองดู": {
    "phonetic": "long duu",
    "meaning": "尝试一下"
  },
  "บิงโก": {
    "phonetic": "bingko",
    "meaning": "宾果游戏"
  },
  "คือฉัน": {
    "phonetic": "khueo chhan",
    "meaning": "这就是我"
  },
  "ชิบอน": {
    "phonetic": "chhi bon",
    "meaning": "西邦"
  },
  "แครี่": {
    "phonetic": "khæ rii",
    "meaning": "凯里"
  },
  "ทริค": {
    "phonetic": "thrikh",
    "meaning": "诡计"
  },
  "จูดี้": {
    "phonetic": "chuu dii",
    "meaning": "朱迪"
  },
  "ปารีส": {
    "phonetic": "paariis",
    "meaning": "巴黎"
  },
  "เหลวไหล": {
    "phonetic": "elw il",
    "meaning": "废话"
  },
  "เฮล": {
    "phonetic": "hel",
    "meaning": "哈尔"
  },
  "เกร็ก": {
    "phonetic": "ke rk",
    "meaning": "格雷格"
  },
  "ข้อความ": {
    "phonetic": "khokhwaam",
    "meaning": "信息"
  },
  "แท็กซี่": {
    "phonetic": "thæksii",
    "meaning": "出租车"
  },
  "คอนราด": {
    "phonetic": "khon raad",
    "meaning": "康拉德"
  },
  "เบบี้": {
    "phonetic": "bebii",
    "meaning": "婴儿"
  },
  "แองจี้": {
    "phonetic": "oæng chii",
    "meaning": "安吉"
  },
  "ฮารุฮิ": {
    "phonetic": "haa ru hi",
    "meaning": "春日"
  },
  "โฮ้": {
    "phonetic": "ho",
    "meaning": "哇哦"
  },
  "คราง": {
    "phonetic": "khraang",
    "meaning": "呻吟"
  },
  "โดโรต้า": {
    "phonetic": "do ro taa",
    "meaning": "多罗塔"
  },
  "พี่น้อง": {
    "phonetic": "phii nong",
    "meaning": "兄弟姐妹们"
  },
  "ยัยบ้า": {
    "phonetic": "yay baa",
    "meaning": "疯狂的女孩"
  },
  "เห": {
    "phonetic": "e",
    "meaning": "嘿"
  },
  "โว้วว": {
    "phonetic": "woww",
    "meaning": "哇"
  },
  "อี๋": {
    "phonetic": "oii",
    "meaning": "呃"
  },
  "ลอรี่": {
    "phonetic": "l orii",
    "meaning": "劳瑞"
  },
  "กรุ๊ป": {
    "phonetic": "krup",
    "meaning": "团体"
  },
  "เคเลบ": {
    "phonetic": "kheleb",
    "meaning": "迦勒"
  },
  "ไม่ดี": {
    "phonetic": "mi dii",
    "meaning": "不好"
  },
  "ข้อแรก": {
    "phonetic": "kho ræk",
    "meaning": "第一点"
  },
  "บ้าน่า": {
    "phonetic": "baa naa",
    "meaning": "疯狂的"
  },
  "ฮาน": {
    "phonetic": "haan",
    "meaning": "韩"
  },
  "ทาง": {
    "phonetic": "thaang",
    "meaning": "道路"
  },
  "ชาน": {
    "phonetic": "chhaan",
    "meaning": "陈"
  },
  "รีบ": {
    "phonetic": "riib",
    "meaning": "匆忙"
  },
  "มองฉัน": {
    "phonetic": "mong chhan",
    "meaning": "看着我"
  },
  "โมน่า": {
    "phonetic": "mo naa",
    "meaning": "莫娜"
  },
  "บา": {
    "phonetic": "baa",
    "meaning": "巴"
  },
  "แด": {
    "phonetic": "dæ",
    "meaning": "岱"
  },
  "กลับ": {
    "phonetic": "klab",
    "meaning": "返回"
  },
  "เพจ": {
    "phonetic": "phech",
    "meaning": "页"
  },
  "ชมิดท์": {
    "phonetic": "chhmidth",
    "meaning": "施密特"
  },
  "เดี่ยว": {
    "phonetic": "deiiaw",
    "meaning": "单身的"
  },
  "ช่วยฉัน": {
    "phonetic": "chhwy chhan",
    "meaning": "帮我"
  },
  "เก้า": {
    "phonetic": "keaa",
    "meaning": "九"
  },
  "เทเลอร์": {
    "phonetic": "the leo r",
    "meaning": "泰勒"
  },
  "ฮารุ": {
    "phonetic": "haaru",
    "meaning": "哈鲁"
  },
  "ทำต่อไป": {
    "phonetic": "tha to pi",
    "meaning": "继续做吧"
  },
  "เบ็คก้า": {
    "phonetic": "bekhkaa",
    "meaning": "贝卡"
  },
  "ฮง": {
    "phonetic": "hng",
    "meaning": "洪"
  },
  "จบแล้ว": {
    "phonetic": "chb læw",
    "meaning": "完成了"
  },
  "ราชินี": {
    "phonetic": "raachhinii",
    "meaning": "女王"
  },
  "ไซม่อน": {
    "phonetic": "si mon",
    "meaning": "西蒙"
  },
  "เปิดสิ": {
    "phonetic": "peid si",
    "meaning": "打开它"
  },
  "วินซ์": {
    "phonetic": "win s",
    "meaning": "文斯"
  },
  "สแตน": {
    "phonetic": "stæn",
    "meaning": "斯坦"
  },
  "เกือบ": {
    "phonetic": "keueob",
    "meaning": "几乎"
  },
  "เร็กซ์": {
    "phonetic": "reks",
    "meaning": "雷克斯"
  },
  "เรจิน่า": {
    "phonetic": "re chi naa",
    "meaning": "雷吉娜"
  },
  "ชิพ": {
    "phonetic": "chhiph",
    "meaning": "芯片"
  },
  "แอ็กเซล": {
    "phonetic": "oæk sel",
    "meaning": "阿克塞尔"
  },
  "ไม่เชิง": {
    "phonetic": "mi chheing",
    "meaning": "并不真地"
  },
  "ไงคะ": {
    "phonetic": "ngikha",
    "meaning": "这是怎么回事"
  },
  "แน่ละ": {
    "phonetic": "næ la",
    "meaning": "确实"
  },
  "ได้ยิน": {
    "phonetic": "diain",
    "meaning": "听到"
  },
  "คิท": {
    "phonetic": "khith",
    "meaning": "成套工具"
  },
  "ลงมา": {
    "phonetic": "lngmaa",
    "meaning": "坠落"
  },
  "สบายมาก": {
    "phonetic": "sbaay maak",
    "meaning": "很舒服"
  },
  "โดด": {
    "phonetic": "dod",
    "meaning": "跳"
  },
  "น่าจะ": {
    "phonetic": "naa cha",
    "meaning": "大概"
  },
  "ต้อง": {
    "phonetic": "tong",
    "meaning": "必须"
  },
  "ไงล่ะ": {
    "phonetic": "ngi la",
    "meaning": "反正"
  },
  "ยืนขึ้น": {
    "phonetic": "yuen khuen",
    "meaning": "起来"
  },
  "สตู": {
    "phonetic": "stuu",
    "meaning": "斯图"
  },
  "ทำสิ": {
    "phonetic": "thasi",
    "meaning": "做吧"
  },
  "พระเยซู": {
    "phonetic": "phra yesuu",
    "meaning": "耶稣"
  },
  "รหัส": {
    "phonetic": "ras",
    "meaning": "代码"
  },
  "ชู่วว": {
    "phonetic": "chhuuww",
    "meaning": "嘘"
  },
  "แอช": {
    "phonetic": "oæchh",
    "meaning": "灰"
  },
  "นาโอกิ": {
    "phonetic": "naa ooki",
    "meaning": "直树"
  },
  "สเตซี่": {
    "phonetic": "s te sii",
    "meaning": "史黛西"
  },
  "แต่มัน": {
    "phonetic": "tæ man",
    "meaning": "但它"
  },
  "นี่นะ": {
    "phonetic": "nii na",
    "meaning": "就是这样"
  },
  "นี่เป็น": {
    "phonetic": "nii pen",
    "meaning": "这是"
  },
  "บ๊าย": {
    "phonetic": "baay",
    "meaning": "再见"
  },
  "อีกที": {
    "phonetic": "oiik thii",
    "meaning": "再一次"
  },
  "หยุดยิง": {
    "phonetic": "yud ying",
    "meaning": "停止射击"
  },
  "แล้วนี่": {
    "phonetic": "læw nii",
    "meaning": "还有这个"
  },
  "รัช": {
    "phonetic": "rachh",
    "meaning": "匆忙"
  },
  "ตลกดีนะ": {
    "phonetic": "tlk dii na",
    "meaning": "那很好笑"
  },
  "แฟน": {
    "phonetic": "fæn",
    "meaning": "男朋友"
  },
  "เย": {
    "phonetic": "ye",
    "meaning": "是的"
  },
  "ปู่": {
    "phonetic": "puu",
    "meaning": "爷爷"
  },
  "เคที่": {
    "phonetic": "khe thii",
    "meaning": "凯蒂"
  },
  "จนกว่า": {
    "phonetic": "chnkwaa",
    "meaning": "直到"
  },
  "มาดูกัน": {
    "phonetic": "maa duu kan",
    "meaning": "让我们来看看"
  },
  "ช้า": {
    "phonetic": "chhaa",
    "meaning": "慢的"
  },
  "กันยายน": {
    "phonetic": "kanyaayn",
    "meaning": "九月"
  },
  "รับ": {
    "phonetic": "rab",
    "meaning": "收到"
  },
  "ลอยด์": {
    "phonetic": "loy d",
    "meaning": "劳埃德"
  },
  "วี": {
    "phonetic": "wii",
    "meaning": "五、"
  },
  "ะตั": {
    "phonetic": "ata",
    "meaning": "那个"
  },
  "พอเลย": {
    "phonetic": "pho lei",
    "meaning": "这就够了"
  },
  "แลร์รี่": {
    "phonetic": "lær rii",
    "meaning": "拉里"
  },
  "อาร์": {
    "phonetic": "oaar",
    "meaning": "R"
  },
  "วันแล้ว": {
    "phonetic": "wan læw",
    "meaning": "已经过去一天了"
  },
  "โอ๋": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "ด่วน": {
    "phonetic": "dwn",
    "meaning": "紧迫的"
  },
  "ปิด": {
    "phonetic": "pid",
    "meaning": "关闭"
  },
  "ฮีโร่": {
    "phonetic": "hiiro",
    "meaning": "英雄"
  },
  "เจนิส": {
    "phonetic": "che nis",
    "meaning": "贾尼斯"
  },
  "และแล้ว": {
    "phonetic": "læa læw",
    "meaning": "进而"
  },
  "เดิน": {
    "phonetic": "dein",
    "meaning": "走"
  },
  "เทเรซ่า": {
    "phonetic": "the re saa",
    "meaning": "特蕾莎"
  },
  "อาห์": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "นักข่าว": {
    "phonetic": "nak khaaw",
    "meaning": "记者"
  },
  "คือผม": {
    "phonetic": "khueo phm",
    "meaning": "这就是我"
  },
  "หลัง": {
    "phonetic": "lang",
    "meaning": "后"
  },
  "เบาๆ": {
    "phonetic": "beaa«",
    "meaning": "轻轻地"
  },
  "ปีนี้": {
    "phonetic": "pii nii",
    "meaning": "今年"
  },
  "ไม่ว่า": {
    "phonetic": "mi waa",
    "meaning": "不管"
  },
  "ชะ": {
    "phonetic": "chha",
    "meaning": "查"
  },
  "ตามนั้น": {
    "phonetic": "taam nan",
    "meaning": "据此"
  },
  "วัตสัน": {
    "phonetic": "wat san",
    "meaning": "华生"
  },
  "ปาร์ตี้": {
    "phonetic": "paartii",
    "meaning": "派对"
  },
  "เกล": {
    "phonetic": "kel",
    "meaning": "盖尔"
  },
  "กระโดด": {
    "phonetic": "kradod",
    "meaning": "跳"
  },
  "เลน": {
    "phonetic": "len",
    "meaning": "车道"
  },
  "ฮิโร่": {
    "phonetic": "hi ro",
    "meaning": "宏"
  },
  "ดีนะ": {
    "phonetic": "diina",
    "meaning": "好的"
  },
  "เพียง": {
    "phonetic": "pheiiang",
    "meaning": "只是"
  },
  "รีบๆ": {
    "phonetic": "riib«",
    "meaning": "匆忙"
  },
  "เต้น": {
    "phonetic": "ten",
    "meaning": "舞蹈"
  },
  "หมวด": {
    "phonetic": "mwd",
    "meaning": "类别"
  },
  "ปล่อยผม": {
    "phonetic": "ploy phm",
    "meaning": "让我走吧"
  },
  "ชนแก้ว": {
    "phonetic": "chhn kæw",
    "meaning": "为眼镜干杯"
  },
  "สตีเฟน": {
    "phonetic": "stii fen",
    "meaning": "史蒂芬"
  },
  "จำได้": {
    "phonetic": "cha di",
    "meaning": "我记得"
  },
  "ไอกู": {
    "phonetic": "oikuu",
    "meaning": "伊古"
  },
  "วันนึง": {
    "phonetic": "wan nueng",
    "meaning": "一天"
  },
  "เบนนี่": {
    "phonetic": "ben nii",
    "meaning": "本尼"
  },
  "เจ๋งมาก": {
    "phonetic": "cheng maak",
    "meaning": "非常酷"
  },
  "ลอนดอน": {
    "phonetic": "london",
    "meaning": "伦敦"
  },
  "แต่แล้ว": {
    "phonetic": "tæ læw",
    "meaning": "但然后"
  },
  "อัลเลน": {
    "phonetic": "oal len",
    "meaning": "艾伦"
  },
  "เอาเหอะ": {
    "phonetic": "oeaa eoa",
    "meaning": "快点"
  },
  "คนทรยศ": {
    "phonetic": "khn thrys",
    "meaning": "叛徒"
  },
  "จริงน่ะ": {
    "phonetic": "chring na",
    "meaning": "这是真的"
  },
  "เกล็น": {
    "phonetic": "ke ln",
    "meaning": "格伦"
  },
  "ขอล่ะ": {
    "phonetic": "kho la",
    "meaning": "请"
  },
  "คนโง่": {
    "phonetic": "khn ngo",
    "meaning": "傻子"
  },
  "ตอนอายุ": {
    "phonetic": "ton oaayu",
    "meaning": "到了年龄"
  },
  "มาเหอะ": {
    "phonetic": "maa eoa",
    "meaning": "快点"
  },
  "แอนน์": {
    "phonetic": "oæ nn",
    "meaning": "安妮"
  },
  "เอริ": {
    "phonetic": "oeri",
    "meaning": "埃里"
  },
  "วิค": {
    "phonetic": "wikh",
    "meaning": "维克"
  },
  "ดูนี่ซิ": {
    "phonetic": "duu nii si",
    "meaning": "看看这个"
  },
  "นังบ้า": {
    "phonetic": "nang baa",
    "meaning": "疯狂的母狗"
  },
  "บ้าง": {
    "phonetic": "baang",
    "meaning": "一些"
  },
  "อึม": {
    "phonetic": "ouem",
    "meaning": "嗯"
  },
  "ไปที่": {
    "phonetic": "pi thii",
    "meaning": "前往"
  },
  "ยิงมัน": {
    "phonetic": "ying man",
    "meaning": "射击它"
  },
  "แบมบี้": {
    "phonetic": "bæm bii",
    "meaning": "小鹿斑比"
  },
  "แด่": {
    "phonetic": "dæ",
    "meaning": "到"
  },
  "จิล": {
    "phonetic": "chil",
    "meaning": "吉尔"
  },
  "อาฮะ": {
    "phonetic": "oaaha",
    "meaning": "啊哈"
  },
  "กึม": {
    "phonetic": "kuem",
    "meaning": "格姆"
  },
  "เอาละนะ": {
    "phonetic": "oeaala na",
    "meaning": "好的"
  },
  "แล้วคุณ": {
    "phonetic": "læw khun",
    "meaning": "你呢"
  },
  "โคเมะ": {
    "phonetic": "kho mea",
    "meaning": "科梅"
  },
  "ฮันท์": {
    "phonetic": "hanth",
    "meaning": "打猎"
  },
  "ชาง": {
    "phonetic": "chhaang",
    "meaning": "张"
  },
  "ดุ๊ก": {
    "phonetic": "duk",
    "meaning": "公爵"
  },
  "ซากิ": {
    "phonetic": "saaki",
    "meaning": "萨基"
  },
  "อ้อใช่": {
    "phonetic": "oo chhı",
    "meaning": "哦是的"
  },
  "แบรี่": {
    "phonetic": "bæ rii",
    "meaning": "巴里"
  },
  "แพตตี้": {
    "phonetic": "phæ t tii",
    "meaning": "帕蒂"
  },
  "วอลเลซ": {
    "phonetic": "wolles",
    "meaning": "华莱士"
  },
  "ร็อบบี้": {
    "phonetic": "r ob bii",
    "meaning": "罗比"
  },
  "ทันที": {
    "phonetic": "thanthii",
    "meaning": "立即地"
  },
  "น่ากลัว": {
    "phonetic": "naa klaw",
    "meaning": "可怕的"
  },
  "เล่น": {
    "phonetic": "len",
    "meaning": "玩"
  },
  "ใช่คะ": {
    "phonetic": "chhı kha",
    "meaning": "是的"
  },
  "ยาหยี": {
    "phonetic": "yaayii",
    "meaning": "怡药"
  },
  "หรือไง": {
    "phonetic": "rueo ngi",
    "meaning": "或者什么"
  },
  "วิคกี้": {
    "phonetic": "wikh kii",
    "meaning": "维姬"
  },
  "ยูกิจัง": {
    "phonetic": "yuu kicha ng",
    "meaning": "佑希酱"
  },
  "หนุ่ม": {
    "phonetic": "num",
    "meaning": "年轻人"
  },
  "ดีขึ้น": {
    "phonetic": "dii khuen",
    "meaning": "更好的"
  },
  "ซีซี": {
    "phonetic": "siisii",
    "meaning": "抄送"
  },
  "โวว": {
    "phonetic": "wow",
    "meaning": "哇"
  },
  "ดอง": {
    "phonetic": "dong",
    "meaning": "腌制的"
  },
  "สิ่งนี้": {
    "phonetic": "sing nii",
    "meaning": "这件事"
  },
  "วิเศษ": {
    "phonetic": "wis��esʹ",
    "meaning": "精彩的"
  },
  "ในช่วง": {
    "phonetic": "nı chhwng",
    "meaning": "期间"
  },
  "ยังก่อน": {
    "phonetic": "yang kon",
    "meaning": "还没有"
  },
  "นอร์แมน": {
    "phonetic": "nor mæn",
    "meaning": "诺曼"
  },
  "หนังสือ": {
    "phonetic": "nangsueo",
    "meaning": "图书"
  },
  "เจ้าบ้า": {
    "phonetic": "cheaa baa",
    "meaning": "你这个疯狂的人"
  },
  "หรอกนะ": {
    "phonetic": "rok na",
    "meaning": "这是正确的"
  },
  "ยอน": {
    "phonetic": "yon",
    "meaning": "妍"
  },
  "ขโมย": {
    "phonetic": "khmoy",
    "meaning": "偷"
  },
  "อัลเฟรด": {
    "phonetic": "oalfe rd",
    "meaning": "阿尔弗雷德"
  },
  "เค้า": {
    "phonetic": "kheaa",
    "meaning": "他"
  },
  "แต่ทำไม": {
    "phonetic": "tæ thami",
    "meaning": "但为什么"
  },
  "ตี": {
    "phonetic": "tii",
    "meaning": "打"
  },
  "จุด": {
    "phonetic": "chud",
    "meaning": "观点"
  },
  "มีด": {
    "phonetic": "miid",
    "meaning": "刀"
  },
  "มาจาก": {
    "phonetic": "maa chaak",
    "meaning": "来自"
  },
  "ตัวเอง": {
    "phonetic": "taw oeng",
    "meaning": "你自己"
  },
  "อื่น": {
    "phonetic": "ouen",
    "meaning": "其他"
  },
  "ของนาย": {
    "phonetic": "khong naay",
    "meaning": "你的"
  },
  "รพ": {
    "phonetic": "rph",
    "meaning": "医院"
  },
  "ชีบอน": {
    "phonetic": "chhii bon",
    "meaning": "西邦"
  },
  "ริโกะ": {
    "phonetic": "ri koa",
    "meaning": "理子"
  },
  "โทร": {
    "phonetic": "thor",
    "meaning": "称呼"
  },
  "แน่ๆ": {
    "phonetic": "næ«",
    "meaning": "确实"
  },
  "ดัน": {
    "phonetic": "dan",
    "meaning": "推"
  },
  "ค่ะท่าน": {
    "phonetic": "kha thaan",
    "meaning": "是的先生"
  },
  "อลิสัน": {
    "phonetic": "o li san",
    "meaning": "艾莉森"
  },
  "ดีๆ": {
    "phonetic": "dii«",
    "meaning": "好的"
  },
  "กำลังมา": {
    "phonetic": "kalang maa",
    "meaning": "未来"
  },
  "รองเท้า": {
    "phonetic": "rongtheaa",
    "meaning": "鞋"
  },
  "แสดงว่า": {
    "phonetic": "sædng waa",
    "meaning": "表明这一点"
  },
  "นางฟ้า": {
    "phonetic": "naangfaa",
    "meaning": "天使"
  },
  "โอ้ววว": {
    "phonetic": "oo www",
    "meaning": "哦哇"
  },
  "กิล": {
    "phonetic": "kil",
    "meaning": "吉尔"
  },
  "ช่างมัน": {
    "phonetic": "chhaang man",
    "meaning": "没关系"
  },
  "แอนดริว": {
    "phonetic": "oæn driw",
    "meaning": "安德鲁"
  },
  "เมดิสัน": {
    "phonetic": "medi san",
    "meaning": "麦迪逊"
  },
  "เร็วซิ": {
    "phonetic": "rew si",
    "meaning": "匆忙"
  },
  "สักวัน": {
    "phonetic": "sak wan",
    "meaning": "有一天"
  },
  "ไหนๆ": {
    "phonetic": "in«",
    "meaning": "在哪里"
  },
  "แมต": {
    "phonetic": "mæt",
    "meaning": "马特"
  },
  "ว่าทำไม": {
    "phonetic": "waa thami",
    "meaning": "为什么"
  },
  "ดอม": {
    "phonetic": "dom",
    "meaning": "多姆"
  },
  "ข้างนอก": {
    "phonetic": "khaang nok",
    "meaning": "外部"
  },
  "หลบ": {
    "phonetic": "lb",
    "meaning": "躲闪"
  },
  "นายล่ะ": {
    "phonetic": "naay la",
    "meaning": "你呢"
  },
  "เหอะ": {
    "phonetic": "eoa",
    "meaning": "呵呵"
  },
  "พี": {
    "phonetic": "phii",
    "meaning": "P"
  },
  "ประธาน": {
    "phonetic": "prathaan",
    "meaning": "总统"
  },
  "มากๆ": {
    "phonetic": "maak«",
    "meaning": "非常"
  },
  "จับเขา": {
    "phonetic": "chab kheaa",
    "meaning": "抓住他"
  },
  "ฮัท": {
    "phonetic": "hath",
    "meaning": "小屋"
  },
  "ต่อมา": {
    "phonetic": "to maa",
    "meaning": "之后"
  },
  "คืน": {
    "phonetic": "khuen",
    "meaning": "返回"
  },
  "เฮ้ๆๆ": {
    "phonetic": "he««",
    "meaning": "嘿嘿"
  },
  "อีดี้": {
    "phonetic": "oii dii",
    "meaning": "伊迪"
  },
  "หน่วย": {
    "phonetic": "nwy",
    "meaning": "单元"
  },
  "ฮยอน": {
    "phonetic": "hyon",
    "meaning": "炫"
  },
  "วินสตัน": {
    "phonetic": "win s tan",
    "meaning": "温斯顿"
  },
  "ตายซะ": {
    "phonetic": "taay sa",
    "meaning": "死"
  },
  "โจมตี": {
    "phonetic": "chomtii",
    "meaning": "攻击"
  },
  "แคล": {
    "phonetic": "khæl",
    "meaning": "卡尔"
  },
  "แซค": {
    "phonetic": "sækh",
    "meaning": "扎克"
  },
  "ลินเน็ต": {
    "phonetic": "li n net",
    "meaning": "莱内特"
  },
  "ทุกๆวัน": {
    "phonetic": "thuk«wan",
    "meaning": "每天"
  },
  "เอาไปสิ": {
    "phonetic": "oeaa pi si",
    "meaning": "拿走吧"
  },
  "กล้อง": {
    "phonetic": "klong",
    "meaning": "相机"
  },
  "ง่าย": {
    "phonetic": "ngaay",
    "meaning": "简单的"
  },
  "ปัญหา": {
    "phonetic": "payaa",
    "meaning": "问题"
  },
  "อาวุธ": {
    "phonetic": "oaawuth",
    "meaning": "武器"
  },
  "ๆๆ": {
    "phonetic": "««",
    "meaning": "哈哈"
  },
  "ทำไมกัน": {
    "phonetic": "thami kan",
    "meaning": "为什么"
  },
  "ฉิบหาย": {
    "phonetic": "chhibaay",
    "meaning": "真可悲"
  },
  "งั้นสิ": {
    "phonetic": "ngan si",
    "meaning": "所以"
  },
  "ลีโอ": {
    "phonetic": "liioo",
    "meaning": "利奥"
  },
  "นาโอมิ": {
    "phonetic": "naa oo mi",
    "meaning": "内奥米"
  },
  "ฟื้นสิ": {
    "phonetic": "fuen si",
    "meaning": "恢复"
  },
  "ถ้าคุณ": {
    "phonetic": "thaa khun",
    "meaning": "如果你"
  },
  "ฮิวส์": {
    "phonetic": "hi ws",
    "meaning": "休斯"
  },
  "โมนิก้า": {
    "phonetic": "mo ni kaa",
    "meaning": "莫妮卡"
  },
  "เจคอบ": {
    "phonetic": "che khob",
    "meaning": "雅各布"
  },
  "แต้ม": {
    "phonetic": "tæm",
    "meaning": "积分"
  },
  "ไลโอเนล": {
    "phonetic": "li oo nel",
    "meaning": "莱昂内尔"
  },
  "ทำไมหละ": {
    "phonetic": "thami la",
    "meaning": "为什么"
  },
  "ยังครับ": {
    "phonetic": "yang khrab",
    "meaning": "还没有"
  },
  "ไรลีย์": {
    "phonetic": "ri liia",
    "meaning": "莱利"
  },
  "เจอ": {
    "phonetic": "cheo",
    "meaning": "成立"
  },
  "สตาร์": {
    "phonetic": "s taar",
    "meaning": "星星"
  },
  "คำถาม": {
    "phonetic": "khathaam",
    "meaning": "问题"
  },
  "เวนดี้": {
    "phonetic": "wen dii",
    "meaning": "温迪"
  },
  "อาลี": {
    "phonetic": "oaalii",
    "meaning": "阿里"
  },
  "จุ๊บ": {
    "phonetic": "chub",
    "meaning": "吻"
  },
  "มีค่ะ": {
    "phonetic": "mii kha",
    "meaning": "有"
  },
  "ดันแคน": {
    "phonetic": "dan khæn",
    "meaning": "邓肯"
  },
  "นานา": {
    "phonetic": "naanaa",
    "meaning": "各种各样的"
  },
  "น่ะเหรอ": {
    "phonetic": "na e ro",
    "meaning": "是这样吗"
  },
  "บราวน์": {
    "phonetic": "braa wn",
    "meaning": "棕色的"
  },
  "อะแฮ่ม": {
    "phonetic": "oa hæ m",
    "meaning": "咳咳"
  },
  "ใช่ซิ": {
    "phonetic": "chhı si",
    "meaning": "这是正确的"
  },
  "ชัดเจน": {
    "phonetic": "chhadchen",
    "meaning": "清楚地"
  },
  "ขึ้นไป": {
    "phonetic": "khuen pi",
    "meaning": "向上"
  },
  "นรก": {
    "phonetic": "nrk",
    "meaning": "地狱"
  },
  "ยูน": {
    "phonetic": "yuun",
    "meaning": "云"
  },
  "เมแกน": {
    "phonetic": "me kæn",
    "meaning": "梅根"
  },
  "มาริ": {
    "phonetic": "maari",
    "meaning": "马里"
  },
  "ดูฉันสิ": {
    "phonetic": "duu chhan si",
    "meaning": "看着我"
  },
  "รา": {
    "phonetic": "raa",
    "meaning": "模具"
  },
  "เพรนทิส": {
    "phonetic": "phe rn this",
    "meaning": "普伦蒂斯"
  },
  "เลดี้": {
    "phonetic": "ledii",
    "meaning": "女士"
  },
  "นาโอะ": {
    "phonetic": "naa ooa",
    "meaning": "奈奥"
  },
  "จำกัด": {
    "phonetic": "chakad",
    "meaning": "有限公司"
  },
  "เคโต้": {
    "phonetic": "khe to",
    "meaning": "酮"
  },
  "มันช่าง": {
    "phonetic": "man chhaang",
    "meaning": "太酷了"
  },
  "ภรรยา": {
    "phonetic": "phhrryaa",
    "meaning": "妻子"
  },
  "กินซะ": {
    "phonetic": "kin sa",
    "meaning": "吃吧"
  },
  "เกาะไว้": {
    "phonetic": "keaaa wi",
    "meaning": "坚持稍等"
  },
  "ความลับ": {
    "phonetic": "khwaam lab",
    "meaning": "秘密"
  },
  "พยาบาล": {
    "phonetic": "phyaabaal",
    "meaning": "护士"
  },
  "แคสซี่": {
    "phonetic": "khæs sii",
    "meaning": "卡西"
  },
  "จูบ": {
    "phonetic": "chuub",
    "meaning": "吻"
  },
  "จัดการ": {
    "phonetic": "chadkaar",
    "meaning": "管理"
  },
  "หยุดรถ": {
    "phonetic": "yud rth",
    "meaning": "停车"
  },
  "นาทีนะ": {
    "phonetic": "naathii na",
    "meaning": "一分钟"
  },
  "สาย": {
    "phonetic": "saay",
    "meaning": "晚的"
  },
  "ธันวาคม": {
    "phonetic": "thanwaakhm",
    "meaning": "十二月"
  },
  "สกาย": {
    "phonetic": "skaay",
    "meaning": "天空"
  },
  "คำเตือน": {
    "phonetic": "kha teueon",
    "meaning": "警告"
  },
  "ย่าห์": {
    "phonetic": "yaa",
    "meaning": "耶"
  },
  "อู้วว": {
    "phonetic": "ouu ww",
    "meaning": "哦"
  },
  "รอส": {
    "phonetic": "ros",
    "meaning": "等待"
  },
  "ซัก": {
    "phonetic": "sak",
    "meaning": "洗"
  },
  "ฮัดสัน": {
    "phonetic": "had san",
    "meaning": "哈德森"
  },
  "สำเร็จ": {
    "phonetic": "sarech",
    "meaning": "成功的"
  },
  "นี่ล่ะ": {
    "phonetic": "nii la",
    "meaning": "就是这样"
  },
  "ทั้งคู่": {
    "phonetic": "thang khuu",
    "meaning": "两个都"
  },
  "อยู่ที่": {
    "phonetic": "oyuu thii",
    "meaning": "在"
  },
  "ลอง": {
    "phonetic": "long",
    "meaning": "尝试一下"
  },
  "อิซาเบล": {
    "phonetic": "oi saa bel",
    "meaning": "伊莎贝尔"
  },
  "ตรงไหน": {
    "phonetic": "trng in",
    "meaning": "在哪里"
  },
  "มอส": {
    "phonetic": "mos",
    "meaning": "苔藓"
  },
  "ออสการ์": {
    "phonetic": "oo skaa r",
    "meaning": "奥斯卡"
  },
  "ราจ": {
    "phonetic": "raach",
    "meaning": "拉杰"
  },
  "ซูซี่": {
    "phonetic": "suu sii",
    "meaning": "苏西"
  },
  "โอม": {
    "phonetic": "oom",
    "meaning": "欧姆"
  },
  "ทาเครุ": {
    "phonetic": "thaa khe ru",
    "meaning": "武"
  },
  "เคียวเฮ": {
    "phonetic": "kheiiaw he",
    "meaning": "恭平"
  },
  "ดีจริง": {
    "phonetic": "dii chring",
    "meaning": "真的很好"
  },
  "เอ๊": {
    "phonetic": "oe",
    "meaning": "呃"
  },
  "บริกส์": {
    "phonetic": "briks",
    "meaning": "布里格斯"
  },
  "พูดมา": {
    "phonetic": "phuud maa",
    "meaning": "说话"
  },
  "เลนนี่": {
    "phonetic": "len nii",
    "meaning": "莱尼"
  },
  "เอริก้า": {
    "phonetic": "oe rik aa",
    "meaning": "艾丽卡"
  },
  "แมค": {
    "phonetic": "mækh",
    "meaning": "苹果"
  },
  "เอซร่า": {
    "phonetic": "oes raa",
    "meaning": "以斯拉"
  },
  "ถ้าไม่": {
    "phonetic": "thaa mi",
    "meaning": "如果不"
  },
  "ล้านเยน": {
    "phonetic": "laan yen",
    "meaning": "百万日元"
  },
  "ดอนน่า": {
    "phonetic": "don naa",
    "meaning": "唐娜"
  },
  "อยากสิ": {
    "phonetic": "oyaak si",
    "meaning": "我要它"
  },
  "นาง": {
    "phonetic": "naang",
    "meaning": "夫人"
  },
  "เถอะนะ": {
    "phonetic": "theoa na",
    "meaning": "来吧"
  },
  "ดูนี่นะ": {
    "phonetic": "duu nii na",
    "meaning": "看看这个"
  },
  "โจแอนนา": {
    "phonetic": "cho oæ n naa",
    "meaning": "琼"
  },
  "ไม่แน่": {
    "phonetic": "mi næ",
    "meaning": "或许"
  },
  "สงคราม": {
    "phonetic": "sngkhraam",
    "meaning": "战争"
  },
  "ไม": {
    "phonetic": "mi",
    "meaning": "麦"
  },
  "ล้อเล่น": {
    "phonetic": "lo len",
    "meaning": "只是在开玩笑"
  },
  "จะว่าไป": {
    "phonetic": "cha waa pi",
    "meaning": "我会这么说"
  },
  "เดาว่า": {
    "phonetic": "deaa waa",
    "meaning": "猜测"
  },
  "แมตต์": {
    "phonetic": "mætt",
    "meaning": "马特"
  },
  "มือ": {
    "phonetic": "mueo",
    "meaning": "手"
  },
  "คดี": {
    "phonetic": "khdii",
    "meaning": "案件"
  },
  "ดง": {
    "phonetic": "dng",
    "meaning": "东"
  },
  "ซาราห์": {
    "phonetic": "saa raa",
    "meaning": "莎拉"
  },
  "ยืนยัน": {
    "phonetic": "yuenyan",
    "meaning": "确认"
  },
  "เวรแล้ว": {
    "phonetic": "wer læw",
    "meaning": "该死的"
  },
  "เหอ": {
    "phonetic": "eo",
    "meaning": "他"
  },
  "เจ๋งเลย": {
    "phonetic": "cheng lei",
    "meaning": "这很酷"
  },
  "อยู่ๆ": {
    "phonetic": "oyuu«",
    "meaning": "突然"
  },
  "โน": {
    "phonetic": "no",
    "meaning": "不"
  },
  "เน็ด": {
    "phonetic": "ned",
    "meaning": "内德"
  },
  "ลีออน": {
    "phonetic": "lii oon",
    "meaning": "莱昂"
  },
  "คัน": {
    "phonetic": "khan",
    "meaning": "发痒"
  },
  "ตัด": {
    "phonetic": "tad",
    "meaning": "切"
  },
  "เฮาส์": {
    "phonetic": "heaa s",
    "meaning": "房子"
  },
  "บางคน": {
    "phonetic": "baang khn",
    "meaning": "有些人"
  },
  "ไอ้ระยำ": {
    "phonetic": "oi raya",
    "meaning": "他妈的混蛋"
  },
  "ล้านวอน": {
    "phonetic": "laan won",
    "meaning": "百万赢了"
  },
  "ดงจู": {
    "phonetic": "dngchuu",
    "meaning": "东居"
  },
  "ที่ว่า": {
    "phonetic": "thii waa",
    "meaning": "就是这样说的"
  },
  "โปรด": {
    "phonetic": "pord",
    "meaning": "请"
  },
  "มากับผม": {
    "phonetic": "maa kab phm",
    "meaning": "跟我来吧"
  },
  "อื่ม": {
    "phonetic": "ouem",
    "meaning": "唔"
  },
  "เอลล่า": {
    "phonetic": "oe l laa",
    "meaning": "艾拉"
  },
  "ไอ้งั่ง": {
    "phonetic": "oi ngang",
    "meaning": "你这个白痴"
  },
  "โทษนะคะ": {
    "phonetic": "thosʹ na kha",
    "meaning": "对不起"
  },
  "มัลคอม": {
    "phonetic": "mal khom",
    "meaning": "马尔科姆"
  },
  "เฮ้พวก": {
    "phonetic": "he phwk",
    "meaning": "嘿伙计们"
  },
  "เชฟ": {
    "phonetic": "chhef",
    "meaning": "厨师"
  },
  "สิ่ง": {
    "phonetic": "sing",
    "meaning": "事物"
  },
  "อ๊าาา": {
    "phonetic": "oaaaaaa",
    "meaning": "啊"
  },
  "ลิซ": {
    "phonetic": "lis",
    "meaning": "莉兹"
  },
  "พวกนี้": {
    "phonetic": "phwk nii",
    "meaning": "这些"
  },
  "เดียว": {
    "phonetic": "deiiaw",
    "meaning": "一"
  },
  "อะไรอ่ะ": {
    "phonetic": "oari oa",
    "meaning": "什么"
  },
  "มารี": {
    "phonetic": "maarii",
    "meaning": "玛丽"
  },
  "ยังค่ะ": {
    "phonetic": "yang kha",
    "meaning": "还没有"
  },
  "ส่ง": {
    "phonetic": "sng",
    "meaning": "发送"
  },
  "คาสเซิล": {
    "phonetic": "khaas seil",
    "meaning": "城堡"
  },
  "ไมกี้": {
    "phonetic": "mi kii",
    "meaning": "麦基"
  },
  "ดีเจ": {
    "phonetic": "diiche",
    "meaning": "DJ"
  },
  "เทอรี่": {
    "phonetic": "the orii",
    "meaning": "特里"
  },
  "เบลน": {
    "phonetic": "beln",
    "meaning": "布莱恩"
  },
  "บิน": {
    "phonetic": "bin",
    "meaning": "飞"
  },
  "เมเรดิธ": {
    "phonetic": "me redith",
    "meaning": "梅雷迪思"
  },
  "เอิร์ล": {
    "phonetic": "oeirl",
    "meaning": "伯爵"
  },
  "อนาคต": {
    "phonetic": "onaakht",
    "meaning": "未来"
  },
  "ก๊อก": {
    "phonetic": "kok",
    "meaning": "敲"
  },
  "ของขวัญ": {
    "phonetic": "khong khway",
    "meaning": "礼物"
  },
  "ตายละ": {
    "phonetic": "taay la",
    "meaning": "我死了"
  },
  "ช่วยที": {
    "phonetic": "chhwy thii",
    "meaning": "请帮忙"
  },
  "ช่ายย": {
    "phonetic": "chhaayy",
    "meaning": "这是正确的"
  },
  "ดนตรี": {
    "phonetic": "dntrii",
    "meaning": "音乐"
  },
  "ที่ๆ": {
    "phonetic": "thii«",
    "meaning": "那个地方"
  },
  "ฟลินน์": {
    "phonetic": "f li nn",
    "meaning": "弗林"
  },
  "ชินอิจิ": {
    "phonetic": "chhi noi chi",
    "meaning": "新一"
  },
  "อ๊าา": {
    "phonetic": "oaaaa",
    "meaning": "啊"
  },
  "ดื่มซะ": {
    "phonetic": "duem sa",
    "meaning": "喝吧"
  },
  "ไบรซ์": {
    "phonetic": "birs",
    "meaning": "布莱斯"
  },
  "ฮาร์วี่": {
    "phonetic": "haar wii",
    "meaning": "哈维"
  },
  "เร็วๆสิ": {
    "phonetic": "rew«si",
    "meaning": "匆忙"
  },
  "อินกริด": {
    "phonetic": "oin krid",
    "meaning": "英格丽德"
  },
  "เฟรย่า": {
    "phonetic": "fer yaa",
    "meaning": "芙蕾雅"
  },
  "มามะ": {
    "phonetic": "maama",
    "meaning": "快点"
  },
  "กินสิ": {
    "phonetic": "kin si",
    "meaning": "吃"
  },
  "ลาร์รี่": {
    "phonetic": "laar rii",
    "meaning": "拉里"
  },
  "พระองค์": {
    "phonetic": "phraongkh",
    "meaning": "他"
  },
  "ใหญ่": {
    "phonetic": "ıy",
    "meaning": "大的"
  },
  "มินวู": {
    "phonetic": "mi nwuu",
    "meaning": "珉宇"
  },
  "ลินน์": {
    "phonetic": "li nn",
    "meaning": "林恩"
  },
  "นายรู้": {
    "phonetic": "naay ruu",
    "meaning": "你知道"
  },
  "แอคเซิล": {
    "phonetic": "oæ kh seil",
    "meaning": "阿克塞尔"
  },
  "ชื่อว่า": {
    "phonetic": "chhueo waa",
    "meaning": "它被称为"
  },
  "พิเศษ": {
    "phonetic": "phisesʹ",
    "meaning": "特别的"
  },
  "แปลโดย": {
    "phonetic": "pæl doy",
    "meaning": "翻译自"
  },
  "ไม่ไป": {
    "phonetic": "mi pi",
    "meaning": "我不去"
  },
  "โอ๊ะโอ": {
    "phonetic": "ooa oo",
    "meaning": "哎呀"
  },
  "พฤษภาคม": {
    "phonetic": "phvsʹphhaakhm",
    "meaning": "可能"
  },
  "กลัว": {
    "phonetic": "klaw",
    "meaning": "害怕的"
  },
  "และเอ่อ": {
    "phonetic": "læa oeo",
    "meaning": "还有呃"
  },
  "อังกฤษ": {
    "phonetic": "oangkvsʹ",
    "meaning": "英语"
  },
  "ชิบาตะ": {
    "phonetic": "chhi baa ta",
    "meaning": "柴田"
  },
  "ทำไมคุณ": {
    "phonetic": "thami khun",
    "meaning": "你为什么呢"
  },
  "ขอย้ำ": {
    "phonetic": "kho ya",
    "meaning": "我重复一遍"
  },
  "ลัย": {
    "phonetic": "lay",
    "meaning": "赖"
  },
  "เงียบซะ": {
    "phonetic": "ngeiiab sa",
    "meaning": "安静"
  },
  "ดอนนี่": {
    "phonetic": "don nii",
    "meaning": "唐尼"
  },
  "วอร์ด": {
    "phonetic": "word",
    "meaning": "病房"
  },
  "นั้นมัน": {
    "phonetic": "nan man",
    "meaning": "就是这样"
  },
  "หยุดพูด": {
    "phonetic": "yud phuud",
    "meaning": "别说话了"
  },
  "แอชลีย์": {
    "phonetic": "oæ chhlii y",
    "meaning": "阿什利"
  },
  "โรมัน": {
    "phonetic": "roman",
    "meaning": "罗马"
  },
  "บน": {
    "phonetic": "bn",
    "meaning": "在"
  },
  "ว้าววว": {
    "phonetic": "waa www",
    "meaning": "哇"
  },
  "แม่มด": {
    "phonetic": "mæmd",
    "meaning": "巫婆"
  },
  "ต้นไม้": {
    "phonetic": "tnmi",
    "meaning": "树"
  },
  "นั่นเขา": {
    "phonetic": "nan kheaa",
    "meaning": "就是他"
  },
  "ดิ๊ก": {
    "phonetic": "dik",
    "meaning": "迪克"
  },
  "ได้ละ": {
    "phonetic": "di la",
    "meaning": "知道了"
  },
  "โคเฮ": {
    "phonetic": "khohe",
    "meaning": "科赫"
  },
  "ไม่มาก": {
    "phonetic": "mi maak",
    "meaning": "不多"
  },
  "เฮ่อ": {
    "phonetic": "heo",
    "meaning": "嘿"
  },
  "ก็ดีค่ะ": {
    "phonetic": "k dii kha",
    "meaning": "很好"
  },
  "พูดตรงๆ": {
    "phonetic": "phuud trng«",
    "meaning": "坦白地说"
  },
  "ตรวจสอบ": {
    "phonetic": "trwch sob",
    "meaning": "查看"
  },
  "ทำเลย": {
    "phonetic": "tha lei",
    "meaning": "现在就做吧"
  },
  "อย่าลืม": {
    "phonetic": "oyaa luem",
    "meaning": "别忘了"
  },
  "ตลกมาก": {
    "phonetic": "tlk maak",
    "meaning": "很搞笑"
  },
  "แจ๋วเลย": {
    "phonetic": "chæw lei",
    "meaning": "太酷了"
  },
  "หญิง": {
    "phonetic": "ying",
    "meaning": "女性"
  },
  "ฟังผม": {
    "phonetic": "fang phm",
    "meaning": "听我说"
  },
  "ท่านปธน": {
    "phonetic": "thaan p thn",
    "meaning": "总裁"
  },
  "มิเกล": {
    "phonetic": "mi kel",
    "meaning": "米格尔"
  },
  "มาร์ธา": {
    "phonetic": "maar thaa",
    "meaning": "玛莎"
  },
  "ข้างบน": {
    "phonetic": "khaang bn",
    "meaning": "多于"
  },
  "แม้แต่": {
    "phonetic": "mætæ",
    "meaning": "甚至"
  },
  "โอลีฟ": {
    "phonetic": "oo liif",
    "meaning": "橄榄"
  },
  "แดซอง": {
    "phonetic": "dæ song",
    "meaning": "大成"
  },
  "ไอวี่": {
    "phonetic": "oi wii",
    "meaning": "常春藤"
  },
  "เรือ": {
    "phonetic": "reueo",
    "meaning": "船"
  },
  "แอนทอน": {
    "phonetic": "oæ nthon",
    "meaning": "安托万"
  },
  "นอนลง": {
    "phonetic": "non lng",
    "meaning": "躺"
  },
  "ว้าย": {
    "phonetic": "waay",
    "meaning": "哇"
  },
  "สิบ": {
    "phonetic": "sib",
    "meaning": "十"
  },
  "คณบดี": {
    "phonetic": "khnbdii",
    "meaning": "院长"
  },
  "พาโบล": {
    "phonetic": "phaa bol",
    "meaning": "巴勃罗"
  },
  "แฮโรลด์": {
    "phonetic": "hæ ro ld",
    "meaning": "哈罗德"
  },
  "ฆ่าเขา": {
    "phonetic": "khaa kheaa",
    "meaning": "杀了他"
  },
  "แม็ท": {
    "phonetic": "mæth",
    "meaning": "马特"
  },
  "ธีโอ": {
    "phonetic": "thiioo",
    "meaning": "西奥"
  },
  "เบ็ธ": {
    "phonetic": "beth",
    "meaning": "贝丝"
  },
  "อื้มม": {
    "phonetic": "ouemm",
    "meaning": "唔"
  },
  "ชารอน": {
    "phonetic": "chhaa ron",
    "meaning": "莎伦"
  },
  "หมดเวลา": {
    "phonetic": "md welaa",
    "meaning": "时间到了"
  },
  "คนดี": {
    "phonetic": "khndii",
    "meaning": "好人"
  },
  "มิจิรุ": {
    "phonetic": "mi chi ru",
    "meaning": "满"
  },
  "มีครับ": {
    "phonetic": "mii khrab",
    "meaning": "有"
  },
  "รับไป": {
    "phonetic": "rab pi",
    "meaning": "拿走吧"
  },
  "นี่แน่ะ": {
    "phonetic": "nii næa",
    "meaning": "看哪"
  },
  "เช้านี้": {
    "phonetic": "chheaa nii",
    "meaning": "今晨"
  },
  "อิม": {
    "phonetic": "oim",
    "meaning": "我是"
  },
  "เชส": {
    "phonetic": "chhes",
    "meaning": "追赶"
  },
  "เบ": {
    "phonetic": "be",
    "meaning": "裴"
  },
  "ไดแอน": {
    "phonetic": "di oæn",
    "meaning": "黛安"
  },
  "หยุดสิ": {
    "phonetic": "yud si",
    "meaning": "停止吧"
  },
  "โอ๊ว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "มิกะ": {
    "phonetic": "mika",
    "meaning": "米卡"
  },
  "ฆ่าฉัน": {
    "phonetic": "khaa chhan",
    "meaning": "杀了我"
  },
  "ฟอร์ด": {
    "phonetic": "f ord",
    "meaning": "福特"
  },
  "อากาศ": {
    "phonetic": "oaakaas",
    "meaning": "天气"
  },
  "บราโว่": {
    "phonetic": "braa wo",
    "meaning": "太棒了"
  },
  "ไมลส์": {
    "phonetic": "mils",
    "meaning": "迈尔斯"
  },
  "ซีไอเอ": {
    "phonetic": "sii oi oe",
    "meaning": "中央情报局"
  },
  "อ้าาา": {
    "phonetic": "oaa aaaa",
    "meaning": "啊哈"
  },
  "ไม่คะ": {
    "phonetic": "mi kha",
    "meaning": "不"
  },
  "ข้าเอง": {
    "phonetic": "khaa oeng",
    "meaning": "是我"
  },
  "โต๊ะ": {
    "phonetic": "toa",
    "meaning": "桌子"
  },
  "เชลลี่": {
    "phonetic": "chhel lii",
    "meaning": "雪莉"
  },
  "แบบไหน": {
    "phonetic": "bæb in",
    "meaning": "什么样的"
  },
  "แต่เป็น": {
    "phonetic": "tæ pen",
    "meaning": "但确实如此"
  },
  "นิคกี้": {
    "phonetic": "nikh kii",
    "meaning": "尼基"
  },
  "ระดับ": {
    "phonetic": "radab",
    "meaning": "等级"
  },
  "นายน่ะ": {
    "phonetic": "naay na",
    "meaning": "你"
  },
  "กับใคร": {
    "phonetic": "kab khır",
    "meaning": "和谁一起"
  },
  "ซะ": {
    "phonetic": "sa",
    "meaning": "萨"
  },
  "ข้อสอง": {
    "phonetic": "kho song",
    "meaning": "第二"
  },
  "ข้าว่า": {
    "phonetic": "khaa waa",
    "meaning": "我说"
  },
  "คี": {
    "phonetic": "khii",
    "meaning": "记"
  },
  "แต่ถ้า": {
    "phonetic": "tæ thaa",
    "meaning": "但如果"
  },
  "อลิเซีย": {
    "phonetic": "o li seiia",
    "meaning": "艾丽西娅"
  },
  "ร้อง": {
    "phonetic": "rong",
    "meaning": "哭"
  },
  "สจ๊วต": {
    "phonetic": "schwt",
    "meaning": "管家"
  },
  "เบทซี่": {
    "phonetic": "beth sii",
    "meaning": "贝特西"
  },
  "บัดซบ": {
    "phonetic": "badsb",
    "meaning": "该死的"
  },
  "โทดที": {
    "phonetic": "thod thii",
    "meaning": "对不起"
  },
  "บิ๊ก": {
    "phonetic": "bik",
    "meaning": "大的"
  },
  "โตเกียว": {
    "phonetic": "tokeiiaw",
    "meaning": "东京"
  },
  "ยามาดะ": {
    "phonetic": "yaa maa da",
    "meaning": "山田"
  },
  "รูบี้": {
    "phonetic": "ruu bii",
    "meaning": "红宝石"
  },
  "ฟิโอนา": {
    "phonetic": "fi oo naa",
    "meaning": "菲奥娜"
  },
  "ยูชอน": {
    "phonetic": "yuu chhon",
    "meaning": "有春"
  },
  "ฮิลล์": {
    "phonetic": "hi ll",
    "meaning": "爬坡道"
  },
  "ดูซะ": {
    "phonetic": "duusa",
    "meaning": "看"
  },
  "อาจจะนะ": {
    "phonetic": "oaach chana",
    "meaning": "或许"
  },
  "กับผม": {
    "phonetic": "kab phm",
    "meaning": "与我一起"
  },
  "ให้ไว": {
    "phonetic": "ı wi",
    "meaning": "快点"
  },
  "นิโคล": {
    "phonetic": "ni khol",
    "meaning": "妮可"
  },
  "คีธ": {
    "phonetic": "khiith",
    "meaning": "基思"
  },
  "สารเลว": {
    "phonetic": "saarlew",
    "meaning": "小子"
  },
  "ฮอลลี่": {
    "phonetic": "hol lii",
    "meaning": "冬青"
  },
  "คาล": {
    "phonetic": "khaal",
    "meaning": "卡尔"
  },
  "วางลง": {
    "phonetic": "waang lng",
    "meaning": "把它放下"
  },
  "อะไรรึ": {
    "phonetic": "oari rue",
    "meaning": "什么"
  },
  "โอ้อึ": {
    "phonetic": "oo oue",
    "meaning": "妈的"
  },
  "ไปต่อ": {
    "phonetic": "pi to",
    "meaning": "继续"
  },
  "ไปๆๆ": {
    "phonetic": "pi««",
    "meaning": "去去去"
  },
  "ก่อนที่": {
    "phonetic": "kon thii",
    "meaning": "前"
  },
  "ฮาชิ": {
    "phonetic": "haachhi",
    "meaning": "八"
  },
  "แก้ว": {
    "phonetic": "kæw",
    "meaning": "玻璃"
  },
  "ดะ": {
    "phonetic": "da",
    "meaning": "达"
  },
  "ใช่จ๊ะ": {
    "phonetic": "chhı cha",
    "meaning": "是的"
  },
  "เดเรค": {
    "phonetic": "derekh",
    "meaning": "德里克"
  },
  "ลูกจ๋า": {
    "phonetic": "luuk chaa",
    "meaning": "我的儿子"
  },
  "สามี": {
    "phonetic": "saamii",
    "meaning": "丈夫"
  },
  "ออลลี่": {
    "phonetic": "oo l lii",
    "meaning": "奥利"
  },
  "และใช่": {
    "phonetic": "læa chhı",
    "meaning": "是的"
  },
  "ลิเลียน": {
    "phonetic": "li leiian",
    "meaning": "莉莲"
  },
  "แคม": {
    "phonetic": "khæm",
    "meaning": "阴唇"
  },
  "มาๆ": {
    "phonetic": "maa«",
    "meaning": "快点"
  },
  "ไม่เห็น": {
    "phonetic": "mi en",
    "meaning": "看不到"
  },
  "แซนดี้": {
    "phonetic": "sæn dii",
    "meaning": "沙"
  },
  "อย่าพูด": {
    "phonetic": "oyaa phuud",
    "meaning": "别说话"
  },
  "ทำให้": {
    "phonetic": "thaı",
    "meaning": "制作"
  },
  "สวรรค์": {
    "phonetic": "swrrkh",
    "meaning": "天堂"
  },
  "เซ": {
    "phonetic": "se",
    "meaning": "硒"
  },
  "พิซซ่า": {
    "phonetic": "phissaa",
    "meaning": "比萨"
  },
  "ยาย": {
    "phonetic": "yaay",
    "meaning": "奶奶"
  },
  "มอง": {
    "phonetic": "mong",
    "meaning": "看"
  },
  "ซึคาสะ": {
    "phonetic": "sue khaa sa",
    "meaning": "司"
  },
  "ผู้คน": {
    "phonetic": "phuukhn",
    "meaning": "人们"
  },
  "เพค่ะ": {
    "phonetic": "phe kha",
    "meaning": "唷"
  },
  "เจ้าค่ะ": {
    "phonetic": "cheaakha",
    "meaning": "你"
  },
  "ฮ่าฮ่า": {
    "phonetic": "haa haa",
    "meaning": "哈哈"
  },
  "แชด": {
    "phonetic": "chhæd",
    "meaning": "乍得"
  },
  "เดท": {
    "phonetic": "deth",
    "meaning": "日期"
  },
  "ชุน": {
    "phonetic": "chhun",
    "meaning": "顺"
  },
  "แมน": {
    "phonetic": "mæn",
    "meaning": "男人"
  },
  "แปลกนะ": {
    "phonetic": "pælk na",
    "meaning": "很奇怪"
  },
  "เกย์": {
    "phonetic": "kei",
    "meaning": "同性恋"
  },
  "นาตาลี": {
    "phonetic": "naa taa lii",
    "meaning": "娜塔莉"
  },
  "เครื่อง": {
    "phonetic": "kherueong",
    "meaning": "机器"
  },
  "หมา": {
    "phonetic": "maa",
    "meaning": "狗"
  },
  "หมาป่า": {
    "phonetic": "maapaa",
    "meaning": "狼"
  },
  "โอ่": {
    "phonetic": "oo",
    "meaning": "哦"
  },
  "ขา": {
    "phonetic": "khaa",
    "meaning": "腿"
  },
  "อัลลีย์": {
    "phonetic": "oal liia",
    "meaning": "胡同"
  },
  "ฉบับที่": {
    "phonetic": "chhbab thii",
    "meaning": "问题"
  },
  "อีวา": {
    "phonetic": "oiiwaa",
    "meaning": "伊娃"
  },
  "รีส": {
    "phonetic": "riis",
    "meaning": "里斯"
  },
  "พ่อฉัน": {
    "phonetic": "pho chhan",
    "meaning": "我的父亲"
  },
  "กม": {
    "phonetic": "km",
    "meaning": "公里"
  },
  "เกม": {
    "phonetic": "kem",
    "meaning": "游戏"
  },
  "กอนวุค": {
    "phonetic": "ko nwukh",
    "meaning": "枪旭"
  },
  "หืมมม": {
    "phonetic": "uemmm",
    "meaning": "嗯"
  },
  "ดาร์วิน": {
    "phonetic": "daar win",
    "meaning": "达尔文"
  },
  "ยอดมาก": {
    "phonetic": "yod maak",
    "meaning": "非常酷"
  },
  "ตลกน่า": {
    "phonetic": "tlk naa",
    "meaning": "有趣的"
  },
  "ซี่": {
    "phonetic": "sii",
    "meaning": "辐条"
  },
  "ทำมัน": {
    "phonetic": "tha man",
    "meaning": "做吧"
  },
  "มังก์": {
    "phonetic": "mangk",
    "meaning": "僧"
  },
  "กรกฎาคม": {
    "phonetic": "krkdaakhm",
    "meaning": "七月"
  },
  "มาร์แชล": {
    "phonetic": "maarchhæl",
    "meaning": "马歇尔"
  },
  "เมือง": {
    "phonetic": "meueong",
    "meaning": "城市"
  },
  "ทำไมไม่": {
    "phonetic": "thami mi",
    "meaning": "为什么不呢"
  },
  "โป": {
    "phonetic": "po",
    "meaning": "宝"
  },
  "หัว": {
    "phonetic": "aw",
    "meaning": "头"
  },
  "ตูม": {
    "phonetic": "tuum",
    "meaning": "繁荣"
  },
  "ฮู": {
    "phonetic": "huu",
    "meaning": "胡"
  },
  "ดอกไม้": {
    "phonetic": "dokmi",
    "meaning": "花朵"
  },
  "แมว": {
    "phonetic": "mæw",
    "meaning": "猫"
  },
  "มาซิ": {
    "phonetic": "maasi",
    "meaning": "来"
  },
  "หัวใจ": {
    "phonetic": "awchı",
    "meaning": "心"
  },
  "เอ๊ย": {
    "phonetic": "oei",
    "meaning": "哦"
  },
  "ซึง": {
    "phonetic": "sueng",
    "meaning": "哪个"
  },
  "ไปไกลๆ": {
    "phonetic": "pi kil«",
    "meaning": "走远点吧"
  },
  "ไก่": {
    "phonetic": "ki",
    "meaning": "鸡"
  },
  "มินามิ": {
    "phonetic": "mi naa mi",
    "meaning": "南"
  },
  "ศูนย์": {
    "phonetic": "suuny",
    "meaning": "中心"
  },
  "อากิระ": {
    "phonetic": "oaa ki ra",
    "meaning": "阿基拉"
  },
  "วาว": {
    "phonetic": "waaw",
    "meaning": "哇"
  },
  "โฮดอร์": {
    "phonetic": "ho d or",
    "meaning": "阿多尔"
  },
  "เดน่า": {
    "phonetic": "den aa",
    "meaning": "达纳"
  },
  "เขต": {
    "phonetic": "khet",
    "meaning": "区"
  },
  "อบิเกล": {
    "phonetic": "obi kel",
    "meaning": "阿比盖尔"
  },
  "โรซี่": {
    "phonetic": "ro sii",
    "meaning": "罗西"
  },
  "นี่ใคร": {
    "phonetic": "nii khır",
    "meaning": "这是谁"
  },
  "เด็กโง่": {
    "phonetic": "dek ngo",
    "meaning": "傻孩子"
  },
  "แปลกมาก": {
    "phonetic": "pælk maak",
    "meaning": "很奇怪"
  },
  "คลับ": {
    "phonetic": "khlab",
    "meaning": "俱乐部"
  },
  "ห่วยแตก": {
    "phonetic": "wy tæk",
    "meaning": "糟透了"
  },
  "มากขึ้น": {
    "phonetic": "maak khuen",
    "meaning": "越来越多"
  },
  "อ่าว": {
    "phonetic": "oaaw",
    "meaning": "湾"
  },
  "สีแดง": {
    "phonetic": "sii dæng",
    "meaning": "红色的"
  },
  "สถานที่": {
    "phonetic": "sthaan thii",
    "meaning": "地点"
  },
  "จอร์น": {
    "phonetic": "chorn",
    "meaning": "约翰"
  },
  "ห่ะ": {
    "phonetic": "a",
    "meaning": "呵呵"
  },
  "เอาล่ะๆ": {
    "phonetic": "oeaa la«",
    "meaning": "好的"
  },
  "เดเนียล": {
    "phonetic": "de neiia l",
    "meaning": "丹尼尔"
  },
  "โกรธ": {
    "phonetic": "korth",
    "meaning": "生气的"
  },
  "เคนนี่": {
    "phonetic": "khen nii",
    "meaning": "肯尼"
  },
  "เคยสิ": {
    "phonetic": "khei si",
    "meaning": "我以前也是这样"
  },
  "ฉันท้อง": {
    "phonetic": "chhan thong",
    "meaning": "我怀孕了"
  },
  "ไลท์": {
    "phonetic": "lith",
    "meaning": "光"
  },
  "สู้เขา": {
    "phonetic": "suu kheaa",
    "meaning": "与他战斗"
  },
  "โซซึเกะ": {
    "phonetic": "so sue kea",
    "meaning": "宗介"
  },
  "เท็กซัส": {
    "phonetic": "theksas",
    "meaning": "德克萨斯州"
  },
  "เหยื่อ": {
    "phonetic": "eiueo",
    "meaning": "受害者"
  },
  "เหอะน่า": {
    "phonetic": "eoa naa",
    "meaning": "呵呵"
  },
  "ยูมิ": {
    "phonetic": "yuumi",
    "meaning": "由美"
  },
  "ยุนซอง": {
    "phonetic": "yun song",
    "meaning": "尹成"
  },
  "แผน": {
    "phonetic": "phæn",
    "meaning": "计划"
  },
  "ดีมากๆ": {
    "phonetic": "dii maak«",
    "meaning": "非常好"
  },
  "เคย์": {
    "phonetic": "khei",
    "meaning": "凯"
  },
  "ทีเจ": {
    "phonetic": "thiiche",
    "meaning": "TJ"
  },
  "นิ": {
    "phonetic": "ni",
    "meaning": "尼"
  },
  "เซ็กซี่": {
    "phonetic": "seksii",
    "meaning": "性感"
  },
  "ญี่ปุ่น": {
    "phonetic": "yiipun",
    "meaning": "日本"
  },
  "ด็อก": {
    "phonetic": "dok",
    "meaning": "博士"
  },
  "อ้าก": {
    "phonetic": "oaak",
    "meaning": "啊"
  },
  "เคยเป็น": {
    "phonetic": "khei pen",
    "meaning": "曾经是"
  },
  "โชคร้าย": {
    "phonetic": "chhokh raay",
    "meaning": "厄运"
  },
  "ง่ายมาก": {
    "phonetic": "ngaay maak",
    "meaning": "很容易"
  },
  "รายงาน": {
    "phonetic": "raayngaan",
    "meaning": "报告"
  },
  "แป๊บนึง": {
    "phonetic": "pæb nueng",
    "meaning": "一会儿"
  },
  "คาเมรอน": {
    "phonetic": "khaa me ron",
    "meaning": "卡梅伦"
  },
  "ชู่ววว": {
    "phonetic": "chhuuwww",
    "meaning": "嘘"
  },
  "คริสติน": {
    "phonetic": "kh ri sti n",
    "meaning": "克里斯汀"
  },
  "ม่าย": {
    "phonetic": "maay",
    "meaning": "寡妇"
  },
  "คุกเข่า": {
    "phonetic": "khukkheaa",
    "meaning": "下跪"
  },
  "ไม่นาน": {
    "phonetic": "mi naan",
    "meaning": "不长"
  },
  "อุ้ย": {
    "phonetic": "ouy",
    "meaning": "哎哟"
  },
  "วูดดี้": {
    "phonetic": "wuud dii",
    "meaning": "伍迪"
  },
  "สวยงาม": {
    "phonetic": "swyngaam",
    "meaning": "美丽的"
  },
  "ฮาโหล": {
    "phonetic": "haa ol",
    "meaning": "你好"
  },
  "ขั้นแรก": {
    "phonetic": "khan ræk",
    "meaning": "第一步"
  },
  "มาก่อน": {
    "phonetic": "maa kon",
    "meaning": "先来吧"
  },
  "จอร์ช": {
    "phonetic": "chorchh",
    "meaning": "乔治"
  },
  "เวรกรรม": {
    "phonetic": "wer krrm",
    "meaning": "业力"
  },
  "ร่วมเพศ": {
    "phonetic": "rwm phes",
    "meaning": "他妈的"
  },
  "ยกเลิก": {
    "phonetic": "ykleik",
    "meaning": "取消"
  },
  "ที่อยู่": {
    "phonetic": "thii oyuu",
    "meaning": "地址"
  },
  "เอลลิส": {
    "phonetic": "oe l lis",
    "meaning": "埃利斯"
  },
  "เอช": {
    "phonetic": "oechh",
    "meaning": "H"
  },
  "รัส": {
    "phonetic": "ras",
    "meaning": "拉斯"
  },
  "ราโมน": {
    "phonetic": "raa mon",
    "meaning": "拉蒙"
  },
  "จุนซู": {
    "phonetic": "chun suu",
    "meaning": "俊苏"
  },
  "ขอเถอะ": {
    "phonetic": "kho theoa",
    "meaning": "请"
  },
  "ชิบ": {
    "phonetic": "chhib",
    "meaning": "芯片"
  },
  "ดีจ้ะ": {
    "phonetic": "dii cha",
    "meaning": "好的"
  },
  "รู้สึก": {
    "phonetic": "ruusuek",
    "meaning": "感觉"
  },
  "เซ็นต์": {
    "phonetic": "sen t",
    "meaning": "分"
  },
  "ซินดี้": {
    "phonetic": "sin dii",
    "meaning": "辛迪"
  },
  "มารุโอะ": {
    "phonetic": "maa ru ooa",
    "meaning": "丸尾"
  },
  "อย่าทำ": {
    "phonetic": "oyaa tha",
    "meaning": "不要这样做"
  },
  "ชุด": {
    "phonetic": "chhud",
    "meaning": "放"
  },
  "เฟรด": {
    "phonetic": "ferd",
    "meaning": "弗雷德"
  },
  "พอลลี่": {
    "phonetic": "pho l lii",
    "meaning": "波莉"
  },
  "คนบ้า": {
    "phonetic": "khn baa",
    "meaning": "疯狂的人"
  },
  "โทรมา": {
    "phonetic": "thor maa",
    "meaning": "打电话给我"
  },
  "จิ": {
    "phonetic": "chi",
    "meaning": "吉"
  },
  "ฟรานซิส": {
    "phonetic": "f raan sis",
    "meaning": "弗朗西斯"
  },
  "โอ้ะ": {
    "phonetic": "ooa",
    "meaning": "哦"
  },
  "กลอเรีย": {
    "phonetic": "kl oreiia",
    "meaning": "格洛丽亚"
  },
  "ลิฟ": {
    "phonetic": "lif",
    "meaning": "丽芙"
  },
  "เร็วอีก": {
    "phonetic": "rew oiik",
    "meaning": "更快"
  },
  "ดูดี": {
    "phonetic": "duudii",
    "meaning": "看起来不错"
  },
  "คุณน้า": {
    "phonetic": "khun naa",
    "meaning": "阿姨"
  },
  "ไงครับ": {
    "phonetic": "ngi khrab",
    "meaning": "嘿"
  },
  "วูจิน": {
    "phonetic": "wuu chin",
    "meaning": "宇进"
  },
  "แจจุง": {
    "phonetic": "chæ chung",
    "meaning": "杰中"
  },
  "ไปละ": {
    "phonetic": "pila",
    "meaning": "我们走吧"
  },
  "กระซิบ": {
    "phonetic": "krasib",
    "meaning": "耳语"
  },
  "ฮู้": {
    "phonetic": "huu",
    "meaning": "呼"
  },
  "ได้เสมอ": {
    "phonetic": "di semo",
    "meaning": "你永远可以"
  },
  "ไหนล่ะ": {
    "phonetic": "in la",
    "meaning": "在哪里"
  },
  "ทีวี": {
    "phonetic": "thiiwii",
    "meaning": "电视"
  },
  "คิมนานา": {
    "phonetic": "khi mnaa naa",
    "meaning": "金娜娜"
  },
  "สิงหาคม": {
    "phonetic": "singaakhm",
    "meaning": "八月"
  },
  "สบาย": {
    "phonetic": "sbaay",
    "meaning": "舒服的"
  },
  "แลรี่": {
    "phonetic": "læ rii",
    "meaning": "拉里"
  },
  "ใหม่": {
    "phonetic": "ım",
    "meaning": "新的"
  },
  "ฟังดูดี": {
    "phonetic": "fang duu dii",
    "meaning": "听起来不错"
  },
  "ได้รับ": {
    "phonetic": "di rab",
    "meaning": "已收到"
  },
  "พูดถูก": {
    "phonetic": "phuud thuuk",
    "meaning": "你说得对"
  },
  "ฮ่าๆๆ": {
    "phonetic": "haa« «",
    "meaning": "哈哈哈"
  },
  "ใช้ได้": {
    "phonetic": "chhıdi",
    "meaning": "可以使用"
  },
  "ลำ": {
    "phonetic": "la",
    "meaning": "林"
  },
  "เด็บบี้": {
    "phonetic": "deb bii",
    "meaning": "黛比"
  },
  "เร้ด": {
    "phonetic": "red",
    "meaning": "红色的"
  },
  "บอกผมสิ": {
    "phonetic": "bok phm si",
    "meaning": "告诉我"
  },
  "เออนี่": {
    "phonetic": "oeo nii",
    "meaning": "嗯在这里"
  },
  "พ่อจ๋า": {
    "phonetic": "pho chaa",
    "meaning": "爸爸"
  },
  "เกิด": {
    "phonetic": "keid",
    "meaning": "出生了"
  },
  "นี่จ้ะ": {
    "phonetic": "nii cha",
    "meaning": "就是这样"
  },
  "ตลก": {
    "phonetic": "tlk",
    "meaning": "有趣的"
  },
  "ธอร์น": {
    "phonetic": "th orn",
    "meaning": "刺"
  },
  "มากมาย": {
    "phonetic": "maakmaay",
    "meaning": "许多"
  },
  "ไม่แล้ว": {
    "phonetic": "mi læw",
    "meaning": "不再"
  },
  "ไงก็ตาม": {
    "phonetic": "ngi ktaam",
    "meaning": "反正"
  },
  "ลูกสาว": {
    "phonetic": "luuksaaw",
    "meaning": "女儿"
  },
  "รูอิ": {
    "phonetic": "ruuoi",
    "meaning": "瑞"
  },
  "เมกุ": {
    "phonetic": "meku",
    "meaning": "梅古"
  },
  "เมอลิน": {
    "phonetic": "me o lin",
    "meaning": "梅林"
  },
  "นายด้วย": {
    "phonetic": "naay dwy",
    "meaning": "你也是"
  },
  "ไม่น่า": {
    "phonetic": "mi naa",
    "meaning": "不太可能"
  },
  "สตีล": {
    "phonetic": "stiil",
    "meaning": "钢"
  },
  "ซิดนี่": {
    "phonetic": "si d nii",
    "meaning": "西德尼"
  },
  "ลุก": {
    "phonetic": "luk",
    "meaning": "起床"
  },
  "อ๋อใช่": {
    "phonetic": "oo chhı",
    "meaning": "哦是的"
  },
  "อิซซี่": {
    "phonetic": "ois sii",
    "meaning": "伊兹"
  },
  "หลานรัก": {
    "phonetic": "laan rak",
    "meaning": "亲爱的孙子"
  },
  "แค่นี้": {
    "phonetic": "khæ nii",
    "meaning": "就这样"
  },
  "ไมค์กี้": {
    "phonetic": "mikh kii",
    "meaning": "麦基"
  },
  "ยูจีน": {
    "phonetic": "yuu chiin",
    "meaning": "尤金"
  },
  "ไม่ใช": {
    "phonetic": "mi chhı",
    "meaning": "不"
  },
  "แมดดี้": {
    "phonetic": "mæd dii",
    "meaning": "麦迪"
  },
  "บอกเขา": {
    "phonetic": "bok kheaa",
    "meaning": "告诉他"
  },
  "ส่งมา": {
    "phonetic": "sng maa",
    "meaning": "发送了"
  },
  "อ่าาา": {
    "phonetic": "oaa aaaa",
    "meaning": "啊"
  },
  "ครูโซ": {
    "phonetic": "khruu so",
    "meaning": "克鲁索"
  },
  "กี": {
    "phonetic": "kii",
    "meaning": "基"
  },
  "ได้ล่ะ": {
    "phonetic": "di la",
    "meaning": "好的"
  },
  "ไม่จ้ะ": {
    "phonetic": "mi cha",
    "meaning": "不"
  },
  "ไอริส": {
    "phonetic": "oi ris",
    "meaning": "鸢尾花"
  },
  "คาวบอย": {
    "phonetic": "khaawboy",
    "meaning": "牛仔"
  },
  "โซล": {
    "phonetic": "sol",
    "meaning": "汉城"
  },
  "บอนด์": {
    "phonetic": "bond",
    "meaning": "纽带"
  },
  "ไวน์": {
    "phonetic": "win",
    "meaning": "葡萄酒"
  },
  "ว่าไงคะ": {
    "phonetic": "waa ngi kha",
    "meaning": "你怎么说"
  },
  "ร้อยโท": {
    "phonetic": "roy tho",
    "meaning": "中尉"
  },
  "สก็อตต์": {
    "phonetic": "skott",
    "meaning": "斯科特"
  },
  "โย": {
    "phonetic": "yo",
    "meaning": "哟"
  },
  "มันยาก": {
    "phonetic": "man yaak",
    "meaning": "它很难"
  },
  "ปลา": {
    "phonetic": "plaa",
    "meaning": "鱼"
  },
  "จัดไป": {
    "phonetic": "chad pi",
    "meaning": "我们走吧"
  },
  "ใช่ใช่": {
    "phonetic": "chhı chhı",
    "meaning": "是的是的"
  },
  "โทษค่ะ": {
    "phonetic": "thosʹ kha",
    "meaning": "对不起"
  },
  "ไฮ้": {
    "phonetic": "hi",
    "meaning": "你好"
  },
  "จากใคร": {
    "phonetic": "chaak khır",
    "meaning": "来自谁"
  },
  "คำ": {
    "phonetic": "kha",
    "meaning": "字"
  },
  "คอลลิน": {
    "phonetic": "kho l lin",
    "meaning": "科林"
  },
  "พอเหอะ": {
    "phonetic": "pho eoa",
    "meaning": "足够的"
  },
  "ให้คุณ": {
    "phonetic": "ı khun",
    "meaning": "给你"
  },
  "รู้อะไร": {
    "phonetic": "ruu oari",
    "meaning": "你知道什么"
  },
  "คอลิน": {
    "phonetic": "kho lin",
    "meaning": "科林"
  },
  "ฮอตช์": {
    "phonetic": "hot chh",
    "meaning": "霍奇"
  },
  "ฮยอง": {
    "phonetic": "hyong",
    "meaning": "亨"
  },
  "หยาง": {
    "phonetic": "yaang",
    "meaning": "杨"
  },
  "ลอร์ด": {
    "phonetic": "lord",
    "meaning": "主"
  },
  "แดริล": {
    "phonetic": "dæ ril",
    "meaning": "达里尔"
  },
  "ไคโตะ": {
    "phonetic": "khi toa",
    "meaning": "凯托"
  },
  "บัด": {
    "phonetic": "bad",
    "meaning": "芽"
  },
  "กัส": {
    "phonetic": "kas",
    "meaning": "格斯"
  },
  "บาร์ท": {
    "phonetic": "baar th",
    "meaning": "巴特"
  },
  "มาเร็วๆ": {
    "phonetic": "maa rew«",
    "meaning": "快来吧"
  },
  "แหงสิ": {
    "phonetic": "æng si",
    "meaning": "当然"
  },
  "แหวน": {
    "phonetic": "æwn",
    "meaning": "戒指"
  },
  "เดซี่": {
    "phonetic": "de sii",
    "meaning": "雏菊"
  },
  "เช็ค": {
    "phonetic": "chhekh",
    "meaning": "查看"
  },
  "ที่บ้าน": {
    "phonetic": "thii baan",
    "meaning": "在家里"
  },
  "ร็อค": {
    "phonetic": "rokh",
    "meaning": "岩石"
  },
  "อะไรๆ": {
    "phonetic": "oari«",
    "meaning": "任何事物"
  },
  "รัน": {
    "phonetic": "ran",
    "meaning": "跑步"
  },
  "ใช่เหรอ": {
    "phonetic": "chhı e ro",
    "meaning": "是这样吗"
  },
  "ข่าว": {
    "phonetic": "khaaw",
    "meaning": "消息"
  },
  "ความสุข": {
    "phonetic": "khwaam sukh",
    "meaning": "幸福"
  },
  "ก้มลง": {
    "phonetic": "km lng",
    "meaning": "跪拜"
  },
  "นิว": {
    "phonetic": "niw",
    "meaning": "新的"
  },
  "คนไหน": {
    "phonetic": "khn in",
    "meaning": "哪一个"
  },
  "หมู": {
    "phonetic": "muu",
    "meaning": "猪"
  },
  "ไงพวก": {
    "phonetic": "ngi phwk",
    "meaning": "嘿伙计们"
  },
  "ความฝัน": {
    "phonetic": "khwaam fan",
    "meaning": "梦"
  },
  "ขับไป": {
    "phonetic": "khab pi",
    "meaning": "赶走"
  },
  "แชง": {
    "phonetic": "chhæng",
    "meaning": "张"
  },
  "คนตาย": {
    "phonetic": "khn taay",
    "meaning": "死人了"
  },
  "เบิร์ก": {
    "phonetic": "beirk",
    "meaning": "伯格"
  },
  "แต่อะไร": {
    "phonetic": "tæ oari",
    "meaning": "但什么"
  },
  "คาโอรุ": {
    "phonetic": "khaa oo ru",
    "meaning": "薰"
  },
  "เป็นใคร": {
    "phonetic": "pen khır",
    "meaning": "你是谁"
  },
  "หมอบ": {
    "phonetic": "mob",
    "meaning": "蹲"
  },
  "ช่วงนี้": {
    "phonetic": "chhwng nii",
    "meaning": "这段时间"
  },
  "โอ้โฮ": {
    "phonetic": "ooho",
    "meaning": "哇哦"
  },
  "เอานะ": {
    "phonetic": "oeaa na",
    "meaning": "快点"
  },
  "นาน": {
    "phonetic": "naan",
    "meaning": "许久"
  },
  "สัตว์": {
    "phonetic": "satw",
    "meaning": "动物"
  },
  "บทที่": {
    "phonetic": "bth thii",
    "meaning": "章"
  },
  "แทโฮ": {
    "phonetic": "thæho",
    "meaning": "泰浩"
  },
  "เชี่ย": {
    "phonetic": "chheiia",
    "meaning": "他妈的"
  },
  "ภาษา": {
    "phonetic": "phhaasʹaa",
    "meaning": "语言"
  },
  "เฮ่ย": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "การ": {
    "phonetic": "kaar",
    "meaning": "这"
  },
  "แต่ไม่": {
    "phonetic": "tæ mi",
    "meaning": "但没有"
  },
  "เม": {
    "phonetic": "me",
    "meaning": "四月"
  },
  "แพททริค": {
    "phonetic": "phæth thrikh",
    "meaning": "帕特里克"
  },
  "เมื่อไร": {
    "phonetic": "meueori",
    "meaning": "什么时候"
  },
  "มือถือ": {
    "phonetic": "mueo thueo",
    "meaning": "手机"
  },
  "เข้าใจ๋": {
    "phonetic": "kheaa chı",
    "meaning": "我明白"
  },
  "แบรนแดน": {
    "phonetic": "bæ rn dæn",
    "meaning": "布兰丹"
  },
  "นายคือ": {
    "phonetic": "naay khueo",
    "meaning": "你是"
  },
  "ออกัส": {
    "phonetic": "ooka s",
    "meaning": "八月"
  },
  "ทดสอบ": {
    "phonetic": "thdsob",
    "meaning": "测试"
  },
  "อาบู": {
    "phonetic": "oaabuu",
    "meaning": "阿布"
  },
  "ดีซี": {
    "phonetic": "diisii",
    "meaning": "直流"
  },
  "หมุน": {
    "phonetic": "mun",
    "meaning": "旋转"
  },
  "นี่เอง": {
    "phonetic": "niioeng",
    "meaning": "就是这样"
  },
  "ด้วยนะ": {
    "phonetic": "dwy na",
    "meaning": "也"
  },
  "หลักฐาน": {
    "phonetic": "lak thaan",
    "meaning": "证据"
  },
  "แต่นั่น": {
    "phonetic": "tæ nan",
    "meaning": "但那样"
  },
  "ผี": {
    "phonetic": "phii",
    "meaning": "鬼"
  },
  "คู่": {
    "phonetic": "khuu",
    "meaning": "夫妻"
  },
  "ชาโรน่า": {
    "phonetic": "chhaa ro naa",
    "meaning": "莎罗娜"
  },
  "น่านะ": {
    "phonetic": "naa na",
    "meaning": "好的"
  },
  "เกิร์ล": {
    "phonetic": "keirl",
    "meaning": "女孩"
  },
  "กะ": {
    "phonetic": "ka",
    "meaning": "转移"
  },
  "สวีท": {
    "phonetic": "swiith",
    "meaning": "甜的"
  },
  "แถว": {
    "phonetic": "thæw",
    "meaning": "排"
  },
  "ไรเดอร์": {
    "phonetic": "ri de or",
    "meaning": "骑士"
  },
  "ไปไหนมา": {
    "phonetic": "pi in maa",
    "meaning": "你去哪儿了"
  },
  "ก็เพราะ": {
    "phonetic": "k pheraaa",
    "meaning": "因为"
  },
  "ไม่หรอ": {
    "phonetic": "mi ro",
    "meaning": "不"
  },
  "กด": {
    "phonetic": "kd",
    "meaning": "按"
  },
  "บิลล์": {
    "phonetic": "bil l",
    "meaning": "账单"
  },
  "หรือยัง": {
    "phonetic": "rueo yang",
    "meaning": "或者还没有"
  },
  "จอนนี่": {
    "phonetic": "chon nii",
    "meaning": "乔尼"
  },
  "ออเดรย์": {
    "phonetic": "oo dery",
    "meaning": "奥黛丽"
  },
  "ทานากะ": {
    "phonetic": "thaa naa ka",
    "meaning": "田中"
  },
  "สองคน": {
    "phonetic": "song khn",
    "meaning": "两个人"
  },
  "ค่อย": {
    "phonetic": "khoy",
    "meaning": "慢慢地"
  },
  "พระราชา": {
    "phonetic": "phra raachhaa",
    "meaning": "国王"
  },
  "พี่ใหญ่": {
    "phonetic": "phii ıy",
    "meaning": "大哥"
  },
  "อาร์ลีน": {
    "phonetic": "oaar liin",
    "meaning": "阿琳"
  },
  "ทำไมนะ": {
    "phonetic": "thami na",
    "meaning": "为什么"
  },
  "บิชอป": {
    "phonetic": "bichhop",
    "meaning": "主教"
  },
  "โหล": {
    "phonetic": "ol",
    "meaning": "十几个"
  },
  "จุ๊บๆ": {
    "phonetic": "chub«",
    "meaning": "吻吻"
  },
  "มิค": {
    "phonetic": "mikh",
    "meaning": "米克"
  },
  "เย็น": {
    "phonetic": "yen",
    "meaning": "凉爽的"
  },
  "เจที": {
    "phonetic": "chethii",
    "meaning": "JT"
  },
  "ดูนายสิ": {
    "phonetic": "duu naay si",
    "meaning": "看看你"
  },
  "เบรนด้า": {
    "phonetic": "be rn daa",
    "meaning": "布伦达"
  },
  "ไม่ๆๆๆๆ": {
    "phonetic": "mi« «««",
    "meaning": "不不不不"
  },
  "เยจิน": {
    "phonetic": "ye chin",
    "meaning": "业进"
  },
  "คริสตัล": {
    "phonetic": "khristal",
    "meaning": "水晶"
  },
  "นี่พวก": {
    "phonetic": "nii phwk",
    "meaning": "他们在这里"
  },
  "จอย": {
    "phonetic": "choy",
    "meaning": "喜悦"
  },
  "อาร์ทู": {
    "phonetic": "oaar thuu",
    "meaning": "阿图"
  },
  "ธนาคาร": {
    "phonetic": "thnaakhaar",
    "meaning": "银行"
  },
  "อามิ": {
    "phonetic": "oaami",
    "meaning": "阿米"
  },
  "วิกกี้": {
    "phonetic": "wik kii",
    "meaning": "维姬"
  },
  "ยังอยู่": {
    "phonetic": "yang oyuu",
    "meaning": "还在这里"
  },
  "มู": {
    "phonetic": "muu",
    "meaning": "亩"
  },
  "เล็กซี่": {
    "phonetic": "lek sii",
    "meaning": "莱克西"
  },
  "และเขา": {
    "phonetic": "læa kheaa",
    "meaning": "还有他"
  },
  "รับบท": {
    "phonetic": "rab bth",
    "meaning": "担当这个角色"
  },
  "พยายาม": {
    "phonetic": "phyaayaam",
    "meaning": "尝试"
  },
  "น้ำผึ้ง": {
    "phonetic": "na phueng",
    "meaning": "蜂蜜"
  },
  "ไปซิ": {
    "phonetic": "pisi",
    "meaning": "去"
  },
  "ชู": {
    "phonetic": "chhuu",
    "meaning": "楚"
  },
  "ลิล": {
    "phonetic": "lil",
    "meaning": "莉尔"
  },
  "ชิม": {
    "phonetic": "chhim",
    "meaning": "品尝"
  },
  "นิกกี้": {
    "phonetic": "ni kkii",
    "meaning": "尼基"
  },
  "ไม่ฮะ": {
    "phonetic": "mi ha",
    "meaning": "不"
  },
  "เควนติน": {
    "phonetic": "khe wn tin",
    "meaning": "昆汀"
  },
  "โนอา": {
    "phonetic": "nooaa",
    "meaning": "诺亚"
  },
  "วะ": {
    "phonetic": "wa",
    "meaning": "哇"
  },
  "นิก": {
    "phonetic": "nik",
    "meaning": "缺口"
  },
  "แพทริก": {
    "phonetic": "phæ thrik",
    "meaning": "帕特里克"
  },
  "เอเรีย": {
    "phonetic": "oe reiia",
    "meaning": "咏叹调"
  },
  "เฮลโหล": {
    "phonetic": "hel ol",
    "meaning": "你好"
  },
  "คาลวิน": {
    "phonetic": "khaa l win",
    "meaning": "卡尔文"
  },
  "โอะ": {
    "phonetic": "ooa",
    "meaning": "哦"
  },
  "ลูก้า": {
    "phonetic": "luuk aa",
    "meaning": "卢卡"
  },
  "เคย์ซี่": {
    "phonetic": "khei sii",
    "meaning": "凯西"
  },
  "ขนาด": {
    "phonetic": "khnaad",
    "meaning": "尺寸"
  },
  "ไงนะ": {
    "phonetic": "ngina",
    "meaning": "什么"
  },
  "ไลเคน": {
    "phonetic": "li khen",
    "meaning": "地衣"
  },
  "แบรนดอน": {
    "phonetic": "bæ rn don",
    "meaning": "布兰登"
  },
  "กลุ่ม": {
    "phonetic": "klum",
    "meaning": "团体"
  },
  "ฮอย": {
    "phonetic": "hoy",
    "meaning": "嘿"
  },
  "ซุน": {
    "phonetic": "sun",
    "meaning": "太阳"
  },
  "กำลัง": {
    "phonetic": "kalang",
    "meaning": "力量"
  },
  "ชีส": {
    "phonetic": "chhiis",
    "meaning": "奶酪"
  },
  "พัน": {
    "phonetic": "phan",
    "meaning": "千"
  },
  "ดิฉัน": {
    "phonetic": "dichhan",
    "meaning": "我"
  },
  "โยโกะ": {
    "phonetic": "yo koa",
    "meaning": "洋子"
  },
  "นั่นละ": {
    "phonetic": "nan la",
    "meaning": "就是这样"
  },
  "เชียร์ส": {
    "phonetic": "chheiiar s",
    "meaning": "干杯"
  },
  "สกปรก": {
    "phonetic": "skprk",
    "meaning": "肮脏的"
  },
  "ถูกเผง": {
    "phonetic": "thuuk pheng",
    "meaning": "这是正确的"
  },
  "นายน้อย": {
    "phonetic": "naay noy",
    "meaning": "少爷"
  },
  "มีอา": {
    "phonetic": "miioaa",
    "meaning": "米娅"
  },
  "เท่ากับ": {
    "phonetic": "theaakab",
    "meaning": "等于"
  },
  "โมเสส": {
    "phonetic": "moses",
    "meaning": "摩西"
  },
  "ทำยังไง": {
    "phonetic": "tha yang ngi",
    "meaning": "怎么做呢"
  },
  "เชอะ": {
    "phonetic": "chheoa",
    "meaning": "干杯"
  },
  "ซากุระ": {
    "phonetic": "saakura",
    "meaning": "樱花"
  },
  "เอดิสัน": {
    "phonetic": "oe di san",
    "meaning": "爱迪生"
  },
  "จริงซิ": {
    "phonetic": "chring si",
    "meaning": "这是真的"
  },
  "ตอนเช้า": {
    "phonetic": "ton chheaa",
    "meaning": "早晨"
  },
  "แรนดี้": {
    "phonetic": "ræn dii",
    "meaning": "兰迪"
  },
  "กล่อง": {
    "phonetic": "klong",
    "meaning": "盒子"
  },
  "ยุนโฮ": {
    "phonetic": "yu n ho",
    "meaning": "允浩"
  },
  "มาตลอด": {
    "phonetic": "maa tlod",
    "meaning": "一直都在这里"
  },
  "คนโกหก": {
    "phonetic": "khn kok",
    "meaning": "说谎者"
  },
  "อีชาน": {
    "phonetic": "oii chhaan",
    "meaning": "伊坎"
  },
  "เรน": {
    "phonetic": "ren",
    "meaning": "雨"
  },
  "ดงอุก": {
    "phonetic": "dng ouk",
    "meaning": "东旭"
  },
  "หนัก": {
    "phonetic": "nak",
    "meaning": "重的"
  },
  "บราโว": {
    "phonetic": "braa wo",
    "meaning": "太棒了"
  },
  "ดาว": {
    "phonetic": "daaw",
    "meaning": "星星"
  },
  "ทางขวา": {
    "phonetic": "thaang khwaa",
    "meaning": "向右"
  },
  "พันเอก": {
    "phonetic": "phan oek",
    "meaning": "上校"
  },
  "ซาช่า": {
    "phonetic": "saa chhaa",
    "meaning": "萨莎"
  },
  "แล้วถ้า": {
    "phonetic": "læw thaa",
    "meaning": "如果"
  },
  "บายค่ะ": {
    "phonetic": "baay kha",
    "meaning": "再见"
  },
  "ม้า": {
    "phonetic": "maa",
    "meaning": "马"
  },
  "ตายห่า": {
    "phonetic": "taayaa",
    "meaning": "天哪"
  },
  "คลาวด์": {
    "phonetic": "khlaa wd",
    "meaning": "云"
  },
  "พาย": {
    "phonetic": "phaay",
    "meaning": "馅饼"
  },
  "นก": {
    "phonetic": "nk",
    "meaning": "鸟"
  },
  "ลันดี้": {
    "phonetic": "lan dii",
    "meaning": "伦迪"
  },
  "กับเขา": {
    "phonetic": "kab kheaa",
    "meaning": "和他在一起"
  },
  "คำสั่ง": {
    "phonetic": "kha sang",
    "meaning": "命令"
  },
  "ชั้นว่า": {
    "phonetic": "chhan waa",
    "meaning": "我说"
  },
  "เลยล่ะ": {
    "phonetic": "lei la",
    "meaning": "马上"
  },
  "นั้นไง": {
    "phonetic": "nan ngi",
    "meaning": "就是这样"
  },
  "ปาป๊า": {
    "phonetic": "paap aa",
    "meaning": "爸爸"
  },
  "ซะอีก": {
    "phonetic": "sa oiik",
    "meaning": "再次"
  },
  "ราอิม": {
    "phonetic": "raa oim",
    "meaning": "雷姆"
  },
  "เดลต้า": {
    "phonetic": "deltaa",
    "meaning": "三角洲"
  },
  "ราวๆ": {
    "phonetic": "raaw«",
    "meaning": "大约"
  },
  "และนาย": {
    "phonetic": "læa naay",
    "meaning": "和先生"
  },
  "หนาวจัง": {
    "phonetic": "naaw chang",
    "meaning": "天气太冷了"
  },
  "โดโลเรส": {
    "phonetic": "do lores",
    "meaning": "多洛丽丝"
  },
  "แปลกๆ": {
    "phonetic": "pælk«",
    "meaning": "奇怪的"
  },
  "รร": {
    "phonetic": "rr",
    "meaning": "学校"
  },
  "แต่ทว่า": {
    "phonetic": "tæ thwaa",
    "meaning": "但是"
  },
  "ครับๆ": {
    "phonetic": "khrab«",
    "meaning": "是的是的"
  },
  "เนลลี่": {
    "phonetic": "nel lii",
    "meaning": "耐莉"
  },
  "ช่ายยย": {
    "phonetic": "chhaayyy",
    "meaning": "这是正确的"
  },
  "มยอง": {
    "phonetic": "myong",
    "meaning": "明"
  },
  "แมทท์": {
    "phonetic": "mæthth",
    "meaning": "马特"
  },
  "ดุ๊ค": {
    "phonetic": "dukh",
    "meaning": "公爵"
  },
  "ดีใจจัง": {
    "phonetic": "diichı chang",
    "meaning": "太高兴了"
  },
  "เล็กซ์": {
    "phonetic": "lek s",
    "meaning": "莱克斯"
  },
  "ริชชี่": {
    "phonetic": "richh chhii",
    "meaning": "里奇"
  },
  "ห้ะ": {
    "phonetic": "a",
    "meaning": "呵呵"
  },
  "คินตะ": {
    "phonetic": "khin ta",
    "meaning": "近打"
  },
  "ไอ้นี่": {
    "phonetic": "oi nii",
    "meaning": "这个家伙"
  },
  "มานี้": {
    "phonetic": "maa nii",
    "meaning": "过来吧"
  },
  "เรียว": {
    "phonetic": "reiiaw",
    "meaning": "苗条"
  },
  "ข้าชื่อ": {
    "phonetic": "khaa chhueo",
    "meaning": "我的名字是"
  },
  "ดอลล่า": {
    "phonetic": "dol laa",
    "meaning": "美元"
  },
  "ตายแน่": {
    "phonetic": "taay næ",
    "meaning": "肯定死了"
  },
  "เท": {
    "phonetic": "the",
    "meaning": "倒"
  },
  "กราเซีย": {
    "phonetic": "kraa seiia",
    "meaning": "格拉齐亚"
  },
  "กระสุน": {
    "phonetic": "krasun",
    "meaning": "弹药"
  },
  "แกรนด์": {
    "phonetic": "kæ rnd",
    "meaning": "盛大"
  },
  "ฮันนี่": {
    "phonetic": "han nii",
    "meaning": "蜂蜜"
  },
  "ทำลาย": {
    "phonetic": "thalaay",
    "meaning": "破坏"
  },
  "เต้นรำ": {
    "phonetic": "tenra",
    "meaning": "舞蹈"
  },
  "เบลี่ย์": {
    "phonetic": "be lii y",
    "meaning": "贝利"
  },
  "ล้านคน": {
    "phonetic": "laan khn",
    "meaning": "数百万人"
  },
  "ริคกี้": {
    "phonetic": "rikh kii",
    "meaning": "瑞奇"
  },
  "รู้น่า": {
    "phonetic": "ruu naa",
    "meaning": "我知道"
  },
  "ฮืมมม": {
    "phonetic": "huemmm",
    "meaning": "唔"
  },
  "เพนนี่": {
    "phonetic": "phennii",
    "meaning": "一分钱"
  },
  "มั๊ย": {
    "phonetic": "may",
    "meaning": "是吗"
  },
  "มากิ": {
    "phonetic": "maaki",
    "meaning": "真纪"
  },
  "ให้ผม": {
    "phonetic": "ı phm",
    "meaning": "把它给我"
  },
  "แพ้": {
    "phonetic": "phæ",
    "meaning": "丢失的"
  },
  "ในนั้น": {
    "phonetic": "nı nan",
    "meaning": "在其中"
  },
  "ทำไมอ่ะ": {
    "phonetic": "thami oa",
    "meaning": "为什么"
  },
  "อึนซอง": {
    "phonetic": "ouen song",
    "meaning": "恩成"
  },
  "วิธี": {
    "phonetic": "withii",
    "meaning": "方法"
  },
  "เบนเน็ต": {
    "phonetic": "ben net",
    "meaning": "班内特"
  },
  "เป็นสิ": {
    "phonetic": "pen si",
    "meaning": "这是"
  },
  "สวอน": {
    "phonetic": "swon",
    "meaning": "天鹅"
  },
  "รึไง": {
    "phonetic": "ruengi",
    "meaning": "或者什么"
  },
  "พระช่วย": {
    "phonetic": "phra chhwy",
    "meaning": "帕蔡"
  },
  "บอล": {
    "phonetic": "bol",
    "meaning": "球"
  },
  "เล่ม": {
    "phonetic": "lem",
    "meaning": "体积"
  },
  "พาร์ค": {
    "phonetic": "phaar kh",
    "meaning": "公园"
  },
  "บรูโน่": {
    "phonetic": "bruu no",
    "meaning": "布鲁诺"
  },
  "ข้างใน": {
    "phonetic": "khaang nı",
    "meaning": "里面"
  },
  "ฟิน": {
    "phonetic": "fin",
    "meaning": "太令人满意了"
  },
  "บริดเจท": {
    "phonetic": "brid cheth",
    "meaning": "布丽吉特"
  },
  "ก้าว": {
    "phonetic": "kaaw",
    "meaning": "步"
  },
  "นิ่งไว้": {
    "phonetic": "ning wi",
    "meaning": "保持静止"
  },
  "ฟัน": {
    "phonetic": "fan",
    "meaning": "牙齿"
  },
  "ตาแก่": {
    "phonetic": "taa kæ",
    "meaning": "老头儿"
  },
  "คุก": {
    "phonetic": "khuk",
    "meaning": "监狱"
  },
  "สีดำ": {
    "phonetic": "siida",
    "meaning": "黑色的"
  },
  "สไตล์": {
    "phonetic": "stil",
    "meaning": "风格"
  },
  "บอกผม": {
    "phonetic": "bok phm",
    "meaning": "告诉我"
  },
  "แฮม": {
    "phonetic": "hæm",
    "meaning": "火腿"
  },
  "ได้จ้ะ": {
    "phonetic": "di cha",
    "meaning": "你可以"
  },
  "ชน": {
    "phonetic": "chhn",
    "meaning": "碰撞"
  },
  "พาเมล่า": {
    "phonetic": "phaa me laa",
    "meaning": "帕梅拉"
  },
  "วินสโตน": {
    "phonetic": "win s ton",
    "meaning": "温斯顿"
  },
  "อินเดีย": {
    "phonetic": "oindeiia",
    "meaning": "印度"
  },
  "บาทหลวง": {
    "phonetic": "baathlwng",
    "meaning": "牧师"
  },
  "หยุดน่ะ": {
    "phonetic": "yud na",
    "meaning": "停止吧"
  },
  "รอนี่นะ": {
    "phonetic": "ro nii na",
    "meaning": "在这里等一下"
  },
  "เร": {
    "phonetic": "re",
    "meaning": "关于"
  },
  "ไอ้ชั่ว": {
    "phonetic": "oi chhaw",
    "meaning": "邪恶的混蛋"
  },
  "วิทยุ": {
    "phonetic": "withyu",
    "meaning": "收音机"
  },
  "เงินสด": {
    "phonetic": "ngeinsd",
    "meaning": "现金"
  },
  "ร้าน": {
    "phonetic": "raan",
    "meaning": "店铺"
  },
  "หันไป": {
    "phonetic": "an pi",
    "meaning": "回转"
  },
  "ไมอามี่": {
    "phonetic": "mi oaa mii",
    "meaning": "迈阿密"
  },
  "เฮริน": {
    "phonetic": "he rin",
    "meaning": "海林"
  },
  "พอๆ": {
    "phonetic": "pho«",
    "meaning": "足够的"
  },
  "สบายๆ": {
    "phonetic": "sbaay«",
    "meaning": "别紧张"
  },
  "ไม่นะคะ": {
    "phonetic": "mi na kha",
    "meaning": "不"
  },
  "นาทีนี้": {
    "phonetic": "naathii nii",
    "meaning": "这一刻"
  },
  "ฮาโรลด์": {
    "phonetic": "haa ro ld",
    "meaning": "哈罗德"
  },
  "ท่านค่ะ": {
    "phonetic": "thaan kha",
    "meaning": "先生"
  },
  "ก็โอเค": {
    "phonetic": "k ookhe",
    "meaning": "没关系"
  },
  "เอเลน": {
    "phonetic": "oe len",
    "meaning": "伊莱恩"
  },
  "ซม": {
    "phonetic": "sm",
    "meaning": "厘米"
  },
  "อดีต": {
    "phonetic": "odiit",
    "meaning": "过去"
  },
  "น้องข้า": {
    "phonetic": "nong khaa",
    "meaning": "我的妹妹"
  },
  "พ่อผม": {
    "phonetic": "pho phm",
    "meaning": "我的父亲"
  },
  "พลทหาร": {
    "phonetic": "phl thaar",
    "meaning": "士兵"
  },
  "เล็ง": {
    "phonetic": "leng",
    "meaning": "目的"
  },
  "นี้แหละ": {
    "phonetic": "nii æla",
    "meaning": "就是这样"
  },
  "ฮโยริ": {
    "phonetic": "h yo ri",
    "meaning": "孝利"
  },
  "ะพั": {
    "phonetic": "apha",
    "meaning": "美联社"
  },
  "กรรไกร": {
    "phonetic": "krrkir",
    "meaning": "剪刀"
  },
  "ออกมาสิ": {
    "phonetic": "ook maa si",
    "meaning": "出来"
  },
  "ขวด": {
    "phonetic": "khwd",
    "meaning": "瓶子"
  },
  "อันโด": {
    "phonetic": "oan do",
    "meaning": "安藤"
  },
  "ชเร็ค": {
    "phonetic": "chhrekh",
    "meaning": "施雷克"
  },
  "สายลับ": {
    "phonetic": "saaylab",
    "meaning": "间谍"
  },
  "เจได": {
    "phonetic": "chedi",
    "meaning": "绝地武士"
  },
  "เคเล็บ": {
    "phonetic": "khe leb",
    "meaning": "迦勒"
  },
  "ยาม": {
    "phonetic": "yaam",
    "meaning": "警卫"
  },
  "ไปด้วย": {
    "phonetic": "pi dwy",
    "meaning": "附和"
  },
  "สุดๆ": {
    "phonetic": "sud«",
    "meaning": "极其"
  },
  "นี้คือ": {
    "phonetic": "nii khueo",
    "meaning": "这是"
  },
  "แชนน่อน": {
    "phonetic": "chhæ nnon",
    "meaning": "香农"
  },
  "ในเมือง": {
    "phonetic": "nı meueong",
    "meaning": "在城市里"
  },
  "ไหนดูสิ": {
    "phonetic": "in duu si",
    "meaning": "无论你走到哪里都要看看"
  },
  "ลูค": {
    "phonetic": "luukh",
    "meaning": "卢克"
  },
  "มกราคม": {
    "phonetic": "mkraakhm",
    "meaning": "一月"
  },
  "ซิม": {
    "phonetic": "sim",
    "meaning": "SIM"
  },
  "ตรง": {
    "phonetic": "trng",
    "meaning": "直的"
  },
  "ฟัก": {
    "phonetic": "fak",
    "meaning": "孵化"
  },
  "ชูว์": {
    "phonetic": "chhuuw",
    "meaning": "嘘"
  },
  "อัลฟ่า": {
    "phonetic": "oalfaa",
    "meaning": "阿尔法"
  },
  "ว่าไป": {
    "phonetic": "waa pi",
    "meaning": "继续"
  },
  "แองเจิล": {
    "phonetic": "oæng cheil",
    "meaning": "天使"
  },
  "พ่อขา": {
    "phonetic": "pho khaa",
    "meaning": "父亲"
  },
  "ห่าเอ๊ย": {
    "phonetic": "aa oei",
    "meaning": "哎呀"
  },
  "เอม": {
    "phonetic": "oem",
    "meaning": "M"
  },
  "เลข": {
    "phonetic": "lekh",
    "meaning": "号码"
  },
  "เทส": {
    "phonetic": "thes",
    "meaning": "测试"
  },
  "ดอว์น": {
    "phonetic": "down",
    "meaning": "黎明"
  },
  "ลอว์เรน": {
    "phonetic": "lowren",
    "meaning": "劳伦"
  },
  "แจ่ม": {
    "phonetic": "chæm",
    "meaning": "惊人的"
  },
  "เวส": {
    "phonetic": "wes",
    "meaning": "韦斯"
  },
  "ฮวาง": {
    "phonetic": "hwaang",
    "meaning": "黄"
  },
  "เบ็คกี้": {
    "phonetic": "bekh kii",
    "meaning": "贝基"
  },
  "ทรูแมน": {
    "phonetic": "thruu mæn",
    "meaning": "杜鲁门"
  },
  "ก็ดีนี่": {
    "phonetic": "k dii nii",
    "meaning": "这很好"
  },
  "แคนดี้": {
    "phonetic": "khæn dii",
    "meaning": "糖果"
  },
  "คาลอส": {
    "phonetic": "khaa los",
    "meaning": "卡洛斯"
  },
  "สโนวี่": {
    "phonetic": "s no wii",
    "meaning": "下雪了"
  },
  "ถูกฆ่า": {
    "phonetic": "thuuk khaa",
    "meaning": "被杀了"
  },
  "ยี้": {
    "phonetic": "yii",
    "meaning": "该死"
  },
  "โจน": {
    "phonetic": "chon",
    "meaning": "琼"
  },
  "สามารถ": {
    "phonetic": "saamaarth",
    "meaning": "能"
  },
  "ว่ามั๊ย": {
    "phonetic": "waa may",
    "meaning": "你这么说吗"
  },
  "ไซรัส": {
    "phonetic": "si ras",
    "meaning": "赛勒斯"
  },
  "พระ": {
    "phonetic": "phra",
    "meaning": "僧"
  },
  "จา": {
    "phonetic": "chaa",
    "meaning": "贾"
  },
  "มาคิโนะ": {
    "phonetic": "maa khi noa",
    "meaning": "牧野"
  },
  "ฮาล": {
    "phonetic": "haal",
    "meaning": "哈尔"
  },
  "เอ็น": {
    "phonetic": "oen",
    "meaning": "N"
  },
  "บางที่": {
    "phonetic": "baang thii",
    "meaning": "有些地方"
  },
  "ไมก้า": {
    "phonetic": "mikaa",
    "meaning": "云母"
  },
  "พันล้าน": {
    "phonetic": "phan laan",
    "meaning": "十亿"
  },
  "แจ๊ส": {
    "phonetic": "chæs",
    "meaning": "爵士乐"
  },
  "โอวว": {
    "phonetic": "ooww",
    "meaning": "哦"
  },
  "ถูกมั๊ย": {
    "phonetic": "thuu kmay",
    "meaning": "是这样吗"
  },
  "มิกิ": {
    "phonetic": "miki",
    "meaning": "米基"
  },
  "เบ่ง": {
    "phonetic": "beng",
    "meaning": "推"
  },
  "ตาฉัน": {
    "phonetic": "taa chhan",
    "meaning": "我的眼睛"
  },
  "อ่อนแอ": {
    "phonetic": "oonoæ",
    "meaning": "虚弱的"
  },
  "นอน": {
    "phonetic": "non",
    "meaning": "睡觉"
  },
  "ลิลี่": {
    "phonetic": "li lii",
    "meaning": "百合"
  },
  "ดิง": {
    "phonetic": "ding",
    "meaning": "丁"
  },
  "หมอนั่น": {
    "phonetic": "mo nan",
    "meaning": "那个家伙"
  },
  "เบท": {
    "phonetic": "beth",
    "meaning": "赌注"
  },
  "ไนท์": {
    "phonetic": "nith",
    "meaning": "夜晚"
  },
  "ลบ": {
    "phonetic": "lb",
    "meaning": "删除"
  },
  "บรรยาย": {
    "phonetic": "brryaay",
    "meaning": "旁白"
  },
  "กระเป๋า": {
    "phonetic": "krapeaa",
    "meaning": "包"
  },
  "เดเมียน": {
    "phonetic": "de meiia n",
    "meaning": "达米安"
  },
  "อาจใช่": {
    "phonetic": "oaach chhı",
    "meaning": "也许是的"
  },
  "คริสตี้": {
    "phonetic": "kh ri stii",
    "meaning": "克里斯蒂"
  },
  "เจอร์": {
    "phonetic": "cheor",
    "meaning": "杰尔"
  },
  "คนแรก": {
    "phonetic": "khn ræk",
    "meaning": "第一个人"
  },
  "ใช่สินะ": {
    "phonetic": "chhı sina",
    "meaning": "这是正确的"
  },
  "มินจี": {
    "phonetic": "min chii",
    "meaning": "敏吉"
  },
  "สถานี": {
    "phonetic": "sthaanii",
    "meaning": "车站"
  },
  "เชียวนะ": {
    "phonetic": "chheiiaw na",
    "meaning": "让我们来看看"
  },
  "จำได้สิ": {
    "phonetic": "cha di si",
    "meaning": "记住"
  },
  "พูดมาสิ": {
    "phonetic": "phuud maa si",
    "meaning": "说吧"
  },
  "โง่จริง": {
    "phonetic": "ngo chring",
    "meaning": "真是蠢啊"
  },
  "เรเวน": {
    "phonetic": "re wen",
    "meaning": "乌鸦"
  },
  "โคเฮซัง": {
    "phonetic": "kho he sang",
    "meaning": "航平先生"
  },
  "ทู": {
    "phonetic": "thuu",
    "meaning": "二"
  },
  "เยอึน": {
    "phonetic": "yeoue n",
    "meaning": "叶恩"
  },
  "ไคลน์": {
    "phonetic": "khi ln",
    "meaning": "克莱因"
  },
  "พวกแก": {
    "phonetic": "phwk kæ",
    "meaning": "你们"
  },
  "ฮอดจ์": {
    "phonetic": "hod ch",
    "meaning": "霍奇"
  },
  "จัดให้": {
    "phonetic": "chad ı",
    "meaning": "假如"
  },
  "สุกกี้": {
    "phonetic": "suk kii",
    "meaning": "苏琪"
  },
  "เคซีย์": {
    "phonetic": "khe siia",
    "meaning": "凯西"
  },
  "แพนด้า": {
    "phonetic": "phændaa",
    "meaning": "熊猫"
  },
  "ตลกดี": {
    "phonetic": "tlk dii",
    "meaning": "很搞笑"
  },
  "หน่อยสิ": {
    "phonetic": "noy si",
    "meaning": "请"
  },
  "ซานต้า": {
    "phonetic": "saan taa",
    "meaning": "圣诞老人"
  },
  "ก็ได้นะ": {
    "phonetic": "kdi na",
    "meaning": "好的"
  },
  "เบย์": {
    "phonetic": "bei",
    "meaning": "湾"
  },
  "ได้สิคะ": {
    "phonetic": "di si kha",
    "meaning": "你可以"
  },
  "ประกาศ": {
    "phonetic": "prakaas",
    "meaning": "公告"
  },
  "คานาโกะ": {
    "phonetic": "khaa naa koa",
    "meaning": "加奈子"
  },
  "จองกุก": {
    "phonetic": "chong kuk",
    "meaning": "柾国"
  },
  "หลับตา": {
    "phonetic": "labtaa",
    "meaning": "闭上你的眼睛"
  },
  "ไช่": {
    "phonetic": "chhi",
    "meaning": "是的"
  },
  "กองทัพ": {
    "phonetic": "kongthaph",
    "meaning": "军队"
  },
  "มีแค่": {
    "phonetic": "mii khæ",
    "meaning": "只有"
  },
  "คิตตี้": {
    "phonetic": "khit tii",
    "meaning": "猫咪"
  },
  "นางสาว": {
    "phonetic": "naangsaaw",
    "meaning": "小姐"
  },
  "โดโนแวน": {
    "phonetic": "do no wæn",
    "meaning": "多诺万"
  },
  "ห่าเอ้ย": {
    "phonetic": "aa oe y",
    "meaning": "哎呀"
  },
  "ใด": {
    "phonetic": "dı",
    "meaning": "哪个"
  },
  "จอดรถ": {
    "phonetic": "chod rth",
    "meaning": "把车停好"
  },
  "ฉบับ": {
    "phonetic": "chhbab",
    "meaning": "版"
  },
  "ซา": {
    "phonetic": "saa",
    "meaning": "萨"
  },
  "ชอบสิ": {
    "phonetic": "chhob si",
    "meaning": "我喜欢它"
  },
  "โนวา": {
    "phonetic": "nowaa",
    "meaning": "新星"
  },
  "เอาไงดี": {
    "phonetic": "oeaa ngi dii",
    "meaning": "我应该怎么办"
  },
  "พูดอะไร": {
    "phonetic": "phuud oari",
    "meaning": "你说什么"
  },
  "ในอดีต": {
    "phonetic": "nı odiit",
    "meaning": "在过去"
  },
  "จูลส์": {
    "phonetic": "chuu ls",
    "meaning": "朱尔斯"
  },
  "สาบาน": {
    "phonetic": "saabaan",
    "meaning": "发誓"
  },
  "พอซะที": {
    "phonetic": "pho sa thii",
    "meaning": "足够的"
  },
  "ชางมิน": {
    "phonetic": "chhaa ngmin",
    "meaning": "昌珉"
  },
  "แล้วล่ะ": {
    "phonetic": "læw la",
    "meaning": "进而"
  },
  "ถ้าหาก": {
    "phonetic": "thaa aak",
    "meaning": "如果"
  },
  "นั่นใช่": {
    "phonetic": "nan chhı",
    "meaning": "这是正确的"
  },
  "ฟอลส์": {
    "phonetic": "fols",
    "meaning": "瀑布"
  },
  "บ่าย": {
    "phonetic": "baay",
    "meaning": "下午"
  },
  "ได้มั๊ย": {
    "phonetic": "di may",
    "meaning": "你可以吗"
  },
  "ตึก": {
    "phonetic": "tuek",
    "meaning": "建筑"
  },
  "บัดดี้": {
    "phonetic": "baddii",
    "meaning": "伙伴"
  },
  "ดอริส": {
    "phonetic": "d ori s",
    "meaning": "多丽丝"
  },
  "เซน": {
    "phonetic": "sen",
    "meaning": "禅"
  },
  "เฮ็นรี่": {
    "phonetic": "he nrii",
    "meaning": "亨利"
  },
  "โจชัว": {
    "phonetic": "cho chhaw",
    "meaning": "约书亚"
  },
  "แม่นาง": {
    "phonetic": "mæ naang",
    "meaning": "女士"
  },
  "ถอยไปนะ": {
    "phonetic": "thoy pi na",
    "meaning": "移到一边"
  },
  "แชมป์": {
    "phonetic": "chhæmp",
    "meaning": "冠军"
  },
  "โสเภณี": {
    "phonetic": "sophhenii",
    "meaning": "妓女"
  },
  "เบรน": {
    "phonetic": "bern",
    "meaning": "脑"
  },
  "คนเลว": {
    "phonetic": "khn lew",
    "meaning": "坏人"
  },
  "เบรนแนน": {
    "phonetic": "be rn næn",
    "meaning": "布伦南"
  },
  "แน่ใจสิ": {
    "phonetic": "næchı si",
    "meaning": "当然"
  },
  "หมดแล้ว": {
    "phonetic": "md læw",
    "meaning": "全部消失了"
  },
  "เทรุ": {
    "phonetic": "theru",
    "meaning": "辉"
  },
  "อาโซก้า": {
    "phonetic": "oaa sok aa",
    "meaning": "阿索卡"
  },
  "วง": {
    "phonetic": "wng",
    "meaning": "乐队"
  },
  "มาร์โก้": {
    "phonetic": "maar ko",
    "meaning": "马可"
  },
  "หล่อน": {
    "phonetic": "lon",
    "meaning": "她"
  },
  "รวมถึง": {
    "phonetic": "rwm thueng",
    "meaning": "包括"
  },
  "ริเวอร์": {
    "phonetic": "ri weor",
    "meaning": "河"
  },
  "พ่อแม่": {
    "phonetic": "pho mæ",
    "meaning": "父母"
  },
  "นายโกหก": {
    "phonetic": "naay kok",
    "meaning": "谎言先生"
  },
  "เจเน็ต": {
    "phonetic": "che net",
    "meaning": "珍妮特"
  },
  "มินนี่": {
    "phonetic": "mi n nii",
    "meaning": "米妮"
  },
  "จอนห์": {
    "phonetic": "chon",
    "meaning": "约翰"
  },
  "มีลูก": {
    "phonetic": "mii luuk",
    "meaning": "生个孩子吧"
  },
  "สับสน": {
    "phonetic": "sabsn",
    "meaning": "使困惑"
  },
  "จีฮู": {
    "phonetic": "chiihuu",
    "meaning": "吉虎"
  },
  "บึ": {
    "phonetic": "bue",
    "meaning": "嘘"
  },
  "โทรหา": {
    "phonetic": "thor aa",
    "meaning": "称呼"
  },
  "ใช้เวลา": {
    "phonetic": "chhı welaa",
    "meaning": "花点时间"
  },
  "วู้ด": {
    "phonetic": "wuud",
    "meaning": "木头"
  },
  "ข้าคือ": {
    "phonetic": "khaa khueo",
    "meaning": "我是"
  },
  "เชร็ค": {
    "phonetic": "chherkh",
    "meaning": "史瑞克"
  },
  "กรัม": {
    "phonetic": "kram",
    "meaning": "克"
  },
  "ถือไว้": {
    "phonetic": "thueo wi",
    "meaning": "握住它"
  },
  "นายเป็น": {
    "phonetic": "naay pen",
    "meaning": "彭先生"
  },
  "คือคุณ": {
    "phonetic": "khueo khun",
    "meaning": "是你"
  },
  "คาเรฟ": {
    "phonetic": "khaa ref",
    "meaning": "卡列夫"
  },
  "พีช": {
    "phonetic": "phiichh",
    "meaning": "桃"
  },
  "แต่นาย": {
    "phonetic": "tæ naay",
    "meaning": "但先生"
  },
  "อีกรอบ": {
    "phonetic": "oiik rob",
    "meaning": "再来一次"
  },
  "มีคน": {
    "phonetic": "miikhn",
    "meaning": "有人"
  },
  "กระดาษ": {
    "phonetic": "kradaasʹ",
    "meaning": "纸"
  },
  "ออสติน": {
    "phonetic": "oostin",
    "meaning": "奥斯汀"
  },
  "ฟลิ้นท์": {
    "phonetic": "f lin th",
    "meaning": "燧石"
  },
  "บ้าแล้ว": {
    "phonetic": "baa læw",
    "meaning": "疯狂的"
  },
  "บนถนน": {
    "phonetic": "bn thnn",
    "meaning": "在路上"
  },
  "เกรก": {
    "phonetic": "kerk",
    "meaning": "格雷格"
  },
  "แหม่ม": {
    "phonetic": "æmm",
    "meaning": "女士"
  },
  "ยูจิ": {
    "phonetic": "yuuchi",
    "meaning": "裕二"
  },
  "ที่ชื่อ": {
    "phonetic": "thii chhueo",
    "meaning": "就名字而言"
  },
  "แดง": {
    "phonetic": "dæng",
    "meaning": "红色的"
  },
  "ซาโตรุ": {
    "phonetic": "saa to ru",
    "meaning": "悟"
  },
  "นัม": {
    "phonetic": "nam",
    "meaning": "南"
  },
  "เบคกี้": {
    "phonetic": "bekh kii",
    "meaning": "贝基"
  },
  "จุ๊": {
    "phonetic": "chu",
    "meaning": "嘘"
  },
  "แฮปปี้": {
    "phonetic": "hæppii",
    "meaning": "快乐的"
  },
  "รายการ": {
    "phonetic": "raaykaar",
    "meaning": "列表"
  },
  "ป๊ะป๋า": {
    "phonetic": "papaa",
    "meaning": "爸爸"
  },
  "วุค": {
    "phonetic": "wukh",
    "meaning": "吴克"
  },
  "ฟุตบอล": {
    "phonetic": "futbol",
    "meaning": "足球"
  },
  "ดื่มสิ": {
    "phonetic": "duem si",
    "meaning": "喝吧"
  },
  "แน่นะ": {
    "phonetic": "næ na",
    "meaning": "确实"
  },
  "นี่นา": {
    "phonetic": "nii naa",
    "meaning": "就是这样"
  },
  "แต่เขา": {
    "phonetic": "tæ kheaa",
    "meaning": "但他"
  },
  "น้ำตาล": {
    "phonetic": "nataal",
    "meaning": "糖"
  },
  "ผ่านมา": {
    "phonetic": "phaan maa",
    "meaning": "过去了"
  },
  "ฮอยท์": {
    "phonetic": "hoyth",
    "meaning": "霍伊特"
  },
  "ไข่": {
    "phonetic": "khi",
    "meaning": "蛋"
  },
  "อาย": {
    "phonetic": "oaay",
    "meaning": "尴尬的"
  },
  "อเล็ก": {
    "phonetic": "o lek",
    "meaning": "亚历克"
  },
  "ฮานน่า": {
    "phonetic": "haa n naa",
    "meaning": "汉娜"
  },
  "มองผม": {
    "phonetic": "mong phm",
    "meaning": "看着我"
  },
  "บอยด์": {
    "phonetic": "boyd",
    "meaning": "博伊德"
  },
  "ชินจิ": {
    "phonetic": "chhin chi",
    "meaning": "真嗣"
  },
  "แมกกี้": {
    "phonetic": "mæk kii",
    "meaning": "玛吉"
  },
  "คือมัน": {
    "phonetic": "khueo man",
    "meaning": "就是它了"
  },
  "คยอง": {
    "phonetic": "khyong",
    "meaning": "京"
  },
  "ว่าแล้ว": {
    "phonetic": "waa læw",
    "meaning": "我说过了"
  },
  "บอกผมมา": {
    "phonetic": "bok phm maa",
    "meaning": "告诉我"
  },
  "คลาร่า": {
    "phonetic": "khlaa raa",
    "meaning": "克拉拉"
  },
  "มีอยู่": {
    "phonetic": "mii oyuu",
    "meaning": "存在"
  },
  "ชอนฮี": {
    "phonetic": "chhon hii",
    "meaning": "春熙"
  },
  "อุ๊บ": {
    "phonetic": "oub",
    "meaning": "哎呀"
  },
  "ดูดิ": {
    "phonetic": "duudi",
    "meaning": "看"
  },
  "เฟร็ด": {
    "phonetic": "ferd",
    "meaning": "弗雷德"
  },
  "ะพ": {
    "phonetic": "aph",
    "meaning": "医院"
  },
  "แซมมวล": {
    "phonetic": "sæm mwl",
    "meaning": "塞缪尔"
  },
  "ราล์ฟ": {
    "phonetic": "raalf",
    "meaning": "拉尔夫"
  },
  "จีน่า": {
    "phonetic": "chii naa",
    "meaning": "吉娜"
  },
  "โจนาห์": {
    "phonetic": "cho naa",
    "meaning": "乔纳"
  },
  "รักนะ": {
    "phonetic": "rak na",
    "meaning": "我爱你"
  },
  "หมอนี่": {
    "phonetic": "mo nii",
    "meaning": "这个家伙"
  },
  "โฟรโด": {
    "phonetic": "for do",
    "meaning": "佛罗多"
  },
  "แม่ฉัน": {
    "phonetic": "mæ chhan",
    "meaning": "我的母亲"
  },
  "คนร้าย": {
    "phonetic": "khnraay",
    "meaning": "恶棍"
  },
  "ทางไหน": {
    "phonetic": "thaang in",
    "meaning": "哪条路"
  },
  "ล้มเหลว": {
    "phonetic": "lm elw",
    "meaning": "失败的"
  },
  "นี่เลย": {
    "phonetic": "nii lei",
    "meaning": "这里是"
  },
  "ไลรา": {
    "phonetic": "liraa",
    "meaning": "天琴座"
  },
  "ไมโล": {
    "phonetic": "milo",
    "meaning": "米洛"
  },
  "ไลลา": {
    "phonetic": "lilaa",
    "meaning": "莱拉"
  },
  "พีต้า": {
    "phonetic": "phii taa",
    "meaning": "皮塔"
  },
  "ดูมันสิ": {
    "phonetic": "duu man si",
    "meaning": "看看它"
  },
  "ฮันน่า": {
    "phonetic": "han naa",
    "meaning": "汉娜"
  },
  "เราควร": {
    "phonetic": "reaa khwr",
    "meaning": "我们应该"
  },
  "ลื่": {
    "phonetic": "lue",
    "meaning": "滑"
  },
  "โฮะ": {
    "phonetic": "hoa",
    "meaning": "嗬"
  },
  "ตินติน": {
    "phonetic": "tin tin",
    "meaning": "丁丁"
  },
  "ไอรีน": {
    "phonetic": "oi riin",
    "meaning": "艾琳"
  },
  "แจซอก": {
    "phonetic": "chæ sok",
    "meaning": "杰苏克"
  },
  "โบลท์": {
    "phonetic": "bolth",
    "meaning": "螺栓"
  },
  "แต่จริง": {
    "phonetic": "tæ chring",
    "meaning": "但事实如此"
  },
  "แต่เรา": {
    "phonetic": "tæ reaa",
    "meaning": "但我们"
  },
  "ทำได้": {
    "phonetic": "thadi",
    "meaning": "可以做到"
  },
  "ก็พอ": {
    "phonetic": "kpho",
    "meaning": "这就够了"
  },
  "อะนะ": {
    "phonetic": "oana",
    "meaning": "啊"
  },
  "เหตุผล": {
    "phonetic": "etuphl",
    "meaning": "原因"
  },
  "พบ": {
    "phonetic": "phb",
    "meaning": "成立"
  },
  "แมนดี้": {
    "phonetic": "mæn dii",
    "meaning": "曼迪"
  },
  "อยู่ดีๆ": {
    "phonetic": "oyuu dii«",
    "meaning": "突然"
  },
  "ดาบ": {
    "phonetic": "daab",
    "meaning": "剑"
  },
  "เดวอน": {
    "phonetic": "de won",
    "meaning": "德文郡"
  },
  "ลอส": {
    "phonetic": "los",
    "meaning": "洛斯"
  },
  "ท่านลุง": {
    "phonetic": "thaan lung",
    "meaning": "叔叔"
  },
  "วอลลี่": {
    "phonetic": "wo l lii",
    "meaning": "沃利"
  },
  "เหลือ": {
    "phonetic": "elueo",
    "meaning": "剩下的"
  },
  "กุ๊กจา": {
    "phonetic": "kuk chaa",
    "meaning": "库克贾"
  },
  "วิ่งไป": {
    "phonetic": "wing pi",
    "meaning": "跑步"
  },
  "ผบ": {
    "phonetic": "phb",
    "meaning": "指挥官"
  },
  "เอ่อคือ": {
    "phonetic": "oeo khueo",
    "meaning": "嗯就是这样"
  },
  "หละ": {
    "phonetic": "la",
    "meaning": "拉"
  },
  "ฮัมเมล": {
    "phonetic": "ham mel",
    "meaning": "胡梅尔"
  },
  "บุช": {
    "phonetic": "buchh",
    "meaning": "衬套"
  },
  "ดอโรธี": {
    "phonetic": "do rothii",
    "meaning": "多萝西"
  },
  "คล๊าก": {
    "phonetic": "khlaak",
    "meaning": "克拉克"
  },
  "นาเซอร์": {
    "phonetic": "naa seor",
    "meaning": "纳齐尔"
  },
  "วิญญาณ": {
    "phonetic": "wiayaan",
    "meaning": "精神"
  },
  "ก็ใช่นะ": {
    "phonetic": "k chhı na",
    "meaning": "这是正确的"
  },
  "รักคุณ": {
    "phonetic": "rak khun",
    "meaning": "爱你"
  },
  "ที่คุณ": {
    "phonetic": "thii khun",
    "meaning": "对你"
  },
  "เลสลี่": {
    "phonetic": "le slii",
    "meaning": "莱斯利"
  },
  "ริช": {
    "phonetic": "richh",
    "meaning": "富有的"
  },
  "จดหมาย": {
    "phonetic": "chdmaay",
    "meaning": "信"
  },
  "จูวอน": {
    "phonetic": "chuu won",
    "meaning": "朱元"
  },
  "เคนจิ": {
    "phonetic": "khen chi",
    "meaning": "健二"
  },
  "เวิร์น": {
    "phonetic": "weirn",
    "meaning": "弗恩"
  },
  "ชูจิ": {
    "phonetic": "chhuuchi",
    "meaning": "丘吉"
  },
  "บอร์น": {
    "phonetic": "born",
    "meaning": "出生了"
  },
  "พลัง": {
    "phonetic": "phlang",
    "meaning": "力量"
  },
  "มีคนมา": {
    "phonetic": "mii khn maa",
    "meaning": "有人来了"
  },
  "แกรนท์": {
    "phonetic": "kæ rnth",
    "meaning": "授予"
  },
  "เหล้า": {
    "phonetic": "elaa",
    "meaning": "酒"
  },
  "รถไฟ": {
    "phonetic": "rthfi",
    "meaning": "火车"
  },
  "แต่เอ่อ": {
    "phonetic": "tæ oeo",
    "meaning": "但是呃"
  },
  "ติดต่อ": {
    "phonetic": "tidto",
    "meaning": "接触"
  },
  "อัยการ": {
    "phonetic": "oaykaar",
    "meaning": "检察官"
  },
  "ตอบมา": {
    "phonetic": "tob maa",
    "meaning": "回答我"
  },
  "น้อง": {
    "phonetic": "nong",
    "meaning": "妹妹"
  },
  "ปะ": {
    "phonetic": "pa",
    "meaning": "帕"
  },
  "มาร์รี": {
    "phonetic": "maar rii",
    "meaning": "结婚吧"
  },
  "ดาจี": {
    "phonetic": "daachii",
    "meaning": "妲己"
  },
  "คอยดูนะ": {
    "phonetic": "khoy duu na",
    "meaning": "等等看"
  },
  "ร๊อบ": {
    "phonetic": "rob",
    "meaning": "抢"
  },
  "ดาน่า": {
    "phonetic": "daa naa",
    "meaning": "达纳"
  },
  "เอลซ่า": {
    "phonetic": "oel saa",
    "meaning": "艾尔莎"
  },
  "วันเกิด": {
    "phonetic": "wan keid",
    "meaning": "生日"
  },
  "ใกล้ๆ": {
    "phonetic": "kıl«",
    "meaning": "附近"
  },
  "เค้ก": {
    "phonetic": "khek",
    "meaning": "蛋糕"
  },
  "เออสิ": {
    "phonetic": "oeo si",
    "meaning": "是的"
  },
  "คอร์ป": {
    "phonetic": "khorp",
    "meaning": "公司"
  },
  "ประเทศ": {
    "phonetic": "prathes",
    "meaning": "国家"
  },
  "โมนา": {
    "phonetic": "monaa",
    "meaning": "莫娜"
  },
  "บ้างไหม": {
    "phonetic": "baang im",
    "meaning": "你有吗"
  },
  "อำนาจ": {
    "phonetic": "oanaach",
    "meaning": "力量"
  },
  "เบล": {
    "phonetic": "bel",
    "meaning": "钟"
  },
  "ฮื่อ": {
    "phonetic": "hueo",
    "meaning": "呵呵"
  },
  "อย่าน่า": {
    "phonetic": "oyaa naa",
    "meaning": "请不要"
  },
  "บารอน": {
    "phonetic": "baaron",
    "meaning": "男爵"
  },
  "สนุก": {
    "phonetic": "snuk",
    "meaning": "乐趣"
  },
  "โรดส์": {
    "phonetic": "rods",
    "meaning": "罗德斯"
  },
  "นานามิ": {
    "phonetic": "naanaa mi",
    "meaning": "七海"
  },
  "สีเขียว": {
    "phonetic": "sii kheiiaw",
    "meaning": "绿色的"
  },
  "มันติด": {
    "phonetic": "man tid",
    "meaning": "它被卡住了"
  },
  "ทิ้งปืน": {
    "phonetic": "thing puen",
    "meaning": "把枪扔掉"
  },
  "สงสัย": {
    "phonetic": "sngsay",
    "meaning": "想知道"
  },
  "ซิดนีย์": {
    "phonetic": "sidniia",
    "meaning": "悉尼"
  },
  "นักฆ่า": {
    "phonetic": "nak khaa",
    "meaning": "杀手"
  },
  "มิทช์": {
    "phonetic": "mi thchh",
    "meaning": "米奇"
  },
  "ลูน่า": {
    "phonetic": "luu naa",
    "meaning": "卢娜"
  },
  "สายแล้ว": {
    "phonetic": "saay læw",
    "meaning": "现在已经晚了"
  },
  "โมเน": {
    "phonetic": "mone",
    "meaning": "莫内"
  },
  "โมโมโกะ": {
    "phonetic": "mo mo koa",
    "meaning": "桃子"
  },
  "ซึคุชิ": {
    "phonetic": "sue khu chhi",
    "meaning": "筑志"
  },
  "ทะเล": {
    "phonetic": "thale",
    "meaning": "海"
  },
  "ยัยโง่": {
    "phonetic": "yay ngo",
    "meaning": "愚蠢的女孩"
  },
  "คลาก": {
    "phonetic": "khlaak",
    "meaning": "克拉克"
  },
  "บาง": {
    "phonetic": "baang",
    "meaning": "薄的"
  },
  "รูธี": {
    "phonetic": "ruuthii",
    "meaning": "露丝"
  },
  "นักโทษ": {
    "phonetic": "nakthosʹ",
    "meaning": "囚犯"
  },
  "โทรมานะ": {
    "phonetic": "thor maana",
    "meaning": "打电话给我"
  },
  "แคทนิส": {
    "phonetic": "khæ thnis",
    "meaning": "凯特尼斯"
  },
  "อายะ": {
    "phonetic": "oaaya",
    "meaning": "绫"
  },
  "มาม่า": {
    "phonetic": "maa maa",
    "meaning": "妈妈"
  },
  "ภรรยาผม": {
    "phonetic": "phhrryaa phm",
    "meaning": "我的妻子"
  },
  "ฮอทช์": {
    "phonetic": "hothchh",
    "meaning": "霍奇"
  },
  "เกิน": {
    "phonetic": "kein",
    "meaning": "超过"
  },
  "ไม่อยู่": {
    "phonetic": "mi oyuu",
    "meaning": "不在这里"
  },
  "ว่ะ": {
    "phonetic": "wa",
    "meaning": "哇"
  },
  "กับเรา": {
    "phonetic": "kab reaa",
    "meaning": "和我们一起"
  },
  "แหละ": {
    "phonetic": "æla",
    "meaning": "这是正确的"
  },
  "ซาเอะ": {
    "phonetic": "saa oea",
    "meaning": "萨埃"
  },
  "ค้นหา": {
    "phonetic": "khnaa",
    "meaning": "搜索"
  },
  "ใช่ใหม": {
    "phonetic": "chhı ım",
    "meaning": "是这样吗"
  },
  "แล้วฉัน": {
    "phonetic": "læw chhan",
    "meaning": "然后我"
  },
  "ฮิโรชิ": {
    "phonetic": "hi ro chhi",
    "meaning": "宏"
  },
  "ทุกเวลา": {
    "phonetic": "thuk welaa",
    "meaning": "每次"
  },
  "ฟังนะคะ": {
    "phonetic": "fang na kha",
    "meaning": "听"
  },
  "ได้คะ": {
    "phonetic": "di kha",
    "meaning": "你可以"
  },
  "โชคชะตา": {
    "phonetic": "chhokh chhataa",
    "meaning": "命运"
  },
  "หาต่อไป": {
    "phonetic": "aa to pi",
    "meaning": "继续寻找"
  },
  "ไบรอน": {
    "phonetic": "bi ron",
    "meaning": "拜伦"
  },
  "ถ้าฉัน": {
    "phonetic": "thaa chhan",
    "meaning": "如果我"
  },
  "จื่อซู่": {
    "phonetic": "chueo suu",
    "meaning": "紫苏"
  },
  "แฮริสัน": {
    "phonetic": "hæ ri san",
    "meaning": "哈里森"
  },
  "มองผมสิ": {
    "phonetic": "mong phm si",
    "meaning": "看着我"
  },
  "ที่สุด": {
    "phonetic": "thiisud",
    "meaning": "最好的"
  },
  "เอบิลีน": {
    "phonetic": "oe bi liin",
    "meaning": "阿比林"
  },
  "บาร์บี้": {
    "phonetic": "baar bii",
    "meaning": "芭比"
  },
  "เฮเลน่า": {
    "phonetic": "he len aa",
    "meaning": "海伦娜"
  },
  "แผนที่": {
    "phonetic": "phænthii",
    "meaning": "地图"
  },
  "ชุล": {
    "phonetic": "chhul",
    "meaning": "楚尔"
  },
  "เกตส์": {
    "phonetic": "kets",
    "meaning": "盖茨"
  },
  "ยูตะ": {
    "phonetic": "yuuta",
    "meaning": "裕太"
  },
  "ประหลาด": {
    "phonetic": "pralaad",
    "meaning": "诡异的"
  },
  "ลีน่า": {
    "phonetic": "lii naa",
    "meaning": "莉娜"
  },
  "มีคุณไป": {
    "phonetic": "mii khun pi",
    "meaning": "就这样吧"
  },
  "โจแฮนนา": {
    "phonetic": "cho hæ n naa",
    "meaning": "约翰娜"
  },
  "โลอิส": {
    "phonetic": "lo ois",
    "meaning": "路易斯"
  },
  "พูดจริง": {
    "phonetic": "phuud chring",
    "meaning": "说实话"
  },
  "ไมล์ส": {
    "phonetic": "mil s",
    "meaning": "迈尔斯"
  },
  "เนื้อ": {
    "phonetic": "neueo",
    "meaning": "肉"
  },
  "มาร์นี่": {
    "phonetic": "maar nii",
    "meaning": "玛妮"
  },
  "ทารก": {
    "phonetic": "thaark",
    "meaning": "婴儿"
  },
  "ครับแม่": {
    "phonetic": "khrab mæ",
    "meaning": "是的妈妈"
  },
  "โจน่าห์": {
    "phonetic": "cho naa",
    "meaning": "乔纳"
  },
  "ถามทำไม": {
    "phonetic": "thaam thami",
    "meaning": "你为什么问"
  },
  "ย่ะ": {
    "phonetic": "ya",
    "meaning": "是的"
  },
  "อิสระ": {
    "phonetic": "oisra",
    "meaning": "自由的"
  },
  "ข้อมูล": {
    "phonetic": "khomuul",
    "meaning": "信息"
  },
  "เคจ": {
    "phonetic": "khech",
    "meaning": "笼"
  },
  "มานะ": {
    "phonetic": "maana",
    "meaning": "快点"
  },
  "ลึก": {
    "phonetic": "luek",
    "meaning": "深的"
  },
  "ช่อง": {
    "phonetic": "chhong",
    "meaning": "渠道"
  },
  "ก็ถูก": {
    "phonetic": "k thuuk",
    "meaning": "这是正确的"
  },
  "ดิมิทรี": {
    "phonetic": "di mi thrii",
    "meaning": "迪米特里"
  },
  "รูปหล่อ": {
    "phonetic": "ruup lo",
    "meaning": "帅气的身材"
  },
  "ผู้ชนะ": {
    "phonetic": "phuu chhna",
    "meaning": "优胜者"
  },
  "ทำไมค่ะ": {
    "phonetic": "thami kha",
    "meaning": "为什么"
  },
  "ไปหา": {
    "phonetic": "piaa",
    "meaning": "去找吧"
  },
  "อลาริค": {
    "phonetic": "o laa rikh",
    "meaning": "阿拉里克"
  },
  "อิชิดะ": {
    "phonetic": "oi chhi da",
    "meaning": "石田"
  },
  "เคล้าส์": {
    "phonetic": "khelaa s",
    "meaning": "克劳斯"
  },
  "มาย": {
    "phonetic": "maay",
    "meaning": "我的"
  },
  "บ้าจัง": {
    "phonetic": "baa chang",
    "meaning": "太疯狂了"
  },
  "เบิร์น": {
    "phonetic": "beirn",
    "meaning": "烧伤"
  },
  "อีหนู": {
    "phonetic": "oii nuu",
    "meaning": "电子不"
  },
  "รู้ว่า": {
    "phonetic": "ruu waa",
    "meaning": "知道这一点"
  },
  "แอสทริด": {
    "phonetic": "oæ s thrid",
    "meaning": "阿斯特丽德"
  },
  "รวมทั้ง": {
    "phonetic": "rwm thang",
    "meaning": "包括"
  },
  "แล้วกัน": {
    "phonetic": "læw kan",
    "meaning": "然后"
  },
  "คนหนึ่ง": {
    "phonetic": "khn nueng",
    "meaning": "一个人"
  },
  "เดวิท": {
    "phonetic": "de with",
    "meaning": "大卫"
  },
  "แม่ขา": {
    "phonetic": "mæ khaa",
    "meaning": "母亲"
  },
  "ทั้งวัน": {
    "phonetic": "thang wan",
    "meaning": "一整天"
  },
  "เวสต์": {
    "phonetic": "west",
    "meaning": "西方"
  },
  "อินดี้": {
    "phonetic": "oin dii",
    "meaning": "独立"
  },
  "ทูนหัว": {
    "phonetic": "thuunaw",
    "meaning": "教父"
  },
  "ทุกคืน": {
    "phonetic": "thuk khuen",
    "meaning": "每个晚上"
  },
  "วิธีนี้": {
    "phonetic": "withii nii",
    "meaning": "这边走"
  },
  "ฉันดีใจ": {
    "phonetic": "chhan diichı",
    "meaning": "我很高兴"
  },
  "ยองรัน": {
    "phonetic": "yong ran",
    "meaning": "英兰"
  },
  "เลาด้า": {
    "phonetic": "leaa daa",
    "meaning": "劳达"
  },
  "ฟัสโก้": {
    "phonetic": "fas ko",
    "meaning": "富斯科"
  },
  "ชัยชนะ": {
    "phonetic": "chhaychhna",
    "meaning": "胜利"
  },
  "วอล์ท": {
    "phonetic": "wolth",
    "meaning": "沃尔特"
  },
  "คืนก่อน": {
    "phonetic": "khuen kon",
    "meaning": "前一天晚上"
  },
  "มีปัญหา": {
    "phonetic": "mii payaa",
    "meaning": "有问题"
  },
  "พี่ฮะ": {
    "phonetic": "phii ha",
    "meaning": "兄弟"
  },
  "เมเยอร์": {
    "phonetic": "me yeo r",
    "meaning": "迈耶"
  },
  "ปัดโธ่": {
    "phonetic": "pad tho",
    "meaning": "该死的"
  },
  "ห้านาที": {
    "phonetic": "aa naathii",
    "meaning": "五分钟"
  },
  "มิกกี้": {
    "phonetic": "mi kkii",
    "meaning": "米奇"
  },
  "แจ๊คสัน": {
    "phonetic": "chækh san",
    "meaning": "杰克逊"
  },
  "กินเลย": {
    "phonetic": "kin lei",
    "meaning": "现在吃吧"
  },
  "อาคาริ": {
    "phonetic": "oaa khaa ri",
    "meaning": "阿卡里"
  },
  "โชจิ": {
    "phonetic": "chhochi",
    "meaning": "庄治"
  },
  "ทุกที่": {
    "phonetic": "thuk thii",
    "meaning": "到处"
  },
  "สักครู่": {
    "phonetic": "sak khruu",
    "meaning": "一会儿"
  },
  "หมื่น": {
    "phonetic": "muen",
    "meaning": "万"
  },
  "ปฏิเสธ": {
    "phonetic": "ptiseth",
    "meaning": "拒绝"
  },
  "คุณอา": {
    "phonetic": "khun oaa",
    "meaning": "叔叔"
  },
  "คลาร์ค": {
    "phonetic": "khlaa rkh",
    "meaning": "克拉克"
  },
  "ครูครับ": {
    "phonetic": "khruu khrab",
    "meaning": "老师"
  },
  "คนใหม่": {
    "phonetic": "khn ım",
    "meaning": "新人"
  },
  "เวรล่ะ": {
    "phonetic": "wer la",
    "meaning": "搞什么鬼"
  },
  "ไซลัส": {
    "phonetic": "si las",
    "meaning": "塞拉斯"
  },
  "รึยัง": {
    "phonetic": "rue yang",
    "meaning": "还没有"
  },
  "ควิน": {
    "phonetic": "khwin",
    "meaning": "奎因"
  },
  "บู": {
    "phonetic": "buu",
    "meaning": "嘘"
  },
  "ซูเคร": {
    "phonetic": "suu kher",
    "meaning": "苏克雷"
  },
  "อ้าปาก": {
    "phonetic": "oaa paak",
    "meaning": "张开嘴"
  },
  "รัสเซีย": {
    "phonetic": "rasseiia",
    "meaning": "俄罗斯"
  },
  "มิลลี่": {
    "phonetic": "mi l lii",
    "meaning": "米莉"
  },
  "อายูมุ": {
    "phonetic": "oaa yuu mu",
    "meaning": "阿玉木"
  },
  "นับ": {
    "phonetic": "nab",
    "meaning": "数数"
  },
  "เลิกกัน": {
    "phonetic": "leik kan",
    "meaning": "拆散"
  },
  "เฮจู": {
    "phonetic": "hechuu",
    "meaning": "何居"
  },
  "เกว็น": {
    "phonetic": "kewn",
    "meaning": "格温"
  },
  "เซลฟ์": {
    "phonetic": "sel f",
    "meaning": "自己"
  },
  "เกมส์": {
    "phonetic": "kems",
    "meaning": "游戏"
  },
  "เอาใหม่": {
    "phonetic": "oeaa ım",
    "meaning": "再拿一下"
  },
  "สามีฉัน": {
    "phonetic": "saamii chhan",
    "meaning": "我的丈夫"
  },
  "คอเนอร์": {
    "phonetic": "kho neo r",
    "meaning": "康纳"
  },
  "ยิงสิ": {
    "phonetic": "ying si",
    "meaning": "射击"
  },
  "รับไปสิ": {
    "phonetic": "rab pi si",
    "meaning": "拿走吧"
  },
  "ต่อเลย": {
    "phonetic": "to lei",
    "meaning": "继续"
  },
  "ทาโร่": {
    "phonetic": "thaa ro",
    "meaning": "芋头"
  },
  "ริคุ": {
    "phonetic": "rikhu",
    "meaning": "利库"
  },
  "ดีสิ": {
    "phonetic": "diisi",
    "meaning": "好的"
  },
  "โอเวน": {
    "phonetic": "oo wen",
    "meaning": "欧文"
  },
  "ทะ": {
    "phonetic": "tha",
    "meaning": "Th"
  },
  "น่ะครับ": {
    "phonetic": "na khrab",
    "meaning": "是的"
  },
  "โฮล์มส์": {
    "phonetic": "holms",
    "meaning": "福尔摩斯"
  },
  "สโตน": {
    "phonetic": "ston",
    "meaning": "石头"
  },
  "อีกนิด": {
    "phonetic": "oiik nid",
    "meaning": "再多一点"
  },
  "ไสหัวไป": {
    "phonetic": "siaw pi",
    "meaning": "离开"
  },
  "หรอคะ": {
    "phonetic": "ro kha",
    "meaning": "真的吗"
  },
  "มาโกะ": {
    "phonetic": "maa koa",
    "meaning": "马科"
  },
  "ผิวขาว": {
    "phonetic": "phiw khaaw",
    "meaning": "皮肤白"
  },
  "ราว": {
    "phonetic": "raaw",
    "meaning": "大约"
  },
  "อุค": {
    "phonetic": "oukh",
    "meaning": "英国"
  },
  "ฮุสตัน": {
    "phonetic": "hus tan",
    "meaning": "休斯顿"
  },
  "บัม": {
    "phonetic": "bam",
    "meaning": "屁股"
  },
  "กันเถอะ": {
    "phonetic": "kan theoa",
    "meaning": "我们走吧"
  },
  "ไม่นิ": {
    "phonetic": "mi ni",
    "meaning": "一点也不"
  },
  "คนเก่ง": {
    "phonetic": "khn keng",
    "meaning": "聪明人"
  },
  "เดอร์": {
    "phonetic": "de or",
    "meaning": "德"
  },
  "น้า": {
    "phonetic": "naa",
    "meaning": "叔叔"
  },
  "เห็นไม๊": {
    "phonetic": "en mi",
    "meaning": "你有没有看到"
  },
  "แบร์": {
    "phonetic": "bær",
    "meaning": "熊"
  },
  "เอริก": {
    "phonetic": "oe rik",
    "meaning": "埃里克"
  },
  "ลูซ": {
    "phonetic": "luus",
    "meaning": "卢斯"
  },
  "ไม่เป็น": {
    "phonetic": "mi pen",
    "meaning": "我不知道"
  },
  "อุ๊ยตาย": {
    "phonetic": "ouy taay",
    "meaning": "哎哟"
  },
  "ซารู": {
    "phonetic": "saaruu",
    "meaning": "萨鲁"
  },
  "เซ็กส์": {
    "phonetic": "sek s",
    "meaning": "性别"
  },
  "โว๊ว": {
    "phonetic": "wow",
    "meaning": "哇"
  },
  "ทาคุมิ": {
    "phonetic": "thaa khu mi",
    "meaning": "拓海"
  },
  "เลยเหรอ": {
    "phonetic": "lei e ro",
    "meaning": "真的吗"
  },
  "ลองสิ": {
    "phonetic": "long si",
    "meaning": "尝试一下"
  },
  "ปองโย่": {
    "phonetic": "pong yo",
    "meaning": "彭约"
  },
  "ครึ่ง": {
    "phonetic": "khrueng",
    "meaning": "一半"
  },
  "บอกอะไร": {
    "phonetic": "bok oari",
    "meaning": "你说什么"
  },
  "ออสก้า": {
    "phonetic": "oo skaa",
    "meaning": "奥斯卡"
  },
  "ใช่ๆๆ": {
    "phonetic": "chhı« «",
    "meaning": "是的是的"
  },
  "ถอยกลับ": {
    "phonetic": "thoy klab",
    "meaning": "撤退"
  },
  "แจ๋วมาก": {
    "phonetic": "chæw maak",
    "meaning": "非常酷"
  },
  "บอม": {
    "phonetic": "bom",
    "meaning": "邦"
  },
  "จุดนี้": {
    "phonetic": "chud nii",
    "meaning": "这一点"
  },
  "คำตอบ": {
    "phonetic": "kha tob",
    "meaning": "回答"
  },
  "เจิดจ้า": {
    "phonetic": "cheid chaa",
    "meaning": "明亮的"
  },
  "ฮิวจ์": {
    "phonetic": "hi wch",
    "meaning": "休"
  },
  "พูดถึง": {
    "phonetic": "phuud thueng",
    "meaning": "谈论一下"
  },
  "ป่ะ": {
    "phonetic": "pa",
    "meaning": "是的"
  },
  "เดเร็ก": {
    "phonetic": "derek",
    "meaning": "德里克"
  },
  "ของจริง": {
    "phonetic": "khong chring",
    "meaning": "真实的事情"
  },
  "คีย์ร่า": {
    "phonetic": "khiia raa",
    "meaning": "凯拉"
  },
  "ฮิล": {
    "phonetic": "hil",
    "meaning": "爬坡道"
  },
  "บัน": {
    "phonetic": "ban",
    "meaning": "禁止"
  },
  "อ่ะนะ": {
    "phonetic": "oa na",
    "meaning": "啊"
  },
  "จริงอ้ะ": {
    "phonetic": "chring oa",
    "meaning": "这是真的"
  },
  "ยอด": {
    "phonetic": "yod",
    "meaning": "哟"
  },
  "หายใจสิ": {
    "phonetic": "aaychı si",
    "meaning": "呼吸"
  },
  "แม็ค": {
    "phonetic": "mækh",
    "meaning": "苹果"
  },
  "แย่ล่ะ": {
    "phonetic": "yæ la",
    "meaning": "那很糟糕"
  },
  "เจ็บจัง": {
    "phonetic": "cheb chang",
    "meaning": "太疼了"
  },
  "โจ๊บ": {
    "phonetic": "chob",
    "meaning": "工作"
  },
  "และมัน": {
    "phonetic": "læa man",
    "meaning": "还有它"
  },
  "หยุดๆ": {
    "phonetic": "yud«",
    "meaning": "停止"
  },
  "ตัวเลข": {
    "phonetic": "tawlekh",
    "meaning": "数字"
  },
  "กระแอม": {
    "phonetic": "kraoæm",
    "meaning": "清清喉咙"
  },
  "ริวซากิ": {
    "phonetic": "riw saaki",
    "meaning": "龙崎"
  },
  "ส่วนตัว": {
    "phonetic": "swn taw",
    "meaning": "个人的"
  },
  "ทอง": {
    "phonetic": "thong",
    "meaning": "金子"
  },
  "แจอิน": {
    "phonetic": "chæ oin",
    "meaning": "在仁"
  },
  "ต่อสู้": {
    "phonetic": "tosuu",
    "meaning": "斗争"
  },
  "ใส่": {
    "phonetic": "sı",
    "meaning": "进入"
  },
  "ฮัด": {
    "phonetic": "had",
    "meaning": "平视显示器"
  },
  "แข็งแรง": {
    "phonetic": "khæng ræng",
    "meaning": "强的"
  },
  "กิ": {
    "phonetic": "ki",
    "meaning": "基"
  },
  "เม็ก": {
    "phonetic": "mek",
    "meaning": "梅格"
  },
  "ด้าน": {
    "phonetic": "daan",
    "meaning": "边"
  },
  "มิน่า": {
    "phonetic": "minaa",
    "meaning": "怪不得"
  },
  "บ้าฉิบ": {
    "phonetic": "baa chhib",
    "meaning": "完全疯了"
  },
  "นี่แก": {
    "phonetic": "nii kæ",
    "meaning": "给你"
  },
  "ฮุนซู": {
    "phonetic": "hun suu",
    "meaning": "贤秀"
  },
  "อุ๊บส์": {
    "phonetic": "oubs",
    "meaning": "哎呀"
  },
  "โนบิตะ": {
    "phonetic": "no bi ta",
    "meaning": "大雄"
  },
  "เหี้ย": {
    "phonetic": "eiia",
    "meaning": "该死"
  },
  "ลูกข้า": {
    "phonetic": "luuk khaa",
    "meaning": "我的儿子"
  },
  "จิโร่": {
    "phonetic": "chi ro",
    "meaning": "二郎"
  },
  "รัฐ": {
    "phonetic": "rath",
    "meaning": "状态"
  },
  "ค่ะแม่": {
    "phonetic": "kha mæ",
    "meaning": "是的妈妈"
  },
  "ตำแหน่ง": {
    "phonetic": "taænng",
    "meaning": "位置"
  },
  "โจดี้": {
    "phonetic": "cho dii",
    "meaning": "乔迪"
  },
  "ซอนนี่": {
    "phonetic": "son nii",
    "meaning": "桑尼"
  },
  "ฟูจิ": {
    "phonetic": "fuuchi",
    "meaning": "富士"
  },
  "เดนิส": {
    "phonetic": "deni s",
    "meaning": "丹尼斯"
  },
  "อยู่นะ": {
    "phonetic": "oyuu na",
    "meaning": "我在这儿"
  },
  "ถึงแม้": {
    "phonetic": "thueng mæ",
    "meaning": "虽然"
  },
  "แม๊กซ์": {
    "phonetic": "mæks",
    "meaning": "最大限度"
  },
  "งู": {
    "phonetic": "nguu",
    "meaning": "蛇"
  },
  "ฮัตโตริ": {
    "phonetic": "hat to ri",
    "meaning": "服部"
  },
  "แต่ใช่": {
    "phonetic": "tæ chhı",
    "meaning": "但是是的"
  },
  "หลีกทาง": {
    "phonetic": "liik thaang",
    "meaning": "走开"
  },
  "ทอดด์": {
    "phonetic": "thod d",
    "meaning": "托德"
  },
  "โยโกยะ": {
    "phonetic": "yo ko ya",
    "meaning": "横哉"
  },
  "โดนัลด์": {
    "phonetic": "dona ld",
    "meaning": "唐纳德"
  },
  "เกลน": {
    "phonetic": "keln",
    "meaning": "格伦"
  },
  "เม็ด": {
    "phonetic": "med",
    "meaning": "片剂"
  },
  "จามาล": {
    "phonetic": "chaa maal",
    "meaning": "贾马尔"
  },
  "จูโน่": {
    "phonetic": "chuu no",
    "meaning": "朱诺"
  },
  "แม่ผม": {
    "phonetic": "mæ phm",
    "meaning": "我的母亲"
  },
  "คลอเดีย": {
    "phonetic": "khlo deiia",
    "meaning": "克劳迪娅"
  },
  "บอกสิ": {
    "phonetic": "bok si",
    "meaning": "告诉我"
  },
  "อีแวน": {
    "phonetic": "oii wæn",
    "meaning": "埃文"
  },
  "เหวอ": {
    "phonetic": "ewo",
    "meaning": "深渊"
  },
  "คนๆ": {
    "phonetic": "khn«",
    "meaning": "人们"
  },
  "ลูกฉัน": {
    "phonetic": "luuk chhan",
    "meaning": "我的孩子"
  },
  "ฟรี": {
    "phonetic": "frii",
    "meaning": "自由的"
  },
  "แทจุน": {
    "phonetic": "thæ chun",
    "meaning": "泰俊"
  },
  "ขาย": {
    "phonetic": "khaay",
    "meaning": "出售"
  },
  "ตาม": {
    "phonetic": "taam",
    "meaning": "跟随"
  },
  "ล่ะก็": {
    "phonetic": "la k",
    "meaning": "嗯就是这样"
  },
  "มาคัส": {
    "phonetic": "maa khas",
    "meaning": "马库斯"
  },
  "เกรต้า": {
    "phonetic": "ke rtaa",
    "meaning": "格蕾塔"
  },
  "ริ": {
    "phonetic": "ri",
    "meaning": "里"
  },
  "ออกมานะ": {
    "phonetic": "ook maana",
    "meaning": "出来"
  },
  "อีฟวา": {
    "phonetic": "oiif waa",
    "meaning": "前夕"
  },
  "ซอ": {
    "phonetic": "so",
    "meaning": "锯"
  },
  "ตัวเล็ก": {
    "phonetic": "taw lek",
    "meaning": "身体小"
  },
  "ปล่อยสิ": {
    "phonetic": "ploy si",
    "meaning": "松手"
  },
  "ฮานะ": {
    "phonetic": "haana",
    "meaning": "哈娜"
  },
  "โจแอน": {
    "phonetic": "cho oæn",
    "meaning": "琼"
  },
  "หนูแค่": {
    "phonetic": "nuu khæ",
    "meaning": "我只是"
  },
  "ช่า": {
    "phonetic": "chhaa",
    "meaning": "查"
  },
  "ไม่หล่ะ": {
    "phonetic": "mi la",
    "meaning": "不"
  },
  "มีคนตาย": {
    "phonetic": "mii khn taay",
    "meaning": "有人死了"
  },
  "โจนาส": {
    "phonetic": "cho naas",
    "meaning": "乔纳斯"
  },
  "ขนมปัง": {
    "phonetic": "khnmpang",
    "meaning": "面包"
  },
  "แทน": {
    "phonetic": "thæn",
    "meaning": "反而"
  },
  "กับอีก": {
    "phonetic": "kab oiik",
    "meaning": "与另一个"
  },
  "ริน": {
    "phonetic": "rin",
    "meaning": "倒"
  },
  "ดันน์": {
    "phonetic": "dan n",
    "meaning": "邓恩"
  },
  "ดูดีนี่": {
    "phonetic": "duu dii nii",
    "meaning": "看看这个"
  },
  "เอิ่มม": {
    "phonetic": "oeimm",
    "meaning": "嗯"
  },
  "เศร้า": {
    "phonetic": "seraa",
    "meaning": "伤心"
  },
  "ในเมื่อ": {
    "phonetic": "nı meueo",
    "meaning": "什么时候"
  },
  "ตัวฉัน": {
    "phonetic": "taw chhan",
    "meaning": "我"
  },
  "บาร์": {
    "phonetic": "baar",
    "meaning": "酒吧"
  },
  "อ่อใช่": {
    "phonetic": "oo chhı",
    "meaning": "哦是的"
  },
  "มิซึกิ": {
    "phonetic": "mi sueki",
    "meaning": "水木"
  },
  "ในเวลา": {
    "phonetic": "nı welaa",
    "meaning": "及时"
  },
  "น่ะสิ": {
    "phonetic": "na si",
    "meaning": "没错"
  },
  "แจ็คกี้": {
    "phonetic": "chækh kii",
    "meaning": "杰基"
  },
  "เจ้าลา": {
    "phonetic": "cheaa laa",
    "meaning": "驴子"
  },
  "โซลิส": {
    "phonetic": "so lis",
    "meaning": "索利斯"
  },
  "ต๊าย": {
    "phonetic": "taay",
    "meaning": "呼"
  },
  "บาบาร่า": {
    "phonetic": "baa baa raa",
    "meaning": "芭芭拉"
  },
  "คิระ": {
    "phonetic": "khira",
    "meaning": "基拉"
  },
  "บิลโบ": {
    "phonetic": "bil bo",
    "meaning": "比尔博"
  },
  "นั่นก็": {
    "phonetic": "nan k",
    "meaning": "就是这样"
  },
  "เคลวิน": {
    "phonetic": "khel win",
    "meaning": "开尔文"
  },
  "ชอง": {
    "phonetic": "chhong",
    "meaning": "渠道"
  },
  "ชั้นเอง": {
    "phonetic": "chhan oeng",
    "meaning": "这就是我"
  },
  "ทาคาชิ": {
    "phonetic": "thaa khaa chhi",
    "meaning": "隆"
  },
  "เมลแมน": {
    "phonetic": "mel mæn",
    "meaning": "梅尔曼"
  },
  "มิลส์": {
    "phonetic": "mi ls",
    "meaning": "米尔斯"
  },
  "ให้ได้": {
    "phonetic": "ı di",
    "meaning": "你可以做到的"
  },
  "ทำไมรึ": {
    "phonetic": "thami rue",
    "meaning": "为什么"
  },
  "มิชิมะ": {
    "phonetic": "mi chhi ma",
    "meaning": "三岛"
  },
  "คนแล้ว": {
    "phonetic": "khn læw",
    "meaning": "已经搅拌了"
  },
  "สี": {
    "phonetic": "sii",
    "meaning": "颜色"
  },
  "สตีเวน": {
    "phonetic": "stii wen",
    "meaning": "史蒂文"
  },
  "มาร์โค": {
    "phonetic": "maar kho",
    "meaning": "马可"
  },
  "เปิดไฟ": {
    "phonetic": "peid fi",
    "meaning": "打开灯"
  },
  "ทางซ้าย": {
    "phonetic": "thaang saay",
    "meaning": "向左转"
  },
  "เมิร์ฟ": {
    "phonetic": "meirf",
    "meaning": "墨菲"
  },
  "เช": {
    "phonetic": "chhe",
    "meaning": "车"
  },
  "ไปเร็วๆ": {
    "phonetic": "pi rew«",
    "meaning": "快点走吧"
  },
  "ดูดีนะ": {
    "phonetic": "duu dii na",
    "meaning": "看起来不错"
  },
  "แจฮี": {
    "phonetic": "chæhii",
    "meaning": "杰熙"
  },
  "ของข้า": {
    "phonetic": "khong khaa",
    "meaning": "矿"
  },
  "และอีก": {
    "phonetic": "læa oiik",
    "meaning": "还有另一个"
  },
  "ฮวัง": {
    "phonetic": "hwang",
    "meaning": "黄"
  },
  "ธุรกิจ": {
    "phonetic": "thurkich",
    "meaning": "商业"
  },
  "จัสมิน": {
    "phonetic": "chas min",
    "meaning": "茉莉花"
  },
  "ตลกนะ": {
    "phonetic": "tlk na",
    "meaning": "那很好笑"
  },
  "อะไรละ": {
    "phonetic": "oari la",
    "meaning": "什么"
  },
  "นิกกิ": {
    "phonetic": "ni kki",
    "meaning": "尼基"
  },
  "อารุช": {
    "phonetic": "oaa ruchh",
    "meaning": "阿鲁什"
  },
  "แอลเอ": {
    "phonetic": "oæl oe",
    "meaning": "洛杉矶"
  },
  "ไม่หรือ": {
    "phonetic": "mi rueo",
    "meaning": "或不"
  },
  "ก็แบบ": {
    "phonetic": "k bæb",
    "meaning": "就是这样"
  },
  "ตัวจริง": {
    "phonetic": "taw chring",
    "meaning": "真正的"
  },
  "แม่คุณ": {
    "phonetic": "mækhun",
    "meaning": "你的母亲"
  },
  "เข้าใจ๊": {
    "phonetic": "kheaa chı",
    "meaning": "我明白"
  },
  "เรียวตะ": {
    "phonetic": "reiiaw ta",
    "meaning": "良太"
  },
  "นั้นคือ": {
    "phonetic": "nan khueo",
    "meaning": "那是"
  },
  "อย่ามา": {
    "phonetic": "oyaa maa",
    "meaning": "别来"
  },
  "คแลร์": {
    "phonetic": "kh lær",
    "meaning": "克莱尔"
  },
  "อาชิยะ": {
    "phonetic": "oaa chhi ya",
    "meaning": "芦屋"
  },
  "ให้กับ": {
    "phonetic": "ı kab",
    "meaning": "给予"
  },
  "เชา": {
    "phonetic": "chheaa",
    "meaning": "周"
  },
  "โลล่า": {
    "phonetic": "lo laa",
    "meaning": "罗拉"
  },
  "มานามิ": {
    "phonetic": "maa naa mi",
    "meaning": "真奈美"
  },
  "มิลตัน": {
    "phonetic": "mil tan",
    "meaning": "米尔顿"
  },
  "อิชา": {
    "phonetic": "oichhaa",
    "meaning": "伊莎"
  },
  "เคฟ": {
    "phonetic": "khef",
    "meaning": "凯夫"
  },
  "อืมใช่": {
    "phonetic": "ouem chhı",
    "meaning": "嗯是的"
  },
  "ไม่ใช่ๆ": {
    "phonetic": "mi chhı«",
    "meaning": "不"
  },
  "ทุงกุน": {
    "phonetic": "thu ngkun",
    "meaning": "东贡"
  },
  "แท๊กซี่": {
    "phonetic": "thæk sii",
    "meaning": "出租车"
  },
  "โอกาส": {
    "phonetic": "ookaas",
    "meaning": "机会"
  },
  "ลงมือ": {
    "phonetic": "lngmueo",
    "meaning": "采取行动"
  },
  "โรคจิต": {
    "phonetic": "rokhchit",
    "meaning": "精神病"
  },
  "ตามไป": {
    "phonetic": "taam pi",
    "meaning": "跟着走吧"
  },
  "ลืมตาสิ": {
    "phonetic": "luemtaa si",
    "meaning": "睁开你的眼睛"
  },
  "เจค็อบ": {
    "phonetic": "che kh ob",
    "meaning": "雅各布"
  },
  "จริงง่ะ": {
    "phonetic": "chring nga",
    "meaning": "这是真的"
  },
  "นัตสึกิ": {
    "phonetic": "nat sueki",
    "meaning": "夏希"
  },
  "เทรนท์": {
    "phonetic": "the rnth",
    "meaning": "特伦特"
  },
  "พัก": {
    "phonetic": "phak",
    "meaning": "休息"
  },
  "บอกตรงๆ": {
    "phonetic": "bok trng«",
    "meaning": "老实告诉我"
  },
  "ให้เขา": {
    "phonetic": "ı kheaa",
    "meaning": "把它给他"
  },
  "หนะ": {
    "phonetic": "na",
    "meaning": "哈"
  },
  "เรอะ": {
    "phonetic": "reoa",
    "meaning": "真的吗"
  },
  "ซัน": {
    "phonetic": "san",
    "meaning": "太阳"
  },
  "โบสถ์": {
    "phonetic": "bosth",
    "meaning": "教会"
  },
  "ติดสิ": {
    "phonetic": "tid si",
    "meaning": "坚持下去"
  },
  "ดาร์เรน": {
    "phonetic": "daar ren",
    "meaning": "达伦"
  },
  "แพน": {
    "phonetic": "phæn",
    "meaning": "平底锅"
  },
  "ยอมแพ้": {
    "phonetic": "yom phæ",
    "meaning": "投降"
  },
  "หยุดซะ": {
    "phonetic": "yud sa",
    "meaning": "停止吧"
  },
  "รุ่น": {
    "phonetic": "run",
    "meaning": "模型"
  },
  "ปปส": {
    "phonetic": "pps",
    "meaning": "麻醉品管制局"
  },
  "ปีที่": {
    "phonetic": "pii thii",
    "meaning": "年"
  },
  "ช่วงตึก": {
    "phonetic": "chhwng tuek",
    "meaning": "堵塞"
  },
  "ห้องนอน": {
    "phonetic": "ong non",
    "meaning": "卧室"
  },
  "ยาพิษ": {
    "phonetic": "yaa phisʹ",
    "meaning": "毒"
  },
  "อารอน": {
    "phonetic": "oaa ron",
    "meaning": "亚伦"
  },
  "จักรวาล": {
    "phonetic": "chakrwaal",
    "meaning": "宇宙"
  },
  "ที่แน่ๆ": {
    "phonetic": "thii næ«",
    "meaning": "这是肯定的"
  },
  "บางสิ่ง": {
    "phonetic": "baang sing",
    "meaning": "某物"
  },
  "ฮึ่ม": {
    "phonetic": "huem",
    "meaning": "哼"
  },
  "บันทึก": {
    "phonetic": "banthuek",
    "meaning": "节省"
  },
  "เดาสิ": {
    "phonetic": "deaa si",
    "meaning": "猜测"
  },
  "ชอบมั้ย": {
    "phonetic": "chhob may",
    "meaning": "你喜欢它"
  },
  "กริฟฟิน": {
    "phonetic": "kriffin",
    "meaning": "格里芬"
  },
  "ฟลอยด์": {
    "phonetic": "f loy d",
    "meaning": "弗洛伊德"
  },
  "จริงค่ะ": {
    "phonetic": "chring kha",
    "meaning": "这是真的"
  },
  "แย่ละ": {
    "phonetic": "yæ la",
    "meaning": "那很糟糕"
  },
  "โนเอล": {
    "phonetic": "no oel",
    "meaning": "诺埃尔"
  },
  "บลู": {
    "phonetic": "bluu",
    "meaning": "蓝色的"
  },
  "รวดเร็ว": {
    "phonetic": "rwdrew",
    "meaning": "快速地"
  },
  "ข้าง": {
    "phonetic": "k��haang",
    "meaning": "边"
  },
  "ทีละคน": {
    "phonetic": "thii la khn",
    "meaning": "逐个"
  },
  "เฮย์": {
    "phonetic": "hei",
    "meaning": "嘿"
  },
  "คุยกัน": {
    "phonetic": "khuy kan",
    "meaning": "我们来谈谈吧"
  },
  "เทียน": {
    "phonetic": "theiian",
    "meaning": "蜡烛"
  },
  "อยู่ใน": {
    "phonetic": "oyuu nı",
    "meaning": "是在"
  },
  "เปิดมัน": {
    "phonetic": "peid man",
    "meaning": "打开它"
  },
  "ห๋า": {
    "phonetic": "aa",
    "meaning": "哈"
  },
  "เออๆ": {
    "phonetic": "oeo«",
    "meaning": "是的"
  },
  "เซธ": {
    "phonetic": "seth",
    "meaning": "赛斯"
  },
  "เดร์": {
    "phonetic": "der",
    "meaning": "德"
  },
  "แรนดอล": {
    "phonetic": "rændol",
    "meaning": "兰德尔"
  },
  "ไปไปไป": {
    "phonetic": "pi pi pi",
    "meaning": "去去去"
  },
  "ธรรมดา": {
    "phonetic": "thrrmdaa",
    "meaning": "普通的"
  },
  "ป๋า": {
    "phonetic": "paa",
    "meaning": "帕"
  },
  "ไท": {
    "phonetic": "thi",
    "meaning": "太"
  },
  "พี่รู้": {
    "phonetic": "phii ruu",
    "meaning": "我知道"
  },
  "หลอกลวง": {
    "phonetic": "lok lwng",
    "meaning": "具有欺骗性"
  },
  "เพราะผม": {
    "phonetic": "pheraaa phm",
    "meaning": "因为我"
  },
  "เลือก": {
    "phonetic": "leueok",
    "meaning": "选择"
  },
  "เกียร์": {
    "phonetic": "keiiar",
    "meaning": "齿轮"
  },
  "ตลอดมา": {
    "phonetic": "tlod maa",
    "meaning": "一直"
  },
  "แคลลี่": {
    "phonetic": "khæ l lii",
    "meaning": "凯莉"
  },
  "อีเดน": {
    "phonetic": "oii den",
    "meaning": "伊甸园"
  },
  "ฮิคคัพ": {
    "phonetic": "hi khkhaph",
    "meaning": "打嗝"
  },
  "แล้วนาย": {
    "phonetic": "læw naay",
    "meaning": "还有先生"
  },
  "เซ็น": {
    "phonetic": "sen",
    "meaning": "标志"
  },
  "เลอ": {
    "phonetic": "leo",
    "meaning": "勒"
  },
  "โรมิโอ": {
    "phonetic": "ro mi oo",
    "meaning": "罗密欧"
  },
  "อู้ววว": {
    "phonetic": "ouu www",
    "meaning": "哦"
  },
  "แชนนอน": {
    "phonetic": "chhæ n non",
    "meaning": "香农"
  },
  "อาาา": {
    "phonetic": "oaaaaaa",
    "meaning": "啊"
  },
  "ตรงโน้น": {
    "phonetic": "trng non",
    "meaning": "在那边"
  },
  "อากาเนะ": {
    "phonetic": "oaa kaa nea",
    "meaning": "阿金"
  },
  "เทสซ่า": {
    "phonetic": "thes saa",
    "meaning": "泰莎"
  },
  "ดึกแล้ว": {
    "phonetic": "duek læw",
    "meaning": "现在已经晚了"
  },
  "ดูแล้ว": {
    "phonetic": "duu læw",
    "meaning": "已经看过了"
  },
  "ตัน": {
    "phonetic": "tan",
    "meaning": "吨"
  },
  "เคนตะ": {
    "phonetic": "khen ta",
    "meaning": "健太"
  },
  "ชานติ": {
    "phonetic": "chhaan ti",
    "meaning": "香蒂"
  },
  "วู้วว": {
    "phonetic": "wuu ww",
    "meaning": "呜呼"
  },
  "เลว": {
    "phonetic": "lew",
    "meaning": "坏的"
  },
  "คือใคร": {
    "phonetic": "khueo khır",
    "meaning": "这是谁"
  },
  "เอมส์": {
    "phonetic": "oem s",
    "meaning": "艾姆斯"
  },
  "ติ๊ก": {
    "phonetic": "tik",
    "meaning": "打钩"
  },
  "ชิบหาย": {
    "phonetic": "chhi b aay",
    "meaning": "破碎的"
  },
  "ขยะ": {
    "phonetic": "khya",
    "meaning": "垃圾"
  },
  "บัวนา": {
    "phonetic": "baw naa",
    "meaning": "布阿纳"
  },
  "ถ้วย": {
    "phonetic": "thwy",
    "meaning": "杯子"
  },
  "นะค่ะ": {
    "phonetic": "na kha",
    "meaning": "是的"
  },
  "คูมาร์": {
    "phonetic": "khuu maar",
    "meaning": "库马尔"
  },
  "จอด": {
    "phonetic": "chod",
    "meaning": "公园"
  },
  "และทำไม": {
    "phonetic": "læa thami",
    "meaning": "以及为什么"
  },
  "ตลกจัง": {
    "phonetic": "tlk chang",
    "meaning": "太有趣了"
  },
  "ทางโน้น": {
    "phonetic": "thaang non",
    "meaning": "在那边"
  },
  "เอาจริง": {
    "phonetic": "oeaa chring",
    "meaning": "严重地"
  },
  "แถม": {
    "phonetic": "thæm",
    "meaning": "加"
  },
  "โอคจา": {
    "phonetic": "ookh chaa",
    "meaning": "好吧"
  },
  "เอ่อออ": {
    "phonetic": "oeo oo",
    "meaning": "呃哦"
  },
  "ออเดร์ย": {
    "phonetic": "oo dery",
    "meaning": "奥黛丽"
  },
  "ซูจิน": {
    "phonetic": "suu chin",
    "meaning": "苏进"
  },
  "เอามั้ย": {
    "phonetic": "oeaa may",
    "meaning": "你想要吗"
  },
  "มาร์วิน": {
    "phonetic": "maar win",
    "meaning": "马文"
  },
  "ปาก": {
    "phonetic": "paak",
    "meaning": "嘴"
  },
  "คัมปาย": {
    "phonetic": "kham paay",
    "meaning": "坎帕伊"
  },
  "ในป่า": {
    "phonetic": "nı paa",
    "meaning": "在森林里"
  },
  "จะเป็น": {
    "phonetic": "cha pen",
    "meaning": "将"
  },
  "ได้นะ": {
    "phonetic": "di na",
    "meaning": "你可以"
  },
  "หวานใจ": {
    "phonetic": "waan chı",
    "meaning": "亲爱的"
  },
  "สวัดดี": {
    "phonetic": "s wad dii",
    "meaning": "你好"
  },
  "หญิงสาว": {
    "phonetic": "ying saaw",
    "meaning": "年轻女子"
  },
  "ซ่อน": {
    "phonetic": "son",
    "meaning": "隐藏"
  },
  "พอดีเลย": {
    "phonetic": "phodii lei",
    "meaning": "正好"
  },
  "อย่าๆ": {
    "phonetic": "oyaa«",
    "meaning": "不"
  },
  "น่ะค่ะ": {
    "phonetic": "na kha",
    "meaning": "是的"
  },
  "ใกล้": {
    "phonetic": "kıl",
    "meaning": "靠近"
  },
  "บอย": {
    "phonetic": "boy",
    "meaning": "男生"
  },
  "ชั้นแค่": {
    "phonetic": "chhan khæ",
    "meaning": "我只是"
  },
  "มอสซี่": {
    "phonetic": "mos sii",
    "meaning": "摩西"
  },
  "เจ็บปวด": {
    "phonetic": "cheb pwd",
    "meaning": "痛苦"
  },
  "ถอยก่อน": {
    "phonetic": "thoy kon",
    "meaning": "先退后吧"
  },
  "สโลน": {
    "phonetic": "slon",
    "meaning": "斯隆"
  },
  "บ้าเหรอ": {
    "phonetic": "baa e ro",
    "meaning": "你疯了"
  },
  "ฮวา": {
    "phonetic": "hwaa",
    "meaning": "哇"
  },
  "แกโกหก": {
    "phonetic": "kæ kok",
    "meaning": "你撒谎了"
  },
  "มีน่า": {
    "phonetic": "mii naa",
    "meaning": "米娜"
  },
  "บอกมาซิ": {
    "phonetic": "bok maa si",
    "meaning": "告诉我"
  },
  "วอร์เรน": {
    "phonetic": "worren",
    "meaning": "沃伦"
  },
  "ริกกี้": {
    "phonetic": "rik kii",
    "meaning": "瑞奇"
  },
  "อึนยอง": {
    "phonetic": "ouen yong",
    "meaning": "恩英"
  },
  "รู้ไม๊": {
    "phonetic": "ruu mi",
    "meaning": "你可知道"
  },
  "อ้าห์": {
    "phonetic": "oaa",
    "meaning": "啊"
  },
  "ยาว": {
    "phonetic": "yaaw",
    "meaning": "长的"
  },
  "เทค": {
    "phonetic": "thekh",
    "meaning": "技术"
  },
  "ไม่ไหว": {
    "phonetic": "mi iw",
    "meaning": "我受不了"
  },
  "พลาซ่า": {
    "phonetic": "phlaasaa",
    "meaning": "广场"
  },
  "เทท": {
    "phonetic": "theth",
    "meaning": "泰特"
  },
  "โดโรธี": {
    "phonetic": "do rothii",
    "meaning": "多萝西"
  },
  "อ่าใช่": {
    "phonetic": "oaa chhı",
    "meaning": "啊是的"
  },
  "ญิ": {
    "phonetic": "yi",
    "meaning": "吉"
  },
  "ลืมไป": {
    "phonetic": "luem pi",
    "meaning": "忘记了"
  },
  "ชิฟ": {
    "phonetic": "chhif",
    "meaning": "芯片"
  },
  "แฮกริด": {
    "phonetic": "hæ krid",
    "meaning": "海格"
  },
  "หยาบคาย": {
    "phonetic": "yaab khaay",
    "meaning": "粗鲁的"
  },
  "เทสส์": {
    "phonetic": "the ss",
    "meaning": "苔丝"
  },
  "ลุงครับ": {
    "phonetic": "lung khrab",
    "meaning": "叔叔"
  },
  "ไม่เจอ": {
    "phonetic": "mi cheo",
    "meaning": "找不到它"
  },
  "ดูหนัง": {
    "phonetic": "duu nang",
    "meaning": "看电影"
  },
  "อาร์ชี่": {
    "phonetic": "oaar chhii",
    "meaning": "阿奇"
  },
  "ผ่านไป": {
    "phonetic": "phaan pi",
    "meaning": "通过了"
  },
  "ขาว": {
    "phonetic": "khaaw",
    "meaning": "白色的"
  },
  "นี่จ๊ะ": {
    "phonetic": "nii cha",
    "meaning": "这里是"
  },
  "นิดนึง": {
    "phonetic": "nid nueng",
    "meaning": "一点点"
  },
  "อิล": {
    "phonetic": "oil",
    "meaning": "伊尔"
  },
  "ขอโทษฮะ": {
    "phonetic": "khothosʹ ha",
    "meaning": "对不起"
  },
  "แฟลช": {
    "phonetic": "fælchh",
    "meaning": "闪光"
  },
  "หิว": {
    "phonetic": "iw",
    "meaning": "饥饿的"
  },
  "ยก": {
    "phonetic": "yk",
    "meaning": "举起"
  },
  "โกลด์": {
    "phonetic": "kold",
    "meaning": "金子"
  },
  "ที่มี": {
    "phonetic": "thii mii",
    "meaning": "那有"
  },
  "เกลียด": {
    "phonetic": "keliiad",
    "meaning": "恨"
  },
  "โอริเอะ": {
    "phonetic": "oo ri oea",
    "meaning": "奥里"
  },
  "คนนะ": {
    "phonetic": "khnna",
    "meaning": "人们"
  },
  "โชว์": {
    "phonetic": "chhow",
    "meaning": "展示"
  },
  "สเปน": {
    "phonetic": "spen",
    "meaning": "西班牙"
  },
  "มิโอะ": {
    "phonetic": "mi ooa",
    "meaning": "澪"
  },
  "เทป": {
    "phonetic": "thep",
    "meaning": "磁带"
  },
  "ตกลงว่า": {
    "phonetic": "tklng waa",
    "meaning": "同意了"
  },
  "เห็นสิ": {
    "phonetic": "en si",
    "meaning": "看"
  },
  "เยอะ": {
    "phonetic": "yeoa",
    "meaning": "很多"
  },
  "บาร์น": {
    "phonetic": "baar n",
    "meaning": "谷仓"
  },
  "ซุป": {
    "phonetic": "sup",
    "meaning": "汤"
  },
  "ฝนตก": {
    "phonetic": "fntk",
    "meaning": "下雨了"
  },
  "ในชีวิต": {
    "phonetic": "nı chhiiwit",
    "meaning": "在生活中"
  },
  "ช่วง": {
    "phonetic": "chhwng",
    "meaning": "范围"
  },
  "ได้แก่": {
    "phonetic": "di��kæ",
    "meaning": "包括"
  },
  "อืมๆ": {
    "phonetic": "ouem«",
    "meaning": "唔"
  },
  "บวก": {
    "phonetic": "bwk",
    "meaning": "加"
  },
  "คามิยะ": {
    "phonetic": "khaa mi ya",
    "meaning": "卡米亚"
  },
  "ไปทำงาน": {
    "phonetic": "pi thangaan",
    "meaning": "上班"
  },
  "มิโดริ": {
    "phonetic": "mi do ri",
    "meaning": "绿"
  },
  "หึหึ": {
    "phonetic": "ueue",
    "meaning": "呵呵"
  },
  "คอนแลน": {
    "phonetic": "khon læn",
    "meaning": "康兰"
  },
  "แปปนึง": {
    "phonetic": "pæ pnueng",
    "meaning": "一会儿"
  },
  "พอดี": {
    "phonetic": "phodii",
    "meaning": "正好"
  },
  "ๆนะ": {
    "phonetic": "«na",
    "meaning": "请"
  },
  "เวล": {
    "phonetic": "wel",
    "meaning": "维尔"
  },
  "ยังงั้น": {
    "phonetic": "yang ngan",
    "meaning": "还没有"
  },
  "มากเลย": {
    "phonetic": "maak lei",
    "meaning": "非常"
  },
  "พระบิดา": {
    "phonetic": "phra bidaa",
    "meaning": "父亲"
  },
  "หวาน": {
    "phonetic": "waan",
    "meaning": "甜的"
  },
  "แตกต่าง": {
    "phonetic": "tæk taang",
    "meaning": "不同的"
  },
  "เฮลี่ย์": {
    "phonetic": "he lii y",
    "meaning": "海莉"
  },
  "จีเซล": {
    "phonetic": "chii sel",
    "meaning": "吉赛尔"
  },
  "แก้แค้น": {
    "phonetic": "kæ khæn",
    "meaning": "复仇"
  },
  "เคนเสะ": {
    "phonetic": "khen sea",
    "meaning": "肯西"
  },
  "ฮ่าๆๆๆ": {
    "phonetic": "haa« ««",
    "meaning": "哈哈哈"
  },
  "นึง": {
    "phonetic": "nueng",
    "meaning": "一"
  },
  "อดัมส์": {
    "phonetic": "odams",
    "meaning": "亚当斯"
  },
  "โว้ววว": {
    "phonetic": "wowww",
    "meaning": "哇"
  },
  "วาน": {
    "phonetic": "waan",
    "meaning": "万"
  },
  "หยุดที": {
    "phonetic": "yud thii",
    "meaning": "请停下来"
  },
  "ฮาวี่": {
    "phonetic": "haa wii",
    "meaning": "豪伊"
  },
  "ก็มี": {
    "phonetic": "kmii",
    "meaning": "有"
  },
  "เยอรมัน": {
    "phonetic": "yeorman",
    "meaning": "德语"
  },
  "หรือคะ": {
    "phonetic": "rueo kha",
    "meaning": "或者"
  },
  "สุดหล่อ": {
    "phonetic": "sud lo",
    "meaning": "很帅"
  },
  "คุง": {
    "phonetic": "khung",
    "meaning": "恭"
  },
  "ปรบมือ": {
    "phonetic": "prb mueo",
    "meaning": "拍拍手"
  },
  "ฝันร้าย": {
    "phonetic": "fan raay",
    "meaning": "恶梦"
  },
  "หยุดเขา": {
    "phonetic": "yud kheaa",
    "meaning": "阻止他"
  },
  "ผู้ช่วย": {
    "phonetic": "phuu chhwy",
    "meaning": "助手"
  },
  "สไตลส์": {
    "phonetic": "s ti ls",
    "meaning": "风格"
  },
  "เลิก": {
    "phonetic": "leik",
    "meaning": "辞职"
  },
  "คอร่า": {
    "phonetic": "kho raa",
    "meaning": "科拉"
  },
  "แม่ว่า": {
    "phonetic": "mæ waa",
    "meaning": "妈妈说"
  },
  "มอร์": {
    "phonetic": "mor",
    "meaning": "莫"
  },
  "ฝูงชน": {
    "phonetic": "fuung chhn",
    "meaning": "人群"
  },
  "ทัตซึยะ": {
    "phonetic": "that sue ya",
    "meaning": "达也"
  },
  "มาที่": {
    "phonetic": "maa thii",
    "meaning": "来吧"
  },
  "ชอลซู": {
    "phonetic": "chhol suu",
    "meaning": "哲尔苏"
  },
  "อะไรค่ะ": {
    "phonetic": "oari kha",
    "meaning": "什么"
  },
  "ของมัน": {
    "phonetic": "khong man",
    "meaning": "它是"
  },
  "เดวี่": {
    "phonetic": "de wii",
    "meaning": "戴维"
  },
  "คงไม่": {
    "phonetic": "khng mi",
    "meaning": "可能不会"
  },
  "ดูแล": {
    "phonetic": "duulæ",
    "meaning": "小心"
  },
  "และอื่น": {
    "phonetic": "læa ouen",
    "meaning": "等等"
  },
  "คังแทโฮ": {
    "phonetic": "khangthæ ho",
    "meaning": "姜泰浩"
  },
  "แบล็ก": {
    "phonetic": "bæ lk",
    "meaning": "黑色的"
  },
  "มูน": {
    "phonetic": "muun",
    "meaning": "月亮"
  },
  "นายจะ": {
    "phonetic": "naay cha",
    "meaning": "威尔先生"
  },
  "ๆๆๆ": {
    "phonetic": "«««",
    "meaning": "哈哈哈"
  },
  "คาลิด": {
    "phonetic": "khaa lid",
    "meaning": "哈立德"
  },
  "อย่ามอง": {
    "phonetic": "oyaa mong",
    "meaning": "别看"
  },
  "กับนาย": {
    "phonetic": "kab naay",
    "meaning": "与你"
  },
  "สัญญาณ": {
    "phonetic": "sa���yaan",
    "meaning": "信号"
  },
  "ดักลาส": {
    "phonetic": "daklaas",
    "meaning": "道格拉斯"
  },
  "ขาฉัน": {
    "phonetic": "khaa chhan",
    "meaning": "我的腿"
  },
  "อย่าคิด": {
    "phonetic": "oyaa khid",
    "meaning": "别想了"
  },
  "โอปี้": {
    "phonetic": "oo pii",
    "meaning": "奥佩"
  },
  "เจซ": {
    "phonetic": "ches",
    "meaning": "杰西"
  },
  "แอ็บบี้": {
    "phonetic": "oæb bii",
    "meaning": "艾比"
  },
  "โอ่ว": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "เบคเคท": {
    "phonetic": "bekhkheth",
    "meaning": "贝克特"
  },
  "ฮยองนิม": {
    "phonetic": "h yong nim",
    "meaning": "亨宁"
  },
  "นานมาก": {
    "phonetic": "naan maak",
    "meaning": "很长一段时间"
  },
  "หนาว": {
    "phonetic": "naaw",
    "meaning": "寒冷的"
  },
  "ออโรร่า": {
    "phonetic": "oo ro raa",
    "meaning": "极光"
  },
  "ฝัน": {
    "phonetic": "fan",
    "meaning": "梦"
  },
  "โคจัง": {
    "phonetic": "kho chang",
    "meaning": "小昌"
  },
  "ครับพ่อ": {
    "phonetic": "khrab pho",
    "meaning": "是的父亲"
  },
  "รัฐบาล": {
    "phonetic": "rathbaal",
    "meaning": "政府"
  },
  "แคนาดา": {
    "phonetic": "khænaadaa",
    "meaning": "加拿大"
  },
  "อาบน้ำ": {
    "phonetic": "oaab na",
    "meaning": "洗个澡"
  },
  "มอยร่า": {
    "phonetic": "mo y raa",
    "meaning": "莫伊拉"
  },
  "ตอแหล": {
    "phonetic": "toæl",
    "meaning": "说谎"
  },
  "พอใจยัง": {
    "phonetic": "phochı yang",
    "meaning": "你还满意吗"
  },
  "เห้อ": {
    "phonetic": "eo",
    "meaning": "嘿"
  },
  "เด็ดขาด": {
    "phonetic": "ded khaad",
    "meaning": "绝对地"
  },
  "จากอะไร": {
    "phonetic": "chaak oari",
    "meaning": "从什么"
  },
  "เคนโซ": {
    "phonetic": "khen so",
    "meaning": "贤三"
  },
  "มัวร์": {
    "phonetic": "maw r",
    "meaning": "摩尔"
  },
  "หวา": {
    "phonetic": "waa",
    "meaning": "哇"
  },
  "ไปก่อน": {
    "phonetic": "pi kon",
    "meaning": "先走吧"
  },
  "อูย": {
    "phonetic": "ouuy",
    "meaning": "哎呀"
  },
  "แม่หนู": {
    "phonetic": "mæ nuu",
    "meaning": "我的母亲"
  },
  "แสน": {
    "phonetic": "sæn",
    "meaning": "十万"
  },
  "นี่ฉัน": {
    "phonetic": "nii chhan",
    "meaning": "这就是我"
  },
  "ฮยอกจู": {
    "phonetic": "h yok chuu",
    "meaning": "赫州"
  },
  "โรแลนด์": {
    "phonetic": "ro lænd",
    "meaning": "罗兰"
  },
  "บีน": {
    "phonetic": "biin",
    "meaning": "豆"
  },
  "เบา": {
    "phonetic": "beaa",
    "meaning": "光"
  },
  "ไปยัง": {
    "phonetic": "pi yang",
    "meaning": "到"
  },
  "เอลิสัน": {
    "phonetic": "oe li san",
    "meaning": "艾莉森"
  },
  "ภารกิจ": {
    "phonetic": "phhaarkich",
    "meaning": "使命"
  },
  "บุก": {
    "phonetic": "buk",
    "meaning": "入侵"
  },
  "รุกฆาต": {
    "phonetic": "rukkhaat",
    "meaning": "将死"
  },
  "ได้จ๊ะ": {
    "phonetic": "di cha",
    "meaning": "你可以"
  },
  "อ้วน": {
    "phonetic": "own",
    "meaning": "胖的"
  },
  "แรมโบ้": {
    "phonetic": "ræm bo",
    "meaning": "兰博"
  },
  "ทริช": {
    "phonetic": "thrichh",
    "meaning": "崔西"
  },
  "โอ้ว้าว": {
    "phonetic": "oo waa w",
    "meaning": "哦哇"
  },
  "วิฟ": {
    "phonetic": "wif",
    "meaning": "维维"
  },
  "เปิดเลย": {
    "phonetic": "peid lei",
    "meaning": "现在开放"
  },
  "มีชีวิต": {
    "phonetic": "mii chhiiwit",
    "meaning": "居住"
  },
  "เฟรดดี้": {
    "phonetic": "fe rd dii",
    "meaning": "弗雷迪"
  },
  "ตื่นๆ": {
    "phonetic": "tuen«",
    "meaning": "醒来吧"
  },
  "โหมด": {
    "phonetic": "omd",
    "meaning": "模式"
  },
  "นายมี": {
    "phonetic": "naay mii",
    "meaning": "梅先生"
  },
  "ท็อป": {
    "phonetic": "thop",
    "meaning": "顶部"
  },
  "บนนั้น": {
    "phonetic": "bn nan",
    "meaning": "上面"
  },
  "ในฐานะ": {
    "phonetic": "nı thaana",
    "meaning": "作为"
  },
  "แบล็ค": {
    "phonetic": "bæ lkh",
    "meaning": "黑色的"
  },
  "มะเร็ง": {
    "phonetic": "mareng",
    "meaning": "癌症"
  },
  "แอนา": {
    "phonetic": "oænaa",
    "meaning": "安娜"
  },
  "แรลลี่": {
    "phonetic": "rællii",
    "meaning": "集会"
  },
  "เกือบจะ": {
    "phonetic": "keueob cha",
    "meaning": "几乎"
  },
  "โอ้ๆ": {
    "phonetic": "oo«",
    "meaning": "哦"
  },
  "สรุป": {
    "phonetic": "srup",
    "meaning": "概括"
  },
  "นี่ด้วย": {
    "phonetic": "nii dwy",
    "meaning": "这也是"
  },
  "ดอร์ริท": {
    "phonetic": "d or rith",
    "meaning": "杜丽特"
  },
  "นี": {
    "phonetic": "nii",
    "meaning": "尼"
  },
  "แฮร์ริส": {
    "phonetic": "hær ris",
    "meaning": "哈里斯"
  },
  "ทริส": {
    "phonetic": "thris",
    "meaning": "特里斯"
  },
  "ถัง": {
    "phonetic": "thang",
    "meaning": "桶"
  },
  "เอลวิส": {
    "phonetic": "oe l wis",
    "meaning": "埃尔维斯"
  },
  "จองจู": {
    "phonetic": "chong chuu",
    "meaning": "正州"
  },
  "ฮอง": {
    "phonetic": "hong",
    "meaning": "洪"
  },
  "ฮิ": {
    "phonetic": "hi",
    "meaning": "嘻"
  },
  "นักแสดง": {
    "phonetic": "nak sædng",
    "meaning": "演员"
  },
  "โจซี่": {
    "phonetic": "cho sii",
    "meaning": "乔西"
  },
  "เกรแฮม": {
    "phonetic": "ker hæm",
    "meaning": "格雷厄姆"
  },
  "ขอเดานะ": {
    "phonetic": "kho deaa na",
    "meaning": "让我猜一下"
  },
  "ดาร์ซี่": {
    "phonetic": "daar sii",
    "meaning": "达西"
  },
  "เช้า": {
    "phonetic": "chheaa",
    "meaning": "早晨"
  },
  "ทายสิ": {
    "phonetic": "thaay si",
    "meaning": "你猜怎么着"
  },
  "ก้ได้": {
    "phonetic": "k di",
    "meaning": "这是可以做到的"
  },
  "ไปๆๆๆ": {
    "phonetic": "pi«««",
    "meaning": "去去去"
  },
  "อือม์": {
    "phonetic": "oueo m",
    "meaning": "嗯"
  },
  "สว": {
    "phonetic": "sw",
    "meaning": "参议员"
  },
  "เนต": {
    "phonetic": "net",
    "meaning": "净"
  },
  "ทุกสิ่ง": {
    "phonetic": "thuk sing",
    "meaning": "一切"
  },
  "เคนซ์": {
    "phonetic": "khen s",
    "meaning": "肯兹"
  },
  "โดมินิค": {
    "phonetic": "do mi nikh",
    "meaning": "多米尼克"
  },
  "สัญญาสิ": {
    "phonetic": "sayyaa si",
    "meaning": "承诺"
  },
  "เห็นมะ": {
    "phonetic": "en ma",
    "meaning": "我懂了"
  },
  "ผะ": {
    "phonetic": "pha",
    "meaning": "博士"
  },
  "ฉลาม": {
    "phonetic": "chhlaam",
    "meaning": "鲨鱼"
  },
  "มาดูนี่": {
    "phonetic": "maa duu nii",
    "meaning": "快来看看这个"
  },
  "สนุกดี": {
    "phonetic": "snuk dii",
    "meaning": "很好玩"
  },
  "ผมเองนะ": {
    "phonetic": "phm oeng na",
    "meaning": "这就是我"
  },
  "ออกจาก": {
    "phonetic": "ook chaak",
    "meaning": "离开"
  },
  "ซีซั่น": {
    "phonetic": "sii san",
    "meaning": "季节"
  },
  "สตรีท": {
    "phonetic": "strii th",
    "meaning": "街道"
  },
  "บอง": {
    "phonetic": "bong",
    "meaning": "邦"
  },
  "จากนี้": {
    "phonetic": "chaak nii",
    "meaning": "今后"
  },
  "แถวๆ": {
    "phonetic": "thæw«",
    "meaning": "大约"
  },
  "ตะ": {
    "phonetic": "ta",
    "meaning": "T"
  },
  "ขอที": {
    "phonetic": "khothii",
    "meaning": "请"
  },
  "คอยดู": {
    "phonetic": "khoy duu",
    "meaning": "观察观察"
  },
  "แหม่": {
    "phonetic": "æm",
    "meaning": "哇"
  },
  "ทาคิดะ": {
    "phonetic": "thaa khid a",
    "meaning": "泷田"
  },
  "จิลล์": {
    "phonetic": "chi ll",
    "meaning": "吉尔"
  },
  "การ์ด": {
    "phonetic": "kaard",
    "meaning": "卡片"
  },
  "ไม่ทราบ": {
    "phonetic": "mi thraab",
    "meaning": "不知道"
  },
  "แค่ไหน": {
    "phonetic": "khæ in",
    "meaning": "多少"
  },
  "ท๊อป": {
    "phonetic": "thop",
    "meaning": "顶部"
  },
  "อะไรอะ": {
    "phonetic": "oari oa",
    "meaning": "什么"
  },
  "ได้เหรอ": {
    "phonetic": "di e ro",
    "meaning": "你明白了吗"
  },
  "หลีก": {
    "phonetic": "liik",
    "meaning": "避免"
  },
  "ฮอบส์": {
    "phonetic": "h obs",
    "meaning": "霍布斯"
  },
  "ไปอีก": {
    "phonetic": "pi oiik",
    "meaning": "再去吧"
  },
  "ปีมานี้": {
    "phonetic": "pii maa nii",
    "meaning": "今年"
  },
  "ดูดีมาก": {
    "phonetic": "duu dii maak",
    "meaning": "看起来非常好"
  },
  "รูป": {
    "phonetic": "ruup",
    "meaning": "图片"
  },
  "ตั้งใจ": {
    "phonetic": "tangchı",
    "meaning": "意图"
  },
  "แคตนิส": {
    "phonetic": "khæ tnis",
    "meaning": "凯特尼斯"
  },
  "ดำ": {
    "phonetic": "da",
    "meaning": "黑色的"
  },
  "ปิแอร์": {
    "phonetic": "pioær",
    "meaning": "皮埃尔"
  },
  "ตำนาน": {
    "phonetic": "tanaan",
    "meaning": "传奇"
  },
  "เรมี่": {
    "phonetic": "re mii",
    "meaning": "雷米"
  },
  "เตรียม": {
    "phonetic": "teriiam",
    "meaning": "准备"
  },
  "ซักวัน": {
    "phonetic": "sak wan",
    "meaning": "有一天"
  },
  "ดัก": {
    "phonetic": "dak",
    "meaning": "陷阱"
  },
  "อาจเป็น": {
    "phonetic": "oaach pen",
    "meaning": "可能是的"
  },
  "แฮล": {
    "phonetic": "hæl",
    "meaning": "哈尔"
  },
  "บล็อก": {
    "phonetic": "blok",
    "meaning": "博客"
  },
  "อะไรหนะ": {
    "phonetic": "oari na",
    "meaning": "什么"
  },
  "นี่คะ": {
    "phonetic": "nii kha",
    "meaning": "这里"
  },
  "กาย": {
    "phonetic": "kaay",
    "meaning": "身体"
  },
  "สกาโว": {
    "phonetic": "skaa wo",
    "meaning": "斯卡沃"
  },
  "ไอ้แก่": {
    "phonetic": "oi kæ",
    "meaning": "老头儿"
  },
  "ซีเลีย": {
    "phonetic": "sii leiia",
    "meaning": "西莉亚"
  },
  "เอริน": {
    "phonetic": "oe rin",
    "meaning": "艾琳"
  },
  "ชิโยโกะ": {
    "phonetic": "chhi yo koa",
    "meaning": "千代子"
  },
  "ทำไมนาย": {
    "phonetic": "thami naay",
    "meaning": "为什么先生"
  },
  "เคสซี่": {
    "phonetic": "khes sii",
    "meaning": "凯西"
  },
  "คันซากิ": {
    "phonetic": "khan saaki",
    "meaning": "神崎"
  },
  "ประณาม": {
    "phonetic": "pranaam",
    "meaning": "该死"
  },
  "โฮล์ม": {
    "phonetic": "holm",
    "meaning": "福尔摩斯"
  },
  "โซเร็น": {
    "phonetic": "so ren",
    "meaning": "索伦"
  },
  "เมียย์": {
    "phonetic": "meiia y",
    "meaning": "妻子"
  },
  "ฟินซ์": {
    "phonetic": "fins",
    "meaning": "芬奇"
  },
  "ลิตร": {
    "phonetic": "litr",
    "meaning": "升"
  },
  "ฮาร์มอน": {
    "phonetic": "haar mon",
    "meaning": "哈蒙"
  },
  "แอง": {
    "phonetic": "oæng",
    "meaning": "安"
  },
  "อมีเลีย": {
    "phonetic": "omii leiia",
    "meaning": "阿米莉亚"
  },
  "เอดดี้": {
    "phonetic": "oed dii",
    "meaning": "艾迪"
  },
  "คงใช่": {
    "phonetic": "khng chhı",
    "meaning": "可能是的"
  },
  "มาติน": {
    "phonetic": "maa tin",
    "meaning": "马丁"
  },
  "โธ่เอ๋ย": {
    "phonetic": "tho oei",
    "meaning": "天哪"
  },
  "ไฟเวิล": {
    "phonetic": "fi weil",
    "meaning": "五界"
  },
  "โอแทซุก": {
    "phonetic": "oo thæ suk",
    "meaning": "哦泰硕"
  },
  "ไค": {
    "phonetic": "khi",
    "meaning": "凯"
  },
  "ฟิตซ์": {
    "phonetic": "fit s",
    "meaning": "菲茨"
  },
  "โฟรโด้": {
    "phonetic": "for do",
    "meaning": "佛罗多"
  },
  "ศัตรู": {
    "phonetic": "satruu",
    "meaning": "敌人"
  },
  "ดีจ๊ะ": {
    "phonetic": "dii cha",
    "meaning": "好的"
  },
  "นีนี่": {
    "phonetic": "nii nii",
    "meaning": "妮妮"
  },
  "อะนี่": {
    "phonetic": "oa nii",
    "meaning": "阿尼"
  },
  "เอะ": {
    "phonetic": "oea",
    "meaning": "呃"
  },
  "คาเนดะ": {
    "phonetic": "khaa ne da",
    "meaning": "金田"
  },
  "เบค": {
    "phonetic": "bekh",
    "meaning": "贝克"
  },
  "ภาค": {
    "phonetic": "phhaakh",
    "meaning": "地区"
  },
  "ซิลเวีย": {
    "phonetic": "silweiia",
    "meaning": "西尔维娅"
  },
  "โรนัลด์": {
    "phonetic": "ro nald",
    "meaning": "罗纳德"
  },
  "ดูให้ดี": {
    "phonetic": "duu ı dii",
    "meaning": "仔细看"
  },
  "หนัง": {
    "phonetic": "nang",
    "meaning": "电影"
  },
  "รูปแบบ": {
    "phonetic": "ruup bæb",
    "meaning": "格式"
  },
  "ขี้ขลาด": {
    "phonetic": "khii khlaad",
    "meaning": "胆小"
  },
  "อะไรว่ะ": {
    "phonetic": "oari wa",
    "meaning": "什么"
  },
  "อืมฮึ": {
    "phonetic": "ouem hue",
    "meaning": "唔"
  },
  "เคสึเกะ": {
    "phonetic": "khesue kea",
    "meaning": "圭介"
  },
  "ฮารุกะ": {
    "phonetic": "haa ru ka",
    "meaning": "遥"
  },
  "จากฉัน": {
    "phonetic": "chaak chhan",
    "meaning": "来自我"
  },
  "วิสกี้": {
    "phonetic": "wiskii",
    "meaning": "威士忌酒"
  },
  "อ้อเหรอ": {
    "phonetic": "oo e ro",
    "meaning": "哦对吧"
  },
  "เอาเป็น": {
    "phonetic": "oeaa pen",
    "meaning": "让我们接受吧"
  },
  "ทำซะ": {
    "phonetic": "thasa",
    "meaning": "做吧"
  },
  "จังโก้": {
    "phonetic": "chang ko",
    "meaning": "姜戈"
  },
  "เดนท์": {
    "phonetic": "den th",
    "meaning": "凹痕"
  },
  "แกตาย": {
    "phonetic": "kæ taay",
    "meaning": "你死了"
  },
  "กล้าหาญ": {
    "phonetic": "klaa aay",
    "meaning": "勇敢的"
  },
  "จบข่าว": {
    "phonetic": "chb khaaw",
    "meaning": "新闻结束"
  },
  "ซาดาโกะ": {
    "phonetic": "saa daa koa",
    "meaning": "贞子"
  },
  "โอว์": {
    "phonetic": "oow",
    "meaning": "哦"
  },
  "บ้ายบาย": {
    "phonetic": "baay baay",
    "meaning": "再见"
  },
  "นายนี่": {
    "phonetic": "naay nii",
    "meaning": "倪先生"
  },
  "เอ็มมา": {
    "phonetic": "oem maa",
    "meaning": "艾玛"
  },
  "แอคชั่น": {
    "phonetic": "oæ khchhan",
    "meaning": "行动"
  },
  "ไล่ออก": {
    "phonetic": "li ook",
    "meaning": "被解雇了"
  },
  "ฮีซู": {
    "phonetic": "hiisuu",
    "meaning": "熙秀"
  },
  "ยูนซอง": {
    "phonetic": "yuun song",
    "meaning": "尹成"
  },
  "โพ": {
    "phonetic": "pho",
    "meaning": "宝"
  },
  "ได้ผล": {
    "phonetic": "di phl",
    "meaning": "有用"
  },
  "บก": {
    "phonetic": "bk",
    "meaning": "编辑"
  },
  "ร่วมกัน": {
    "phonetic": "rwm kan",
    "meaning": "在一起"
  },
  "มุน": {
    "phonetic": "mun",
    "meaning": "蒙"
  },
  "ผีเสื้อ": {
    "phonetic": "phiiseueo",
    "meaning": "蝴蝶"
  },
  "ดีเร็ค": {
    "phonetic": "dii rekh",
    "meaning": "德里克"
  },
  "อลิส": {
    "phonetic": "olis",
    "meaning": "爱丽丝"
  },
  "แคธี่": {
    "phonetic": "khæ thii",
    "meaning": "凯茜"
  },
  "วัว": {
    "phonetic": "waw",
    "meaning": "奶牛"
  },
  "ลอปปี้": {
    "phonetic": "lop pii",
    "meaning": "洛皮"
  },
  "ถ้ามี": {
    "phonetic": "thaa mii",
    "meaning": "如果有的话"
  },
  "ดอล": {
    "phonetic": "dol",
    "meaning": "美元"
  },
  "สส": {
    "phonetic": "ss",
    "meaning": "国会议员"
  },
  "โคโน่": {
    "phonetic": "kho no",
    "meaning": "科诺"
  },
  "คล้ายๆ": {
    "phonetic": "khlaay«",
    "meaning": "相似的"
  },
  "สวยดีนะ": {
    "phonetic": "swy dii na",
    "meaning": "很美丽"
  },
  "ทัค": {
    "phonetic": "thakh",
    "meaning": "塔克"
  },
  "ตอบสิ": {
    "phonetic": "tob si",
    "meaning": "回答"
  },
  "เกลือ": {
    "phonetic": "kelueo",
    "meaning": "盐"
  },
  "ดื่มเลย": {
    "phonetic": "duem lei",
    "meaning": "现在喝吧"
  },
  "สหายข้า": {
    "phonetic": "saay khaa",
    "meaning": "我的朋友"
  },
  "ไม่จ๊ะ": {
    "phonetic": "mi cha",
    "meaning": "不"
  },
  "มาร์ก": {
    "phonetic": "maar k",
    "meaning": "马克"
  },
  "มามา": {
    "phonetic": "maamaa",
    "meaning": "来吧来吧"
  },
  "จับ": {
    "phonetic": "chab",
    "meaning": "抓住"
  },
  "ด่วนเลย": {
    "phonetic": "dwn lei",
    "meaning": "紧迫的"
  },
  "ดอก": {
    "phonetic": "dok",
    "meaning": "花"
  },
  "คิดดู": {
    "phonetic": "khid duu",
    "meaning": "想一想"
  },
  "ตัวแทน": {
    "phonetic": "tawthæn",
    "meaning": "代理人"
  },
  "ยังมี": {
    "phonetic": "yang mii",
    "meaning": "还是有的"
  },
  "ประเภท": {
    "phonetic": "praphheth",
    "meaning": "类型"
  },
  "ชาแนล": {
    "phonetic": "chhaa næl",
    "meaning": "香奈儿"
  },
  "ไม่ซิ": {
    "phonetic": "mi si",
    "meaning": "不"
  },
  "ยั": {
    "phonetic": "ya",
    "meaning": "是啊"
  },
  "พวกเจ้า": {
    "phonetic": "phwk cheaa",
    "meaning": "你们"
  },
  "มัลคอล์": {
    "phonetic": "mal khol",
    "meaning": "马尔科"
  },
  "ฮอลลี": {
    "phonetic": "hol lii",
    "meaning": "冬青"
  },
  "แม็คคอย": {
    "phonetic": "mækh khoy",
    "meaning": "麦考伊"
  },
  "คาร์สัน": {
    "phonetic": "khaar san",
    "meaning": "卡森"
  },
  "คาลลีสิ": {
    "phonetic": "khaa l lii si",
    "meaning": "卡里西"
  },
  "พัค": {
    "phonetic": "phakh",
    "meaning": "公园"
  },
  "ซิสโก้": {
    "phonetic": "si s ko",
    "meaning": "思科"
  },
  "ซะที": {
    "phonetic": "sathii",
    "meaning": "最后"
  },
  "ไอ้เสือ": {
    "phonetic": "oi seueo",
    "meaning": "属虎的家伙"
  },
  "เชื่อ": {
    "phonetic": "chheueo",
    "meaning": "相信"
  },
  "ก็ตามใจ": {
    "phonetic": "ktaam chı",
    "meaning": "如你所愿"
  },
  "แฟต": {
    "phonetic": "fæt",
    "meaning": "胖的"
  },
  "สั่ง": {
    "phonetic": "sang",
    "meaning": "词汇"
  },
  "ผัด": {
    "phonetic": "phad",
    "meaning": "鲜虾炒泰"
  },
  "ไทย": {
    "phonetic": "aithy",
    "meaning": "鲜虾炒泰"
  },
  "กุ้ง": {
    "phonetic": "gung",
    "meaning": "虾"
  },
  "สด": {
    "phonetic": "sd",
    "meaning": "鲜虾炒泰"
  },
  "จาน": {
    "phonetic": "jaan",
    "meaning": "词汇"
  },
  "รสชาติ": {
    "phonetic": "rot-chaat",
    "meaning": "味道"
  },
  "แข็ง": {
    "phonetic": "aekhng",
    "meaning": "词汇"
  },
  "เพิ่ม": {
    "phonetic": "ephim",
    "meaning": "词汇"
  },
  "ไหร่": {
    "phonetic": "aihr",
    "meaning": "词汇"
  },
  "ราคา100บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ครู่": {
    "phonetic": "khru",
    "meaning": "词汇"
  },
  "ต้มยำ": {
    "phonetic": "tom-yam",
    "meaning": "冬阴功"
  },
  "กลาง": {
    "phonetic": "glaang",
    "meaning": "词汇"
  },
  "มะนาว": {
    "phonetic": "manaaw",
    "meaning": "词汇"
  },
  "ราคา115บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "เหนียว": {
    "phonetic": "ehniiyw",
    "meaning": "芒果糯米"
  },
  "มะม่วง": {
    "phonetic": "ma-muuang",
    "meaning": "芒果"
  },
  "มะพร้าว": {
    "phonetic": "maphraaw",
    "meaning": "椰子冰沙"
  },
  "ปั่น": {
    "phonetic": "bpan",
    "meaning": "椰子冰沙"
  },
  "ราคา130บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "แกง": {
    "phonetic": "aegng",
    "meaning": "绿咖喱鸡"
  },
  "เขียว": {
    "phonetic": "khiao",
    "meaning": "绿色"
  },
  "รส": {
    "phonetic": "rs",
    "meaning": "浓郁重口"
  },
  "จัด": {
    "phonetic": "jad",
    "meaning": "浓郁重口"
  },
  "จ้าน": {
    "phonetic": "jaan",
    "meaning": "浓郁重口"
  },
  "ราคา145บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ส้มตำ": {
    "phonetic": "som-tam",
    "meaning": "青木瓜沙"
  },
  "น้ำส้ม": {
    "phonetic": "namsm",
    "meaning": "词汇"
  },
  "คั้น": {
    "phonetic": "khan",
    "meaning": "词汇"
  },
  "ราคา160บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ปู": {
    "phonetic": "puu",
    "meaning": "螃蟹"
  },
  "เปรี้ยว": {
    "phonetic": "ebpriiyw",
    "meaning": "词汇"
  },
  "อม": {
    "phonetic": "om",
    "meaning": "椰青"
  },
  "ราคา175บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ต้มข่า": {
    "phonetic": "tom-khaa",
    "meaning": "椰汁汤"
  },
  "นม": {
    "phonetic": "nom",
    "meaning": "牛奶"
  },
  "ราคา190บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "กะเพรา": {
    "phonetic": "ga-phrao",
    "meaning": "罗勒/九"
  },
  "สับ": {
    "phonetic": "sab",
    "meaning": "罗勒炒猪"
  },
  "ราคา205บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "เป็ด": {
    "phonetic": "ebpd",
    "meaning": "红咖喱烤"
  },
  "ย่าง": {
    "phonetic": "yaang",
    "meaning": "红咖喱烤"
  },
  "ราคา220บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "สะเต๊ะ": {
    "phonetic": "sa-te",
    "meaning": "沙爹"
  },
  "ราคา235บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา250บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา265บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา280บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา295บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา310บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา325บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา340บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา105บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา120บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา135บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา150บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา165บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา180บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา195บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา210บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา225บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา240บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา255บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา270บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ราคา285บาท": {
    "phonetic": "raakhaabaath",
    "meaning": "词汇"
  },
  "ถาม": {
    "phonetic": "thaam",
    "meaning": "词汇"
  },
  "วัด": {
    "phonetic": "wad",
    "meaning": "玉佛寺"
  },
  "เลี้ยว": {
    "phonetic": "eliiyw",
    "meaning": "词汇"
  },
  "ทุเรียน": {
    "phonetic": "thueriiyn",
    "meaning": "金枕头榴"
  },
  "หมอน": {
    "phonetic": "hmon",
    "meaning": "金枕头榴"
  },
  "ทอ": {
    "phonetic": "tho",
    "meaning": "金枕头榴"
  },
  "งอ": {
    "phonetic": "ngo",
    "meaning": "芒果"
  },
  "ร่อยๆ": {
    "phonetic": "roy",
    "meaning": "词汇"
  },
  "ละ50บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ตุ๊ก": {
    "phonetic": "dtug",
    "meaning": "词汇"
  },
  "ไกล": {
    "phonetic": "aigl",
    "meaning": "词汇"
  },
  "ตลาด": {
    "phonetic": "dtlaad",
    "meaning": "乍都乍周"
  },
  "จตุจักร": {
    "phonetic": "ja-dtu-jak",
    "meaning": "乍都乍"
  },
  "มังคุด": {
    "phonetic": "mang-khut",
    "meaning": "山竹"
  },
  "คัด": {
    "phonetic": "khad",
    "meaning": "新鲜山竹"
  },
  "อร่อยๆ": {
    "phonetic": "oroy",
    "meaning": "词汇"
  },
  "ละ70บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "อรุณ": {
    "phonetic": "orun",
    "meaning": "郑王庙"
  },
  "ราชวราราม": {
    "phonetic": "raachwraaraam",
    "meaning": "郑王庙"
  },
  "หอ": {
    "phonetic": "ho",
    "meaning": "椰青"
  },
  "มอ": {
    "phonetic": "mo",
    "meaning": "金枕头榴"
  },
  "ละ90บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "กรุงเทพ": {
    "phonetic": "grungethph",
    "meaning": "曼谷火车"
  },
  "อก": {
    "phonetic": "og",
    "meaning": "芒果"
  },
  "ร่อ": {
    "phonetic": "ro",
    "meaning": "芒果"
  },
  "ละ110บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ห้าง": {
    "phonetic": "haang",
    "meaning": "暹罗天地"
  },
  "สรรพ": {
    "phonetic": "srrph",
    "meaning": "暹罗天地"
  },
  "สินค้า": {
    "phonetic": "sinkhaa",
    "meaning": "暹罗天地"
  },
  "ไอคอน": {
    "phonetic": "aiokhon",
    "meaning": "暹罗天地"
  },
  "สยาม": {
    "phonetic": "syaam",
    "meaning": "暹罗天地"
  },
  "เงาะ": {
    "phonetic": "ngɔ́",
    "meaning": "红毛丹"
  },
  "โรง": {
    "phonetic": "oorng",
    "meaning": "红毛丹"
  },
  "ละ130บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "เยาวราช": {
    "phonetic": "yao-wa-raat",
    "meaning": "唐人街"
  },
  "กอ": {
    "phonetic": "go",
    "meaning": "龙功果"
  },
  "ละ150บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "สับปะรด": {
    "phonetic": "sap-bpa-rot",
    "meaning": "菠萝"
  },
  "ภู": {
    "phonetic": "phu",
    "meaning": "小菠萝"
  },
  "แล": {
    "phonetic": "ael",
    "meaning": "小菠萝"
  },
  "ละ170บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ190บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ60บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ80บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ100บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ120บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ140บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ160บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ละ180บาท": {
    "phonetic": "labaath",
    "meaning": "词汇"
  },
  "ร้าย": {
    "phonetic": "raay",
    "meaning": "词汇"
  },
  "แรง": {
    "phonetic": "aerng",
    "meaning": "词汇"
  },
  "แอป": {
    "phonetic": "aep",
    "meaning": "APP"
  },
  "ใจ": {
    "phonetic": "aij",
    "meaning": "极简主义"
  },
  "เย็นๆ": {
    "phonetic": "eyn",
    "meaning": "词汇"
  },
  "ประสาน": {
    "phonetic": "bprasaan",
    "meaning": "词汇"
  },
  "หน้าที่": {
    "phonetic": "hnaathii",
    "meaning": "词汇"
  },
  "ตรวจ": {
    "phonetic": "dtrwj",
    "meaning": "词汇"
  },
  "สอบ": {
    "phonetic": "sob",
    "meaning": "词汇"
  },
  "สถาน": {
    "phonetic": "sthaan",
    "meaning": "曼谷火车"
  },
  "ดำเนิน": {
    "phonetic": "damenin",
    "meaning": "词汇"
  },
  "เน็ต": {
    "phonetic": "net",
    "meaning": "网络"
  },
  "หลุด": {
    "phonetic": "lut",
    "meaning": "断开"
  },
  "บ่อย": {
    "phonetic": "bɔi",
    "meaning": "经常"
  },
  "พิมพ์": {
    "phonetic": "phimph",
    "meaning": "打印机故"
  },
  "ฮาร์ดดิสก์": {
    "phonetic": "haat-dis",
    "meaning": "硬盘"
  },
  "เสีย": {
    "phonetic": "siia",
    "meaning": "坏了"
  },
  "สูญหาย": {
    "phonetic": "suun-haai",
    "meaning": "丢失"
  },
  "อัปเดต": {
    "phonetic": "oabpeddt",
    "meaning": "词汇"
  },
  "โครงการ": {
    "phonetic": "ookhrnggaar",
    "meaning": "太阳能光"
  },
  "พัฒนา": {
    "phonetic": "phathnaa",
    "meaning": "词汇"
  },
  "ระบบ": {
    "phonetic": "rabb",
    "meaning": "电商系统"
  },
  "ซื้อ": {
    "phonetic": "sueo",
    "meaning": "电商系统"
  },
  "ออนไลน์": {
    "phonetic": "oonailn",
    "meaning": "电商系统"
  },
  "อุปสรรค": {
    "phonetic": "oubpsrrkh",
    "meaning": "词汇"
  },
  "แก้ไข": {
    "phonetic": "aegaikh",
    "meaning": "词汇"
  },
  "เสร็จ": {
    "phonetic": "esrj",
    "meaning": "词汇"
  },
  "ทัน": {
    "phonetic": "than",
    "meaning": "词汇"
  },
  "ศุกร์": {
    "phonetic": "sugr",
    "meaning": "周五下午"
  },
  "เต็ม": {
    "phonetic": "edtm",
    "meaning": "词汇"
  },
  "สื่อ": {
    "phonetic": "sʉʉ",
    "meaning": "媒体"
  },
  "โฆษณา": {
    "phonetic": "khoo-sa-naa",
    "meaning": "广告"
  },
  "เชีย": {
    "phonetic": "echiiy",
    "meaning": "社交媒体"
  },
  "ลมี": {
    "phonetic": "lmii",
    "meaning": "社交媒体"
  },
  "เดีย": {
    "phonetic": "ediiy",
    "meaning": "社交媒体"
  },
  "ความ": {
    "phonetic": "khwaam",
    "meaning": "湿度传感"
  },
  "คืบ": {
    "phonetic": "khueb",
    "meaning": "词汇"
  },
  "ทราบ": {
    "phonetic": "thraab",
    "meaning": "词汇"
  },
  "เซ็นเซอร์": {
    "phonetic": "sen-səə",
    "meaning": "传感器"
  },
  "ความชื้น": {
    "phonetic": "khwaam-chʉ́n",
    "meaning": "湿度"
  },
  "สิ้น": {
    "phonetic": "sin",
    "meaning": "本月底五"
  },
  "งานการ": {
    "phonetic": "ngaangaar",
    "meaning": "词汇"
  },
  "จ้าง": {
    "phonetic": "jaang",
    "meaning": "聘请博主"
  },
  "เกอร์": {
    "phonetic": "egor",
    "meaning": "聘请博主"
  },
  "รีวิว": {
    "phonetic": "ri-wiu",
    "meaning": "测评"
  },
  "โปรแกรม": {
    "phonetic": "proo-graem",
    "meaning": "程序"
  },
  "บัญชี": {
    "phonetic": "ban-chii",
    "meaning": "账目/财"
  },
  "อังคาร": {
    "phonetic": "oangkhaar",
    "meaning": "下周二上"
  },
  "เสริม": {
    "phonetic": "esrim",
    "meaning": "邮件营销"
  },
  "อีเมล": {
    "phonetic": "ii-mel",
    "meaning": "邮件"
  },
  "บริการ": {
    "phonetic": "brigaar",
    "meaning": "云存储服"
  },
  "คลา": {
    "phonetic": "khlaa",
    "meaning": "云存储服"
  },
  "วด์": {
    "phonetic": "wd",
    "meaning": "云存储服"
  },
  "เก็บ": {
    "phonetic": "egb",
    "meaning": "云存储服"
  },
  "พรุ่ง": {
    "phonetic": "phrung",
    "meaning": "明天中午"
  },
  "เที่ยง": {
    "phonetic": "ethiiyng",
    "meaning": "明天中午"
  },
  "กิจกรรม": {
    "phonetic": "gijgrrm",
    "meaning": "线下巡展"
  },
  "แสดง": {
    "phonetic": "aesdng",
    "meaning": "线下巡展"
  },
  "นอก": {
    "phonetic": "nog",
    "meaning": "线下巡展"
  },
  "แพลตฟอร์ม": {
    "phonetic": "phaet-fɔɔm",
    "meaning": "平台"
  },
  "สอน": {
    "phonetic": "son",
    "meaning": "在线学习"
  },
  "เสนอ": {
    "phonetic": "esno",
    "meaning": "词汇"
  },
  "เติบโต": {
    "phonetic": "edtiboodt",
    "meaning": "EV零部"
  },
  "อุตสาหกรรม": {
    "phonetic": "oudtsaahgrrm",
    "meaning": "EV零部"
  },
  "รถยนต์": {
    "phonetic": "rthyndt",
    "meaning": "EV零部"
  },
  "ไฟฟ้า": {
    "phonetic": "aiffaa",
    "meaning": "EV零部"
  },
  "สนับสนุน": {
    "phonetic": "snabsnun",
    "meaning": "词汇"
  },
  "นโยบาย": {
    "phonetic": "na-yoo-baai",
    "meaning": "政策"
  },
  "เร่ง": {
    "phonetic": "erng",
    "meaning": "词汇"
  },
  "ฟื้นฟู": {
    "phonetic": "fuenfu",
    "meaning": "词汇"
  },
  "ค้า": {
    "phonetic": "khaa",
    "meaning": "暹罗天地"
  },
  "ผู้": {
    "phonetic": "phu",
    "meaning": "词汇"
  },
  "ประกอบ": {
    "phonetic": "bpragob",
    "meaning": "词汇"
  },
  "หลาย": {
    "phonetic": "hlaay",
    "meaning": "花纹"
  },
  "ขยาย": {
    "phonetic": "khyaay",
    "meaning": "词汇"
  },
  "ลงทุน": {
    "phonetic": "lngthun",
    "meaning": "太阳能光"
  },
  "คาด": {
    "phonetic": "khaad",
    "meaning": "词汇"
  },
  "สร้าง": {
    "phonetic": "sraang",
    "meaning": "情绪韧性"
  },
  "มหาศาล": {
    "phonetic": "mhaasaal",
    "meaning": "词汇"
  },
  "แก่": {
    "phonetic": "aeg",
    "meaning": "词汇"
  },
  "ประชาชน": {
    "phonetic": "bprachaachn",
    "meaning": "词汇"
  },
  "ทั่วไป": {
    "phonetic": "thawaibp",
    "meaning": "词汇"
  },
  "ท้าทาย": {
    "phonetic": "thaathaay",
    "meaning": "词汇"
  },
  "คง": {
    "phonetic": "khng",
    "meaning": "稳定/安"
  },
  "ทรัพยากร": {
    "phonetic": "thraphyaagr",
    "meaning": "词汇"
  },
  "บุคคล": {
    "phonetic": "bukhkhl",
    "meaning": "词汇"
  },
  "บริหาร": {
    "phonetic": "brihaar",
    "meaning": "词汇"
  },
  "ผล": {
    "phonetic": "phl",
    "meaning": "词汇"
  },
  "ให้ท่า": {
    "phonetic": "aihthaa",
    "meaning": "词汇"
  },
  "นท": {
    "phonetic": "nth",
    "meaning": "金枕头榴"
  },
  "ราบ": {
    "phonetic": "raab",
    "meaning": "词汇"
  },
  "พลังงาน": {
    "phonetic": "phlangngaan",
    "meaning": "太阳能光"
  },
  "แสง": {
    "phonetic": "aesng",
    "meaning": "太阳能光"
  },
  "มาตรการ": {
    "phonetic": "maadtrgaar",
    "meaning": "免签旅游"
  },
  "วีซ่า": {
    "phonetic": "wii-sâa",
    "meaning": "签证"
  },
  "กระตุ้น": {
    "phonetic": "gradtun",
    "meaning": "免签旅游"
  },
  "ท่อง": {
    "phonetic": "thong",
    "meaning": "免签旅游"
  },
  "เที่ยว": {
    "phonetic": "ethiiyw",
    "meaning": "免签旅游"
  },
  "ทะลุ": {
    "phonetic": "thalu",
    "meaning": "糯米出口"
  },
  "เป้า": {
    "phonetic": "ebpaa",
    "meaning": "糯米出口"
  },
  "ชวน": {
    "phonetic": "chwn",
    "meaning": "词汇"
  },
  "คุย": {
    "phonetic": "khuy",
    "meaning": "词汇"
  },
  "สำคัญ": {
    "phonetic": "samkhay",
    "meaning": "终身学习"
  },
  "ทัศนคติ": {
    "phonetic": "that-sa-na-kha-ti",
    "meaning": "态度"
  },
  "ยุค": {
    "phonetic": "yukh",
    "meaning": "词汇"
  },
  "ปัจจุบัน": {
    "phonetic": "bpajjuban",
    "meaning": "词汇"
  },
  "สภาพ": {
    "phonetic": "sphaaph",
    "meaning": "词汇"
  },
  "แวดล้อม": {
    "phonetic": "aewdlom",
    "meaning": "词汇"
  },
  "สลับ": {
    "phonetic": "slab",
    "meaning": "词汇"
  },
  "ซับ": {
    "phonetic": "sab",
    "meaning": "词汇"
  },
  "ซ้อน": {
    "phonetic": "son",
    "meaning": "词汇"
  },
  "ขีด": {
    "phonetic": "khiid",
    "meaning": "词汇"
  },
  "ผลัก": {
    "phonetic": "phlag",
    "meaning": "词汇"
  },
  "กรอบ": {
    "phonetic": "grob",
    "meaning": "词汇"
  },
  "หาก": {
    "phonetic": "haag",
    "meaning": "词汇"
  },
  "ปรับ": {
    "phonetic": "bprab",
    "meaning": "词汇"
  },
  "พฤติกรรม": {
    "phonetic": "phdtigrrm",
    "meaning": "词汇"
  },
  "ผลลัพธ์": {
    "phonetic": "phllaphth",
    "meaning": "词汇"
  },
  "ประทับ": {
    "phonetic": "bprathab",
    "meaning": "词汇"
  },
  "ล้ม": {
    "phonetic": "lm",
    "meaning": "词汇"
  },
  "เหลว": {
    "phonetic": "ehlw",
    "meaning": "词汇"
  },
  "หวัง": {
    "phonetic": "hwang",
    "meaning": "词汇"
  },
  "แนะนำ": {
    "phonetic": "aenanam",
    "meaning": "词汇"
  },
  "ประกาย": {
    "phonetic": "bpragaay",
    "meaning": "词汇"
  },
  "ตน": {
    "phonetic": "dtn",
    "meaning": "词汇"
  },
  "สุข": {
    "phonetic": "sukh",
    "meaning": "词汇"
  },
  "ยืดหยุ่น": {
    "phonetic": "yuedhyun",
    "meaning": "情绪韧性"
  },
  "อารมณ์": {
    "phonetic": "oaarmn",
    "meaning": "情绪韧性"
  },
  "รับมือ": {
    "phonetic": "rabmueo",
    "meaning": "情绪韧性"
  },
  "วิกฤต": {
    "phonetic": "wi-grit",
    "meaning": "危机"
  },
  "วิถี": {
    "phonetic": "withii",
    "meaning": "极简主义"
  },
  "ล": {
    "phonetic": "l",
    "meaning": "龙功果"
  },
  "ลิ": {
    "phonetic": "li",
    "meaning": "极简主义"
  },
  "ซึม": {
    "phonetic": "suem",
    "meaning": "极简主义"
  },
  "จิตใจ": {
    "phonetic": "jit-jai",
    "meaning": "心灵"
  },
  "มหัศจรรย์": {
    "phonetic": "mhasjrry",
    "meaning": "复利的理"
  },
  "วางแผน": {
    "phonetic": "waangaephn",
    "meaning": "复利的理"
  },
  "ระยะ": {
    "phonetic": "raya",
    "meaning": "复利的理"
  }
};


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
