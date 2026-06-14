// miniprogram/utils/scenarios.ts
import { SegmentedWord } from './segment';

export interface DialogueTurn {
  id: string;
  roleId: string; // e.g. 'A', 'B', 'P', 'S'
  thai: string;
  chinese: string;
  segmentedWords?: SegmentedWord[];
}

export interface Character {
  id: string;
  name: string;
  role: string;
  avatar: string; // customer, waiter, narrator, local, manager, assistant, piti, manee
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: '初级' | '中级' | '高级';
  category: '生活情景' | '新闻演讲';
  subCategory: '日常衣食' | '出行旅游' | '职场商务' | '生活求助' | '新闻资讯' | '主题演讲';
  characters: Record<string, Character>;
  dialogues: DialogueTurn[];
}

export const SCENARIOS: Scenario[] = [
  {
    "id": "daily_eat_1",
    "title": "特色餐饮：鲜虾炒泰粉点餐 (Dining: Pad Thai)",
    "description": "在餐馆点一份鲜虾炒泰粉，并讨论辣度为微辣，加一杯冰泰茶。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_1_d1",
        "roleId": "A",
        "thai": "ขอสั่งผัดไทยกุ้งสดจานหนึ่งครับ",
        "chinese": "我想点一盘鲜虾炒泰粉。"
      },
      {
        "id": "daily_eat_1_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_1_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_1_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰泰茶吗？"
      },
      {
        "id": "daily_eat_1_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_1_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา100บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是100泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_2",
    "title": "特色餐饮：冬阴功汤点餐 (Dining: Tom Yum Goong)",
    "description": "在餐馆点一份冬阴功汤，并讨论辣度为中辣，加一杯冰柠檬茶。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_2_d1",
        "roleId": "A",
        "thai": "ขอสั่งต้มยำกุ้งจานหนึ่งครับ",
        "chinese": "我想点一盘冬阴功汤。"
      },
      {
        "id": "daily_eat_2_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_2_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดกลางนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成中辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_2_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชามะนาวเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰柠檬茶吗？"
      },
      {
        "id": "daily_eat_2_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_2_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา115บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是115泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_3",
    "title": "特色餐饮：芒果糯米饭点餐 (Dining: Mango Sticky Rice)",
    "description": "在餐馆点一份芒果糯米饭，并讨论辣度为完全不辣，加一杯椰子冰沙。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_3_d1",
        "roleId": "A",
        "thai": "ขอสั่งข้าวเหนียวมะม่วงจานหนึ่งครับ",
        "chinese": "我想点一盘芒果糯米饭。"
      },
      {
        "id": "daily_eat_3_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_3_d3",
        "roleId": "A",
        "thai": "ขอรสชาติไม่เผ็ดเลยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成完全不辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_3_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะพร้าวปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯椰子冰沙吗？"
      },
      {
        "id": "daily_eat_3_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_3_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา130บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是130泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_4",
    "title": "特色餐饮：绿咖喱鸡点餐 (Dining: Green Curry)",
    "description": "在餐馆点一份绿咖喱鸡，并讨论辣度为浓郁重口，加一杯泰式冰咖啡。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_4_d1",
        "roleId": "A",
        "thai": "ขอสั่งแกงเขียวหวานไก่จานหนึ่งครับ",
        "chinese": "我想点一盘绿咖喱鸡。"
      },
      {
        "id": "daily_eat_4_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_4_d3",
        "roleId": "A",
        "thai": "ขอรสชาติรสจัดจ้านนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成浓郁重口的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_4_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มกาแฟเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯泰式冰咖啡吗？"
      },
      {
        "id": "daily_eat_4_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_4_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา145บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是145泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_5",
    "title": "特色餐饮：泰式青木瓜沙拉点餐 (Dining: Papaya Salad)",
    "description": "在餐馆点一份泰式青木瓜沙拉，并讨论辣度为微甜，加一杯鲜榨橙汁。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_5_d1",
        "roleId": "A",
        "thai": "ขอสั่งส้มตำไทยจานหนึ่งครับ",
        "chinese": "我想点一盘泰式青木瓜沙拉。"
      },
      {
        "id": "daily_eat_5_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_5_d3",
        "roleId": "A",
        "thai": "ขอรสชาติหวานน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_5_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำส้มคั้นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯鲜榨橙汁吗？"
      },
      {
        "id": "daily_eat_5_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_5_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา160บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是160泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_6",
    "title": "特色餐饮：蟹肉炒饭点餐 (Dining: Crab Fried Rice)",
    "description": "在餐馆点一份蟹肉炒饭，并讨论辣度为酸甜，加一杯芒果冰沙。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_6_d1",
        "roleId": "A",
        "thai": "ขอสั่งข้าวผัดปูจานหนึ่งครับ",
        "chinese": "我想点一盘蟹肉炒饭。"
      },
      {
        "id": "daily_eat_6_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_6_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเปรี้ยวอมหวานนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成酸甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_6_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะม่วงปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯芒果冰沙吗？"
      },
      {
        "id": "daily_eat_6_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_6_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา175บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是175泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_7",
    "title": "特色餐饮：椰奶鸡汤点餐 (Dining: Tom Kha Gai)",
    "description": "在餐馆点一份椰奶鸡汤，并讨论辣度为微辣，加一杯冰绿奶茶。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_7_d1",
        "roleId": "A",
        "thai": "ขอสั่งต้มข่าไก่จานหนึ่งครับ",
        "chinese": "我想点一盘椰奶鸡汤。"
      },
      {
        "id": "daily_eat_7_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_7_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_7_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเขียวนมเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰绿奶茶吗？"
      },
      {
        "id": "daily_eat_7_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_7_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา190บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是190泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_8",
    "title": "特色餐饮：罗勒炒猪肉点餐 (Dining: Basil Minced Pork)",
    "description": "在餐馆点一份罗勒炒猪肉，并讨论辣度为中辣，加一杯冰泰茶。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_8_d1",
        "roleId": "A",
        "thai": "ขอสั่งกะเพราหมูสับจานหนึ่งครับ",
        "chinese": "我想点一盘罗勒炒猪肉。"
      },
      {
        "id": "daily_eat_8_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_8_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดกลางนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成中辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_8_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰泰茶吗？"
      },
      {
        "id": "daily_eat_8_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_8_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา205บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是205泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_9",
    "title": "特色餐饮：红咖喱烤鸭点餐 (Dining: Red Curry Duck)",
    "description": "在餐馆点一份红咖喱烤鸭，并讨论辣度为完全不辣，加一杯冰柠檬茶。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_9_d1",
        "roleId": "A",
        "thai": "ขอสั่งแกงเผ็ดเป็ดย่างจานหนึ่งครับ",
        "chinese": "我想点一盘红咖喱烤鸭。"
      },
      {
        "id": "daily_eat_9_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_9_d3",
        "roleId": "A",
        "thai": "ขอรสชาติไม่เผ็ดเลยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成完全不辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_9_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชามะนาวเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰柠檬茶吗？"
      },
      {
        "id": "daily_eat_9_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_9_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา220บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是220泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_10",
    "title": "特色餐饮：沙爹烤猪肉点餐 (Dining: Pork Satay)",
    "description": "在餐馆点一份沙爹烤猪肉，并讨论辣度为浓郁重口，加一杯椰子冰沙。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_10_d1",
        "roleId": "A",
        "thai": "ขอสั่งหมูสะเต๊ะจานหนึ่งครับ",
        "chinese": "我想点一盘沙爹烤猪肉。"
      },
      {
        "id": "daily_eat_10_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_10_d3",
        "roleId": "A",
        "thai": "ขอรสชาติรสจัดจ้านนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成浓郁重口的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_10_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะพร้าวปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯椰子冰沙吗？"
      },
      {
        "id": "daily_eat_10_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_10_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา235บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是235泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_11",
    "title": "特色餐饮：鲜虾炒泰粉点餐 (Dining: Pad Thai)",
    "description": "在餐馆点一份鲜虾炒泰粉，并讨论辣度为微甜，加一杯泰式冰咖啡。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_11_d1",
        "roleId": "A",
        "thai": "ขอสั่งผัดไทยกุ้งสดจานหนึ่งครับ",
        "chinese": "我想点一盘鲜虾炒泰粉。"
      },
      {
        "id": "daily_eat_11_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_11_d3",
        "roleId": "A",
        "thai": "ขอรสชาติหวานน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_11_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มกาแฟเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯泰式冰咖啡吗？"
      },
      {
        "id": "daily_eat_11_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_11_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา250บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是250泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_12",
    "title": "特色餐饮：冬阴功汤点餐 (Dining: Tom Yum Goong)",
    "description": "在餐馆点一份冬阴功汤，并讨论辣度为酸甜，加一杯鲜榨橙汁。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_12_d1",
        "roleId": "A",
        "thai": "ขอสั่งต้มยำกุ้งจานหนึ่งครับ",
        "chinese": "我想点一盘冬阴功汤。"
      },
      {
        "id": "daily_eat_12_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_12_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเปรี้ยวอมหวานนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成酸甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_12_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำส้มคั้นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯鲜榨橙汁吗？"
      },
      {
        "id": "daily_eat_12_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_12_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา265บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是265泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_13",
    "title": "特色餐饮：芒果糯米饭点餐 (Dining: Mango Sticky Rice)",
    "description": "在餐馆点一份芒果糯米饭，并讨论辣度为微辣，加一杯芒果冰沙。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_13_d1",
        "roleId": "A",
        "thai": "ขอสั่งข้าวเหนียวมะม่วงจานหนึ่งครับ",
        "chinese": "我想点一盘芒果糯米饭。"
      },
      {
        "id": "daily_eat_13_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_13_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_13_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะม่วงปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯芒果冰沙吗？"
      },
      {
        "id": "daily_eat_13_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_13_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา280บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是280泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_14",
    "title": "特色餐饮：绿咖喱鸡点餐 (Dining: Green Curry)",
    "description": "在餐馆点一份绿咖喱鸡，并讨论辣度为中辣，加一杯冰绿奶茶。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_14_d1",
        "roleId": "A",
        "thai": "ขอสั่งแกงเขียวหวานไก่จานหนึ่งครับ",
        "chinese": "我想点一盘绿咖喱鸡。"
      },
      {
        "id": "daily_eat_14_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_14_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดกลางนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成中辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_14_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเขียวนมเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰绿奶茶吗？"
      },
      {
        "id": "daily_eat_14_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_14_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา295บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是295泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_15",
    "title": "特色餐饮：泰式青木瓜沙拉点餐 (Dining: Papaya Salad)",
    "description": "在餐馆点一份泰式青木瓜沙拉，并讨论辣度为完全不辣，加一杯冰泰茶。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_15_d1",
        "roleId": "A",
        "thai": "ขอสั่งส้มตำไทยจานหนึ่งครับ",
        "chinese": "我想点一盘泰式青木瓜沙拉。"
      },
      {
        "id": "daily_eat_15_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_15_d3",
        "roleId": "A",
        "thai": "ขอรสชาติไม่เผ็ดเลยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成完全不辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_15_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰泰茶吗？"
      },
      {
        "id": "daily_eat_15_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_15_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา310บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是310泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_16",
    "title": "特色餐饮：蟹肉炒饭点餐 (Dining: Crab Fried Rice)",
    "description": "在餐馆点一份蟹肉炒饭，并讨论辣度为浓郁重口，加一杯冰柠檬茶。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_16_d1",
        "roleId": "A",
        "thai": "ขอสั่งข้าวผัดปูจานหนึ่งครับ",
        "chinese": "我想点一盘蟹肉炒饭。"
      },
      {
        "id": "daily_eat_16_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_16_d3",
        "roleId": "A",
        "thai": "ขอรสชาติรสจัดจ้านนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成浓郁重口的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_16_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชามะนาวเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰柠檬茶吗？"
      },
      {
        "id": "daily_eat_16_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_16_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา325บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是325泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_17",
    "title": "特色餐饮：椰奶鸡汤点餐 (Dining: Tom Kha Gai)",
    "description": "在餐馆点一份椰奶鸡汤，并讨论辣度为微甜，加一杯椰子冰沙。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_17_d1",
        "roleId": "A",
        "thai": "ขอสั่งต้มข่าไก่จานหนึ่งครับ",
        "chinese": "我想点一盘椰奶鸡汤。"
      },
      {
        "id": "daily_eat_17_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_17_d3",
        "roleId": "A",
        "thai": "ขอรสชาติหวานน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_17_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะพร้าวปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯椰子冰沙吗？"
      },
      {
        "id": "daily_eat_17_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_17_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา340บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是340泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_18",
    "title": "特色餐饮：罗勒炒猪肉点餐 (Dining: Basil Minced Pork)",
    "description": "在餐馆点一份罗勒炒猪肉，并讨论辣度为酸甜，加一杯泰式冰咖啡。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_18_d1",
        "roleId": "A",
        "thai": "ขอสั่งกะเพราหมูสับจานหนึ่งครับ",
        "chinese": "我想点一盘罗勒炒猪肉。"
      },
      {
        "id": "daily_eat_18_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_18_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเปรี้ยวอมหวานนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成酸甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_18_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มกาแฟเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯泰式冰咖啡吗？"
      },
      {
        "id": "daily_eat_18_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_18_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา105บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是105泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_19",
    "title": "特色餐饮：红咖喱烤鸭点餐 (Dining: Red Curry Duck)",
    "description": "在餐馆点一份红咖喱烤鸭，并讨论辣度为微辣，加一杯鲜榨橙汁。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_19_d1",
        "roleId": "A",
        "thai": "ขอสั่งแกงเผ็ดเป็ดย่างจานหนึ่งครับ",
        "chinese": "我想点一盘红咖喱烤鸭。"
      },
      {
        "id": "daily_eat_19_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_19_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_19_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำส้มคั้นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯鲜榨橙汁吗？"
      },
      {
        "id": "daily_eat_19_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_19_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา120บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是120泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_20",
    "title": "特色餐饮：沙爹烤猪肉点餐 (Dining: Pork Satay)",
    "description": "在餐馆点一份沙爹烤猪肉，并讨论辣度为中辣，加一杯芒果冰沙。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_20_d1",
        "roleId": "A",
        "thai": "ขอสั่งหมูสะเต๊ะจานหนึ่งครับ",
        "chinese": "我想点一盘沙爹烤猪肉。"
      },
      {
        "id": "daily_eat_20_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_20_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดกลางนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成中辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_20_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะม่วงปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯芒果冰沙吗？"
      },
      {
        "id": "daily_eat_20_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_20_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา135บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是135泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_21",
    "title": "特色餐饮：鲜虾炒泰粉点餐 (Dining: Pad Thai)",
    "description": "在餐馆点一份鲜虾炒泰粉，并讨论辣度为完全不辣，加一杯冰绿奶茶。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_21_d1",
        "roleId": "A",
        "thai": "ขอสั่งผัดไทยกุ้งสดจานหนึ่งครับ",
        "chinese": "我想点一盘鲜虾炒泰粉。"
      },
      {
        "id": "daily_eat_21_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_21_d3",
        "roleId": "A",
        "thai": "ขอรสชาติไม่เผ็ดเลยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成完全不辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_21_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเขียวนมเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰绿奶茶吗？"
      },
      {
        "id": "daily_eat_21_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_21_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา150บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是150泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_22",
    "title": "特色餐饮：冬阴功汤点餐 (Dining: Tom Yum Goong)",
    "description": "在餐馆点一份冬阴功汤，并讨论辣度为浓郁重口，加一杯冰泰茶。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_22_d1",
        "roleId": "A",
        "thai": "ขอสั่งต้มยำกุ้งจานหนึ่งครับ",
        "chinese": "我想点一盘冬阴功汤。"
      },
      {
        "id": "daily_eat_22_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_22_d3",
        "roleId": "A",
        "thai": "ขอรสชาติรสจัดจ้านนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成浓郁重口的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_22_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰泰茶吗？"
      },
      {
        "id": "daily_eat_22_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_22_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา165บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是165泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_23",
    "title": "特色餐饮：芒果糯米饭点餐 (Dining: Mango Sticky Rice)",
    "description": "在餐馆点一份芒果糯米饭，并讨论辣度为微甜，加一杯冰柠檬茶。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_23_d1",
        "roleId": "A",
        "thai": "ขอสั่งข้าวเหนียวมะม่วงจานหนึ่งครับ",
        "chinese": "我想点一盘芒果糯米饭。"
      },
      {
        "id": "daily_eat_23_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_23_d3",
        "roleId": "A",
        "thai": "ขอรสชาติหวานน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_23_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชามะนาวเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰柠檬茶吗？"
      },
      {
        "id": "daily_eat_23_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_23_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา180บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是180泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_24",
    "title": "特色餐饮：绿咖喱鸡点餐 (Dining: Green Curry)",
    "description": "在餐馆点一份绿咖喱鸡，并讨论辣度为酸甜，加一杯椰子冰沙。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_24_d1",
        "roleId": "A",
        "thai": "ขอสั่งแกงเขียวหวานไก่จานหนึ่งครับ",
        "chinese": "我想点一盘绿咖喱鸡。"
      },
      {
        "id": "daily_eat_24_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_24_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเปรี้ยวอมหวานนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成酸甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_24_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะพร้าวปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯椰子冰沙吗？"
      },
      {
        "id": "daily_eat_24_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_24_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา195บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是195泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_25",
    "title": "特色餐饮：泰式青木瓜沙拉点餐 (Dining: Papaya Salad)",
    "description": "在餐馆点一份泰式青木瓜沙拉，并讨论辣度为微辣，加一杯泰式冰咖啡。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_25_d1",
        "roleId": "A",
        "thai": "ขอสั่งส้มตำไทยจานหนึ่งครับ",
        "chinese": "我想点一盘泰式青木瓜沙拉。"
      },
      {
        "id": "daily_eat_25_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_25_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_25_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มกาแฟเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯泰式冰咖啡吗？"
      },
      {
        "id": "daily_eat_25_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_25_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา210บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是210泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_26",
    "title": "特色餐饮：蟹肉炒饭点餐 (Dining: Crab Fried Rice)",
    "description": "在餐馆点一份蟹肉炒饭，并讨论辣度为中辣，加一杯鲜榨橙汁。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_26_d1",
        "roleId": "A",
        "thai": "ขอสั่งข้าวผัดปูจานหนึ่งครับ",
        "chinese": "我想点一盘蟹肉炒饭。"
      },
      {
        "id": "daily_eat_26_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_26_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเผ็ดกลางนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成中辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_26_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำส้มคั้นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯鲜榨橙汁吗？"
      },
      {
        "id": "daily_eat_26_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_26_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา225บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是225泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_27",
    "title": "特色餐饮：椰奶鸡汤点餐 (Dining: Tom Kha Gai)",
    "description": "在餐馆点一份椰奶鸡汤，并讨论辣度为完全不辣，加一杯芒果冰沙。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_27_d1",
        "roleId": "A",
        "thai": "ขอสั่งต้มข่าไก่จานหนึ่งครับ",
        "chinese": "我想点一盘椰奶鸡汤。"
      },
      {
        "id": "daily_eat_27_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_27_d3",
        "roleId": "A",
        "thai": "ขอรสชาติไม่เผ็ดเลยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成完全不辣的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_27_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มน้ำมะม่วงปั่นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯芒果冰沙吗？"
      },
      {
        "id": "daily_eat_27_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_27_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา240บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是240泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_28",
    "title": "特色餐饮：罗勒炒猪肉点餐 (Dining: Basil Minced Pork)",
    "description": "在餐馆点一份罗勒炒猪肉，并讨论辣度为浓郁重口，加一杯冰绿奶茶。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_28_d1",
        "roleId": "A",
        "thai": "ขอสั่งกะเพราหมูสับจานหนึ่งครับ",
        "chinese": "我想点一盘罗勒炒猪肉。"
      },
      {
        "id": "daily_eat_28_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_28_d3",
        "roleId": "A",
        "thai": "ขอรสชาติรสจัดจ้านนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成浓郁重口的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_28_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเขียวนมเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰绿奶茶吗？"
      },
      {
        "id": "daily_eat_28_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_28_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา255บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是255泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_29",
    "title": "特色餐饮：红咖喱烤鸭点餐 (Dining: Red Curry Duck)",
    "description": "在餐馆点一份红咖喱烤鸭，并讨论辣度为微甜，加一杯冰泰茶。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_29_d1",
        "roleId": "A",
        "thai": "ขอสั่งแกงเผ็ดเป็ดย่างจานหนึ่งครับ",
        "chinese": "我想点一盘红咖喱烤鸭。"
      },
      {
        "id": "daily_eat_29_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_29_d3",
        "roleId": "A",
        "thai": "ขอรสชาติหวานน้อยนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成微甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_29_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชาเย็นเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰泰茶吗？"
      },
      {
        "id": "daily_eat_29_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_29_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา270บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是270泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_eat_30",
    "title": "特色餐饮：沙爹烤猪肉点餐 (Dining: Pork Satay)",
    "description": "在餐馆点一份沙爹烤猪肉，并讨论辣度为酸甜，加一杯冰柠檬茶。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "日常衣食",
    "characters": {
      "A": {
        "id": "A",
        "name": "顾客 (ลูกค้า)",
        "role": "点餐人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "店员 (พนักงาน)",
        "role": "服务员",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_eat_30_d1",
        "roleId": "A",
        "thai": "ขอสั่งหมูสะเต๊ะจานหนึ่งครับ",
        "chinese": "我想点一盘沙爹烤猪肉。"
      },
      {
        "id": "daily_eat_30_d2",
        "roleId": "B",
        "thai": "ได้ค่ะ ต้องการรสชาติแบบไหนคะ",
        "chinese": "好的。请问要什么辣度或口味？"
      },
      {
        "id": "daily_eat_30_d3",
        "roleId": "A",
        "thai": "ขอรสชาติเปรี้ยวอมหวานนะครับ และขอน้ำแข็งด้วย",
        "chinese": "请做成酸甜的。另外请给我冰块。"
      },
      {
        "id": "daily_eat_30_d4",
        "roleId": "B",
        "thai": "ค่ะ จะดื่มชามะนาวเพิ่มด้วยไหมคะ",
        "chinese": "好的。需要再喝杯冰柠檬茶吗？"
      },
      {
        "id": "daily_eat_30_d5",
        "roleId": "A",
        "thai": "ครับ เอาแก้วหนึ่งครับ ทั้งหมดราคาเท่าไหร่ครับ",
        "chinese": "是的，来一杯。一共是多少钱？"
      },
      {
        "id": "daily_eat_30_d6",
        "roleId": "B",
        "thai": "ทั้งหมดคือราคา285บาทค่ะ กรุณารอสักครู่นะคะ",
        "chinese": "一共是285泰铢。请您稍等片刻。"
      }
    ]
  },
  {
    "id": "daily_travel_1",
    "title": "观光旅游：去大皇宫/玉佛寺 (Travel: Visiting Temple of Emerald Buddha)",
    "description": "问路去大皇宫/玉佛寺，并顺便去尝尝泰国当地著名的特产金枕头榴莲。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_1_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดพระแก้วยังไงครับ",
        "chinese": "请问一下，去大皇宫/玉佛寺怎么走？"
      },
      {
        "id": "daily_travel_1_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_1_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายทุเรียนหมอนทองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃金枕头榴莲的商店吗？"
      },
      {
        "id": "daily_travel_1_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ50บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤50泰铢。"
      },
      {
        "id": "daily_travel_1_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_1_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_2",
    "title": "观光旅游：去乍都乍周末市场 (Travel: Visiting Chatuchak Market)",
    "description": "问路去乍都乍周末市场，并顺便去尝尝泰国当地著名的特产新鲜山竹。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_2_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปตลาดนัดจตุจักรยังไงครับ",
        "chinese": "请问一下，去乍都乍周末市场怎么走？"
      },
      {
        "id": "daily_travel_2_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_2_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมังคุดคัดอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃新鲜山竹的商店吗？"
      },
      {
        "id": "daily_travel_2_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ70บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤70泰铢。"
      },
      {
        "id": "daily_travel_2_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_2_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_3",
    "title": "观光旅游：去郑王庙 (Travel: Visiting Temple of Dawn)",
    "description": "问路去郑王庙，并顺便去尝尝泰国当地著名的特产椰青。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_3_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดอรุณราชวรารามยังไงครับ",
        "chinese": "请问一下，去郑王庙怎么走？"
      },
      {
        "id": "daily_travel_3_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_3_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะพร้าวน้ำหอมอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃椰青的商店吗？"
      },
      {
        "id": "daily_travel_3_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ90บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤90泰铢。"
      },
      {
        "id": "daily_travel_3_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_3_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_4",
    "title": "观光旅游：去曼谷火车站 (Travel: Visiting Bangkok Station)",
    "description": "问路去曼谷火车站，并顺便去尝尝泰国当地著名的特产芒果。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_4_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปสถานีรถไฟกรุงเทพยังไงครับ",
        "chinese": "请问一下，去曼谷火车站怎么走？"
      },
      {
        "id": "daily_travel_4_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_4_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะม่วงอกร่องอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃芒果的商店吗？"
      },
      {
        "id": "daily_travel_4_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ110บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤110泰铢。"
      },
      {
        "id": "daily_travel_4_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_4_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_5",
    "title": "观光旅游：去暹罗天地 (Travel: Visiting ICONSIAM)",
    "description": "问路去暹罗天地，并顺便去尝尝泰国当地著名的特产红毛丹。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_5_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปห้างสรรพสินค้าไอคอนสยามยังไงครับ",
        "chinese": "请问一下，去暹罗天地怎么走？"
      },
      {
        "id": "daily_travel_5_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_5_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายเงาะโรงเรียนอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃红毛丹的商店吗？"
      },
      {
        "id": "daily_travel_5_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ130บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤130泰铢。"
      },
      {
        "id": "daily_travel_5_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_5_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_6",
    "title": "观光旅游：去唐人街 (Travel: Visiting Chinatown)",
    "description": "问路去唐人街，并顺便去尝尝泰国当地著名的特产龙功果。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_6_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปถนนเยาวราชยังไงครับ",
        "chinese": "请问一下，去唐人街怎么走？"
      },
      {
        "id": "daily_travel_6_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_6_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายลองกองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃龙功果的商店吗？"
      },
      {
        "id": "daily_travel_6_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ150บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤150泰铢。"
      },
      {
        "id": "daily_travel_6_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_6_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_7",
    "title": "观光旅游：去大皇宫/玉佛寺 (Travel: Visiting Temple of Emerald Buddha)",
    "description": "问路去大皇宫/玉佛寺，并顺便去尝尝泰国当地著名的特产小菠萝。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_7_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดพระแก้วยังไงครับ",
        "chinese": "请问一下，去大皇宫/玉佛寺怎么走？"
      },
      {
        "id": "daily_travel_7_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_7_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายสับปะรดภูแลอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃小菠萝的商店吗？"
      },
      {
        "id": "daily_travel_7_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ170บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤170泰铢。"
      },
      {
        "id": "daily_travel_7_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_7_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_8",
    "title": "观光旅游：去乍都乍周末市场 (Travel: Visiting Chatuchak Market)",
    "description": "问路去乍都乍周末市场，并顺便去尝尝泰国当地著名的特产金枕头榴莲。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_8_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปตลาดนัดจตุจักรยังไงครับ",
        "chinese": "请问一下，去乍都乍周末市场怎么走？"
      },
      {
        "id": "daily_travel_8_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_8_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายทุเรียนหมอนทองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃金枕头榴莲的商店吗？"
      },
      {
        "id": "daily_travel_8_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ190บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤190泰铢。"
      },
      {
        "id": "daily_travel_8_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_8_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_9",
    "title": "观光旅游：去郑王庙 (Travel: Visiting Temple of Dawn)",
    "description": "问路去郑王庙，并顺便去尝尝泰国当地著名的特产新鲜山竹。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_9_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดอรุณราชวรารามยังไงครับ",
        "chinese": "请问一下，去郑王庙怎么走？"
      },
      {
        "id": "daily_travel_9_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_9_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมังคุดคัดอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃新鲜山竹的商店吗？"
      },
      {
        "id": "daily_travel_9_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ60บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤60泰铢。"
      },
      {
        "id": "daily_travel_9_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_9_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_10",
    "title": "观光旅游：去曼谷火车站 (Travel: Visiting Bangkok Station)",
    "description": "问路去曼谷火车站，并顺便去尝尝泰国当地著名的特产椰青。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_10_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปสถานีรถไฟกรุงเทพยังไงครับ",
        "chinese": "请问一下，去曼谷火车站怎么走？"
      },
      {
        "id": "daily_travel_10_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_10_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะพร้าวน้ำหอมอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃椰青的商店吗？"
      },
      {
        "id": "daily_travel_10_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ80บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤80泰铢。"
      },
      {
        "id": "daily_travel_10_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_10_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_11",
    "title": "观光旅游：去暹罗天地 (Travel: Visiting ICONSIAM)",
    "description": "问路去暹罗天地，并顺便去尝尝泰国当地著名的特产芒果。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_11_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปห้างสรรพสินค้าไอคอนสยามยังไงครับ",
        "chinese": "请问一下，去暹罗天地怎么走？"
      },
      {
        "id": "daily_travel_11_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_11_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะม่วงอกร่องอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃芒果的商店吗？"
      },
      {
        "id": "daily_travel_11_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ100บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤100泰铢。"
      },
      {
        "id": "daily_travel_11_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_11_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_12",
    "title": "观光旅游：去唐人街 (Travel: Visiting Chinatown)",
    "description": "问路去唐人街，并顺便去尝尝泰国当地著名的特产红毛丹。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_12_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปถนนเยาวราชยังไงครับ",
        "chinese": "请问一下，去唐人街怎么走？"
      },
      {
        "id": "daily_travel_12_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_12_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายเงาะโรงเรียนอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃红毛丹的商店吗？"
      },
      {
        "id": "daily_travel_12_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ120บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤120泰铢。"
      },
      {
        "id": "daily_travel_12_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_12_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_13",
    "title": "观光旅游：去大皇宫/玉佛寺 (Travel: Visiting Temple of Emerald Buddha)",
    "description": "问路去大皇宫/玉佛寺，并顺便去尝尝泰国当地著名的特产龙功果。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_13_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดพระแก้วยังไงครับ",
        "chinese": "请问一下，去大皇宫/玉佛寺怎么走？"
      },
      {
        "id": "daily_travel_13_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_13_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายลองกองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃龙功果的商店吗？"
      },
      {
        "id": "daily_travel_13_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ140บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤140泰铢。"
      },
      {
        "id": "daily_travel_13_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_13_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_14",
    "title": "观光旅游：去乍都乍周末市场 (Travel: Visiting Chatuchak Market)",
    "description": "问路去乍都乍周末市场，并顺便去尝尝泰国当地著名的特产小菠萝。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_14_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปตลาดนัดจตุจักรยังไงครับ",
        "chinese": "请问一下，去乍都乍周末市场怎么走？"
      },
      {
        "id": "daily_travel_14_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_14_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายสับปะรดภูแลอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃小菠萝的商店吗？"
      },
      {
        "id": "daily_travel_14_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ160บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤160泰铢。"
      },
      {
        "id": "daily_travel_14_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_14_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_15",
    "title": "观光旅游：去郑王庙 (Travel: Visiting Temple of Dawn)",
    "description": "问路去郑王庙，并顺便去尝尝泰国当地著名的特产金枕头榴莲。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_15_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดอรุณราชวรารามยังไงครับ",
        "chinese": "请问一下，去郑王庙怎么走？"
      },
      {
        "id": "daily_travel_15_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_15_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายทุเรียนหมอนทองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃金枕头榴莲的商店吗？"
      },
      {
        "id": "daily_travel_15_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ180บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤180泰铢。"
      },
      {
        "id": "daily_travel_15_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_15_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_16",
    "title": "观光旅游：去曼谷火车站 (Travel: Visiting Bangkok Station)",
    "description": "问路去曼谷火车站，并顺便去尝尝泰国当地著名的特产新鲜山竹。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_16_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปสถานีรถไฟกรุงเทพยังไงครับ",
        "chinese": "请问一下，去曼谷火车站怎么走？"
      },
      {
        "id": "daily_travel_16_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_16_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมังคุดคัดอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃新鲜山竹的商店吗？"
      },
      {
        "id": "daily_travel_16_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ50บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤50泰铢。"
      },
      {
        "id": "daily_travel_16_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_16_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_17",
    "title": "观光旅游：去暹罗天地 (Travel: Visiting ICONSIAM)",
    "description": "问路去暹罗天地，并顺便去尝尝泰国当地著名的特产椰青。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_17_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปห้างสรรพสินค้าไอคอนสยามยังไงครับ",
        "chinese": "请问一下，去暹罗天地怎么走？"
      },
      {
        "id": "daily_travel_17_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_17_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะพร้าวน้ำหอมอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃椰青的商店吗？"
      },
      {
        "id": "daily_travel_17_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ70บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤70泰铢。"
      },
      {
        "id": "daily_travel_17_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_17_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_18",
    "title": "观光旅游：去唐人街 (Travel: Visiting Chinatown)",
    "description": "问路去唐人街，并顺便去尝尝泰国当地著名的特产芒果。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_18_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปถนนเยาวราชยังไงครับ",
        "chinese": "请问一下，去唐人街怎么走？"
      },
      {
        "id": "daily_travel_18_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_18_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะม่วงอกร่องอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃芒果的商店吗？"
      },
      {
        "id": "daily_travel_18_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ90บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤90泰铢。"
      },
      {
        "id": "daily_travel_18_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_18_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_19",
    "title": "观光旅游：去大皇宫/玉佛寺 (Travel: Visiting Temple of Emerald Buddha)",
    "description": "问路去大皇宫/玉佛寺，并顺便去尝尝泰国当地著名的特产红毛丹。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_19_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดพระแก้วยังไงครับ",
        "chinese": "请问一下，去大皇宫/玉佛寺怎么走？"
      },
      {
        "id": "daily_travel_19_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_19_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายเงาะโรงเรียนอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃红毛丹的商店吗？"
      },
      {
        "id": "daily_travel_19_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ110บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤110泰铢。"
      },
      {
        "id": "daily_travel_19_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_19_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_20",
    "title": "观光旅游：去乍都乍周末市场 (Travel: Visiting Chatuchak Market)",
    "description": "问路去乍都乍周末市场，并顺便去尝尝泰国当地著名的特产龙功果。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_20_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปตลาดนัดจตุจักรยังไงครับ",
        "chinese": "请问一下，去乍都乍周末市场怎么走？"
      },
      {
        "id": "daily_travel_20_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_20_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายลองกองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃龙功果的商店吗？"
      },
      {
        "id": "daily_travel_20_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ130บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤130泰铢。"
      },
      {
        "id": "daily_travel_20_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_20_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_21",
    "title": "观光旅游：去郑王庙 (Travel: Visiting Temple of Dawn)",
    "description": "问路去郑王庙，并顺便去尝尝泰国当地著名的特产小菠萝。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_21_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดอรุณราชวรารามยังไงครับ",
        "chinese": "请问一下，去郑王庙怎么走？"
      },
      {
        "id": "daily_travel_21_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_21_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายสับปะรดภูแลอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃小菠萝的商店吗？"
      },
      {
        "id": "daily_travel_21_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ150บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤150泰铢。"
      },
      {
        "id": "daily_travel_21_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_21_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_22",
    "title": "观光旅游：去曼谷火车站 (Travel: Visiting Bangkok Station)",
    "description": "问路去曼谷火车站，并顺便去尝尝泰国当地著名的特产金枕头榴莲。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_22_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปสถานีรถไฟกรุงเทพยังไงครับ",
        "chinese": "请问一下，去曼谷火车站怎么走？"
      },
      {
        "id": "daily_travel_22_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_22_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายทุเรียนหมอนทองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃金枕头榴莲的商店吗？"
      },
      {
        "id": "daily_travel_22_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ170บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤170泰铢。"
      },
      {
        "id": "daily_travel_22_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_22_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_23",
    "title": "观光旅游：去暹罗天地 (Travel: Visiting ICONSIAM)",
    "description": "问路去暹罗天地，并顺便去尝尝泰国当地著名的特产新鲜山竹。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_23_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปห้างสรรพสินค้าไอคอนสยามยังไงครับ",
        "chinese": "请问一下，去暹罗天地怎么走？"
      },
      {
        "id": "daily_travel_23_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_23_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมังคุดคัดอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃新鲜山竹的商店吗？"
      },
      {
        "id": "daily_travel_23_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ190บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤190泰铢。"
      },
      {
        "id": "daily_travel_23_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_23_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_24",
    "title": "观光旅游：去唐人街 (Travel: Visiting Chinatown)",
    "description": "问路去唐人街，并顺便去尝尝泰国当地著名的特产椰青。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_24_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปถนนเยาวราชยังไงครับ",
        "chinese": "请问一下，去唐人街怎么走？"
      },
      {
        "id": "daily_travel_24_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_24_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะพร้าวน้ำหอมอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃椰青的商店吗？"
      },
      {
        "id": "daily_travel_24_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ60บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤60泰铢。"
      },
      {
        "id": "daily_travel_24_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_24_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_25",
    "title": "观光旅游：去大皇宫/玉佛寺 (Travel: Visiting Temple of Emerald Buddha)",
    "description": "问路去大皇宫/玉佛寺，并顺便去尝尝泰国当地著名的特产芒果。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_25_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดพระแก้วยังไงครับ",
        "chinese": "请问一下，去大皇宫/玉佛寺怎么走？"
      },
      {
        "id": "daily_travel_25_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_25_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมะม่วงอกร่องอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃芒果的商店吗？"
      },
      {
        "id": "daily_travel_25_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ80บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤80泰铢。"
      },
      {
        "id": "daily_travel_25_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_25_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_26",
    "title": "观光旅游：去乍都乍周末市场 (Travel: Visiting Chatuchak Market)",
    "description": "问路去乍都乍周末市场，并顺便去尝尝泰国当地著名的特产红毛丹。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_26_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปตลาดนัดจตุจักรยังไงครับ",
        "chinese": "请问一下，去乍都乍周末市场怎么走？"
      },
      {
        "id": "daily_travel_26_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_26_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายเงาะโรงเรียนอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃红毛丹的商店吗？"
      },
      {
        "id": "daily_travel_26_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ100บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤100泰铢。"
      },
      {
        "id": "daily_travel_26_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_26_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_27",
    "title": "观光旅游：去郑王庙 (Travel: Visiting Temple of Dawn)",
    "description": "问路去郑王庙，并顺便去尝尝泰国当地著名的特产龙功果。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_27_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปวัดอรุณราชวรารามยังไงครับ",
        "chinese": "请问一下，去郑王庙怎么走？"
      },
      {
        "id": "daily_travel_27_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_27_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายลองกองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃龙功果的商店吗？"
      },
      {
        "id": "daily_travel_27_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ120บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤120泰铢。"
      },
      {
        "id": "daily_travel_27_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_27_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_28",
    "title": "观光旅游：去曼谷火车站 (Travel: Visiting Bangkok Station)",
    "description": "问路去曼谷火车站，并顺便去尝尝泰国当地著名的特产小菠萝。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_28_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปสถานีรถไฟกรุงเทพยังไงครับ",
        "chinese": "请问一下，去曼谷火车站怎么走？"
      },
      {
        "id": "daily_travel_28_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_28_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายสับปะรดภูแลอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃小菠萝的商店吗？"
      },
      {
        "id": "daily_travel_28_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ140บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤140泰铢。"
      },
      {
        "id": "daily_travel_28_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_28_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_29",
    "title": "观光旅游：去暹罗天地 (Travel: Visiting ICONSIAM)",
    "description": "问路去暹罗天地，并顺便去尝尝泰国当地著名的特产金枕头榴莲。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_29_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปห้างสรรพสินค้าไอคอนสยามยังไงครับ",
        "chinese": "请问一下，去暹罗天地怎么走？"
      },
      {
        "id": "daily_travel_29_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_29_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายทุเรียนหมอนทองอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃金枕头榴莲的商店吗？"
      },
      {
        "id": "daily_travel_29_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ160บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤160泰铢。"
      },
      {
        "id": "daily_travel_29_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_29_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_travel_30",
    "title": "观光旅游：去唐人街 (Travel: Visiting Chinatown)",
    "description": "问路去唐人街，并顺便去尝尝泰国当地著名的特产新鲜山竹。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "出行旅游",
    "characters": {
      "A": {
        "id": "A",
        "name": "游客 (นักท่องเที่ยว)",
        "role": "寻路人",
        "avatar": "tourist"
      },
      "B": {
        "id": "B",
        "name": "当地人 (คนท้องถิ่น)",
        "role": "指路人",
        "avatar": "local"
      }
    },
    "dialogues": [
      {
        "id": "daily_travel_30_d1",
        "roleId": "A",
        "thai": "ขอถามหน่อยครับ ไปถนนเยาวราชยังไงครับ",
        "chinese": "请问一下，去唐人街怎么走？"
      },
      {
        "id": "daily_travel_30_d2",
        "roleId": "B",
        "thai": "เดินไปตามถนนนี้แล้วเลี้ยวขวาครับ",
        "chinese": "沿着这条路直走，然后向右拐。"
      },
      {
        "id": "daily_travel_30_d3",
        "roleId": "A",
        "thai": "แถวนี้มีร้านขายมังคุดคัดอร่อยๆ ไหมครับ",
        "chinese": "这附近有卖好吃新鲜山竹的商店吗？"
      },
      {
        "id": "daily_travel_30_d4",
        "roleId": "B",
        "thai": "มีครับ ร้านข้างหน้าขายกิโลละ180บาทครับ",
        "chinese": "有的。前面的店铺卖，一公斤180泰铢。"
      },
      {
        "id": "daily_travel_30_d5",
        "roleId": "A",
        "thai": "ขอบคุณครับ นั่งรถตุ๊กตุ๊กไปไกลไหมครับ",
        "chinese": "谢谢。坐突突车过去远吗？"
      },
      {
        "id": "daily_travel_30_d6",
        "roleId": "B",
        "thai": "ไม่ไกลครับ ห้านาทีก็ถึงแล้ว เดินทางปลอดภัยนะครับ",
        "chinese": "不远，五分钟就到了。祝您旅途平安！"
      }
    ]
  },
  {
    "id": "daily_help_1",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如APP打不开，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_1_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_1_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_1_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องแอปเปิดไม่ขึ้นครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于APP打不开的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_1_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_1_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดพระแก้วครับ",
        "chinese": "我急着要用，因为之后还要赶去大皇宫/玉佛寺。"
      },
      {
        "id": "daily_help_1_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_2",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如网络频繁掉线，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_2_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_2_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_2_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องเน็ตหลุดบ่อยครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于网络频繁掉线的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_2_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_2_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ตลาดนัดจตุจักรครับ",
        "chinese": "我急着要用，因为之后还要赶去乍都乍周末市场。"
      },
      {
        "id": "daily_help_2_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_3",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如打印机无法工作，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_3_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_3_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_3_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องพิมพ์งานไม่ได้ครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于打印机无法工作的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_3_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_3_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดอรุณราชวรารามครับ",
        "chinese": "我急着要用，因为之后还要赶去郑王庙。"
      },
      {
        "id": "daily_help_3_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_4",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如硬盘故障损坏，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_4_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_4_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_4_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องฮาร์ดดิสก์เสียครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于硬盘故障损坏的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_4_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_4_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่สถานีรถไฟกรุงเทพครับ",
        "chinese": "我急着要用，因为之后还要赶去曼谷火车站。"
      },
      {
        "id": "daily_help_4_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_5",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如数据丢失了，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_5_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_5_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_5_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องข้อมูลสูญหายครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于数据丢失了的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_5_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_5_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ห้างสรรพสินค้าไอคอนสยามครับ",
        "chinese": "我急着要用，因为之后还要赶去暹罗天地。"
      },
      {
        "id": "daily_help_5_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_6",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如APP打不开，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_6_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_6_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_6_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องแอปเปิดไม่ขึ้นครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于APP打不开的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_6_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_6_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ถนนเยาวราชครับ",
        "chinese": "我急着要用，因为之后还要赶去唐人街。"
      },
      {
        "id": "daily_help_6_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_7",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如网络频繁掉线，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_7_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_7_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_7_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องเน็ตหลุดบ่อยครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于网络频繁掉线的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_7_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_7_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดพระแก้วครับ",
        "chinese": "我急着要用，因为之后还要赶去大皇宫/玉佛寺。"
      },
      {
        "id": "daily_help_7_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_8",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如打印机无法工作，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_8_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_8_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_8_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องพิมพ์งานไม่ได้ครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于打印机无法工作的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_8_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_8_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ตลาดนัดจตุจักรครับ",
        "chinese": "我急着要用，因为之后还要赶去乍都乍周末市场。"
      },
      {
        "id": "daily_help_8_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_9",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如硬盘故障损坏，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_9_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_9_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_9_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องฮาร์ดดิสก์เสียครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于硬盘故障损坏的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_9_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_9_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดอรุณราชวรารามครับ",
        "chinese": "我急着要用，因为之后还要赶去郑王庙。"
      },
      {
        "id": "daily_help_9_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_10",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如数据丢失了，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_10_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_10_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_10_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องข้อมูลสูญหายครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于数据丢失了的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_10_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_10_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่สถานีรถไฟกรุงเทพครับ",
        "chinese": "我急着要用，因为之后还要赶去曼谷火车站。"
      },
      {
        "id": "daily_help_10_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_11",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如APP打不开，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_11_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_11_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_11_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องแอปเปิดไม่ขึ้นครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于APP打不开的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_11_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_11_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ห้างสรรพสินค้าไอคอนสยามครับ",
        "chinese": "我急着要用，因为之后还要赶去暹罗天地。"
      },
      {
        "id": "daily_help_11_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_12",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如网络频繁掉线，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_12_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_12_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_12_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องเน็ตหลุดบ่อยครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于网络频繁掉线的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_12_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_12_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ถนนเยาวราชครับ",
        "chinese": "我急着要用，因为之后还要赶去唐人街。"
      },
      {
        "id": "daily_help_12_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_13",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如打印机无法工作，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_13_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_13_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_13_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องพิมพ์งานไม่ได้ครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于打印机无法工作的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_13_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_13_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดพระแก้วครับ",
        "chinese": "我急着要用，因为之后还要赶去大皇宫/玉佛寺。"
      },
      {
        "id": "daily_help_13_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_14",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如硬盘故障损坏，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_14_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_14_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_14_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องฮาร์ดดิสก์เสียครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于硬盘故障损坏的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_14_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_14_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ตลาดนัดจตุจักรครับ",
        "chinese": "我急着要用，因为之后还要赶去乍都乍周末市场。"
      },
      {
        "id": "daily_help_14_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_15",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如数据丢失了，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_15_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_15_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_15_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องข้อมูลสูญหายครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于数据丢失了的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_15_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_15_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดอรุณราชวรารามครับ",
        "chinese": "我急着要用，因为之后还要赶去郑王庙。"
      },
      {
        "id": "daily_help_15_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_16",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如APP打不开，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_16_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_16_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_16_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องแอปเปิดไม่ขึ้นครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于APP打不开的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_16_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_16_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่สถานีรถไฟกรุงเทพครับ",
        "chinese": "我急着要用，因为之后还要赶去曼谷火车站。"
      },
      {
        "id": "daily_help_16_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_17",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如网络频繁掉线，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_17_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_17_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_17_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องเน็ตหลุดบ่อยครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于网络频繁掉线的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_17_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_17_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ห้างสรรพสินค้าไอคอนสยามครับ",
        "chinese": "我急着要用，因为之后还要赶去暹罗天地。"
      },
      {
        "id": "daily_help_17_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_18",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如打印机无法工作，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_18_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_18_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_18_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องพิมพ์งานไม่ได้ครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于打印机无法工作的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_18_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_18_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ถนนเยาวราชครับ",
        "chinese": "我急着要用，因为之后还要赶去唐人街。"
      },
      {
        "id": "daily_help_18_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_19",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如硬盘故障损坏，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_19_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_19_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_19_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องฮาร์ดดิสก์เสียครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于硬盘故障损坏的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_19_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_19_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดพระแก้วครับ",
        "chinese": "我急着要用，因为之后还要赶去大皇宫/玉佛寺。"
      },
      {
        "id": "daily_help_19_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_20",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如数据丢失了，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_20_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_20_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_20_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องข้อมูลสูญหายครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于数据丢失了的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_20_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_20_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ตลาดนัดจตุจักรครับ",
        "chinese": "我急着要用，因为之后还要赶去乍都乍周末市场。"
      },
      {
        "id": "daily_help_20_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_21",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如APP打不开，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_21_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_21_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_21_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องแอปเปิดไม่ขึ้นครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于APP打不开的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_21_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_21_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดอรุณราชวรารามครับ",
        "chinese": "我急着要用，因为之后还要赶去郑王庙。"
      },
      {
        "id": "daily_help_21_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_22",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如网络频繁掉线，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_22_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_22_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_22_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องเน็ตหลุดบ่อยครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于网络频繁掉线的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_22_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_22_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่สถานีรถไฟกรุงเทพครับ",
        "chinese": "我急着要用，因为之后还要赶去曼谷火车站。"
      },
      {
        "id": "daily_help_22_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_23",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如打印机无法工作，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_23_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_23_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_23_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องพิมพ์งานไม่ได้ครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于打印机无法工作的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_23_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_23_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ห้างสรรพสินค้าไอคอนสยามครับ",
        "chinese": "我急着要用，因为之后还要赶去暹罗天地。"
      },
      {
        "id": "daily_help_23_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_24",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如硬盘故障损坏，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_24_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_24_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_24_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องฮาร์ดดิสก์เสียครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于硬盘故障损坏的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_24_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_24_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ถนนเยาวราชครับ",
        "chinese": "我急着要用，因为之后还要赶去唐人街。"
      },
      {
        "id": "daily_help_24_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_25",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如数据丢失了，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_25_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_25_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_25_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องข้อมูลสูญหายครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于数据丢失了的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_25_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_25_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดพระแก้วครับ",
        "chinese": "我急着要用，因为之后还要赶去大皇宫/玉佛寺。"
      },
      {
        "id": "daily_help_25_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_26",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如APP打不开，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_26_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_26_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_26_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องแอปเปิดไม่ขึ้นครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于APP打不开的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_26_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_26_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ตลาดนัดจตุจักรครับ",
        "chinese": "我急着要用，因为之后还要赶去乍都乍周末市场。"
      },
      {
        "id": "daily_help_26_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_27",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如网络频繁掉线，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_27_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_27_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_27_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องเน็ตหลุดบ่อยครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于网络频繁掉线的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_27_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_27_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่วัดอรุณราชวรารามครับ",
        "chinese": "我急着要用，因为之后还要赶去郑王庙。"
      },
      {
        "id": "daily_help_27_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_28",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如打印机无法工作，并求助解决。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_28_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_28_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_28_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องพิมพ์งานไม่ได้ครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于打印机无法工作的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_28_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_28_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่สถานีรถไฟกรุงเทพครับ",
        "chinese": "我急着要用，因为之后还要赶去曼谷火车站。"
      },
      {
        "id": "daily_help_28_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_29",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如硬盘故障损坏，并求助解决。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_29_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_29_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_29_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องฮาร์ดดิสก์เสียครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于硬盘故障损坏的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_29_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_29_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ห้างสรรพสินค้าไอคอนสยามครับ",
        "chinese": "我急着要用，因为之后还要赶去暹罗天地。"
      },
      {
        "id": "daily_help_29_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "daily_help_30",
    "title": "生活求助：解决问题 (Help: Trouble solving)",
    "description": "向酒店或服务台反映遇到紧急问题，例如数据丢失了，并求助解决。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "生活求助",
    "characters": {
      "A": {
        "id": "A",
        "name": "房客 (ลูกค้า)",
        "role": "求助人",
        "avatar": "customer"
      },
      "B": {
        "id": "B",
        "name": "工作人员 (เจ้าหน้าที่)",
        "role": "协助人",
        "avatar": "waiter"
      }
    },
    "dialogues": [
      {
        "id": "daily_help_30_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ เจอปัญหาร้ายแรงครับ",
        "chinese": "您好。我遇到了一个严重的问题。"
      },
      {
        "id": "daily_help_30_d2",
        "roleId": "B",
        "thai": "เกิดอะไรขึ้นคะ ให้ฉันช่วยอะไรคะ",
        "chinese": "发生什么事了？有什么我可以帮您的吗？"
      },
      {
        "id": "daily_help_30_d3",
        "roleId": "A",
        "thai": "พบปัญหาเรื่องข้อมูลสูญหายครับ ทำอย่างไรดีครับ",
        "chinese": "我发现遇到关于数据丢失了的问题。该怎么办呢？"
      },
      {
        "id": "daily_help_30_d4",
        "roleId": "B",
        "thai": "ใจเย็นๆ นะคะ เดี๋ยวฉันประสานงานเจ้าหน้าที่ตรวจสอบให้ค่ะ",
        "chinese": "请别着急。我这就安排技术人员帮您排查解决。"
      },
      {
        "id": "daily_help_30_d5",
        "roleId": "A",
        "thai": "ผมต้องการใช้ด่วนเพื่อไปสถานที่ถนนเยาวราชครับ",
        "chinese": "我急着要用，因为之后还要赶去唐人街。"
      },
      {
        "id": "daily_help_30_d6",
        "roleId": "B",
        "thai": "เข้าใจค่ะ จะพยายามดำเนินการให้เร็วที่สุดค่ะ",
        "chinese": "明白的。我们会尽最大努力尽快帮您处理完毕。"
      }
    ]
  },
  {
    "id": "work_biz_1",
    "title": "职场工作会议 #1 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_1_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_1_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_1_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_1_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_1_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_1_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_2",
    "title": "职场工作会议 #2 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_2_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_2_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_2_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_2_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_2_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_2_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_3",
    "title": "职场工作会议 #3 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_3_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_3_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_3_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_3_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_3_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_3_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_4",
    "title": "职场工作会议 #4 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_4_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_4_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_4_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_4_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_4_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_4_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_5",
    "title": "职场工作会议 #5 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_5_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_5_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_5_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_5_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_5_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_5_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_6",
    "title": "职场工作会议 #6 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_6_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_6_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_6_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_6_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_6_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_6_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_7",
    "title": "职场工作会议 #7 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_7_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_7_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_7_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_7_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_7_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_7_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_8",
    "title": "职场工作会议 #8 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_8_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_8_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_8_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_8_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_8_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_8_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_9",
    "title": "职场工作会议 #9 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_9_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_9_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_9_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_9_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_9_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_9_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_10",
    "title": "职场工作会议 #10 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_10_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_10_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_10_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_10_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_10_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_10_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_11",
    "title": "职场工作会议 #11 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_11_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_11_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_11_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_11_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_11_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_11_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_12",
    "title": "职场工作会议 #12 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_12_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_12_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_12_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_12_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_12_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_12_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_13",
    "title": "职场工作会议 #13 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_13_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_13_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_13_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_13_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_13_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_13_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_14",
    "title": "职场工作会议 #14 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_14_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_14_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_14_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_14_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_14_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_14_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_15",
    "title": "职场工作会议 #15 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_15_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_15_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_15_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_15_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_15_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_15_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_16",
    "title": "职场工作会议 #16 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_16_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_16_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_16_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_16_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_16_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_16_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_17",
    "title": "职场工作会议 #17 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_17_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_17_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_17_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_17_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_17_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_17_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_18",
    "title": "职场工作会议 #18 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_18_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_18_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_18_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_18_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_18_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_18_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_19",
    "title": "职场工作会议 #19 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_19_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_19_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_19_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_19_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_19_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_19_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_20",
    "title": "职场工作会议 #20 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_20_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_20_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_20_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_20_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_20_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_20_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_21",
    "title": "职场工作会议 #21 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_21_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_21_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_21_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_21_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_21_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_21_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_22",
    "title": "职场工作会议 #22 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_22_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_22_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_22_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_22_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_22_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_22_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_23",
    "title": "职场工作会议 #23 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_23_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_23_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_23_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_23_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_23_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_23_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_24",
    "title": "职场工作会议 #24 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_24_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_24_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_24_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_24_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_24_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_24_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_25",
    "title": "职场工作会议 #25 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_25_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_25_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_25_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_25_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_25_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_25_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_26",
    "title": "职场工作会议 #26 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_26_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_26_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_26_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_26_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_26_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_26_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_27",
    "title": "职场工作会议 #27 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_27_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_27_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_27_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_27_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_27_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_27_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_28",
    "title": "职场工作会议 #28 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_28_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_28_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_28_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_28_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_28_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_28_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_29",
    "title": "职场工作会议 #29 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_29_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_29_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_29_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_29_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_29_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_29_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_30",
    "title": "职场工作会议 #30 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_30_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_30_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_30_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_30_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_30_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_30_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_31",
    "title": "职场工作会议 #31 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_31_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_31_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_31_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_31_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_31_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_31_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_32",
    "title": "职场工作会议 #32 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_32_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_32_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_32_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_32_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_32_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_32_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_33",
    "title": "职场工作会议 #33 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_33_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_33_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_33_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_33_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_33_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_33_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_34",
    "title": "职场工作会议 #34 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_34_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_34_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_34_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_34_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_34_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_34_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_35",
    "title": "职场工作会议 #35 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_35_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_35_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_35_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_35_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_35_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_35_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_36",
    "title": "职场工作会议 #36 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_36_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_36_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_36_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_36_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_36_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_36_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_37",
    "title": "职场工作会议 #37 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_37_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_37_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_37_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_37_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_37_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_37_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_38",
    "title": "职场工作会议 #38 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_38_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_38_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_38_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_38_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_38_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_38_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_39",
    "title": "职场工作会议 #39 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_39_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_39_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_39_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_39_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_39_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_39_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_40",
    "title": "职场工作会议 #40 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_40_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_40_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_40_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_40_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_40_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_40_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_41",
    "title": "职场工作会议 #41 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_41_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_41_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_41_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_41_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_41_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_41_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_42",
    "title": "职场工作会议 #42 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_42_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_42_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_42_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_42_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_42_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_42_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_43",
    "title": "职场工作会议 #43 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_43_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_43_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_43_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_43_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_43_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_43_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_44",
    "title": "职场工作会议 #44 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_44_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_44_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_44_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_44_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_44_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_44_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_45",
    "title": "职场工作会议 #45 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_45_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_45_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_45_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_45_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_45_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_45_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_46",
    "title": "职场工作会议 #46 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_46_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_46_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_46_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_46_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_46_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_46_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_47",
    "title": "职场工作会议 #47 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_47_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_47_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_47_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_47_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_47_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_47_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_48",
    "title": "职场工作会议 #48 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_48_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_48_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_48_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_48_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_48_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_48_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_49",
    "title": "职场工作会议 #49 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_49_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_49_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_49_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_49_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_49_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_49_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_50",
    "title": "职场工作会议 #50 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_50_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_50_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_50_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_50_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_50_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_50_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_51",
    "title": "职场工作会议 #51 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_51_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_51_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_51_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_51_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_51_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_51_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_52",
    "title": "职场工作会议 #52 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_52_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_52_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_52_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_52_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_52_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_52_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_53",
    "title": "职场工作会议 #53 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_53_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_53_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_53_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_53_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_53_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_53_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_54",
    "title": "职场工作会议 #54 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_54_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_54_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_54_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_54_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_54_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_54_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_55",
    "title": "职场工作会议 #55 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_55_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_55_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_55_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_55_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_55_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_55_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_56",
    "title": "职场工作会议 #56 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_56_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_56_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_56_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_56_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_56_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_56_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_57",
    "title": "职场工作会议 #57 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_57_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_57_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_57_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_57_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_57_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_57_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_58",
    "title": "职场工作会议 #58 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_58_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_58_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_58_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_58_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_58_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_58_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_59",
    "title": "职场工作会议 #59 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_59_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_59_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_59_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_59_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_59_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_59_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_60",
    "title": "职场工作会议 #60 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_60_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_60_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_60_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_60_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_60_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_60_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_61",
    "title": "职场工作会议 #61 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_61_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_61_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_61_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_61_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_61_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_61_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_62",
    "title": "职场工作会议 #62 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_62_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_62_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_62_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_62_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_62_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_62_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_63",
    "title": "职场工作会议 #63 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_63_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_63_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_63_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_63_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_63_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_63_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_64",
    "title": "职场工作会议 #64 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_64_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_64_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_64_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_64_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_64_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_64_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_65",
    "title": "职场工作会议 #65 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_65_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_65_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_65_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_65_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_65_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_65_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_66",
    "title": "职场工作会议 #66 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_66_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_66_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_66_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_66_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_66_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_66_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_67",
    "title": "职场工作会议 #67 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_67_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_67_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_67_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_67_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_67_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_67_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_68",
    "title": "职场工作会议 #68 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_68_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_68_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_68_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_68_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_68_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_68_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_69",
    "title": "职场工作会议 #69 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_69_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_69_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_69_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_69_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_69_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_69_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_70",
    "title": "职场工作会议 #70 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_70_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_70_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_70_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_70_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_70_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_70_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_71",
    "title": "职场工作会议 #71 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_71_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_71_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_71_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_71_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_71_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_71_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_72",
    "title": "职场工作会议 #72 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_72_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_72_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_72_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_72_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_72_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_72_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_73",
    "title": "职场工作会议 #73 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_73_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_73_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_73_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_73_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_73_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_73_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_74",
    "title": "职场工作会议 #74 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_74_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_74_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_74_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_74_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_74_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_74_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_75",
    "title": "职场工作会议 #75 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_75_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_75_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_75_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_75_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_75_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_75_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_76",
    "title": "职场工作会议 #76 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_76_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_76_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_76_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_76_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_76_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_76_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_77",
    "title": "职场工作会议 #77 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_77_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_77_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_77_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_77_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_77_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_77_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_78",
    "title": "职场工作会议 #78 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_78_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_78_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_78_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_78_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_78_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_78_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_79",
    "title": "职场工作会议 #79 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_79_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_79_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_79_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_79_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_79_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_79_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_80",
    "title": "职场工作会议 #80 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_80_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_80_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_80_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_80_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_80_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_80_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_81",
    "title": "职场工作会议 #81 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_81_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_81_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_81_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_81_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_81_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_81_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_82",
    "title": "职场工作会议 #82 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_82_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_82_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_82_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_82_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_82_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_82_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_83",
    "title": "职场工作会议 #83 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_83_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_83_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_83_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_83_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_83_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_83_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_84",
    "title": "职场工作会议 #84 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_84_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_84_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_84_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_84_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_84_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_84_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_85",
    "title": "职场工作会议 #85 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_85_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_85_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_85_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_85_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_85_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_85_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_86",
    "title": "职场工作会议 #86 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_86_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_86_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_86_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_86_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_86_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_86_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_87",
    "title": "职场工作会议 #87 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_87_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_87_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_87_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_87_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_87_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_87_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_88",
    "title": "职场工作会议 #88 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_88_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_88_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_88_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_88_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_88_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_88_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_89",
    "title": "职场工作会议 #89 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_89_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_89_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_89_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_89_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_89_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_89_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_90",
    "title": "职场工作会议 #90 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_90_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_90_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_90_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_90_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_90_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_90_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_91",
    "title": "职场工作会议 #91 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_91_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_91_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_91_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_91_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_91_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_91_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_92",
    "title": "职场工作会议 #92 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_92_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_92_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_92_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_92_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_92_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_92_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_93",
    "title": "职场工作会议 #93 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_93_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_93_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_93_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_93_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_93_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_93_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_94",
    "title": "职场工作会议 #94 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_94_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_94_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_94_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_94_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_94_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_94_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_95",
    "title": "职场工作会议 #95 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_95_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_95_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_95_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_95_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_95_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_95_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_96",
    "title": "职场工作会议 #96 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_96_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_96_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_96_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_96_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_96_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_96_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_97",
    "title": "职场工作会议 #97 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_97_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_97_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_97_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_97_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_97_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_97_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_98",
    "title": "职场工作会议 #98 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_98_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_98_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_98_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_98_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_98_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_98_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_99",
    "title": "职场工作会议 #99 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_99_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_99_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_99_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_99_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_99_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_99_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_100",
    "title": "职场工作会议 #100 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_100_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_100_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_100_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_100_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_100_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_100_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_101",
    "title": "职场工作会议 #101 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_101_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_101_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_101_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_101_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_101_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_101_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_102",
    "title": "职场工作会议 #102 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_102_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_102_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_102_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_102_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_102_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_102_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_103",
    "title": "职场工作会议 #103 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_103_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_103_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_103_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_103_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_103_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_103_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_104",
    "title": "职场工作会议 #104 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_104_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_104_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_104_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_104_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_104_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_104_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_105",
    "title": "职场工作会议 #105 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_105_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_105_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_105_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_105_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_105_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_105_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_106",
    "title": "职场工作会议 #106 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_106_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_106_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_106_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_106_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_106_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_106_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_107",
    "title": "职场工作会议 #107 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_107_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_107_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_107_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_107_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_107_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_107_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_108",
    "title": "职场工作会议 #108 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_108_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_108_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_108_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_108_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_108_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_108_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_109",
    "title": "职场工作会议 #109 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_109_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_109_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_109_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_109_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_109_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_109_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_110",
    "title": "职场工作会议 #110 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_110_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_110_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_110_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_110_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_110_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_110_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_111",
    "title": "职场工作会议 #111 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_111_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_111_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_111_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_111_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_111_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_111_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_112",
    "title": "职场工作会议 #112 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_112_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_112_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_112_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_112_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_112_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_112_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_113",
    "title": "职场工作会议 #113 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_113_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_113_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_113_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_113_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_113_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_113_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_114",
    "title": "职场工作会议 #114 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_114_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_114_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_114_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_114_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_114_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_114_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_115",
    "title": "职场工作会议 #115 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_115_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_115_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_115_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_115_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_115_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_115_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_116",
    "title": "职场工作会议 #116 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_116_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_116_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_116_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_116_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_116_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_116_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_117",
    "title": "职场工作会议 #117 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_117_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_117_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_117_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_117_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_117_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_117_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_118",
    "title": "职场工作会议 #118 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_118_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_118_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_118_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_118_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_118_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_118_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_119",
    "title": "职场工作会议 #119 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_119_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_119_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_119_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_119_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_119_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_119_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_120",
    "title": "职场工作会议 #120 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_120_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_120_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_120_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_120_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_120_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_120_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_121",
    "title": "职场工作会议 #121 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_121_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_121_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_121_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_121_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_121_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_121_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_122",
    "title": "职场工作会议 #122 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_122_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_122_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_122_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_122_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_122_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_122_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_123",
    "title": "职场工作会议 #123 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_123_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_123_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_123_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_123_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_123_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_123_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_124",
    "title": "职场工作会议 #124 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_124_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_124_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_124_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_124_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_124_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_124_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_125",
    "title": "职场工作会议 #125 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_125_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_125_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_125_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_125_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_125_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_125_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_126",
    "title": "职场工作会议 #126 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_126_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_126_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_126_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_126_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_126_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_126_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_127",
    "title": "职场工作会议 #127 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_127_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_127_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_127_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_127_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_127_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_127_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_128",
    "title": "职场工作会议 #128 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_128_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_128_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_128_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_128_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_128_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_128_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_129",
    "title": "职场工作会议 #129 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_129_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_129_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_129_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_129_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_129_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_129_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_130",
    "title": "职场工作会议 #130 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_130_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_130_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_130_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_130_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_130_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_130_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_131",
    "title": "职场工作会议 #131 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_131_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_131_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_131_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_131_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_131_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_131_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_132",
    "title": "职场工作会议 #132 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_132_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_132_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_132_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_132_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_132_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_132_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_133",
    "title": "职场工作会议 #133 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_133_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_133_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_133_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_133_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_133_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_133_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_134",
    "title": "职场工作会议 #134 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_134_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_134_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_134_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_134_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_134_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_134_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_135",
    "title": "职场工作会议 #135 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_135_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_135_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_135_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_135_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_135_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_135_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_136",
    "title": "职场工作会议 #136 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_136_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_136_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_136_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_136_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_136_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_136_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_137",
    "title": "职场工作会议 #137 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_137_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_137_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_137_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_137_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_137_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_137_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_138",
    "title": "职场工作会议 #138 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_138_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_138_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_138_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_138_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_138_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_138_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_139",
    "title": "职场工作会议 #139 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_139_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_139_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_139_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_139_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_139_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_139_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_140",
    "title": "职场工作会议 #140 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_140_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_140_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_140_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_140_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_140_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_140_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_141",
    "title": "职场工作会议 #141 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_141_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_141_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_141_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_141_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_141_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_141_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_142",
    "title": "职场工作会议 #142 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_142_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_142_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_142_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_142_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_142_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_142_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_143",
    "title": "职场工作会议 #143 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_143_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_143_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_143_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_143_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_143_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_143_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_144",
    "title": "职场工作会议 #144 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_144_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_144_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_144_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_144_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_144_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_144_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_145",
    "title": "职场工作会议 #145 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_145_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_145_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_145_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_145_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_145_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_145_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_146",
    "title": "职场工作会议 #146 (Work Project meeting)",
    "description": "讨论关于电商APP系统项目的开发调试，解决APP打不开的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_146_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาระบบแอปซื้อขายออนไลน์กันครับ",
        "chinese": "你好。我们来同步一下电商APP系统开发项目的最新进度。"
      },
      {
        "id": "work_biz_146_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องแอปเปิดไม่ขึ้นอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于APP打不开的技术故障。"
      },
      {
        "id": "work_biz_146_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_146_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_146_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_146_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_147",
    "title": "职场工作会议 #147 (Work Project meeting)",
    "description": "讨论关于物联网湿度传感器项目的开发调试，解决网络频繁掉线的瓶颈问题，确定交付时间为下周二上午，并商讨投放电子邮件促销推广。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_147_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาเซ็นเซอร์ไอโอทีวัดความชื้นกันครับ",
        "chinese": "你好。我们来同步一下物联网湿度传感器开发项目的最新进度。"
      },
      {
        "id": "work_biz_147_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องเน็ตหลุดบ่อยอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于网络频繁掉线的技术故障。"
      },
      {
        "id": "work_biz_147_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสัปดาห์หน้าวันอังคารเช้าไหมครับ",
        "chinese": "必须加急处理。请问能在下周二上午之前修复完成吗？"
      },
      {
        "id": "work_biz_147_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_147_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการส่งเสริมการขายผ่านอีเมลกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动电子邮件促销推广。"
      },
      {
        "id": "work_biz_147_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_148",
    "title": "职场工作会议 #148 (Work Project meeting)",
    "description": "讨论关于新财务会计软件项目的开发调试，解决打印机无法工作的瓶颈问题，确定交付时间为明天中午十二点，并商讨投放线下商场巡展推广活动。",
    "difficulty": "初级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_148_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาโปรแกรมระบบบัญชีใหม่กันครับ",
        "chinese": "你好。我们来同步一下新财务会计软件开发项目的最新进度。"
      },
      {
        "id": "work_biz_148_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องพิมพ์งานไม่ได้อยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于打印机无法工作的技术故障。"
      },
      {
        "id": "work_biz_148_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันพรุ่งนี้เที่ยงตรงไหมครับ",
        "chinese": "必须加急处理。请问能在明天中午十二点之前修复完成吗？"
      },
      {
        "id": "work_biz_148_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_148_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานกิจกรรมจัดแสดงสินค้านอกสถานที่กันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动线下商场巡展推广活动。"
      },
      {
        "id": "work_biz_148_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_149",
    "title": "职场工作会议 #149 (Work Project meeting)",
    "description": "讨论关于云存储服务项目的开发调试，解决硬盘故障损坏的瓶颈问题，确定交付时间为本周五下午三点，并商讨投放社交媒体平台广告。",
    "difficulty": "中级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_149_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาบริการคลาวด์จัดเก็บข้อมูลกันครับ",
        "chinese": "你好。我们来同步一下云存储服务开发项目的最新进度。"
      },
      {
        "id": "work_biz_149_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องฮาร์ดดิสก์เสียอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于硬盘故障损坏的技术故障。"
      },
      {
        "id": "work_biz_149_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันวันศุกร์นี้บ่ายสามโมงไหมครับ",
        "chinese": "必须加急处理。请问能在本周五下午三点之前修复完成吗？"
      },
      {
        "id": "work_biz_149_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_149_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานสื่อโฆษณาโซเชียลมีเดียกันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动社交媒体平台广告。"
      },
      {
        "id": "work_biz_149_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "work_biz_150",
    "title": "职场工作会议 #150 (Work Project meeting)",
    "description": "讨论关于在线学习教育平台项目的开发调试，解决数据丢失了的瓶颈问题，确定交付时间为本月底下午五点前，并商讨投放聘请博主进行产品测评。",
    "difficulty": "高级",
    "category": "生活情景",
    "subCategory": "职场商务",
    "characters": {
      "A": {
        "id": "A",
        "name": "业务主管 (หัวหน้างาน)",
        "role": "项目经理",
        "avatar": "manager"
      },
      "B": {
        "id": "B",
        "name": "工程师 (วิศวกร)",
        "role": "技术负责人",
        "avatar": "assistant"
      }
    },
    "dialogues": [
      {
        "id": "work_biz_150_d1",
        "roleId": "A",
        "thai": "สวัสดีครับ มาอัปเดตโครงการพัฒนาแพลตฟอร์มการจัดการเรียนการสอนกันครับ",
        "chinese": "你好。我们来同步一下在线学习教育平台开发项目的最新进度。"
      },
      {
        "id": "work_biz_150_d2",
        "roleId": "B",
        "thai": "ครับ ตอนนี้เจออุปสรรคเรื่องข้อมูลสูญหายอยู่ครับ",
        "chinese": "好的。目前系统里遇到了关于数据丢失了的技术故障。"
      },
      {
        "id": "work_biz_150_d3",
        "roleId": "A",
        "thai": "ต้องแก้ไขด่วนเลยครับ สามารถเสร็จทันสิ้นเดือนนี้ก่อนห้าโมงเย็นไหมครับ",
        "chinese": "必须加急处理。请问能在本月底下午五点前之前修复完成吗？"
      },
      {
        "id": "work_biz_150_d4",
        "roleId": "B",
        "thai": "คิดว่าเสร็จทันครับ ทีมงานจะช่วยกันทดสอบระบบอย่างเต็มที่",
        "chinese": "预计没问题。团队下午会全员投入对系统接口做联调。"
      },
      {
        "id": "work_biz_150_d5",
        "roleId": "A",
        "thai": "ดีมากครับ เสร็จแล้วเราจะเริ่มใช้แผนงานการจ้างบล็อกเกอร์รีวิวสินค้ากันครับ",
        "chinese": "太棒了。修复通过之后，我们就正式启动聘请博主进行产品测评。"
      },
      {
        "id": "work_biz_150_d6",
        "roleId": "B",
        "thai": "ได้ครับ ผมจะรายงานความคืบหน้าให้ทราบอีกครั้งครับ",
        "chinese": "好的。晚些时候我会把详细的测试运行报告发送到您的邮箱。"
      }
    ]
  },
  {
    "id": "news_info_1",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #1)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_1_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_1_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_1_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_1_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_1_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_1_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_2",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #2)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_2_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_2_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_2_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_2_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_2_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_2_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_3",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #3)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_3_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_3_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_3_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_3_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_3_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_3_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_4",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #4)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_4_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_4_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_4_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_4_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_4_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_4_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_5",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #5)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_5_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_5_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_5_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_5_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_5_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_5_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_6",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #6)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_6_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_6_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_6_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_6_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_6_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_6_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_7",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #7)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_7_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_7_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_7_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_7_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_7_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_7_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_8",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #8)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_8_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_8_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_8_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_8_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_8_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_8_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_9",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #9)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_9_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_9_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_9_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_9_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_9_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_9_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_10",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #10)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_10_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_10_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_10_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_10_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_10_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_10_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_11",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #11)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_11_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_11_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_11_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_11_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_11_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_11_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_12",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #12)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_12_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_12_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_12_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_12_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_12_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_12_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_13",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #13)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_13_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_13_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_13_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_13_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_13_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_13_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_14",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #14)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_14_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_14_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_14_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_14_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_14_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_14_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_15",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #15)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_15_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_15_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_15_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_15_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_15_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_15_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_16",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #16)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_16_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_16_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_16_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_16_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_16_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_16_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_17",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #17)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_17_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_17_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_17_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_17_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_17_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_17_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_18",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #18)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_18_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_18_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_18_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_18_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_18_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_18_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_19",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #19)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_19_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_19_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_19_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_19_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_19_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_19_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_20",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #20)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_20_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_20_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_20_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_20_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_20_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_20_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_21",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #21)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_21_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_21_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_21_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_21_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_21_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_21_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_22",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #22)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_22_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_22_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_22_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_22_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_22_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_22_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_23",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #23)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_23_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_23_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_23_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_23_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_23_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_23_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_24",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #24)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_24_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_24_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_24_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_24_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_24_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_24_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_25",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #25)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_25_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_25_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_25_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_25_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_25_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_25_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_26",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #26)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_26_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_26_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_26_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_26_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_26_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_26_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_27",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #27)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_27_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_27_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_27_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_27_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_27_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_27_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_28",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #28)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_28_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_28_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_28_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_28_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_28_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_28_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_29",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #29)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_29_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_29_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_29_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_29_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_29_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_29_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_30",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #30)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_30_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_30_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_30_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_30_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_30_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_30_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_31",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #31)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_31_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_31_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_31_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_31_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_31_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_31_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_32",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #32)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_32_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_32_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_32_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_32_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_32_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_32_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_33",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #33)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_33_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_33_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_33_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_33_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_33_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_33_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_34",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #34)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_34_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_34_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_34_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_34_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_34_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_34_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_35",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #35)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_35_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_35_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_35_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_35_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_35_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_35_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_36",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #36)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_36_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_36_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_36_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_36_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_36_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_36_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_37",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #37)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_37_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_37_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_37_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_37_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_37_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_37_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_38",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #38)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_38_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_38_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_38_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_38_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_38_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_38_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_39",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #39)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_39_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_39_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_39_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_39_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_39_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_39_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_40",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #40)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_40_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_40_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_40_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_40_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_40_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_40_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_41",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #41)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_41_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_41_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_41_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_41_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_41_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_41_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_42",
    "title": "热点新闻：大型太阳能光伏发电投资项目 (News Topic #42)",
    "description": "泰语新闻广播：探讨关于大型太阳能光伏发电投资项目的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_42_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องโครงการลงทุนพลังงานแสงอาทิตย์ขนาดใหญ่ค่ะ",
        "chinese": "您好。今天我们为您播报关于大型太阳能光伏发电投资项目的专题新闻。"
      },
      {
        "id": "news_info_42_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_42_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_42_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_42_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_42_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_43",
    "title": "热点新闻：免签政策强力刺激旅游业复苏 (News Topic #43)",
    "description": "泰语新闻广播：探讨关于免签政策强力刺激旅游业复苏的政府声明、市场数据及未来预测。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_43_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องมาตรการฟรีวีซ่าเพื่อกระตุ้นการท่องเที่ยวค่ะ",
        "chinese": "您好。今天我们为您播报关于免签政策强力刺激旅游业复苏的专题新闻。"
      },
      {
        "id": "news_info_43_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_43_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_43_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_43_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_43_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_44",
    "title": "热点新闻：泰米及糯米出口销售额大涨 (News Topic #44)",
    "description": "泰语新闻广播：探讨关于泰米及糯米出口销售额大涨的政府声明、市场数据及未来预测。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_44_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการส่งออกข้าวเหนียวไทยมียอดขายทะลุเป้าค่ะ",
        "chinese": "您好。今天我们为您播报关于泰米及糯米出口销售额大涨的专题新闻。"
      },
      {
        "id": "news_info_44_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_44_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_44_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_44_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_44_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "news_info_45",
    "title": "热点新闻：电动汽车零部件产业快速增长 (News Topic #45)",
    "description": "泰语新闻广播：探讨关于电动汽车零部件产业快速增长的政府声明、市场数据及未来预测。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "新闻资讯",
    "characters": {
      "P": {
        "id": "P",
        "name": "播音员 (News Reporter)",
        "role": "新闻主播",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "news_info_45_d1",
        "roleId": "P",
        "thai": "สวัสดีค่ะ วันนี้เราเสนอรายงานข่าวเรื่องการเติบโตอุตสาหกรรมชิ้นส่วนรถยนต์ไฟฟ้าค่ะ",
        "chinese": "您好。今天我们为您播报关于电动汽车零部件产业快速增长的专题新闻。"
      },
      {
        "id": "news_info_45_d2",
        "roleId": "P",
        "thai": "รัฐบาลไทยประกาศสนับสนุนนโยบายนี้อย่างเต็มที่เพื่อเร่งฟื้นฟูการค้า",
        "chinese": "泰国政府日前发表官方声明，承诺将全力推行此项促进政策以复苏外贸。"
      },
      {
        "id": "news_info_45_d3",
        "roleId": "P",
        "thai": "ผู้ประกอบการหลายรายยินดีและเริ่มขยายการลงทุนในประเทศ",
        "chinese": "这一利好消息让众多民营企业倍受鼓舞，并已启动新一轮本土投资扩建。"
      },
      {
        "id": "news_info_45_d4",
        "roleId": "P",
        "thai": "นอกจากนี้ คาดว่าจะสร้างรายได้มหาศาลให้แก่ประชาชนทั่วไป",
        "chinese": "不仅如此，经济学家预测这还将直接为广大工薪阶层带来可观的岗位和增收。"
      },
      {
        "id": "news_info_45_d5",
        "roleId": "P",
        "thai": "แต่ความท้าทายยังคงเป็นเรื่องทรัพยากรบุคคลและการบริหารจัดการ",
        "chinese": "不过，如何解决专业技能人才紧缺以及系统管理效率仍是当务之急。"
      },
      {
        "id": "news_info_45_d6",
        "roleId": "P",
        "thai": "เราจะรายงานผลความคืบหน้าให้ท่านทราบในรายงานชิ้นต่อไป ขอบคุณค่ะ",
        "chinese": "我们将在下期专题报道中为您做深度跟踪解析。谢谢您的收看。"
      }
    ]
  },
  {
    "id": "speech_topic_1",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #1)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_1_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_1_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_1_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_1_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_1_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_1_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_2",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #2)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_2_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_2_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_2_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_2_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_2_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_2_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_3",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #3)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_3_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_3_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_3_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_3_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_3_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_3_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_4",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #4)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_4_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_4_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_4_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_4_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_4_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_4_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_5",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #5)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_5_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_5_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_5_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_5_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_5_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_5_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_6",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #6)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_6_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_6_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_6_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_6_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_6_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_6_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_7",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #7)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_7_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_7_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_7_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_7_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_7_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_7_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_8",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #8)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_8_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_8_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_8_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_8_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_8_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_8_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_9",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #9)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_9_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_9_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_9_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_9_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_9_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_9_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_10",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #10)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_10_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_10_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_10_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_10_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_10_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_10_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_11",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #11)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_11_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_11_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_11_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_11_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_11_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_11_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_12",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #12)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_12_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_12_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_12_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_12_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_12_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_12_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_13",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #13)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_13_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_13_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_13_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_13_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_13_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_13_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_14",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #14)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_14_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_14_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_14_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_14_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_14_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_14_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_15",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #15)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_15_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_15_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_15_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_15_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_15_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_15_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_16",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #16)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_16_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_16_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_16_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_16_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_16_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_16_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_17",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #17)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_17_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_17_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_17_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_17_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_17_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_17_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_18",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #18)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_18_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_18_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_18_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_18_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_18_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_18_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_19",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #19)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_19_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_19_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_19_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_19_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_19_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_19_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_20",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #20)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_20_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_20_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_20_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_20_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_20_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_20_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_21",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #21)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_21_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_21_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_21_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_21_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_21_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_21_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_22",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #22)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_22_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_22_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_22_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_22_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_22_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_22_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_23",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #23)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_23_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_23_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_23_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_23_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_23_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_23_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_24",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #24)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_24_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_24_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_24_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_24_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_24_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_24_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_25",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #25)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_25_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_25_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_25_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_25_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_25_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_25_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_26",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #26)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_26_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_26_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_26_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_26_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_26_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_26_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_27",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #27)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_27_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_27_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_27_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_27_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_27_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_27_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_28",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #28)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_28_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_28_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_28_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_28_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_28_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_28_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_29",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #29)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_29_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_29_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_29_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_29_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_29_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_29_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_30",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #30)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_30_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_30_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_30_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_30_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_30_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_30_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_31",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #31)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_31_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_31_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_31_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_31_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_31_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_31_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_32",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #32)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_32_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_32_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_32_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_32_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_32_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_32_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_33",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #33)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_33_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_33_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_33_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_33_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_33_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_33_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_34",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #34)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_34_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_34_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_34_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_34_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_34_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_34_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_35",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #35)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_35_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_35_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_35_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_35_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_35_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_35_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_36",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #36)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_36_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_36_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_36_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_36_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_36_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_36_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_37",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #37)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_37_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_37_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_37_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_37_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_37_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_37_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_38",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #38)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_38_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_38_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_38_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_38_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_38_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_38_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_39",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #39)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_39_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_39_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_39_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_39_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_39_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_39_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_40",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #40)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_40_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_40_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_40_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_40_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_40_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_40_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_41",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #41)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_41_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_41_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_41_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_41_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_41_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_41_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_42",
    "title": "主题演讲：培养情绪韧性以应对生活中的危机 (Speech Topic #42)",
    "description": "TED式泰语个人主题演讲：分享关于培养情绪韧性以应对生活中的危机的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_42_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องการสร้างความยืดหยุ่นทางอารมณ์เพื่อรับมือกับวิกฤตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于培养情绪韧性以应对生活中的危机这个议题。"
      },
      {
        "id": "speech_topic_42_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_42_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_42_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_42_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_42_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_43",
    "title": "主题演讲：极简主义生活方式给心灵带来的自由 (Speech Topic #43)",
    "description": "TED式泰语个人主题演讲：分享关于极简主义生活方式给心灵带来的自由的洞察与个人实践建议。",
    "difficulty": "初级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_43_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องวิถีชีวิตแบบมินิมอลลิซึมที่ช่วยให้จิตใจเป็นอิสระครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于极简主义生活方式给心灵带来的自由这个议题。"
      },
      {
        "id": "speech_topic_43_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_43_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_43_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_43_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_43_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_44",
    "title": "主题演讲：复利效应对长期个人财务规划的魔力 (Speech Topic #44)",
    "description": "TED式泰语个人主题演讲：分享关于复利效应对长期个人财务规划的魔力的洞察与个人实践建议。",
    "difficulty": "中级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_44_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความมหัศจรรย์ของ复利ในการวางแผนการเงินระยะยาวครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于复利效应对长期个人财务规划的魔力这个议题。"
      },
      {
        "id": "speech_topic_44_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_44_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_44_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_44_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_44_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  },
  {
    "id": "speech_topic_45",
    "title": "主题演讲：终身学习与持续成长思维的重要性 (Speech Topic #45)",
    "description": "TED式泰语个人主题演讲：分享关于终身学习与持续成长思维的重要性的洞察与个人实践建议。",
    "difficulty": "高级",
    "category": "新闻演讲",
    "subCategory": "主题演讲",
    "characters": {
      "S": {
        "id": "S",
        "name": "演讲嘉宾 (TED Speaker)",
        "role": "主讲人",
        "avatar": "narrator"
      }
    },
    "dialogues": [
      {
        "id": "speech_topic_45_d1",
        "roleId": "S",
        "thai": "สวัสดีครับ วันนี้อยากชวนทุกคนมาคุยเรื่องความสำคัญของทัศนคติการเรียนรู้ตลอดชีวิตครับ",
        "chinese": "大家好。今天我想邀请各位共同探讨关于终身学习与持续成长思维的重要性这个议题。"
      },
      {
        "id": "speech_topic_45_d2",
        "roleId": "S",
        "thai": "ในยุคปัจจุบัน สภาพแวดล้อมที่สลับซับซ้อนท้าทายขีดจำกัดของเราเสมอ",
        "chinese": "在快速更迭的数字化浪潮中，外界的无常与喧嚣正在时刻挑战我们的精力管理极限。"
      },
      {
        "id": "speech_topic_45_d3",
        "roleId": "S",
        "thai": "แต่พลังที่ช่วยผลักดันให้เราเติบโตนั้นมาจากกรอบความคิดของเราเอง",
        "chinese": "然而，决定我们是随波逐流还是破茧成蝶的，唯有我们内心深处的认知引擎。"
      },
      {
        "id": "speech_topic_45_d4",
        "roleId": "S",
        "thai": "หากเริ่มปรับเปลี่ยนพฤติกรรมทีละน้อย ผลลัพธ์ในอนาคตจะน่าประทับใจ",
        "chinese": "只要我们能以极大的耐心，从每件微不足道的小习惯开始平替，复利会重塑人生。"
      },
      {
        "id": "speech_topic_45_d5",
        "roleId": "S",
        "thai": "อย่ากลัวความล้มเหลวเพราะมันคือเครื่องมือสอนการสร้างความสำเร็จ",
        "chinese": "不要把暂时的瓶颈当作终局裁判，困难和差评恰恰是磨炼专业度的最佳砂纸。"
      },
      {
        "id": "speech_topic_45_d6",
        "roleId": "S",
        "thai": "หวังว่าคำแนะนำนี้จะจุดประกายให้ท่านสร้างตัวตนที่มีความสุข ขอบคุณครับ",
        "chinese": "衷心希望今天的分享能带给大家启发，并在探索生命真谛的路上轻装前行。谢谢。"
      }
    ]
  }
];
