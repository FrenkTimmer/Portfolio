import { experiences } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((job) => (
          <div key={job.company} className="max-w-3xl">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <span className="text-gray-400">{job.period}</span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <p className="text-lg text-gray-400">{job.company}</p>
              <p className="text-sm text-gray-400">{job.location}</p>
            </div>
            <p className="text-gray-400 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
