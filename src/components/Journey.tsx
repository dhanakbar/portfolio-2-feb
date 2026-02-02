"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "PaDi UMKM",
    position: "Frontend Engineer",
    location: "South Jakarta, Indonesia",
    period: "Oct 2023 - Now",
    description:
      "The PaDi UMKM is a platform created by Telkom Indonesia which was initiated by the Ministry of BUMN. This platform was formed to bring together BUMN with the hope of optimizing, accelerating and encouraging the efficiency of BUMN shopping transactions with MSMEs.",
    achievements: [
      "Employed an extensive array of technologies, including JavaScript, TypeScript, Tailwind, React.js, Redux, Xendit, and others, to facilitate the seamless operation of the project.",
      "Applied the Scrum framework meticulously to oversee project management, ensuring not only the efficiency of processes but also fostering a collaborative environment conducive to successful outcomes.",
      "Executed a strategic removal of checkout validation tailored specifically for a designated user, aiming to refine the user experience and streamline the purchasing process.",
      "Addressed a critical issue by rectifying the bug associated with the duplication of the Modal component, thus enhancing the overall stability and performance of the application.",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "PaDi UMKM",
    position: "Frontend Web Developer Internship",
    location: "South Jakarta, Indonesia",
    period: "Feb 2023 - Aug 2023",
    description:
      "The PaDi UMKM is a platform created by Telkom Indonesia which was initiated by the Ministry of BUMN. This platform was formed to bring together BUMN with the hope of optimizing, accelerating and encouraging the efficiency of BUMN shopping transactions with MSMEs.",
    achievements: [
      "Utilized JavaScript, TypeScript, Tailwind, React.js, Redux, Xendit, and other technologies for project development.",
      "Employed the Scrum framework to effectively manage the project, ensuring streamlined processes and collaboration.",
      "Updated the service module with Feedback, Reducing bugs, and communicating with backend for project efficiency.",
      "Expanded functionality by adding a new feature to access certificates of buyer groups, adjusting the fixed width of pages, incorporating a URL field for active product section on the detail product page.",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "DBT Telkom",
    position: "Frontend Developer (Learning Based)",
    location: "Jakarta, Indonesia",
    period: "Feb 2022 - Jan 2023",
    description:
      "Digital Business and Technology (DBT) Telkom is a certified internship program held by Telkom Indonesia. DBT Telkom collaborates with Telkom University to create new talents for the students.",
    achievements: [
      "Proficiently learned HTML, CSS (Tailwind), JavaScript, Redux, ReactJS, and NextJS through dedicated study and practice.",
      "Actively participated in a collaborative team effort to develop a frontend web project as a comprehensive case study during the final program.",
      "Demonstrated strong contribution to the completion of group tasks focused on frontend development, highlighting effective teamwork and adaptability.",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    company: "Telkom University",
    position: "Lecturer Assistant of Web Programming",
    location: "Bandung, Indonesia",
    period: "Sep 2022 - Jan 2023",
    description:
      "Telkom University is a private university that plays an active role in the development of technology, science and technology-based arts.",
    achievements: [
      "Collaborated with major Software Engineering faculty in the university to enhance and improve task questions for students in Web Programming courses, ensuring clarity, relevance, and effectiveness in assessing learning outcomes.",
      "Provided one-on-one guidance and support to students, addressing questions and challenges related to Web Programming concepts, coding, and project requirements.",
      "Evaluated and provided constructive feedback on student assignments, projects, and assessments, helping them to improve their understanding and skills in Web Programming.",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    company: "BAZNAS",
    position: "UI/UX Designer Internship",
    location: "East Jakarta, Indonesia",
    period: "Jun 2022 - Aug 2022",
    description:
      "BAZNAS is a non-structural government institution that receives and distributes zakat & infaq from muzaki to mustahik in need.",
    achievements: [
      "Researched user needs based on business goals.",
      "Implemented Design Thinking to process user needs and created designs based on user requirements.",
      "Improved Baznas V2 web application and redesigned it using the principles of Design Thinking.",
      "Tested design results through Usability Test and Single Ease Question methodologies.",
    ],
    color: "from-teal-500 to-cyan-500",
  },
  {
    company: "Skilvul",
    position: "UI/UX Designer Internship",
    location: "South Jakarta, Indonesia",
    period: "Sep 2021 - Dec 2021",
    description:
      'Skilvul is a technology education platform that provides digital skills lesson content using the "blended-learning" method in online and offline form.',
    achievements: [
      "Demonstrated proficiency in utilizing Figma for research documentation and designing.",
      "Executed tasks related to the theory of UI/UX.",
      "Empathized with stakeholders through real-world case studies.",
      "Implemented the Design Thinking process for effective problem-solving.",
      "Created web designs with a focus on education using Figma.",
    ],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Journey() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="journey"
      className="py-20 bg-dark-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
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
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional experiences and growth in the tech
            industry
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-linear-to-b from-primary-500 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex items-start pt-2"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-linear-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                  >
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="flex-1 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <p
                        className={`text-xl font-semibold bg-linear-to-r ${exp.color} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-primary-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-3 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1 }}
                        >
                          <span className="text-primary-400 mt-1">▹</span>
                          <span className="flex-1">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
