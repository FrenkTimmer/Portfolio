import type { FC } from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Hamburger: FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center w-10 h-10 gap-1 focus:outline-none cursor-pointer"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`block w-8 h-1 bg-black dark:bg-white rounded transform transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-1 bg-black dark:bg-white rounded transform transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-1 bg-black dark:bg-white rounded transform transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
};
