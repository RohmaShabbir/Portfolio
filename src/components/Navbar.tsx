'use client';
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full flex justify-center sticky top-0 z-50 mt-4">
      <div className="bg-black/70 backdrop-blur-2xl rounded-full border border-neutral-800/50 shadow-lg w-full max-w-5xl h-14 flex items-center justify-between px-6">
        
        {/* Logo with gradient text */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
            RS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative group text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
            >
              {item.title}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
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
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={toggleMenu}
                className="relative group text-gray-300 hover:text-white text-lg font-medium uppercase tracking-wider py-2 px-4"
              >
                {item.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;


