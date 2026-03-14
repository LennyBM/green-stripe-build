// scripts/convert-images.mjs
// Converts large PNGs to WebP format for better performance
import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGE_DIR = join(process.cwd(), 'public', 'images', 'real');
const SIZE_THRESHOLD = 500 * 1024; // 500KB — only convert files larger than this

async function convertImages() {
  const files = await readdir(IMAGE_DIR);
  const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');

  console.log(`Found ${pngFiles.length} PNG files. Checking sizes...`);

  let converted = 0;
  let totalSaved = 0;

  for (const file of pngFiles) {
    const filePath = join(IMAGE_DIR, file);
    const fileStats = await stat(filePath);

    if (fileStats.size < SIZE_THRESHOLD) {
      console.log(`  SKIP ${file} (${Math.round(fileStats.size / 1024)}KB — under threshold)`);
      continue;
    }

    const webpName = basename(file, '.png') + '.webp';
    const webpPath = join(IMAGE_DIR, webpName);

    try {
      await sharp(filePath)
        .webp({ quality: 82, effort: 6 })
        .toFile(webpPath);

      const webpStats = await stat(webpPath);
      const savedKB = Math.round((fileStats.size - webpStats.size) / 1024);
      const pct = Math.round((1 - webpStats.size / fileStats.size) * 100);

      console.log(`  ✓ ${file} (${Math.round(fileStats.size / 1024)}KB) → ${webpName} (${Math.round(webpStats.size / 1024)}KB) — saved ${savedKB}KB (${pct}%)`);

      // Delete the original PNG after successful conversion
      await unlink(filePath);
      console.log(`    ✗ Deleted original ${file}`);

      converted++;
      totalSaved += fileStats.size - webpStats.size;
    } catch (err) {
      console.error(`  ✗ Failed to convert ${file}:`, err.message);
    }
  }

  console.log(`\nDone! Converted ${converted} files, saved ${Math.round(totalSaved / 1024)}KB total.`);
}

convertImages().catch(console.error);
