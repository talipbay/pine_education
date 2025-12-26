"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const edTechSolutions = ["Intellektum", "Matatalab", "IoT Board", "Nodistep"];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-gilroy font-semibold",
        isScrolled ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main */}
            <a
              href="#"
              className="relative text-white hover:text-gray-300 transition-colors duration-200 group"
            >
              Main
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Integrated EdTech Solutions Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="relative flex items-center text-white hover:text-gray-300 transition-colors duration-200"
              >
                Integrated EdTech Solutions
                <ChevronDown
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform duration-200",
                    isDropdownOpen && "rotate-180"
                  )}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 transition-all duration-200",
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {edTechSolutions.map((solution, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {solution}
                  </a>
                ))}
              </div>
            </div>

            {/* Insights + Events */}
            <a
              href="#"
              className="relative text-white hover:text-gray-300 transition-colors duration-200 group"
            >
              Insights + Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Contact */}
            <a
              href="#"
              className="relative text-white hover:text-gray-300 transition-colors duration-200 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Search Button */}
            <button className="text-white hover:text-gray-300 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>

            {/* Request Demo Button */}
            <button className="relative bg-white font-semibold hover:bg-white text-black px-6 py-2 rounded-full transition-colors duration-400 overflow-hidden group">
              <span className="block transition-transform duration-300 group-hover:-translate-y-12">
                Request Demo
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Request Demo
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                Main
              </a>
              <div className="px-4">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-white hover:text-gray-300 w-full text-left"
                >
                  Integrated EdTech Solutions
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      isDropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {edTechSolutions.map((solution, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-gray-300 hover:text-white py-1"
                      >
                        {solution}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                Insights + Events
              </a>
              <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                Contact
              </a>
              <div className="px-4 pt-4 space-y-2">
                <button className="relative w-full bg-white hover:bg-white text-black px-8 py-3 rounded-full transition-colors duration-200 overflow-hidden group">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-12">
                    Request Demo
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    Request Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
