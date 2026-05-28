const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// We will replace 'bg-white' with 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800'
// This creates a sleek glassmorphism effect instead of flat white.
const TARGET = /\bbg-white\b/g;
const REPLACEMENT = 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800';

function walkAndReplace(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkAndReplace(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (TARGET.test(content)) {
        content = content.replace(TARGET, REPLACEMENT);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

walkAndReplace(directoryPath);
console.log('Done!');
