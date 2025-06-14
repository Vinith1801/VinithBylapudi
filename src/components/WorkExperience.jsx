import React from "react";
import work from "../data/work";

const WorkExperience = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 inline-block border-blue-500">
        Work Experience
      </h2>

      <div className="space-y-10">
        {work.map((job, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
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
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
