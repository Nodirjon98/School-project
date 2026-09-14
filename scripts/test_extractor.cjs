const fs = require('fs');

// Common phrasal verb particles
const PARTICLES = ['out', 'in', 'up', 'down', 'off', 'on', 'away', 'back', 'into', 'over', 'through', 'across', 'about', 'around', 'after', 'forward', 'along', 'by'];

// Common verbs that form phrasal verbs
const PV_VERBS = {
  'look': { past: 'looked', ing: 'looking' },
  'take': { past: 'took', ing: 'taking', pp: 'taken' },
  'give': { past: 'gave', ing: 'giving', pp: 'given' },
  'get': { past: 'got', ing: 'getting', pp: 'gotten' },
  'turn': { past: 'turned', ing: 'turning' },
  'bring': { past: 'brought', ing: 'bringing' },
  'set': { past: 'set', ing: 'setting' },
  'run': { past: 'ran', ing: 'running' },
  'come': { past: 'came', ing: 'coming' },
  'go': { past: 'went', ing: 'going', pp: 'gone' },
  'break': { past: 'broke', ing: 'breaking', pp: 'broken' },
  'put': { past: 'put', ing: 'putting' },
  'stand': { past: 'stood', ing: 'standing' },
  'fall': { past: 'fell', ing: 'falling', pp: 'fallen' },
  'hold': { past: 'held', ing: 'holding' },
  'keep': { past: 'kept', ing: 'keeping' },
  'call': { past: 'called', ing: 'calling' },
  'pass': { past: 'passed', ing: 'passing' },
  'grow': { past: 'grew', ing: 'growing', pp: 'grown' },
  'show': { past: 'showed', ing: 'showing', pp: 'shown' },
  'step': { past: 'stepped', ing: 'stepping' },
  'hurry': { past: 'hurried', ing: 'hurrying' },
  'kneel': { past: 'knelt', ing: 'kneeling' },
  'reach': { past: 'reached', ing: 'reaching' },
  'point': { past: 'pointed', ing: 'pointing' },
  'figure': { past: 'figured', ing: 'figuring' },
  'work': { past: 'worked', ing: 'working' },
  'end': { past: 'ended', ing: 'ending' },
  'pick': { past: 'picked', ing: 'picking' },
  'drop': { past: 'dropped', ing: 'dropping' },
  'check': { past: 'checked', ing: 'checking' },
  'carry': { past: 'carried', ing: 'carrying' },
  'wake': { past: 'woke', ing: 'waking', pp: 'woken' },
  'catch': { past: 'caught', ing: 'catching' },
  'find': { past: 'found', ing: 'finding' }
};

const b1 = JSON.parse(fs.readFileSync('src/data/books/data/book1.json', 'utf8'));
const u7 = b1.units[6];

console.log("Testing on Unit 7:", u7.title);

// Test finding phrasal verbs in passage
const passage = u7.readingPassage;
const sentences = passage.match(/[^.!?]+[.!?]+/g) || [passage];

const found = [];
sentences.forEach(s => {
  const cleanS = s.trim();
  Object.keys(PV_VERBS).forEach(v => {
    const forms = [v, PV_VERBS[v].past, PV_VERBS[v].ing, PV_VERBS[v].pp].filter(Boolean);
    PARTICLES.forEach(p => {
      forms.forEach(f => {
        const r = new RegExp(`\\b(${f})\\s+(?:(?:a|an|the|his|her|their|my|our|its|[a-z]+)\\s+)?(${p})\\b`, 'i');
        const m = cleanS.match(r);
        if (m) {
          found.push({ verb: v, form: m[0], sentence: cleanS });
        }
      });
    });
  });
});

console.log("Found phrasal verb occurrences:", found);
