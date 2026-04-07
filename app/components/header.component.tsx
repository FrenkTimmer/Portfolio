import { useRef } from "react";
import { IconMenu2 as MenuIcon } from "@tabler/icons-react";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMenu = () => {
    if (toggleRef.current) {
      toggleRef.current.checked = false;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const navItems = [
    { label: "Home", action: scrollToTop },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Skills", action: () => scrollToSection("skills") },
  ];

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="relative">
        <input
          ref={toggleRef}
          id="menu-toggle"
          type="checkbox"
          className="hidden peer"
        />
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-2">
          <div className="hidden lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="font-semibold px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-950 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="lg:hidden flex justify-end w-full px-4">
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-950"
            >
              <MenuIcon />
            </label>
          </div>
        </nav>
        <div className="lg:hidden hidden peer-checked:flex lg:peer-checked:hidden flex-col gap-2 px-4 pb-4 bg-white dark:bg-gray-900 shadow-md">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full text-left font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-950 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
