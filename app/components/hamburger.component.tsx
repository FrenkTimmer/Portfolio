import type { FC } from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Hamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center w-10 h-10 gap-0.75 focus:outline-none cursor-pointer"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`block w-5 h-0.75 bg-black dark:bg-white rounded transform transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></span>
      <span
        className={`block w-5 h-0.75 bg-black dark:bg-white rounded transform transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-5 h-0.75 bg-black dark:bg-white rounded transform transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
  );
}
