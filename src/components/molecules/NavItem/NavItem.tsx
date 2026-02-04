import type React from "react";

const NavItem: React.FC<{ label: string; onClick: () => void; active?: boolean }> = ({ label, onClick, active }) => (
    <button
    onClick={onClick}
    className={`relative px-3 py-2 text-sm transition-colors
      ${
        active
          ? 'text-slate-900 dark:text-slate-100 font-medium'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
      }`}
  >
    {label}

    {/* Active underline */}
    {active && (
      <span className="absolute left-3 right-3 -bottom-1 h-[2px] bg-slate-900 dark:bg-slate-100 rounded-full" />
    )}
  </button>
);

export default NavItem