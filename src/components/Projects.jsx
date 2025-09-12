import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Financial Website",
    description: "A full-stack financial platform using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
    github: "https://github.com/Manjeetsingh31/financial-website",
    demo: "https://yourdomain.com",
    image: "https://via.placeholder.com/400x250?text=Financial+Website",
  },
  {
    title: "Quiz & Certificate Platform",
    description: "A platform where users play programming quizzes and earn certificates.",
    github: "https://github.com/Manjeetsingh31/quiz-platform",
    demo: "https://yourdomain.com",
    image: "https://via.placeholder.com/400x250?text=Quiz+Platform",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React, TailwindCSS, and Framer Motion animations.",
    github: "https://github.com/Manjeetsingh31/My-Portfolio",
    demo: "https://yourdomain.com",
    image: "https://via.placeholder.com/400x250?text=Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          🚀 My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
