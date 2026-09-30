import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { MenuItem, formatPKR } from '../data/menuData';
import { ResilientImage } from './ResilientImage';

interface ProductCardProps {
  product: MenuItem;
  onSelect: (product: MenuItem) => void;
  onAddToCart: (product: MenuItem, quantity?: number) => void;
  ctaLabel?: 'Order Now' | 'Add to Order';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  ctaLabel = 'Add to Order',
}) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article
      onClick={() => onSelect(product)}
      className="group cursor-pointer bg-[#FFF9F2] border border-[#4A2414]/12 rounded-xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
    >
      <div>
        {/* Product Image Container (4:3 aspect ratio) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#24140E]">
          <ResilientImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24140E]/45 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-200" />
        </div>

        {/* Content Body */}
        <div className="p-5 pb-4">
          {/* Unboxed Metadata with typographic separator */}
          <div className="flex items-center gap-1.5 text-xs text-[#A96535] tracking-wide mb-1.5 truncate">
            <span>{product.sectionLabel}</span>
            {product.flavorNotes[0] && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#4A2414]/75">{product.flavorNotes[0]}</span>
              </>
            )}
          </div>

          {/* Title & Price Row */}
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <h3 className="font-serif-editorial text-xl font-semibold text-[#24140E] group-hover:text-[#8E2922] transition-colors leading-snug">
              {product.name}
            </h3>
            <span className="font-mono-price text-sm font-medium text-[#4A2414] whitespace-nowrap shrink-0">
              {formatPKR(product.price)}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-sm text-[#4A2414]/80 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Footer Action Bar */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-3 border-t border-[#4A2414]/8">
        <span className="text-xs font-medium text-[#4E9BA0] group-hover:underline whitespace-nowrap">
          View Details
        </span>

        <button
          type="button"
          onClick={handleQuickAdd}
          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
            justAdded
              ? 'bg-[#4E9BA0] text-[#FFF9F2]'
              : 'bg-[#4A2414] text-[#FFF9F2] hover:bg-[#8E2922]'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Added to Order</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>{ctaLabel}</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
