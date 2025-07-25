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
  <section id="skills" className="relative max-w-7xl mx-auto px-6 py-16 overflow-hidden scroll-mt-32">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-4 mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CodeIcon className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
        </motion.div>
        <motion.p
          className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical expertise and creative abilities across multiple disciplines
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative"
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.03, 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated background glow */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-3xl blur-xl`}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            />
            
            <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl h-full">
              {/* Header */}
              <motion.div
                className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700/50"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </motion.div>
              
              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="group/skill relative overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.4 }}
                  >
                    <motion.div
                      className="flex items-center gap-3 p-4 bg-slate-700/40 rounded-xl border border-slate-600/30 hover:bg-slate-600/40 hover:border-slate-500/50 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 8, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: skillIndex * 0.2
                        }}
                      />
                      <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors flex-1">
                        {skill}
                      </span>
                      <motion.div
                        className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity`}
                        animate={{
                          scale: [1, 1.5, 1]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                    
                    {/* Hover effect line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
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