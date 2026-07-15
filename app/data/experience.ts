export interface ExperienceItem {
  title: string;
  company: string;
  url: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "XR Engineer",
    company: "Cornerstone On Demand (formerly Talespin)",
    location: "Utrecht",
    url: "https://www.cornerstoneondemand.com/platform/immersive-learning/",
    period: "May 2023 — Dec 2025",
    description:
      "Contributed to a cross-platform B2C application in Unity and C#, targeting Meta Quest, web, and VR. Built features, integrated plugins, and developed APIs. Designed a reusable AI integration layer for virtual humans, unifying speech, TTS, and conversational AI providers. Focused on performance optimization, CI/CD (Jenkins), and Unity Editor tooling, with R&D in React Three Fiber, TypeScript, and WebGPU.",
    skills: [
      "Unity3D",
      "C#",
      "VR/MR Development",
      "Meta Quest",
      "API Development",
      "JavaScript",
      "TypeScript",
      "WebGPU",
      "React Three Fiber",
      "AI Integrations",
      "Performance Optimization",
      "CI/CD",
    ],
  },
  {
    title: "Unity Developer",
    company: "Layers (formerly AR-Producties)",
    location: "Amsterdam",
    url: "https://layersxr.com/",
    period: "2019 — 2023",
    description:
      "Developed B2B AR applications across HoloLens, Unreal Glasses, and mobile, owning features end-to-end in an early-stage startup. Built interactive features, shaders, and internal tools, and created AR filters for Snapchat and Instagram. Focused on performance optimization and reusable Unity packages, while mentoring interns, supporting trade fair demos, and temporarily managing the development team.",
    skills: [
      "Unity3D",
      "C#",
      "XR/MR Development",
      "Mobile Development",
      "Shaders",
      "AR Filters",
      "Project Management",
      "Performance Optimization",
      "Mentoring",
    ],
  },
  {
    title: "Manager",
    company: "Domino's",
    location: "Netherlands",
    url: "",
    period: "2016 — 2021",
    description:
      "Trained and mentored employees to maximize team performance, managing customer complaints with calm, clear communication. Collaborated with team members to achieve target results, setting goals, delegating tasks, providing feedback, and addressing performance issues along the way.",
    skills: [
      "Team Management",
      "Training & Mentoring",
      "Communication",
      "Leadership",
    ],
  },
  {
    title: "Database Manager",
    company: "Sponsormail",
    location: "Netherlands",
    url: "",
    period: "2013 — 2015",
    description:
      "Managed and maintained database information, ensuring data remained accurate, up-to-date, and well-organized for easy access and retrieval. Provided ongoing support to users interacting with the database, helping resolve issues and maintain data integrity across the system.",
    skills: ["Database Management", "Data Organization", "Technical Support"],
  },
];
