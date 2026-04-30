"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Gamepad, GamepadDirectional, Music, Terminal } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import VariableProximity from "@/components/ui/VariableProximity";

export default function About() {
  const containerRef = useRef(null);

  return (
    <section id="about" className="py-24 px-6 scroll-mt-28" ref={containerRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* VariableProximity Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cursor-default select-none">
            <VariableProximity
              label="About"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={140}
              falloff="exponential"
              className="text-white"
            />
            {" "}
            <VariableProximity
              label="Me"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={containerRef}
              radius={140}
              falloff="exponential"
              className="text-orange-500"
            />
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
  I am a{" "}
  <span className="text-white font-medium">passionate MERN Stack Developer</span>{" "}
  with a strong focus on creating{" "}
  <span className="text-orange-500">
    clean, responsive, and highly scalable web applications
  </span>
  . I enjoy transforming ideas into real-world software by combining
  interactive frontend interfaces with powerful backend architectures using{" "}
  <span className="text-white font-medium">React, Node.js, Express, and MongoDB</span>.
</p>

<p className="text-zinc-400 leading-relaxed mb-6">
  I love pushing my boundaries by exploring new paradigms, from 3D visualizations
  with <span className="text-white font-medium">Three.js</span> and Next.js to secure 
  authentication via JWT and OAuth. I also regularly practice{" "}
  <span className="text-orange-500">Data Structures &amp; Algorithms</span>{" "}
  using <span className="text-white font-medium">C and C++</span> to
  strengthen my problem-solving mindset. I have solved{" "}
  <span className="text-white font-medium">40+ LeetCode problems</span>
  , which has helped me develop a structured and optimized approach to writing code.
</p>

<p className="text-zinc-400 leading-relaxed mb-10">
  Beyond technology, I am deeply passionate about{" "}
  <span className="text-orange-500">competitive gaming</span> and enjoy playing 
  titles like Tekken 8 and Valorant. Gaming plays an important role in my life — it 
  helps me stay strategic, disciplined, and sharp under pressure.
</p>

          <a
            href="/projects/adeedresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-7 py-3
              bg-orange-500 text-white text-sm
              rounded-3xl
              transition-all duration-300
              hover:bg-orange-400
              hover:shadow-[0_0_30px_rgba(255,138,0,0.45)]
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* PROJECTS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center transition"
          >
            <Code2 className="mx-auto mb-4 text-orange-500" size={26} />
            <h3 className="text-3xl font-bold text-white">
              <CountUp to={10} duration={1.8} suffix="+" />
            </h3>
            <p className="text-zinc-400 text-sm mt-1">Projects Built</p>
          </motion.div>

          {/* LEETCODE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center transition"
          >
            <Terminal className="mx-auto mb-4 text-orange-500" size={26} />
            <h3 className="text-3xl font-bold text-white">
              <CountUp to={40} duration={2} suffix="+" />
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              LeetCode Problems Solved
            </p>
          </motion.div>

          {/* MUSIC */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center transition"
          >
            <Gamepad className="mx-auto mb-4 text-orange-500" size={26} />
            <h3 className="text-xl font-semibold text-white">Gamer</h3>
            <p className="text-zinc-400 text-sm mt-1">Learning From them </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
