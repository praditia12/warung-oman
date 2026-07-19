import type { ReactNode } from 'react';
import { cn } from '@/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'green' | 'teal' | 'blue' | 'yellow';
  className?: string;
}

const variantClasses = {
  green: 'bg-primary-100 text-primary-700 border border-primary-200',
  teal: 'bg-teal-100 text-teal-700 border border-teal-200',
  blue: 'bg-blue-100 text-blue-700 border border-blue-200',
  yellow: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
} as const;

export function Badge({ children, variant = 'green', className }: BadgeProps): JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
