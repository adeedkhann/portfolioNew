"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 120);
    }, 900 + Math.random() * 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">

      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* RADIAL GLOW */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,165,0,0.35), rgba(0,0,0,0.9) 65%)",
        }}
      />

      {/* FLASH */}
      {flash && (
        <div className="absolute inset-0 bg-yellow-300 opacity-[0.08]" />
      )}

      {/* CENTER WRAPPER */}
      <div className="relative flex flex-col items-center justify-center">

        {/* DOT PARTICLES */}
        <div className="absolute inset-0">
          {Array.from({ length: 35 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-[3px] h-[3px] rounded-full bg-yellow-400/70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* OUTER RING */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <div className="w-[260px] h-[260px] rounded-full border border-yellow-400/20" />
        </motion.div>

        {/* CORE */}
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-yellow-400 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
        />

        {/* TEXT */}
        <motion.p
          className="mt-14 text-sm tracking-[0.45em] text-yellow-400 uppercase"
          animate={{ opacity: [0.4, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Charging Energy
        </motion.p>
      </div>
    </div>
  );
}
