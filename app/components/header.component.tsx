import { useState, useRef, useEffect } from "react";
import { Hamburger } from "./hamburger.component";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", action: scrollToTop },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Experience", action: () => scrollToSection("experience") },
    { label: "Skills", action: () => scrollToSection("skills") },
  ];

  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuOpen ? `${menuRef.current.scrollHeight}px` : "0px");
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="relative">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-2">
          <div className="hidden lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="font-semibold px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-950 transition cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="lg:hidden flex justify-end w-full px-4">
            <Hamburger
              isOpen={menuOpen}
              toggle={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </nav>
        <div
          ref={menuRef}
          style={{ height: menuHeight }}
          className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md overflow-hidden transition-height duration-300 ease-in-out`}
        >
          <div className="flex flex-col gap-2 px-4 pb-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full text-left font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-950 transition cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
