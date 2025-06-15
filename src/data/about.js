import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

const about = {
  bio: [
    "I am a dedicated Full Stack Developer with one year of contract-based experience delivering robust and scalable web solutions.",
    "Though my academic journey began in Electronics and Communication Engineering, I made a decisive transition into software development—a field that aligns with my curiosity, creativity, and technical strengths.",
    "Over the past year, I have built and deployed full-stack applications using modern technologies such as React, Node.js, Express, and MySQL. I enjoy crafting elegant UIs and building efficient backends, maintaining clean code practices and a product-focused mindset.",
    "Whether it’s designing scalable APIs, building role-based access systems, or creating dynamic frontend interfaces, I approach challenges with a product-first mentality and a commitment to continuous improvement."
  ],

  skills: [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript (ES6+)", icon: FaJsSquare, color: "text-yellow-400" },
    { name: "React (Vite)", icon: FaReact, color: "text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-300" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "REST APIs", icon: FaDatabase, color: "text-orange-400" },
    { name: "JWT Authentication", icon: SiJsonwebtokens, color: "text-rose-400" },
    { name: "Git", icon: FaGitAlt, color: "text-red-400" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
  ],
  currentFocus:
    "Improving backend architecture and enhancing user experience through thoughtful frontend design using modern JS libraries and frameworks.",
};

export default about;
