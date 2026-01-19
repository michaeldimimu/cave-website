"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "The Cave", href: "/cave" },
    { name: "The Path", href: "/path" },
    { name: "Schools", href: "/schools" },
    { name: "The Archive", href: "/archive" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed h-20 bg-black border-b border-[#EFC738] text-white px-6 md:px-[80px] top-0 left-0 right-0 z-50">
      <nav className="h-full flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <div className="w-16 h-16 relative">
            <Image
              src="/cave-logo.png"
              alt="The Cave Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "text-[#EFC738]"
                      : "text-white hover:text-[#F7E08B]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden z-50 text-white focus:outline-none"
        >
          {isMenuOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
        </button>

        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-xl font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-[#EFC738]"
                        : "text-white hover:text-[#F7E08B]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
