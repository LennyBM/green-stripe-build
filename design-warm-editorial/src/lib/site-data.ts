import {
  Leaf, Scissors, Sprout, ShieldAlert, Sparkles, TreePine,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";
import type { Service, Area, CaseStudy, ServiceOption, SocialLink } from "./types";

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */
export const services: Service[] = [
  {
    num: "01", slug: "lawn-renovation", title: "Complete Lawn Renovations", sub: "A Fresh Start for Degraded Turf", icon: Sprout,
    desc: "When a lawn has deteriorated beyond seasonal treatment, we strip it back and rebuild from the soil up. Deep aeration, pH correction, precision grading, premium seed mixes — every step informed by 15 years managing championship greens. Recently completed a full renovation for a family home in Wadebridge.",
    longDesc: "A complete lawn renovation is our most comprehensive service. We begin with a thorough soil analysis to understand pH levels, nutrient deficiencies, and drainage characteristics. From there, we strip back the existing turf layer, address any underlying soil compaction through deep aeration, and apply targeted amendments.\n\nThe ground is then precision-graded to eliminate undulations and pooling areas. We select seed mixes from the same suppliers used by championship golf courses — fine-leaf perennial ryegrass and creeping red fescue blends that establish quickly and develop a dense, resilient sward.\n\nPost-seeding, we apply a starter fertiliser and set up an aftercare schedule that typically runs 8-12 weeks. Most clients see their new lawn fully established within one growing season.",
    process: ["Initial soil analysis & pH testing", "Strip existing turf & debris clearance", "Deep aeration & soil decompaction", "Precision grading & levelling", "Premium seed mix application", "Starter fertiliser & top dressing", "8-12 week aftercare programme"],
  },
  {
    num: "02", slug: "scarifying", title: "4-Pass Scarifying", sub: "Our Signature Process", icon: Scissors,
    desc: "Most lawn companies scarify once. We run four passes at graduated depths — removing deep thatch layers that standard equipment can't reach. The result is a root system that breathes, absorbs nutrients, and grows back thicker than ever. Our most requested service across the Bude and Widemouth Bay area.",
    longDesc: "Thatch — the layer of dead grass, roots, and organic matter that builds up between the soil surface and the green blades — is the single biggest killer of British lawns. Most companies scarify once and call it done. We don't.\n\nOur signature 4-pass process works at graduated depths. The first pass removes surface debris. The second cuts into the upper thatch layer. The third reaches the deep, compacted thatch that standard equipment simply cannot access. The fourth pass is a precision clean-up that prepares the soil surface for overseeding.\n\nThe result? A root system that can finally breathe, absorb water and nutrients efficiently, and grow back denser than ever before. We collect and remove all thatch material — typically 8-12 heavy-duty bags per average lawn.",
    process: ["Surface debris removal (Pass 1)", "Upper thatch layer cutting (Pass 2)", "Deep thatch extraction (Pass 3)", "Precision clean-up pass (Pass 4)", "Thatch collection & removal", "Optional overseeding & fertiliser"],
  },
  {
    num: "03", slug: "overseeding", title: "Overseeding & Top Dressing", sub: "Championship-Grade Seed Blends", icon: Leaf,
    desc: "We use the same cultivar blends specified for professional golf greens — fine-leaf perennial ryegrass and creeping red fescue — hand-broadcast and top-dressed with organic loam. A staple of our Padstow and North Cornwall lawn programmes.",
    longDesc: "Overseeding introduces new grass plants into an existing lawn to thicken coverage, improve colour, and fill bare patches. Combined with top dressing, it's one of the most effective ways to rejuvenate a tired lawn without a full renovation.\n\nWe hand-broadcast championship-grade seed blends across the prepared surface, ensuring even distribution. The seed is then top-dressed with a blend of organic loam, sharp sand, and composted green waste — creating the ideal germination environment.\n\nTiming is critical. We typically overseed in early autumn (September-October) when soil temperatures are warm enough for germination but cool enough to reduce competition from weeds. Spring overseeding is also effective in the right conditions.",
    process: ["Lawn assessment & preparation", "Scarification (if required)", "Championship-grade seed selection", "Hand-broadcast application", "Organic loam top dressing", "Post-seeding watering schedule"],
  },
  {
    num: "04", slug: "moss-weed-control", title: "Moss & Weed Control", sub: "Targeted Seasonal Programmes", icon: ShieldAlert,
    desc: "We don't blanket-spray. Every treatment is soil-tested and seasonally calibrated — iron sulphate for moss in autumn, selective herbicides in spring. Particularly effective on the damp, mossy lawns common around Launceston.",
    longDesc: "Moss and weeds are symptoms, not causes. That's why we never blanket-spray. Instead, we begin with a soil test to understand why moss or weeds have taken hold — whether it's poor drainage, nutrient deficiency, excessive shade, or soil compaction.\n\nFor moss, we apply iron sulphate treatments in autumn when moss is actively growing, followed by scarification to remove the blackened moss. In spring, we use selective herbicides that target broadleaf weeds without harming the grass. Every treatment is calibrated to the specific conditions of your lawn.\n\nThis approach is particularly effective on the damp, north-facing, mossy lawns common across the Launceston and North Cornwall area. Our targeted programmes typically achieve 90%+ moss reduction within one season.",
    process: ["Soil testing & diagnosis", "Root cause identification", "Seasonal treatment plan", "Targeted moss/weed application", "Follow-up scarification", "Ongoing prevention programme"],
  },
  {
    num: "05", slug: "lawn-care-programme", title: "Lawn Care Programmes", sub: "From Standard to Ultimate", icon: Sparkles,
    desc: "Bespoke year-round care plans tailored to your lawn's soil type, aspect, and usage. From quarterly feeds to our comprehensive Ultimate programme — continuous monitoring and guaranteed results. Trusted by homeowners across Okehampton and Bideford.",
    longDesc: "Our lawn care programmes remove the guesswork from lawn maintenance. Each plan is built around your lawn's specific soil type, aspect (north/south facing), usage patterns, and your goals.\n\nThe Standard programme includes quarterly seasonal feeds, an annual scarification, and one overseeding application. The Premium programme adds moss treatment, weed control, and bi-annual aeration. Our Ultimate programme is the full package — monthly visits, continuous monitoring, soil testing, and a guaranteed results pledge.\n\nEvery programme client receives a digital lawn health report after each visit, so you can track your lawn's progress throughout the year. We adjust treatments dynamically based on weather patterns, soil conditions, and how the lawn is responding.",
    process: ["Initial lawn assessment", "Bespoke programme design", "Quarterly/monthly scheduled visits", "Seasonal feed applications", "Annual scarification & aeration", "Digital health reports", "Year-round monitoring"],
  },
  {
    num: "06", slug: "re-turfing", title: "Re-Turfing", sub: "Instant Transformation", icon: TreePine,
    desc: "When renovation isn't enough, we lay championship-grade cultivated turf on expertly prepared ground. Precision levelling, root-zone preparation, and our post-lay care programme ensure establishment within weeks. Serving Holsworthy and beyond.",
    longDesc: "Sometimes a lawn is beyond renovation — whether due to severe disease, construction damage, or simply wanting an instant transformation. That's where our re-turfing service comes in.\n\nWe source championship-grade cultivated turf from specialist growers — the same quality you'd find on a professional sports pitch. The existing surface is stripped, the ground is rotavated, levelled to precision, and a root-zone layer is applied.\n\nThe turf is laid with staggered joints, rolled for full soil contact, and given an initial deep watering. Our post-lay care programme runs 4-6 weeks and includes watering guidance, first-cut timing, and a starter feed. Most clients are walking on a fully established lawn within 3-4 weeks.",
    process: ["Existing surface strip & clearance", "Ground preparation & rotavation", "Precision levelling", "Root-zone layer application", "Championship-grade turf laying", "Rolling & initial watering", "4-6 week aftercare programme"],
  },
];

/* ═══════════════════════════════════════════════
   SERVICE AREAS
   ═══════════════════════════════════════════════ */
export const areas: Area[] = [
  { name: "Bude & Widemouth Bay", slug: "bude", tagline: "Our Home Base", desc: "Based right here in Widemouth Bay, Bude is where Green Stripe started. We know every microclimate, every soil type, and every coastal challenge that Bude lawns face. From seafront gardens battered by salt winds to sheltered inland plots, we have the local expertise to deliver results." },
  { name: "Wadebridge", slug: "wadebridge", tagline: "Camel Estuary Excellence", desc: "Wadebridge and the surrounding Camel Estuary area features some of North Cornwall's most beautiful properties. We've completed full renovations and ongoing care programmes across the town, bringing championship-grade results to family homes and countryside estates alike." },
  { name: "Padstow", slug: "padstow", tagline: "Coastal Premium", desc: "Padstow's coastal position means lawns face unique challenges — salt spray, sandy soils, and exposure to Atlantic weather systems. Our targeted treatments and salt-tolerant seed selections are specifically calibrated for Padstow's conditions." },
  { name: "Launceston", slug: "launceston", tagline: "Gateway Town Coverage", desc: "Launceston's position on the Devon-Cornwall border means more sheltered, inland conditions — but also heavier, clay-based soils prone to waterlogging and moss. Our deep aeration and drainage solutions are particularly effective here." },
  { name: "Okehampton", slug: "okehampton", tagline: "Dartmoor Edge", desc: "Serving the Okehampton area at the edge of Dartmoor, where lawns contend with heavy rainfall, acidic soils, and cooler temperatures. Our pH correction programmes and hardy seed selections are designed for these specific conditions." },
  { name: "Bideford", slug: "bideford", tagline: "North Devon Reach", desc: "Bideford and the Torridge area represent our North Devon coverage. The maritime influence and river valley conditions create a unique growing environment that we've learned to work with across multiple seasons of service." },
  { name: "Holsworthy", slug: "holsworthy", tagline: "Rural Heartland", desc: "Deep in the rural heartland between Devon and Cornwall, Holsworthy-area properties often have larger garden spaces with different maintenance needs. Our programmes scale to handle everything from compact town gardens to acre-plus plots." },
];

/* ═══════════════════════════════════════════════
   CASE STUDIES
   ═══════════════════════════════════════════════ */
export const caseStudies: CaseStudy[] = [
  { img: "/images/real/after-scarifying.jpg", loc: "Padstow", title: "Spring Renovation Success", desc: "A 4-pass scarify and bespoke overseeding program. Transformed a moss-heavy patch into a resilient, family-ready lawn.", time: "Completed in 3 Weeks" },
  { img: "/images/real/lawn-summer.jpg", loc: "Wadebridge", title: "Early Spring Moss Control", desc: "Targeted moss control treatments yielded a dark green, lush lawn — now the centrepiece of the property.", time: "Seasonal Treatment" },
];

/* ═══════════════════════════════════════════════
   FORM OPTIONS
   ═══════════════════════════════════════════════ */
export const serviceOptions: ServiceOption[] = [
  { id: "lawn-renovation", label: "Lawn Renovation", icon: Sprout },
  { id: "scarifying", label: "4-Pass Scarifying", icon: Scissors },
  { id: "overseeding", label: "Overseeding & Top Dressing", icon: Leaf },
  { id: "moss-weed", label: "Moss & Weed Control", icon: ShieldAlert },
  { id: "lawn-programme", label: "Lawn Care Programme", icon: Sparkles },
  { id: "re-turfing", label: "Re-Turfing", icon: TreePine },
];

/* ═══════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════ */
export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Lawns Transformed" },
  { value: "40mi", label: "Service Radius" },
  { value: "5.0", label: "Star Rating" },
];

/* ═══════════════════════════════════════════════
   SOCIAL LINKS
   ═══════════════════════════════════════════════ */
export const socialLinks: SocialLink[] = [
  { href: "https://www.facebook.com/greenstripelawns", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/greenstripelawns", icon: Instagram, label: "Instagram" },
  { href: "https://wa.me/441288371343", icon: MessageCircle, label: "WhatsApp" },
];

/* ═══════════════════════════════════════════════
   REVIEWS
   ═══════════════════════════════════════════════ */
export const reviews = [
  { name: "Sarah & Tom H.", location: "Wadebridge", rating: 5, text: "We'd tried three different lawn companies before finding Green Stripe. Chris took one look at our lawn, explained exactly what was wrong (a combination of thatch build-up and pH imbalance), and laid out a treatment plan that made total sense. After two visits, our lawn looked better than it had in five years. The 4-pass scarifying is genuinely a different league.", date: "March 2025" },
  { name: "David P.", location: "Bude", rating: 5, text: "Having just moved to Bude from Surrey, I was struggling to find anyone who really understood lawns rather than just mowing them. Chris clearly knows his stuff — you can tell he's spent years on professional golf courses. The lawn renovation he did for us was immaculate. Every step was explained, every timeline was met. Can't recommend highly enough.", date: "February 2025" },
  { name: "Emma & Mark L.", location: "Padstow", rating: 5, text: "Jess and Chris are brilliant. The communication alone sets them apart — Jess keeps you informed at every stage, and Chris's work speaks for itself. Our lawn was mostly moss and weeds when they started. One season later, it's a proper lawn again. The neighbours have noticed. Two of them have already booked Green Stripe.", date: "January 2025" },
  { name: "Richard K.", location: "Launceston", rating: 5, text: "I was sceptical about the 4-pass scarifying — seemed excessive. Chris explained the science behind it, and the results spoke for themselves. My lawn has never been this thick, this green, or this resilient. Worth every penny. I've now signed up for the year-round care programme.", date: "November 2024" },
  { name: "Claire & James W.", location: "Okehampton", rating: 5, text: "We have a large sloping garden on the edge of Dartmoor that's always been a nightmare — waterlogged in winter, patchy in summer. Chris designed a treatment programme around our specific soil conditions and aspect. It's genuinely transformed. The kids can actually play on it now without sliding.", date: "October 2024" },
  { name: "Helen S.", location: "Bideford", rating: 5, text: "Professional, knowledgeable, and genuinely passionate about what they do. You can see it in the results. Our front lawn went from embarrassing to the best on the street in about three months. The overseeding with championship-grade seed made a visible difference within weeks.", date: "September 2024" },
  { name: "Paul & Linda D.", location: "Holsworthy", rating: 5, text: "Chris re-turfed our back garden after a building project destroyed the old lawn. The preparation was meticulous — he spent as much time on the groundwork and drainage as on laying the actual turf. Six months on, it looks like it's been there for years. Incredible attention to detail.", date: "August 2024" },
  { name: "Margaret T.", location: "Widemouth Bay", rating: 5, text: "As a near-neighbour, I see Chris working on lawns around the area regularly. The quality is obvious from the street. When I finally booked Green Stripe for my own garden, the result exceeded expectations. Jess made the whole process effortless from start to finish.", date: "July 2024" },
];

/* ═══════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════ */
export const faqs = [
  { q: "How far do you travel?", a: "We cover approximately a 40-mile radius from our base in Widemouth Bay. This includes Bude, Wadebridge, Padstow, Launceston, Okehampton, Bideford, and Holsworthy. If you're on the edge of our coverage, get in touch — we may still be able to help." },
  { q: "What's included in a free consultation?", a: "During your free consultation, Chris will visit your property, assess your lawn's current condition, identify any underlying issues (thatch, moss, soil compaction, pH imbalance), and recommend a tailored treatment plan. There's absolutely no obligation — it's just an honest assessment from someone who's spent 15 years managing championship turf." },
  { q: "How long before I see results?", a: "It depends on the treatment. Moss control and feed treatments typically show visible improvement within 2-3 weeks. Overseeding and scarifying results are usually visible within 4-6 weeks. A full renovation will show dramatic improvement within one growing season (3-6 months). We'll give you realistic timelines during your consultation." },
  { q: "Do you work year-round?", a: "Yes. Lawn care is a seasonal discipline — different treatments are optimal at different times of year. Our year-round programmes are scheduled around the natural growing cycle: spring feeds, summer maintenance, autumn scarification, and winter preparation. We plan proactively, not reactively." },
  { q: "What makes 4-pass scarifying different from standard scarifying?", a: "Most lawn companies scarify once at a single depth. Our 4-pass process works at graduated depths — surface debris removal, upper thatch cutting, deep thatch extraction, and a precision clean-up pass. This reaches compacted thatch layers that standard equipment simply cannot access. The result is significantly better root aeration and nutrient absorption." },
  { q: "Are your treatments safe for children and pets?", a: "We use professional-grade products that are safe for domestic use when applied correctly. After liquid treatments, we recommend keeping children and pets off the lawn until it's dry (typically 2-4 hours). We'll always advise you on specific aftercare requirements for each treatment." },
  { q: "What's the difference between your lawn care programme tiers?", a: "Our Standard programme includes quarterly seasonal feeds, annual scarification, and one overseeding application. Premium adds moss and weed treatments plus bi-annual aeration. The Ultimate programme is the full package — monthly visits, continuous monitoring, soil testing, and our guaranteed results pledge. We'll recommend the right tier during your consultation." },
  { q: "Do I need to prepare my lawn before you arrive?", a: "Ideally, give your lawn a mow 2-3 days before a scarification or overseeding appointment. For most other treatments, no preparation is needed. We'll let you know in advance if there's anything specific required for your scheduled service." },
  { q: "Can you fix a lawn that's mostly moss?", a: "Absolutely. Moss-heavy lawns are one of our most common briefs, especially in the damp coastal climate of North Cornwall. We identify the root cause (usually poor drainage, shade, or low pH), treat the moss with targeted applications, scarify to remove dead material, and then overseed to restore grass coverage. Most clients see 90%+ moss reduction within one season." },
  { q: "How do I get started?", a: "Simply fill out our contact form, give us a call on 01288 371343, or drop us a WhatsApp message. We'll arrange a free consultation at a time that suits you. From there, we'll design a bespoke treatment plan and get your lawn on the path to championship condition." },
];

/* ═══════════════════════════════════════════════
   PRICING PACKAGES
   ═══════════════════════════════════════════════ */
export const packages = [
  {
    name: "Standard",
    tagline: "Essential Seasonal Care",
    price: "From £45",
    period: "per visit",
    features: [
      "Quarterly seasonal feeds",
      "Annual scarification",
      "One overseeding application",
      "Basic soil assessment",
      "Post-visit health report",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Premium",
    tagline: "Our Most Popular Programme",
    price: "From £65",
    period: "per visit",
    features: [
      "Everything in Standard",
      "Moss & weed treatments",
      "Bi-annual deep aeration",
      "Targeted pH correction",
      "Priority scheduling",
      "Seasonal lawn health reports",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Ultimate",
    tagline: "Championship-Grade Guarantee",
    price: "From £95",
    period: "per visit",
    features: [
      "Everything in Premium",
      "Monthly scheduled visits",
      "Continuous monitoring",
      "Full soil testing & analysis",
      "Guaranteed results pledge",
      "Direct line to Chris",
      "Bespoke treatment calendar",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

/* ═══════════════════════════════════════════════
   EXPANDED CASE STUDIES (for /results page)
   ═══════════════════════════════════════════════ */
export const expandedCaseStudies = [
  {
    img: "/images/real/after-scarifying.jpg",
    loc: "Padstow",
    title: "Spring Renovation Success",
    desc: "A 4-pass scarify and bespoke overseeding program. Transformed a moss-heavy patch into a resilient, family-ready lawn.",
    fullDesc: "This Padstow property had suffered years of neglect. The lawn was over 60% moss with significant thatch build-up preventing water and nutrient penetration. Our 4-pass scarification removed 14 bags of thatch material. Following scarification, we applied a targeted iron sulphate moss treatment, overseeded with a championship-grade fescue blend, and top-dressed with organic loam. Within 8 weeks, the lawn had established a dense, vibrant sward. The client has since enrolled in our Premium year-round maintenance programme.",
    time: "3 Weeks",
    service: "Scarifying + Overseeding",
    area: "120m²",
  },
  {
    img: "/images/real/lawn-summer.jpg",
    loc: "Wadebridge",
    title: "Early Spring Moss Control",
    desc: "Targeted moss control treatments yielded a dark green, lush lawn — now the centrepiece of the property.",
    fullDesc: "The Wadebridge property sits on heavy clay soil in a north-facing aspect — ideal conditions for moss to thrive. Rather than blanket-spraying, we conducted a full soil analysis revealing a pH of 5.2 (too acidic). Our treatment programme included lime application to raise pH, targeted iron sulphate for existing moss, deep aeration to improve drainage, and a customised feed schedule. The transformation was dramatic — from a patchy, moss-dominated surface to a consistently dark green, healthy lawn that's now the envy of the neighbourhood.",
    time: "One Season",
    service: "Moss Control + pH Correction",
    area: "85m²",
  },
  {
    img: "/images/real/striped-lawn.jpg",
    loc: "Bude",
    title: "Complete Coastal Renovation",
    desc: "A seafront garden ravaged by salt wind required a complete ground-up rebuild with salt-tolerant cultivars.",
    fullDesc: "Coastal properties in Bude face some of the harshest growing conditions in North Cornwall. This seafront garden had been decimated by winter storms and persistent salt spray. We stripped the existing surface entirely, improved the sandy soil structure with targeted amendments, installed a drainage solution to prevent waterlogging, and laid championship-grade turf selected specifically for salt tolerance. The result is a lush, resilient lawn that handles coastal exposure without deterioration.",
    time: "6 Weeks",
    service: "Full Renovation + Re-Turfing",
    area: "200m²",
  },
  {
    img: "/images/real/greenstripe-at-work.jpg",
    loc: "Launceston",
    title: "Year-Round Programme Transformation",
    desc: "From neglected to neighbourhood-best in 12 months through our Ultimate lawn care programme.",
    fullDesc: "This Launceston property had a lawn that hadn't received any professional attention in over a decade. Heavy clay soil, poor drainage, and a thatch layer exceeding 3cm made it a challenging project. The client enrolled in our Ultimate programme. Over 12 months, we implemented quarterly scarification, monthly feeds tailored to soil test results, two rounds of deep aeration, ongoing weed management, and strategic overseeding. The transformation was progressive and sustainable — each visit building on the last.",
    time: "12 Months",
    service: "Ultimate Lawn Care Programme",
    area: "150m²",
  },
];

/* ═══════════════════════════════════════════════
   NAV LINKS
   ═══════════════════════════════════════════════ */
export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Results", href: "/results" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

