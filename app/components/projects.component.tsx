import { projects } from "../data/projects";
import {
  IconLink as LinkIcon,
  IconUnlink as UnlinkIcon,
  IconDownload,
} from "@tabler/icons-react";
import type { TablerIcon } from "@tabler/icons-react";

const iconMap: Record<string, TablerIcon> = {
  download: IconDownload,
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-18 lg:scroll-mt-42 max-w-5xl ">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>

      <ol className="flex flex-col gap-12 group/projects">
        {projects.map((project) => (
          <li
            key={project.title}
            className="relative group/project cursor-pointer"
          >
            {/* Hover background */}
            <div className="absolute -inset-x-4 -inset-y-4 rounded-lg bg-gray-900 opacity-0 lg:group-hover/project:opacity-100 transition-opacity duration-200"></div>

            <div className="relative">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Image */}
                {project.image && (
                  <div className="w-1/4 overflow-hidden rounded-lg order-2 md:order-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover/project:scale-105"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 order-1 md:order-2">
                  {/* Title + link icon */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                      {project.title}
                      {project.url && (
                        <>
                          <LinkIcon
                            size={16}
                            className="group-hover/project:hidden"
                          />
                          <UnlinkIcon
                            size={16}
                            className="hidden group-hover/project:block"
                          />
                        </>
                      )}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Stats */}
                  {project.stats && (
                    <div className="flex flex-wrap gap-4 text-sm text-white mb-3">
                      {project.stats.map((stat) => {
                        const Icon = iconMap[stat.icon];

                        return (
                          <span
                            key={stat.label}
                            className="flex items-center gap-1"
                          >
                            {Icon && <Icon size={14} />}
                            {stat.label}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Technologies */}
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium text-blue-300 bg-blue-300/10 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Clickable overlay */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-lg"
                aria-label={project.title}
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
