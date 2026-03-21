import {
  Leaf, Sparkles, Sprout,
  Bug, Microscope, Droplets, Hammer,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";
import type { Service, Area, CaseStudy, ServiceOption, SocialLink, BlogPost } from "./types";
import { SITE_CONFIG } from "./config";

/* ═══════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════ */
export const services: Service[] = [
  {
    num: "01", slug: "lawn-care-programme", title: "Lawn Care Programmes", sub: "Standard · Premier · Ultimate", icon: Sparkles,
    desc: "Bespoke year-round care plans built around 5 core seasonal visits with 6 targeted treatments. From our Standard programme to the comprehensive Ultimate — feed & weed control, moss treatments, water conserver, aeration, and scarification. Available on monthly direct debit with savings of up to 10%.",
    longDesc: "Our lawn care programmes remove the guesswork from lawn maintenance. Each plan is built around 5 core seasonal visits with 6 targeted treatments, calibrated to the natural growing cycle:\n\n• Early Spring (Feb–Apr): Feed & Moss Control — slow release fertiliser applied via calibrated professional spreaders, plus a liquid application to control moss.\n• Late Spring (Apr–Jun): Feed & Weed Control — slow release fertiliser and liquid spot-sprayed weed control. Water conserver also applied at this visit.\n• Summer (Jun–Sep): Feed & Weed Control — summer liquid feed and weed control for late-flowering weeds.\n• Autumn (Sep–Dec): Feed & Moss Control — granular autumn feed for lawn colour and plant health heading into winter. Moss control also applied to combat early moss growth.\n• Winter (Dec–Feb): Moss Control & Micro Nutrients — liquid moss control and micro nutrient application for moss control, winter colour and to harden the sward against winter disease.\n\nThe Standard programme covers these 5 essential visits with 6 treatments. The Premier programme adds annual solid tine aeration to relieve compaction. The Ultimate programme includes everything in Premier plus annual scarification — the complete package for championship-grade results year-round.\n\nAll programmes are available on monthly direct debit with savings: 2% on Standard, 5% on Premier, and 10% on Ultimate.",
    process: ["Initial lawn assessment", "Bespoke programme design", "5 seasonal visits with 6 treatments", "Feed, moss & weed control", "Water conserver treatment", "Aeration (Premier & Ultimate)", "Scarification (Ultimate)"],
  },
  {
    num: "02", slug: "lawn-renovation", title: "Complete Lawn Renovations", sub: "A Fresh Start for Degraded Turf", icon: Sprout,
    desc: "When a lawn has deteriorated beyond seasonal treatment, we rebuild it from the ground up. Pre-treatment to control weeds and moss, multi-pass scarification to create a seed bed, double aeration, premium seed, pre-seed fertiliser, water conserver, and professional top-dressing — all followed by a germination check.",
    longDesc: "A complete lawn renovation is our most comprehensive service. We begin with a pre-renovation treatment to control weeds and moss.\n\nAfter 1–2 weeks we return to scarify the lawn with multiple passes to remove thatch and moss and create a seed bed. The lawn is then double aerated to relieve compaction.\n\nHigh-quality lawn seed is sown into the seed bed. A pre-seed fertiliser and water conserver treatment is applied. The lawn is then top-dressed with professional lawn dressing to increase seed-to-soil contact and boost germination.\n\nThe dressing is worked into the lawn with a rake and drag mat. We perform one germination check after sowing to ensure good germination and advise on aftercare.\n\nMost clients see their new lawn fully established within one growing season.",
    process: ["Pre-renovation weed & moss treatment", "Return after 1–2 weeks for scarification", "Multi-pass scarify to create seed bed", "Double aeration to relieve compaction", "Premium lawn seed application", "Pre-seed fertiliser & water conserver", "Top-dressing & germination check"],
  },
  {
    num: "03", slug: "pest-control", title: "Lawn Grub Control", sub: "Targeted Pest-Specific Treatment", icon: Bug,
    desc: "A few lawn pests are part of your lawn's natural biodiversity and generally don't cause issues. When pest populations reach critical levels, we apply the only licenced pest-specific insecticide for leatherjackets and chafer grubs — targeted, safe for children and pets, and effective.",
    longDesc: "A few lawn pests are all part of your lawn's natural biodiversity and generally don't cause an issue. Sometimes, however, pest populations can reach critical levels and damage lawns long-term.\n\nWe can apply the only licenced pest-specific insecticide for leatherjackets (crane fly larvae) and chafer grubs. This targeted application targets only these pests and is safe for children and pets, restoring your lawn to its former glory by removing the unwanted grubs.\n\nLeft untreated, the damage compounds — birds, badgers, and foxes will tear up entire sections of lawn to dig for the grubs, often devastating a lawn overnight. Early intervention is key — treating grubs before wildlife finds them prevents the far more costly secondary damage.\n\nThis service is offered as a bolt-on to our lawn care programmes.",
    process: ["Turf sampling & pest identification", "Infestation severity assessment", "Optimal treatment window planning", "Licenced insecticide application", "Safe for children & pets", "Recovery monitoring"],
  },
  {
    num: "04", slug: "disease-management", title: "Red Thread Treatment", sub: "Disease Diagnosis & Control", icon: Microscope,
    desc: "Our carefully selected lawn treatment programme usually prevents excess disease by keeping grass healthy and correctly fed. When environmental conditions cause red thread, we offer a targeted treatment to reduce symptoms and improve your lawn's appearance.",
    longDesc: "Our carefully selected lawn treatment programme usually prevents lawns suffering from excess disease by naturally keeping the grass healthy and correctly fed without excess nitrogen.\n\nSometimes, due to environmental conditions such as excess rainfall, lawns can suffer from Red Thread disease. These pink/red strands of mycelium can be seen on your lawn in the early morning dew. Whilst this issue doesn't kill the lawn, it causes the tips of the grass to brown off in unsightly patches.\n\nAs such, we can offer a quick treatment to help reduce the symptoms and improve your lawn's appearance. We don't generally apply fungicides to your lawn — instead we look at other ways of reducing the conditions for the disease, such as moisture management and increasing light and airflow to the lawn.",
    process: ["Visual diagnosis of disease", "Environmental trigger analysis", "Targeted treatment application", "Moisture management advice", "Light & airflow recommendations", "Preventative monitoring"],
  },
  {
    num: "05", slug: "water-conserver", title: "Water Conserver", sub: "Triple-Action Hydration", icon: Droplets,
    desc: "Availability of water to your lawn is critical for all our processes to work well. Our granular water conserver works in three ways: reducing surface tension, relieving dry patches in the thatch layer, and holding moisture in the soil profile. One application lasts approximately 3 months.",
    longDesc: "Availability of water to your lawn is critical for all our processes to work well and get maximum benefit from our programme. As such, we now include water conserver in our standard lawn care programme.\n\nA one-off application of this granular product — usually in late spring or early summer — works in three different ways to keep your lawn hydrated over the summer:\n\n1. It reduces the surface tension of the water so it infiltrates the soil better.\n2. It relieves dry patches that can form in the thatch layer.\n3. It holds on to moisture in the soil profile away from the surface, so it's available to the plant but prevents excess loss through run-off and evaporation.\n\nOne application lasts approximately 3 months. For properties on sandy or chalky soils — common around Bude and the coastal areas — water conserver treatments can be transformative, reducing dry patch formation and improving nutrient uptake significantly.",
    process: ["Soil assessment", "Late spring / early summer application", "Surface tension reduction", "Dry patch relief", "Moisture retention in soil profile", "~3-month duration per application"],
  },
  {
    num: "06", slug: "hard-surface-treatment", title: "Hard Surface Moss & Weed Control", sub: "Patios, Driveways & Paths", icon: Hammer,
    desc: "We offer two types of hard surface sprays: a moss and biocide application that gently cleans patios, drives, and other hard surfaces, and a weed control treatment that kills off all types of green weed from driveways, patio cracks, gravel, and other hard standing.",
    longDesc: "We offer two types of hard surface sprays:\n\n**1. Moss & Biocide Application** — This product gently cleans patios, drives, and other hard surfaces, breaking down the slippery biofilm of moss, algae, and lichen that can form on your surfaces, particularly over winter.\n\n**2. Weed Control** — This product kills off all types of green weed from your driveway, patio cracks, gravel, and other hard standing.\n\nBoth treatments are professionally applied and provide long-lasting results. Ideal as an add-on when we're already visiting your property for lawn treatments.",
    process: ["Surface assessment", "Treatment type selection", "Professional spray application", "Moss & biofilm breakdown", "Weed elimination", "Long-lasting results"],
  },
];

/* ═══════════════════════════════════════════════
   SERVICE AREAS
   ═══════════════════════════════════════════════ */
export const areas: Area[] = [
  { name: "Bude & Widemouth Bay", slug: "bude", tagline: "Our Home Base", desc: "Based right here in Bude, this is where Green Stripe started. We know every microclimate, every soil type, and every coastal challenge that Bude lawns face. From seafront gardens battered by salt winds to sheltered inland plots, we have the local expertise to deliver results." },
  { name: "Wadebridge", slug: "wadebridge", tagline: "Camel Estuary Excellence", desc: "Wadebridge and the surrounding Camel Estuary area features some of North Cornwall's most beautiful properties. We've completed full renovations and ongoing care programmes across the town, bringing championship-grade results to family homes and countryside estates alike." },
  { name: "Padstow", slug: "padstow", tagline: "Coastal Premium", desc: "Padstow's coastal position means lawns face unique challenges — salt spray, sandy soils, and exposure to Atlantic weather systems. Our targeted treatments and salt-tolerant seed selections are specifically calibrated for Padstow's conditions." },
  { name: "Rock & Polzeath", slug: "rock", tagline: "Estuary & Coast", desc: "Rock and Polzeath properties — from family homes to holiday lets — benefit from our quick-turnaround services and year-round lawn care programmes. Coastal exposure and sandy soils demand specialist understanding, and we deliver results season after season." },
  { name: "Tintagel", slug: "tintagel", tagline: "North Coast Heritage", desc: "Tintagel's dramatic north coast position means lawns contend with Atlantic winds, salt exposure, and variable soil conditions. Our targeted treatments and resilient seed selections are designed for these challenging but beautiful coastal conditions." },
  { name: "Camelford", slug: "camelford", tagline: "Inland North Cornwall", desc: "Camelford and the surrounding inland areas of North Cornwall feature a mix of soil types and growing conditions. Our bespoke programmes are tailored to the specific needs of each property, from compact town gardens to larger rural plots." },
  { name: "Bodmin", slug: "bodmin", tagline: "Heart of Cornwall", desc: "Bodmin sits at the heart of Cornwall with its own unique soil and climate characteristics. We bring the same championship-grade care to Bodmin properties, with programmes tailored to the local growing conditions." },
  { name: "Launceston", slug: "launceston", tagline: "Gateway Town Coverage", desc: "Launceston's position on the Devon-Cornwall border means more sheltered, inland conditions — but also heavier, clay-based soils prone to waterlogging and moss. Our deep aeration and drainage solutions are particularly effective here." },
  { name: "Holsworthy", slug: "holsworthy", tagline: "Rural Heartland", desc: "Deep in the rural heartland between Devon and Cornwall, Holsworthy-area properties often have larger garden spaces with different maintenance needs. Our programmes scale to handle everything from compact town gardens to acre-plus plots." },
];

/* ═══════════════════════════════════════════════
   CASE STUDIES
   ═══════════════════════════════════════════════ */
export const caseStudies: CaseStudy[] = [
  { img: "/images/real/after-scarifying.jpg", loc: "Padstow", title: "Spring Renovation Success", desc: "Multi-pass scarify, overseed and top dressing to reduce thatch, thicken the sward and help this lawn thrive in 2026.", time: "Completed in 3 Weeks" },
  { img: "/images/real/turf-rock-after.jpg", loc: "Rock", title: "Holiday Let Turf Extension", desc: "New turf laid to extend an existing lawn at a holiday let — instant transformation with quick turnaround for the letting season.", time: "Completed in 1 Week" },
];

/* ═══════════════════════════════════════════════
   FORM OPTIONS
   ═══════════════════════════════════════════════ */
export const serviceOptions: ServiceOption[] = [
  { id: "lawn-programme", label: "Lawn Care Programme", icon: Sparkles },
  { id: "lawn-renovation", label: "Lawn Renovation", icon: Sprout },
  { id: "pest-control", label: "Lawn Grub Control", icon: Bug },
  { id: "disease", label: "Red Thread Treatment", icon: Microscope },
  { id: "water-conserver", label: "Water Conserver", icon: Droplets },
  { id: "hard-surfaces", label: "Hard Surface Treatment", icon: Hammer },
];

/* ═══════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════ */
export const stats = [
  { value: "23+", label: "Years Experience" },
  { value: "120+", label: "Lawns Cared For" },
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
  { name: "A.M", location: "Burlawn", rating: 5, text: "We would like to thank you as we are more than pleased as to how the lawn is looking.", date: "March 2026" },
  { name: "S.B", location: "Rock", rating: 5, text: "We really feel the lawn has improved under your watch, so please can you continue with the lawn treatments for the foreseeable future.", date: "February 2026" },
  { name: "P.H", location: "St Columb", rating: 5, text: "Thank you for looking after our lawn. It's looking a whole lot healthier and better than when you first took it on a year ago and I'm much happier with your service and care.", date: "February 2026" },
  { name: "H.G", location: "Camelford", rating: 5, text: "Thanks for all your help. Lawn is looking great!", date: "January 2026" },
  { name: "D.H", location: "Camelford", rating: 5, text: "We are really happy with your treatments and how good it has made our lawn look compared to what it was like.", date: "December 2025" },
  { name: "M.S", location: "New Polzeath", rating: 5, text: "The grass is looking pretty lush!", date: "October 2025" },
  { name: "R.W", location: "Padstow", rating: 5, text: "The lawns have so improved since the spring and summer treatments.", date: "July 2025" },
  { name: "F.P", location: "New Polzeath", rating: 5, text: "We were very impressed with the lawn reshaping progress, thank you!", date: "June 2025" },
];

/* ═══════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════ */
export const faqs = [
  { q: "How far do you travel?", a: "We cover approximately a 40-mile radius from our base in Bude. This includes Padstow, Wadebridge, Rock, Polzeath, Tintagel, Camelford, Bodmin, Launceston, and Holsworthy. Our furthest customers are in St Austell. If you're on the edge of our coverage, get in touch — we may still be able to help." },
  { q: "What's included in a free consultation?", a: "During your free consultation, Chris will visit your property, assess your lawn's current condition, identify any underlying issues (thatch, moss, soil compaction, pH imbalance), and recommend a tailored treatment plan. There's absolutely no obligation — it's just an honest assessment from someone who's spent 23 years in professional turf management." },
  { q: "How long before I see results?", a: "It depends on the treatment. Moss control and feed treatments typically show visible improvement within 2-3 weeks. Scarification results are usually visible within 4-6 weeks. A full renovation will show dramatic improvement within one growing season (3-6 months). We'll give you realistic timelines during your consultation." },
  { q: "Do you work year-round?", a: "Yes. Lawn care is a seasonal discipline — different treatments are optimal at different times of year. Our year-round programmes are scheduled around the natural growing cycle: spring feeds, summer maintenance, autumn scarification, and winter preparation. We plan proactively, not reactively." },
  { q: "Are your treatments safe for children and pets?", a: "We use professional-grade products that are safe for domestic use when applied correctly. After liquid treatments, we recommend keeping children and pets off the lawn until it's dry (typically 2-4 hours). We'll always advise you on specific aftercare requirements for each treatment." },
  { q: "What's the difference between your lawn care programme tiers?", a: "All three programmes are built around 5 core seasonal visits with 6 treatments. Standard covers feeds, moss & weed control, and water conserver across the year. Premier adds annual solid tine aeration to relieve compaction. Ultimate includes everything in Premier plus annual scarification — the complete package. Direct debit discounts: 2% on Standard, 5% on Premier, and 10% on Ultimate." },
  { q: "Do I need to prepare my lawn before you arrive?", a: "Ideally, give your lawn a mow 2-3 days before a scarification or renovation appointment. For most other treatments, no preparation is needed. We'll let you know in advance if there's anything specific required for your scheduled service." },
  { q: "Can you fix a lawn that's mostly moss?", a: "Absolutely. Moss-heavy lawns are one of our most common briefs, especially in the damp coastal climate of North Cornwall. We identify the root cause (usually poor drainage, shade, or low pH), treat the moss with targeted applications, scarify to remove dead material, and then overseed to restore grass coverage. Most clients see significant moss reduction within one season." },
  { q: "Do you treat hard surfaces too?", a: "Yes! We offer two types of hard surface treatment: a moss and biocide application for patios, drives, and paths, and a weed control spray for driveways, patio cracks, gravel, and other hard standing. Ideal as an add-on when we're already visiting your property." },
  { q: "How do I get started?", a: `Simply fill out our contact form, give us a call on ${SITE_CONFIG.phoneDisplay}, or drop us a WhatsApp message. We'll arrange a free consultation at a time that suits you. From there, we'll design a bespoke treatment plan and get your lawn on the path to championship condition.` },
];

/* ═══════════════════════════════════════════════
   PRICING PACKAGES
   ═══════════════════════════════════════════════ */
export const packages = [
  {
    name: "Standard",
    tagline: "Essential Seasonal Care",
    price: "From £18",
    period: "per month",
    features: [
      "5 visits with 6 treatments",
      "Feed & weed control",
      "Moss treatments",
      "Water conserver treatment",
      "2% direct debit discount",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Premier",
    tagline: "Our Most Popular Programme",
    price: "From £25",
    period: "per month",
    features: [
      "Everything in Standard",
      "Annual solid tine aeration",
      "Relieves compaction",
      "Improves root health",
      "5% direct debit discount",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Ultimate",
    tagline: "Championship-Grade Results",
    price: "From £35",
    period: "per month",
    features: [
      "Everything in Premier",
      "Annual scarification",
      "Thatch & moss removal",
      "Overseeding of thin areas",
      "10% direct debit discount",
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
    img: "/images/real/turf-rock-after.jpg",
    loc: "Rock",
    title: "Holiday Let Turf Extension",
    desc: "New turf laid to extend an existing lawn at a holiday let — instant transformation with quick turnaround for the letting season.",
    fullDesc: "This Rock property needed a lawn extension completed to a tight deadline before the holiday letting season. The existing lawn bordered timber sleeper raised beds, and the client wanted to extend the turfed area along the full border. We prepared the ground, graded the surface level with the existing lawn, and laid quality turf with precision joints. The result was a seamless extension that blended perfectly with the established lawn within weeks.",
    time: "1 Week",
    service: "Turf Laying",
    area: "45m²",
  },
  {
    img: "/images/real/bude-after.jpg",
    loc: "Bude",
    title: "Drought Damaged to Lush Sward",
    desc: "A drought-damaged lawn transformed into a healthy, lush sward to admire through our comprehensive treatment programme.",
    fullDesc: "This Bude property had suffered significant drought damage, with large areas of dry, brown turf. Through our structured treatment programme — including water conserver application, targeted feeding, and careful renovation work — we restored the lawn to a healthy, lush sward. The transformation demonstrates what consistent, science-based lawn care can achieve even with challenging coastal conditions.",
    time: "6 Months",
    service: "Full Programme + Renovation",
    area: "200m²",
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
      "Our scarification process works at graduated depths. The first pass removes surface debris. Subsequent passes cut deeper into the thatch layer, reaching the compacted thatch that standard equipment can't access. The final pass is a precision clean-up that prepares the soil surface for overseeding.",
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
      "Let's start with drainage. Clay-heavy soils — common across the Launceston, Holsworthy, and inland areas — hold water like a sponge. When the soil surface stays saturated, grass roots can't access oxygen and the plants weaken. Moss, which has no roots and absorbs moisture directly through its leaves, thrives in these exact conditions. The fix? Deep aeration using solid tines, which punches thousands of holes across your lawn to increase the flow of water, air, and nutrients to the grass roots.",
      "Soil pH is another critical factor. Moss favours acidic soils (below pH 5.5), which are prevalent across Cornwall and Devon due to the granite-based geology and high rainfall leaching calcium from the topsoil. A simple soil test will reveal your pH level. If it's below 5.5, a targeted lime application can raise the pH to the 6.0-6.5 range that grass thrives in — and that moss struggles with.",
      "Shade management is trickier. If large trees are casting permanent shade over your lawn, moss will always have an advantage. However, selective branch thinning (lifting the canopy) can dramatically increase light levels without removing the tree. We also recommend shade-tolerant grass cultivars for overseeding under trees — these specialist varieties are far more competitive against moss than standard lawn seed.",
      "For the treatment itself, we apply iron sulphate when moss is actively growing. This blackens and kills the moss within 7-14 days. We then scarify to physically remove the dead moss. The key step most people miss? Overseeding immediately after scarification. Bare soil left by moss removal will simply be re-colonised by moss unless you fill it with competitive grass plants.",
      "The complete programme — feed, moss treatment, aeration, scarification, and overseeding — can achieve significant moss reduction within one season. And because you've addressed the underlying causes, the results last. That's the difference between a greenkeeper's approach and a quick-fix spray.",
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
      "Spring is the most important season for your lawn. The decisions you make between February and May determine whether you'll have a lush, thick lawn by summer — or be battling bare patches, weeds, and moss all year. Here's our professional checklist, refined over 23 years of greenkeeping.",
      "Step 1: The First Mow (Late February – March). The first mow of the year should be on the highest setting your mower allows. This isn't about cutting the grass short — it's about tidying the surface, removing winter debris, and encouraging the grass to start tillering. Mowing too short too early is one of the most common mistakes we see. It weakens the plants at exactly the moment they need energy reserves to grow. Keep the mower on its highest setting for the first three cuts, then gradually lower it over the following weeks.",
      "Step 2: Spring Feed (March – April). After months of dormancy, your lawn is nutrient-depleted. A balanced spring feed provides the nitrogen, phosphorus, and potassium the grass needs to leaf out, develop roots, and strengthen against disease. We use slow-release formulations applied via calibrated professional spreaders — this drives the green colour and leaf growth that makes your lawn look alive again. Timing matters: apply when daytime temperatures consistently reach 8-10°C and there's some rain forecast within 48 hours.",
      "Step 3: Moss Treatment (March – April). If moss has colonised over winter — and in our climate, it almost certainly has — now is the time to treat it. A liquid moss control application will blacken and kill the moss within two weeks. Don't scarify the dead moss out immediately; wait until the grass has been growing strongly for at least 3-4 weeks so it can recover from any disruption.",
      "Step 4: Weed Control (April – May). As soil temperatures rise above 10°C, weeds start germinating alongside your grass. A selective herbicide applied in April or May will target broadleaf weeds (dandelions, clover, buttercups) without harming the grass. Timing is crucial — apply too early when weeds are small and they won't absorb enough product; too late and they'll have set seed. We find the sweet spot is usually mid-April in North Cornwall.",
      "Step 5: Aeration (April – May). If your soil is compacted — and after a wet Cornish winter, it probably is — aeration opens up the root zone. We use solid-tine aeration which punches thousands of holes across your lawn, creating channels that allow air, water, and nutrients to reach the roots. This single step can transform a struggling lawn by addressing the compaction that causes waterlogging, shallow rooting, and weed invasion.",
      "Bonus: if your lawn is thin or patchy after winter, spring overseeding (March–April) with a quality seed mix can fill gaps before weeds colonise the bare soil. Choose a seed mix suited to your conditions — we use coastal-tolerant blends for Bude and Padstow, and shade-tolerant mixes for sheltered inland gardens. With these five steps completed by May, your lawn will be in great shape for summer.",
    ],
  },
];
