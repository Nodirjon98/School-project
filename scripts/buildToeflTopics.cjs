const fs = require('fs');
const path = require('path');

// Read existing toeflEssaysData.ts
const existingContent = fs.readFileSync('src/data/toeflEssaysData.ts', 'utf8');
const lines = existingContent.split('\n');

const t1_start = 10;
const t2_start = 482;
const t7_start = 689;
const t8_start = 855;
const t9_start = 1041;
const t81_start = 1230;
const t185_start = 1409;
const t185_end = 1604;

const topic1_str = lines.slice(t1_start, t2_start - 1).join('\n');
const topic2_str = lines.slice(t2_start, t7_start - 1).join('\n');
const topic7_str = lines.slice(t7_start, t8_start - 1).join('\n');
const topic8_str = lines.slice(t8_start, t9_start - 1).join('\n');
const topic9_str = lines.slice(t9_start, t81_start - 1).join('\n');
const topic81_str = lines.slice(t81_start, t185_start - 1).join('\n');
const topic185_str = lines.slice(t185_start, t185_end + 1).join('\n');

console.log('Successfully extracted existing topics 1, 2, 7, 8, 9, 81, 185.');
