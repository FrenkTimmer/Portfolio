import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className=" scroll-mt-42">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="space-y-4 max-w-3xl group/skills">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="transition-opacity duration-300 group/skill group-hover/skills:opacity-40 hover:opacity-100"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                {skill.level.label}
              </span>
            </div>

            <div className="w-full bg-gray-500 rounded-full h-1.5">
              <div
                className="bg-gray-300 h-1.5 rounded-full"
                style={{ width: `${skill.level.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
