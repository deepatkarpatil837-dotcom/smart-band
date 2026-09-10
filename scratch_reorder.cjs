const fs = require('fs');
const file = 'src/components/ActivityRingsCard.jsx';
let content = fs.readFileSync(file, 'utf8');

const stepsRegex = /\{\/\* Steps Progress Row \*\/\}[\s\S]*?\{\/\* Active Calories Row \*\/\}/;
const stepsMatch = content.match(stepsRegex);

if (stepsMatch) {
  const stepsBlock = stepsMatch[0].replace('          {/* Active Calories Row */}', '').trimEnd() + '\n\n';
  
  // Remove steps block
  content = content.replace(stepsBlock, '');
  
  // Find where to insert it
  const insertIndex = content.indexOf('        </div>\n\n      </div>\n\n      {/* Hourly Step Graph */}');
  
  if (insertIndex !== -1) {
    content = content.slice(0, insertIndex) + '          ' + stepsBlock + content.slice(insertIndex);
    fs.writeFileSync(file, content);
    console.log('Success!');
  } else {
    console.log('Insert point not found');
  }
} else {
  console.log('Steps block not found');
}
