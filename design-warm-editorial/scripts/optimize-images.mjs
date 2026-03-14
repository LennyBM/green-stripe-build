/**
 * IMAGE OPTIMISER — Build-time compression for static export
 * 
 * Processes all images in public/images/:
 * - PNGs → WebP (typically 60-80% smaller)
 * - JPGs → re-compressed JPEG at quality 80, max 1920px wide
 * - Generates .webp alongside originals for PNGs
 * - Overwrites JPGs in-place with optimised versions
 * 
 * Run: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGE_DIR = "public/images";
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 80;

let totalOriginal = 0;
let totalOptimised = 0;
let filesProcessed = 0;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimiseImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;
  totalOriginal += originalSize;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if wider than MAX_WIDTH
    const needsResize = metadata.width && metadata.width > MAX_WIDTH;

    if (ext === ".png") {
      // Convert PNG → WebP (much smaller, widely supported)
      const webpPath = filePath.replace(/\.png$/i, ".webp");
      const pipeline = sharp(filePath);
      if (needsResize) pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(webpPath);

      const newStat = await stat(webpPath);
      totalOptimised += newStat.size;
      filesProcessed++;

      const savings = ((1 - newStat.size / originalSize) * 100).toFixed(0);
      console.log(`  ✓ ${basename(filePath)} → .webp (${fmt(originalSize)} → ${fmt(newStat.size)}, -${savings}%)`);

      // Also optimise the original PNG in place (for any direct references)
      const pngBuffer = await sharp(filePath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toBuffer();
      
      // Only replace if smaller
      if (pngBuffer.length < originalSize) {
        const tmpPath = filePath + ".tmp";
        const { writeFile, unlink } = await import("fs/promises");
        await writeFile(tmpPath, pngBuffer);
        await unlink(filePath);
        await rename(tmpPath, filePath);
      }
    } else {
      // Re-compress JPEG in place
      const buffer = await sharp(filePath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer();

      // Only replace if smaller
      if (buffer.length < originalSize) {
        const tmpPath = filePath + ".tmp";
        const { writeFile, unlink } = await import("fs/promises");
        await writeFile(tmpPath, buffer);
        await unlink(filePath);
        await rename(tmpPath, filePath);

        const newSize = buffer.length;
        totalOptimised += newSize;
        filesProcessed++;

        const savings = ((1 - newSize / originalSize) * 100).toFixed(0);
        console.log(`  ✓ ${basename(filePath)} (${fmt(originalSize)} → ${fmt(newSize)}, -${savings}%)`);
      } else {
        totalOptimised += originalSize;
        console.log(`  · ${basename(filePath)} (${fmt(originalSize)}, already optimal)`);
      }
    }
  } catch (err) {
    console.error(`  ✗ ${basename(filePath)}: ${err.message}`);
    totalOptimised += originalSize;
  }
}

function fmt(bytes) {
  return bytes > 1024 * 1024
    ? (bytes / 1024 / 1024).toFixed(1) + "MB"
    : Math.round(bytes / 1024) + "KB";
}

async function main() {
  console.log("\\n🖼️  Optimising images in public/images/...\\n");
  const files = await getFiles(IMAGE_DIR);
  const imageFiles = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));
  console.log(`  Found ${imageFiles.length} images to process\\n`);

  for (const file of imageFiles) {
    await optimiseImage(file);
  }

  const totalSavings = ((1 - totalOptimised / totalOriginal) * 100).toFixed(0);
  console.log(`\\n📊 Results:`);
  console.log(`   Original:  ${fmt(totalOriginal)}`);
  console.log(`   Optimised: ${fmt(totalOptimised)}`);
  console.log(`   Savings:   ${fmt(totalOriginal - totalOptimised)} (-${totalSavings}%)`);
  console.log(`   Files:     ${filesProcessed} processed\\n`);
}

main().catch(console.error);
