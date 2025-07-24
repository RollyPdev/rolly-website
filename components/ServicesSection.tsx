"use client";
import React from "react";
import { motion } from "framer-motion";
import { PersonIcon, ClockIcon, CheckCircledIcon, LightningBoltIcon, StarIcon } from "@radix-ui/react-icons";
import { services } from "../data/portfolioData";

const ServicesSection = () => {
  const benefits = [
    { icon: ClockIcon, title: "Time-Saving", desc: "Focus on your core business while I handle the details" },
    { icon: LightningBoltIcon, title: "Increased Efficiency", desc: "Streamlined processes and optimized workflows" },
    { icon: CheckCircledIcon, title: "Reliable Support", desc: "Consistent, professional assistance you can count on" },
    { icon: StarIcon, title: "Quality Results", desc: "Attention to detail and commitment to excellence" },
  ];

  return (
    <section id="services" className="relative max-w-7xl mx-auto px-6 py-16 overflow-hidden scroll-mt-24">


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
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <PersonIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                Virtual Assistant Services
              </span>
            </h2>
          </div>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional administrative support to help streamline your business operations 
            and boost productivity. Let me handle the details while you focus on growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircledIcon className="w-6 h-6 text-green-400" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-green-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 mb-16 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Why Choose My Services?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-slate-200 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Showcase */}
        <motion.div
          className="p-8 mb-16 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  Tools & Technologies
                </h3>
              </motion.div>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Professional tools I use to deliver exceptional results across all service areas
              </p>
            </motion.div>

            <div className="space-y-16">
              {[
                {
                  title: "Virtual Assistant Tools",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-500/10 to-emerald-500/10",
                  tools: [
                    { name: "Google Workspace", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
                    { name: "Microsoft Office", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg" },
                    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
                    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
                    { name: "Asana", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" },
                    { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" }
                  ]
                },
                {
                  title: "Development Tools",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-500/10 to-cyan-500/10",
                  tools: [
                    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
                    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                    { name: "Express JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
                    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
                  ]
                },
                {
                  title: "Design Tools",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-500/10 to-pink-500/10",
                  tools: [
                    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
                    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
                    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
                  ]
                }
              ].map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="relative"
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
                >
                  <motion.div
                    className={`bg-gradient-to-r ${category.bgColor} rounded-2xl p-6 border border-slate-600/30`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h4 
                      className={`text-2xl font-bold mb-8 text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.3 + 0.2 }}
                    >
                      {category.title}
                    </motion.h4>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                      {category.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={tool.name}
                          className="relative group cursor-pointer"
                          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.6, 
                            delay: categoryIndex * 0.3 + toolIndex * 0.1,
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                          }}
                          whileHover={{ 
                            scale: 1.15, 
                            y: -10,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="relative bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-slate-500/70">
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`} />
                            
                            {/* Floating particles */}
                            <motion.div
                              className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-100`}
                              animate={{
                                y: [-2, -8, -2],
                                opacity: [0, 1, 0],
                                scale: [0.8, 1.2, 0.8]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: toolIndex * 0.2,
                              }}
                            />
                            
                            <div className="relative z-10 flex flex-col items-center">
                              <motion.div
                                className="w-12 h-12 mb-3 flex items-center justify-center"
                                animate={{ 
                                  rotate: [0, 5, -5, 0],
                                }}
                                transition={{ 
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: toolIndex * 0.3
                                }}
                              >
                                <img 
                                  src={tool.icon} 
                                  alt={tool.name}
                                  className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300 group-hover:brightness-110"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (nextSibling) nextSibling.style.display = 'flex';
                                  }}
                                />
                                <div 
                                  className={`hidden w-full h-full bg-gradient-to-br ${category.color} rounded-xl items-center justify-center shadow-lg`}
                                >
                                  <span className="text-white font-bold text-sm">
                                    {tool.name.charAt(0)}
                                  </span>
                                </div>
                              </motion.div>
                              
                              <motion.span 
                                className="text-sm font-medium text-slate-300 text-center group-hover:text-white transition-colors duration-300"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1.05 }}
                              >
                                {tool.name}
                              </motion.span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
        </motion.div>

        {/* Pricing Tiers */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              name: "Basic",
              price: "$25",
              period: "/hour",
              features: ["Email Management", "Data Entry", "Basic Research", "Calendar Scheduling"],
              popular: false
            },
            {
              name: "Professional",
              price: "$35",
              period: "/hour",
              features: ["Everything in Basic", "Content Creation", "Social Media Management", "Project Coordination"],
              popular: true
            },
            {
              name: "Premium",
              price: "$50",
              period: "/hour",
              features: ["Everything in Professional", "Strategic Planning", "Advanced Analytics", "Priority Support"],
              popular: false
            }
          ].map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-6 shadow-xl ${
                tier.popular 
                  ? "border-green-500/50 ring-2 ring-green-500/20" 
                  : "border-slate-700/50"
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-100 mb-2">{tier.name}</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-green-400">{tier.price}</span>
                  <span className="text-slate-400 ml-1">{tier.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-slate-300">
                    <CheckCircledIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-green-500/25"
                    : "bg-slate-700/50 text-slate-200 hover:bg-slate-600/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              Ready to Boost Your Productivity?
            </h3>
            <p className="text-slate-300 mb-6">
              Let&apos;s discuss how I can help streamline your operations and free up your time for what matters most.
            </p>
            <motion.button
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;