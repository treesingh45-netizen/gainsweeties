import React from 'react';
import { MessageCircle } from 'lucide-react';
import {
  MenuItem,
  IMAGES,
  BRAND_INFO,
  formatPKR,
} from '../data/menuData';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';

interface IceCreamSundaesPageProps {
  menuItems: MenuItem[];
  onSelectProduct: (product: MenuItem) => void;
  onAddToCart: (product: MenuItem, quantity?: number) => void;
}

export const IceCreamSundaesPage: React.FC<IceCreamSundaesPageProps> = ({
  menuItems,
  onSelectProduct,
  onAddToCart,
}) => {
  const iceCreamFlavors = menuItems.filter(
    (item) => item.sectionId === 'ice-cream'
  );
  const signatureSundaes = menuItems.filter(
    (item) => item.subGroup === 'cakes-truffles'
  );
  const ikigaiSpecials = menuItems.filter(
    (item) => item.sectionId === 'icy-sundaes-ikigai'
  );

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative bg-[#24140E] text-[#FFF9F2] overflow-hidden py-16 lg:py-22 border-b border-[#C99A52]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="font-script text-3xl text-[#4E9BA0]">
              Sweet moments
            </p>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2] leading-[1.08]">
              Cold. Creamy. Completely Irresistible.
            </h1>
            <p className="text-base sm:text-lg text-[#F7E6D7]/85 leading-relaxed max-w-xl">
              From velvety single-scoop flavors at {formatPKR(150)} to layered
              Ikigai Special sundaes and warm cake puddles, every spoonful is
              crafted to cool down Karachi nights.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#C99A52]">
              <span>11 Single Scoop Flavors</span>
              <span aria-hidden="true">·</span>
              <span>Ikigai Special Sundaes</span>
              <span aria-hidden="true">·</span>
              <span>Cake Puddles & Skillets</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#C99A52]/25 shadow-2xl aspect-[16/10] bg-[#4A2414]">
              <ResilientImage
                src={IMAGES.iceCreamSundae}
                alt="Artisanal Ice Cream Scoops and Layered Sundae"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* =========================================================
            SECTION 1: ICE CREAM FLAVORS
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#4E9BA0]">
                Slow-Churned Scoops
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                ICE CREAM FLAVORS
              </h2>
            </div>
            <p className="font-mono-price text-xs font-semibold text-[#8E2922]">
              All Ice Creams with Single Scoop — PKR 150
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iceCreamFlavors.map((flavor) => (
              <ProductCard
                key={flavor.id}
                product={flavor}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Add to Order"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 2: SUNDAES & CAKE PUDDLES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Spoonable Decadence
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                SUNDAES
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Warm chocolate cake puddles, layered mousse cakes, and skillet brookies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {signatureSundaes.map((sundae) => (
              <ProductCard
                key={sundae.id}
                product={sundae}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 3: IKIGAI SPECIALS
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Layered Ice Cream Coupes
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                IKIGAI SPECIALS
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Icy Sundaes layered with brownie chunks, crushed Oreos, fruit swirls & roasted nuts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {ikigaiSpecials.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* Direct WhatsApp Banner */}
        <section className="rounded-2xl bg-[#F7E6D7] border border-[#4A2414]/15 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <p className="font-script text-2xl text-[#A96535]">
              Late-night indulgence
            </p>
            <h3 className="font-serif-editorial text-3xl font-bold text-[#24140E]">
              Craving a Sundae Tonight?
            </h3>
            <p className="text-sm text-[#4A2414]/85">
              Order directly via WhatsApp for 10% off your entire order.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold tracking-wide hover:bg-[#4A2414] transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>ORDER ON WHATSAPP</span>
          </a>
        </section>
      </div>
    </div>
  );
};
