"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/maulana-akbar-ramadhan",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  {
    icon: FaEnvelope,
    href: "mailto:maulana.akbar@example.com",
    label: "Email",
  },
];

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#journey" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-dark-950 border-t border-dark-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Maulana Akbar</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Frontend Developer & UI/UX Designer passionate about creating
              beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-linear-to-br hover:from-primary-500 hover:to-secondary-500 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-primary-400">▹</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Email</p>
                <a
                  href="mailto:maulana.akbar@example.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  maulana.akbar@example.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Location</p>
                <p className="text-white">Bojongsong, Bandung, West Java</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Availability</p>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2024 Maulana Akbar Ramadhan. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>{" "}
            using Next.js & Tailwind CSS
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-linear-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
