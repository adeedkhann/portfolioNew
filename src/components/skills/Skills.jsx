"use client";

import { motion } from "framer-motion";
import InfiniteLogoStrip from "@/components/ui/InfiniteLogoStrip";
import {
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3,
  SiC, SiCplusplus, SiGit, SiGithub, SiBootstrap,
  SiTailwindcss, SiPython, SiNodedotjs, SiExpress,
  SiMongodb, SiPostman, SiDaisyui, SiEjs,
  SiJsonwebtokens, SiNodemon,
} from "react-icons/si";

// Split into 2 balanced rows
const ROW_1 = [
  { name: "React",      icon: SiReact,        color: "#61DAFB" },
  { name: "Next.js",    icon: SiNextdotjs,    color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript,   color: "#F7DF1E" },
  { name: "Python",     icon: SiPython,       color: "#3776AB" },
  { name: "Node.js",    icon: SiNodedotjs,    color: "#339933" },
  { name: "Express.js", icon: SiExpress,      color: "#ffffff" },
  { name: "MongoDB",    icon: SiMongodb,      color: "#47A248" },
  { name: "HTML",       icon: SiHtml5,        color: "#E34F26" },
  { name: "CSS",        icon: SiCss3,         color: "#1572B6" },
  { name: "Tailwind",   icon: SiTailwindcss,  color: "#38BDF8" },
];

const ROW_2 = [
  { name: "C",          icon: SiC,            color: "#A8B9CC" },
  { name: "C++",        icon: SiCplusplus,    color: "#00599C" },
  { name: "Git",        icon: SiGit,          color: "#F05032" },
  { name: "GitHub",     icon: SiGithub,       color: "#ffffff" },
  { name: "Bootstrap",  icon: SiBootstrap,    color: "#7952B3" },
  { name: "DaisyUI",    icon: SiDaisyui,      color: "#5A0EF8" },
  { name: "Postman",    icon: SiPostman,      color: "#FF6C37" },
  { name: "EJS",        icon: SiEjs,          color: "#B4CA65" },
  { name: "JWT",        icon: SiJsonwebtokens, color: "#ffffff" },
  { name: "Nodemon",    icon: SiNodemon,      color: "#76D04B" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center px-6"
        >
          Skills &amp; <span className="text-orange-500">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-400 mt-4 mb-16 max-w-xl mx-auto text-center px-6"
        >
          Technologies I use to build modern, responsive, and scalable web applications.
        </motion.p>

        {/* LOGO LOOP STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <InfiniteLogoStrip rows={[ROW_1, ROW_2]} speed={28} />
        </motion.div>
      </div>
    </section>
  );
}
