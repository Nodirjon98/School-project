const fs = require('fs');

const b1 = JSON.parse(fs.readFileSync('src/data/books/data/book1.json', 'utf8'));

for (let i = 6; i < 10; i++) {
  const u = b1.units[i];
  console.log(`\n=== Book 1 Unit ${u.unitNumber}: ${u.title} ===`);
  const sentences = u.readingPassage.match(/[^.!?]+[.!?]+/g) || [u.readingPassage];
  
  u.targetWords.forEach(w => {
    sentences.forEach(s => {
      const cleanS = s.trim().replace(/\s+/g, ' ');
      const reg = new RegExp(`\\b${w.word}\\b`, 'i');
      if (reg.test(cleanS)) {
        // Check for verb before target word (e.g. "bring peace", "use force")
        const verbObj = cleanS.match(new RegExp(`\\b(make|makes|made|take|takes|took|bring|brings|brought|give|gives|gave|use|uses|used|face|faces|faced|reach|reaches|reached|find|finds|found|keep|keeps|kept|lose|loses|lost|win|wins|won|tell|tells|told|pay|pays|paid)\\s+(?:a|an|the|his|her|their|my|our|its)?\\s*${w.word}\\b`, 'i'));
        if (verbObj) {
          console.log(`  [Verb+Noun]: "${verbObj[0]}" in "${cleanS}"`);
        }

        // Check for target word + preposition (e.g. "contribute to", "protect from")
        const prepObj = cleanS.match(new RegExp(`\\b${w.word}\\s+(to|from|for|in|on|at|with|about|of|into|against)\\b`, 'i'));
        if (prepObj) {
          console.log(`  [Word+Prep]: "${prepObj[0]}" in "${cleanS}"`);
        }

        // Check for adjective + target word (e.g. "sudden move", "best choice")
        const adjNoun = cleanS.match(new RegExp(`\\b(great|sudden|best|deep|sharp|loud|high|good|bad|heavy|vast|vital|crucial|pleasant|clever|new|beautiful|terrible)\\s+${w.word}\\b`, 'i'));
        if (adjNoun) {
          console.log(`  [Adj+Noun]: "${adjNoun[0]}" in "${cleanS}"`);
        }
      }
    });
  });
}
