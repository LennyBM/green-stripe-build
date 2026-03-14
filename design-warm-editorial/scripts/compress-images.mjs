// Compress large PNG images to WebP using sharp
// Run: node scripts/compress-images.mjs

import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join } from 'path';

const DIR = './public/images/real';
const THRESHOLD = 500_000; // 500KB
const QUALITY = 80;

const files = await readdir(DIR);
let saved = 0;

for (const file of files) {
  if (!file.endsWith('.png')) continue;
  
  const path = join(DIR, file);
  const { size } = await stat(path);
  
  if (size < THRESHOLD) continue;
  
  const outName = file.replace('.png', '.webp');
  const outPath = join(DIR, outName);
  
  await sharp(path)
    .webp({ quality: QUALITY })
    .toFile(outPath);
  
  const { size: newSize } = await stat(outPath);
  const pct = Math.round((1 - newSize / size) * 100);
  saved += size - newSize;
  
  console.log(`✓ ${file} (${Math.round(size/1024)}KB) → ${outName} (${Math.round(newSize/1024)}KB) — ${pct}% smaller`);
}

console.log(`\nTotal saved: ${Math.round(saved / 1024)}KB`);
console.log('\n⚠️  Remember to update any component references from .png to .webp');
