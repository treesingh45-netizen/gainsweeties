/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  INITIAL_MENU_ITEMS,
  MenuItem,
  PageId,
  MenuFilterTab,
  CartItem,
  formatPKR,
} from './data/menuData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { resolveDriveOrImageUrl } from './components/BrandEmblem';
import { ProductModal } from './components/ProductModal';
import { OrderDrawer } from './components/OrderDrawer';
import { PriceEditorModal } from './components/PriceEditorModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { BrowniesCookiesPage } from './pages/BrowniesCookiesPage';
import { IceCreamSundaesPage } from './pages/IceCreamSundaesPage';
import { ShakesCoffeePage } from './pages/ShakesCoffeePage';
import { AboutPage } from './pages/AboutPage';
import { ContactOrderPage } from './pages/ContactOrderPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ShoppingBag, MessageCircle } from 'lucide-react';

const PRICE_STORAGE_KEY = 'gain247_price_overrides_v2';
const IG_STORAGE_KEY = 'gain247_instagram_url_v1';
const LOGO_STORAGE_KEY = 'gain247_custom_logo_v1';
const HERO_BG_STORAGE_KEY = 'gain247_custom_hero_bg_v1';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [menuFilter, setMenuFilter] = useState<MenuFilterTab>('all');

  // Centralized Menu Items with editable PKR prices & real photography
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem(PRICE_STORAGE_KEY);
      if (saved) {
        const overrides: Record<string, number> = JSON.parse(saved);
        return INITIAL_MENU_ITEMS.map((item) =>
          typeof overrides[item.id] === 'number'
            ? { ...item, price: overrides[item.id] }
            : item
        );
      }
    } catch {
      // Fallback to default prices
    }
    return INITIAL_MENU_ITEMS;
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isPriceEditorOpen, setIsPriceEditorOpen] = useState(false);

  const [instagramUrl, setInstagramUrl] = useState<string>(() => {
    try {
      return localStorage.getItem(IG_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const [customLogoUrl, setCustomLogoUrl] = useState<string>(() => {
    try {
      return localStorage.getItem(LOGO_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  const [customHeroBgUrl, setCustomHeroBgUrl] = useState<string>(() => {
    try {
      return localStorage.getItem(HERO_BG_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });

  // Sync updated menu prices into any existing cart items
  useEffect(() => {
    setCart((prev) =>
      prev.map((cartItem) => {
        const updatedProduct = menuItems.find(
          (m) => m.id === cartItem.product.id
        );
        return updatedProduct
          ? { ...cartItem, product: updatedProduct }
          : cartItem;
      })
    );
  }, [menuItems]);

  // Keep browser favicon synced with GAIN 24/7 logo
  useEffect(() => {
    const iconHref = customLogoUrl
      ? resolveDriveOrImageUrl(customLogoUrl)
      : '/favicon.svg';
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = iconHref;
  }, [customLogoUrl]);

  const handleNavigate = (page: PageId, filter?: MenuFilterTab) => {
    if (filter) {
      setMenuFilter(filter);
    } else if (page === 'menu') {
      setMenuFilter('all');
    }
    setCurrentPage(page);
  };

  const handleAddToCart = (
    product: MenuItem,
    quantity = 1,
    notes?: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          (item.notes || '') === (notes || '')
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, { product, quantity, notes }];
    });
  };

  const handleUpdateQuantity = (
    productId: string,
    delta: number,
    notes?: string
  ) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            (item.notes || '') === (notes || '')
          ) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string, notes?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (item.notes || '') === (notes || '')
          )
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleUpdatePrice = (productId: string, newPrice: number) => {
    setMenuItems((prev) => {
      const next = prev.map((item) =>
        item.id === productId ? { ...item, price: newPrice } : item
      );
      try {
        const overrides: Record<string, number> = {};
        next.forEach((i) => {
          overrides[i.id] = i.price;
        });
        localStorage.setItem(PRICE_STORAGE_KEY, JSON.stringify(overrides));
      } catch {
        // Ignore storage error
      }
      return next;
    });
  };

  const handleResetPrices = () => {
    setMenuItems(INITIAL_MENU_ITEMS);
    try {
      localStorage.removeItem(PRICE_STORAGE_KEY);
    } catch {
      // Ignore storage error
    }
  };

  const handleUpdateInstagramUrl = (url: string) => {
    setInstagramUrl(url);
    try {
      localStorage.setItem(IG_STORAGE_KEY, url);
    } catch {
      // Ignore storage error
    }
  };

  const handleUpdateLogoUrl = (url: string) => {
    setCustomLogoUrl(url);
    try {
      if (url) {
        localStorage.setItem(LOGO_STORAGE_KEY, url);
      } else {
        localStorage.removeItem(LOGO_STORAGE_KEY);
      }
    } catch {
      // Ignore storage error
    }
  };

  const handleUpdateHeroBgUrl = (url: string) => {
    setCustomHeroBgUrl(url);
    try {
      if (url) {
        localStorage.setItem(HERO_BG_STORAGE_KEY, url);
      } else {
        localStorage.removeItem(HERO_BG_STORAGE_KEY);
      }
    } catch {
      // Ignore storage error
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F2] text-[#24140E]">
      {/* Sticky Top Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
        cartCount={totalCartItems}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        customLogoUrl={customLogoUrl}
      />

      {/* Active Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            menuItems={menuItems}
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
            customLogoUrl={customLogoUrl}
            customHeroBgUrl={customHeroBgUrl}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            menuItems={menuItems}
            initialFilter={menuFilter}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'brownies' && (
          <BrowniesCookiesPage
            menuItems={menuItems}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'desserts' && (
          <IceCreamSundaesPage
            menuItems={menuItems}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'shakes' && (
          <ShakesCoffeePage
            menuItems={menuItems}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            customLogoUrl={customLogoUrl}
          />
        )}

        {currentPage === 'policies' && (
          <PoliciesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactOrderPage
            cart={cart}
            menuItems={menuItems}
            onAddToCart={handleAddToCart}
            onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
            instagramUrl={instagramUrl}
            onUpdateInstagramUrl={handleUpdateInstagramUrl}
            customLogoUrl={customLogoUrl}
          />
        )}
      </main>

      {/* Compact Floating Order Pill when items are in Bag */}
      {totalCartItems > 0 && !isOrderDrawerOpen && (
        <div className="fixed bottom-4 right-4 z-30">
          <button
            type="button"
            onClick={() => setIsOrderDrawerOpen(true)}
            className="px-5 py-3 rounded-xl bg-[#8E2922] text-[#FFF9F2] shadow-xl border border-[#C99A52]/30 flex items-center gap-3 hover:bg-[#4A2414] transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#C99A52]" />
            <span className="text-xs font-semibold whitespace-nowrap">
              {totalCartItems} {totalCartItems === 1 ? 'Item' : 'Items'} ·{' '}
              <span className="font-mono-price">
                {formatPKR(totalCartAmount)}
              </span>
            </span>
            <span className="text-xs font-bold text-[#C99A52] inline-flex items-center gap-1 whitespace-nowrap">
              <MessageCircle className="w-3.5 h-3.5" />
              Order Now
            </span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPriceEditor={() => setIsPriceEditorOpen(true)}
        instagramUrl={instagramUrl}
        onUpdateInstagramUrl={handleUpdateInstagramUrl}
        customLogoUrl={customLogoUrl}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-Over WhatsApp Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigate={(page) => handleNavigate(page)}
      />

      {/* Brand Logo, Hero Background & Central PKR Price Manager Modal */}
      <PriceEditorModal
        isOpen={isPriceEditorOpen}
        onClose={() => setIsPriceEditorOpen(false)}
        items={menuItems}
        onUpdatePrice={handleUpdatePrice}
        onResetPrices={handleResetPrices}
        customLogoUrl={customLogoUrl}
        onUpdateLogoUrl={handleUpdateLogoUrl}
        customHeroBgUrl={customHeroBgUrl}
        onUpdateHeroBgUrl={handleUpdateHeroBgUrl}
      />
    </div>
  );
}
