import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="w-full min-h-[520px] bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col"
    >
      {/* Swiper Image Slider */}
      <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          className="rounded-xl overflow-hidden"
          loading="lazy"
        >
          {project.image.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Content */}
      <h3 className="text-2xl font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4">{project.overview}</p>

      {/* Features */}
      <div className="mb-3">
        <h4 className="text-white font-medium mb-1">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-3">
        <h4 className="text-white font-medium mb-1">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-white/10 text-white text-sm px-3 py-1 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Role & Outcome */}
      <p className="text-gray-400 text-sm mt-3">
        <strong>Role:</strong> {project.role}
      </p>
      <p className="text-gray-400 text-sm mt-1">
        <strong>Outcome:</strong> {project.outcome}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-auto pt-6">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all shadow hover:scale-105"
          >
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full bg-gray-600 hover:bg-gray-700 transition-all shadow hover:scale-105"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
