"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneIcon, EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

// Custom Facebook Icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Custom Dribbble Icon
const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.508-7.512-1.508s-.669-1.417-1.47-3.017c3.258-1.347 6.016-.642 6.709-.173zM12 2.151c2.75 0 5.25 1.1 7.1 2.9-.6-.4-3.1-1.1-6.6.2-.9-1.6-1.9-3-2.5-4.1zm-2.9.9c.6 1.1 1.6 2.5 2.5 4.1-3.1 1.2-5.8 1.2-7.2 1.2-.1-.4-.1-.8-.1-1.2 0-1.6.5-3.1 1.4-4.3 1.1.1 2.4.1 3.4.2zm-5.1 6.1c0-.1 0-.3 0-.4 1.5 0 4.6 0 8.1-1.4.6 1.2 1.1 2.4 1.4 3.6-4.1 1.1-7.5 4.2-9.5 7.2-1.4-1.5-2.3-3.5-2.3-5.7 0-1.1.2-2.2.6-3.2.6-.1 1.2-.1 1.7-.1zm2.9 10.2c1.9-2.6 4.8-5.4 8.3-6.3.8 2.2 1.3 4.5 1.4 6.9-1.4.6-2.9.9-4.5.9-1.9 0-3.7-.5-5.2-1.5zm7.9.7c-.1-2.2-.5-4.3-1.2-6.3 2.1-.3 4.3-.1 6.3.5-.4 2.4-1.7 4.5-3.6 5.9-.5-.1-1-.1-1.5-.1z"/>
  </svg>
);

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: LinkedInLogoIcon, href: "https://www.linkedin.com/in/rolly-paredes-0247b028b/", label: "LinkedIn", color: "from-blue-600 to-blue-500", hoverColor: "hover:text-blue-400" },
    { icon: GitHubLogoIcon, href: "https://github.com/RollyPdev", label: "GitHub", color: "from-slate-600 to-slate-500", hoverColor: "hover:text-slate-300" },
    { icon: InstagramLogoIcon, href: "https://www.instagram.com/piierolly", label: "Instagram", color: "from-pink-600 to-purple-500", hoverColor: "hover:text-pink-400" },
    { icon: TwitterLogoIcon, href: "https://x.com/ilyrolly", label: "Twitter", color: "from-blue-500 to-cyan-500", hoverColor: "hover:text-blue-400" },
    { icon: FacebookIcon, href: "https://www.facebook.com/RollyParedesOrtiz", label: "Facebook", color: "from-blue-700 to-blue-600", hoverColor: "hover:text-blue-300" },
    { icon: DribbbleIcon, href: "https://dribbble.com/rollyyyyyyy", label: "Dribbble", color: "from-pink-500 to-rose-500", hoverColor: "hover:text-pink-300" },
  ];

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 overflow-hidden scroll-mt-32">
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
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ChatBubbleIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>
          </div>
          
          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring your ideas to life? Let&apos;s discuss how I can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl" />
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{
                  y: [-3, -10, -3],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-slate-300">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-slate-300">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-slate-300">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                  {submitted ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-green-300"
                    >
                      ✓ Message Sent!
                    </motion.span>
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <PaperPlaneIcon className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-green-400 text-center font-medium bg-green-400/10 rounded-lg p-3 border border-green-400/20"
                  >
                    Thank you! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
              
              <motion.h3 
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Get In Touch
              </motion.h3>
              
              <motion.p 
                className="text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Whether you need development, design, or administrative support, I&apos;m here to help bring your vision to life.
              </motion.p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:rollyparedes@email.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-all duration-300 group p-4 rounded-xl hover:bg-slate-700/30"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <EnvelopeClosedIcon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-slate-200 group-hover:text-blue-300 transition-colors">Email</div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">rollyparedes@email.com</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-3xl" />
              
              <motion.h3 
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Connect With Me
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 relative z-10">
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                      
                      <motion.div
                        className={`w-8 h-8 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <social.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      <span className={`font-medium text-slate-300 ${social.hoverColor} transition-colors duration-300`}>
                        {social.label}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;