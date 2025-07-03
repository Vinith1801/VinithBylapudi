import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ExternalLink, Github, List, Terminal, ArrowLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <section className="px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-6">Sorry, this project does not exist or was removed.</p>
        <Link to="/" className="text-blue-400 hover:underline">← Go Back Home</Link>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-8 py-16 max-w-6xl mx-auto">
      {/* Back */}
      <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Glass container */}
      <div className=" rounded-2xl p-8 shadow-lg">
        {/* Blurred Glow Background Element */}
      <div className="absolute w-[60vw] max-w-[600px] aspect-square bg-blue-500 opacity-20 blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full z-1 top-[10vh] right-0"></div>
      <div className="absolute w-[60vw] max-w-[600px] aspect-square bg-blue-500 opacity-20 blur-[60px] sm:blur-[90px] md:blur-[120px] rounded-full z-1 top-[102vh] left-0"></div>

        {/* Title & Overview */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-lg text-gray-300 mb-10">{project.overview}</p>

        {/* Swiper Gallery */}
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="rounded-xl overflow-hidden shadow-xl mb-12"
        >
            {project.image.map((img, i) => (
                <SwiperSlide key={i}>
                <div className="w-full aspect-[16/9] sm:aspect-[3/2] md:aspect-[16/7] overflow-hidden rounded-xl">
                    <img
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                </SwiperSlide>
            ))}
        </Swiper>


        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <List className="w-5 h-5" />
              <h3 className="text-2xl font-semibold">Key Features</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <Terminal className="w-5 h-5" />
              <h3 className="text-2xl font-semibold">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-white text-sm px-4 py-1 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Role & Outcome */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10 space-y-3">
          <p className="text-gray-400">
            <strong className="text-white">Role:</strong> {project.role}
          </p>
          <p className="text-gray-400">
            <strong className="text-white">Outcome:</strong> {project.outcome}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-full transition"
            >
              <Github className="w-4 h-4" />
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
