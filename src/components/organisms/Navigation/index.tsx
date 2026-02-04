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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-200
  ${
    scrolled
      ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800"
      : "bg-[#f5f5f5] dark:bg-slate-900"
  }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1
            className="text-lg font-semibold tracking-tight
                     text-slate-900 dark:text-slate-100"
          >
            Portfolio
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <NavItem
                key={s}
                label={s}
                onClick={() => onNavigate(s)}
                active={activeSection === s}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 dark:text-slate-300
                   hover:text-slate-900 dark:hover:text-slate-100
                   transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-3 flex flex-col gap-1
                   rounded-md border
                   border-slate-200 dark:border-slate-800
                   bg-white dark:bg-slate-900"
          >
            {sections.map((s) => (
              <NavItem
                key={s}
                label={s}
                onClick={() => {
                  onNavigate(s);
                  setIsOpen(false);
                }}
                active={activeSection === s}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
