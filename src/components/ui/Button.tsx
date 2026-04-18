import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { VscLoading } from 'react-icons/vsc';

const buttonVariants = cva(
  'inline-flex items-center gap-2 px-6 py-3 uppercase tracking-widest text-sm font-bold border transition-colors duration-200 cursor-pointer',
  {
    variants: {
      variant: {
        default: '',
        outline: '',
      },
      intent: {
        primary: '',
        secondary: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        intent: 'primary',
        className: 'bg-marlin border-marlin text-dawn-pink hover:bg-shingle-fawn hover:border-shingle-fawn',
      },
      {
        variant: 'outline',
        intent: 'primary',
        className: 'bg-transparent border-marlin text-marlin hover:bg-marlin hover:border-marlin hover:text-dawn-pink',
      },
      {
        variant: 'default',
        intent: 'secondary',
        className: 'bg-driftwood border-driftwood text-marlin hover:bg-whiskey hover:border-whiskey',
      },
      {
        variant: 'outline',
        intent: 'secondary',
        className: 'bg-transparent border-driftwood text-dawn-pink hover:bg-driftwood hover:border-driftwood hover:text-marlin',
      },
    ],
    defaultVariants: {
      variant: 'default',
      intent: 'primary',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant,
  intent,
  leftIcon,
  rightIcon,
  loading,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, intent, className })}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <VscLoading className="animate-spin" />
      ) : (
        leftIcon && <span className="flex items-center">{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
}
