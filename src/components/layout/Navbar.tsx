import { useState } from 'react';
import { NAV_ITEMS } from '@/data';
import { useScrolled, useScrollSpy } from '@/hooks/useScrollSpy';
import { scrollToSection, cn } from '@/utils';

export function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrolled(20);
  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (href: string): void => {
    const id = href.replace('#', '');
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg font-display">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  'font-display font-bold text-xl transition-colors',
                  scrolled ? 'text-gray-900' : 'text-white'
                )}
              >
                Warung Oman
              </span>
              <span
                className={cn(
                  'text-xs font-medium transition-colors',
                  scrolled ? 'text-primary-600' : 'text-primary-200'
                )}
              >
                Sembako & Layanan Digital
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeSection === item.id
                    ? scrolled
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button desktop */}
          <button
            onClick={() => handleNavClick('#contact')}
            className={cn(
              'hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
              scrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md'
                : 'bg-white text-primary-700 hover:bg-primary-50 shadow-md'
            )}
          >
            <span>📞</span>
            Hubungi Kami
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={cn(
                  'block h-0.5 bg-current transition-all duration-300 origin-center',
                  isMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 bg-current transition-all duration-300',
                  isMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 bg-current transition-all duration-300 origin-center',
                  isMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                'text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                activeSection === item.id
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors"
          >
            <span>📞</span>
            Hubungi Kami
          </button>
        </div>
      </div>
    </nav>
  );
}
