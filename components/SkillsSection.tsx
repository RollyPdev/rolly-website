"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, MagicWandIcon, PersonIcon } from "@radix-ui/react-icons";

const skillCategories = [
  {
    title: "Development",
    icon: CodeIcon,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "MongoDB",
      "PostgreSQL",
    ]
  },
  {
    title: "Design",
    icon: MagicWandIcon,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UI/UX Principles",
      "Typography",
      "Color Theory",
    ]
  },
  {
    title: "Virtual Assistant",
    icon: PersonIcon,
    color: "from-green-500 to-emerald-500",
    skills: [
      "Administrative Support",
      "Data Entry",
      "Email Management",
      "Calendar Management",
      "Research",
      "Google Workspace",
      "Asana",
      "Trello",
    ]
  }
];

const SkillsSection = () => (
  <section id="skills" className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden scroll-mt-32">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          My Skills
        </span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:bg-slate-600/30 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover:scale-125 transition-transform`} />
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SkillsSection;