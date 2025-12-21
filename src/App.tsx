import { useState } from "react";
import Navigation from "./components/organisms/Navigation";
import HeroSection from "./components/organisms/HeroSection";
import AboutSection from "./components/organisms/AboutSection";
import SkillsSection from "./components/organisms/SkillSection";
import ContactSection from "./components/organisms/ContactSection";
import ProjectsSection from "./components/organisms/ProjectSection";

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState("Home");

    const handleNavigate = (section: string) => {
      setActiveSection(section);
      const element = document.getElementById(section.toLowerCase());
      element?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <footer className="bg-black/50 backdrop-blur-lg py-8 text-center border-t border-white/10">
        <p className="text-white/70">
          © 2025 Somnath More. Built with React & TypeScript
        </p>
      </footer>
    </div>
  );
};

export default App;
