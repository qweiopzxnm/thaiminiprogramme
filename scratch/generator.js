const fs = require('fs');
const path = require('path');

// Ensure scratch directory exists
const scratchDir = 'scratch';
if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir);
}

// Subcategory targets:
// Daily: 90 in total (日常衣食: 30, 出行旅游: 30, 生活求助: 30)
// Work: 150 (职场商务: 150)
// News/Speeches: 90 (新闻资讯: 45, 主题演讲: 45)
// Total = 330

// We will generate the scenarios programmatically.
// Let's define the slots database
const slotDb = {
  dishes: [
    { th: 'ผัดไทยกุ้งสด', zh: '鲜虾炒泰粉', en: 'Pad Thai' },
    { th: 'ต้มยำกุ้ง', zh: '冬阴功汤', en: 'Tom Yum Goong' },
    { th: 'ข้าวเหนียวมะม่วง', zh: '芒果糯米饭', en: 'Mango Sticky Rice' },
    { th: 'แกงเขียวหวานไก่', zh: '绿咖喱鸡', en: 'Green Curry' },
    { th: 'ส้มตำไทย', zh: '泰式青木瓜沙拉', en: 'Papaya Salad' },
    { th: 'ข้าวผัดปู', zh: '蟹肉炒饭', en: 'Crab Fried Rice' },
    { th: 'ต้มข่าไก่', zh: '椰奶鸡汤', en: 'Tom Kha Gai' },
    { th: 'กะเพราหมูสับ', zh: '罗勒炒猪肉', en: 'Basil Minced Pork' },
    { th: 'แกงเผ็ดเป็ดย่าง', zh: '红咖喱烤鸭', en: 'Red Curry Duck' },
    { th: 'หมูสะเต๊ะ', zh: '沙爹烤猪肉', en: 'Pork Satay' }
  ],
  tastes: [
    { th: 'เผ็ดน้อย', zh: '微辣' },
    { th: 'เผ็ดกลาง', zh: '中辣' },
    { th: 'ไม่เผ็ดเลย', zh: '完全不辣' },
    { th: 'รสจัดจ้าน', zh: '浓郁重口' },
    { th: 'หวานน้อย', zh: '微甜' },
    { th: 'เปรี้ยวอมหวาน', zh: '酸甜' }
  ],
  drinks: [
    { th: 'ชาเย็น', zh: '冰泰茶', en: 'Iced Thai Tea' },
    { th: 'ชามะนาว', zh: '冰柠檬茶', en: 'Iced Lemon Tea' },
    { th: 'น้ำมะพร้าวปั่น', zh: '椰子冰沙', en: 'Coconut Smoothie' },
    { th: 'กาแฟเย็น', zh: '泰式冰咖啡', en: 'Iced Coffee' },
    { th: 'น้ำส้มคั้น', zh: '鲜榨橙汁', en: 'Fresh Orange Juice' },
    { th: 'น้ำมะม่วงปั่น', zh: '芒果冰沙', en: 'Mango Smoothie' },
    { th: 'ชาเขียวนม', zh: '冰绿奶茶', en: 'Iced Green Tea Latte' }
  ],
  fruits: [
    { th: 'ทุเรียนหมอนทอง', zh: '金枕头榴莲', en: 'Monthong Durian' },
    { th: 'มังคุดคัด', zh: '新鲜山竹', en: 'Mangosteen' },
    { th: 'มะพร้าวน้ำหอม', zh: '椰青', en: 'Young Coconut' },
    { th: 'มะม่วงอกร่อง', zh: '芒果', en: 'Mango' },
    { th: 'เงาะโรงเรียน', zh: '红毛丹', en: 'Rambutan' },
    { th: 'ลองกอง', zh: '龙功果', en: 'Longkong' },
    { th: 'สับปะรดภูแล', zh: '小菠萝', en: 'Phulae Pineapple' }
  ],
  clothes: [
    { th: 'เสื้อยืดลายน่ารัก', zh: '可爱印花T恤', en: 'T-shirt' },
    { th: 'กางเกงเลขาเดี่ยว', zh: '休闲长裤', en: 'Pants' },
    { th: 'เดรสผ้าฝ้ายแท้', zh: '纯棉连衣裙', en: 'Cotton Dress' },
    { th: 'เสื้อเชิ้ตลายดอก', zh: '花衬衫', en: 'Flower Shirt' },
    { th: 'กางเกงมวยไทย', zh: '泰拳短裤', en: 'Muay Thai Shorts' },
    { th: 'กระโปรงผ้าซิ่น', zh: '传统泰式裙', en: 'Thai Skirt' }
  ],
  colors: [
    { th: 'สีน้ำเงินเข้ม', zh: '深蓝色' },
    { th: 'สีแดงสด', zh: '鲜红色' },
    { th: 'สีขาวครีม', zh: '乳白色' },
    { th: 'สีดำสนิท', zh: '纯黑色' },
    { th: 'สีเหลืองพาสเทล', zh: '淡黄色' },
    { th: 'สีเขียวขี้ม้า', zh: '墨绿色' }
  ],
  places: [
    { th: 'วัดพระแก้ว', zh: '大皇宫/玉佛寺', en: 'Temple of Emerald Buddha' },
    { th: 'ตลาดนัดจตุจักร', zh: '乍都乍周末市场', en: 'Chatuchak Market' },
    { th: 'วัดอรุณราชวราราม', zh: '郑王庙', en: 'Temple of Dawn' },
    { th: 'สถานีรถไฟกรุงเทพ', zh: '曼谷火车站', en: 'Bangkok Station' },
    { th: 'ห้างสรรพสินค้าไอคอนสยาม', zh: '暹罗天地', en: 'ICONSIAM' },
    { th: 'ถนนเยาวราช', zh: '唐人街', en: 'Chinatown' }
  ],
  issues: [
    { th: 'แอปเปิดไม่ขึ้น', zh: 'APP打不开', en: 'app crash' },
    { th: 'เน็ตหลุดบ่อย', zh: '网络频繁掉线', en: 'network issue' },
    { th: 'พิมพ์งานไม่ได้', zh: '打印机无法工作', en: 'printer issue' },
    { th: 'ฮาร์ดดิสก์เสีย', zh: '硬盘故障损坏', en: 'hard disk crash' },
    { th: 'ข้อมูลสูญหาย', zh: '数据丢失了', en: 'data loss' }
  ],
  products: [
    { th: 'ระบบแอปซื้อขายออนไลน์', zh: '电商APP系统', en: 'e-commerce app' },
    { th: 'เซ็นเซอร์ไอโอทีวัดความชื้น', zh: '物联网湿度传感器', en: 'IoT sensor' },
    { th: 'โปรแกรมระบบบัญชีใหม่', zh: '新财务会计软件', en: 'accounting software' },
    { th: 'บริการคลาวด์จัดเก็บข้อมูล', zh: '云存储服务', en: 'cloud storage' },
    { th: 'แพลตฟอร์มการจัดการเรียนการสอน', zh: '在线学习教育平台', en: 'learning platform' }
  ],
  timeframes: [
    { th: 'วันศุกร์นี้บ่ายสามโมง', zh: '本周五下午三点' },
    { th: 'สิ้นเดือนนี้ก่อนห้าโมงเย็น', zh: '本月底下午五点前' },
    { th: 'สัปดาห์หน้าวันอังคารเช้า', zh: '下周二上午' },
    { th: 'วันพรุ่งนี้เที่ยงตรง', zh: '明天中午十二点' }
  ],
  marketingChannels: [
    { th: 'สื่อโฆษณาโซเชียลมีเดีย', zh: '社交媒体平台广告', en: 'social media ads' },
    { th: 'การจ้างบล็อกเกอร์รีวิวสินค้า', zh: '聘请博主进行产品测评', en: 'influencer marketing' },
    { th: 'การส่งเสริมการขายผ่านอีเมล', zh: '电子邮件促销推广', en: 'email marketing' },
    { th: 'กิจกรรมจัดแสดงสินค้านอกสถานที่', zh: '线下商场巡展推广活动', en: 'roadshow event' }
  ],
  newsTopics: [
    { th: 'การเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้า', zh: '电动汽车零部件产业快速增长', en: 'EV parts growth' },
    { th: 'โครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่', zh: '大型太阳能光伏发电投资项目', en: 'solar power project' },
    { th: 'มาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยว', zh: '免签政策强力刺激旅游业复苏', en: 'visa-free policy' },
    { th: 'การส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้า', zh: '泰米及糯米出口销售额大涨', en: 'rice export boom' }
  ],
  speechTopics: [
    { th: 'ความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิต', zh: '终身学习与持续成长思维的重要性', en: 'lifelong learning' },
    { th: 'การสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤต', zh: '培养情绪韧性以应对生活中的危机', en: 'emotional resilience' },
    { th: 'วิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระ', zh: '极简主义生活方式给心灵带来的自由', en: 'minimalist lifestyle' },
    { th: 'ความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาว', zh: '复利效应对长期个人财务规划的魔力', en: 'compound interest wealth' }
  ]
};

// Word dictionary mapping containing translations and phonetics of words we use
// This dictionary will be used by our harvester script to append missing words.
const newWordsDict = {
  'กะเพรา': { phonetic: 'ga-phrao', meaning: '罗勒/九层塔' },
  'กะเพราหมูสับ': { phonetic: 'ga-phraoหมูสับ', meaning: '罗勒炒猪肉碎' },
  'แกงเขียวหวานไก่': { phonetic: 'gaeng-khiao-waan-gai', meaning: '绿咖喱鸡' },
  'ข้าวเหนียวมะม่วง': { phonetic: 'khaaw-niaw-ma-muuang', meaning: '芒果糯米饭' },
  'ผัดไทยกุ้งสด': { phonetic: 'phat-thai-gung-sot', meaning: '鲜虾炒泰粉' },
  'ต้มยำกุ้ง': { phonetic: 'tom-yam-gung', meaning: '冬阴功汤' },
  'ส้มตำไทย': { phonetic: 'som-tam-thai', meaning: '泰式青木瓜沙拉' },
  'ข้าวผัดปู': { phonetic: 'khaaw-phat-puu', meaning: '蟹肉炒饭' },
  'ต้มข่าไก่': { phonetic: 'tom-khaa-gai', meaning: '椰奶鸡汤' },
  'แกงเผ็ดเป็ดย่าง': { phonetic: 'gaeng-phet-bpet-yaang', meaning: '红咖喱烤鸭' },
  'หมูสะเต๊ะ': { phonetic: 'muu-sa-te', meaning: '沙爹烤猪肉' },
  'รสจัดจ้าน': { phonetic: 'rot-jat-jaan', meaning: '浓郁重口' },
  'น้ำมะพร้าวปั่น': { phonetic: 'nam-ma-phraaw-bpan', meaning: '椰子冰沙' },
  'น้ำมะม่วงปั่น': { phonetic: 'nam-ma-muuang-bpan', meaning: '芒果冰沙' },
  'ชาเขียวนม': { phonetic: 'chaa-khiao-nom', meaning: '冰绿奶茶' },
  'ทุเรียนหมอนทอง': { phonetic: 'thu-rian-mɔɔn-thɔɔng', meaning: '金枕头榴莲' },
  'มังคุดคัด': { phonetic: 'mang-khut-khat', meaning: '新鲜山竹' },
  'มะพร้าวน้ำหอม': { phonetic: 'ma-phraaw-nam-hɔ̌ɔm', meaning: '椰青' },
  'มะม่วงอกร่อง': { phonetic: 'ma-muuang-ok-rɔ́ng', meaning: '芒果' },
  'เงาะโรงเรียน': { phonetic: 'ngɔ́-roong-rian', meaning: '红毛丹' },
  'ลองกอง': { phonetic: 'lɔɔng-gɔɔng', meaning: '龙功果' },
  'สับปะรดภูแล': { phonetic: 'sap-bpa-rot-phuu-lae', meaning: '小菠萝' },
  'เสื้อยืดลายน่ารัก': { phonetic: 'sʉ̂a-yʉ̂at-laai-naa-rak', meaning: '印花T恤' },
  'กางเกงเลขาเดี่ยว': { phonetic: 'gaang-geeng-lee-khaa-diiaw', meaning: '休闲长裤' },
  'เดรสผ้าฝ้ายแท้': { phonetic: 'dret-phaa-faai-thae', meaning: '纯棉连衣裙' },
  'เสื้อเชิ้ตลายดอก': { phonetic: 'sʉ̂a-chə́ət-laai-dɔɔk', meaning: '印花衬衫' },
  'กางเกงมวยไทย': { phonetic: 'gaang-geeng-muai-thai', meaning: '泰拳短裤' },
  'กระโปรงผ้าซิ่น': { phonetic: 'gra-bproong-phaa-sîn', meaning: '传统泰式裙' },
  'วัดพระแก้ว': { phonetic: 'wat-phra-gaeaw', meaning: '玉佛寺' },
  'ตลาดนัดจตุจักร': { phonetic: 'dta-laat-nat-ja-dtu-jak', meaning: '乍都乍周末市场' },
  'วัดอรุณราชวราราม': { phonetic: 'wat-a-run-raat-cha-wa-raa-raam', meaning: '郑王庙' },
  'สถานีรถไฟกรุงเทพ': { phonetic: 'sa-thaa-nii-rot-fai-grung-theep', meaning: '曼谷火车站' },
  'ห้างสรรพสินค้าไอคอนสยาม': { phonetic: 'haang-sap-pha-sin-khaa-ai-khɔn-sa-yaam', meaning: '暹罗天地' },
  'ถนนเยาวราช': { phonetic: 'tha-non-yao-wa-raat', meaning: '唐人街' },
  'แอปเปิดไม่ขึ้น': { phonetic: 'aep-bpeet-mai-khʉn', meaning: 'APP打不开' },
  'เน็ตหลุดบ่อย': { phonetic: 'net-lut-bɔi', meaning: '网络频繁掉线' },
  'พิมพ์งานไม่ได้': { phonetic: 'phim-ngaan-mai-daai', meaning: '打印机故障' },
  'ฮาร์ดดิสก์เสีย': { phonetic: 'haat-dik-siia', meaning: '硬盘故障' },
  'ข้อมูลสูญหาย': { phonetic: 'khaaw-muun-suun-haai', meaning: '数据丢失' },
  'ระบบแอปซื้อขายออนไลน์': { phonetic: 'ra-bop-aep-sʉʉ-khaai-ɔɔn-laai', meaning: '电商系统' },
  'เซ็นเซอร์ไอโอทีวัดความชื้น': { phonetic: 'sen-səə-ai-oo-thii-wat-khwaam-chʉ́n', meaning: '湿度传感器' },
  'โปรแกรมระบบบัญชีใหม่': { phonetic: 'proo-graem-ra-bop-ban-chii-mai', meaning: '新财务软件' },
  'บริการคลาวด์จัดเก็บข้อมูล': { phonetic: 'bɔɔ-ri-gaan-khlaao-jat-gep-khaaw-muun', meaning: '云存储服务' },
  'แพลตฟอร์มการจัดการเรียนการสอน': { phonetic: 'phaet-fɔɔm-gaan-jat-gaan-rian-gaan-sɔ̌ɔn', meaning: '在线学习教育平台' },
  'วันศุกร์นี้บ่ายสามโมง': { phonetic: 'wan-suk-nii-baai-saam-moong', meaning: '周五下午三点' },
  'สิ้นเดือนนี้ก่อนห้าโมงเย็น': { phonetic: 'sin-dʉan-nii-gɔɔn-haa-moong-yen', meaning: '本月底五点前' },
  'สัปดาห์หน้าวันอังคารเช้า': { phonetic: 'sap-daa-naa-wan-ang-khaan-chaaw', meaning: '下周二上午' },
  'วันพรุ่งนี้เที่ยงตรง': { phonetic: 'wan-phrung-nii-thiang-trong', meaning: '明天中午' },
  'สื่อโฆษณาโซเชียลมีเดีย': { phonetic: 'sʉʉ-khoo-sa-naa-soo-chian-mii-diia', meaning: '社交媒体广告' },
  'การจ้างบล็อกเกอร์รีวิวสินค้า': { phonetic: 'gaan-jaang-blok-gəə-ri-wiu-sin-khaa', meaning: '聘请博主测评' },
  'การส่งเสริมการขายผ่านอีเมล': { phonetic: 'gaan-song-səəm-gaan-khaai-phaan-ii-mel', meaning: '邮件营销' },
  'กิจกรรมจัดแสดงสินค้านอกสถานที่': { phonetic: 'gi-ja-gam-jat-sa-daeng-sin-khaa-nɔɔk-sa-thaan-thii', meaning: '线下巡展活动' },
  'การเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้า': { phonetic: 'gaan-təəp-dtoo-ut-saa-ha-gam-chin-suan-rot-yon-fai-faa', meaning: 'EV零部件增长' },
  'โครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่': { phonetic: 'khroong-gaan-lon-thun-pha-lang-gaan-saeng-aa-thit-kha-naat-yai', meaning: '太阳能光伏投资' },
  'มาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยว': { phonetic: 'maat-dtra-gaan-frii-wii-saa-phʉa-gra-dtuun-gaan-thɔng-thiaw', meaning: '免签旅游政策' },
  'การส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้า': { phonetic: 'gaan-song-ɔɔk-khaaw-niaw-thai-mii-yɔɔt-khaai-tha-lu-bpao', meaning: '糯米出口大涨' },
  'ความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิต': { phonetic: 'khwaam-sam-khan-khɔɔng-that-sa-na-kha-ti-gaan-rian-ruu-dtlaawt-chii-wit', meaning: '终身学习的态度' },
  'การสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤต': { phonetic: 'gaan-saang-khwaam-yʉʉt-yun-thaang-aa-rom-phʉa-rap-mʉʉ-gap-wi-grit', meaning: '情绪韧性对危机' },
  'วิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระ': { phonetic: 'wi-thii-chii-wit-baep-mi-ni-mɔɔl-li-sum-thii-chuay-hai-jit-jai-pen-i-sa-ra', meaning: '极简主义生活方式' },
  'ความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาว': { phonetic: 'khwaam-ma-hat-sa-jan-khɔng-fup-li-nai-gaan-waang-phaen-gaan-gən-ra-ya-yaao', meaning: '复利的理财魔力' }
};

fs.writeFileSync('scratch/vocab_db.json', JSON.stringify(newWordsDict, null, 2), 'utf8');

// Let's write generator functions
function getDailyEatScenarios() {
  const list = [];
  for (let i = 0; i < 30; i++) {
    const dish = slotDb.dishes[i % slotDb.dishes.length];
    const taste = slotDb.tastes[i % slotDb.tastes.length];
    const drink = slotDb.drinks[i % slotDb.drinks.length];
    const price = 100 + (i * 15) % 250;
    
    list.push({
      id: `daily_eat_${i + 1}`,
      title: `特色餐饮：${dish.zh}点餐 (Dining: ${dish.en})`,
      description: `在餐馆点一份${dish.zh}，并讨论辣度为${taste.zh}，加一杯${drink.zh}。`,
      difficulty: i % 3 === 0 ? '初级' : (i % 3 === 1 ? '中级' : '高级'),
      category: '生活情景',
      subCategory: '日常衣食',
      characters: {
        A: { id: 'A', name: '顾客 (ลูกค้า)', role: '点餐人', avatar: 'customer' },
        B: { id: 'B', name: '店员 (พนักงาน)', role: '服务员', avatar: 'waiter' }
      },
      dialogues: [
        { id: `daily_eat_${i + 1}_d1`, roleId: 'A', thai: `ขอสั่ง${dish.th}จานหนึ่งครับ`, chinese: `我想点一盘${dish.zh}。` },
        { id: `daily_eat_${i + 1}_d2`, roleId: 'B', thai: `ได้ค่ะ ต้องการรสชาติแบบไหนคะ`, chinese: `好的。请问要什么辣度或口味？` },
        { id: `daily_eat_${i + 1}_d3`, roleId: 'A', thai: `ขอรสชาติ${taste.th}นะครับ และขอน้ำแข็งด้วย`, chinese: `请做成${taste.zh}的。另外请给我冰块。` },
        { id: `daily_eat_${i + 1}_d4`, roleId: 'B', thai: `ค่ะ จะดื่ม${drink.th}เพิ่มด้วยไหมคะ`, chinese: `好的。需要再喝杯${drink.zh}吗？` },
        { id: `daily_eat_${i + 1}_d5`, roleId: 'A', thai: `ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ`, chinese: `是的，来一杯。一共是多少钱？` },
        { id: `daily_eat_${i + 1}_d6`, roleId: 'B', thai: `ทั้งหมดคือราคา${price}บาทค่ะ กรุณารอสักครู่นะคะ`, chinese: `一共是${price}泰铢。请您稍等片刻。` }
      ]
    });
  }
  return list;
}

function getDailyTravelScenarios() {
  const list = [];
  for (let i = 0; i < 30; i++) {
    const place = slotDb.places[i % slotDb.places.length];
    const fruit = slotDb.fruits[i % slotDb.fruits.length];
    const price = 50 + (i * 20) % 150;
    
    list.push({
      id: `daily_travel_${i + 1}`,
      title: `观光旅游：去${place.zh} (Travel: Visiting ${place.en})`,
      description: `问路去${place.zh}，并顺便去尝尝泰国当地著名的特产${fruit.zh}。`,
      difficulty: i % 3 === 0 ? '初级' : (i % 3 === 1 ? '中级' : '高级'),
      category: '生活情景',
      subCategory: '出行旅游',
      characters: {
        A: { id: 'A', name: '游客 (นักท่องเที่ยว)', role: '寻路人', avatar: 'tourist' },
        B: { id: 'B', name: '当地人 (คนท้องถิ่น)', role: '指路人', avatar: 'local' }
      },
      dialogues: [
        { id: `daily_travel_${i + 1}_d1`, roleId: 'A', thai: `ขอถามหน่อยครับ ไป${place.th}ยังไงครับ`, chinese: `请问一下，去${place.zh}怎么走？` },
        { id: `daily_travel_${i + 1}_d2`, roleId: 'B', thai: `เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ`, chinese: `沿着这条路直走，然后向右拐。` },
        { id: `daily_travel_${i + 1}_d3`, roleId: 'A', thai: `แถวนี้มีร้านขาย${fruit.th}อร่อยๆ ไหมครับ`, chinese: `这附近有卖好吃${fruit.zh}的商店吗？` },
        { id: `daily_travel_${i + 1}_d4`, roleId: 'B', thai: `มีครับ ร้านข้างหน้าขายกิโลละ${price}บาทครับ`, chinese: `有的。前面的店铺卖，一公斤${price}泰铢。` },
        { id: `daily_travel_${i + 1}_d5`, roleId: 'A', thai: `ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ`, chinese: `谢谢。坐突突车过去远吗？` },
        { id: `daily_travel_${i + 1}_d6`, roleId: 'B', thai: `ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ`, chinese: `不远，五分钟就到了。祝您旅途平安！` }
      ]
    });
  }
  return list;
}

function getDailyHelpScenarios() {
  const list = [];
  for (let i = 0; i < 30; i++) {
    const issue = slotDb.issues[i % slotDb.issues.length];
    const location = slotDb.places[i % slotDb.places.length];
    
    list.push({
      id: `daily_help_${i + 1}`,
      title: `生活求助：解决问题 (Help: Trouble solving)`,
      description: `向酒店或服务台反映遇到紧急问题，例如${issue.zh}，并求助解决。`,
      difficulty: i % 3 === 0 ? '初级' : (i % 3 === 1 ? '中级' : '高级'),
      category: '生活情景',
      subCategory: '生活求助',
      characters: {
        A: { id: 'A', name: '房客 (ลูกค้า)', role: '求助人', avatar: 'customer' },
        B: { id: 'B', name: '工作人员 (เจ้าหน้าที่)', role: '协助人', avatar: 'waiter' }
      },
      dialogues: [
        { id: `daily_help_${i + 1}_d1`, roleId: 'A', thai: `สวัสดีครับ เจอปัญหาร้ายแรงครับ`, chinese: `您好。我遇到了一个严重的问题。` },
        { id: `daily_help_${i + 1}_d2`, roleId: 'B', thai: `เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ`, chinese: `发生什么事了？有什么我可以帮您的吗？` },
        { id: `daily_help_${i + 1}_d3`, roleId: 'A', thai: `พบปัญหาเรื่อง${issue.th}ครับ ทำอย่างไรดีครับ`, chinese: `我发现遇到关于${issue.zh}的问题。该怎么办呢？` },
        { id: `daily_help_${i + 1}_d4`, roleId: 'B', thai: `ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ`, chinese: `请别着急。我这就安排技术人员帮您排查解决。` },
        { id: `daily_help_${i + 1}_d5`, roleId: 'A', thai: `ผมต้องการใช้ด่วนเพื่อไปสถานที่${location.th}ครับ`, chinese: `我急着要用，因为之后还要赶去${location.zh}。` },
        { id: `daily_help_${i + 1}_d6`, roleId: 'B', thai: `เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ`, chinese: `明白的。我们会尽最大努力尽快帮您处理完毕。` }
      ]
    });
  }
  return list;
}

function getWorkScenarios() {
  const list = [];
  for (let i = 0; i < 150; i++) {
    const product = slotDb.products[i % slotDb.products.length];
    const issue = slotDb.issues[i % slotDb.issues.length];
    const time = slotDb.timeframes[i % slotDb.timeframes.length];
    const channel = slotDb.marketingChannels[i % slotDb.marketingChannels.length];
    
    list.push({
      id: `work_biz_${i + 1}`,
      title: `职场工作会议 #${i + 1} (Work Project meeting)`,
      description: `讨论关于${product.zh}项目的开发调试，解决${issue.zh}的瓶颈问题，确定交付时间为${time.zh}，并商讨投放${channel.zh}。`,
      difficulty: i % 3 === 0 ? '初级' : (i % 3 === 1 ? '中级' : '高级'),
      category: '生活情景',
      subCategory: '职场商务',
      characters: {
        A: { id: 'A', name: '业务主管 (หัวหน้างาน)', role: '项目经理', avatar: 'manager' },
        B: { id: 'B', name: '工程师 (วิศวกร)', role: '技术负责人', avatar: 'assistant' }
      },
      dialogues: [
        { id: `work_biz_${i + 1}_d1`, roleId: 'A', thai: `สวัสดีครับ มาอัปเดตโครงการพัฒนา${product.th}กันครับ`, chinese: `你好。我们来同步一下${product.zh}开发项目的最新进度。` },
        { id: `work_biz_${i + 1}_d2`, roleId: 'B', thai: `ครับ ตอนนี้เจออุปสรรคเรื่อง${issue.th}อยู่ครับ`, chinese: `好的。目前系统里遇到了关于${issue.zh}的技术故障。` },
        { id: `work_biz_${i + 1}_d3`, roleId: 'A', thai: `ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทัน${time.th}ไหมครับ`, chinese: `必须加急处理。请问能在${time.zh}之前修复完成吗？` },
        { id: `work_biz_${i + 1}_d4`, roleId: 'B', thai: `คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่`, chinese: `预计没问题。团队下午会全员投入对系统接口做联调。` },
        { id: `work_biz_${i + 1}_d5`, roleId: 'A', thai: `ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงาน${channel.th}กันครับ`, chinese: `太棒了。修复通过之后，我们就正式启动${channel.zh}。` },
        { id: `work_biz_${i + 1}_d6`, roleId: 'B', thai: `ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ`, chinese: `好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。` }
      ]
    });
  }
  return list;
}

function getNewsScenarios() {
  const list = [];
  for (let i = 0; i < 45; i++) {
    const topic = slotDb.newsTopics[i % slotDb.newsTopics.length];
    
    list.push({
      id: `news_info_${i + 1}`,
      title: `热点新闻：${topic.zh} (News Topic #${i + 1})`,
      description: `泰语新闻广播：探讨关于${topic.zh}的政府声明、市场数据及未来预测。`,
      difficulty: i % 3 === 0 ? '初级' : (i % 3 === 1 ? '中级' : '高级'),
      category: '新闻演讲',
      subCategory: '新闻资讯',
      characters: {
        P: { id: 'P', name: '播音员 (News Reporter)', role: '新闻主播', avatar: 'narrator' }
      },
      dialogues: [
        { id: `news_info_${i + 1}_d1`, roleId: 'P', thai: `สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่อง${topic.th}ค่ะ`, chinese: `您好。今天我们为您播报关于${topic.zh}的专题新闻。` },
        { id: `news_info_${i + 1}_d2`, roleId: 'P', thai: `รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า`, chinese: '泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。' },
        { id: `news_info_${i + 1}_d3`, roleId: 'P', thai: `ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ`, chinese: '这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。' },
        { id: `news_info_${i + 1}_d4`, roleId: 'P', thai: `นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป`, chinese: '不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。' },
        { id: `news_info_${i + 1}_d5`, roleId: 'P', thai: `แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ`, chinese: '不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。' },
        { id: `news_info_${i + 1}_d6`, roleId: 'P', thai: `เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ`, chinese: '我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。' }
      ]
    });
  }
  return list;
}

function getSpeechScenarios() {
  const list = [];
  for (let i = 0; i < 45; i++) {
    const topic = slotDb.speechTopics[i % slotDb.speechTopics.length];
    
    list.push({
      id: `speech_topic_${i + 1}`,
      title: `主题演讲：${topic.zh} (Speech Topic #${i + 1})`,
      description: `TED式泰语个人主题演讲：分享关于${topic.zh}的洞察与个人实践建议。`,
      difficulty: i % 3 === 0 ? '初级' : (i % 3 === 1 ? '中级' : '高级'),
      category: '新闻演讲',
      subCategory: '主题演讲',
      characters: {
        S: { id: 'S', name: '演讲嘉宾 (TED Speaker)', role: '主讲人', avatar: 'narrator' }
      },
      dialogues: [
        { id: `speech_topic_${i + 1}_d1`, roleId: 'S', thai: `สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่อง${topic.th}ครับ`, chinese: `大家好。今天我想邀请各位共同探讨关于${topic.zh}这个议题。` },
        { id: `speech_topic_${i + 1}_d2`, roleId: 'S', thai: `ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ`, chinese: '在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。' },
        { id: `speech_topic_${i + 1}_d3`, roleId: 'S', thai: `แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง`, chinese: '然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。' },
        { id: `speech_topic_${i + 1}_d4`, roleId: 'S', thai: `หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ`, chinese: '只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。' },
        { id: `speech_topic_${i + 1}_d5`, roleId: 'S', thai: `อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ`, chinese: '不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。' },
        { id: `speech_topic_${i + 1}_d6`, roleId: 'S', thai: `หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ`, chinese: '衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。' }
      ]
    });
  }
  return list;
}

// Generate the batches and write to files
console.log('Generating Daily scenarios...');
const dailyEat = getDailyEatScenarios();
const dailyTravel = getDailyTravelScenarios();
const dailyHelp = getDailyHelpScenarios();
const batch1 = [...dailyEat, ...dailyTravel, ...dailyHelp];
fs.writeFileSync('scratch/new_scenarios_batch1.js', 'module.exports = ' + JSON.stringify(batch1, null, 2) + ';', 'utf8');
console.log('Batch 1 written. Total:', batch1.length);

console.log('Generating Work scenarios...');
const workScenarios = getWorkScenarios();
const batch2 = workScenarios.slice(0, 75);
const batch3 = workScenarios.slice(75, 150);
fs.writeFileSync('scratch/new_scenarios_batch2.js', 'module.exports = ' + JSON.stringify(batch2, null, 2) + ';', 'utf8');
fs.writeFileSync('scratch/new_scenarios_batch3.js', 'module.exports = ' + JSON.stringify(batch3, null, 2) + ';', 'utf8');
console.log('Batch 2 and 3 written. Total:', batch2.length + batch3.length);

console.log('Generating News and Speech scenarios...');
const newsScenarios = getNewsScenarios();
const speechScenarios = getSpeechScenarios();
const batch4 = [...newsScenarios, ...speechScenarios];
fs.writeFileSync('scratch/new_scenarios_batch4.js', 'module.exports = ' + JSON.stringify(batch4, null, 2) + ';', 'utf8');
console.log('Batch 4 written. Total:', batch4.length);

console.log('All batches generated in scratch directory.');
