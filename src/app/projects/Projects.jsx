"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import CircularGallery from "@/components/ui/CircularGallery/CircularGallery";

const projects = [
  {
    id: 1,
    title: "TalentLoop - A redefined job portal",
    shortTitle: "TalentLoop",
    description:
      "​TalentLoop is a robust, full-stack recruitment ecosystem designed to streamline the hiring process for both recruiters and job seekers. Built with the MERN stack (MongoDB, Express, React, Node.js), it emphasizes scalability, security, and a seamless user experience.​The platform solves the complexity of modern hiring by providing a dual-interface system. Job Seekers can manage professional profiles, upload resumes, and track application statuses in real-time, while Recruiters can manage company branding, post job openings, and review applicants through a dedicated dashboard.",
    image: "/projects/talentloop4.png",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",

    ],
    liveUrl: "https://talentloop-psi.vercel.app",
    codeUrl: "https://github.com/adeedkhann/jobportal",
  },
  {
    id: 2,
    title: "Game Recommender - Ml model based smart game recommender",
    shortTitle: "Game Recommender",
    description:
      "GameRecommeder is an intuitive web-based platform designed to help gamers discover their next favorite title with ease. Built using React, this application provides a sleek and responsive user interface for navigating game suggestions. Originally developed as the final capstone project for the Machine Learning Center of Excellence (MLCoE), it serves as a sophisticated bridge between data-driven recommendation logic and a seamless front-end experience, making game discovery both efficient and engaging",
    image: "/projects/gamerecom.png",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt",

    ],
    liveUrl: "https://game-recommeder.vercel.app",
    codeUrl: "https://github.com/adeedkhann/GameRecommeder.git",
  },
  {
    id: 3,
    title: "Trinity - Multi LLM's at one place",
    shortTitle: "Trinity",
    description:
      "Trinity is a modern web application designed to provide a unified interface for interacting with and comparing responses from three world-class Large Language Models simultaneously: Google Gemini, Meta Llama, and Alibaba Qwen.",
    image: "/projects/trinity2.png",
    tech: ["React", "javaScript", "Tailwind", "Gemini api" , "Groq Api" , "Llama Api"],
    liveUrl: "https://trinity-by-adeed.vercel.app/",
    codeUrl: "https://github.com/adeedkhann/trinity.git",
  },
  {
    id: 4,
    title: "Velvet & vines - Premium Ecommerce Store ",
    shortTitle: "velvet & Vines",
    description:
      "Velvet-Vines is a premium, responsive web application built with React, designed to deliver a luxurious and seamless digital storefront experience. Combining a sophisticated aesthetic with high-performance functionality, the platform offers a refined interface tailored for high-end retail or boutique service environments. By leveraging React's component-based architecture, Velvet-Vines ensures a fluid user journey, featuring elegant navigation and a modern, polished design that captures the essence of luxury and style.",
    image: "/projects/vnv2.png",
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "LocalStorage",
      "Platzi Api"

    ],
    liveUrl: "https://velvet-vines-kappa.vercel.app",
    codeUrl: "https://github.com/adeedkhann/Velvet-Vines",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // 🔥 RESPONSIVE LOGIC
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const CARD_WIDTH = 360;
  const MAX_INDEX = Math.max(projects.length - cardsPerView, 0);

  return (
    <section id="projects" className="py-28 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Featured <span className="text-orange-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center mt-4 mb-16"
        >
          A showcase of my selected work
        </motion.p>

        {/* CIRCULAR GALLERY */}
        <div className="w-full h-[600px] mt-10 rounded-3xl overflow-hidden border border-white/10 bg-black/20 shadow-[0_0_40px_rgba(255,138,0,0.1)] relative">
          <CircularGallery
            items={projects.map((p) => ({ image: p.image, text: p.shortTitle }))}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 22px Inter, sans-serif"
          />
          {/* Instructions overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 font-medium tracking-widest text-xs uppercase pointer-events-none bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            Drag to explore
          </div>
        </div>

        {/* PROJECT DETAILS GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl overflow-hidden hover:border-orange-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,138,0,0.15)] transition-all duration-500 p-7 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300 drop-shadow-md">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300/80 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-semibold mt-auto pt-4 border-t border-white/5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 text-white flex items-center justify-center gap-2 hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,138,0,0.4)] transition-all duration-300"
                >
                  <ExternalLink size={16} /> Visit App
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:text-orange-400 transition-all duration-300"
                >
                  <Github size={16} /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
