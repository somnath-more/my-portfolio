import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../../atoms/button/Button";
import { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-2xl shadow-purple-500/50 animate-bounce">
            SM
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          Somnath More
        </h1>
        
        <p className="text-3xl md:text-4xl mb-8 text-purple-400 font-semibold h-12">
          {text}<span className="animate-pulse">|</span>
        </p>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting beautiful digital experiences with modern technologies and creative solutions
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary">View My Work</Button>
          <Button variant="secondary">Get In Touch</Button>
        </div>

        <div className="flex gap-6 justify-center mt-12">
          <a href="#" className="text-white/70 hover:text-purple-400 transition-colors transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="#" className="text-white/70 hover:text-purple-400 transition-colors transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-white/70 hover:text-purple-400 transition-colors transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection