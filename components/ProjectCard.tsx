"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GitHubLogoIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import type { Project, DesignPiece } from "../data/portfolioData";

// Union type for props
export type ProjectCardProps =
  | (Project & { type: "dev" })
  | (DesignPiece & { type: "design" });

const ProjectCard: React.FC<{ project: ProjectCardProps }> = ({ project }) => {
  const isDev = project.type === "dev";

  return (
    <motion.div
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-2xl rounded-3xl overflow-hidden max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.3), transparent)",
          padding: "1px"
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {project.imageUrl && (
        <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
          </motion.div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="relative p-6 flex flex-col h-full">
        <motion.h3
          className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-blue-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="font-semibold text-sm text-slate-400 mb-2 block">
            {isDev ? "Technologies:" : "Tools:"}
          </span>
          <div className="flex flex-wrap gap-2">
            {(isDev ? project.technologies : project.tools).map((item: string, index: number) => (
              <motion.span
                key={item}
                className="bg-slate-700/50 border border-slate-600/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-auto flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {isDev ? (
            <>
              <motion.button
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Live Demo
              </motion.button>
              <motion.button
                className="flex-1 bg-slate-700/50 border border-slate-600/50 text-slate-200 px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:bg-slate-600/50 focus:outline-none focus:ring-2 focus:ring-slate-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                GitHub
              </motion.button>
            </>
          ) : (
            <motion.button
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              <EyeOpenIcon className="w-4 h-4" />
              View Design
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;