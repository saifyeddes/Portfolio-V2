// src/components/ProjectSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaTools,
  FaFigma,
  FaGithub,
  FaTimes,
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiVercel,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { LuBadge } from "react-icons/lu";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { useNavbar } from "../contexts/NavbarContext";

// ===================================
// PROJECT DATA (EXAMPLE)
// ===================================
const dummyProjects = [
  {
    title: "Portfolio v2",
    description:
      "Personal portfolio website built with React, Next.js, and Tailwind CSS, deployed on Vercel.",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/username/portfolio",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Web/Apps",
  },
  {
    title: "E-Commerce API",
    description:
      "RESTful API for e-commerce platform with authentication, product management, and transaction features.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/username/ecommerce-api",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
    category: "Web/Apps",
  },
  {
    title: "UI Design System",
    description:
      "Designing reusable and consistent UI components for web applications using Figma.",
    tech: ["Figma", "Storybook"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1600132806378-62402124d9e0?q=80&w=2070&auto=format&fit=crop",
    category: "Web/Apps",
  },
  {
    title: "3D Product Visualization",
    description:
      "Interactive 3D design for product showcase using Spline and Blender.",
    tech: ["Spline", "Blender"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
    category: "3D Design",
  },
  {
    title: "Animated 3D Landing",
    description: "Landing page with animated 3D elements for modern branding.",
    tech: ["Spline", "Three.js"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2070&auto=format&fit=crop",
    category: "3D Design",
  },
];

// ===================================
// CERTIFICATE DATA
// ===================================
const userCertificates = [
  {
    title: "NODEJS",
    date: "Dec 2024",
    link: "/certificates/NODEJS.pdf",
    image: "/certificate-images/NODEJS.jpg",
  },
  {
    title: "Master Amazon EC2 Storage EBS, EFS  AMI",
    date: "Dec 2024",
    link: "/certificates/Master Amazon EC2 Storage EBS, EFS  AMI.pdf",
    image: "/certificate-images/Master Amazon EC2 Storage EBS, EFS  AMI.jpg",
  },
  {
    title: "REACTJS",
    date: "Dec 2024",
    link: "/certificates/REACTJS.pdf",
    image: "/certificate-images/REACTJS.jpg",
  },
  {
    title: "Cloud Service Models IaaS  Linode Basics  TFA SSH  Linux  Ubuntu  LAMP Stack  DBMS  Firewalls SSL",
    date: "Dec 2024",
    link: "/certificates/Cloud Service Models IaaS  Linode Basics  TFA SSH  Linux  Ubuntu  LAMP Stack  DBMS  Firewalls SSL.pdf",
    image: "/certificate-images/Cloud Service Models IaaS  Linode Basics  TFA SSH  Linux  Ubuntu  LAMP Stack  DBMS  Firewalls SSL.jpg",
  },
  {
    title: "Digital Forensics",
    date: "Dec 2024",
    link: "/certificates/Digital Forensics.pdf",
    image: "/certificate-images/Digital Forensics.jpg",
  },
  {
    title: "Flutter GetX",
    date: "Dec 2024",
    link: "/certificates/Flutter GetX.pdf",
    image: "/certificate-images/Flutter GetX.jpg",
  },
  {
    title: "Full Stack Python,Django Framework and HTML 5",
    date: "Dec 2024",
    link: "/certificates/Full Stack Python,Django Framework and HTML 5.pdf",
    image: "/certificate-images/Full Stack Python,Django Framework and HTML 5.jpg",
  },
  {
    title: "html css",
    date: "Oct 2024",
    link: "/certificates/html css.pdf",
    image: "/certificate-images/html css.jpg",
  },
  {
    title: "Microsoft Azure Fundamentals",
    date: "Oct 2024",
    link: "/certificates/Microsoft Azure Fundamentals.pdf",
    image:
      "/certificate-images/Microsoft Azure Fundamentals.jpg",
  },
  {
    title: "Microsoft Office Word Excel PowerPoint",
    date: "Sep 2024",
    link: "/certificates/Microsoft Office Word Excel PowerPoint.pdf",
    image: "/certificate-images/Microsoft Office Word Excel PowerPoint.jpg",
  },
  {
    title: "PHOTOSHOP",
    date: "Sep 2024",
    link: "/certificates/PHOTOSHOP.pdf",
    image: "/certificate-images/PHOTOSHOP.jpg",
  },
  {
    title: "PHP 8.2 backend API based on scalable and powerful N-Tier architecture",
    date: "Aug 2024",
    link: "/certificates/PHP 8.2 backend API based on scalable and powerful N-Tier architecture.pdf",
    image: "/certificate-images/PHP 8.2 backend API based on scalable and powerful N-Tier architecture.jpg",
  },
  {
    title: "Practical Cisco Networking Labs in Cisco Packet Tracer",
    date: "Jul 2024",
    link: "/certificates/Practical Cisco Networking Labs in Cisco Packet Tracer.pdf",
    image: "/certificate-images/Practical Cisco Networking Labs in Cisco Packet Tracer.jpg",
  },
  {
    title: "Java Fundamentals",
    date: "Jun 2024",
    link: "/certificates/JAVA FUNDAMENTALS.pdf",
    image: "/certificate-images/JAVA FUNDAMENTALS.jpg",
  },
  {
    title: "secure software lifecycle proifessional",
    date: "Nov 2023",
    link: "/certificates/secure software lifecycle proifessional.pdf",
    image: "/certificate-images/secure software lifecycle proifessional.jpg",
  },
  {
    title: "UDEMY PYTHON",
    date: "Dec 2024",
    link: "/certificates/UDEMY PYTHON.pdf",
    image: "/certificate-images/UDEMY PYTHON.jpg",
  },
];

// ===================================
// EXPERIENCE DATA
// ===================================
const experiences = [
  {
    id: 1,
    position: "Full Stack Developer",
    company: "Confledis",
    duration: "06/2025 – Present",
    location: "Paris, Île-de-France, France",
    description: [
      "Designed and developed hybrid web and mobile applications with Angular (front-end) and Ionic.",
      "Created secure and high-performance RESTful APIs with Symfony (back-end).",
      "Implemented advanced features: authentication, user management, real-time interactions.",
      "Deployed secure cloud infrastructures via AWS Amplify, managed push and clone operations.",
      "Designed responsive and modern interfaces for optimal user experience.",
      "Wrote unit tests and documentation ensuring code robustness and maintainability.",
      "Agile collaboration, used Git for versioning and Jira for project management in coordination with stakeholders",
    ],
    technologies: ["Angular", "Ionic", "Symfony", "AWS", "Git", "Jira"],
    icon: "💼",
  },
  {
    id: 2,
    position: "Full Stack Web Developer",
    company: "POEMGROUP",
    duration: "07/2024 – 10/2024",
    location: "Antananarivo, Madagascar",
    description: [
      "Developed an Uber-like application with Vue.js (front-end) and Laravel (back-end).",
      "Implemented authentication, booking, real-time tracking, and payment modules.",
      "Integrated WebSockets for instant notifications.",
      "Created a responsive, modern, and fluid user interface.",
      "Wrote technical documentation and presented to stakeholders.",
      "Managed version control with Git and task organization via Trello.",
    ],
    technologies: ["Vue.js", "Laravel", "WebSockets", "Git", "Trello"],
    icon: "🚕",
  },
  {
    id: 3,
    position: "MERN Stack Developer",
    company: "DPOINTGROUP",
    duration: "02/2023 – 06/2023",
    location: "Barcelona, Spain",
    description: [
      "Built an e-commerce website with React.js, Node.js, Express.js, and MongoDB.",
      "Integrated features like shopping cart, orders, and product management.",
      "Deployed unit tests to ensure code quality.",
      "Used Git for version control, organized tasks via Trello, and worked in Agile",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "Trello",
    ],
    icon: "🛒",
  },
  {
    id: 4,
    position: "Laravel Developer",
    company: "DESIGNET Web Agency",
    duration: "06/2022 – 10/2022",
    location: "Nabeul, Tunisia",
    description: [
      "Developed dynamic websites with Laravel, PHP, JavaScript, and MySQL.",
      "Participated in design, coding, and functional testing.",
      "Collaborated with the team via Git, organized tasks with Trello, and met project deadlines",
    ],
    technologies: ["Laravel", "PHP", "JavaScript", "MySQL", "Git", "Trello"],
    icon: "🌐",
  },
];

// ===================================
// CERTIFICATE CARD COMPONENT
// ===================================
const CertificateCard = ({ cert, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative cursor-pointer"
      whileHover={{ y: -8 }}
      onClick={() => onClick(cert)}
    >
      <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
        <div className="absolute inset-0">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 group-hover:from-slate-900/95 transition-all duration-500"></div>
        </div>
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div className="flex-1 flex items-start justify-between">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                {cert.issuer}
              </span>
            </div>
            <div className="bg-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/30">
              <span className="text-xs font-bold text-emerald-300">
                {cert.date}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-2 leading-tight">
                {cert.title}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-slate-300">
                <FaDownload className="text-sm" />
                <span className="text-sm font-medium">View Certificate</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cyan-500/20 backdrop-blur-md p-2 rounded-full border border-cyan-400/30">
                  <FaExternalLinkAlt className="text-cyan-300 text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-transparent to-emerald-500/0 group-hover:from-cyan-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
      </div>
    </motion.div>
  );
};

// ===================================
// CERTIFICATE PREVIEW MODAL COMPONENT
// ===================================
const CertificatePreviewModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-4xl w-full bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-md p-3 rounded-full border border-red-400/30 transition-all duration-300 group"
          >
            <FaTimes className="text-red-300 group-hover:text-red-200" />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {certificate.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-cyan-500/20 px-4 py-2 rounded-full text-cyan-300 font-semibold border border-cyan-400/30">
                    {certificate.issuer}
                  </span>
                  <span className="bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-300 font-semibold border border-emerald-400/30">
                    {certificate.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto max-h-[60vh] object-contain"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <FaDownload className="group-hover:scale-110 transition-transform duration-300" />
              <span>Download Certificate</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ===================================
// PROJECT CARD COMPONENT
// ===================================
const ProjectCard = ({ project }) => {
  const techIcons = {
    "Next.js": <SiNextdotjs />,
    React: <FaReact />,
    TailwindCSS: <SiTailwindcss />,
    "Framer Motion": " गति ",
    "Node.js": <FaNodeJs />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    JWT: "🔑",
    Figma: <FaFigma />,
    Storybook: "📚",
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
      style={{
        background: `url('${project.image}') center/cover no-repeat`,
        cursor: "pointer",
      }}
    >
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-between p-4 sm:p-6 text-white">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-cyan-300">
            {project.title}
          </h3>
          <p className="text-slate-300 mt-2 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-cyan-900/70 text-cyan-200 border border-cyan-800/30 backdrop-blur-sm"
              >
                {techIcons?.[t] || t}
              </span>
            ))}
          </div>
          <FaExternalLinkAlt className="text-slate-300 group-hover:text-cyan-200 transition-colors duration-300" />
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-2xl border border-cyan-300/10 pointer-events-none"></div>
    </a>
  );
};

// ===================================
// EXPERIENCE CARD COMPONENT
// ===================================
const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionRef = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const MAX_LINES = 3;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight =
        parseInt(window.getComputedStyle(descriptionRef.current).lineHeight) ||
        24;
      const contentHeight = descriptionRef.current.scrollHeight;
      const maxHeight = lineHeight * MAX_LINES;
      setShowReadMore(contentHeight > maxHeight);
    }
  }, [experience.description]);

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-lg p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden flex flex-col h-full group"
      whileHover={{ y: -2, borderColor: "rgba(6, 182, 212, 0.5)" }}
      initial={false}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      ></div>
      <div className="flex-1">
        <div className="flex items-start gap-3">
          <div className="text-2xl flex-shrink-0 mt-1">{experience.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-0.5">
              {experience.position}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-cyan-300 text-xs mb-1">
              <span className="font-medium">{experience.company}</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="text-slate-400">{experience.duration}</span>
            </div>
            {experience.location && (
              <div className="text-slate-400 text-xs mb-3">
                {experience.location}
              </div>
            )}

            <AnimatePresence initial={false}>
              <motion.div
                ref={descriptionRef}
                className="text-slate-300 text-sm overflow-hidden"
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : `${MAX_LINES * 1.5}rem`, // 3 lines of text (1.5rem line-height * 3)
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <ul className="space-y-2 list-disc list-inside">
                  {experience.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-700/50 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-2 py-0.5 bg-slate-800/80 text-cyan-200 text-xs font-medium rounded-full border border-slate-700/50 backdrop-blur-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  borderColor: "rgba(6, 182, 212, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {showReadMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.button
                onClick={toggleExpand}
                className="group relative px-3 py-1 text-cyan-400 text-xs font-medium flex items-center gap-1 hover:text-cyan-300 transition-colors overflow-hidden"
                whileHover={{ x: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-xs">
                  {isExpanded ? "Less" : "More"}
                </span>
                <motion.span
                  className="relative z-10"
                  animate={{
                    rotate: isExpanded ? 180 : 0,
                    y: isHovered ? (isExpanded ? -1 : 1) : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ===================================
// TECHNOLOGY COMPONENT
// ===================================
const techStack = {
  frontend: [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Angular", icon: <PiCodeBold className="text-[#DD0031]" /> },
    { name: "Svelte", icon: <PiCodeBold className="text-[#FF3E00]" /> },
    { name: "Blazor", icon: <PiCodeBold className="text-[#512BD4]" /> },
    { name: "Flutter", icon: <SiTailwindcss className="text-[#02569B]" /> },
    { name: "Ionic", icon: <SiTailwindcss className="text-[#3880FF]" /> },
    { name: "jQuery", icon: <FaJsSquare className="text-[#0769AD]" /> },
    { name: "Vue.js", icon: <FaReact className="text-[#42b883]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTailwindcss className="text-[#3178c6]" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#38B2AC]" />,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Bootstrap", icon: <FaCss3Alt className="text-[#7952B3]" /> },
    { name: "Material UI", icon: <SiTailwindcss className="text-[#0081CB]" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "PHP", icon: <FaHtml5 className="text-[#777BB4]" /> },
    { name: "Laravel", icon: <FaHtml5 className="text-[#FF2D20]" /> },
    { name: "Symfony", icon: <FaHtml5 className="text-[#000000]" /> },
    { name: "Django", icon: <FaHtml5 className="text-[#092E20]" /> },
    { name: "Flask", icon: <FaHtml5 className="text-[#000000]" /> },
    { name: "Spring Boot", icon: <FaHtml5 className="text-[#6DB33F]" /> },
    { name: "Ruby on Rails", icon: <FaHtml5 className="text-[#CC0000]" /> },
    { name: "FastAPI", icon: <FaHtml5 className="text-[#009688]" /> },
    { name: "GraphQL", icon: <FaJsSquare className="text-[#E10098]" /> },
    { name: "REST APIs", icon: <FaJsSquare className="text-[#00A4EF]" /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    { name: "MySQL", icon: <FaJsSquare className="text-[#4479A1]" /> },
    { name: "Firebase", icon: <FaJsSquare className="text-[#FFCA28]" /> },
    { name: "SQLite", icon: <FaJsSquare className="text-[#003B57]" /> },
    { name: "Cassandra", icon: <FaJsSquare className="text-[#1287B1]" /> },
    { name: "DynamoDB", icon: <FaJsSquare className="text-[#4053D6]" /> },
  ],
  tools: [
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: "Docker", icon: <FaNodeJs className="text-[#2496ED]" /> },
    { name: "CI/CD", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "Agile/Scrum", icon: <LuBadge className="text-[#F24E1E]" /> },
    { name: "Jira", icon: <FaJsSquare className="text-[#2684FF]" /> },
    { name: "Postman", icon: <FaJsSquare className="text-[#FF6C37]" /> },
    { name: "ESLint", icon: <FaJsSquare className="text-[#4B32C3]" /> },
    { name: "Prettier", icon: <FaJsSquare className="text-[#F7B93E]" /> },
    { name: "VS Code", icon: <FaJsSquare className="text-[#007ACC]" /> },
    { name: "Linux", icon: <FaJsSquare className="text-[#FCC624]" /> },
    { name: "AWS", icon: <FaJsSquare className="text-[#FF9900]" /> },
    { name: "Azure", icon: <FaJsSquare className="text-[#0078D4]" /> },
    { name: "Google Cloud", icon: <FaJsSquare className="text-[#4285F4]" /> },
  ],
};

// ===================================
// LINE SHADOW TEXT COMPONENT
// ===================================
const LineShadowText = ({ children, shadowColor = "#00ffdc" }) => {
  return (
    <span
      className="relative inline-block"
      style={{
        "--shadow-color": shadowColor,
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute left-0 top-0 line-shadow-effect"
        style={{
          "--shadow-color": shadowColor,
        }}
        data-text={children}
      />
    </span>
  );
};

// ===================================
// EDUCATION DATA
// ===================================
const educationData = [
  {
    id: 1,
    degree: "Engineering Degree",
    institution:
      "Private Higher School of Technologies and Engineering – TEK-UP",
    duration: "10/2023 – 06/2026",
    location: "Ariana, Tunisia",
    description: [
      "Pursuing advanced studies in engineering with a focus on modern technologies",
      "Engaging in practical projects and research initiatives",
    ],
  },
  {
    id: 2,
    degree: "Bachelor's Degree",
    institution: "Higher Institute of Computer Science and Multimedia",
    specialization: "Computer Science and Multimedia",
    duration: "09/2020 – 06/2023",
    location: "Sfax, Tunisia",
    description: [
      "Specialized in Computer Science and Multimedia technologies",
      "Completed comprehensive coursework in software development and multimedia design",
    ],
  },
];

// ===================================
// EDUCATION CARD COMPONENT
// ===================================
const EducationCard = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-gradient-to-br from-indigo-900/80 to-slate-900/90 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
      whileHover={{ y: -2, borderColor: "rgba(139, 92, 246, 0.5)" }}
      initial={false}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {education.degree}
            </h3>
            <p className="text-purple-300 font-medium text-sm mb-1">
              {education.institution}
            </p>
            {education.specialization && (
              <p className="text-purple-200 text-xs mb-2">
                {education.specialization}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
              <span>{education.duration}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{education.location}</span>
            </div>
          </div>
          <div className="text-2xl text-purple-400">
            <FaGraduationCap />
          </div>
        </div>

        <div className="space-y-2 mt-3">
          {education.description
            .slice(0, isExpanded ? education.description.length : 1)
            .map((item, i) => (
              <motion.p
                key={i}
                className="text-slate-300 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.p>
            ))}

          {education.description.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 text-xs font-medium flex items-center gap-1 hover:text-purple-300 transition-colors mt-2"
            >
              {isExpanded ? "Show Less" : "Read More"}
              <motion.span
                animate={{
                  rotate: isExpanded ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ===================================
// MAIN COMPONENT
// ===================================
function ProjectSection() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [projectCategory, setProjectCategory] = useState("Web/Apps");
  const [previewCertificate, setPreviewCertificate] = useState(null);
  const [visibleCertificatesCount, setVisibleCertificatesCount] = useState(6);
  const INITIAL_CERTIFICATES_TO_SHOW = 6;
  const { hideNavbar, showNavbar } = useNavbar();

  useEffect(() => {
    if (previewCertificate) {
      hideNavbar();
    } else {
      showNavbar();
    }
  }, [previewCertificate, hideNavbar, showNavbar]);

  useEffect(() => {
    return () => {
      showNavbar();
    };
  }, [showNavbar]);

  const tabs = [
    {
      id: "Experience",
      label: "Experience",
      icon: <FaBriefcase className="text-[1.5em] mb-1" />,
    },
    {
      id: "Education",
      label: "Education",
      icon: <FaGraduationCap className="text-[1.5em] mb-1" />,
    },
    {
      id: "Projects",
      label: "Projects",
      icon: <PiCodeBold className="text-[1.7em] mb-1" />,
    },
    {
      id: "Certificate",
      label: "Certificates",
      icon: <LuBadge className="text-[1.7em] mb-1" />,
    },
    {
      id: "Tech Stack",
      label: "Tech Stack",
      icon: <LiaLayerGroupSolid className="text-[1.7em] mb-1" />,
    },
  ];

  const filteredProjects = dummyProjects.filter(
    (p) => p.category === projectCategory
  );

  // Handler for Show More/Less buttons
  const handleShowMore = () => {
    setVisibleCertificatesCount(userCertificates.length);
  };

  const handleShowLess = () => {
    setVisibleCertificatesCount(INITIAL_CERTIFICATES_TO_SHOW);
  };

  return (
    <section id="project" className="py-20">
      <style>{`
        @keyframes line-shadow-anim { 0% { background-position: 0 0; } 100% { background-position: 100% 100%; } }
        .line-shadow-effect::after { content: attr(data-text); position: absolute; z-index: -1; left: 0.04em; top: 0.04em; background-image: linear-gradient(45deg, transparent 45%, var(--shadow-color) 45%, var(--shadow-color) 55%, transparent 0); background-size: 0.06em 0.06em; -webkit-background-clip: text; background-clip: text; color: transparent; animation: line-shadow-anim 30s linear infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold font-moderniz">
          <span style={{ color: "#00ffdc" }}>
            <LineShadowText shadowColor="#00b3a4">PORTFOLIO</LineShadowText>
          </span>{" "}
          <span style={{ color: "#fff" }}>
            <LineShadowText shadowColor="#bbbbbb">SHOWCASE</LineShadowText>
          </span>
        </h2>
      </motion.div>

      <div className="w-full">
        <div className="flex justify-center mb-12">
          <motion.div
            layout
            className="inline-flex w-full max-w-4xl rounded-3xl p-2 shadow-lg border border-slate-800 bg-gradient-to-r from-[#101624] via-[#0a1627] to-[#0a223a] backdrop-blur-md"
            style={{
              background:
                "linear-gradient(90deg, #101624 0%, #0a1627 50%, #0a223a 100%)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-1 flex-col items-center justify-center px-2 py-7 rounded-2xl font-semibold text-base transition-colors duration-300 outline-none ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-400 hover:text-cyan-300"
                }`}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ zIndex: 1, minWidth: 0 }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-0 bg-gradient-to-br from-[#0a223a] to-[#101624] rounded-2xl"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    style={{ zIndex: -1, opacity: 0.96 }}
                  />
                )}
                <span className="relative z-10 flex flex-col items-center gap-2">
                  {tab.icon}
                  <span className="font-bold">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div
          className="rounded-3xl p-0 md:p-6 shadow-xl border border-slate-800/60 mx-auto max-w-7xl bg-clip-padding"
          style={{
            background: "rgba(17, 24, 39, 0.55)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-10"
            >
              {activeTab === "Projects" && (
                <div className="space-y-8">
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button
                      key={"All"}
                      onClick={() => setProjectCategory(null)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        !projectCategory
                          ? "bg-cyan-500 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      All
                    </button>
                    <button
                      key={"Web/Apps"}
                      onClick={() => setProjectCategory("Web/Apps")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        projectCategory === "Web/Apps"
                          ? "bg-cyan-500 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      Web/Apps
                    </button>
                    <button
                      key={"UI/UX"}
                      onClick={() => setProjectCategory("UI/UX")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        projectCategory === "UI/UX"
                          ? "bg-cyan-500 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      UI/UX
                    </button>
                    <button
                      key={"3D/Design"}
                      onClick={() => setProjectCategory("3D/Design")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                        projectCategory === "3D/Design"
                          ? "bg-cyan-500 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      3D/Design
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(projectCategory ? filteredProjects : dummyProjects).map(
                      (project, index) => (
                        <ProjectCard key={index} project={project} />
                      )
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Experience" && (
                <div className="space-y-8">
                  <div className="max-w-4xl mx-auto space-y-6">
                    {experiences.map((experience, index) => (
                      <motion.div
                        key={experience.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <ExperienceCard experience={experience} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Education" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {educationData.map((education, index) => (
                      <motion.div
                        key={education.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <EducationCard education={education} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "Certificate" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <AnimatePresence>
                      {userCertificates
                        .slice(0, visibleCertificatesCount)
                        .map((cert, i) => (
                          <CertificateCard
                            key={i}
                            cert={cert}
                            onClick={setPreviewCertificate}
                          />
                        ))}
                    </AnimatePresence>
                  </div>
                  {userCertificates.length > INITIAL_CERTIFICATES_TO_SHOW && (
                    <div className="flex justify-center mt-12">
                      {visibleCertificatesCount < userCertificates.length ? (
                        <motion.button
                          onClick={handleShowMore}
                          className="group bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Show More
                        </motion.button>
                      ) : (
                        <motion.button
                          onClick={handleShowLess}
                          className="group bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Show Less
                        </motion.button>
                      )}
                    </div>
                  )}
                </div>
              )}
              {activeTab === "Tech Stack" && (
                <div className="max-w-4xl mx-auto space-y-8">
                  {Object.entries(techStack).map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="text-xl font-bold text-cyan-300 capitalize mb-4 border-b-2 border-slate-800 pb-2">
                        {category}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {techs.map((tech, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 transition-all duration-300 hover:bg-slate-800/50 hover:border-cyan-500/30"
                          >
                            <div className="text-4xl">{tech.icon}</div>
                            <p className="text-sm text-slate-300">
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {previewCertificate && (
          <CertificatePreviewModal
            certificate={previewCertificate}
            onClose={() => setPreviewCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectSection;
