// industry categories
export const INDUSTRIES = [
  {
    name: "Fashion",
    icon: "👗",
    slug: "fashion",
    description: "Clothing, accessories, and fashion retail",
  },
  {
    name: "Technology",
    icon: "💻",
    slug: "technology",
    description: "Electronics, gadgets, and tech products",
  },
  {
    name: "Beauty",
    icon: "💄",
    slug: "beauty",
    description: "Cosmetics, skincare, and beauty products",
  },
  {
    name: "Wellness",
    icon: "🧘",
    slug: "wellness",
    description: "Health, fitness, and wellness products",
  },
  {
    name: "Sports",
    icon: "⚽",
    slug: "sports",
    description: "Sports equipment and athletic wear",
  },
  {
    name: "Jewellery",
    icon: "💎",
    slug: "jewellery",
    description: "Fine jewelry and accessories",
  },
  {
    name: "Appliances",
    icon: "🏠",
    slug: "appliances",
    description: "Home and kitchen appliances",
  },
  {
    name: "Construction",
    icon: "🏗️",
    slug: "construction",
    description: "Building materials and tools",
  },
  {
    name: "Horology",
    icon: "⌚",
    slug: "horology",
    description: "Watches and timepieces",
  },
  {
    name: "Food",
    icon: "🍕",
    slug: "food",
    description: "Food products and delivery",
  },
  {
    name: "Realty",
    icon: "🏡",
    slug: "realty",
    description: "Real estate and property listings",
  },
  {
    name: "Automotive",
    icon: "🚗",
    slug: "automotive",
    description: "Auto parts and accessories",
  },
];

export const VALID_CATEGORIES = INDUSTRIES.map((industry) => industry.slug);

// navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/demos", label: "Demos" },
  { href: "/admin", label: "Admin" },
  { href: "/vision", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

// value propositions
export const VALUE_PROPOSITIONS = [
  {
    title: "Demo-First Approach",
    description:
      "Explore real, working demos across 12+ industries before making any decision. No guesswork.",
    icon: "🎯",
  },
  {
    title: "Custom-Coded, Not Templates",
    description:
      "Every website is custom-coded to match your exact requirements. Not a generic template.",
    icon: "💻",
  },
  {
    title: "Launch in Days",
    description:
      "What takes months with traditional development, we deliver in days. Fast, reliable, proven.",
    icon: "⚡",
  },
  {
    title: "Zero Technical Complexity",
    description:
      "No coding required. No technical knowledge needed. We handle everything for you.",
    icon: "✨",
  },
];

// how it works steps
export const HOW_IT_WORKS_STEPS = [
  {
    number: "1",
    title: "Explore Demos",
    description:
      "Browse our collection of industry-specific demos. See exactly what you're getting.",
  },
  {
    number: "2",
    title: "Share Requirements",
    description:
      "Tell us about your business and customization needs. We'll handle the rest.",
  },
  {
    number: "3",
    title: "Launch Website",
    description:
      "Get your fully customized eCommerce website delivered in days, not months.",
  },
];

// trust section
export const TRUST_STATS = [
  { number: "12+", label: "Industry Demos" },
  { number: "7", label: "Days to Launch" },
  { number: "100%", label: "Custom Coded" },
  { number: "0", label: "Technical Skills Required" },
];

// testimonials
export const TESTIMONIALS = [
  {
    quote:
      "Xenbird helped us launch our online store in just 5 days. The demo-first approach made everything so clear.",
    author: "Vichith Chamodya",
    role: "Founder, Fashion Boutique",
  },
  {
    quote:
      "No templates, no compromises. They built exactly what we needed without the agency complexity.",
    author: "Saajid Muhammad",
    role: "Owner, Tech Gadgets Store",
  },
  {
    quote:
      "As a non-technical founder, I was amazed at how simple the process was. Highly recommended!",
    author: "Mohamed Shadhir",
    role: "Entrepreneur, Wellness Brand",
  },
];

// process flow
export const PROCESS_FLOW = [
  {
    number: "01",
    title: "Browse Industry Demos",
    description:
      "Explore our collection of real, working eCommerce demos across 12+ industries. Each demo showcases features, design, and functionality tailored to specific business types. No generic templates—just proven, industry-specific solutions.",
    visual: "🎯",
  },
  {
    number: "02",
    title: "Schedule a Call or Submit Requirements",
    description:
      "Tell us about your business, brand, and specific needs. Share your preferences for design, features, and functionality. We'll discuss the demo that best fits your requirements and how we'll customize it for you.",
    visual: "📋",
  },
  {
    number: "03",
    title: "We Customize Your Website",
    description:
      "Our team gets to work customizing your chosen demo. We tailor the design, integrate your branding, add your products, and configure features based on your exact requirements. All custom-coded, no shortcuts.",
    visual: "⚙️",
  },
  {
    number: "04",
    title: "Review & Provide Feedback",
    description:
      "We share your customized website for review. You can request changes, refinements, or adjustments. We iterate based on your feedback to ensure everything meets your expectations.",
    visual: "✅",
  },
  {
    number: "05",
    title: "Launch Your Store",
    description:
      "Once you approve, we handle the deployment and launch. Your custom eCommerce website goes live, fully functional and ready to start selling. All of this in days, not months.",
    visual: "🚀",
  },
];

// faq items
export const FAQ_ITEMS = [
  {
    question: "Is this a template or custom-coded?",
    answer:
      "Every website is 100% custom-coded to match your exact requirements. We start with industry-specific demos as a foundation, then customize everything—design, features, branding, and functionality—specifically for your business. No generic templates.",
  },
  {
    question: "How customizable is my website?",
    answer:
      "Fully customizable. You can modify design elements, add or remove features, integrate specific tools, adjust layouts, and change anything to match your brand and business needs. If you can describe it, we can build it.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We provide support after launch. You can request changes, updates, or additional features. Depending on the scope, some changes may be included in your package, while others may be quoted separately.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Absolutely not. Xenbird is built for non-technical founders and business owners. You focus on your business requirements, and we handle all the technical complexity. Our admin dashboard is also designed to be simple and intuitive.",
  },
  {
    question: "How is this different from Shopify or WooCommerce?",
    answer:
      "Shopify and WooCommerce are self-service platforms where you configure everything yourself. Xenbird provides custom-coded websites built specifically for your business. You get a tailored solution without the DIY complexity or limitations of platform templates.",
  },
  {
    question: "What's included in the admin dashboard?",
    answer:
      "Our admin dashboard includes order management, product management, customer management, analytics, inventory tracking, and more. We offer different tiers (Lite, Standard, Pro, Enterprise) based on your business size and needs.",
  },
  {
    question: "Can I see examples before committing?",
    answer:
      "Yes! That's our demo-first approach. Browse all our industry-specific demos, interact with them, and see exactly what you're getting before making any commitment.",
  },
];

// admin features
export const ADMIN_FEATURES = [
  {
    icon: "📦",
    title: "Order Management",
    description:
      "Track, process, and fulfill orders efficiently. View order history, update statuses, and manage returns.",
  },
  {
    icon: "🛍️",
    title: "Product Management",
    description:
      "Add, edit, and organize products with ease. Manage variants, pricing, inventory, and images.",
  },
  {
    icon: "👥",
    title: "Customer Management",
    description:
      "View customer profiles, order history, and contact information. Build better relationships.",
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    description:
      "Get insights into sales, revenue, traffic, and customer behavior with detailed reports.",
  },
  {
    icon: "📈",
    title: "Inventory Tracking",
    description:
      "Monitor stock levels in real-time. Get low-stock alerts and manage inventory across locations.",
  },
  {
    icon: "💳",
    title: "Payment Management",
    description:
      "Track payments, refunds, and transactions. Support multiple payment gateways.",
  },
  {
    icon: "🎨",
    title: "Content Management",
    description:
      "Update banners, promotions, and site content without touching code. Simple drag-and-drop.",
  },
  {
    icon: "🔔",
    title: "Notifications",
    description:
      "Stay updated with email and in-app notifications for orders, inventory, and customer activity.",
  },
  {
    icon: "🔐",
    title: "Security & Permissions",
    description:
      "Role-based access control. Keep your data secure with multi-level permissions.",
  },
];

// admin tiers
export const ADMIN_TIERS = [
  {
    name: "Lite",
    price: "Starter",
    description: "Perfect for new businesses and small stores",
    features: [
      "Basic order management",
      "Product catalog (up to 100 products)",
      "Customer management",
      "Basic analytics",
      "Email notifications",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "Growing",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Lite",
      "Unlimited products",
      "Advanced analytics",
      "Inventory management",
      "Bulk operations",
      "Export data",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "Popular",
    description: "For established businesses",
    features: [
      "Everything in Standard",
      "Multi-user access",
      "Advanced reporting",
      "API access",
      "Custom integrations",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom features",
      "White-label options",
      "Advanced security",
      "SLA guarantee",
    ],
    highlight: false,
  },
];

// current focus areas
export const CURRENT_FOCUS = [
  {
    icon: "🎯",
    title: "Expanding Demo Library",
    description:
      "Adding more industry-specific demos and variations to cover even more business types and niches.",
  },
  {
    icon: "⚡",
    title: "Improving Customization Speed",
    description:
      "Streamlining our process to deliver customized websites even faster without compromising quality.",
  },
  {
    icon: "🛠️",
    title: "Enhancing Admin Features",
    description:
      "Continuously improving our admin dashboard based on customer feedback and emerging needs.",
  },
  {
    icon: "🤝",
    title: "Better Integration Options",
    description:
      "Adding seamless integrations with popular tools like payment gateways, shipping providers, and marketing platforms.",
  },
];

// roadmap phases
export const ROADMAP_PHASES = [
  {
    quarter: "Q1 2026",
    title: "Current",
    items: [
      "Launch 5 new industry demos",
      "Mobile admin app (iOS & Android)",
      "Advanced analytics dashboard",
      "Multi-language support",
    ],
    status: "in-progress" as const,
  },
  {
    quarter: "Q2 2026",
    title: "Next",
    items: [
      "AI-powered customization assistant",
      "Subscription & recurring billing",
      "Advanced SEO tools",
      "Marketplace integrations (Amazon, eBay)",
    ],
    status: "planned" as const,
  },
  {
    quarter: "Q3 2026",
    title: "Future",
    items: [
      "White-label reseller program",
      "Advanced automation features",
      "Multi-store management",
      "B2B eCommerce features",
    ],
    status: "planned" as const,
  },
];

// business types
export const BUSINESS_TYPES = [
  { value: "startup", label: "Startup" },
  { value: "small-business", label: "Small Business" },
  { value: "medium-business", label: "Medium Business" },
  { value: "enterprise", label: "Enterprise" },
];

// contact information
export const CONTACT_INFO = {
  email: "hello@xenbird.com",
  responseTime: "We typically respond within 24 hours during business days",
};
