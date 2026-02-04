import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center ' +
    'px-4 py-2 text-sm font-medium ' +
    'rounded-md border ' +
    'transition-colors duration-200 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-slate-900 text-white border-slate-900 ' +
      'hover:bg-slate-800 ' +
      'dark:bg-slate-100 dark:text-slate-900 dark:border-slate-100 ' +
      'dark:hover:bg-slate-200',

    secondary:
      'bg-transparent text-slate-900 border-slate-300 ' +
      'hover:bg-slate-100 ' +
      'dark:text-slate-100 dark:border-slate-700 ' +
      'dark:hover:bg-slate-800',

    ghost:
      'bg-transparent text-slate-700 border-transparent ' +
      'hover:bg-slate-100 ' +
      'dark:text-slate-300 ' +
      'dark:hover:bg-slate-800',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
