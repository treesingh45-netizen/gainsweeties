import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react';
import {
  MenuItem,
  formatPKR,
  buildWhatsAppOrderUrl,
  BRAND_INFO,
} from '../data/menuData';
import { ResilientImage } from './ResilientImage';

interface ProductModalProps {
  product: MenuItem | null;
  onClose: () => void;
  onAddToCart: (product: MenuItem, quantity: number, notes?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setNotes('');
    }
  }, [product]);

  if (!product) return null;

  const totalPrice = product.price * quantity;
  const directDiscountPrice = Math.round(
    totalPrice * (1 - BRAND_INFO.directDiscountPercent / 100)
  );

  const instantWhatsAppUrl = buildWhatsAppOrderUrl(
    [{ product, quantity, notes: notes.trim() || undefined }],
    { applyDirectDiscount: true }
  );

  const handleAdd = () => {
    onAddToCart(product, quantity, notes.trim() || undefined);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#24140E]/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FFF9F2] border border-[#4A2414]/20 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#24140E]/80 text-[#FFF9F2] flex items-center justify-center hover:bg-[#8E2922] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Large Product Image */}
        <div className="md:col-span-6 relative bg-[#24140E] min-h-[260px] md:min-h-[420px]">
          <ResilientImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24140E]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-[#FFF9F2]">
            <p className="font-script text-2xl text-[#C99A52]">
              Made for your cravings
            </p>
            <p className="text-xs text-[#F7E6D7]/90">
              {product.sectionLabel}
            </p>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#FFF9F2]">
          <div>
            {/* Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#A96535] mb-2">
              {product.flavorNotes.map((note, idx) => (
                <React.Fragment key={note}>
                  {idx > 0 && <span aria-hidden="true">·</span>}
                  <span>{note}</span>
                </React.Fragment>
              ))}
            </div>

            <h2
              id="modal-product-title"
              className="font-serif-editorial text-3xl font-bold text-[#24140E] mb-2"
            >
              {product.name}
            </h2>

            <div className="flex items-baseline gap-3 mb-4 pb-4 border-b border-[#4A2414]/12">
              <span className="font-mono-price text-2xl font-semibold text-[#8E2922]">
                {formatPKR(product.price)}
              </span>
              <span className="text-xs text-[#4E9BA0] font-medium">
                · 10% off on direct WhatsApp orders
              </span>
            </div>

            <p className="text-sm text-[#4A2414]/90 leading-relaxed mb-5">
              {product.fullDescription}
            </p>

            {/* Optional Custom Preference */}
            <div className="mb-5">
              <label
                htmlFor="item-custom-note"
                className="block text-xs font-semibold text-[#4A2414] mb-1.5"
              >
                Special Request (Optional)
              </label>
              <input
                id="item-custom-note"
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g., Extra warm, less ice, gift note..."
                className="w-full px-3.5 py-2 text-sm rounded-lg bg-[#F7E6D7]/50 border border-[#4A2414]/15 text-[#24140E] placeholder:text-[#4A2414]/45 focus:outline-none focus:border-[#4A2414]"
              />
            </div>
          </div>

          {/* Quantity & CTA Controls */}
          <div className="pt-4 border-t border-[#4A2414]/12 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#4A2414]">
                Quantity
              </span>
              <div className="flex items-center gap-3 bg-[#F7E6D7] rounded-lg px-2 py-1 border border-[#4A2414]/15">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-8 h-8 rounded-md flex items-center justify-center text-[#24140E] hover:bg-[#FFF9F2] transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono-price text-sm font-semibold w-6 text-center text-[#24140E]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-8 h-8 rounded-md flex items-center justify-center text-[#24140E] hover:bg-[#FFF9F2] transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#4A2414]/80 py-1">
              <span>Direct Order Price (after 10% discount):</span>
              <span className="font-mono-price font-semibold text-[#24140E]">
                {formatPKR(directDiscountPrice)}{' '}
                <span className="line-through text-[#4A2414]/50 ml-1">
                  {formatPKR(totalPrice)}
                </span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-3 px-4 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#24140E] transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Order · {formatPKR(totalPrice)}</span>
              </button>

              <a
                href={instantWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold hover:bg-[#721F19] transition-colors flex items-center justify-center gap-2 whitespace-nowrap text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
