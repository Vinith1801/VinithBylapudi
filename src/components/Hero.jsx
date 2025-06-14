import React from "react";
import heroImage from "../assets/hero.jpg"; // Replace with your photo or illustration

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto gap-12" id="hero">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-blue-500">Vinith Bylapudi</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl">
          A passionate Full Stack Developer with a focus on building scalable, user-centric web applications using modern technologies like React, Node.js, and MySQL.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Let's Connect
        </a>
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <img
          src={heroImage}
          alt="Vinith Bylapudi"
          className="rounded-2xl shadow-lg mx-auto max-w-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
