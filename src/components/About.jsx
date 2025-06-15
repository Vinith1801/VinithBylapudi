import React from "react";
import { motion } from "framer-motion";
import about from "../data/about";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-15 px-6 max-w-7xl mx-auto z-10"
    >
      {/* Blurred Glow Background Element */}
      <div className="absolute w-[60vw] max-w-[600px] aspect-square bg-blue-500 opacity-20 blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full -z-10 top-[10vh] left-0"></div>

      {/* Section Heading */}
      <motion.h2
        className="relative border-b-4 border-cyan-500 text-4xl font-bold text-white mb-12 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      {/* Bio Paragraphs */}
      <motion.div
        className="text-gray-300 space-y-6 max-w-4xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {about.bio.map((para, index) => (
          <p key={index} className="leading-relaxed text-base md:text-lg">
            {para}
          </p>
        ))}
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-4">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-3">
  {about.skills.map(({ name, icon, color }, index) => (
    <span
      key={index}
      className="flex items-center gap-2 bg-white/5 backdrop-blur-md text-white px-4 py-2 text-sm rounded-full border border-cyan-500/30 hover:border-cyan-400 transition shadow-md hover:shadow-cyan-500/20"
    >
      {React.createElement(icon, { className: `${color} text-lg` })}
      {name}
    </span>
  ))}
</div>

      </motion.div>

      {/* Current Focus */}
      {about.currentFocus && (
        <motion.div
          className="mt-14 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Currently Focused On
          </h3>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {about.currentFocus}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;
