import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import DevProjects from "../components/DevProjects";
import DesignPortfolio from "../components/DesignPortfolio";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <HeroSection />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-32">
        <AnimatedSection className="py-16" delay={0.1}>
          <AboutMe />
        </AnimatedSection>
        
        <AnimatedSection className="py-16" delay={0.2}>
          <DevProjects />
        </AnimatedSection>
        
        <AnimatedSection className="py-16" delay={0.1}>
          <DesignPortfolio />
        </AnimatedSection>
        
        <AnimatedSection className="py-16" delay={0.2}>
          <ServicesSection />
        </AnimatedSection>
        
        <AnimatedSection className="py-16" delay={0.1}>
          <SkillsSection />
        </AnimatedSection>
        
        <AnimatedSection className="py-16" delay={0.2}>
          <ContactSection />
        </AnimatedSection>
      </div>
    </div>
  );
}
