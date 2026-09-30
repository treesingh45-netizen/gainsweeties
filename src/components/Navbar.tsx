import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { PageId } from '../data/menuData';
import { BrandEmblem } from './BrandEmblem';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
  onOpenOrderDrawer: () => void;
  customLogoUrl?: string;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'shakes', label: 'Shakes & Coffee' },
  { id: 'about', label: 'About' },
  { id: 'policies', label: 'Policies' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenOrderDrawer,
  customLogoUrl,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#24140E]/95 backdrop-blur-md border-b border-[#C99A52]/25 text-[#FFF9F2] shadow-md'
          : 'bg-[#24140E] border-b border-[#FFF9F2]/10 text-[#FFF9F2]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: GAIN 24/7 Logo Only (Zoomed in for clarity) */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          aria-label="GAIN 24/7 Home"
          className="flex items-center group cursor-pointer shrink-0"
        >
          <BrandEmblem
            size="md"
            customLogoUrl={customLogoUrl}
            className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-200 group-hover:scale-105"
          />
        </button>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm xl:text-[15px] font-medium tracking-wide transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#C99A52]'
                    : 'text-[#F7E6D7]/90 hover:text-[#FFF9F2]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#C99A52] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenOrderDrawer}
            aria-label="Open order bag"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-[#F7E6D7] hover:text-[#FFF9F2] hover:bg-[#4A2414]/60 transition-colors whitespace-nowrap cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#C99A52]" />
            <span className="hidden sm:inline">Bag</span>
            <span className="font-mono-price font-semibold text-[#C99A52]">
              ({cartCount})
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (cartCount > 0) {
                onOpenOrderDrawer();
              } else {
                handleNavClick('contact');
              }
            }}
            className="px-5 py-2.5 rounded-lg bg-[#8E2922] text-[#FFF9F2] text-sm font-semibold tracking-wide hover:bg-[#A96535] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            ORDER NOW
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="lg:hidden p-2 rounded-lg text-[#FFF9F2] hover:bg-[#4A2414] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#24140E] border-t border-[#C99A52]/20 px-4 pt-3 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#4A2414] text-[#C99A52]'
                    : 'text-[#F7E6D7] hover:bg-[#4A2414]/50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="text-xs text-[#C99A52]">Active</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
