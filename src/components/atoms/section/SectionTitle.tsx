import type React from "react";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2
    className="
  text-4xl md:text-5xl font-semibold mb-16 text-center
  text-zinc-900 dark:text-zinc-100
"
  >
    {children}
  </h2>
);
export default SectionTitle;
