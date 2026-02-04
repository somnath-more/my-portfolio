import type React from "react";
import SkillBadge from "../../molecules/SkillBadge";

const SkillsSection: React.FC = () => {
  const skills = [
    { name: "React & TypeScript", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "PostgreSQL & MongoDB", level: 88 },
    { name: "Mysql", level: 88 },
    { name: "AWS & Cloud Services", level: 82 },
    { name: "UI", level: 87 },
  ];

  return (
    <section
      className="
  min-h-screen flex items-center py-20 px-6
  bg-[#f5f5f5] dark:bg-zinc-950
  text-zinc-900 dark:text-zinc-100
"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <h2
          className="
      text-4xl md:text-5xl font-semibold mb-16 text-center
      text-zinc-900 dark:text-zinc-100
    "
        >
          Skills & Expertise
        </h2>

        {/* Skill Badges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillBadge key={i} skill={skill.name} level={skill.level} />
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3
            className="
        text-2xl md:text-3xl font-semibold mb-8 text-center
        text-zinc-900 dark:text-zinc-100
      "
          >
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Spring Boot",
              "Node.js",
              "Python",
              "Docker",
              "Kubernetes",
              "AWS",
              "Git",
              "GraphQL",
              "REST APIs",
            ].map((tech, i) => (
              <span
                key={i}
                className="
              px-5 py-2.5 rounded-full text-sm font-medium
              bg-white dark:bg-zinc-900
              text-zinc-800 dark:text-zinc-200
              border border-zinc-300 dark:border-zinc-700
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              transition-all hover:scale-105
            "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
