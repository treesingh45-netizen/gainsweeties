import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Truck,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  BRAND_INFO,
  CartItem,
  MenuItem,
  formatPKR,
  buildWhatsAppOrderUrl,
} from '../data/menuData';
import { BrandEmblem } from '../components/BrandEmblem';

interface ContactOrderPageProps {
  cart: CartItem[];
  menuItems: MenuItem[];
  onAddToCart: (product: MenuItem, quantity?: number) => void;
  onOpenOrderDrawer: () => void;
  instagramUrl: string;
  onUpdateInstagramUrl: (url: string) => void;
  customLogoUrl?: string;
}

export const ContactOrderPage: React.FC<ContactOrderPageProps> = ({
  cart,
  menuItems,
  onAddToCart,
  onOpenOrderDrawer,
  instagramUrl,
  onUpdateInstagramUrl,
  customLogoUrl,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliveryWindow, setDeliveryWindow] = useState<
    'before12am' | 'after12am' | 'pickup'
  >('after12am');
  const [customMessage, setCustomMessage] = useState('');
  const [quickItemSelect, setQuickItemSelect] = useState(
    menuItems[0]?.id || 'classic-fudge'
  );
  const [showIgConnect, setShowIgConnect] = useState(false);
  const [igHandleInput, setIgHandleInput] = useState(instagramUrl);

  const directOrderWhatsAppUrl = buildWhatsAppOrderUrl(cart, {
    customerName,
    customerAddress,
    deliveryWindow,
    applyDirectDiscount: true,
    customNote: customMessage,
  });

  const handleQuickAddSelected = () => {
    const found = menuItems.find((m) => m.id === quickItemSelect);
    if (found) {
      onAddToCart(found, 1);
    }
  };

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* =========================================================
          PAGE HERO
      ========================================================= */}
      <section className="bg-[#24140E] text-[#FFF9F2] py-16 lg:py-22 border-b border-[#C99A52]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="font-script text-3xl text-[#C99A52]">
            Made for your cravings
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2]">
            Let’s Satisfy That Craving
          </h1>
          <p className="text-base sm:text-lg text-[#F7E6D7]/85 max-w-2xl mx-auto">
            Direct orders receive a special 10% discount. Message us directly on
            WhatsApp or visit us at Momin Square, Block 6, Gulshan-e-Iqbal.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={directOrderWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-sm font-semibold tracking-wide hover:bg-[#A96535] transition-colors inline-flex items-center gap-2.5 shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ORDER ON WHATSAPP</span>
            </a>

            {cart.length > 0 && (
              <button
                type="button"
                onClick={onOpenOrderDrawer}
                className="px-6 py-4 rounded-xl bg-[#4A2414] text-[#FFF9F2] text-sm font-semibold hover:bg-[#C99A52] hover:text-[#24140E] transition-colors cursor-pointer"
              >
                View Bag ({cart.reduce((s, i) => s + i.quantity, 0)} Items)
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* =========================================================
            CONTACT DETAILS + DIRECT ORDER COMPOSER GRID
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact, Delivery Charges & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Brand & Address Card */}
            <div className="p-7 rounded-2xl bg-[#F7E6D7] border border-[#4A2414]/15 space-y-6">
              <div className="flex items-center gap-4 border-b border-[#4A2414]/12 pb-5">
                <BrandEmblem
                  size="md"
                  customLogoUrl={customLogoUrl}
                />
                <div>
                  <h2 className="font-serif-editorial text-3xl font-bold text-[#24140E]">
                    {BRAND_INFO.name}
                  </h2>
                  <p className="text-xs text-[#4A2414]/80">
                    {BRAND_INFO.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#8E2922] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#A96535] uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-[#24140E] font-medium leading-relaxed mt-0.5">
                      A-23, Momin Square,
                      <br />
                      Block 6 Gulshan-e-Iqbal,
                      <br />
                      Karachi, 75300, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#8E2922] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#A96535] uppercase tracking-wider">
                      WhatsApp / Phone
                    </p>
                    <a
                      href={BRAND_INFO.whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-price text-lg font-bold text-[#24140E] hover:text-[#8E2922] transition-colors block mt-0.5"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#8E2922] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#A96535] uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-[#24140E] font-medium hover:text-[#8E2922] transition-colors block mt-0.5"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#4A2414]/12 space-y-3">
                <p className="text-xs font-semibold text-[#4A2414]">
                  Connect on Social Media
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={BRAND_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#24140E] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {instagramUrl ? (
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold hover:bg-[#4A2414] transition-colors inline-flex items-center gap-2"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowIgConnect((v) => !v)}
                      className="px-4 py-2.5 rounded-lg bg-[#FFF9F2] border border-[#4A2414]/20 text-[#24140E] text-xs font-semibold hover:bg-[#4A2414] hover:text-[#FFF9F2] transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Instagram</span>
                    </button>
                  )}
                </div>

                {showIgConnect && (
                  <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/20 space-y-2">
                    <label
                      htmlFor="contact-ig-input"
                      className="block text-xs font-medium text-[#4A2414]"
                    >
                      Enter Official GAIN 24/7 Instagram URL or Handle:
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="contact-ig-input"
                        type="text"
                        value={igHandleInput}
                        onChange={(e) => setIgHandleInput(e.target.value)}
                        placeholder="@gain24.7 or https://instagram.com/..."
                        className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-[#F7E6D7]/50 border border-[#4A2414]/20 text-[#24140E]"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const trimmed = igHandleInput.trim();
                          const url = trimmed.startsWith('http')
                            ? trimmed
                            : trimmed
                            ? `https://instagram.com/${trimmed.replace(/^@/, '')}`
                            : '';
                          onUpdateInstagramUrl(url);
                          setShowIgConnect(false);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold cursor-pointer"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Standard Delivery Charges Card */}
            <div className="p-7 rounded-2xl bg-[#24140E] text-[#FFF9F2] border border-[#C99A52]/25 space-y-4">
              <div className="flex items-center gap-2.5 text-[#C99A52]">
                <Truck className="w-5 h-5" />
                <h3 className="font-serif-editorial text-2xl font-bold text-[#FFF9F2]">
                  Standard Delivery Charges
                </h3>
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-[#4A2414]/60 border border-[#FFF9F2]/10 flex items-center justify-between">
                  <span className="text-sm text-[#F7E6D7]">Before 12am</span>
                  <span className="font-mono-price text-base font-bold text-[#C99A52]">
                    PKR 150/-
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#4A2414]/60 border border-[#FFF9F2]/10 flex items-center justify-between">
                  <span className="text-sm text-[#F7E6D7]">After 12am</span>
                  <span className="font-mono-price text-base font-bold text-[#C99A52]">
                    PKR 200/-
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#F7E6D7]/75 italic">
                Subject to distance.
              </p>

              <div className="pt-3 border-t border-[#FFF9F2]/10 flex items-center gap-2 text-xs text-[#4E9BA0] font-medium">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Direct orders receive a special 10% discount.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Direct Order Builder */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#FFF9F2] border border-[#4A2414]/15 space-y-6">
              <div>
                <p className="font-script text-2xl text-[#A96535]">
                  Direct WhatsApp Checkout
                </p>
                <h2 className="font-serif-editorial text-3xl font-bold text-[#24140E]">
                  Build & Send Your Order on WhatsApp
                </h2>
                <p className="text-xs text-[#4A2414]/75 mt-1">
                  Add items below or from the menu, choose your delivery time,
                  and launch WhatsApp with your complete formatted order.
                </p>
              </div>

              {/* Quick Item Adder */}
              <div className="p-4 rounded-xl bg-[#F7E6D7]/60 border border-[#4A2414]/12 space-y-2.5">
                <label
                  htmlFor="quick-order-item"
                  className="block text-xs font-semibold text-[#24140E]"
                >
                  Quick-Add a Menu Item to Your Order
                </label>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <select
                    id="quick-order-item"
                    value={quickItemSelect}
                    onChange={(e) => setQuickItemSelect(e.target.value)}
                    className="flex-1 px-3.5 py-2.5 text-xs rounded-lg bg-[#FFF9F2] border border-[#4A2414]/20 text-[#24140E]"
                  >
                    {menuItems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({item.sectionLabel}) — {formatPKR(item.price)}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={handleQuickAddSelected}
                    className="px-5 py-2.5 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#8E2922] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    + Add Item
                  </button>
                </div>
              </div>

              {/* Current Order Items Summary */}
              {cart.length > 0 ? (
                <div className="p-4 rounded-xl bg-[#F7E6D7]/40 border border-[#4A2414]/12 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#24140E]">
                      Items in Your Order ({cart.reduce((s, i) => s + i.quantity, 0)})
                    </span>
                    <button
                      type="button"
                      onClick={onOpenOrderDrawer}
                      className="text-xs text-[#8E2922] font-semibold hover:underline cursor-pointer"
                    >
                      Edit Quantities
                    </button>
                  </div>
                  <ul className="text-xs text-[#4A2414] space-y-1">
                    {cart.map((c) => (
                      <li
                        key={`${c.product.id}-${c.notes || ''}`}
                        className="flex justify-between"
                      >
                        <span>
                          {c.quantity} × {c.product.name}
                        </span>
                        <span className="font-mono-price font-semibold">
                          {formatPKR(c.product.price * c.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-xs text-[#4A2414]/70 italic">
                  No specific items added yet — you can add items above or click
                  “ORDER ON WHATSAPP” below to chat directly with our team.
                </p>
              )}

              {/* Customer Details Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#24140E] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#F7E6D7]/40 border border-[#4A2414]/20 text-[#24140E]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-window"
                    className="block text-xs font-semibold text-[#24140E] mb-1.5"
                  >
                    Delivery Window
                  </label>
                  <select
                    id="contact-window"
                    value={deliveryWindow}
                    onChange={(e) =>
                      setDeliveryWindow(
                        e.target.value as 'before12am' | 'after12am' | 'pickup'
                      )
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#F7E6D7]/40 border border-[#4A2414]/20 text-[#24140E]"
                  >
                    <option value="before12am">
                      Before 12am — PKR 150/- (Subject to distance)
                    </option>
                    <option value="after12am">
                      After 12am — PKR 200/- (Subject to distance)
                    </option>
                    <option value="pickup">
                      Self Pickup at Momin Square, Block 6
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-address"
                  className="block text-xs font-semibold text-[#24140E] mb-1.5"
                >
                  Delivery Address (Gulshan-e-Iqbal & Surrounding Areas)
                </label>
                <input
                  id="contact-address"
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="House / Apartment, Street, Block, Area, Karachi"
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#F7E6D7]/40 border border-[#4A2414]/20 text-[#24140E]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-notes"
                  className="block text-xs font-semibold text-[#24140E] mb-1.5"
                >
                  Order Notes / Custom Craving Request
                </label>
                <textarea
                  id="contact-notes"
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Tell us any special instructions or flavours..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#F7E6D7]/40 border border-[#4A2414]/20 text-[#24140E]"
                />
              </div>

              <a
                href={directOrderWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-sm font-semibold tracking-wide hover:bg-[#4A2414] transition-colors flex items-center justify-center gap-2.5 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>ORDER ON WHATSAPP · 10% DIRECT DISCOUNT</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================
            EMBEDDED GOOGLE MAPS LOCATION
        ========================================================= */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Find us in Karachi
              </p>
              <h2 className="font-serif-editorial text-3xl font-bold text-[#24140E]">
                A-23, Momin Square, Block 6, Gulshan-e-Iqbal, Karachi
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=A-23,+Momin+Square,+Block+6,+Gulshan-e-Iqbal,+Karachi,+75300,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#8E2922] hover:underline inline-flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-[#4A2414]/15 shadow-sm bg-[#F7E6D7]">
            <iframe
              title="GAIN 24/7 Location — A-23, Momin Square, Block 6 Gulshan-e-Iqbal, Karachi"
              src="https://www.google.com/maps?q=A-23,+Momin+Square,+Block+6,+Gulshan-e-Iqbal,+Karachi,+Pakistan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
