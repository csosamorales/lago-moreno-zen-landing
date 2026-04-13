import React from 'react';

type ButtonVariant = 'default' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'default',
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 uppercase tracking-widest text-sm font-bold border transition-colors duration-200 cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    default:
      'bg-marlin border-marlin text-dawn-pink hover:bg-shingle-fawn hover:border-shingle-fawn',
    outline:
      'bg-transparent border-marlin text-marlin hover:bg-marlin hover:border-marlin hover:text-dawn-pink',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}
