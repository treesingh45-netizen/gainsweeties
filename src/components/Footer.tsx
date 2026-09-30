import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { BRAND_INFO, PageId, MenuFilterTab } from '../data/menuData';
import { BrandEmblem } from './BrandEmblem';

interface FooterProps {
  onNavigate: (page: PageId, filter?: MenuFilterTab) => void;
  onOpenPriceEditor: () => void;
  instagramUrl: string;
  onUpdateInstagramUrl: (url: string) => void;
  customLogoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPriceEditor,
  instagramUrl,
  onUpdateInstagramUrl,
  customLogoUrl,
}) => {
  const [showIgPrompt, setShowIgPrompt] = useState(false);
  const [igInput, setIgInput] = useState(instagramUrl);

  const handleLink = (page: PageId, filter?: MenuFilterTab) => {
    onNavigate(page, filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24140E] text-[#F7E6D7] border-t border-[#C99A52]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FFF9F2]/10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-4">
              <BrandEmblem
                size="md"
                customLogoUrl={customLogoUrl}
              />
              <div>
                <h2 className="font-serif-editorial text-3xl font-bold text-[#FFF9F2] tracking-wide">
                  {BRAND_INFO.name}
                </h2>
                <p className="font-script text-2xl text-[#C99A52]">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm text-[#F7E6D7]/75 leading-relaxed max-w-sm">
              Brownies, creamy desserts, ice cream, shakes, coffee and indulgent
              treats made for every craving — day or night.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GAIN 24/7 on Facebook"
                className="w-10 h-10 rounded-lg bg-[#4A2414] text-[#FFF9F2] flex items-center justify-center hover:bg-[#C99A52] hover:text-[#24140E] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GAIN 24/7 on Instagram"
                  className="w-10 h-10 rounded-lg bg-[#4A2414] text-[#FFF9F2] flex items-center justify-center hover:bg-[#C99A52] hover:text-[#24140E] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowIgPrompt((v) => !v)}
                  aria-label="Connect official GAIN 24/7 Instagram account"
                  title="Connect official GAIN 24/7 Instagram URL"
                  className="w-10 h-10 rounded-lg bg-[#4A2414] text-[#FFF9F2] flex items-center justify-center hover:bg-[#C99A52] hover:text-[#24140E] transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
              )}

              <a
                href={BRAND_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="w-10 h-10 rounded-lg bg-[#8E2922] text-[#FFF9F2] flex items-center justify-center hover:bg-[#C99A52] hover:text-[#24140E] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {showIgPrompt && (
              <div className="p-3 rounded-xl bg-[#4A2414]/60 border border-[#C99A52]/30 space-y-2 max-w-xs">
                <p className="text-xs text-[#F7E6D7]">
                  Connect Official GAIN 24/7 Instagram URL or Handle:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={igInput}
                    onChange={(e) => setIgInput(e.target.value)}
                    placeholder="https://instagram.com/..."
                    className="flex-1 px-2.5 py-1.5 text-xs rounded bg-[#24140E] border border-[#C99A52]/30 text-[#FFF9F2]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const formatted = igInput.trim().startsWith('http')
                        ? igInput.trim()
                        : igInput.trim()
                        ? `https://instagram.com/${igInput
                            .trim()
                            .replace(/^@/, '')}`
                        : '';
                      onUpdateInstagramUrl(formatted);
                      setShowIgPrompt(false);
                    }}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-[#C99A52] text-[#24140E] cursor-pointer"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif-editorial text-lg font-semibold text-[#C99A52]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#F7E6D7]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('home')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('menu')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('about')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('policies')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Policies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('contact')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif-editorial text-lg font-semibold text-[#C99A52]">
              Categories
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#F7E6D7]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('brownies')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Brownies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('desserts')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Ice Cream
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('desserts')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Sundaes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('shakes')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Shakes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('shakes')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Coffee
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLink('shakes')}
                  className="hover:text-[#FFF9F2] transition-colors cursor-pointer"
                >
                  Frappes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif-editorial text-lg font-semibold text-[#C99A52]">
              Contact & Location
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F7E6D7]/85">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C99A52] shrink-0 mt-0.5" />
                <a
                  href={BRAND_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-price hover:text-[#FFF9F2] transition-colors"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C99A52] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="hover:text-[#FFF9F2] transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99A52] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  A-23, Momin Square, Block 6 Gulshan-e-Iqbal, Karachi
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Brand/Price Manager Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7E6D7]/60">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© 2026 GAIN 24/7. All Rights Reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleLink('policies')}
              className="hover:text-[#C99A52] transition-colors cursor-pointer"
            >
              Delivery & Store Policies
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleLink('policies')}
              className="hover:text-[#C99A52] transition-colors cursor-pointer"
            >
              Privacy & Terms
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenPriceEditor}
            className="inline-flex items-center gap-1.5 text-[#C99A52]/85 hover:text-[#C99A52] transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Manage Logo, Photos & Menu Prices (PKR)</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
