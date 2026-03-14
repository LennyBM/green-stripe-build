import { describe, it, expect } from "vitest";
import { calculatePrice } from "../calculate-price";

describe("calculatePrice", () => {
  describe("standard (non-per-sqm) pricing", () => {
    it("returns a range for the reference area (80m²)", () => {
      const result = calculatePrice(45, 80);
      // At 80m², ratio = 1, scaled = 45
      // low = round(45 * 0.85) = 38, high = round(45 * 1.2) = 54
      expect(result.low).toBe(38);
      expect(result.high).toBe(54);
    });

    it("scales linearly for larger areas", () => {
      const result = calculatePrice(45, 160);
      // ratio = 2, scaled = 90
      // low = round(90 * 0.85) = 77, high = round(90 * 1.2) = 108
      expect(result.low).toBe(77);
      expect(result.high).toBe(108);
    });

    it("scales down for smaller areas", () => {
      const result = calculatePrice(45, 40);
      // ratio = 0.5, scaled = 22.5
      // low = round(22.5 * 0.85) = 19, high = round(22.5 * 1.2) = 27
      expect(result.low).toBe(19);
      expect(result.high).toBe(27);
    });

    it("returns low <= high", () => {
      for (const area of [20, 40, 80, 120, 200, 300]) {
        for (const base of [45, 65, 95, 120, 350]) {
          const result = calculatePrice(base, area);
          expect(result.low).toBeLessThanOrEqual(result.high);
        }
      }
    });

    it("returns positive values for any valid area", () => {
      const result = calculatePrice(45, 10);
      expect(result.low).toBeGreaterThan(0);
      expect(result.high).toBeGreaterThan(0);
    });
  });

  describe("per-sqm pricing (e.g. re-turfing)", () => {
    it("calculates per-sqm range correctly", () => {
      const result = calculatePrice(15, 100, true);
      // low = round(15 * 100 * 0.85) = 1275
      // high = round(15 * 100 * 1.15) = 1725
      expect(result.low).toBe(1275);
      expect(result.high).toBe(1725);
    });

    it("handles small areas", () => {
      const result = calculatePrice(15, 10, true);
      // low = round(15 * 10 * 0.85) = 128 (127.5 rounds to 128)
      // high = round(15 * 10 * 1.15) = 173 (172.5 rounds to 173)
      expect(result.low).toBe(128);
      expect(result.high).toBe(173);
    });

    it("returns low <= high for per-sqm pricing", () => {
      const result = calculatePrice(15, 250, true);
      expect(result.low).toBeLessThanOrEqual(result.high);
    });
  });
});
