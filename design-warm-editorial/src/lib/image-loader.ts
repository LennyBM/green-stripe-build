/* ═══════════════════════════════════════════════
   CUSTOM IMAGE LOADER — for static export
   
   With `output: "export"`, Next.js can't do server-side
   image optimization. This passthrough loader preserves
   the benefits of next/image (<Image>):
   - Lazy loading
   - Explicit width/height (prevents CLS)
   - Priority hints for LCP images
   - srcSet generation
   ═══════════════════════════════════════════════ */

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  // For absolute URLs (external images), return as-is
  if (src.startsWith("http")) {
    return src;
  }

  // For local images, return the src path directly
  // The width and quality params are available for future
  // CDN integration (e.g. Cloudinary, Imgix, Netlify Image CDN)
  return src;
}
