import React, { useState } from 'react';
import {
  X,
  Minus,
  Plus,
  Trash2,
  MessageCircle,
  ShoppingBag,
  Copy,
  Check,
  ArrowRight,
} from 'lucide-react';
import {
  CartItem,
  BRAND_INFO,
  formatPKR,
  buildWhatsAppOrderUrl,
  PageId,
} from '../data/menuData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number, notes?: string) => void;
  onRemoveItem: (productId: string, notes?: string) => void;
  onClearCart: () => void;
  onNavigate: (page: PageId) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate,
}) => {
  const [deliveryWindow, setDeliveryWindow] = useState<
    'before12am' | 'after12am' | 'pickup'
  >('after12am');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customNote, setCustomNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discountAmount = Math.round(
    (subtotal * BRAND_INFO.directDiscountPercent) / 100
  );
  const deliveryFee =
    cart.length === 0
      ? 0
      : deliveryWindow === 'before12am'
      ? BRAND_INFO.deliveryCharges.beforeMidnight
      : deliveryWindow === 'after12am'
      ? BRAND_INFO.deliveryCharges.afterMidnight
      : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const whatsappUrl = buildWhatsAppOrderUrl(cart, {
    customerName,
    customerAddress,
    deliveryWindow,
    applyDirectDiscount: true,
    customNote,
  });

  const handleCopySummary = () => {
    const lines = [
      'Hi GAIN 24/7, I would like to order:',
      ...cart.map(
        (i) =>
          `${i.quantity} × ${i.product.name}${i.notes ? ` (${i.notes})` : ''} — ${formatPKR(
            i.product.price * i.quantity
          )}`
      ),
      '',
      `Subtotal: ${formatPKR(subtotal)}`,
      `10% Direct Order Discount: -${formatPKR(discountAmount)}`,
      deliveryWindow !== 'pickup'
        ? `Delivery (${deliveryWindow === 'before12am' ? 'Before 12am' : 'After 12am'}): ${formatPKR(deliveryFee)} (Subject to distance)`
        : 'Self Pickup at Momin Square, Block 6',
      `Estimated Total: ${formatPKR(finalTotal)}`,
    ];
    if (customerName.trim()) lines.push(`Name: ${customerName.trim()}`);
    if (customerAddress.trim())
      lines.push(`Address: ${customerAddress.trim()}`);
    if (customNote.trim()) lines.push(`Note: ${customNote.trim()}`);

    navigator.clipboard?.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#24140E]/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Your GAIN 24/7 Order"
    >
      <div
        className="w-full max-w-md bg-[#FFF9F2] h-full flex flex-col justify-between shadow-2xl border-l border-[#4A2414]/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-5 bg-[#24140E] text-[#FFF9F2] flex items-center justify-between border-b border-[#C99A52]/20">
          <div>
            <h2 className="font-serif-editorial text-2xl font-bold tracking-wide">
              Your Craving Bag
            </h2>
            <p className="text-xs text-[#F7E6D7]/80">
              Direct WhatsApp orders automatically receive 10% OFF
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close order bag"
            className="w-9 h-9 rounded-full bg-[#4A2414] text-[#FFF9F2] flex items-center justify-center hover:bg-[#8E2922] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#F7E6D7] text-[#4A2414] flex items-center justify-center mb-4">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <p className="font-script text-3xl text-[#A96535] mb-1">
              Sweet cravings await
            </p>
            <h3 className="font-serif-editorial text-2xl font-semibold text-[#24140E] mb-2">
              Your Order Bag Is Empty
            </h3>
            <p className="text-sm text-[#4A2414]/75 max-w-xs mb-6">
              Explore our fudge brownies, Ikigai sundaes, creamy ice cream scoops,
              shakes, and cold coffees.
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigate('menu');
              }}
              className="px-6 py-3 rounded-lg bg-[#4A2414] text-[#FFF9F2] text-xs font-semibold hover:bg-[#8E2922] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Browse Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Itemized List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#4A2414]">
                  Selected Items ({cart.reduce((s, i) => s + i.quantity, 0)})
                </span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-xs text-[#8E2922] hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              </div>

              {cart.map((item) => {
                const key = `${item.product.id}-${item.notes || ''}`;
                return (
                  <div
                    key={key}
                    className="p-3.5 rounded-xl bg-[#F7E6D7]/55 border border-[#4A2414]/10 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif-editorial text-lg font-semibold text-[#24140E] truncate">
                        {item.product.name}
                      </h4>
                      {item.notes && (
                        <p className="text-xs text-[#A96535] truncate">
                          Note: {item.notes}
                        </p>
                      )}
                      <p className="font-mono-price text-xs text-[#4A2414]/80 mt-0.5">
                        {formatPKR(item.product.price)} each ·{' '}
                        <span className="font-semibold text-[#24140E]">
                          {formatPKR(item.product.price * item.quantity)}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, -1, item.notes)
                        }
                        aria-label="Decrease quantity"
                        className="w-7 h-7 rounded-md bg-[#FFF9F2] border border-[#4A2414]/15 flex items-center justify-center text-[#24140E] hover:bg-[#4A2414] hover:text-[#FFF9F2] transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono-price text-xs font-semibold w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.product.id, 1, item.notes)
                        }
                        aria-label="Increase quantity"
                        className="w-7 h-7 rounded-md bg-[#FFF9F2] border border-[#4A2414]/15 flex items-center justify-center text-[#24140E] hover:bg-[#4A2414] hover:text-[#FFF9F2] transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onRemoveItem(item.product.id, item.notes)
                        }
                        aria-label="Remove item"
                        className="w-7 h-7 rounded-md text-[#8E2922] hover:bg-[#8E2922]/10 flex items-center justify-center ml-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Window Selection */}
            <div className="pt-4 border-t border-[#4A2414]/12">
              <label className="block text-xs font-semibold text-[#24140E] mb-2">
                Standard Delivery Charges (Subject to distance)
              </label>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryWindow('before12am')}
                  className={`px-3.5 py-2.5 rounded-lg text-left text-xs border transition-colors flex items-center justify-between cursor-pointer ${
                    deliveryWindow === 'before12am'
                      ? 'bg-[#4A2414] text-[#FFF9F2] border-[#4A2414]'
                      : 'bg-[#FFF9F2] text-[#24140E] border-[#4A2414]/20 hover:bg-[#F7E6D7]/50'
                  }`}
                >
                  <span>Delivery Before 12:00 AM</span>
                  <span className="font-mono-price font-semibold">PKR 150/-</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryWindow('after12am')}
                  className={`px-3.5 py-2.5 rounded-lg text-left text-xs border transition-colors flex items-center justify-between cursor-pointer ${
                    deliveryWindow === 'after12am'
                      ? 'bg-[#4A2414] text-[#FFF9F2] border-[#4A2414]'
                      : 'bg-[#FFF9F2] text-[#24140E] border-[#4A2414]/20 hover:bg-[#F7E6D7]/50'
                  }`}
                >
                  <span>Midnight Delivery After 12:00 AM</span>
                  <span className="font-mono-price font-semibold">PKR 200/-</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryWindow('pickup')}
                  className={`px-3.5 py-2.5 rounded-lg text-left text-xs border transition-colors flex items-center justify-between cursor-pointer ${
                    deliveryWindow === 'pickup'
                      ? 'bg-[#4A2414] text-[#FFF9F2] border-[#4A2414]'
                      : 'bg-[#FFF9F2] text-[#24140E] border-[#4A2414]/20 hover:bg-[#F7E6D7]/50'
                  }`}
                >
                  <span>Self Pickup (Momin Square, Block 6)</span>
                  <span className="font-mono-price font-semibold">PKR 0</span>
                </button>
              </div>
            </div>

            {/* Optional Customer Details for WhatsApp Message */}
            <div className="space-y-3 pt-4 border-t border-[#4A2414]/12">
              <p className="text-xs font-semibold text-[#24140E]">
                Delivery Details for WhatsApp (Optional)
              </p>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#F7E6D7]/45 border border-[#4A2414]/15 text-[#24140E] placeholder:text-[#4A2414]/50 focus:outline-none focus:border-[#4A2414]"
              />
              <input
                type="text"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                placeholder="House / Flat, Block, Area (e.g. Block 6, Gulshan-e-Iqbal)"
                className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#F7E6D7]/45 border border-[#4A2414]/15 text-[#24140E] placeholder:text-[#4A2414]/50 focus:outline-none focus:border-[#4A2414]"
              />
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Special instructions (e.g. Extra warm fudge, call on arrival)"
                className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#F7E6D7]/45 border border-[#4A2414]/15 text-[#24140E] placeholder:text-[#4A2414]/50 focus:outline-none focus:border-[#4A2414]"
              />
            </div>
          </div>
        )}

        {/* Bottom Summary & WhatsApp CTA */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#F7E6D7]/80 border-t border-[#4A2414]/15 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#4A2414]">
                <span>Items Subtotal</span>
                <span className="font-mono-price">{formatPKR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#8E2922] font-medium">
                <span>Direct Order Discount (10% OFF)</span>
                <span className="font-mono-price">-{formatPKR(discountAmount)}</span>
              </div>
              {deliveryWindow !== 'pickup' && (
                <div className="flex justify-between text-[#4A2414]">
                  <span>
                    Standard Delivery (
                    {deliveryWindow === 'before12am'
                      ? 'Before 12am'
                      : 'After 12am'}
                    )
                  </span>
                  <span className="font-mono-price">{formatPKR(deliveryFee)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#24140E] pt-2 border-t border-[#4A2414]/15">
                <span>Estimated Total</span>
                <span className="font-mono-price">{formatPKR(finalTotal)}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold hover:bg-[#6E1E18] transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ORDER ON WHATSAPP · {BRAND_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full py-2 px-4 rounded-lg bg-[#FFF9F2] border border-[#4A2414]/15 text-[#4A2414] text-xs font-medium hover:bg-[#F7E6D7] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4E9BA0]" />
                    <span>Order Text Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Formatted Order Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
