import React from "react";
import about from "../data/about";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="about">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 inline-block border-blue-500">
        About Me
      </h2>

      <div className="text-gray-300 space-y-4 max-w-3xl">
        {about.bio.map((para, index) => (
          <p key={index} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mt-10 mb-4">
        Technical Skills
      </h3>
      <div className="flex flex-wrap gap-3">
        {about.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 text-white px-4 py-2 text-sm rounded-full shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {about.currentFocus && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-white mb-2">
            Currently Focused On
          </h3>
          <p className="text-gray-300 leading-relaxed">{about.currentFocus}</p>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
