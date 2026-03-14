import { describe, it, expect } from "vitest";
import { getResponse } from "../chatbot-responses";

describe("getResponse (chatbot knowledge-base matcher)", () => {
  describe("greetings", () => {
    it("responds to 'hello'", () => {
      const response = getResponse("Hello");
      expect(response).toContain("Welcome to Green Stripe");
    });

    it("responds to 'hi'", () => {
      const response = getResponse("hi");
      expect(response).toContain("Welcome to Green Stripe");
    });

    it("responds to 'hey there'", () => {
      const response = getResponse("hey there");
      expect(response).toContain("Welcome to Green Stripe");
    });
  });

  describe("services", () => {
    it("responds to service enquiry", () => {
      const response = getResponse("What services do you offer?");
      expect(response).toContain("Lawn Renovations");
      expect(response).toContain("Scarifying");
    });
  });

  describe("scarifying", () => {
    it("responds to 'scarifying' keyword", () => {
      const response = getResponse("Tell me about scarifying");
      expect(response).toContain("4-Pass Scarifying");
      expect(response).toContain("graduated depths");
    });
  });

  describe("pricing", () => {
    it("responds to 'how much' with programme prices", () => {
      const response = getResponse("How much does it cost?");
      expect(response).toContain("£45");
      expect(response).toContain("£65");
      expect(response).toContain("£95");
    });
  });

  describe("service areas", () => {
    it("responds to 'Bude' as a service area", () => {
      const response = getResponse("Do you cover Bude?");
      expect(response).toContain("40-mile radius");
      expect(response).toContain("Bude");
    });

    it("includes all 7 service areas", () => {
      const response = getResponse("What areas do you cover?");
      for (const area of ["Bude", "Wadebridge", "Padstow", "Launceston", "Okehampton", "Bideford", "Holsworthy"]) {
        expect(response).toContain(area);
      }
    });
  });

  describe("pet safety", () => {
    it("responds to pet safety query", () => {
      const response = getResponse("Is it safe for my dog?");
      expect(response).toContain("safe");
      expect(response).toContain("2–4 hours");
    });
  });

  describe("moss", () => {
    it("responds to moss query", () => {
      const response = getResponse("My lawn is full of moss");
      expect(response).toContain("90%+ moss reduction");
    });
  });

  describe("fallback", () => {
    it("returns a helpful fallback for unrecognised input", () => {
      const response = getResponse("xyzzy random gibberish 12345");
      expect(response).toContain("free lawn survey");
    });
  });

  describe("config-driven contact info", () => {
    it("uses config-derived phone number in booking response", () => {
      const response = getResponse("book a survey");
      // Should contain the phone number from config
      expect(response).toContain("01288 371343");
    });

    it("uses config-derived WhatsApp in fallback response", () => {
      const response = getResponse("random question xyz");
      // WhatsApp URL should come from config helper, not hardcoded
      expect(response).toContain("wa.me");
    });
  });
});
