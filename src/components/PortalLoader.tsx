"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PortalLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const visited = localStorage.getItem("hasVisitedPortfolio");

    if (visited) {
      setIsLoading(false);
      setHasVisited(true);
    } else {
      // Show animation for first-time visitors
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasVisitedPortfolio", "true");
      }, 3500); // Total animation duration

      return () => clearTimeout(timer);
    }
  }, []);

  if (hasVisited) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-dark-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Portal Background Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 1.5, 1.5], rotate: 360 }}
              transition={{ duration: 2, times: [0, 0.5, 1] }}
            >
              <div className="w-96 h-96 rounded-full bg-linear-to-r from-primary-500/30 to-secondary-500/30 blur-3xl" />
            </motion.div>
          </div>

          {/* Bouncing Ball */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 1, 1],
              y: [0, -50, 0, -30, 0, -15, 0],
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
              ease: "easeOut",
            }}
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                  "0 0 60px rgba(217, 70, 239, 0.8)",
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Expanding Circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 0, 20],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 2,
              times: [0, 0.3, 1],
              ease: "easeOut",
            }}
          >
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-primary-500 to-secondary-500" />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
          >
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold gradient-text">Welcome</h2>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
