"use client";
import React from "react";
import { motion } from "framer-motion";
import { BadgeIcon, ExternalLinkIcon, CalendarIcon } from "@radix-ui/react-icons";
import { certificates } from "../data/portfolioData";

const CertificatesSection = () => {

  return (
    <section id="certificates" className="relative max-w-7xl mx-auto px-6 py-16 overflow-hidden scroll-mt-32">
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
              className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <BadgeIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </motion.div>
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional certifications and achievements demonstrating continuous learning and expertise
          </motion.p>
        </motion.div>

        {/* Certificates Inline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-center">
                <motion.div
                  className="relative w-full h-40 mb-3 rounded-lg overflow-hidden bg-slate-700/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/200x160/1e293b/f1f5f9?text=${encodeURIComponent(cert.title)}`;
                    }}
                  />
                </motion.div>
                
                <h3 className="text-sm font-bold text-slate-100 mb-2 group-hover:text-yellow-300 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-orange-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-center gap-1 text-slate-400 mb-3">
                  <CalendarIcon className="w-3 h-3" />
                  <span className="text-xs">{cert.date}</span>
                </div>
                
                <motion.button
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLinkIcon className="w-3 h-3" />
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold text-yellow-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {certificates.length}
              </motion.div>
              <p className="text-slate-300 font-medium">Certifications Earned</p>
            </motion.div>
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold text-orange-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                3
              </motion.div>
              <p className="text-slate-300 font-medium">Platforms</p>
            </motion.div>
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold text-red-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                2024
              </motion.div>
              <p className="text-slate-300 font-medium">Latest Achievement</p>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default CertificatesSection;