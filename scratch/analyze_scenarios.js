const fs = require('fs');

const fileContent = fs.readFileSync('miniprogram/utils/scenarios.ts', 'utf8');

// A simple parser to extract scenarios and their subCategories
// Since we want to know what's there, let's parse using a simple regex or parser.
// We can find all SCENARIOS blocks.
// Let's write a simple regex parser.
const scenarioRegex = /\{\s*id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*description:\s*'([^']*)',\s*difficulty:\s*'([^']+)',\s*category:\s*'([^']+)',\s*subCategory:\s*'([^']+)',/g;

const scenarios = [];
let match;
while ((match = scenarioRegex.exec(fileContent)) !== null) {
  scenarios.push({
    id: match[1],
    title: match[2],
    difficulty: match[4],
    category: match[5],
    subCategory: match[6]
  });
}

const counts = {};
scenarios.forEach(s => {
  counts[s.subCategory] = (counts[s.subCategory] || 0) + 1;
});

fs.writeFileSync('scratch/analysis.json', JSON.stringify({ total: scenarios.length, counts, list: scenarios }, null, 2), 'utf8');
console.log('Analysis completed successfully');
