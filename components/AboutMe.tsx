"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, DesktopIcon, BarChartIcon, CalendarIcon, CheckIcon } from "@radix-ui/react-icons";
import { workExperience } from "../data/portfolioData";

const AboutMe = () => {
  const skills = [
    {
      icon: CodeIcon,
      title: "Development",
      description: "Full-stack web applications with modern technologies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: DesktopIcon,
      title: "Design",
      description: "Creative visual solutions and user experiences",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChartIcon,
      title: "Organization",
      description: "Streamlined operations and administrative excellence",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden scroll-mt-32">


      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Text Section - Left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light text-justify">
              I am a{" "}
              <span className="text-blue-400 font-semibold">full-stack developer</span>,{" "}
              <span className="text-purple-400 font-semibold">graphic designer</span>, and{" "}
              <span className="text-green-400 font-semibold">virtual assistant</span>{" "}
              who brings digital concepts to life. With a unique blend of coding expertise, 
              creative design flair, and meticulous administrative support, I build robust 
              web applications, craft compelling visuals, and streamline operations, ensuring 
              every project is functional, beautiful, and efficient.
            </p>
          </motion.div>

          {/* Image Section - Right */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src="rollyparedes.jpg "
                alt="Rolly Paredes"
                className="relative w-80 h-96 rounded-3xl border-2 border-slate-600/50 object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-slate-600/50">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <motion.div
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.gradient} p-4 mb-4 shadow-lg`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <skill.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {skill.description}
                  </p>
                </motion.div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.2), transparent)`,
                    padding: "1px"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {workExperience.map((work, index) => (
              <motion.div
                key={work.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Header Section */}
                <div className="mb-8 pb-6 border-b border-slate-700/50">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                    {work.title}
                  </h4>
                  <p className="text-lg text-blue-400 font-semibold mb-3">
                    {work.company}
                  </p>
                  <div className="flex items-center gap-2 text-slate-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{work.dates}</span>
                  </div>
                </div>

                {/* Responsibilities Section */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-3">
                    {work.responsibilities.map((responsibility, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-3 text-slate-300 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        <CheckIcon className="w-4 h-4 text-green-400 mt-1 flex-shrink-0 group-hover/item:text-green-300 transition-colors" />
                        <span className="text-sm leading-relaxed group-hover/item:text-slate-200 transition-colors">
                          {responsibility}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tools Section */}
                <div>
                  <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Tools & Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {work.tools.map((tool, toolIdx) => (
                      <motion.span
                        key={tool}
                        className="bg-gradient-to-r from-slate-700/60 to-slate-600/60 border border-slate-600/50 text-slate-300 px-3 py-2 rounded-lg text-xs font-medium hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + toolIdx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;