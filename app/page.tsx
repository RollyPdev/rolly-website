import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import DevProjects from "../components/DevProjects";
import DesignPortfolio from "../components/DesignPortfolio";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import CertificatesSection from "../components/CertificatesSection";
import ContactSection from "../components/ContactSection";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
      
      {/* Optimized background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-2xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-2xl opacity-50" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-2xl opacity-50" />
      </div>

      <HeroSection />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-32">
        <div className="py-16">
          <AboutMe />
        </div>
        
        <div className="py-16">
          <DevProjects />
        </div>
        
        <div className="py-16">
          <DesignPortfolio />
        </div>
        
        <div className="py-16">
          <ServicesSection />
        </div>
        
        <div className="py-16">
          <SkillsSection />
        </div>
        
        <div className="py-16">
          <CertificatesSection />
        </div>
        
        <div className="py-16">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
