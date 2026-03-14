# Convert large PNG images to WebP using Python Pillow
# Run: pip install Pillow && python convert_images.py

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. Run: pip install Pillow")
    sys.exit(1)

IMAGE_DIR = Path(__file__).parent.parent / "public" / "images" / "real"
SIZE_THRESHOLD = 500 * 1024  # 500KB

def convert():
    png_files = sorted(IMAGE_DIR.glob("*.png"))
    print(f"Found {len(png_files)} PNG files. Converting those over {SIZE_THRESHOLD // 1024}KB...")

    converted = 0
    total_saved = 0

    for f in png_files:
        size = f.stat().st_size
        if size < SIZE_THRESHOLD:
            print(f"  SKIP {f.name} ({size // 1024}KB — under threshold)")
            continue

        webp_path = f.with_suffix(".webp")
        try:
            img = Image.open(f)
            img.save(webp_path, "WEBP", quality=82, method=6)
            new_size = webp_path.stat().st_size
            saved = size - new_size
            pct = round((1 - new_size / size) * 100)
            print(f"  ✓ {f.name} ({size // 1024}KB) → {webp_path.name} ({new_size // 1024}KB) — saved {saved // 1024}KB ({pct}%)")
            f.unlink()
            print(f"    ✗ Deleted original {f.name}")
            converted += 1
            total_saved += saved
        except Exception as e:
            print(f"  ✗ Failed: {f.name} — {e}")

    print(f"\nDone! Converted {converted} files, saved {total_saved // 1024}KB total.")

if __name__ == "__main__":
    convert()
