const fs = require('fs');
const content = fs.readFileSync('miniprogram/utils/scenarios.ts', 'utf8');

// Match all occurrences of object literals that look like scenarios
// e.g. look for id: '...' or similar.
const matches = [...content.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);
console.log('Total scenario IDs matched:', matches.length);

// Let's parse the categories of existing scenarios if possible
// We can run a quick eval-like check or regex scan.
const categoryCounts = {};
const subCategoryCounts = {};

const scenarioBlocks = content.split(/id:\s*'/).slice(1);
scenarioBlocks.forEach(block => {
  const catMatch = block.match(/category:\s*'([^']+)'/);
  const subCatMatch = block.match(/subCategory:\s*'([^']+)'/);
  if (catMatch) {
    categoryCounts[catMatch[1]] = (categoryCounts[catMatch[1]] || 0) + 1;
  }
  if (subCatMatch) {
    subCategoryCounts[subCatMatch[1]] = (subCategoryCounts[subCatMatch[1]] || 0) + 1;
  }
});

console.log('Categories:', categoryCounts);
console.log('Subcategories:', subCategoryCounts);
