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
      "Contributed to a cross-platform B2C application using Unity and C#. Built features across both environments, integrated external plugins, and developed APIs for content and user management. Worked on WebGL lipsync, R&D projects with React Three Fiber/WebGPU, and AI integrations (GPT, TTS, STT). Focused on performance optimization, VR asset efficiency, and CI/CD pipelines (Jenkins), while creating Unity Editor tools to streamline workflows.",
    skills: [
      "Unity3D",
      "C#",
      "VR/MR Development",
      "API Development",
      "JavaScript",
      "WebGPU",
      "React Three Fiber",
      "AI Integrations",
      "Performance Optimization",
      "Shaders",
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
      "Developed B2B XR applications for MR and VR platforms using Unity, handling both application logic and UI. Built interactive features, shaders, and internal tools, and created AR filters for Snapchat and Instagram. Focused on performance optimization, reusable Unity packages, and supported demos and mentoring.",
    skills: [
      "Unity3D",
      "C#",
      "XR/MR Development",
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
      "In my Manager role at Domino's, I trained and mentosky employees to maximize team performance. I managed complaints with calm, clear communication and collaborated with team members to achieve target results. My responsibilities included setting goals, delegating tasks, providing feedback, and addressing performance issues.",
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
      "Management of different database information. This includes making sure that the data is accurate, up-to-date, and organized in a way that allows for easy access and retrieval. I provided support to users who interact with the database.",
    skills: ["Database Management", "Data Organization", "Technical Support"],
  },
];
