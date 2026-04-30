"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/loader/Loader";
import BackgroundParticles from "@/components/particales/BackgroundParticles";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* GLOBAL CUSTOM CURSOR */}
      <CustomCursor />

      {/* LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999]"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND PARTICLES (AFTER LOADER ONLY) */}
      {!loading && <BackgroundParticles />}

      {/* PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
