const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/catering.astro');
let content = fs.readFileSync(filePath, 'utf-8');

const imports = `---
import Layout from '../layouts/Layout.astro';
import { Image } from 'astro:assets';
import c2Img from '../assets/images/c2.jpeg';
import c3Img from '../assets/images/c3.jpeg';
import c4Img from '../assets/images/c4.png';
import c5Img from '../assets/images/c5.jpeg';
import c7Img from '../assets/images/c7.jpg';

// Gallery images
import c1Img from '../assets/images/c1.jpeg';
import c6Img from '../assets/images/c6.jpeg';
import c7bImg from '../assets/images/c7.jpeg';
import c8Img from '../assets/images/c8.jpeg';
import c9Img from '../assets/images/c9.jpeg';
import c10Img from '../assets/images/c10.jpeg';
import c11Img from '../assets/images/c11.jpeg';
import c12Img from '../assets/images/c12.jpeg';
import c13Img from '../assets/images/c13.jpeg';
import c14Img from '../assets/images/c14.jpeg';
---`;

// 1. Add Image imports (handle both \r\n and \n)
content = content.replace(/---\r?\nimport Layout from '\.\.\/layouts\/Layout\.astro';\r?\n---/, imports);

// 2. Replace static images with Astro Images in Hero, Intro, Services
content = content.replace(/<img[^>]*src="\/c4\.png"[^>]*\/>/, 
  `<Image src={c4Img} alt="Indian Catering in Umbria Italy - Elegant Wedding Setup" class="w-full h-full object-cover opacity-70" />`);
  
content = content.replace(/<img[^>]*src="\/c5\.jpeg"[^>]*\/>/, 
  `<Image src={c5Img} alt="Authentic Indian Food - Catering Service in Umbria Italy" class="relative z-10 w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-2xl" />`);

content = content.replace(/<img[^>]*src="\/c3\.jpeg"[^>]*\/>/, 
  `<Image src={c3Img} alt="Indian Wedding Catering in Umbria Italy" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />`);

content = content.replace(/<img[^>]*src="\/c2\.jpeg"[^>]*\/>/, 
  `<Image src={c2Img} alt="Corporate Event Indian Catering Umbria" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />`);

content = content.replace(/<img[^>]*src="\/c7\.jpg"[^>]*\/>/, 
  `<Image src={c7Img} alt="Private Party Indian Catering in Umbria Italy" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />`);

// 3. Replace the Gallery section
const oldGalleryRegex = /<!-- Mobile-friendly Infinite Auto Slider -->[\s\S]*?<\/style>/;
const newGallery = `<!-- Elegant Masonry Gallery -->
			<div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 py-8">
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c1Img} alt="Catering Setup 1" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c2Img} alt="Catering Setup 2" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c3Img} alt="Catering Setup 3" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c5Img} alt="Catering Setup 5" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c6Img} alt="Catering Setup 6" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c7Img} alt="Catering Setup 7" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c7bImg} alt="Catering Setup 7b" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c8Img} alt="Catering Setup 8" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c9Img} alt="Catering Setup 9" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c10Img} alt="Catering Setup 10" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c11Img} alt="Catering Setup 11" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c12Img} alt="Catering Setup 12" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c13Img} alt="Catering Setup 13" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
				<div class="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group cursor-pointer relative">
					<Image src={c14Img} alt="Catering Setup 14" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
				</div>
			</div>`;

content = content.replace(oldGalleryRegex, newGallery);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully refactored catering.astro');
