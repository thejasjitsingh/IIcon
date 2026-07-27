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

const files = walk('C:/Users/theja/Desktop/siti/indianicon/IIcon/far-fusion/src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // The regex looks for data-it="something" data-en="something" and replaces the inner content.
    const regex = /<([a-zA-Z0-9]+)(\s+[^>]*?)data-it="([^"]*)"\s*data-en="([^"]*)"([^>]*?)>([\s\S]*?)<\/\1>/g;
    
    let changed = false;
    content = content.replace(regex, (match, tag, before, itText, enText, after, innerText) => {
        changed = true;
        before = before || '';
        after = after || '';
        const safeIt = itText.replace(/`/g, '\\`');
        const safeEn = enText.replace(/`/g, '\\`');
        return `<${tag}${before}${after}>{Astro.currentLocale === 'en' ? \`${safeEn}\` : \`${safeIt}\`}</${tag}>`;
    });

    // Handle class="... data-it="..." data-en="..." ... " edge cases where data-en might come first, 
    // or there's other attributes between them.
    // Actually, looking at the code, they were all added as data-it="..." data-en="..." side by side.
    
    // Note: We also need to remove any spans like:
    // <span class="..." data-it="..." data-en="...">
    //   ...
    // </span>
    
    // There might be elements with inner elements inside.
    // e.g. <a href="..." data-it="..." data-en="...">...</a>
    // Our regex handles this because it matches <\/a> closing tag.

    if (changed) {
        fs.writeFileSync(file, content);
        console.log(`Refactored ${file}`);
    }
});
