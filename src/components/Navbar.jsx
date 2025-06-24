import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // use Lucide icons
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
     { name: "Resume", href: "/Vinith-Bylapudi-Fullstack-Developer.pdf", external: true },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Vinith.dev</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white/80 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition duration-300 relative group"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.name}
                <span className="block h-0.5 w-0 group-hover:w-full transition-all bg-cyan-400 absolute bottom-0 left-0"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden flex flex-col items-center space-y-4 py-6 bg-slate-900/95 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <li key={link.name} onClick={toggleMenu}>
              <a href={link.href} className="hover:text-cyan-400">
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
};

export default Navbar;
