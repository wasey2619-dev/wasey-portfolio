import {
  PenTool,
  Palette,
  Image as ImageIcon,
  FileImage,
  Layers,
  Megaphone,
  Code2,
  FileSpreadsheet,
  Sparkles,
  Brain,
  Users,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Syed Abdul Wasey Iqbal",
  shortName: "Wasey Iqbal",
  firstName: "Wasey",
  initials: "SW",
  role: "Graphics Designer",
  tagline: "I design visuals that make brands unforgettable.",
  location: "Karachi, Pakistan",
  email: "wasey2619@gmail.com",
  phone: "+923360314542",
  available: true,
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.png",
  bio: [
    "I'm a graphics designer based in Karachi, passionate about turning ideas into bold, eye-catching visuals. From logos and brand identities to flyers, posters and social media creatives — I help small businesses and restaurants stand out and get noticed.",
    "Trained at Global Computer Institute and shaped by hands-on work with a digital marketing agency and a data-entry role, I blend creative flair with disciplined execution. I work primarily in Adobe Creative Cloud and Canva, and I also automate my workflow with Python.",
  ],
  stats: [
    { label: "Designs Delivered", value: "80+" },
    { label: "Happy Clients", value: "20+" },
    { label: "Tools Mastered", value: "10+" },
    { label: "Certifications", value: "2" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com", handle: "@wasey" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "in/wasey-iqbal" },
    { label: "X / Twitter", href: "https://x.com", handle: "@wasey2619" },
    { label: "Dribbble", href: "https://dribbble.com", handle: "wasey" },
  ],
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Design Software",
    icon: PenTool,
    color: "text-blue-400",
    skills: [
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 85 },
      { name: "Adobe InDesign", level: 75 },
      { name: "Canva", level: 95 },
    ],
  },
  {
    title: "Branding & Identity",
    icon: Palette,
    color: "text-sky-400",
    skills: [
      { name: "Logo Design", level: 88 },
      { name: "Brand Identity", level: 82 },
      { name: "Typography", level: 80 },
      { name: "Color Theory", level: 84 },
    ],
  },
  {
    title: "Print & Layout",
    icon: FileImage,
    color: "text-indigo-400",
    skills: [
      { name: "Flyer & Poster Design", level: 92 },
      { name: "Brochure Design", level: 78 },
      { name: "Panaflex & Banners", level: 85 },
      { name: "Menu Cards", level: 88 },
    ],
  },
  {
    title: "Social Media & Ads",
    icon: Megaphone,
    color: "text-cyan-400",
    skills: [
      { name: "Social Media Creatives", level: 90 },
      { name: "Ad Creatives", level: 84 },
      { name: "Promotional Posters", level: 89 },
      { name: "Content Layouts", level: 80 },
    ],
  },
  {
    title: "Technical",
    icon: Code2,
    color: "text-blue-500",
    skills: [
      { name: "Python", level: 72 },
      { name: "AI Design Tools", level: 86 },
      { name: "Microsoft Office", level: 90 },
      { name: "MS Excel", level: 82 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "text-violet-400",
    skills: [
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 84 },
      { name: "Time Management", level: 82 },
      { name: "Creativity", level: 92 },
    ],
  },
];

export const techMarquee = [
  "Photoshop",
  "Illustrator",
  "InDesign",
  "Canva",
  "CorelDRAW",
  "Adobe CC",
  "Figma",
  "MS Office",
  "Excel",
  "Python",
  "AI Tools",
  "Branding",
];

export type Project = {
  id: string;
  title: string;
  category: "Branding" | "Flyer" | "Social Media" | "Python";
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "TAK Digital — Agency Flyer",
    category: "Flyer",
    description:
      "A bold promotional flyer for TAK Digital, a Karachi-based digital marketing agency. Highlights services like social media marketing, ad campaigns, SEO and panaflex fitting with a striking isometric illustration.",
    image: "/projects/tak-digital.jpg",
    tags: ["Flyer", "Illustration", "Branding"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    id: "p2",
    title: "Tech Digital — Logo Design",
    category: "Branding",
    description:
      "A modern tech brand identity featuring a hexagonal circuit emblem in a blue gradient paired with bold, clean typography. Designed for a digital services company.",
    image: "/projects/tech-digital-logo.jpg",
    tags: ["Logo", "Branding", "Identity"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    id: "p3",
    title: "Learn Quran Online — Promo Ad",
    category: "Social Media",
    description:
      "A warm promotional creative for an online Quran tutoring service, advertising one-to-one live classes for kids and adults with flexible timings. Designed for social media campaigns.",
    image: "/projects/quran-tutoring.jpg",
    tags: ["Social Media", "Ad Creative", "Promo"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    id: "p4",
    title: "Fresh Milk — Product Ad",
    category: "Social Media",
    description:
      "A vibrant product advertisement for a fresh milk delivery service. Features a clean milk bottle in a lush green setting with a bold '100% Pure' message and an order-now call to action.",
    image: "/projects/fresh-milk.png",
    tags: ["Ad Creative", "Product", "Social Media"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2025",
  },
  {
    id: "p5",
    title: "Delicious Burger Deal — Food Poster",
    category: "Flyer",
    description:
      "A mouth-watering food deal poster for a restaurant in Saudabad, Karachi. Showcases a cheeseburger combo with home delivery details and a high-energy, appetite-driven layout.",
    image: "/projects/burger-deal.png",
    tags: ["Flyer", "Food", "Restaurant"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2025",
  },
  {
    id: "p6",
    title: "Al Basit Foods — Deal Flyer",
    category: "Flyer",
    description:
      "A high-impact fast-food deal flyer for Al Basit Foods Deal No. 20 (Rs. 3999), listing zinger burgers, pizzas, rolls, fries and a 1.5L drink with delivery info across Karachi.",
    image: "/projects/al-basit-foods.png",
    tags: ["Flyer", "Food", "Promo"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2025",
  },
  {
    id: "p7",
    title: "Bulk Image Resizer — Python Tool",
    category: "Python",
    description:
      "A Python automation tool that batch-resizes, renames and watermarks hundreds of design exports in seconds. Built to speed up my own client workflow and save hours every week.",
    image: "/projects/python-tool.png",
    tags: ["Python", "Automation", "PIL", "Workflow"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2025",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Data Entry Operator",
    company: "4 Wing Tech",
    period: "Mar 2025 — May 2026",
    location: "Karachi, PK",
    description:
      "Handled online data entry and flight operator tasks with a strong focus on accuracy and turnaround time.",
    highlights: [
      "Maintained high-accuracy data entry for online flight operations.",
      "Built reliable workflows that reduced manual errors and rework.",
      "Collaborated with a small operations team under tight deadlines.",
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "Flex Digital",
    period: "Dec 2023 — Jan 2025",
    location: "Karachi, PK",
    description:
      "One-year internship supporting digital marketing campaigns and creative production for client brands.",
    highlights: [
      "Designed social media creatives and promotional flyers for clients.",
      "Assisted with ad campaigns, SEO tasks and content scheduling.",
      "Gained hands-on exposure to client briefs and brand guidelines.",
    ],
  },
  {
    role: "Graphics Designing Certification",
    company: "Global Computer Institute",
    period: "Nov 2021",
    location: "Karachi, PK",
    description:
      "Formal training in graphic design principles and Adobe Creative Cloud tools.",
    highlights: [
      "Completed professional graphics designing coursework.",
      "Earned Certificate in Information Technology (Feb 2021).",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  field: string;
};

export const education: Education[] = [
  {
    degree: "Intermediate (Commerce)",
    institution: "Liaquat College",
    period: "2021 — 2023",
    field: "Commerce",
  },
  {
    degree: "Matriculation",
    institution: "The School of Master Minds",
    period: "2019 — 2020",
    field: "Computer Science",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Wasey designed our restaurant's food deal flyers and the response was amazing — orders jumped noticeably the same week. Fast, creative and easy to work with.",
    name: "Restaurant Owner",
    title: "Al Basit Foods, Karachi",
    initials: "AB",
  },
  {
    quote:
      "He understood our brand instantly and delivered a clean, modern logo plus social media creatives. Professional and always on time.",
    name: "Client",
    title: "Tech Digital",
    initials: "TD",
  },
  {
    quote:
      "Reliable designer who delivers exactly what we brief. His flyers consistently look premium and grab attention on our feed.",
    name: "Marketing Lead",
    title: "TAK Digital Agency",
    initials: "TK",
  },
  {
    quote:
      "Great eye for color and layout. The product ad he made for us looked polished and brought in real enquiries. Highly recommended.",
    name: "Small Business Owner",
    title: "Fresh Milk Delivery",
    initials: "FM",
  },
];

export const services = [
  {
    icon: Palette,
    title: "Logo & Brand Identity",
    description:
      "Memorable logos and complete brand identities — colors, typography and visual systems that fit your business.",
  },
  {
    icon: FileImage,
    title: "Flyer & Poster Design",
    description:
      "Bold promotional flyers, posters and panaflex designs that grab attention and drive action for your offers.",
  },
  {
    icon: Megaphone,
    title: "Social Media Creatives",
    description:
      "Scroll-stopping social media posts and ad creatives that keep your brand consistent and engaging.",
  },
  {
    icon: Layers,
    title: "Menu & Print Layout",
    description:
      "Clean menu cards, brochures and print layouts with a premium, organized look ready for press.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
