const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.astro')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./far-fusion/src');

let count = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Reduce vertical padding on mobile
  content = content.replace(/py-16 md:py-24/g, 'py-12 md:py-24');
  content = content.replace(/py-16 md:py-32/g, 'py-12 md:py-32');
  content = content.replace(/py-16 md:py-20/g, 'py-12 md:py-20');
  
  // Reduce horizontal padding on very small screens
  // Check for px-6 not followed by md:
  content = content.replace(/px-6(?!\s*md:)/g, 'px-4 md:px-6');
  
  // Reduce gaps on mobile
  content = content.replace(/gap-12 lg:gap-16/g, 'gap-8 lg:gap-16');
  content = content.replace(/gap-16(?!\s*md:|\s*lg:)/g, 'gap-8 lg:gap-16');
  
  // Adjust image heights
  content = content.replace(/h-\[300px\] md:h-\[500px\]/g, 'h-[250px] md:h-[500px]');
  content = content.replace(/h-\[300px\] md:h-\[450px\]/g, 'h-[250px] md:h-[450px]');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    count++;
  }
}
console.log(`Updated ${count} files.`);
