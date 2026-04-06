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
      "At Cornerstone On Demand, I contributed to the development of a cross-platform B2C application supporting both web and VR, working primarily in Unity and C#. I collaborated on features for both environments, integrated external plugins, and developed API endpoints to manage content and user data efficiently. I also contributed to a custom JavaScript implementation for lipsync on the web and explored R&D projects using React Three Fiber and WebGPU. A key focus of my work was performance optimization, including CPU and memory profiling, asset optimization for VR, and maintaining CI/CD pipelines through Jenkins. Additionally, I implemented AI integrations such as GPT API, text-to-speech, and speech-to-text to support realistic virtual interactions, and I developed Unity Editor tools to automate asset workflows and improve team efficiency.",
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
      "At Layers, I developed B2B XR applications for multiple MR and VR platforms, including HoloLens and Unreal Glasses, handling both application logic and UI development. I worked on interactive features, shaders, and internal tools to support development and deployment. I also created AR filters for social platforms like Snapchat and Instagram. My responsibilities included mentoring interns and supporting product demonstrations at events. A strong emphasis in my work was on performance optimization, ensuring smooth experiences across platforms, and building reusable Unity packages to improve workflow efficiency.",
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
      "In my Manager role at Domino's, I trained and mentored employees to maximize team performance. I managed complaints with calm, clear communication and collaborated with team members to achieve target results. My responsibilities included setting goals, delegating tasks, providing feedback, and addressing performance issues.",
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
