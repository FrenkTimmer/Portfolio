import {
  IconBrandGithub as GithubIcon,
  IconBrandGithubFilled as GithubFilledIcon,
  IconMail as MailIcon,
  IconMailFilled as MailFilledIcon,
  IconBrandLinkedin as LinkedinIcon,
  IconBrandLinkedinFilled as LinkedinFilledIcon,
} from "@tabler/icons-react";

export function Hero() {
  return (
    <section id="hero" className="flex flex-col pt-20 lg:pt-0">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2">Frenk Timmer</h1>
      <h2 className="text-xl text-gray-400 mb-4">
        XR Engineer & Unity Developer
      </h2>
      <p className="text-base text-gray-400 max-w-2xl mb-8">
        Unity Developer with over six years of experience creating immersive
        XR/VR applications.
      </p>
      <div className="flex gap-4">
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
      </div>
    </section>
  );
}
