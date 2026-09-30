import React, { useState } from 'react';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  RefreshCw,
  Lock,
  FileText,
  MessageCircle,
  Mail,
  MapPin,
} from 'lucide-react';
import { BRAND_INFO, formatPKR, PageId } from '../data/menuData';

export type PolicySectionId =
  | 'all'
  | 'ordering'
  | 'delivery'
  | 'freshness'
  | 'cancellation'
  | 'privacy'
  | 'terms';

interface PoliciesPageProps {
  initialSection?: PolicySectionId;
  onNavigate: (page: PageId) => void;
}

const POLICY_TABS: { id: PolicySectionId; label: string }[] = [
  { id: 'all', label: 'All Policies' },
  { id: 'delivery', label: 'Delivery Policy' },
  { id: 'ordering', label: 'Ordering & 10% Discount' },
  { id: 'cancellation', label: 'Cancellation & Replacement' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Allergens' },
];

export const PoliciesPage: React.FC<PoliciesPageProps> = ({
  initialSection = 'all',
  onNavigate,
}) => {
  const [activeSection, setActiveSection] =
    useState<PolicySectionId>(initialSection);

  const showSection = (id: PolicySectionId) =>
    activeSection === 'all' || activeSection === id;

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* =========================================================
          PAGE HERO
      ========================================================= */}
      <section className="bg-[#24140E] text-[#FFF9F2] py-14 lg:py-18 border-b border-[#C99A52]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <p className="font-script text-3xl text-[#C99A52]">
            Transparency & Care
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFF9F2]">
            Store Policies
          </h1>
          <p className="text-sm sm:text-base text-[#F7E6D7]/85 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about ordering directly from GAIN 24/7,
            our 10% direct order discount, Karachi delivery charges, freshness
            standards, and customer privacy.
          </p>
        </div>
      </section>

      {/* =========================================================
          STICKY POLICY FILTER BAR
      ========================================================= */}
      <div className="sticky top-15 z-30 bg-[#F7E6D7]/95 backdrop-blur-md border-b border-[#4A2414]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {POLICY_TABS.map((tab) => {
            const isSelected = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSection(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#4A2414] text-[#FFF9F2]'
                    : 'bg-[#FFF9F2]/85 text-[#4A2414] hover:bg-[#FFF9F2] hover:text-[#24140E]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          POLICY CONTENT BLOCKS
      ========================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        {/* 1. DELIVERY POLICY */}
        {showSection('delivery') && (
          <article className="p-7 sm:p-9 rounded-2xl bg-[#F7E6D7]/55 border border-[#4A2414]/12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A2414] text-[#C99A52] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-price text-xs text-[#8E2922] font-semibold">
                  01 · KARACHI DELIVERY
                </span>
                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#24140E]">
                  Delivery & Charges Policy
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#4A2414]/90 leading-relaxed">
              <p>
                GAIN 24/7 delivers freshly prepared brownies, desserts, ice
                cream, sundaes, shakes, and coffees from our kitchen at{' '}
                <strong className="text-[#24140E]">
                  {BRAND_INFO.fullAddress}
                </strong>{' '}
                to Gulshan-e-Iqbal and surrounding areas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/12 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#A96535] uppercase">
                      Standard Daytime / Evening
                    </p>
                    <p className="text-sm font-semibold text-[#24140E] mt-0.5">
                      Delivery Before 12:00 AM
                    </p>
                  </div>
                  <span className="font-mono-price text-lg font-bold text-[#8E2922]">
                    {formatPKR(BRAND_INFO.deliveryCharges.beforeMidnight)}/-
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/12 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#A96535] uppercase">
                      Late-Night Cravings
                    </p>
                    <p className="text-sm font-semibold text-[#24140E] mt-0.5">
                      Delivery After 12:00 AM
                    </p>
                  </div>
                  <span className="font-mono-price text-lg font-bold text-[#8E2922]">
                    {formatPKR(BRAND_INFO.deliveryCharges.afterMidnight)}/-
                  </span>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 pt-2">
                <li>
                  <strong className="text-[#24140E]">
                    Subject to Distance:
                  </strong>{' '}
                  Standard delivery charges ({formatPKR(150)}/- before 12am and{' '}
                  {formatPKR(200)}/- after 12am) apply to nearby areas and are
                  subject to distance from Block 6, Gulshan-e-Iqbal. Exact
                  delivery charges for farther locations are confirmed on
                  WhatsApp prior to dispatch.
                </li>
                <li>
                  <strong className="text-[#24140E]">Self Pickup:</strong>{' '}
                  Customers may also opt for self-pickup at A-23, Momin Square,
                  Block 6, Gulshan-e-Iqbal, Karachi with zero delivery fee.
                </li>
              </ul>
            </div>
          </article>
        )}

        {/* 2. ORDERING & 10% DIRECT DISCOUNT POLICY */}
        {showSection('ordering') && (
          <article className="p-7 sm:p-9 rounded-2xl bg-[#FFF9F2] border border-[#4A2414]/12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8E2922] text-[#FFF9F2] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-price text-xs text-[#A96535] font-semibold">
                  02 · DIRECT ORDERING
                </span>
                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#24140E]">
                  Ordering & 10% Direct Discount Policy
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#4A2414]/90 leading-relaxed">
              <p>
                We encourage customers to order directly through our official
                WhatsApp line at{' '}
                <strong className="font-mono-price text-[#24140E]">
                  {BRAND_INFO.phoneDisplay}
                </strong>
                .
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#24140E]">
                    10% Direct Order Discount:
                  </strong>{' '}
                  All direct orders placed via our website and official WhatsApp
                  receive a special 10% discount on food and beverage subtotal
                  (excluding delivery charges).
                </li>
                <li>
                  <strong className="text-[#24140E]">Menu Pricing:</strong> All
                  prices are listed in Pakistani Rupees (PKR). Our website
                  calculates your itemized estimate automatically before opening
                  WhatsApp.
                </li>
                <li>
                  <strong className="text-[#24140E]">
                    Order Confirmation:
                  </strong>{' '}
                  Your order is confirmed once you send your WhatsApp order
                  message and receive a confirmation reply from the GAIN 24/7
                  team.
                </li>
              </ul>
            </div>
          </article>
        )}

        {/* 3. FRESHNESS, HANDLING & QUALITY POLICY */}
        {showSection('freshness') && (
          <article className="p-7 sm:p-9 rounded-2xl bg-[#F7E6D7]/55 border border-[#4A2414]/12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A2414] text-[#C99A52] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-price text-xs text-[#4E9BA0] font-semibold">
                  03 · QUALITY & FRESHNESS
                </span>
                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#24140E]">
                  Freshness & Temperature-Sensitive Items Policy
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#4A2414]/90 leading-relaxed">
              <p>
                Every GAIN 24/7 dessert and beverage is prepared fresh to ensure
                rich flavor and indulgent texture.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#24140E]">
                    Warm Bakery Items:
                  </strong>{' '}
                  Loaded brownies, Matilda Cake Puddles, Brookie Skitt, gooey
                  cookies, and pressed waffles are prepared warm to order.
                </li>
                <li>
                  <strong className="text-[#24140E]">
                    Ice Cream, Sundaes, Shakes & Frappes:
                  </strong>{' '}
                  Chilled and frozen items (including Single Scoop Ice Creams,
                  Ikigai Special Sundaes, Brownie w/Icecream pairings, Milk &
                  Fruit Shakes, and Icy Shelf Coffees) are packed carefully for
                  delivery. Because Karachi weather is warm, we recommend
                  receiving your order promptly upon rider arrival and consuming
                  chilled items immediately or placing them in the freezer.
                </li>
              </ul>
            </div>
          </article>
        )}

        {/* 4. CANCELLATION, MODIFICATION & REPLACEMENT POLICY */}
        {showSection('cancellation') && (
          <article className="p-7 sm:p-9 rounded-2xl bg-[#FFF9F2] border border-[#4A2414]/12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A2414] text-[#C99A52] flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-price text-xs text-[#8E2922] font-semibold">
                  04 · CANCELLATION & SUPPORT
                </span>
                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#24140E]">
                  Order Modification, Cancellation & Replacement Policy
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#4A2414]/90 leading-relaxed">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#24140E]">
                    Order Modifications & Cancellations:
                  </strong>{' '}
                  Because our desserts, waffles, shakes, and coffees are
                  prepared fresh upon confirmation, any change or cancellation
                  must be requested on WhatsApp ({BRAND_INFO.phoneDisplay})
                  immediately before preparation or dispatch begins. Once an
                  order is prepared or out for delivery, it cannot be cancelled.
                </li>
                <li>
                  <strong className="text-[#24140E]">
                    Incorrect or Missing Items:
                  </strong>{' '}
                  If your delivered order is missing an item or does not match
                  your confirmed WhatsApp order summary, please contact us on
                  WhatsApp at{' '}
                  <span className="font-mono-price font-semibold">
                    {BRAND_INFO.phoneDisplay}
                  </span>{' '}
                  immediately upon delivery so we can resolve or replace the
                  affected item promptly.
                </li>
              </ul>
            </div>
          </article>
        )}

        {/* 5. PRIVACY POLICY */}
        {showSection('privacy') && (
          <article className="p-7 sm:p-9 rounded-2xl bg-[#F7E6D7]/55 border border-[#4A2414]/12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A2414] text-[#C99A52] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-price text-xs text-[#A96535] font-semibold">
                  05 · DATA & PRIVACY
                </span>
                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#24140E]">
                  Privacy Policy
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#4A2414]/90 leading-relaxed">
              <p>
                GAIN 24/7 respects your privacy and keeps your personal
                information secure:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#24140E]">
                    Information We Collect:
                  </strong>{' '}
                  When you build an order on our website and send it via
                  WhatsApp, you may provide your name, phone number, delivery
                  address, and order preferences.
                </li>
                <li>
                  <strong className="text-[#24140E]">
                    How We Use Your Information:
                  </strong>{' '}
                  Your contact and address details are used strictly to prepare,
                  confirm, and deliver your GAIN 24/7 order and provide direct
                  customer support.
                </li>
                <li>
                  <strong className="text-[#24140E]">
                    No Third-Party Selling:
                  </strong>{' '}
                  We never sell, rent, or trade customer phone numbers or
                  addresses to third-party marketers.
                </li>
              </ul>
            </div>
          </article>
        )}

        {/* 6. TERMS OF SERVICE & ALLERGEN INFORMATION */}
        {showSection('terms') && (
          <article className="p-7 sm:p-9 rounded-2xl bg-[#FFF9F2] border border-[#4A2414]/12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4A2414] text-[#C99A52] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-price text-xs text-[#4E9BA0] font-semibold">
                  06 · TERMS & ALLERGENS
                </span>
                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#24140E]">
                  Terms of Service & Allergen Notice
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm text-[#4A2414]/90 leading-relaxed">
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#24140E]">Allergen Notice:</strong>{' '}
                  Our kitchen prepares items containing dairy/milk, eggs, wheat
                  (gluten), cocoa, peanuts (<em>Peanut Butter Top</em>), tree
                  nuts including hazelnuts (<em>Nutella Top</em>,{' '}
                  <em>Double Choco Nutella</em>), walnuts (<em>Walnuts Top</em>
                  ), almonds (<em>Roasted Almond</em>, <em>Chikoo Almond</em>),
                  pistachios (<em>Pista</em>, <em>Pista-Badam Milk</em>,{' '}
                  <em>Kulfa Crunch</em>), and coconut (<em>Coco Bounty</em>).
                  Please let our team know on WhatsApp before ordering if you
                  have any food sensitivities.
                </li>
                <li>
                  <strong className="text-[#24140E]">
                    Product Availability:
                  </strong>{' '}
                  All menu items are subject to availability. If a specific
                  flavor or topping is temporarily unavailable, our team will
                  recommend a freshly prepared alternative on WhatsApp.
                </li>
              </ul>
            </div>
          </article>
        )}

        {/* Bottom Contact / Questions Box */}
        <div className="p-8 rounded-2xl bg-[#24140E] text-[#FFF9F2] border border-[#C99A52]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#FFF9F2]">
              Have a Question About Your Order?
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#F7E6D7]/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C99A52]" />
                {BRAND_INFO.addressLine1}, {BRAND_INFO.addressLine2}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C99A52]" />
                {BRAND_INFO.email}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                onNavigate('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-xl bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#C99A52] hover:text-[#24140E] transition-colors cursor-pointer"
            >
              Browse Menu
            </button>

            <a
              href={BRAND_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold tracking-wide hover:bg-[#A96535] transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP · {BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
