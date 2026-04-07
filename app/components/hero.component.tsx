import {
  IconBrandGithub as GithubIcon,
  IconBrandGithubFilled as GithubFilledIcon,
  IconMail as MailIcon,
  IconMailFilled as MailFilledIcon,
  IconBrandLinkedin as LinkedinIcon,
  IconBrandLinkedinFilled as LinkedinFilledIcon,
  IconFileCvFilled as ResumeFilledIcon,
  IconFileCv as ResumeIcon,
} from "@tabler/icons-react";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col pt-20 lg:pt-0">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2">Frenk Timmer</h1>
      <h2 className="text-xl text-gray-400 mb-4">Software Engineer</h2>
      <p className="text-base text-gray-400 max-w-2xl mb-8">
        I build immersive, interactive applications across multiple platforms
      </p>

      <div className="flex gap-4 mb-6">
        <a
          href="https://www.linkedin.com/in/frenktimmer/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="group-hover:hidden" />
          <LinkedinFilledIcon className="hidden group-hover:block group-hover:fill-blue-300" />
        </a>
        <a href="mailto:frenk-timmer@proton.me" className="group">
          <MailIcon className="group-hover:hidden" />
          <MailFilledIcon className="hidden group-hover:block group-hover:fill-blue-300" />
        </a>
        <a
          href="https://github.com/FrenkTimmer/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="group-hover:hidden" />
          <GithubFilledIcon className="hidden group-hover:block group-hover:fill-blue-300" />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <ResumeIcon className="group-hover:hidden" />
          <ResumeFilledIcon className="hidden group-hover:block group-hover:fill-blue-300" />
        </a>
      </div>
    </section>
  );
}
