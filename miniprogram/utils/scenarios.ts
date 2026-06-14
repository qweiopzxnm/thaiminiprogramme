// utils/scenarios.ts

export interface DialogueTurn {
  id: string;
  roleId: string; // e.g. 'A', 'B'
  thai: string;
  chinese: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  avatar: string; // SVG code or description/local asset name
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: '初级' | '中级' | '高级';
  category: '生活情景' | '经典课文';
  characters: Record<string, Character>;
  dialogues: DialogueTurn[];
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'restaurant',
    title: '在餐厅点餐 (At the Restaurant)',
    description: '模拟在泰国餐馆中点餐、加菜、询问辣度与结账的实用口语。',
    difficulty: '初级',
    category: '生活情景',
    characters: {
      A: { id: 'A', name: '顾客 (ลูกค้า)', role: '点餐人', avatar: 'customer' },
      B: { id: 'B', name: '服务员 (พนักงาน)', role: '餐厅服务人员', avatar: 'waiter' }
    },
    dialogues: [
      { id: 'r1', roleId: 'A', thai: 'ขอเมนูหน่อยครับ', chinese: '请给我看看菜单。' },
      { id: 'r2', roleId: 'B', thai: 'นี่ค่ะเมนูอาหาร จะกินอะไรดีคะ', chinese: '这是菜单。想吃点什么呢？' },
      { id: 'r3', roleId: 'A', thai: 'ขอต้มยำกุ้งหนึ่งที่และข้าวสวยสองจานครับ', chinese: '请给我一份冬阴功汤和两碗白饭。' },
      { id: 'r4', roleId: 'B', thai: 'ได้ค่ะ ต้มยำกุ้งเผ็ดไหมคะ', chinese: '好的，冬阴功汤要辣吗？' },
      { id: 'r5', roleId: 'A', thai: 'ไม่กินเผ็ดครับ ขอไม่เผ็ดเลยนะ', chinese: '我不吃辣。请完全不要辣哦。' },
      { id: 'r6', roleId: 'B', thai: 'ตกลงค่ะ รอสักครู่นะคะ', chinese: '好的，请稍等一下。' },
      { id: 'r7', roleId: 'A', thai: 'อร่อยมากครับ เช็คบิลด้วยครับ', chinese: '非常美味。请结账。' },
      { id: 'r8', roleId: 'B', thai: 'ทั้งหมดสองร้อยห้าสิบบาทค่ะ', chinese: '一共是250泰铢。' }
    ]
  },
  {
    id: 'airport',
    title: '机场值机柜台 (Airport Check-in)',
    description: '换登机牌、托运行李以及选择靠窗/过道座位的实用场景。',
    difficulty: '中级',
    category: '生活情景',
    characters: {
      A: { id: 'A', name: '旅客 (ผู้โดยสาร)', role: '旅客', avatar: 'passenger' },
      B: { id: 'B', name: '值机职员 (เจ้าหน้าที่)', role: '航空公司地勤人员', avatar: 'staff' }
    },
    dialogues: [
      { id: 'ap1', roleId: 'B', thai: 'สวัสดีค่ะ ขอพาสปอร์ตด้วยค่ะ', chinese: '您好，请给我您的护照。' },
      { id: 'ap2', roleId: 'A', thai: 'นี่ครับ จะไปกรุงเทพครับ', chinese: '给您。我要去曼谷。' },
      { id: 'ap3', roleId: 'B', thai: 'มีกระเป๋าเดินทางจะโหลดไหมคะ', chinese: '有需要托运的行李吗？' },
      { id: 'ap4', roleId: 'A', thai: 'มีกระเป๋าเดินทางหนึ่งใบครับ', chinese: '有一件托运的行李。' },
      { id: 'ap5', roleId: 'B', thai: 'ขอนั่งริมหน้าต่างหรือริมทางเดินคะ', chinese: '请问您想坐靠窗还是靠过道的座位？' },
      { id: 'ap6', roleId: 'A', thai: 'ขอที่นั่งริมหน้าต่างครับ', chinese: '我要靠窗的座位。' },
      { id: 'ap7', roleId: 'B', thai: 'นี่คือตั๋วเครื่องบิน ขึ้นเครื่องที่ประตูห้าค่ะ', chinese: '这是您的登机牌。请在5号登机口登机。' },
      { id: 'ap8', roleId: 'A', thai: 'ขอบคุณมากครับ', chinese: '非常感谢。' }
    ]
  },
  {
    id: 'directions',
    title: '街头问路 (Asking Directions)',
    description: '迷路时向路人打听景点或火车站位置的口语表达。',
    difficulty: '初级',
    category: '生活情景',
    characters: {
      A: { id: 'A', name: '游客 (นักท่องเที่ยว)', role: '迷路者', avatar: 'tourist' },
      B: { id: 'B', name: '当地路人 (คนเดินถนน)', role: '本地热心人', avatar: 'local' }
    },
    dialogues: [
      { id: 'd1', roleId: 'A', thai: 'ขอโทษครับ สถานีรถไฟอยู่ที่ไหนครับ', chinese: '打扰一下，请问火车站站在哪里？' },
      { id: 'd2', roleId: 'B', thai: 'สถานีรถไฟอยู่ไม่ไกลครับ เดินไปตรงนี้ครับ', chinese: '火车站不远，从这里直走。' },
      { id: 'd3', roleId: 'A', thai: 'เดินไปกี่นาทีครับ', chinese: '走路去要几分钟呢？' },
      { id: 'd4', roleId: 'B', thai: 'เดินไปประมาณห้านาทีก็ถึงครับ', chinese: '走路大约五分钟就到了。' },
      { id: 'd5', roleId: 'A', thai: 'เลี้ยวซ้ายหรือเลี้ยวขวาครับ', chinese: '是左转还是右转呢？' },
      { id: 'd6', roleId: 'B', thai: 'เลี้ยวขวาตรงไฟแดงครับ', chinese: '在红绿灯处右转。' },
      { id: 'd7', roleId: 'A', thai: 'ขอบคุณมากครับที่ช่วยด้วย', chinese: '非常感谢您的帮助！' },
      { id: 'd8', roleId: 'B', thai: 'ยินดีครับ เที่ยวให้สนุกนะ', chinese: '不客气，祝你玩得开心！' }
    ]
  },
  {
    id: 'hotel',
    title: '酒店登记入住 (Hotel Check-in)',
    description: '在泰国酒店大堂登记、确认预订以及询问早餐时间的对话。',
    difficulty: '中级',
    category: '生活情景',
    characters: {
      A: { id: 'A', name: '顾客 (แขก)', role: '入住住客', avatar: 'guest' },
      B: { id: 'B', name: '前台 (พนักงานต้อนรับ)', role: '酒店接待人员', avatar: 'receptionist' }
    },
    dialogues: [
      { id: 'h1', roleId: 'B', thai: 'ยินดีต้อนรับค่ะ จองห้องไว้ไหมคะ', chinese: '欢迎光临。请问您有预订房间吗？' },
      { id: 'h2', roleId: 'A', thai: 'จองไว้แล้วครับ ชื่ออลิสครับ', chinese: '已经预订了。名字叫爱丽丝。' },
      { id: 'h3', roleId: 'B', thai: 'ขอดูพาสปอร์ตเพื่อเช็คอินหน่อยค่ะ', chinese: '请出示护照为您办理登记入住。' },
      { id: 'h4', roleId: 'A', thai: 'นี่ครับ ห้องมีอาหารเช้าไหมครับ', chinese: '给您。房间有包含早餐吗？' },
      { id: 'h5', roleId: 'B', thai: 'มีค่ะ อาหารเช้าเริ่มหกโมงเช้าถึงสิบโมงเช้าค่ะ', chinese: '包含的。早餐时间是早上6点到10点。' },
      { id: 'h6', roleId: 'A', thai: 'ห้องน้ำอยู่ที่ไหนและมีกุญแจห้องไหมครับ', chinese: '请问洗手间在哪里，有房间钥匙了吗？' },
      { id: 'h7', roleId: 'B', thai: 'นี่คือกุญแจห้องแปดศูนย์หนึ่งค่ะ ลิฟต์อยู่ทางนู้นค่ะ', chinese: '这是801房的钥匙。电梯在那个方向。' },
      { id: 'h8', roleId: 'A', thai: 'ขอบคุณครับ', chinese: '谢谢。' }
    ]
  },
  {
    id: 'business',
    title: '商务成本谈妥 (Business Costs Negotiation)',
    description: '针对项目职责、成本预算以及把控开销方案的职场商务泰语场景。',
    difficulty: '高级',
    category: '生活情景',
    characters: {
      A: { id: 'A', name: '经理 (ผู้จัดการ)', role: '项目审核人', avatar: 'manager' },
      B: { id: 'B', name: '助理 (ผู้ช่วย)', role: '项目负责人', avatar: 'assistant' }
    },
    dialogues: [
      { id: 'b1', roleId: 'A', thai: 'ลูกค้าให้ข้อกำหนดว่าให้ต้นทุนต่ำที่สุด', chinese: '客户提出的要求是把成本降到最低。' },
      { id: 'b2', roleId: 'B', thai: 'เราจะพยายามระวังเรื่องราคาไม่ให้แพงเกินไปครับ', chinese: '我们会努力控制价格，不让它太贵。' },
      { id: 'b3', roleId: 'A', thai: 'คุณรู้ไหมว่าเราจะทำอย่างไรกับโครงการนี้', chinese: '你知道我们该怎么处理这个项目吗？' },
      { id: 'b4', roleId: 'B', thai: 'เราสามารถลดค่าโฆษณาและประหยัดงบได้ครับ', chinese: '我们可以削减广告开销来节省预算。' },
      { id: 'b5', roleId: 'A', thai: 'แล้วใครจะรับผิดชอบเรื่องนี้', chinese: '那么，谁会来负责这件事情？' },
      { id: 'b6', roleId: 'B', thai: 'ผมและทีมงานจะช่วยกันดูแลงานนี้เองครับ', chinese: '我和团队会一起全力协助把控这项工作。' },
      { id: 'b7', roleId: 'A', thai: 'ดีมาก ถ้ามีข้อมูลเพิ่มเติมมาหาผมนะ', chinese: '很好，如果有进一步的资料随时来找我。' },
      { id: 'b8', roleId: 'B', thai: 'ได้ครับ ผมจะรีบตั้งคณะทำงานขึ้นมา', chinese: '好的，我会立刻把工作组建立起来。' }
    ]
  },
  {
    id: 'manee1',
    title: '玛尼和朋友们：第一课 (Manee Lesson 1)',
    description: '泰国国民小学课本第一册第一课，带你认识小女孩“玛尼”和她的爱猫。',
    difficulty: '初级',
    category: '经典课文',
    characters: {
      M: { id: 'M', name: '玛尼 (มานี)', role: '主人公', avatar: 'manee' },
      P: { id: 'P', name: '旁白 (ผู้เล่า)', role: '叙述者', avatar: 'narrator' }
    },
    dialogues: [
      { id: 'm1_1', roleId: 'P', thai: 'มานี มี ตา', chinese: '玛尼有眼睛。' },
      { id: 'm1_2', roleId: 'M', thai: 'มานี มี ตา ดี', chinese: '玛尼有很好的视力（明亮的眼睛）。' },
      { id: 'm1_3', roleId: 'P', thai: 'โต มี ตา', chinese: '托（爱犬）有眼睛。' },
      { id: 'm1_4', roleId: 'M', thai: 'โต มี ตา ดี', chinese: '托有很好的视力。' },
      { id: 'm1_5', roleId: 'P', thai: 'กา มี ตา', chinese: '乌鸦有眼睛。' },
      { id: 'm1_6', roleId: 'M', thai: 'กา มี ตา ดี', chinese: '乌鸦有明亮的眼睛。' }
    ]
  },
  {
    id: 'manee2',
    title: '玛尼和朋友们：第二课 (Manee Lesson 2)',
    description: '第二课介绍玛尼的哥哥“皮提”和他的小马，以及玛尼养的温顺大象。',
    difficulty: '初级',
    category: '经典课文',
    characters: {
      P: { id: 'P', name: '皮提 (ปิติ)', role: '玛尼的哥哥', avatar: 'piti' },
      N: { id: 'N', name: '旁白 (ผู้เล่า)', role: '叙述者', avatar: 'narrator' }
    },
    dialogues: [
      { id: 'm2_1', roleId: 'N', thai: 'ปิติ มี ม้า', chinese: '皮提有一匹马。' },
      { id: 'm2_2', roleId: 'P', thai: 'ปิติ ขี่ ม้า ดี', chinese: '皮提骑马骑得很好。' },
      { id: 'm2_3', roleId: 'N', thai: 'ม้า ของ ปิติ มี ตา ดี', chinese: '皮提的马有很好的视力。' },
      { id: 'm2_4', roleId: 'P', thai: 'ม้า ของ ปิติ ไม่ กิน เผ็ด', chinese: '皮提的马不吃辣（纯测试用趣味句）。' },
      { id: 'm2_5', roleId: 'N', thai: 'มานี มี ช้าง', chinese: '玛尼有一只大象。' },
      { id: 'm2_6', roleId: 'P', thai: 'ช้าง ของ มานี มี ตา ดี', chinese: '玛尼的大象有明亮的眼睛。' }
    ]
  },
  {
    id: 'manee3',
    title: '玛尼和朋友们：第三课 (Manee Lesson 3)',
    description: '第三课讲述皮提、玛尼在草地上和马、大象快乐玩耍的故事。',
    difficulty: '初级',
    category: '经典课文',
    characters: {
      M: { id: 'M', name: '玛尼 (มานี)', role: '主人公', avatar: 'manee' },
      P: { id: 'P', name: '皮提 (ปิติ)', role: '玛尼的哥哥', avatar: 'piti' },
      N: { id: 'N', name: '旁白 (ผู้เล่า)', role: '叙述者', avatar: 'narrator' }
    },
    dialogues: [
      { id: 'm3_1', roleId: 'N', thai: 'ม้า ของ ปิติ อยู่ ที่นี่', chinese: '皮提的马在这里。' },
      { id: 'm3_2', roleId: 'P', thai: 'ม้า พัก อยู่ ใน สนาม', chinese: '马正在草地上休息。' },
      { id: 'm3_3', roleId: 'N', thai: 'ช้าง ของ มานี ก็ อยู่ ที่นี่', chinese: '玛尼的大象也在这里。' },
      { id: 'm3_4', roleId: 'M', thai: 'มานี ห่วง ช้าง มาก', chinese: '玛尼非常挂念（关爱）大象。' },
      { id: 'm3_5', roleId: 'N', thai: 'ปิติ และ มานี ชอบ สัตว์', chinese: '皮提和玛尼非常喜欢动物。' }
    ]
  }
];
