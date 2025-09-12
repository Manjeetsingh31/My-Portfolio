import React from "react";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: <FaPython size={40} className="text-yellow-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "Databases", icon: <FaDatabase size={40} className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">⚡ Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-yellow-500/50 transition-transform cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
