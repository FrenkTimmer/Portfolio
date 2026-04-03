export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <nav className="max-w-6xl mx-auto py-2 px-0 flex">
        <button
          onClick={scrollToTop}
          className="font-semibold cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-950"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="font-semibold cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-950"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="font-semibold cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-950"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="font-semibold cursor-pointer px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-950"
        >
          Skills
        </button>
      </nav>
    </header>
  );
}
