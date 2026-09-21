import { Project, Service, SkillCategory, ToolItem, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: "Abdul Rehman",
  title: "Creative Technologist • Designer • Frontend Developer • AI & Automation",
  location: "Pakistan",
  status: "AVAILABLE FOR SELECT PROJECTS",
  emails: [
    "rehman@qwhosting.com",
    "rehmanalbalushi375@gmail.com"
  ],
  whatsapp: "+92 327 8234073",
  whatsappUrl: "https://wa.me/923278234073",
  socials: [
    { name: "TikTok", handle: "@Balushi_Tech", url: "https://tiktok.com/@Balushi_Tech" },
    { name: "Instagram", handle: "@Balushi_Tech", url: "https://instagram.com/Balushi_Tech" },
    { name: "YouTube", handle: "@Balushi_Tech", url: "https://youtube.com/@Balushi_Tech" },
    { name: "GitHub", handle: "rehm129", url: "https://github.com/rehm129" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "velcarro",
    title: "VELCARRO",
    category: "E-Commerce Digital Storefront",
    type: "real",
    tagline: "High-end lifestyle e-commerce platform engineered for seamless shopping experience.",
    description: "An active digital storefront focused on luxury product presentation, fluid category navigation, intuitive cart interactions, and modern responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "E-Commerce UI", "Responsive Systems"],
    image: "/src/assets/images/luxury_design_concept_1789978480670.jpg",
    liveUrl: "https://www.velcarro.com/",
    featuredPoints: [
      "Curated luxury product presentation layouts",
      "Seamless shopping flow and cart ergonomics",
      "Mobile-optimized catalog browsing experience",
      "Sophisticated visual hierarchy and brand typography"
    ],
    role: "Frontend Developer & Storefront Design",
    year: "2024–2025"
  },
  {
    id: "nailart",
    title: "NAILART / NAILIO",
    category: "Beauty & Studio Web Experience",
    type: "real",
    tagline: "Clean, responsive boutique web experience for beauty and nail art studios.",
    description: "A tailored web application featuring service catalogs, interactive appointment inquiry sections, visual portfolio showcases, and lightweight component architecture.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Mobile-First UI"],
    image: "/src/assets/images/futuristic_dashboard_ui_1789978492582.jpg",
    githubUrl: "https://github.com/rehm129/nail-art-website.git",
    featuredPoints: [
      "Responsive layout powered by Bootstrap 5 framework",
      "Interactive studio service cards & visual gallery",
      "Clean client-side navigation with zero layout shift",
      "Lightweight, production-ready codebase on GitHub"
    ],
    role: "Frontend Developer & UI Designer",
    year: "2024"
  },
  {
    id: "concept-ai-flow",
    title: "AUTONOMOUS PIPELINE",
    category: "AI Automation / Concept",
    type: "concept",
    tagline: "End-to-end intelligent lead qualification and multi-channel synchronization engine.",
    description: "Conceptual multi-stage automation topology routing inbound opportunities through AI classification, CRM status updates, personalized email sequencing, and proactive calendar scheduling.",
    technologies: ["AI Workflow Architecture", "n8n / Webhooks", "LLM Processing", "CRM Sync"],
    image: "/src/assets/images/ai_automation_flow_1789978459260.jpg",
    featuredPoints: [
      "Real-time sentiment and intent classification",
      "Zero-latency webhook event dispatcher",
      "Adaptive customer follow-up cadence",
      "Visual node orchestration map"
    ],
    role: "Automation Architect (Concept)",
    year: "2025"
  },
  {
    id: "concept-luxury-tech",
    title: "AURA KINETIC CAMPAIGN",
    category: "Luxury Tech Campaign / Design Experiment",
    type: "concept",
    tagline: "Editorial creative technology poster system pairing 3D chrome physics with strict typographic grids.",
    description: "Personal design experiment exploring chromatic studio lighting, heavy contrast, obsidian negative space, and mathematical editorial typography for luxury digital products.",
    technologies: ["3D Physics Rendering", "Typography Systems", "Art Direction", "Visual Identity"],
    image: "/src/assets/images/luxury_design_concept_1789978480670.jpg",
    featuredPoints: [
      "Strict typographic hierarchy and micro-tracking",
      "Cinematic ray-traced studio reflections",
      "Balanced spatial negative space",
      "Harmonized violet and cyan lighting accents"
    ],
    role: "Art Direction & Graphic Design",
    year: "2025"
  },
  {
    id: "concept-telemetry-ui",
    title: "SYNAPSE TELEMETRY UI",
    category: "Futuristic Dashboard / UI Concept",
    type: "concept",
    tagline: "High-density monitoring console crafted for real-time automation oversight.",
    description: "An experimental dark-mode dashboard interface designed to visualize high-throughput automation pipelines, throughput metrics, server health, and anomaly detections.",
    technologies: ["UI/UX Architecture", "Data Visualization", "Dark Glass System", "Telemetry UX"],
    image: "/src/assets/images/futuristic_dashboard_ui_1789978492582.jpg",
    featuredPoints: [
      "Ergonomic widget spacing and data groupings",
      "Subtle optical glow accents without distraction",
      "High-contrast readability meeting WCAG standards",
      "Contextual drill-down drawer layout"
    ],
    role: "Product & Interface Designer",
    year: "2025"
  },
  {
    id: "concept-3d-sculpture",
    title: "NEO-MORPH ARTIFACT",
    category: "3D Digital Art / Personal Work",
    type: "concept",
    tagline: "Exploration of procedural obsidian geometries illuminated by internal cyan luminescence.",
    description: "High-end 3D visual study examining how organic twisting topologies reflect dark studio environments while maintaining crisp mathematical silhouettes.",
    technologies: ["3D Modeling", "Octane Shader", "Cinematic Lighting", "Digital Sculpture"],
    image: "/src/assets/images/abstract_3d_object_1789978504846.jpg",
    featuredPoints: [
      "Procedural continuous topology deformation",
      "Physically accurate light refractions",
      "Deep obsidian and electric cyan palette",
      "Minimalist museum-grade presentation"
    ],
    role: "3D Visual Artist",
    year: "2025"
  }
];

export const SERVICES: Service[] = [
  {
    id: "graphic-design",
    number: "01",
    title: "Graphic Design",
    description: "Editorial layouts, promotional campaign art, print design, and visual asset systems tailored for high-impact brand resonance.",
    category: "Design",
    tags: ["Editorial", "Visual Arts", "Campaigns", "Typography"],
    previewType: "design"
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI/UX Design",
    description: "Intuitive user journeys, wireframing, high-fidelity prototypes, and design systems focused on conversion and ergonomic delight.",
    category: "Design",
    tags: ["User Experience", "Figma", "Design Systems", "Prototyping"],
    previewType: "frontend"
  },
  {
    id: "frontend-development",
    number: "03",
    title: "Frontend Development",
    description: "Translating complex design concepts into pixel-perfect, responsive, and performance-optimized interactive web applications.",
    category: "Development",
    tags: ["TypeScript", "React", "Tailwind CSS", "Semantic HTML"],
    previewType: "frontend"
  },
  {
    id: "website-development",
    number: "04",
    title: "Website Development",
    description: "End-to-end multi-page website creation engineered with clean code architecture, cross-browser consistency, and speed.",
    category: "Development",
    tags: ["Modern Web", "Architecture", "Responsive", "Cross-Browser"],
    previewType: "frontend"
  },
  {
    id: "ecommerce-development",
    number: "05",
    title: "E-commerce Development",
    description: "High-converting online storefronts with seamless product browsing, catalog filtering, cart logic, and checkout readiness.",
    category: "Development",
    tags: ["Storefronts", "Catalog UX", "Cart Systems", "Conversion"],
    previewType: "design"
  },
  {
    id: "landing-page-development",
    number: "06",
    title: "Landing Page Development",
    description: "Targeted single-purpose landing pages designed to capture leads, showcase launches, and maximize conversion rates.",
    category: "Development",
    tags: ["Lead Capture", "High-Conversion", "Performance", "Micro-Interactions"],
    previewType: "frontend"
  },
  {
    id: "branding-identity",
    number: "07",
    title: "Branding & Brand Identity",
    description: "Comprehensive visual branding guidelines, brand marks, color systems, typography pairings, and brand collateral.",
    category: "Design",
    tags: ["Brand Book", "Visual Identity", "Logomark", "Guidelines"],
    previewType: "design"
  },
  {
    id: "seo-digital-marketing",
    number: "08",
    title: "SEO & Digital Marketing",
    description: "On-page search optimization, semantic structure, speed audits, keyword research, and data-backed digital campaign visibility.",
    category: "Growth & Strategy",
    tags: ["Organic Search", "Core Web Vitals", "Keywords", "Metadata"],
    previewType: "seo"
  },
  {
    id: "ai-tools-content",
    number: "09",
    title: "AI Tools & AI Content",
    description: "Deploying generative AI workflows for customized content creation, asset generation, prompt engineering, and productivity boosts.",
    category: "AI & Automation",
    tags: ["Generative AI", "Prompt Engineering", "Workflows", "Content Engines"],
    previewType: "automation"
  },
  {
    id: "ai-automation",
    number: "10",
    title: "AI Automation",
    description: "Designing end-to-end autonomous business workflows that connect disparate apps, eliminate repetitive tasks, and save hours.",
    category: "AI & Automation",
    tags: ["Workflows", "App Integration", "Trigger Logic", "Zero-Touch"],
    previewType: "automation"
  },
  {
    id: "ai-chatbot-development",
    number: "11",
    title: "AI Chatbot Development",
    description: "Custom intelligent conversational agents trained on company knowledge bases to handle 24/7 client inquiries and support.",
    category: "AI & Automation",
    tags: ["Knowledge Agents", "Conversational AI", "Lead Qualification", "24/7 Support"],
    previewType: "automation"
  },
  {
    id: "lead-generation",
    number: "12",
    title: "Lead Generation",
    description: "Strategic outreach systems, pipeline building, targeting prospect databases, and automated follow-up funnels.",
    category: "Growth & Strategy",
    tags: ["Pipelines", "Prospecting", "Inbound Funnels", "Outreach"],
    previewType: "seo"
  },
  {
    id: "email-marketing-automation",
    number: "13",
    title: "Email Marketing & Automation",
    description: "Targeted email sequences, automated onboarding drips, newsletter layouts, and behavior-triggered lifecycle messaging.",
    category: "Growth & Strategy",
    tags: ["Email Drips", "Lifecycle", "Templates", "Analytics"],
    previewType: "automation"
  },
  {
    id: "data-analysis-research",
    number: "14",
    title: "Data Analysis & Web Research",
    description: "Structured competitive intelligence, market research synthesis, spreadsheet data models, and actionable executive insights.",
    category: "Growth & Strategy",
    tags: ["Web Scraping", "Data Cleansing", "Market Research", "Reporting"],
    previewType: "seo"
  },
  {
    id: "virtual-assistance-support",
    number: "15",
    title: "Virtual Assistance & Customer Support",
    description: "High-standard operational support, client communication management, scheduling, and digital administrative workflows.",
    category: "Growth & Strategy",
    tags: ["Operations", "Client Relations", "Ticketing", "Admin Support"],
    previewType: "seo"
  },
  {
    id: "website-optimization",
    number: "16",
    title: "Website Optimization",
    description: "Performance tuning, asset compression, script deferral, mobile audit fixes, and lightning-fast load times across devices.",
    category: "Development",
    tags: ["Speed Tuning", "Asset Optimization", "Lighthouse 100", "Accessibility"],
    previewType: "frontend"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "DESIGN",
    skills: [
      "Graphic Design",
      "UI/UX Design",
      "Web Design",
      "Logo Design",
      "Social Media Design",
      "Presentation Design",
      "Packaging Design",
      "Brand Identity"
    ],
    contextTags: ["LAYOUT", "TYPOGRAPHY", "BRANDING", "VISUAL SYSTEMS"]
  },
  {
    title: "DEVELOPMENT",
    skills: [
      "Frontend Development",
      "Website Development",
      "E-commerce Development",
      "Landing Pages",
      "Website Optimization",
      "Website Maintenance"
    ],
    contextTags: ["HTML5", "CSS3", "JAVASCRIPT", "RESPONSIVE UI", "INTERACTION"]
  },
  {
    title: "MARKETING",
    skills: [
      "SEO",
      "Digital Marketing",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "SEM",
      "Conversion Rate Optimization",
      "Analytics & Reporting"
    ],
    contextTags: ["SEARCH VISIBILITY", "CONVERSIONS", "TRAFFIC", "AUDIENCE REACH"]
  },
  {
    title: "AI",
    skills: [
      "AI Tools",
      "AI Automation",
      "AI Content Creation",
      "AI Image Generation",
      "AI Video Generation",
      "AI Chatbot Development",
      "Business Process Automation"
    ],
    contextTags: ["TRIGGERS", "WORKFLOWS", "DATA", "CRM", "EMAIL", "FOLLOW-UP"]
  },
  {
    title: "GROWTH & OPERATIONS",
    skills: [
      "Lead Generation",
      "Email Marketing",
      "Email Automation",
      "CRM Management",
      "Product Listing",
      "E-commerce Management",
      "Customer Support",
      "Virtual Assistance",
      "Data Entry",
      "Data Analysis",
      "Web Research",
      "Content Writing",
      "Copywriting"
    ],
    contextTags: ["PIPELINES", "CUSTOMER CARE", "OPERATIONS", "COMMUNICATION"]
  },
  {
    title: "INFRASTRUCTURE",
    skills: [
      "Cloud Services",
      "Web Hosting",
      "Domain Management",
      "cPanel Management",
      "DNS Configuration"
    ],
    contextTags: ["UPTIME", "SECURITY", "DNS", "DEPLOYMENT"]
  }
];

export const TOOLKIT: ToolItem[] = [
  { name: "Figma", category: "Design", iconName: "PenTool" },
  { name: "Photoshop", category: "Design", iconName: "Image" },
  { name: "Illustrator", category: "Design", iconName: "Layers" },
  { name: "HTML5 / CSS3", category: "Development", iconName: "Code" },
  { name: "JavaScript", category: "Development", iconName: "FileCode" },
  { name: "TypeScript", category: "Development", iconName: "Cpu" },
  { name: "React", category: "Development", iconName: "Atom" },
  { name: "Tailwind CSS", category: "Development", iconName: "Palette" },
  { name: "Bootstrap 5", category: "Development", iconName: "Layout" },
  { name: "Git & GitHub", category: "Development", iconName: "GitBranch" },
  { name: "Make / Zapier", category: "AI & Automation", iconName: "Workflow" },
  { name: "n8n", category: "AI & Automation", iconName: "Network" },
  { name: "OpenAI / Claude", category: "AI & Automation", iconName: "Bot" },
  { name: "Gemini AI", category: "AI & Automation", iconName: "Sparkles" },
  { name: "Google Analytics", category: "Marketing", iconName: "BarChart3" },
  { name: "Cloudflare & cPanel", category: "Infrastructure", iconName: "Server" }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the core goal, target audience, competitive landscape, and technical specifications.",
    details: [
      "Project requirement deconstruction",
      "Audience persona & user journey mapping",
      "Visual benchmarks & brand tone alignment",
      "Technical feasibility & architecture plan"
    ]
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Create structure, visual direction, typographic rhythm, and ergonomic interaction models.",
    details: [
      "Wireframing & structural blueprinting",
      "High-contrast dark editorial art direction",
      "Component modularity & design systems",
      "Motion choreography & micro-interaction planning"
    ]
  },
  {
    number: "03",
    title: "BUILD",
    description: "Develop the digital experience with modern, high-performance frontend technology and clean code.",
    details: [
      "Semantic, accessible HTML/CSS markup",
      "Modular TypeScript/React component architecture",
      "Subtle hardware-accelerated animations",
      "API integrations & automation hook wiring"
    ]
  },
  {
    number: "04",
    title: "OPTIMIZE",
    description: "Test responsiveness, load speed, cross-device parity, accessibility standards, and final polish.",
    details: [
      "Lighthouse performance & Core Web Vitals audit",
      "Touch screen & cross-browser verification",
      "WCAG color contrast & keyboard navigation review",
      "Production asset minification & launch readiness"
    ]
  }
];
