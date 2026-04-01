import type { Route } from "./+types/home";
import { Header, Hero, About, Experience, Skills } from "../components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Frenk Timmer | XR Engineer & Unity Developer" },
    {
      name: "description",
      content:
        "XR Engineer with 6+ years experience in Unity3D, VR/AR/MR development, AI integrations, and performance optimization.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
    </>
  );
}
