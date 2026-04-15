const skillLevels = {
  Novice: { label: "Novice", value: 20 },
  Beginner: { label: "Beginner", value: 40 },
  Intermediate: { label: "Intermediate", value: 55 },
  Experienced: { label: "Experienced", value: 75 },
  Expert: { label: "Expert", value: 95 },
};

export const skills = [
  { name: "Unity", level: skillLevels.Expert },
  { name: "C#", level: skillLevels.Expert },
  { name: "XR / VR / MR Development", level: skillLevels.Expert },
  {
    name: "Performance Optimization",
    level: skillLevels.Experienced,
  },
  { name: "AI Integrations", level: skillLevels.Experienced },
  { name: "API Development & Integration", level: skillLevels.Intermediate },
  { name: "Unity Editor Tooling", level: skillLevels.Experienced },
  { name: "JavaScript / TypeScript", level: skillLevels.Intermediate },
  { name: "React", level: skillLevels.Experienced },
  { name: "WebGPU / WebXR", level: skillLevels.Intermediate },
  { name: "Shader Programming", level: skillLevels.Intermediate },
  { name: "Unreal Engine 5", level: skillLevels.Beginner },
  {
    name: "CI/CD & DevOps",
    level: skillLevels.Experienced,
  },
  { name: "SparkAR / Lens Studio", level: skillLevels.Experienced },
  { name: "Agile / Scrum", level: skillLevels.Experienced },
];
