'use client'
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {title: "About", href: "/About"},
    {title: "Skills", href: "/Skills"},
    {title: "Experience", href: "/Experience"},
    // {title: "Tech Stack", href: "/Tech Stack"},
    {title: "Projects", href: "/Projects"},
    {title: "Contact", href: "/Contact"},
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  };

  return(
    <div className="w-full bg-black/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <h1 className="text-2xl text-white font-bold">Logo</h1>

         {/* Desktop Navigation */}
         <div className="hidden md:inline-flex items-center gap-7 text-gray-300  duration-200">
          {navigation.map((item) => (
            <Link
            key={item?.title}
            href={item?.href}
            className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />

            </Link>
          ))}
         </div>

         {/* Mobile Menu Icon */}
         <div className="md:hidden">
          <Button onClick={toggleMenu} aria-lable="Toggle Menu">
            {isMenuOpen ? <FiX className="text-2xl text-white"/> : <FiMenu className="text-2xl text-white"/>}
          </Button>
         </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 absolute top-20 left-0 w-full shadow-lg z-50">
          <div className="flex flex-col items-center gap-4 py-4 text-gray-300">
            {navigation.map((item) => (
              <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
              onClick={toggleMenu}
              >
                {item?.title}
                <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

}



export default Navbar





// "use client";
// import { useState } from "react";
// import { Globe } from "lucide-react"; 
// import Link from "next/link";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-[#232427] text-white px-4 py-3 rounded-2xl shadow-md max-w-6xl mx-auto mt-4">
//       <div className="flex justify-between items-center flex-wrap">
//         {/* Logo */}
//         <div className="text-lg font-semibold">
//           TETIANA ZAPOROZHETS
//         </div>

//         {/* Menu (Desktop) */}
//         <nav className="hidden md:flex space-x-6 text-sm font-medium">
//           <Link href="#services" className="text-blue-400 hover:underline">SERVICES</Link>
//           <Link href="#technologies" className="hover:text-blue-400">TECHNOLOGIES</Link>
//           <Link href="#portfolio" className="hover:text-blue-400">PORTFOLIO</Link>
//           <Link href="#contact" className="hover:text-blue-400">CONTACT</Link>
//         </nav>

//         {/* Language Switcher */}
//         <div className="flex items-center space-x-2 bg-[#1a1d25] px-3 py-1 rounded-full text-xs">
//           <span>ENG</span>
//           <Globe size={14} />
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden mt-2 text-sm text-blue-400"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "Close" : "Menu"}
//         </button>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <nav className="flex flex-col space-y-2 mt-2 md:hidden text-sm font-medium w-full">
//             <Link href="#services" className="text-blue-400">SERVICES</Link>
//             <Link href="#technologies" className="hover:text-blue-400">TECHNOLOGIES</Link>
//             <Link href="#portfolio" className="hover:text-blue-400">PORTFOLIO</Link>
//             <Link href="#contact" className="hover:text-blue-400">CONTACT</Link>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }
