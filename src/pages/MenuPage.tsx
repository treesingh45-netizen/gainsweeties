import React, { useState } from 'react';
import { Search, X, MessageCircle } from 'lucide-react';
import {
  MenuItem,
  MENU_SECTIONS,
  MenuFilterTab,
  BRAND_INFO,
} from '../data/menuData';
import { ProductCard } from '../components/ProductCard';

interface MenuPageProps {
  menuItems: MenuItem[];
  initialFilter?: MenuFilterTab;
  onSelectProduct: (product: MenuItem) => void;
  onAddToCart: (product: MenuItem, quantity?: number) => void;
}

const FILTER_TABS: { id: MenuFilterTab; label: string }[] = [
  { id: 'all', label: 'All Menu' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'sundaes-cookies', label: 'Sundaes & Cookies' },
  { id: 'ice-cream', label: 'Ice Cream' },
  { id: 'shakes', label: 'Shakes' },
  { id: 'coffee-frappes', label: 'Coffee & Frappes' },
];

export const MenuPage: React.FC<MenuPageProps> = ({
  menuItems,
  initialFilter = 'all',
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<MenuFilterTab>(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visibleSections = MENU_SECTIONS.filter((section) => {
    if (activeTab === 'all') return true;
    return section.filterTab === activeTab;
  });

  return (
    <div className="min-h-screen bg-[#FFF9F2]">
      {/* Page Header */}
      <section className="bg-[#24140E] text-[#FFF9F2] py-14 sm:py-18 border-b border-[#C99A52]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <p className="font-script text-3xl text-[#C99A52] mb-1">
            Made for your cravings
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2] mb-3">
            The GAIN 24/7 Menu
          </h1>
          <p className="text-sm sm:text-base text-[#F7E6D7]/80 leading-relaxed">
            Explore our complete selection of chocolate fudge brownies, cake
            puddles, cookies, single-scoop ice creams, milkshakes, Ikigai
            sundaes, and cold coffees. Direct WhatsApp orders enjoy 10% off.
          </p>
        </div>
      </section>

      {/* Sticky Category & Search Bar */}
      <div className="sticky top-16 z-30 bg-[#F7E6D7]/95 backdrop-blur-md border-b border-[#4A2414]/15 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Menu Categories"
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#4A2414] text-[#FFF9F2] shadow-xs'
                      : 'bg-[#FFF9F2]/80 text-[#4A2414] hover:bg-[#FFF9F2] hover:text-[#24140E]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#4A2414]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brownies, sundaes, coffee..."
              aria-label="Search menu items"
              className="w-full pl-9 pr-8 py-2 text-xs rounded-lg bg-[#FFF9F2] border border-[#4A2414]/20 text-[#24140E] placeholder:text-[#4A2414]/50 focus:outline-none focus:border-[#4A2414]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#4A2414]/60 hover:text-[#24140E] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-18">
        {visibleSections.map((section) => {
          const sectionItems = menuItems.filter((item) => {
            if (item.sectionId !== section.id) return false;
            if (!normalizedQuery) return true;
            return (
              item.name.toLowerCase().includes(normalizedQuery) ||
              item.shortDescription.toLowerCase().includes(normalizedQuery) ||
              item.flavorNotes.some((n) =>
                n.toLowerCase().includes(normalizedQuery)
              )
            );
          });

          if (sectionItems.length === 0) return null;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-36 space-y-8"
            >
              <div className="border-b border-[#4A2414]/15 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                    {section.title}
                  </h2>
                  <p className="text-sm text-[#4A2414]/80 mt-1 max-w-2xl">
                    {section.subtitle}
                  </p>
                </div>

                {section.note && (
                  <p className="font-mono-price text-xs font-semibold text-[#8E2922]">
                    {section.note}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {sectionItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={onSelectProduct}
                    onAddToCart={onAddToCart}
                    ctaLabel="Add to Order"
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Empty State if Search Has No Matches */}
        {menuItems.filter((item) => {
          const tabMatch =
            activeTab === 'all' || item.filterTab === activeTab;
          const queryMatch =
            !normalizedQuery ||
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.shortDescription.toLowerCase().includes(normalizedQuery) ||
            item.flavorNotes.some((n) =>
              n.toLowerCase().includes(normalizedQuery)
            );
          return tabMatch && queryMatch;
        }).length === 0 && (
          <div className="py-16 text-center space-y-4">
            <p className="font-script text-3xl text-[#A96535]">
              Sweet cravings
            </p>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
              No matching menu items found for “{searchQuery}”
            </h3>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="px-5 py-2.5 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#8E2922] transition-colors cursor-pointer"
            >
              Show All Menu Items
            </button>
          </div>
        )}

        {/* Direct Order Footer Callout */}
        <div className="rounded-2xl bg-[#F7E6D7] border border-[#4A2414]/15 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
              Ready to Place Your Direct Order?
            </h3>
            <p className="text-sm text-[#4A2414]/85">
              Order directly on WhatsApp at{' '}
              <span className="font-mono-price font-semibold">
                {BRAND_INFO.phoneDisplay}
              </span>{' '}
              and receive a special 10% discount.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold tracking-wide hover:bg-[#4A2414] transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>ORDER ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
};
