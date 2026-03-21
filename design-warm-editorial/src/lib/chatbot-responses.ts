import { SITE_CONFIG, getPhoneUrl, getWhatsAppUrl } from "./config";

/* ═══════════════════════════════════════════════
   CHATBOT KNOWLEDGE-BASE MATCHER
   Extracted for testability and config centralisation.
   ═══════════════════════════════════════════════ */

const PHONE = SITE_CONFIG.phoneDisplay;
const WA_URL = getWhatsAppUrl().replace("https://", "");

export function getResponse(input: string): string {
  const q = input.toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|hiya|morning|afternoon|evening)\b/.test(q)) {
    return "Hello! 👋 Welcome to Green Stripe Lawn Care. I'm Jess, your digital assistant. How can I help you today? Whether it's moss troubles, bare patches, or you just want a lush green lawn — I'm here to point you in the right direction.";
  }

  // Services overview
  if (/what (services|do you (do|offer))|services/.test(q)) {
    return "We offer a full range of specialist lawn treatments:\n\n⭐ **Lawn Care Programmes** — Standard, Premier & Ultimate\n🌿 **Complete Lawn Renovations** — ground-up rebuilds\n🐛 **Lawn Grub Control** — targeted pest-specific treatment\n🔬 **Red Thread Treatment** — disease diagnosis & control\n💧 **Water Conserver** — triple-action hydration\n🏠 **Hard Surface Moss & Weed Control** — patios, drives & paths\n\nWould you like to know more about any of these? Or I can arrange a **free lawn survey** with Chris — he'll come and assess your lawn in person.";
  }

  // Scarifying
  if (/scarif/.test(q)) {
    return "**Scarification** is included in our Ultimate lawn care programme, and is also a key part of our complete lawn renovation service.\n\nFor programme scarification, we run a double pass of our professional petrol-powered scarifier through the lawn — first pass in one direction, second at approximately 45 degrees. This removes thatch and moss, and any bare or thin areas are seeded into the grooves to thicken the sward.\n\nFor renovations, we perform a heavier multi-pass scarification to create a full seed bed.\n\nPricing depends on lawn size and condition. The best way to get an accurate quote is a **free survey with Chris** — shall I arrange one?";
  }

  // Pricing
  if (/price|cost|how much|expensive|cheap|afford/.test(q)) {
    return "Every lawn is unique, so we tailor pricing based on lawn size. Our **year-round programmes** start from:\n\n• **Standard** — from £18/month (5 visits, 6 treatments)\n• **Premier** — from £25/month (+ annual aeration)\n• **Ultimate** — from £35/month (+ annual scarification)\n\nAll programmes are available on **monthly direct debit** with savings: 2% on Standard, 5% on Premier, and 10% on Ultimate.\n\nFor a precise quote, Chris will visit during a **free lawn survey** — no obligation. Shall I arrange one?";
  }

  // Service areas
  if (/area|cover|bude|wadebridge|padstow|rock|polzeath|tintagel|camelford|bodmin|launceston|holsworthy|cornwall|devon|travel|radius|where/.test(q)) {
    return "We cover approximately a **40-mile radius** from our base in Bude. Our core service areas are:\n\n📍 Bude & Widemouth Bay (our home base)\n📍 Padstow\n📍 Wadebridge\n📍 Rock & Polzeath\n📍 Tintagel\n📍 Camelford\n📍 Bodmin\n📍 Launceston\n📍 Holsworthy\n\nOur furthest customers are in St Austell. If you're on the edge of our coverage, do get in touch — we may still be able to help! Where are you based?";
  }

  // Safety / pets / children
  if (/safe|pet|dog|cat|child|kid|toddler|baby|animal/.test(q)) {
    return "Great question — we take safety very seriously. Our treatments are **professional-grade products approved for domestic use**. After liquid treatments, we recommend keeping children and pets off the lawn until it's dry (usually **2–4 hours**).\n\nFor pest control, we use the only **licenced pest-specific insecticide** for leatherjackets and chafer grubs — it targets only these pests and is completely safe for dogs, cats, children, and all wildlife.\n\nChris will always walk you through specific aftercare for whatever treatment your lawn needs. 🐾";
  }

  // Moss
  if (/moss/.test(q)) {
    return "Mossy lawns are one of our most common briefs — especially in North Cornwall's damp climate! Moss is usually a **symptom**, not the root cause. It typically means poor drainage, shade, or low soil pH.\n\nWe identify the root cause, treat the moss with targeted applications, scarify to remove dead material, then overseed with quality seed. Most clients see **90%+ moss reduction within one season**.\n\nShall I arrange a **free survey with Chris**? He'll tell you exactly what's going on.";
  }

  // Weeds
  if (/weed/.test(q)) {
    return "Weed control is included in our lawn care programmes — we apply selective herbicides in spring and summer, targeted to your specific weed types. We never blanket-spray.\n\nWe also offer **hard surface weed control** for driveways, patio cracks, gravel, and other hard standing — a separate spray that kills all types of green weed.\n\nA **free survey** is the best starting point — Chris will assess the situation and recommend the right approach.";
  }

  // About / Chris / qualifications
  if (/chris|qualif|experience|background|who|about|team/.test(q)) {
    return "Green Stripe was founded by **Chris and Jess Maynard** in 2024.\n\nChris brings **23 years of professional turf management expertise** and holds a **BSc (Hons) in Turfgrass Science**. He started mowing lawns at age 13 and began his greenkeeping career at 18. His career includes:\n\n🏌️ Championship courses in Milton Keynes\n🏌️ The London Club, Kent\n🏌️ Pinehurst, USA — one of the world's most prestigious courses\n\nJess manages all client relationships, scheduling, and business operations — ensuring a premium experience from first call to final stripe.\n\nWe're also **£1M insured**, **City & Guilds PA1/PA6 qualified**, **DBS checked**, and **EA registered waste carriers**.";
  }

  // Booking / survey / consultation
  if (/book|survey|consult|free|appointment|visit|start|begin/.test(q)) {
    return `Getting started is easy! Your **free lawn survey** works like this:\n\n1. Chris visits your property\n2. Thorough assessment — soil, thatch, drainage, pH\n3. Tailored treatment plan with honest timelines\n4. Transparent pricing — absolutely no obligation\n\nThe survey takes about 20–30 minutes. You can book by:\n📞 **${PHONE}**\n💬 **WhatsApp** us\n📝 Fill out the contact form on our website\n\nWould you like me to connect you to Jess to arrange a time?`;
  }

  // Timeline / results
  if (/how long|timeline|result|when|see (a |the )?change|improvement/.test(q)) {
    return "Timelines depend on the treatment:\n\n⏱️ **Moss control & feeds** — 2–3 weeks\n⏱️ **Overseeding** — new shoots within 14 days\n⏱️ **Scarification** — 4–6 weeks to thicken\n⏱️ **Full renovation** — one growing season (3–6 months)\n\nChris will give you realistic, honest timelines. We never overpromise. Shall I arrange a **free survey**?";
  }

  // Scheduling / specific dates — HUMAN HANDOFF
  if (/tuesday|wednesday|thursday|friday|monday|saturday|sunday|next week|tomorrow|specific date|when can you come|schedule|diary|available/.test(q)) {
    return `That's a great question — let me connect you with Jess, who manages all our scheduling and client care. She'll get back to you within a few hours.\n\n📞 **${PHONE}**\n💬 **WhatsApp**: ${WA_URL}\n\nIn the meantime, is there anything else I can help with about your lawn? 🌿`;
  }

  // Complaints — HUMAN HANDOFF
  if (/complain|unhappy|disappoint|not happy|problem with|issue with|dissatisfied/.test(q)) {
    return `I'm sorry to hear that. We take every concern seriously. Let me connect you directly with **Jess**, who oversees all client care.\n\n📞 **${PHONE}**\n💬 **WhatsApp**: ${WA_URL}\n\nShe'll get back to you personally within a few hours to resolve this properly.`;
  }

  // Contract / payment
  if (/contract|payment|invoice|direct debit|pay|deposit/.test(q)) {
    return `We offer two ways to pay: per treatment or monthly direct debit. Direct debit comes with savings: **2% on Standard, 5% on Premier, and 10% on Ultimate**.\n\nFor specific payment terms or contract details, Jess can walk you through everything.\n\n📞 **${PHONE}**\n💬 **WhatsApp**: ${WA_URL}\n\nIs there anything else about our services I can help with?`;
  }

  // Hard surfaces
  if (/patio|drive|path|hard surface|gravel/.test(q)) {
    return "Yes! We offer two types of hard surface treatments:\n\n1️⃣ **Moss & Biocide Application** — gently cleans patios, drives, and other hard surfaces, breaking down the slippery biofilm of moss, algae, and lichen.\n\n2️⃣ **Weed Control** — kills off all types of green weed from driveways, patio cracks, gravel, and other hard standing.\n\nBoth are ideal as an add-on when we're already visiting for lawn treatments. Shall I arrange a **free survey**?";
  }

  // Mowing
  if (/mow/.test(q)) {
    return "We focus exclusively on **specialist lawn treatments** — the science behind a healthy, beautiful lawn. We don't offer regular mowing services, but we'll advise you on the correct mowing height and frequency as part of your treatment plan, since mowing practice has a big impact on lawn health!\n\nWant to know more about our treatment services?";
  }

  // Fallback
  return `That's a great question! For the most accurate answer, the best next step would be a **free lawn survey with Chris**. He'll visit your property, assess your lawn's specific conditions, and give you an honest, tailored recommendation.\n\n📞 **${PHONE}**\n💬 **WhatsApp**: ${WA_URL}\n📝 Or fill out the contact form on our website\n\nIs there anything else I can help with? 🌿`;
}
