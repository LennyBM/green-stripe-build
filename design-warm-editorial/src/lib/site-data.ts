import {
  Leaf, Scissors, Sprout, ShieldAlert, Sparkles, TreePine,
  Bug, Microscope, Droplets,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";
import type { Service, Area, CaseStudy, ServiceOption, SocialLink, BlogPost } from "./types";
import { SITE_CONFIG } from "./config";

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */
export const services: Service[] = [
  {
    num: "01", slug: "lawn-renovation", title: "Complete Lawn Renovations", sub: "A Fresh Start for Degraded Turf", icon: Sprout,
    desc: "When a lawn has deteriorated beyond seasonal treatment, we strip it back and rebuild from the soil up. Deep aeration, pH correction, precision grading, premium seed mixes — every step informed by 15 years managing championship greens. Recently completed a full renovation for a family home in Wadebridge.",
    longDesc: "A complete lawn renovation is our most comprehensive service. We begin with a thorough soil analysis to understand pH levels, nutrient deficiencies, and drainage characteristics. From there, we strip back the existing turf layer, address any underlying soil compaction through deep aeration, and apply targeted amendments.\n\nThe ground is then precision-graded to eliminate undulations and pooling areas. We select seed mixes from the same suppliers used by championship golf courses — fine-leaf perennial ryegrass and creeping red fescue blends that establish quickly and develop a dense, resilient sward.\n\nFor full seeding jobs, we clear the old grass completely before preparing the seed bed. For over-seeding, we use heavy scarification and hollow tine aeration to open the existing turf, creating the ideal conditions for seed-to-soil contact. Top-dressing is applied with a professional lute — adding up to one inch of soil and sand at a time to level the surface and dilute thatch buildup.\n\nPost-seeding, we apply a starter fertiliser and set up an aftercare schedule that typically runs 8-12 weeks. Most clients see their new lawn fully established within one growing season.",
    process: ["Initial soil analysis & pH testing", "Strip existing turf & debris clearance", "Deep aeration & soil decompaction", "Precision grading & levelling", "Premium seed mix application", "Starter fertiliser & top dressing", "8-12 week aftercare programme"],
  },
  {
    num: "02", slug: "scarifying", title: "4-Pass Scarifying", sub: "Our Signature Process", icon: Scissors,
    desc: "Most lawn companies scarify once. We run four passes at graduated depths — removing deep thatch layers that standard equipment can't reach. The result is a root system that breathes, absorbs nutrients, and grows back thicker than ever. Our most requested service across the Bude and Widemouth Bay area.",
    longDesc: "Thatch — the layer of dead grass, roots, and organic matter that builds up between the soil surface and the green blades — is the single biggest killer of British lawns. Most companies scarify once and call it done. We don't.\n\nOur signature 4-pass process works at graduated depths. The first pass removes surface debris. The second cuts into the upper thatch layer. The third reaches the deep, compacted thatch that standard equipment simply cannot access. The fourth pass is a precision clean-up that prepares the soil surface for overseeding.\n\nBeyond thatch removal, scarification triggers a critical biological response: it encourages grass plants to tiller — shooting sideways to produce new growth points. This tillering effect is the real secret to a thick, dense lawn. It's why a professionally scarified lawn doesn't just recover — it comes back noticeably thicker than before.\n\nWe collect and remove all thatch material — typically 8-12 heavy-duty bags per average lawn.",
    process: ["Surface debris removal (Pass 1)", "Upper thatch layer cutting (Pass 2)", "Deep thatch extraction (Pass 3)", "Precision clean-up pass (Pass 4)", "Thatch collection & removal", "Optional overseeding & fertiliser"],
  },
  {
    num: "03", slug: "overseeding", title: "Overseeding & Top Dressing", sub: "Championship-Grade Seed Blends", icon: Leaf,
    desc: "We use the same cultivar blends specified for professional golf greens — fine-leaf perennial ryegrass and creeping red fescue — hand-broadcast and top-dressed with organic loam. A staple of our Padstow and North Cornwall lawn programmes.",
    longDesc: "Overseeding introduces new grass plants into an existing lawn to thicken coverage, improve colour, and fill bare patches. Combined with top dressing, it's one of the most effective ways to rejuvenate a tired lawn without a full renovation.\n\nWe hand-broadcast championship-grade seed blends across the prepared surface, ensuring even distribution. The seed is then top-dressed using a professional lute — spreading a precise blend of organic loam, sharp sand, and composted green waste up to one inch at a time. This levels minor undulations, dilutes existing thatch, and creates the ideal germination environment.\n\nWith the right soil temperature and moisture, you'll see new grass plants shooting through within 14 days. Timing is critical — we typically overseed in early autumn (September-October) when soil temperatures are warm enough for germination but cool enough to reduce competition from weeds. Spring overseeding is also effective in the right conditions.",
    process: ["Lawn assessment & preparation", "Scarification (if required)", "Championship-grade seed selection", "Hand-broadcast application", "Lute-applied organic loam top dressing", "Post-seeding watering schedule"],
  },
  {
    num: "04", slug: "moss-weed-control", title: "Moss & Weed Control", sub: "Targeted Seasonal Programmes", icon: ShieldAlert,
    desc: "We don't blanket-spray. Every treatment is soil-tested and seasonally calibrated — iron sulphate for moss in autumn, selective herbicides in spring. Particularly effective on the damp, mossy lawns common around Launceston.",
    longDesc: "Moss and weeds are symptoms, not causes. That's why we never blanket-spray. Instead, we begin with a soil test to understand why moss or weeds have taken hold — whether it's poor drainage, nutrient deficiency, excessive shade, or soil compaction.\n\nFor moss, we apply iron sulphate treatments in autumn when moss is actively growing, followed by scarification to remove the blackened moss. In spring, we use selective herbicides that target broadleaf weeds without harming the grass. Every treatment is calibrated to the specific conditions of your lawn.\n\nThis approach is particularly effective on the damp, north-facing, mossy lawns common across the Launceston and North Cornwall area. Our targeted programmes typically achieve 90%+ moss reduction within one season.",
    process: ["Soil testing & diagnosis", "Root cause identification", "Seasonal treatment plan", "Targeted moss/weed application", "Follow-up scarification", "Ongoing prevention programme"],
  },
  {
    num: "05", slug: "lawn-care-programme", title: "Lawn Care Programmes", sub: "Standard · Premier · Ultimate", icon: Sparkles,
    desc: "Bespoke year-round care plans built around 5 core seasonal visits. From our Standard programme to the comprehensive Ultimate — continuous monitoring, direct debit discounts, and guaranteed results. Trusted by homeowners across Okehampton and Bideford.",
    longDesc: "Our lawn care programmes remove the guesswork from lawn maintenance. Each plan is built around 5 core seasonal visits, calibrated to the natural growing cycle:\n\n• Early Spring (Feb–Mar): Feed & Moss Control\n• Late Spring (Apr–May): Feed & Weed Control\n• Summer (Jun–Aug): Feed & Stress Buster\n• Autumn (Sep–Nov): Feed & Weed Control\n• Winter (Nov–Jan): Feed & Moss Control\n\nThe Standard programme covers these 5 essential visits. The Premier programme adds annual solid tine aeration to relieve compaction. The Ultimate programme includes Premier plus annual scarification — the complete package for championship-grade results year-round.\n\nAll programmes are available on direct debit with savings of up to 10%. Every programme client receives a digital lawn health report after each visit, so you can track your lawn's progress throughout the year.",
    process: ["Initial lawn assessment", "Bespoke programme design", "5 seasonal visits per year", "Feeds, moss & weed control", "Aeration (Premier & Ultimate)", "Scarification (Ultimate)", "Digital health reports"],
  },
  {
    num: "06", slug: "re-turfing", title: "Re-Turfing", sub: "Instant Transformation", icon: TreePine,
    desc: "When renovation isn't enough, we lay championship-grade cultivated turf on expertly prepared ground. Precision levelling, root-zone preparation, and our post-lay care programme ensure establishment within weeks. Serving Holsworthy and beyond.",
    longDesc: "Sometimes a lawn is beyond renovation — whether due to severe disease, construction damage, or simply wanting an instant transformation. That's where our re-turfing service comes in.\n\nWe source championship-grade cultivated turf from specialist growers — the same quality you'd find on a professional sports pitch. The existing surface is stripped, the ground is rotavated, levelled to precision, and a root-zone layer is applied.\n\nThe turf is laid with staggered joints, rolled for full soil contact, and given an initial deep watering. Our post-lay care programme runs 4-6 weeks and includes watering guidance, first-cut timing, and a starter feed. Most clients are walking on a fully established lawn within 3-4 weeks.",
    process: ["Existing surface strip & clearance", "Ground preparation & rotavation", "Precision levelling", "Root-zone layer application", "Championship-grade turf laying", "Rolling & initial watering", "4-6 week aftercare programme"],
  },
  {
    num: "07", slug: "pest-control", title: "Lawn Pest Control", sub: "Biological & Targeted Solutions", icon: Bug,
    desc: "Expert identification and treatment of chafer grubs and leatherjackets — the hidden destroyers of British lawns. We use biological controls including professionally applied nematodes for environmentally responsible results.",
    longDesc: "Chafer grubs and leatherjackets are the two most destructive lawn pests in the UK. They feed on grass roots below the surface, causing patches of turf to yellow, thin, and eventually die. Left untreated, the damage compounds — birds, badgers, and foxes will tear up entire sections of lawn to dig for the grubs, often devastating a lawn overnight.\n\nWe begin with a thorough diagnosis — lifting turf samples to identify the pest species, assess infestation severity, and determine the optimal treatment window. Our primary approach uses biological controls: professionally sourced nematodes (microscopic organisms that naturally target larvae) applied in autumn when soil temperatures are ideal for nematode activity.\n\nThis approach is environmentally responsible, safe for children and pets, and highly effective when timed correctly. For severe infestations, we combine nematode treatment with overseeding and targeted feeding to accelerate lawn recovery. Early intervention is key — treating grubs before wildlife finds them prevents the far more costly secondary damage.",
    process: ["Turf sampling & pest identification", "Infestation severity assessment", "Optimal treatment window planning", "Professional nematode application", "Soil temperature monitoring", "Recovery overseeding & feeding"],
  },
  {
    num: "08", slug: "disease-management", title: "Disease Management", sub: "Diagnosis & Treatment", icon: Microscope,
    desc: "From red thread to fusarium patch, we diagnose and treat the full spectrum of lawn diseases common in the damp North Cornwall climate. Targeted fungicides combined with cultural management for lasting control.",
    longDesc: "Lawn diseases thrive in the damp, mild conditions of North Cornwall and Devon. The most common diseases we treat include red thread (Laetisaria fuciformis), fusarium patch (Microdochium nivale), anthracnose, and fairy rings.\n\nOur approach goes beyond simply applying fungicide. We diagnose the specific disease, identify the environmental conditions that triggered it, and implement a combined treatment programme: targeted fungicide application where needed, plus cultural management changes (mowing height, feed adjustments, aeration) that create conditions hostile to reinfection.\n\nChris's background managing championship golf greens — where disease management is a daily discipline — means we catch issues early and treat them before they cause lasting damage. All our pesticide applications are carried out under our City & Guilds PA1 and PA6 qualifications.",
    process: ["Visual & microscopic diagnosis", "Disease species identification", "Environmental trigger analysis", "Targeted fungicide application", "Cultural management programme", "Preventative monitoring schedule"],
  },
  {
    num: "09", slug: "wetting-agents", title: "Wetting Agent Treatments", sub: "Deep Hydration Technology", icon: Droplets,
    desc: "Specialised surfactant applications that help water penetrate hydrophobic soil layers, encouraging deeper rooting and more resilient turf. Especially effective after aeration on compacted or sandy soils.",
    longDesc: "Hydrophobic soil — where water sits on the surface and runs off rather than soaking in — is a surprisingly common problem, particularly on sandy coastal soils and heavily compacted clay. Wetting agents are specialised surfactants that break the surface tension, allowing water to penetrate deep into the root zone.\n\nWe apply professional-grade wetting agents as part of a holistic soil health programme. The treatment is most effective when combined with aeration, as the channels created by tine work allow the surfactant to reach deeper soil layers. The result is more efficient water use, deeper root development, and a turf that stays greener during dry periods.\n\nFor properties on sandy or chalky soils — common around Bude and the coastal areas — wetting agent treatments can be transformative, reducing dry patch formation and improving nutrient uptake significantly.",
    process: ["Soil hydrophobicity assessment", "Aeration (if required)", "Professional surfactant application", "Deep watering programme", "Root zone monitoring", "Seasonal reapplication schedule"],
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
  { img: "/images/real/turf-rock-after.jpg", loc: "Rock", title: "Holiday Let Turf Extension", desc: "New turf laid to extend an existing lawn at a holiday let — instant transformation with quick turnaround for the letting season.", time: "Completed in 1 Week" },
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
  { id: "pest-control", label: "Pest Control", icon: Bug },
  { id: "disease", label: "Disease Management", icon: Microscope },
  { id: "wetting-agents", label: "Wetting Agents", icon: Droplets },
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
  { q: "What's the difference between your lawn care programme tiers?", a: "All three programmes are built around 5 core seasonal visits. Standard covers feeds, moss, and weed control across the year. Premier adds annual solid tine aeration to relieve compaction. Ultimate includes Premier plus annual scarification — the complete package with guaranteed results. All programmes offer direct debit savings of up to 10%. We'll recommend the right tier during your consultation." },
  { q: "Do I need to prepare my lawn before you arrive?", a: "Ideally, give your lawn a mow 2-3 days before a scarification or overseeding appointment. For most other treatments, no preparation is needed. We'll let you know in advance if there's anything specific required for your scheduled service." },
  { q: "Can you fix a lawn that's mostly moss?", a: "Absolutely. Moss-heavy lawns are one of our most common briefs, especially in the damp coastal climate of North Cornwall. We identify the root cause (usually poor drainage, shade, or low pH), treat the moss with targeted applications, scarify to remove dead material, and then overseed to restore grass coverage. Most clients see 90%+ moss reduction within one season." },
  { q: "How do I get started?", a: `Simply fill out our contact form, give us a call on ${SITE_CONFIG.phoneDisplay}, or drop us a WhatsApp message. We'll arrange a free consultation at a time that suits you. From there, we'll design a bespoke treatment plan and get your lawn on the path to championship condition.` },
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
    img: "/images/real/turf-rock-after.jpg",
    loc: "Rock",
    title: "Holiday Let Turf Extension",
    desc: "New turf laid to extend an existing lawn at a holiday let — instant transformation with quick turnaround for the letting season.",
    fullDesc: "This Rock property needed a lawn extension completed to a tight deadline before the holiday letting season. The existing lawn bordered timber sleeper raised beds, and the client wanted to extend the turfed area along the full border. We prepared the ground, graded the surface level with the existing lawn, and laid championship-grade cultivated turf with precision joints. The result was a seamless extension that blended perfectly with the established lawn within weeks.",
    time: "1 Week",
    service: "Re-Turfing",
    area: "45m²",
  },
  {
    img: "/images/real/scarifying-end-result.jpg",
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
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/* ═══════════════════════════════════════════════
   BLOG POSTS
   ═══════════════════════════════════════════════ */
export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-scarify-lawn-cornwall",
    title: "When to Scarify Your Lawn in Cornwall: The Complete Seasonal Guide",
    excerpt: "Timing is everything with scarification. Get it wrong and you stress the grass; get it right and you unlock thicker, healthier growth. Here's when — and why — to scarify in the North Cornwall and Devon climate.",
    category: "Seasonal Care",
    readingTime: "7 min read",
    datePublished: "2025-09-12",
    dateLabel: "12 September 2025",
    body: [
      "Scarification — the process of mechanically removing thatch, moss, and surface debris from a lawn — is arguably the single most impactful treatment you can give your turf. But timing is critical. Scarify too early in the year, when the grass isn't actively growing, and you risk causing more damage than good. Scarify too late, and the lawn won't have time to recover before winter.",
      "In North Cornwall and Devon, the optimal scarification window is typically September through to mid-October. Why? Because soil temperatures are still warm enough (above 10°C) to encourage rapid grass recovery and seed germination, while the cooler air and increasing rainfall reduce drought stress. The grass is actively growing but competition from weeds is declining.",
      "Spring scarification — typically March to April — is a secondary window. It's less ideal because the lawn is still waking up from winter dormancy and the soil may not have warmed sufficiently. However, for lawns with severe thatch problems or heavy moss infestations, a spring scarify followed by targeted treatment can set the lawn up for a productive growing season.",
      "Our signature 4-pass scarification process works at graduated depths. Pass one removes surface debris. Pass two cuts into the upper thatch layer. Pass three reaches the deep, compacted thatch that standard equipment can't access. The fourth pass is a precision clean-up that prepares the soil surface for overseeding.",
      "After scarification, the lawn will look dramatically worse before it looks better — this is completely normal. The removal of thatch exposes bare soil, and the lawn can appear thin and ragged for 2-3 weeks. But this is a sign the treatment has been effective. Within 4-6 weeks, overseeded grass will have germinated and the existing plants will have tillered (spread sideways), producing a significantly thicker, denser sward.",
      "One common mistake homeowners make is mowing too short before scarification. We recommend mowing at your normal height 2-3 days before we arrive — this gives the scarifier access to the thatch layer without scalping the grass plants. After scarification, raise the mowing height by one notch for the first four weeks to protect recovering growth.",
      "If you're unsure whether your lawn needs scarifying, there's a simple test: push a finger into the lawn surface. If you can feel a spongy, fibrous layer between the green blades and the soil — that's thatch. If it's more than 1cm thick, scarification will significantly improve your lawn's health, colour, and resilience.",
    ],
  },
  {
    slug: "why-lawn-has-moss-how-to-fix",
    title: "Why Your Lawn Has Moss — And How to Fix It for Good",
    excerpt: "Moss is a symptom, not a cause. If you keep treating moss without fixing the underlying problem, it will always come back. Here's the greenkeeper's approach to permanent moss control.",
    category: "Lawn Health",
    readingTime: "6 min read",
    datePublished: "2025-11-03",
    dateLabel: "3 November 2025",
    body: [
      "Moss in your lawn isn't just an aesthetic issue — it's a signal that something is wrong with the growing conditions. And in North Cornwall and Devon, where we get 1,000-1,400mm of rainfall per year, conditions are almost perfectly set up for moss to thrive. The key to beating it isn't just killing the moss — it's fixing the conditions that invited it in the first place.",
      "The four most common causes of lawn moss are: poor drainage and waterlogging, low soil pH (acidic conditions), excessive shade, and soil compaction. Often it's a combination of two or more factors working together. Until you address these root causes, chemical treatments will only ever provide a temporary fix.",
      "Let's start with drainage. Clay-heavy soils — extremely common across the Launceston, Holsworthy, and inland Devon areas — hold water like a sponge. When the soil surface stays saturated, grass roots can't access oxygen and the plants weaken. Moss, which has no roots and absorbs moisture directly through its leaves, thrives in these exact conditions. The fix? Deep aeration using hollow-tine cores, which removes plugs of compacted soil and creates channels for water to drain through the root zone.",
      "Soil pH is another critical factor. Moss favours acidic soils (below pH 5.5), which are prevalent across Cornwall and Devon due to the granite-based geology and high rainfall leaching calcium from the topsoil. A simple soil test will reveal your pH level. If it's below 5.5, a targeted lime application can raise the pH to the 6.0-6.5 range that grass thrives in — and that moss struggles with.",
      "Shade management is trickier. If large trees are casting permanent shade over your lawn, moss will always have an advantage. However, selective branch thinning (lifting the canopy) can dramatically increase light levels without removing the tree. We also recommend shade-tolerant grass cultivars for overseeding under trees — these specialist varieties are far more competitive against moss than standard lawn seed.",
      "For the treatment itself, we apply iron sulphate in autumn when moss is actively growing. This blackens and kills the moss within 7-14 days. We then scarify to physically remove the dead moss — typically collecting 8-12 heavy-duty bags from an average lawn. The key step most people miss? Overseeding immediately after scarification. Bare soil left by moss removal will simply be re-colonised by moss unless you fill it with competitive grass plants.",
      "The complete programme — soil testing, pH correction, aeration, moss treatment, scarification, and overseeding — typically achieves 90%+ moss reduction within one season. And because you've addressed the underlying causes, the results last. That's the difference between a greenkeeper's approach and a quick-fix spray.",
    ],
  },
  {
    slug: "spring-lawn-care-checklist-cornwall-devon",
    title: "Spring Lawn Care Checklist for North Cornwall & Devon Homeowners",
    excerpt: "Spring is when your lawn wakes up and sets the tone for the entire year. Get these five critical steps right between February and May, and you'll be ahead of 90% of lawns in your street.",
    category: "Seasonal Care",
    readingTime: "5 min read",
    datePublished: "2026-02-20",
    dateLabel: "20 February 2026",
    body: [
      "Spring is the most important season for your lawn. The decisions you make between February and May determine whether you'll have a lush, thick lawn by summer — or be battling bare patches, weeds, and moss all year. Here's our professional checklist, refined over 15 years of greenkeeping.",
      "Step 1: The First Mow (Late February – March). The first mow of the year should be on the highest setting your mower allows. This isn't about cutting the grass short — it's about tidying the surface, removing winter debris, and encouraging the grass to start tillering. Mowing too short too early is one of the most common mistakes we see. It weakens the plants at exactly the moment they need energy reserves to grow. Keep the mower on its highest setting for the first three cuts, then gradually lower it over the following weeks.",
      "Step 2: Spring Feed (March – April). After months of dormancy, your lawn is nutrient-depleted. A balanced spring feed provides the nitrogen, phosphorus, and potassium the grass needs to leaf out, develop roots, and strengthen against disease. We use a formulation with a higher nitrogen ratio for spring — this drives the green colour and leaf growth that makes your lawn look alive again. Timing matters: apply when daytime temperatures consistently reach 8-10°C and there's some rain forecast within 48 hours.",
      "Step 3: Moss Treatment (March – April). If moss has colonised over winter — and in our climate, it almost certainly has — now is the time to treat it. An iron sulphate application will blacken and kill the moss within two weeks. Don't scarify the dead moss out immediately; wait until the grass has been growing strongly for at least 3-4 weeks so it can recover from any disruption.",
      "Step 4: Weed Control (April – May). As soil temperatures rise above 10°C, weeds start germinating alongside your grass. A selective herbicide applied in April or May will target broadleaf weeds (dandelions, clover, buttercups) without harming the grass. Timing is crucial — apply too early when weeds are small and they won't absorb enough product; too late and they'll have set seed. We find the sweet spot is usually mid-April in North Cornwall.",
      "Step 5: Aeration (April – May). If your soil is compacted — and after a wet Cornish winter, it probably is — aeration opens up the root zone. We use solid-tine aeration in spring (hollow-tine is reserved for autumn) to create channels that allow air, water, and nutrients to reach the roots. This single step can transform a struggling lawn by addressing the compaction that causes waterlogging, shallow rooting, and weed invasion.",
      "Bonus: if your lawn is thin or patchy after winter, spring overseeding (March–April) with a quality seed mix can fill gaps before weeds colonise the bare soil. Choose a seed mix suited to your conditions — we use coastal-tolerant blends for Bude and Padstow, and shade-tolerant mixes for sheltered Launceston gardens. With these five steps completed by May, your lawn will be in championship condition for summer.",
    ],
  },
];

