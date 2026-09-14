const fs = require('fs');

const fileContent = fs.readFileSync('src/data/essentialGrammarAllUnits.ts', 'utf8');

// Match unit objects using regex or parse
const unitRegex = /"unitNumber":\s*(\d+),\s*"title":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"cefrLevel":\s*"([^"]+)",\s*"summaryUz":\s*"([^"]+)"/g;

let match;
const units = [];
while ((match = unitRegex.exec(fileContent)) !== null) {
  units.push({
    unitNumber: parseInt(match[1]),
    title: match[2],
    category: match[3],
    cefrLevel: match[4],
    summaryUz: match[5]
  });
}

console.log(`Found ${units.length} units:`);
units.forEach(u => {
  console.log(`${u.unitNumber.toString().padStart(3, ' ')} | [${u.category.padEnd(20, ' ')}] | ${u.title}`);
});
