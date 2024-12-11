"use client";

import { useEffect, useRef, useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <div className="space-y-1">
          <span className="block w-4 h-0.5 bg-gray-800"></span>
          <span className="block w-4 h-0.5 bg-gray-800"></span>
          <span className="block w-4 h-0.5 bg-gray-800"></span>
        </div>
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Karier
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Kursus
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Kontak
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Bantuan
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-[#00ADC6] font-extrabold hover:bg-gray-100 rounded-md md:hidden"
            >
              Masuk
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
