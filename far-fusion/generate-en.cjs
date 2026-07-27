const fs = require('fs');
const path = require('path');

const enDir = path.join(__dirname, 'src/pages/en');
if (!fs.existsSync(enDir)) {
    fs.mkdirSync(enDir, { recursive: true });
}

const pages = [
    'index.astro',
    'catering.astro',
    'cookie-policy.astro',
    'privacy-policy.astro'
];

pages.forEach(page => {
    const content = `---
import Page from '../${page}';
---
<Page />
`;
    fs.writeFileSync(path.join(enDir, page), content);
    console.log(`Created src/pages/en/${page}`);
});
