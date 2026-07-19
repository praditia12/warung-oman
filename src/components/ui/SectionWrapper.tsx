import type { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  animate?: boolean;
}

export function SectionWrapper({
  id,
  className,
  children,
  animate = true,
}: SectionWrapperProps): JSX.Element {
  const [ref, isInView] = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'transition-all duration-700',
        animate && !isInView ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0',
        className,
      )}
    >
      {children}
    </section>
  );
}
