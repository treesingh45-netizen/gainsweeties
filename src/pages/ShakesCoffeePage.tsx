import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MenuItem, IMAGES, BRAND_INFO } from '../data/menuData';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';

interface ShakesCoffeePageProps {
  menuItems: MenuItem[];
  onSelectProduct: (product: MenuItem) => void;
  onAddToCart: (product: MenuItem, quantity?: number) => void;
  onOpenOrderDrawer: () => void;
}

export const ShakesCoffeePage: React.FC<ShakesCoffeePageProps> = ({
  menuItems,
  onSelectProduct,
  onAddToCart,
  onOpenOrderDrawer,
}) => {
  const shakes = menuItems.filter(
    (item) => item.sectionId === 'milk-fresh-fruit-shakes'
  );
  const coffeesAndFrappes = menuItems.filter(
    (item) => item.sectionId === 'icy-shelf-coffee-frappes'
  );

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative bg-[#24140E] text-[#FFF9F2] overflow-hidden py-16 lg:py-22 border-b border-[#C99A52]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="font-script text-3xl text-[#C99A52]">
              Something delicious
            </p>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2] leading-[1.08]">
              Pour Something Delicious
            </h1>
            <p className="text-base sm:text-lg text-[#F7E6D7]/85 leading-relaxed max-w-xl">
              Thick milk and fresh fruit shakes spun with real brownie pieces,
              seasonal fruit, and roasted nuts — alongside barista-crafted iced
              Spanish lattes, caramel cold coffees, and blended frappes.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#C99A52]">
              <span>Milk & Fresh Fruit Shakes</span>
              <span aria-hidden="true">·</span>
              <span>Iced Lattes</span>
              <span aria-hidden="true">·</span>
              <span>Blended Frappes</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#C99A52]/25 aspect-[4/3]">
              <ResilientImage
                src={IMAGES.milkshakes}
                alt="Thick Milk and Fresh Fruit Shakes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#C99A52]/25 aspect-[4/3] mt-6">
              <ResilientImage
                src={IMAGES.coffeeFrappes}
                alt="Icy Shelf Coffee Lattes and Blended Frappes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* =========================================================
            SECTION 1: MILK & FRESH FRUIT SHAKES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Thick & Chilled
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                MILK & FRESH FRUIT SHAKES
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Blended with seasonal mango, chikoo almond, crushed Oreos, and real fudge brownie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {shakes.map((shake) => (
              <ProductCard
                key={shake.id}
                product={shake}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 2: ICY SHELF COFFEE & FRAPPES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Barista Cold Brews & Blends
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                ICY SHELF COFFEE & FRAPPES
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Spanish Latte, Caramel, French Vanilla, Butterscotch & dessert frappes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {coffeesAndFrappes.map((drink) => (
              <ProductCard
                key={drink.id}
                product={drink}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            CTA SECTION: "ORDER YOUR FAVORITE"
        ========================================================= */}
        <section className="rounded-2xl bg-[#24140E] text-[#FFF9F2] border border-[#C99A52]/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <p className="font-script text-3xl text-[#C99A52]">
              Treat yourself
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-[#FFF9F2]">
              ORDER YOUR FAVORITE
            </h2>
            <p className="text-sm text-[#F7E6D7]/80 max-w-xl">
              Pair your favorite cold coffee or shake with a warm fudge brownie
              and get 10% off when ordering directly via WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <button
              type="button"
              onClick={onOpenOrderDrawer}
              className="px-6 py-3.5 rounded-xl bg-[#FFF9F2] text-[#24140E] text-xs font-semibold hover:bg-[#C99A52] transition-colors cursor-pointer"
            >
              Review Order Bag
            </button>

            <a
              href={BRAND_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold tracking-wide hover:bg-[#A96535] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ORDER ON WHATSAPP</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
