import type React from "react";

const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className = '', hover = true }) => (
 <div className={`
  rounded-2xl p-8
  bg-white dark:bg-zinc-900
  border border-zinc-200 dark:border-zinc-800
  text-zinc-900 dark:text-zinc-100
  ${hover ? 'transition-shadow hover:shadow-lg' : ''}
  ${className}
`}>
  {children}
</div>

);
export default Card