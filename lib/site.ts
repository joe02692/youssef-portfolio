// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Youssef Elbasiouny",
  firstName: "Youssef",
  lastName: "Elbasiouny",
  initials: "YE",
  title: "Intelligent Systems Software Engineer",
  subtitle: "AI & Embedded Systems Developer",
  bio: "A 4th-year Intelligent Systems Engineering undergraduate at Helwan National University, passionate about building end-to-end software solutions bridging Artificial Intelligence, Embedded Hardware, and Cloud Web Development.",
  availability: "Open to internships & opportunities",
  portraitAlt: "Youssef Elbasiouny smiling with arms crossed, wearing a scout uniform",
  location: "Cairo, Egypt",
  email: "youssef.m.elbasiouny@gmail.com",
  // International format, digits only after the +. Used for calls and WhatsApp.
  phone: "+201069864110",
  phoneDisplay: "+20 106 986 4110",
  linkedin: "https://www.linkedin.com/in/youssef-el-basiouny/",
  github: "https://github.com/joe02692",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

// Scrolling strip under the hero.
export const techTicker = [
  "Python",
  "C / C++",
  "Embedded C",
  "YOLOv8",
  "OpenCV",
  "RAG pipelines",
  "LangChain",
  "ATmega32",
  "ESP32",
  "Next.js",
  "Node.js",
  "Supabase",
  "MongoDB",
  "Docker",
  "Linux",
] as const;

export const about = {
  paragraphs: [
    "I'm a developer who loves solving complex problems — especially the ones that refuse to stay inside a single layer of the stack.",
    "My background covers both ends of it: low-level hardware control, where I write register-level C for microcontrollers and every interrupt and byte matters, and high-level AI architectures, from retrieval-augmented generation pipelines to computer-vision and deep learning models.",
    "That range lets me build systems end to end — firmware that senses and acts, models that reason over the data, and cloud-backed web apps that put the result in people's hands.",
  ],
  focus: [
    {
      icon: "chip",
      title: "Low-level hardware control",
      text: "Bare-metal, register-level C on ATmega and ESP32 — drivers, interrupts and serial protocols.",
    },
    {
      icon: "network",
      title: "High-level AI architectures",
      text: "RAG pipelines, computer vision and deep neural networks built for real-world use.",
    },
    {
      icon: "server",
      title: "Cloud & web delivery",
      text: "Next.js, Node.js and Supabase applications that ship those systems to users.",
    },
  ],
  education: [
    {
      school: "Helwan National University",
      detail: "B.Sc. Intelligent Systems Engineering",
      meta: "4th Year",
    },
    {
      school: "Future Language Schools",
      detail: "Secondary Education",
      meta: "Graduated",
    },
  ],
} as const;

export type IconName = "code" | "network" | "chip" | "server" | "wrench";

export type SkillGroup = {
  title: string;
  icon: IconName;
  // `detail` holds the specific tools behind a broader skill.
  skills: { name: string; detail?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "Embedded C" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "MATLAB" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "network",
    skills: [
      { name: "RAG pipelines", detail: "ChromaDB · LangChain" },
      { name: "Computer Vision", detail: "YOLOv8 · OpenCV" },
      { name: "Transfer Learning" },
      { name: "Deep Neural Networks" },
    ],
  },
  {
    title: "Embedded Systems & Hardware",
    icon: "chip",
    skills: [
      { name: "ATmega16/32" },
      { name: "ESP32" },
      { name: "Bare-metal register-level control" },
      { name: "Serial protocols", detail: "UART · SPI · I2C" },
      { name: "Proteus" },
    ],
  },
  {
    title: "Web & Backend",
    icon: "server",
    skills: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "Oracle SQL" },
    ],
  },
  {
    title: "Tools & Methodologies",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub" },
      { name: "Linux" },
      { name: "Jira", detail: "Agile workflows" },
      { name: "Software Requirements Specification", detail: "SRS" },
      { name: "Docker" },
    ],
  },
];

export type Project = {
  title: string;
  domain: string;
  description: string;
  tags: string[];
  award?: { place: string; event: string };
  link?: { href: string; label: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "OsteoGuard AI",
    domain: "AI · Clinical RAG",
    description:
      "A clinical decision support Retrieval-Augmented Generation (RAG) model. It answers osteoarthritis-management questions in Arabic and English, grounding every response in evidence-based guidelines with exact source-and-page citations.",
    tags: ["Python", "RAG", "BM25", "PubMedBERT", "MedCPT", "Groq"],
    award: {
      place: "3rd place overall",
      event: "AI Hackathon 2026 · Creativa, Cairo University",
    },
    featured: true,
  },
  {
    title: "SmartVision AI Navigation System",
    domain: "AI · Computer Vision",
    description:
      "An AI assistant for visually impaired individuals utilizing Python, YOLOv8, OpenCV, and facial recognition algorithms.",
    tags: ["Python", "YOLOv8", "OpenCV", "Facial Recognition"],
  },
  {
    title: "NTI Dual-Model Medical System",
    domain: "AI · Healthcare",
    description:
      "Led a team to build a predictive medical system combining a Deep Learning brain tumor classification model and a Machine Learning heart failure prediction model, optimized specifically for Recall.",
    tags: ["Deep Learning", "Machine Learning", "TensorFlow / Keras", "Scikit-Learn"],
    link: {
      href: "https://github.com/joe02692/NeuroCardiac",
      label: "View repository",
    },
  },
  {
    title: "SmartHome OS v1.0",
    domain: "Embedded · Firmware",
    description:
      "Bare-metal home automation firmware on ATmega32 utilizing register-level C programming, priority interrupts, and custom LCD graphics.",
    tags: ["ATmega32", "Embedded C", "Priority Interrupts", "LCD Graphics"],
  },
  {
    title: "Peace Scout Groups LMS Portal",
    domain: "Web · Full-stack",
    description:
      "Custom Learning Management System web portal using Next.js, Supabase, Vercel, and Backblaze B2.",
    tags: ["Next.js", "Supabase", "Vercel", "Backblaze B2"],
  },
];

export const experience = [
  {
    role: "IT & Software Engineering Intern",
    org: "QNB Egypt",
    meta: "Internship · Jul 2026",
    description:
      "Rotational summer internship covering Oracle SQL, MongoDB, backend development, and QA testing.",
  },
  {
    role: "Project Team Leader & Customer Service",
    org: "Bold Roots",
    meta: "Leadership · 8 months",
    description:
      "Managed team operations and client relations over an 8-month tenure.",
  },
  {
    role: "Database Manager",
    org: "Digitera Program (iCareer)",
    meta: "Program · Aug 2026",
    description:
      "Managed database architecture for a demo pharmacy web app using Supabase and Firebase.",
  },
  {
    role: "Senior Scout Leader (IT & Documentation)",
    org: "Peace Scout Groups",
    meta: "Volunteer · Present",
    description:
      "Leading the IT committee, managing technical infrastructure and administrative documentation.",
  },
] as const;
