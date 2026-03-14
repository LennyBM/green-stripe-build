/* ═══════════════════════════════════════════════
   PRICING CALCULATOR — Extracted for testability
   ═══════════════════════════════════════════════ */

/**
 * Calculate a price range for a given service base price and lawn area.
 *
 * For per-sqm services (e.g. re-turfing), the price is `basePrice × area`
 * scaled by ±15%. For standard services, the price scales linearly from
 * a reference area of 80m² with a range of −15% to +20%.
 */
export function calculatePrice(
  basePrice: number,
  area: number,
  perSqm = false
): { low: number; high: number } {
  if (perSqm) {
    return {
      low: Math.round(basePrice * area * 0.85),
      high: Math.round(basePrice * area * 1.15),
    };
  }
  const ratio = area / 80;
  const scaled = basePrice * ratio;
  return {
    low: Math.round(scaled * 0.85),
    high: Math.round(scaled * 1.2),
  };
}
