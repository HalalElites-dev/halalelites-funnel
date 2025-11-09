import {
  Target,
  Eye,
  Heart,
  Timer,
  Code,
  Smartphone,
  Users,
  Globe,
  Layout,
  TrendingUp,
} from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export const SITE_TITLE = "HalalElites";
export const SITE_URL = "https://halalelites.dev";

// Navigation Links
export const NAV_LINKS = [
  { label: "Why", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Book", href: "#book" },
];

// Hero Section
export const HERO_HEADING = "Tech That\nHonors Values";
export const HERO_SUBTEXT =
  "We build web foundations for Muslim businesses and developers who refuse to compromise on their deen. Fast, clean, and halal";
export const HERO_CTA_TEXT = "deploy_with_us";
export const HERO_CTA_LINK = "https://calendly.com/halal-elites/30min";
export const HERO_2NDARY_CTA_TEXT = "learn_more";

// About Section
export const ABOUT_HEADING = "What We Build";
export const ABOUT_SUBTEXT = "// Solutions that honor your values";
export const ABOUT_CONTENT = `
Navigating the digital world shouldn't compromise your principles. Our web development services are designed to help you build and grow your online presence in a way that aligns with your faith.

We believe your platform should reflect your values. Whether you're a startup or an established organization, we create custom websites that are advanced and easy to manage, and also uphold your identity and mission.
  `;
export const ABOUT = [
  {
    title: "Our Mission",
    description:
      "To empower individuals and teams to achieve their best work through innovative technology.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "A world where productivity is seamless and accessible to everyone.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Integrity, innovation, and customer-centricity are at the core of everything we do.",
    icon: Heart,
  },
];

// AILAB Section
// export const AILAB_HEADING = "AI Lab";
// export const AILAB_SUBTEXT =
//   "// We're experimenting with ethical AI integrations that enhance human capability without compromising our values";
// export const AILAB_CONTENT = [
//   {
//     title: "Ethical AI Workflows",
//     description:
//       "Exploring AI tools that respects Islamic values while enhancing productivity",
//     icon: Brain,
//   },
//   {
//     title: "Smart Business Tools",
//     description:
//       "AI-enhanced calculators, planners, and more decision-making tools",
//     icon: Cog,
//   },
//   {
//     title: "Automated Workflows",
//     description:
//       "Streamline repetitive tasks while maintaining human oversight",
//     icon: Sparkle,
//   },
//   {
//     title: "Custom AI Solutions",
//     description: "Tailored AI integrations for your specific business needs",
//     icon: Lightbulb,
//   },
// ];

// Mentorship Section
// export const MENTORSHIP_HEADING = "Level up Your Skills";
// export const MENTORSHIP_SUBTEXT =
//   "// Personalized  coaching that builds both technical skills and the discipline needed for long-term success. Faith-centered, community-driven development";

// Contact Section
export const CONTACT_HEADING = "Get in Touch";
export const CONTACT_SUBTEXT =
  "We would love to hear from you! Reach out with any questions or feedback.";
export const CONTACT_EMAIL = "support@halalelites.com";
export const CONTACT_PHONE = "+1 (770) 833-9267";
export const CONTACT_ADDRESS = "123 HalalElites St, Suite 100, City, Country";

// Testimonials Section

export const TESTIMONIALS = [
  {
    quote:
      "halalElites has transformed the way I work. I'm more organized and focused than ever!",
    author: "Habeeb",
    role: "CEO of halalElites",
  },
  {
    quote:
      "The AI suggestions are a game changer. They help me prioritize tasks effectively.",
    author: "Mr X",
    role: "Freelance Designer",
  },
  {
    quote:
      "I love the smart scheduling feature! It takes the stress out of planning my day.",
    author: "Ibrahim",
    role: "Project Manager",
  },
];

// Services Section
export const SERVICES_HEADING = "Building Digital Excellence with Purpose";
export const SERVICES_SUBTEXT = "Tailored solutions for the Muslim businesses in the US and Canada. Our sites drive traffic and revenue, and we offer ongoing support to help your business grow ";
export const SERVICES = [
  {
    title: "Custom Web Development",
    subtitle: "for Muslim Businesses",
    description:
      "We build fast, clean, and unique websites from the ground up, prioritizing a flawless experience on mobile devices. Every line of code is written specifically for your business, ensuring optimal performance and design.",
    icon: Code,
    available: true,
    gradient: "from-brand-primary to-blue-500",
  },
  {
    title: "Mobile First Design",
    subtitle: "Seamless Experience on Any Device",
    description:
      "Our designs are crafted to look and perform beautifully on smartphones and tablets, ensuring your audience enjoys a smooth, accessible experience wherever they are.",
    icon: Smartphone,
    available: true,
    gradient: "from-brand-primary to-pink-500",
  },
  {
    title: "Performance Optimization",
    subtitle: "Fast, Efficient, and User-Friendly",
    description:
      "Slow websites drive customers away. We fine-tune your site's code, images to ensure lightning-fast loading speeds.",
    icon: Timer,
    shape: "sphere",
    available: true,
    gradient: "from-brand-primary to-purple-500",
  },
  {
    title: "Search Engine Optimization",
    subtitle: "Boost Your Online Presence",
    description:
      "We implement best practices to improve your website's visibility on search engines.",
    icon: TrendingUp,
    available: true,
    gradient: "from-brand-primary to-purple-500",
  },
   {
    title: "Ongoing Support",
    subtitle: "Maintenance & Updates",
    description:
      "We offer ongoing support to ensure your website remains up-to-date and continues to perform at its best.",
    icon: Users,
    available: true,
    gradient: "from-brand-primary to-purple-500",
  },
  {
    title: "Web Redesign",
    subtitle: "Revamp Your Online Presence",
    description:
      "We give your website a fresh look and improved functionality.",
    icon: Layout,
    available: true,
    gradient: "from-brand-primary to-cyan-500",
  },
];


// process plan

export const PROCESS_PLAN = [
  {
    step: 1,
    title: "Initial Consultation & Strategy",
    description:
      "We discuss your business needs, goals, and vision to create a tailored plan."
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Crafting a unique website that reflects your brand and engages your audience."
  },
  
  {
    step: 3,
    title: "Testing & Launch",
    description:
      "Thorough testing to ensure everything works perfectly before going live."
  },
 
];

// Pricing Plans (if applicable)
export const PRICING_PLANS = [
  {
    name: "Landing Pages",
    status: "Available Now",
    description:
      "Single-page websites that showcase your business with impact and convert visitors into customers",
    features: [
      { name: "Custom design & development", included: true },
      { name: "About, services, contact sections", included: true },
      { name: "Mobile-responsive design", included: true },
      { name: "Domain & hosting setup", included: true },
      { name: "Basic SEO optimization", included: true },
      { name: "Social media integration", included: true },
      { name: "SSL security & deployment", included: true },
    ],
  },
  {
    name: "Multi-Page Websites",
    status: "Available Now",
    description:
      "Complete website solutions with multiple pages for established businesses ready to scale",
    features: [
      { name: "Up to 4 custom pages", included: true },
      { name: "Advanced functionality", included: true },
      { name: "Contact form integration", included: true },
      { name: "Gallery & portfolio sections", included: true },
      { name: "Advanced SEO setup", included: true },
      { name: "Content management system", included: true },
      { name: "Performance optimization", included: true },
    ],
  },
];

// Footer Info
export const FOOTER_TEXT =
  "Building the future of halal tech, one ethical line of code at a time. Serving Muslim businesses and developers worldwide.";
export const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
 
];


export const portfolioItems =[
   {
    title: "Influence Cafe",
    category: "Landing Page",
    description: "Landing page for a local cafe in Toledo.",
    image: "/mockup-influence Cafe.webp",
    technologies: ["Next.js", "Tailwind", "Netlify"],
    status: "Live",
    color: "var(--brand-cyan)",
    icon: Globe,
    link: 'https://www.influencecafe.co/'
  },
  // {
  //   title: "Halal Bites Restaurant",
  //   category: "Multi-Page Website",
  //   description: "Complete restaurant site with menu and reservations.",
  //   image: "/placeholder.webp",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   status: "Live",
  //   color: "var(--brand-blue)",
  //   icon: Smartphone,
  //   link: 'https://halal-bites-restaurant.com'
  // },
  // {
  //   title: "Islamic Learning Hub",
  //   category: "Educational Platform",
  //   description: "E-learning platform with course management system.",
  //   image: "/placeholder.webp",
  //   technologies: ["Next.js", "Supabase", "Stripe"],
  //   status: "In Development",
  //   color: "var(--brand-purple)",
  //   icon: Code,
  //   link: 'https://islamic-learning-hub.com'
  // },
]

import type { IconType } from "react-icons";

export const SOCIAL_LINKS: { name: string; url: string; icon:  IconType }[] = [
  {
    name: "X",
    url: "https://x.com/halalelites",
    icon: FaXTwitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/aybheeb",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/halal-elites",
    icon: FaLinkedin,
  },
];
