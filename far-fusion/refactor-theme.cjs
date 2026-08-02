const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.astro')) results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let original = content;

    // bg-[#722F37] -> bg-primary
    content = content.replace(/bg-\[\#722F37\]/g, 'bg-primary');
    // text-[#722F37] -> text-primary
    content = content.replace(/text-\[\#722F37\]/g, 'text-primary');
    // border-[#722F37] -> border-primary
    content = content.replace(/border-\[\#722F37\]/g, 'border-primary');
    
    // bg-[#C5A059] -> bg-secondary
    content = content.replace(/bg-\[\#C5A059\]/g, 'bg-secondary');
    // text-[#C5A059] -> text-secondary
    content = content.replace(/text-\[\#C5A059\]/g, 'text-secondary');
    // border-[#C5A059] -> border-secondary
    content = content.replace(/border-\[\#C5A059\]/g, 'border-secondary');
    
    // bg-[#FDFBF7] -> bg-canvas
    content = content.replace(/bg-\[\#FDFBF7\]/g, 'bg-canvas');
    // text-[#FDFBF7] -> text-canvas
    content = content.replace(/text-\[\#FDFBF7\]/g, 'text-canvas');
    // border-[#FDFBF7] -> border-canvas
    content = content.replace(/border-\[\#FDFBF7\]/g, 'border-canvas');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated colors in ${file}`);
        changedCount++;
    }
});

console.log(`Refactored ${changedCount} files.`);
