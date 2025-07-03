import { Link } from "react-router-dom";
import { ExternalLink, Info } from "lucide-react";

const ProjectCard = ({ project }) => {
  const thumbnail = project.image[0]; // Use the first image as preview

  return (
    <div className="group bg-gradient-to-br from-[#1c273375] to-[#0f1a25a7] border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image Thumbnail */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.overview}</p>

        <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-500 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          ) : (
            <span className="text-gray-500 text-sm italic">No Live Demo</span>
          )}

          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 text-sm text-white bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full transition-all"
          >
            <Info className="w-4 h-4" />
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
