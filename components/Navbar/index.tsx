"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navMenu = [
  { label: "About", href: "#about" },
  { label: "Our Projects", href: "#our-projects" },
  { label: "Team", href: "#team" },
  { label: "Alumni", href: "#alumni" },
  { label: "Partners", href: "#partners" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="container shadow-md sticky py-10 top-0 left-0 right-0 bg-black z-50">
      <div className="flex justify-between gap-4 flex-wrap h-16 items-center">
        {/* Logo */}
        <div className="flex-shrink-0 text-3xl lg:text-5xl font-bold text-primary cursor-pointer">
          <Link href="/">Open Source Hive</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-wrap items-center gap-x-4">
          {navMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className=" cursor-pointer text-xl font-bold hover:text-gray-400 whitespace-nowrap m-0"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className=" cursor-pointer focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden shadow-lg px-4 pt-2 pb-4 space-y-2">
          {navMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block cursor-pointer hover:text-primary whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
