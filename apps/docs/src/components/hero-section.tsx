import { type ReactNode } from 'react';
import cn from 'clsx';

import useXYSite from '@/hooks/use-xy-site';

type HeroSectionProps = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  className?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export default function HeroSection({
  title,
  subtitle,
  kicker,
  children,
  className,
  align = 'left',
}: HeroSectionProps) {
  const { site } = useXYSite();
  const isCenter = align === 'center';

  return (
    <div className={cn(!isCenter && 'grid grid-cols-2 gap-40', className)}>
      <div className={cn(isCenter && 'text-center')}>
        {kicker && (
          <h3
            className={cn(
              'text-sm font-bold mb-2 site uppercase',
              `text-${site}`
            )}
          >
            {kicker}
          </h3>
        )}
        {title && <h1 className="text-6xl font-black mb-4">{title}</h1>}
        {subtitle && <h2 className="text-2xl mb-8">{subtitle}</h2>}
      </div>
      <div>{children}</div>
    </div>
  );
}
