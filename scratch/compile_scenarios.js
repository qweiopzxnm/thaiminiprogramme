const fs = require('fs');
const path = require('path');

console.log('Loading batches from scratch directory...');
const batch1 = require('./new_scenarios_batch1.js');
const batch2 = require('./new_scenarios_batch2.js');
const batch3 = require('./new_scenarios_batch3.js');
const batch4 = require('./new_scenarios_batch4.js');

const allScenarios = [...batch1, ...batch2, ...batch3, ...batch4];

console.log('Total scenarios to compile:', allScenarios.length);

const tsHeader = `// miniprogram/utils/scenarios.ts
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

`;

// Format scenarios as a pretty-printed typescript array representation
const formattedScenarios = JSON.stringify(allScenarios, null, 2);

const tsContent = `${tsHeader}export const SCENARIOS: Scenario[] = ${formattedScenarios};\n`;

fs.writeFileSync('miniprogram/utils/scenarios.ts', tsContent, 'utf8');
console.log('Successfully wrote miniprogram/utils/scenarios.ts');
