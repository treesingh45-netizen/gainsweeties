import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Check } from 'lucide-react';
import {
  MenuItem,
  IMAGES,
  BRAND_INFO,
  formatPKR,
} from '../data/menuData';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';

interface BrowniesCookiesPageProps {
  menuItems: MenuItem[];
  onSelectProduct: (product: MenuItem) => void;
  onAddToCart: (product: MenuItem, quantity?: number, notes?: string) => void;
}

export const BrowniesCookiesPage: React.FC<BrowniesCookiesPageProps> = ({
  menuItems,
  onSelectProduct,
  onAddToCart,
}) => {
  const classicBrownies = menuItems.filter(
    (i) => i.subGroup === 'classic-brownies'
  );
  const loadedBrownies = menuItems.filter(
    (i) => i.subGroup === 'loaded-brownies'
  );
  const brownieBoxes = menuItems.filter(
    (i) => i.subGroup === 'brownie-boxes' || i.subGroup === 'extras'
  );
  const cookiesAndCakes = menuItems.filter(
    (i) => i.subGroup === 'cookies' || i.subGroup === 'cakes-truffles'
  );
  const waffles = menuItems.filter((i) => i.subGroup === 'waffles');
  const iceCreamScoops = menuItems.filter(
    (i) => i.subGroup === 'ice-cream-flavors'
  );

  // Interactive "BUILD YOUR CRAVING" State
  const [selectedBaseId, setSelectedBaseId] = useState<string>(
    classicBrownies[0]?.id || 'classic-fudge'
  );
  const [selectedScoopId, setSelectedScoopId] = useState<string>('none');
  const [includeTopper, setIncludeTopper] = useState<boolean>(false);
  const [addedCustom, setAddedCustom] = useState(false);

  const selectedBase =
    menuItems.find((i) => i.id === selectedBaseId) || classicBrownies[0];
  const selectedScoop =
    selectedScoopId !== 'none'
      ? menuItems.find((i) => i.id === selectedScoopId)
      : undefined;
  const topperItem = menuItems.find((i) => i.id === 'topper-giftables');

  const customTotal =
    (selectedBase?.price || 0) +
    (selectedScoop?.price || 0) +
    (includeTopper && topperItem ? topperItem.price : 0);

  const customWhatsAppMessage = [
    'Hi GAIN 24/7, I would like to order my custom craving:',
    `• 1 × ${selectedBase?.name} (${formatPKR(selectedBase?.price || 0)})`,
    ...(selectedScoop
      ? [`• + Single Scoop: ${selectedScoop.name} (${formatPKR(selectedScoop.price)})`]
      : []),
    ...(includeTopper && topperItem
      ? [`• + ${topperItem.name} (${formatPKR(topperItem.price)})`]
      : []),
    `Total: ${formatPKR(customTotal)} (Eligible for 10% Direct Order Discount)`,
  ].join('\n');

  const customWhatsAppUrl = `${
    BRAND_INFO.whatsappBaseUrl
  }?text=${encodeURIComponent(customWhatsAppMessage)}`;

  const handleAddCustomToBag = () => {
    if (selectedBase) {
      onAddToCart(
        selectedBase,
        1,
        selectedScoop ? `Paired with ${selectedScoop.name} Scoop` : undefined
      );
    }
    if (selectedScoop) {
      onAddToCart(selectedScoop, 1, `For ${selectedBase?.name}`);
    }
    if (includeTopper && topperItem) {
      onAddToCart(topperItem, 1);
    }
    setAddedCustom(true);
    setTimeout(() => setAddedCustom(false), 1800);
  };

  return (
    <div className="bg-[#FFF9F2] min-h-screen">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative bg-[#24140E] text-[#FFF9F2] overflow-hidden py-16 lg:py-22 border-b border-[#C99A52]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="font-script text-3xl text-[#C99A52]">
              Made with love
            </p>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl font-bold text-[#FFF9F2] leading-[1.08]">
              Brownies Made for Serious Cravings
            </h1>
            <p className="text-base sm:text-lg text-[#F7E6D7]/85 leading-relaxed max-w-xl">
              Rich, fudgy, loaded and made to satisfy your sweetest cravings.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#C99A52]">
              <span>Classic Brownies</span>
              <span aria-hidden="true">·</span>
              <span>Loaded Brownies</span>
              <span aria-hidden="true">·</span>
              <span>Sharing Boxes</span>
              <span aria-hidden="true">·</span>
              <span>Cookies & Waffles</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#C99A52]/25 aspect-[4/3]">
              <ResilientImage
                src={IMAGES.fudgeBrownie}
                alt="GAIN 24/7 Crackly-top Chocolate Fudge Brownies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#C99A52]/25 aspect-[4/3] mt-6">
              <ResilientImage
                src={IMAGES.loadedBrownie}
                alt="SizzleMe Up Loaded Brownie with Ice Cream"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* =========================================================
            SECTION 1: CLASSIC BROWNIES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Signature Fudge
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                Classic Brownies
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Crackly dark chocolate fudge brownies finished with signature toppings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classicBrownies.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 2: LOADED BROWNIES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Hot & Cold Indulgence
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                Loaded Brownies
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Drenched in warm ganache and paired with cold creamy ice cream
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {loadedBrownies.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 3: BROWNIE BOXES & EXTRAS
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Share the Sweetness
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                Brownie Boxes
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Assorted boxes of 4, 6, and 12 brownies plus giftable toppers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {brownieBoxes.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 4: COOKIES, CAKE PUDDLES & TRUFFLES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Baked Warm & Gooey
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                Cookies, Cake Puddles & Truffles
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Gooey cookies, Matilda cake puddles, Lazy Cate Cake, Brookie Skitt & hand-rolled truffles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cookiesAndCakes.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 5: WAFFLES
        ========================================================= */}
        <section className="space-y-8">
          <div className="border-b border-[#4A2414]/15 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="font-script text-2xl text-[#A96535]">
                Pressed to Order
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#24140E]">
                Waffles
              </h2>
            </div>
            <p className="text-xs text-[#4A2414]/75">
              Crisp caramelized edges with warm fudgy or cookie dough centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {waffles.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                ctaLabel="Order Now"
              />
            ))}
          </div>
        </section>

        {/* =========================================================
            INTERACTIVE "BUILD YOUR CRAVING" MODULE
        ========================================================= */}
        <section className="rounded-2xl bg-[#24140E] text-[#FFF9F2] border border-[#C99A52]/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="font-script text-3xl text-[#C99A52] mb-1">
                  Treat yourself
                </p>
                <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold tracking-wide text-[#FFF9F2]">
                  BUILD YOUR CRAVING
                </h2>
                <p className="text-sm text-[#F7E6D7]/80 mt-2 max-w-xl">
                  Customize your ideal brownie or cookie combination with a
                  chilled scoop of ice cream and a celebration topper, then send
                  it directly to our kitchen on WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="craving-base-select"
                    className="block text-xs font-semibold text-[#C99A52] mb-1.5"
                  >
                    1. Choose Your Brownie, Box or Cookie
                  </label>
                  <select
                    id="craving-base-select"
                    value={selectedBaseId}
                    onChange={(e) => setSelectedBaseId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#4A2414] border border-[#C99A52]/30 text-[#FFF9F2] focus:outline-none focus:border-[#C99A52]"
                  >
                    {[...classicBrownies, ...loadedBrownies, ...cookiesAndCakes, ...waffles].map(
                      (item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} — {formatPKR(item.price)}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="craving-scoop-select"
                    className="block text-xs font-semibold text-[#C99A52] mb-1.5"
                  >
                    2. Pair with Single Scoop Ice Cream (Optional)
                  </label>
                  <select
                    id="craving-scoop-select"
                    value={selectedScoopId}
                    onChange={(e) => setSelectedScoopId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-[#4A2414] border border-[#C99A52]/30 text-[#FFF9F2] focus:outline-none focus:border-[#C99A52]"
                  >
                    <option value="none">No extra scoop</option>
                    {iceCreamScoops.map((scoop) => (
                      <option key={scoop.id} value={scoop.id}>
                        + {scoop.name} Scoop ({formatPKR(scoop.price)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="craving-topper-check"
                  type="checkbox"
                  checked={includeTopper}
                  onChange={(e) => setIncludeTopper(e.target.checked)}
                  className="w-4 h-4 accent-[#C99A52] rounded cursor-pointer"
                />
                <label
                  htmlFor="craving-topper-check"
                  className="text-xs text-[#F7E6D7] cursor-pointer"
                >
                  Add Topper Giftables (+{formatPKR(topperItem?.price || 200)})
                </label>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#4A2414]/60 border border-[#C99A52]/25 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#FFF9F2]/15 pb-3">
                <span className="text-xs text-[#F7E6D7]/80">
                  Your Custom Craving Total
                </span>
                <span className="font-mono-price text-2xl font-bold text-[#C99A52]">
                  {formatPKR(customTotal)}
                </span>
              </div>

              <ul className="text-xs text-[#F7E6D7]/90 space-y-1.5">
                <li>
                  • {selectedBase?.name} ({formatPKR(selectedBase?.price || 0)})
                </li>
                {selectedScoop && (
                  <li>
                    • + {selectedScoop.name} Ice Cream Scoop (
                    {formatPKR(selectedScoop.price)})
                  </li>
                )}
                {includeTopper && topperItem && (
                  <li>
                    • + {topperItem.name} ({formatPKR(topperItem.price)})
                  </li>
                )}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleAddCustomToBag}
                  className="py-3 px-4 rounded-lg bg-[#FFF9F2] text-[#24140E] text-xs font-semibold hover:bg-[#C99A52] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  {addedCustom ? (
                    <>
                      <Check className="w-4 h-4 text-[#4E9BA0]" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Order Bag</span>
                    </>
                  )}
                </button>

                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-lg bg-[#8E2922] text-[#FFF9F2] text-xs font-semibold hover:bg-[#A96535] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>ORDER ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
