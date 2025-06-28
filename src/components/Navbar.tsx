"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { navLinksdata } from "@/app/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full flex justify-center sticky top-0 z-50 mt-4">
      <div className="bg-black/70 backdrop-blur-2xl rounded-full border border-neutral-800/50 shadow-lg w-full max-w-5xl h-14 flex items-center justify-between px-6">
        {/* Logo */}
        <ScrollLink
          to="Hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-2xl font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400"
        >
          RS
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinksdata.map((item) => (
            <ScrollLink
              key={item._id}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-white"
              className="cursor-pointer relative group text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
            >
              {item.title}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden hover:bg-neutral-800/50 border border-neutral-800/50 p-2 rounded-full"
        >
          {isMenuOpen ? (
            <FiX className="text-xl text-white" />
          ) : (
            <FiMenu className="text-xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-3xl z-40 overflow-y-auto"
          style={{ animation: "fadeIn 0.3s ease-out forwards" }}
        >
          <div className="flex flex-col items-center gap-8 py-8 px-4">
            {navLinksdata.map((item) => (
              <ScrollLink
                key={item._id}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={toggleMenu}
                className="cursor-pointer relative group text-gray-300 hover:text-white text-lg font-medium uppercase tracking-wider py-2 px-4"
              >
                {item.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300" />
              </ScrollLink>
            ))}
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
