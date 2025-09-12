import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          👨‍💻 About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <motion.img
            src="https://via.placeholder.com/400x400?text=Your+Photo"
            alt="Manjeet Kumar"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I’m <span className="text-blue-600">Manjeet Kumar</span> 👋
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              I am a <strong>Computer Science student</strong> with a passion for
              building modern, interactive, and scalable web applications.
              Skilled in <strong>Python, JavaScript, and Frontend Development</strong>,
              currently exploring <strong>Data Science</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My goal is to secure a role where I can apply my knowledge,
              contribute to impactful projects, and keep growing as a
              developer. 🚀
            </p>

            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
