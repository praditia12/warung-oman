import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY + 100;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}

export function useScrolled(threshold: number = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
