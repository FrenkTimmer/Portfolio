export const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website, built with React and Tailwind, deployed on Vercel.",
    image: "/images/portfolio.png",
    url: "https://github.com/FrenkTimmer/Portfolio",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Vercel",
    ],
  },
  {
    title: "MoreMissingPieces",
    description:
      "A Valheim mod that expands the building system with additional craftable pieces. Created in Blender and integrated using Unity and BepInEx.",
    image: "/images/more_missing_pieces.png",
    url: "https://thunderstore.io/c/valheim/p/Vismeneer/MoreMissingPieces/",
    technologies: ["C#", "Unity", "Blender", "GIMP", "BepInEx", "Game Modding"],
    stats: [{ label: "10k+ downloads", icon: "download" }],
  },
  {
    title: "SilencePlease",
    description:
      "A Valheim mod that allows fine-grained control over in-game audio, enabling players to mute or adjust specific sounds such as creatures, environmental effects, and structures in real time.",
    image: "/images/silence_please.png",
    url: "https://thunderstore.io/c/valheim/p/Vismeneer/SilencePlease/",
    technologies: ["C#", "BepInEx", "Unity", "Game Modding"],
  },
];
