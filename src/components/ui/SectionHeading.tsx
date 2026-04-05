import { cn } from '@/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps): JSX.Element {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4 border border-primary-200">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
