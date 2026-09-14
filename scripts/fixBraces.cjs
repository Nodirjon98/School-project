const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix double commas
  content = content.replace(/\},,/g, '},');
  content = content.replace(/\},\s*,/g, '},');

  // Fix lines starting with id: 'topic-X' without {
  // If a line is preceded by [ or by }, and starts with whitespace + id: 'topic-', add {
  content = content.replace(/(\[\s*\n\s*)(id:\s*'topic-\d+)/g, '$1{\n    $2');
  content = content.replace(/(\},\s*\n\s*)(id:\s*'topic-\d+)/g, '$1{\n    $2');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed', filePath);
}

fixFile('src/data/toefl/topics_1_to_5.ts');
fixFile('src/data/toefl/topics_6_to_10.ts');
fixFile('src/data/toefl/topics_16_to_31.ts');
