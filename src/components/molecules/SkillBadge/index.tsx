import type React from "react";

const SkillBadge: React.FC<{ skill: string; level: number }> = ({ skill, level }) => (
  <div className="group">
    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-500/30 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30">
      <p className="text-white font-semibold">{skill}</p>
      <div className="w-full bg-white/10 rounded-full h-2 mt-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  </div>
);
export default SkillBadge