"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerMenuIcon, Cross1Icon, HomeIcon, CodeIcon, MagicWandIcon, PersonIcon, StarIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

const navLinks = [
  { href: "#home", label: "Home", icon: HomeIcon, sectionId: "home" },
  { href: "#about", label: "About", icon: PersonIcon, sectionId: "about" },
  { href: "#dev-projects", label: "Development", icon: CodeIcon, sectionId: "dev-projects" },
  { href: "#design-portfolio", label: "Design", icon: MagicWandIcon, sectionId: "design-portfolio" },
  { href: "#services", label: "Services", icon: PersonIcon, sectionId: "services" },
  { href: "#skills", label: "Skills", icon: StarIcon, sectionId: "skills" },
  { href: "#contact", label: "Contact", icon: EnvelopeClosedIcon, sectionId: "contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const scrollToSection = (sectionId: string) => {
    // Remove hash from URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    // Clean URL on initial load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (window.scrollY < 100) {
        setActiveSection("#home");
        return;
      }
      
      const sections = navLinks.map(link => link.sectionId).filter(id => id !== "home");
      const current = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => scrollToSection("home")} 
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-4 py-2 rounded-xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300">
              RP
            </div>
          </button>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    isActive 
                      ? "bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white shadow-lg" 
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <EnvelopeClosedIcon className="w-4 h-4" />
            Let&apos;s Talk
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Cross1Icon className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HamburgerMenuIcon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-0 bg-slate-900/95 backdrop-blur-xl z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rolly Paredes
                </div>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-300"
                  whileTap={{ scale: 0.95 }}
                >
                  <Cross1Icon className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <motion.nav
                className="flex-1 flex flex-col justify-center px-6 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, staggerChildren: 0.1, delayChildren: 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => {
                        scrollToSection(link.sectionId);
                        setMenuOpen(false);
                      }}
                      className="flex items-center gap-4 text-xl font-semibold text-slate-300 hover:text-white transition-colors duration-300 p-4 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-600/50 w-full text-left"
                    >
                      <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center">
                        <link.icon className="w-5 h-5" />
                      </div>
                      {link.label}
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg w-full"
                  >
                    <EnvelopeClosedIcon className="w-5 h-5" />
                    Let&apos;s Work Together
                  </button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;