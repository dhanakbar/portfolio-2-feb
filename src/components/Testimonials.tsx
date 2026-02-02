"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Senior Product Manager",
    company: "PaDi UMKM",
    image: "/testimonials/avatar1.jpg",
    rating: 5,
    text: "Maulana is an exceptional frontend developer with a keen eye for design. His ability to transform complex requirements into intuitive user interfaces is remarkable. He consistently delivers high-quality work and is a valuable team player.",
  },
  {
    name: "Ahmad Rizki",
    position: "Tech Lead",
    company: "Telkom Indonesia",
    image: "/testimonials/avatar2.jpg",
    rating: 5,
    text: "Working with Maulana has been a pleasure. His expertise in React and TypeScript, combined with his strong understanding of UI/UX principles, makes him stand out. He's always willing to help teammates and share his knowledge.",
  },
  {
    name: "Dr. Budi Santoso",
    position: "Software Engineering Lecturer",
    company: "Telkom University",
    image: "/testimonials/avatar3.jpg",
    rating: 5,
    text: "As a lecturer assistant, Maulana demonstrated excellent teaching skills and deep understanding of web programming concepts. He was patient with students and always provided constructive feedback that helped them improve.",
  },
  {
    name: "Lisa Chen",
    position: "UI/UX Design Lead",
    company: "BAZNAS",
    image: "/testimonials/avatar4.jpg",
    rating: 5,
    text: "Maulana's design thinking approach and proficiency in Figma impressed our entire team. He conducted thorough user research and created designs that significantly improved our user experience metrics.",
  },
  {
    name: "Michael Anderson",
    position: "Project Manager",
    company: "DBT Telkom",
    image: "/testimonials/avatar5.jpg",
    rating: 5,
    text: "His dedication to learning and applying new technologies is commendable. Maulana quickly mastered our tech stack and contributed meaningfully to our frontend architecture. A true professional.",
  },
  {
    name: "Dewi Kartika",
    position: "Scrum Master",
    company: "Skilvul",
    image: "/testimonials/avatar6.jpg",
    rating: 5,
    text: "Maulana excels in agile environments. His communication skills and ability to collaborate effectively made our sprints more productive. He's proactive in identifying and solving problems.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-linear-to-b from-dark-900 to-dark-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
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
            <span className="gradient-text">What People Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Testimonials from colleagues and mentors I&apos;ve had the pleasure
            of working with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`h-full bg-dark-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-primary-500 shadow-xl shadow-primary-500/20"
                    : "border-dark-700 hover:border-primary-500/50"
                }`}
              >
                {/* Quote icon */}
                <motion.div
                  className="text-primary-400 mb-4"
                  animate={activeIndex === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteLeft size={32} />
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <FaStar className="text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-dark-700">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-primary-400 text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation dots */}
        <motion.div
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary-500 w-8"
                  : "bg-dark-700 hover:bg-primary-400"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
