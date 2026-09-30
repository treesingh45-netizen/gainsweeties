import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  MenuItem,
  FEATURED_CATEGORIES,
  BRAND_INFO,
  IMAGES,
  PageId,
  MenuFilterTab,
  formatPKR,
} from '../data/menuData';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  menuItems: MenuItem[];
  onNavigate: (page: PageId, filter?: MenuFilterTab) => void;
  onSelectProduct: (product: MenuItem) => void;
  onAddToCart: (product: MenuItem, quantity?: number) => void;
  onOpenOrderDrawer: () => void;
  customLogoUrl?: string;
  customHeroBgUrl?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  menuItems,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenOrderDrawer,
  customLogoUrl,
  customHeroBgUrl,
}) => {
  const signatureProducts = menuItems.filter((item) => item.isSignature);

  const handlePageNav = (page: PageId, filter?: MenuFilterTab) => {
    onNavigate(page, filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      {/* =========================================================
          1. CENTERED HERO SECTION WITH SWEETS BACKGROUND PHOTOGRAPHY
      ========================================================= */}
      <section className="relative flex items-center justify-center bg-[#24140E] text-[#FFF9F2] overflow-hidden">
        {/* Background Sweets & Dessert Photography */}
        <div className="absolute inset-0 z-0">
          <ResilientImage
            src={customHeroBgUrl || IMAGES.heroSpread}
            alt="GAIN 24/7 Sweet Treats, Chocolate Brownies and Desserts Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Rich Chocolate Scrim Overlay for High-Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#24140E]/80 via-[#24140E]/75 to-[#24140E]/90" />
          <div className="absolute inset-0 bg-[#4A2414]/20" />
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28 flex flex-col items-center justify-center text-center">
          {/* Main Centered Hero Headline & Subheadline */}
          <h1 className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFF9F2] leading-[1.08] mb-4">
            Start your day deliciously
          </h1>

          <p className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-4xl text-[#C99A52] mb-5">
            “{BRAND_INFO.tagline}”
          </p>

          {/* Centered Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F7E6D7]/90 leading-relaxed max-w-2xl mx-auto mb-8">
            Brownies, creamy desserts, shakes, coffee and indulgent treats made
            for every craving — day or night.
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-9">
            <button
              type="button"
              onClick={onOpenOrderDrawer}
              className="px-8 py-3.5 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-sm font-semibold tracking-wider hover:bg-[#A96535] transition-colors inline-flex items-center gap-2.5 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <span>ORDER NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handlePageNav('menu')}
              className="px-8 py-3.5 rounded-xl bg-[#24140E]/60 backdrop-blur-xs border border-[#F7E6D7]/45 text-[#FFF9F2] text-sm font-semibold tracking-wider hover:bg-[#FFF9F2] hover:text-[#24140E] transition-colors whitespace-nowrap cursor-pointer"
            >
              VIEW MENU
            </button>
          </div>

          {/* Centered Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-[#F7E6D7]/85">
            <span>10% Off Direct WhatsApp Orders</span>
            <span aria-hidden="true">·</span>
            <span>Fudge Brownies from PKR 350</span>
            <span aria-hidden="true">·</span>
            <span>Single Scoops PKR 150</span>
          </div>
        </div>

        {/* Bottom Gold/Caramel Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A2414] via-[#C99A52] to-[#4A2414]" />
      </section>

      {/* =========================================================
          2. FEATURED CATEGORIES — "Something Sweet Is Waiting"
      ========================================================= */}
      <section className="py-20 bg-[#F7E6D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <p className="font-script text-3xl text-[#A96535]">
              Treat yourself
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#24140E]">
              Something Sweet Is Waiting
            </h2>
            <p className="text-sm sm:text-base text-[#4A2414]/80 pt-1">
              Six signature dessert & café collections crafted for afternoon
              pick-me-ups and midnight indulgence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {FEATURED_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                onClick={() => handlePageNav(cat.targetPage, cat.targetFilter)}
                className="group cursor-pointer bg-[#FFF9F2] rounded-xl overflow-hidden border border-[#4A2414]/10 transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#24140E]">
                  <ResilientImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24140E]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-center">
                    <h3 className="font-serif-editorial text-2xl font-bold tracking-wider text-[#FFF9F2]">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 text-center flex flex-col items-center justify-between flex-1 gap-4">
                  <p className="text-sm text-[#4A2414]/85 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="w-full pt-3 border-t border-[#4A2414]/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#8E2922] group-hover:text-[#4A2414] transition-colors inline-flex items-center gap-1.5">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SIGNATURE PRODUCTS — "Made for Midnight Cravings"
      ========================================================= */}
      <section className="py-20 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <p className="font-script text-3xl text-[#A96535]">
              Made for your cravings
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#24140E]">
              Made for Midnight Cravings
            </h2>
            <p className="text-sm sm:text-base text-[#4A2414]/80 pt-1">
              Our most-loved fudge brownies, molten cake puddles, Ikigai
              sundaes, and thick shakes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {signatureProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => handlePageNav('menu')}
              className="px-8 py-3.5 rounded-xl bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold tracking-wider hover:bg-[#8E2922] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW COMPLETE DIGITAL MENU ({menuItems.length} ITEMS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHY GAIN 24/7 — Four Centered Editorial Feature Blocks
      ========================================================= */}
      <section className="py-20 bg-[#F7E6D7] border-y border-[#4A2414]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-script text-3xl text-[#A96535] mb-1">
              Sweet moments
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#24140E]">
              Why GAIN 24/7
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/10 text-center space-y-2.5">
              <span className="font-mono-price text-xs font-semibold text-[#4E9BA0]">
                01 · ANY HOUR
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
                24/7 Cravings
              </h3>
              <p className="text-sm text-[#4A2414]/80 leading-relaxed">
                “Sweet treats whenever the craving hits.”
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/10 text-center space-y-2.5">
              <span className="font-mono-price text-xs font-semibold text-[#A96535]">
                02 · ARTISANAL QUALITY
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
                Freshly Prepared
              </h3>
              <p className="text-sm text-[#4A2414]/80 leading-relaxed">
                “Made to order with indulgent flavors.”
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/10 text-center space-y-2.5">
              <span className="font-mono-price text-xs font-semibold text-[#8E2922]">
                03 · FAST & PERSONAL
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
                Direct Ordering
              </h3>
              <p className="text-sm text-[#4A2414]/80 leading-relaxed">
                “Order directly through WhatsApp.”
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/10 text-center space-y-2.5">
              <span className="font-mono-price text-xs font-semibold text-[#4A2414]">
                04 · NEIGHBORHOOD FAVORITE
              </span>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
                Karachi Delivery
              </h3>
              <p className="text-sm text-[#4A2414]/80 leading-relaxed">
                “Serving Gulshan-e-Iqbal and surrounding areas.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. SPECIAL OFFER PROMOTIONAL BANNER (CENTERED)
      ========================================================= */}
      <section className="py-16 bg-[#4A2414] text-[#FFF9F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-[#24140E] border border-[#C99A52]/30 p-8 sm:p-14 text-center flex flex-col items-center justify-center gap-5">
            {/* Subtle Background Sweets Photo */}
            <div className="absolute inset-0 z-0 opacity-25">
              <ResilientImage
                src={IMAGES.fudgeBrownie}
                alt="Chocolate Fudge Brownie Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <p className="font-script text-3xl text-[#C99A52]">
                Something delicious
              </p>
              <h2 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2]">
                GET 10% OFF
              </h2>
              <p className="font-serif-editorial italic text-2xl sm:text-3xl text-[#C99A52]">
                Special Discount on Direct Orders
              </p>
              <p className="text-sm sm:text-base text-[#F7E6D7]/85">
                Place your order directly with GAIN 24/7 on WhatsApp (
                {BRAND_INFO.phoneDisplay}) and enjoy 10% off your entire dessert
                and coffee order.
              </p>
              <p className="text-xs text-[#F7E6D7]/70">
                Standard delivery:{' '}
                {formatPKR(BRAND_INFO.deliveryCharges.beforeMidnight)}/- before
                12am · {formatPKR(BRAND_INFO.deliveryCharges.afterMidnight)}/-
                after 12am (Subject to distance)
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <a
                href={BRAND_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-sm font-semibold tracking-wide hover:bg-[#A96535] transition-colors inline-flex items-center gap-2.5 shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ORDER DIRECTLY ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
