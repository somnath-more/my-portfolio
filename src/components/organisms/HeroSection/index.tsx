import { Github, Linkedin, Mail } from "lucide-react";
import Button from "../../atoms/button/Button";
import { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

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
    <section className="min-h-screen flex items-center justify-center relative bg-white dark:bg-slate-900">
      {/* Subtle background layer */}
      <div className="absolute inset-0 bg-[#f5f5f5] dark:bg-slate-800" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Avatar */}
        <div className="mb-8 inline-flex justify-center">
          <div
            className="w-28 h-28 rounded-full bg-slate-900 dark:bg-slate-100 
                      flex items-center justify-center 
                      text-4xl font-semibold 
                      text-white dark:text-slate-900
                      border border-slate-200 dark:border-slate-700"
          >
            SM
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl font-semibold mb-4 
                   text-slate-900 dark:text-slate-100"
        >
          Somnath More
        </h1>

        {/* Role / Typing text */}
        <p
          className="text-lg md:text-xl mb-6 
                  text-slate-600 dark:text-slate-400 
                  h-8"
        >
          {text}
          <span className="opacity-50">|</span>
        </p>

        {/* Description */}
        <p
          className="text-base md:text-lg 
                  text-slate-600 dark:text-slate-400 
                  mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Crafting beautiful digital experiences with modern technologies and
          clean, scalable solutions.
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary">View My Work</Button>
          <Button variant="secondary">Get In Touch</Button>
        </div>

        {/* Socials */}
        <div className="flex gap-6 justify-center mt-12">
          <a
            href={"https://github.com/somnath-more"}
            target="_blank"
            className="text-slate-500 dark:text-slate-400 
                   hover:text-slate-900 dark:hover:text-slate-100
                   transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={"https://www.linkedin.com/in/somnathmore83/"}
            target="_blank"
            className="text-slate-500 dark:text-slate-400 
                   hover:text-slate-900 dark:hover:text-slate-100
                   transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            target="_blank"


            className="text-slate-500 dark:text-slate-400 
                   hover:text-slate-900 dark:hover:text-slate-100
                   transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
