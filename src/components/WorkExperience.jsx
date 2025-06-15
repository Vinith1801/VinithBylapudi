import React from "react";
import { motion } from "framer-motion";
import work from "../data/work";

const WorkExperience = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold text-white mb-12 border-b-2 inline-block border-blue-500">
        Work Experience
      </h2>

      <div className="relative border-l-0 ml-1 pl-6">
        {/* Timeline Line */}
        <div className="absolute top-0 left-3 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full z-0"></div>

        {/* Timeline Entries */}
        <div className="space-y-12 relative z-10">
          {work.map((job, idx) => (
            <motion.div
              key={idx}
              className="relative group pl-5"  // extra padding to fit horizontal line
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Horizontal checkpoint line */}
              <div className="absolute left-0 top-0 h-1.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-md shadow-cyan-500/40"></div>
              
              {/* Vertical timeline line is still at left-3 */}
              
              {/* Card */}
              <div className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Blurred Glow Background Element */}
      <div className="absolute w-[60vw] max-w-[600px] aspect-square bg-blue-500 opacity-20 blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full top-10 left-0"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <p className="text-gray-400">{job.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm mt-2 md:mt-0">
                    {job.period} • {job.location}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{job.description}</p>

                <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
                  {job.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-2">
                  {job.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-slate-700 text-sm text-white px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;
