import type React from "react";

const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className = '', hover = true }) => (
  <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 ${hover ? 'transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20' : ''} ${className}`}>
    {children}
  </div>
);
export default Card