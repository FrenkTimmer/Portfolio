export function Hero() {
  return (
    <section id="hero" className="flex flex-col pt-20 lg:pt-0">
      <h1 className="text-5xl font-bold mb-2">Frenk Timmer</h1>
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
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:frenk-timmer@proton.me" className="hover:underline">
          Email
        </a>
      </div>
    </section>
  );
}
