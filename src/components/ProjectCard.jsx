import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl overflow-hidden"
        >
        {project.image.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.overview}</p>

      <div className="mb-4">
        <h4 className="text-white font-medium mb-1">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-medium mb-1">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-slate-700 text-sm text-white px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-3"><strong>Role:</strong> {project.role}</p>
      <p className="text-gray-400 text-sm mt-1"><strong>Outcome:</strong> {project.outcome}</p>

      <div className="flex gap-3 mt-4">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
