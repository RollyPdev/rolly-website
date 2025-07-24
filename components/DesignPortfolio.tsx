"use client";
import React from "react";
import { motion } from "framer-motion";
import { MagicWandIcon, ColorWheelIcon, ImageIcon } from "@radix-ui/react-icons";
import { designPieces } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const DesignPortfolio = () => {
  return (
    <section id="design-portfolio" className="relative max-w-7xl mx-auto px-6 py-16 overflow-hidden scroll-mt-32">


      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <MagicWandIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Design Portfolio
              </span>
            </h2>
          </div>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Visual storytelling through creative design. From brand identity to digital art, 
            each piece is crafted with attention to detail and artistic vision.
          </motion.p>
        </motion.div>

        {/* Design Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { icon: ColorWheelIcon, label: "Brand Identity", count: "12+", color: "from-purple-500 to-pink-500" },
            { icon: ImageIcon, label: "Digital Art", count: "8+", color: "from-pink-500 to-purple-500" },
            { icon: MagicWandIcon, label: "UI/UX Design", count: "6+", color: "from-purple-600 to-pink-600" },
          ].map((category, index) => (
            <motion.div
              key={category.label}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center shadow-xl group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-100 mb-2">{category.count}</div>
              <div className="text-slate-400 font-medium">{category.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Design Process */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 mb-16 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8 text-center">My Design Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Research", desc: "Understanding your brand and audience" },
              { step: "02", title: "Concept", desc: "Ideation and creative exploration" },
              { step: "03", title: "Design", desc: "Bringing concepts to visual reality" },
              { step: "04", title: "Refine", desc: "Perfecting every detail" },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-purple-400">{process.step}</span>
                </div>
                <h4 className="font-semibold text-slate-200 mb-2">{process.title}</h4>
                <p className="text-sm text-slate-400">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
        >
          {designPieces.map((piece, index) => (
            <motion.div
              key={piece.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={{ ...piece, type: "design" }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Need Creative Design Solutions?
            </h3>
            <p className="text-slate-300 mb-6">
              Let&apos;s create something beautiful together. From concept to completion, I&apos;ll help bring your vision to life.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignPortfolio;