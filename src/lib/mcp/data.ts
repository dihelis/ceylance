// Public studio content mirrored from the Ceylance marketing site.
// Kept as plain data so MCP tools stay import-safe (no env reads, no I/O).

export const studio = {
  name: "Ceylance",
  tagline: "AI-native product development studio",
  summary:
    "Ceylance is a software consulting and product development studio. We help small and medium businesses ship software, mobile apps, websites, AI assistants and workflow automation — embedding with the team instead of handing over specs.",
  markets: ["Australia", "United Kingdom", "United Arab Emirates"],
  website: "https://ceylance.com",
  differentiators: [
    "Embedded senior team, not an outsourced ticket queue",
    "Plain-English scoping — you don't need to speak developer",
    "Weekly shipping cycles with tight feedback loops",
    "Agile delivery with transparent communication",
    "Post-launch support and continuous optimisation",
  ],
} as const;

export const contact = {
  email: "hello@ceylance.com",
  phone: "+61 404 173 536",
  baseCity: "Adelaide, Australia",
  responseTime: "Within 24 hours",
  brochure: "https://ceylance.com/ceylance-brochure.pdf",
} as const;

export const packages = [
  {
    outcome: "Take my idea to launch",
    bestFor: "New founders, non-technical owners with an app idea",
    includes: "Scope, design, build, launch and handover",
    timeline: "6–12 weeks",
  },
  {
    outcome: "Build a mobile app",
    bestFor: "Businesses that need a customer-facing iOS or Android app",
    includes: "Native-quality mobile app, App Store listing",
    timeline: "8–14 weeks",
  },
  {
    outcome: "A website that grows the business",
    bestFor: "Service businesses, coaches, clinics and trades",
    includes: "Conversion-focused site, CMS and booking/contact flow",
    timeline: "3–8 weeks",
  },
  {
    outcome: "Put AI to work in your business",
    bestFor: "Teams drowning in documents, search or repetitive queries",
    includes: "AI assistant, document processing or search workflow",
    timeline: "4–10 weeks",
  },
  {
    outcome: "Automate the repetitive stuff",
    bestFor: "Businesses manually copying data between tools",
    includes: "Workflow integration, auto quotes, invoices and reports",
    timeline: "3–8 weeks",
  },
  {
    outcome: "Modernise a tired system",
    bestFor: "Companies stuck on old software or spreadsheets",
    includes: "Refactor/rebuild to a fast, secure, cloud-based system",
    timeline: "8–16 weeks",
  },
] as const;

export const caseStudies = [
  {
    industry: "Healthcare",
    title: "Remote Patient Monitoring App for Elderly Care",
    summary:
      "Developed the patient-facing mobile app for Dignio, a Norwegian remote-care specialist. The cloud-based platform enables healthcare providers to monitor patients remotely via telehealth, RPM and preventive medicine — now serving the UK and USA markets.",
    results: ["Award-winning platform", "3 international markets", "Improved patient independence"],
  },
  {
    industry: "EdTech",
    title: "AI-Powered Interactive STEM Learning Platform",
    summary:
      "Built AI-driven features for zyBooks, an interactive textbook platform replacing traditional STEM coursework. The system personalises learning paths and provides real-time feedback to boost student confidence and outcomes.",
    results: ["Adopted by major universities", "Higher completion rates", "Reduced instructor workload"],
  },
  {
    industry: "Veterinary",
    title: "Practice Management System for Vet Clinics",
    summary:
      "Engineered the core practice management software for Vetserve, a Norwegian IT provider serving animal clinics and hospitals. The platform was later acquired by Provet, a leading international veterinary software group.",
    results: ["Successful acquisition", "Clinics & hospitals served", "Streamlined operations"],
  },
  {
    industry: "SaaS / PR",
    title: "PR Workflow & Source Management Platform",
    summary:
      "Built PR Monkey, a Public Relations SaaS that lets professionals upload sources, pitch journalists and track performance, with insights into where clients need attention.",
    results: ["End-to-end PR workflow", "Real-time pitch tracking", "Free beta launch"],
  },
  {
    industry: "FinTech / Identity",
    title: "Digital Identity Wallet for SMEs",
    summary:
      "Developed Oliu Wallet for ATB Ventures — a ready-to-deploy digital identity management platform enabling SMEs to verify credentials securely and adopt decentralised identity.",
    results: ["Enterprise-grade security", "SME-ready deployment", "Decentralised identity"],
  },
  {
    industry: "Finance / AI",
    title: "AI-Driven Equity Analysis Engine",
    summary:
      "Built an intelligent equity analysis platform that uses machine learning to parse financial data, identify market patterns and generate actionable investment insights for portfolio managers.",
    results: ["Automated analysis pipeline", "Real-time market signals", "Data-driven decisions"],
  },
] as const;

export const processSteps = [
  {
    num: "01",
    title: "Schedule your call",
    desc: "A quick, honest conversation — no pitch decks. We learn your product, your goals, and where AI can move the needle fastest.",
  },
  {
    num: "02",
    title: "Scope the engagement",
    desc: "Pick a plan that fits where you are today. No lock-in, no long contracts — we earn your trust sprint over sprint.",
  },
  {
    num: "03",
    title: "We ship in iterations",
    desc: "We embed, prioritise and start moving fast. Weekly cycles, tight feedback loops, real output — not status reports.",
  },
  {
    num: "04",
    title: "Compound & scale",
    desc: "The longer we're in, the sharper we get. Every cycle we understand your product deeper and raise the bar on what we ship.",
  },
] as const;