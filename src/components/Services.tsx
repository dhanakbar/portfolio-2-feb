"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobile,
  FaRocket,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications using React, Next.js, TypeScript, and modern web technologies.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces with a focus on user experience and design thinking principles.",
    skills: ["Figma", "Design Thinking", "Prototyping", "Usability Testing"],
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications using Flutter and React Native with seamless user experiences.",
    skills: ["Flutter", "React Native", "Mobile UI", "App Optimization"],
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and best practices to deliver exceptional user experiences.",
    skills: ["Web Vitals", "SEO", "Code Splitting", "Lazy Loading"],
  },
  {
    icon: FaDatabase,
    title: "State Management",
    description:
      "Implementing efficient state management solutions using Redux, Zustand, and modern React patterns.",
    skills: ["Redux", "Context API", "Zustand", "React Query"],
  },
  {
    icon: FaUsers,
    title: "Collaboration & Agile",
    description:
      "Working effectively in teams using Scrum methodology, Git workflows, and collaborative development practices.",
    skills: ["Scrum", "Git", "Code Review", "Team Leadership"],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-linear-to-b from-dark-950 to-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skills and expertise to bring your digital projects to
            life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                <motion.div
                  className="w-16 h-16 bg-linear-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white text-2xl" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
