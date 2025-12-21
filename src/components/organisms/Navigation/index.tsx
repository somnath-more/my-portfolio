import React, { useEffect, useState } from "react";
import NavItem from "../../molecules/NavItem/NavItem";
import { Menu, X } from "lucide-react";

const Navigation: React.FC<{
  activeSection: string;
  onNavigate: (section: string) => void;
}> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {sections.map(s => (
              <NavItem key={s} label={s} onClick={() => onNavigate(s)} active={activeSection === s} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2 bg-black/90 rounded-lg p-4 backdrop-blur-xl">
            {sections.map(s => (
              <NavItem key={s} label={s} onClick={() => { onNavigate(s); setIsOpen(false); }} active={activeSection === s} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation