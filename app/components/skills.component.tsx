import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="flex flex-wrap gap-3 max-w-3xl">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
