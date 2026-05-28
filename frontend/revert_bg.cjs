const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const TARGET = /bg-white\/70 dark:bg-slate-900\/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800/g;
const REPLACEMENT = 'bg-white';

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
        console.log(`Reverted: ${fullPath}`);
      }
    }
  });
}

walkAndReplace(directoryPath);
console.log('Done!');
