import type { Route } from "./+types/home";
import { Header, Hero, About, Experience, Skills } from "../components";
import { Projects } from "~/components/projects.component";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Frenk Timmer | Software Engineer" },
    {
      name: "description",
      content:
        "Software Engineer with 6+ years experience building scalable, interactive applications.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-[45%] lg:h-full lg:sticky lg:top-40 flex flex-col gap-8 lg:gap-16">
            <Hero />
          </div>
          <main className="lg:w-[55%] flex flex-col gap-20 pb-20 lg:py-28">
            <About />
            <Experience />
            <Projects />
            <Skills />
          </main>
        </div>
      </div>
    </>
  );
}
