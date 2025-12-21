import type React from "react";

const NavItem: React.FC<{ label: string; onClick: () => void; active?: boolean }> = ({ label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      active ? 'text-purple-400 bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
    }`}
  >
    {label}
  </button>
);

export default NavItem