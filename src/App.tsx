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

      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
  <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
    © 2025 Somnath More. Built with React & TypeScript
  </p>
</footer>

    </div>
  );
};

export default App;
