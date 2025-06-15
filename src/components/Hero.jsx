import React from "react";
import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative z-0 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-24 max-w-7xl mx-auto gap-12"
      id="hero"
    >
      {/* Blurred Glow Background Element */}
      <div className="absolute -z-10 w-[60vw] max-w-[600px] aspect-square bg-blue-500 opacity-20 blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full top-[10vh] right-0"></div>

      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Hi, I'm <span className="text-cyan-400">Vinith Bylapudi</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
          A passionate Full Stack Developer building user-focused, scalable
          web apps with React, Node.js, and MySQL.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full text-white bg-cyan-500 hover:bg-cyan-600 transition shadow-lg shadow-cyan-500/30 hover:shadow-cyan-600/40"
        >
          Let’s Connect
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImage}
          alt="Vinith Bylapudi"
          className="rounded-3xl shadow-xl mx-auto max-w-sm border-4 border-white/25 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
