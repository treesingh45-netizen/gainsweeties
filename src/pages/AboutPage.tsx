import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_INFO, IMAGES, PageId } from '../data/menuData';
import { ResilientImage } from '../components/ResilientImage';
import { BrandEmblem } from '../components/BrandEmblem';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  customLogoUrl?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  customLogoUrl,
}) => {
  const pillars = [
    {
      index: '01',
      title: 'Quality',
      description:
        'Every brownie, cookie, sundae, and coffee is crafted with rich cocoa, real dairy cream, and carefully selected toppings.',
    },
    {
      index: '02',
      title: 'Flavor',
      description:
        'From deep dark chocolate fudge and golden caramel to roasted hazelnut Nutella, Kulfa Crunch, and Spanish Latte.',
    },
    {
      index: '03',
      title: 'Freshness',
      description:
        'Prepared fresh so warm brownies arrive gooey, waffles stay crisp, and shakes and frappes remain thick and chilled.',
    },
    {
      index: '04',
      title: 'Creativity',
      description:
        'Inventive dessert experiences like SizzleMe Up Loaded brownies, Matilda Cake Puddles, Brookie Skitt, and Ikigai Sundaes.',
    },
    {
      index: '05',
      title: 'Late-Night Cravings',
      description:
        'Because cravings never check the clock—built to satisfy both daytime coffee breaks and midnight sweet tooth moments.',
    },
    {
      index: '06',
      title: 'Direct Customer Service',
      description:
        'Simple, personal ordering straight through WhatsApp with a special 10% discount on direct orders.',
    },
  ];

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* =========================================================
          1. BRAND STORY HERO
      ========================================================= */}
      <section className="bg-[#24140E] text-[#FFF9F2] py-18 lg:py-26 border-b border-[#C99A52]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center">
            <BrandEmblem
              size="lg"
              customLogoUrl={customLogoUrl}
            />
          </div>
          <p className="font-script text-3xl text-[#C99A52]">
            Sweet moments
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2] leading-tight">
            Sweet Moments. Day & Night.
          </h1>
          <p className="font-serif-editorial text-xl sm:text-2xl text-[#F7E6D7]/90 leading-relaxed max-w-3xl mx-auto">
            “GAIN 24/7 is built around one simple idea — cravings don&apos;t
            follow a schedule. From rich chocolate brownies and creamy ice cream
            to indulgent shakes, frappes and coffee, we create sweet treats for
            every mood and every hour.”
          </p>
          <div className="pt-2 text-xs text-[#C99A52] tracking-wide">
            <span>{BRAND_INFO.fullAddress}</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. SIX CORE PILLARS
      ========================================================= */}
      <section className="py-20 bg-[#F7E6D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="font-script text-3xl text-[#A96535] mb-1">
              Made for your cravings
            </p>
            <h2 className="font-serif-editorial text-4xl font-bold text-[#24140E]">
              What Defines GAIN 24/7
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-7 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/10 space-y-3"
              >
                <span className="font-mono-price text-xs font-semibold text-[#8E2922]">
                  {pillar.index} · {pillar.title.toUpperCase()}
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#24140E]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#4A2414]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. VISUAL EDITORIAL SECTION — "Your Midnight Craving Partner"
      ========================================================= */}
      <section className="py-20 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#4A2414]/15 shadow-xl aspect-[16/10] bg-[#24140E]">
                <ResilientImage
                  src={IMAGES.heroSpread}
                  alt="GAIN 24/7 Your Midnight Craving Partner Dessert Spread"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140E]/65 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFF9F2]">
                  <p className="font-script text-3xl text-[#C99A52]">
                    GAIN 24/7
                  </p>
                  <p className="font-serif-editorial text-2xl font-bold">
                    Brownies · Desserts · Ice Cream · Shakes · Coffee & Frappes
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <p className="font-script text-3xl text-[#A96535]">
                Late-night indulgence
              </p>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#24140E] leading-tight">
                Your Midnight Craving Partner
              </h2>
              <p className="text-sm sm:text-base text-[#4A2414]/85 leading-relaxed">
                Located at A-23, Momin Square, Block 6, Gulshan-e-Iqbal,
                Karachi, GAIN 24/7 brings together warm bakery classics and
                chilled café favorites under one roof. Whether you are ordering
                a single Classic Fudge brownie, a Box of 12 Mix Brownies for
                friends, or an iced Spanish Latte with a Brownie Sundae, every
                order is prepared with care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold tracking-wide hover:bg-[#24140E] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Full Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BRAND_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold tracking-wide hover:bg-[#A96535] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
