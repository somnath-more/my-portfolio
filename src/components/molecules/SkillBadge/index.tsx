import type React from "react";

const SkillBadge: React.FC<{ skill: string; level: number }> = ({
  skill,
  level,
}) => (
  <div className="group">
    <div
      className="
      px-6 py-4 rounded-xl
      bg-white dark:bg-zinc-900
      border border-zinc-200 dark:border-zinc-800
      transition-colors
      hover:bg-zinc-50 dark:hover:bg-zinc-800
    "
    >
      {/* Skill name */}
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {skill}
      </p>

      {/* Progress track */}
      <div className="w-full mt-3 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        <div
          className="
          h-full rounded-full
          bg-zinc-900 dark:bg-zinc-100
          transition-all duration-700
        "
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  </div>
);
export default SkillBadge;
