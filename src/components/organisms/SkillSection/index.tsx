import type React from "react";
import SectionTitle from "../../atoms/section/SectionTitle";
import SkillBadge from "../../molecules/SkillBadge";

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Express', level: 90 },
    { name: 'Python & Django', level: 85 },
    { name: 'PostgreSQL & MongoDB', level: 88 },
    { name: 'AWS & Cloud Services', level: 82 },
    { name: 'UI/UX Design', level: 87 },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill.name} level={skill.level} />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS', 'Git', 'GraphQL', 'REST APIs'].map((tech, i) => (
              <span key={i} className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white rounded-full border border-purple-500/30 hover:border-purple-500 transition-all hover:scale-110">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection