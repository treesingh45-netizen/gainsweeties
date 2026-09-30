import React, { useState } from 'react';
import { X, RotateCcw, Search, Upload, Image as ImageIcon } from 'lucide-react';
import { MenuItem, MENU_SECTIONS, formatPKR } from '../data/menuData';

interface PriceEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onUpdatePrice: (productId: string, newPrice: number) => void;
  onResetPrices: () => void;
  customLogoUrl: string;
  onUpdateLogoUrl: (url: string) => void;
  customHeroBgUrl: string;
  onUpdateHeroBgUrl: (url: string) => void;
}

export const PriceEditorModal: React.FC<PriceEditorModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdatePrice,
  onResetPrices,
  customLogoUrl,
  onUpdateLogoUrl,
  customHeroBgUrl,
  onUpdateHeroBgUrl,
}) => {
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.sectionLabel.toLowerCase().includes(search.toLowerCase())
  );

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        callback(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24140E]/75 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Brand Assets & Menu Price Manager"
    >
      <div
        className="w-full max-w-2xl bg-[#FFF9F2] border border-[#4A2414]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#24140E] text-[#FFF9F2] flex items-center justify-between">
          <div>
            <h2 className="font-serif-editorial text-2xl font-bold">
              Brand Logo, Hero Photo & Menu Price Manager
            </h2>
            <p className="text-xs text-[#F7E6D7]/80">
              Upload your logo.png or Google Drive link, and edit PKR prices live.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close manager"
            className="w-9 h-9 rounded-full bg-[#4A2414] text-[#FFF9F2] flex items-center justify-center hover:bg-[#8E2922] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Logo & Hero Background Uploader / Google Drive Link */}
        <div className="p-5 bg-[#F7E6D7]/70 border-b border-[#4A2414]/15 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Official Logo Input / File Upload */}
            <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/15 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#24140E] inline-flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-[#A96535]" />
                  Official GAIN 24/7 Logo
                </span>
                {customLogoUrl && (
                  <button
                    type="button"
                    onClick={() => onUpdateLogoUrl('')}
                    className="text-[11px] text-[#8E2922] hover:underline cursor-pointer"
                  >
                    Reset to Default Logo
                  </button>
                )}
              </div>
              <input
                type="text"
                value={customLogoUrl}
                onChange={(e) => onUpdateLogoUrl(e.target.value)}
                placeholder="Paste Google Drive or image URL..."
                className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-[#F7E6D7]/50 border border-[#4A2414]/20 text-[#24140E]"
              />
              <label className="w-full py-1.5 px-3 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#8E2922] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload logo.png from Device</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, onUpdateLogoUrl)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Hero Background Sweets Image Input / File Upload */}
            <div className="p-3.5 rounded-xl bg-[#FFF9F2] border border-[#4A2414]/15 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#24140E] inline-flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-[#A96535]" />
                  Hero Sweets Background
                </span>
                {customHeroBgUrl && (
                  <button
                    type="button"
                    onClick={() => onUpdateHeroBgUrl('')}
                    className="text-[11px] text-[#8E2922] hover:underline cursor-pointer"
                  >
                    Reset Default Photo
                  </button>
                )}
              </div>
              <input
                type="text"
                value={customHeroBgUrl}
                onChange={(e) => onUpdateHeroBgUrl(e.target.value)}
                placeholder="Paste Google Drive or image URL..."
                className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-[#F7E6D7]/50 border border-[#4A2414]/20 text-[#24140E]"
              />
              <label className="w-full py-1.5 px-3 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#8E2922] transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Background Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, onUpdateHeroBgUrl)}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Search & Reset Bar for Prices */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#4A2414]/10">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 text-[#4A2414]/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search any menu product to edit PKR price..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-[#FFF9F2] border border-[#4A2414]/15 text-[#24140E] focus:outline-none focus:border-[#4A2414]"
              />
            </div>

            <button
              type="button"
              onClick={onResetPrices}
              className="px-3.5 py-2 rounded-lg bg-[#FFF9F2] border border-[#4A2414]/20 text-xs font-medium text-[#8E2922] hover:bg-[#8E2922] hover:text-[#FFF9F2] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default PKR Prices</span>
            </button>
          </div>
        </div>

        {/* Item List by Section */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {MENU_SECTIONS.map((section) => {
            const sectionItems = filteredItems.filter(
              (i) => i.sectionId === section.id
            );
            if (sectionItems.length === 0) return null;

            return (
              <div key={section.id} className="space-y-2.5">
                <h3 className="font-serif-editorial text-lg font-bold text-[#4A2414] border-b border-[#4A2414]/12 pb-1">
                  {section.title}
                </h3>
                <div className="divide-y divide-[#4A2414]/8">
                  {sectionItems.map((item) => (
                    <div
                      key={item.id}
                      className="py-2.5 flex items-center justify-between gap-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-[#24140E]">
                          {item.name}
                        </p>
                        <p className="text-xs text-[#4A2414]/65">
                          Current: {formatPKR(item.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-price text-[#4A2414]/70">
                          PKR
                        </span>
                        <input
                          type="number"
                          min={0}
                          step={10}
                          value={item.price}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            if (!Number.isNaN(val) && val >= 0) {
                              onUpdatePrice(item.id, val);
                            }
                          }}
                          className="w-24 px-3 py-1.5 text-sm font-mono-price font-semibold text-right rounded-lg bg-[#F7E6D7]/50 border border-[#4A2414]/20 text-[#24140E] focus:outline-none focus:border-[#8E2922]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
