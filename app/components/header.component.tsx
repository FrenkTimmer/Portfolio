export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 bg-gray-900 shadow-sm z-50">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex gap-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-semibold hover:text-blue-600"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="font-semibold hover:text-blue-600"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="font-semibold hover:text-blue-600"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="font-semibold hover:text-blue-600"
        >
          Skills
        </button>
      </nav>
    </header>
  );
}
