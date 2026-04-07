import { experiences } from "../data/experience";
import {
  IconLink as LinkIcon,
  IconUnlink as UnlinkIcon,
} from "@tabler/icons-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-70 lg:scroll-mt-42 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <ol className="flex flex-col gap-12 group/experiences">
        {experiences.map((job) => (
          <li key={job.company} className="relative group/experience">
            <div className="absolute -inset-x-4 -inset-y-4 rounded-lg bg-gray-900 opacity-0 group-hover/experience:opacity-100 transition-opacity duration-200"></div>

            <div className="relative max-w-5xl mx-auto">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  {job.title}
                  {job.url && (
                    <>
                      <LinkIcon
                        size={16}
                        className="group-hover/experience:hidden"
                      />
                      <UnlinkIcon
                        size={16}
                        className="hidden group-hover/experience:block"
                      />
                    </>
                  )}
                </h3>
                <span className="text-gray-400 uppercase tracking-wide text-xs">
                  {job.period}
                </span>
              </div>

              <div className="flex justify-between items-start mb-4">
                <p className="text-lg text-gray-400">{job.company}</p>
                <p className="text-sm text-gray-400">{job.location}</p>
              </div>

              <p className="text-gray-400 mb-4">{job.description}</p>

              <ul className="flex flex-wrap gap-2 mt-2">
                {job.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-blue-300 bg-blue-300/10 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {job.url && (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-lg"
                aria-label={job.company}
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
