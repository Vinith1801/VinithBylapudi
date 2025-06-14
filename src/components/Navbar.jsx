import React from "react";

const Navbar = () => {
  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-white font-bold text-xl">Vinith.dev</h1>
        <ul className="hidden md:flex space-x-6 text-gray-300 text-sm">
          <li><a href="#hero" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
