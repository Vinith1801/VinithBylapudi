import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 inline-block border-blue-500">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
