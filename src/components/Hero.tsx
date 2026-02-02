"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-dark-950 via-dark-900 to-dark-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-4">
              Frontend Developer & UI/UX Designer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Maulana Akbar Ramadhan</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            A passionate Frontend Developer and UI/UX Designer with expertise in
            building beautiful, responsive web applications. I transform ideas
            into engaging digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-linear-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#journey"
              className="px-8 py-4 bg-dark-800 text-white rounded-lg font-semibold border border-dark-700 hover:border-primary-500 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/maulana-akbar-ramadhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:maulana.akbar@example.com"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope size={32} />
            </motion.a>
          </motion.div>
        </div>

        {/* Floating scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          variants={floatVariants}
          animate="animate"
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
