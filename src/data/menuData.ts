export type PageId =
  | 'home'
  | 'menu'
  | 'brownies'
  | 'desserts'
  | 'shakes'
  | 'about'
  | 'contact'
  | 'policies';

export type MenuSectionId =
  | 'chocolate-fudge-brownies'
  | 'sundae-truffle-cookies'
  | 'ice-cream'
  | 'milk-fresh-fruit-shakes'
  | 'icy-sundaes-ikigai'
  | 'icy-shelf-coffee-frappes';

export type MenuFilterTab =
  | 'all'
  | 'brownies'
  | 'sundaes-cookies'
  | 'ice-cream'
  | 'shakes'
  | 'coffee-frappes';

export interface MenuItem {
  id: string;
  name: string;
  price: number; // Price in PKR — editable from this single source of truth
  sectionId: MenuSectionId;
  sectionLabel: string;
  filterTab: Exclude<MenuFilterTab, 'all'>;
  subGroup?:
    | 'classic-brownies'
    | 'loaded-brownies'
    | 'brownie-boxes'
    | 'extras'
    | 'cakes-truffles'
    | 'cookies'
    | 'waffles'
    | 'ice-cream-flavors'
    | 'ikigai-specials'
    | 'shakes'
    | 'cold-coffee'
    | 'frappes';
  shortDescription: string;
  fullDescription: string;
  flavorNotes: string[];
  image: string;
  isSignature?: boolean;
  servingNote?: string;
}

export const BRAND_INFO = {
  name: 'GAIN 24/7',
  tagline: 'Your Midnight Craving Partner',
  businessType: 'Brownies, Desserts, Ice Cream, Shakes, Coffee & Frappes',
  addressLine1: 'A-23, Momin Square, Block 6',
  addressLine2: 'Gulshan-e-Iqbal, Karachi, 75300, Pakistan',
  fullAddress: 'A-23, Momin Square, Block 6, Gulshan-e-Iqbal, Karachi, 75300, Pakistan',
  phoneDisplay: '0321-9232704',
  whatsappNumber: '923219232704',
  whatsappBaseUrl: 'https://wa.me/923219232704',
  email: 'gainmulti@gmail.com',
  facebookUrl: 'https://facebook.com/GAINmulti',
  instagramHandle: '@gain24.7',
  directDiscountPercent: 10,
  deliveryCharges: {
    beforeMidnight: 150,
    afterMidnight: 200,
    note: 'Subject to distance.',
  },
};

/**
 * REAL, AUTHENTIC FOOD & DESSERT PHOTOGRAPHY (No AI-generated images).
 * All URLs are real camera photographs from Pexels CDN.
 */
export const IMAGES = {
  heroSpread:
    'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1600',
  fudgeBrownie:
    'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1000',
  brownieStack:
    'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1000',
  loadedBrownie:
    'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1000',
  chocolateCake:
    'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1000',
  cookiesWaffles:
    'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1000',
  waffleDrizzle:
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1000',
  iceCreamScoops:
    'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1000',
  iceCreamSundae:
    'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1000',
  milkshakes:
    'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1000',
  fruitShakes:
    'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1000',
  coffeeFrappes:
    'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1000',
  blendedFrappe:
    'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=1000',
};

export const MENU_SECTIONS: {
  id: MenuSectionId;
  title: string;
  subtitle: string;
  filterTab: Exclude<MenuFilterTab, 'all'>;
  note?: string;
}[] = [
  {
    id: 'chocolate-fudge-brownies',
    title: 'Chocolate Fudge Brownies',
    subtitle:
      'Dense, crackly-top artisanal fudge brownies baked fresh and finished with signature toppings.',
    filterTab: 'brownies',
  },
  {
    id: 'sundae-truffle-cookies',
    title: 'Sundae, Truffle & Cookies',
    subtitle:
      'Decadent cake puddles, molten brookie skillets, hand-rolled fudge truffles, New York style cookies, and crisp waffles.',
    filterTab: 'sundaes-cookies',
  },
  {
    id: 'ice-cream',
    title: 'Ice Cream',
    subtitle:
      'Velvety, slow-churned single scoop flavors crafted for pure refreshment or pairing with warm desserts.',
    filterTab: 'ice-cream',
    note: 'All Ice Creams with Single Scoop — PKR 150',
  },
  {
    id: 'milk-fresh-fruit-shakes',
    title: 'Milk & Fresh Fruit Shakes',
    subtitle:
      'Thick, chilled shakes blended with real fruit, roasted nuts, and rich chocolate.',
    filterTab: 'shakes',
  },
  {
    id: 'icy-sundaes-ikigai',
    title: 'Icy Sundaes — Ikigai Special',
    subtitle:
      'Layered ice cream sundaes loaded with brownie cubes, crushed Oreos, fruit compotes, and warm sauces.',
    filterTab: 'sundaes-cookies',
  },
  {
    id: 'icy-shelf-coffee-frappes',
    title: 'Icy Shelf Coffee & Frappes',
    subtitle:
      'Barista-crafted cold coffees, silky lattes, and blended dessert frappes for any hour.',
    filterTab: 'coffee-frappes',
  },
];

/**
 * SINGLE SOURCE OF TRUTH FOR ALL GAIN 24/7 MENU ITEMS & PKR PRICES.
 * Edit any price or description below to update across all 7 pages, modals, and WhatsApp checkout.
 */
export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. CHOCOLATE FUDGE BROWNIES
  // ==========================================
  {
    id: 'classic-fudge',
    name: 'Classic Fudge',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Our signature crackly-top dark chocolate fudge brownie with a dense, melt-in-mouth center.',
    fullDescription:
      'Baked in small batches using rich dark cocoa and real butter for that unmistakable glossy, crackly crust and deeply fudgy center.',
    flavorNotes: ['Dark Cocoa', 'Fudgy Center', 'Crackly Crust'],
    image: IMAGES.fudgeBrownie,
    isSignature: true,
    servingNote: 'Served warm on request',
  },
  {
    id: 'choco-chunk-top',
    name: 'Choco Chunk Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Rich fudge brownie studded with generous chunks of melted semi-sweet chocolate on top.',
    fullDescription:
      'Double the chocolate indulgence—our signature fudge base crowned with hand-chopped chocolate chunks that stay soft and glossy.',
    flavorNotes: ['Semi-Sweet Chunks', 'Double Cocoa', 'Rich Fudge'],
    image: IMAGES.brownieStack,
    isSignature: true,
  },
  {
    id: 'cadbury-top',
    name: 'Cadbury Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Warm chocolate fudge brownie topped with creamy melted Cadbury dairy milk chocolate.',
    fullDescription:
      'A nostalgic crowd-pleaser combining our intense dark fudge brownie with smooth, velvety Cadbury milk chocolate melted right over the top.',
    flavorNotes: ['Creamy Dairy Milk', 'Smooth Melt', 'Fudge Base'],
    image: IMAGES.fudgeBrownie,
  },
  {
    id: 'walnuts-top',
    name: 'Walnuts Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Toasted crunchy walnut halves pressed into our signature rich chocolate fudge brownie.',
    fullDescription:
      'Earthy, oven-toasted California walnuts balance the deep sweetness of our fudge brownie with an irresistible nutty crunch.',
    flavorNotes: ['Toasted Walnuts', 'Nutty Crunch', 'Dark Chocolate'],
    image: IMAGES.brownieStack,
  },
  {
    id: 'oreo-top',
    name: 'Oreo Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Fudgy chocolate brownie baked with crisp Oreo cookies and chocolate cream drizzle.',
    fullDescription:
      'Crunchy cocoa wafer pieces and sweet vanilla creme meet our dense fudge brownie for the ultimate cookies-and-cream bite.',
    flavorNotes: ['Oreo Wafer', 'Cookies & Cream', 'Fudge Base'],
    image: IMAGES.fudgeBrownie,
  },
  {
    id: 'nutella-top',
    name: 'Nutella Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Decadent fudge brownie swirled generously with velvety roasted hazelnut Nutella spread.',
    fullDescription:
      'Finished with a thick, glossy layer of authentic hazelnut-cocoa Nutella spread that melts into every warm bite of fudge.',
    flavorNotes: ['Roasted Hazelnut', 'Nutella Swirl', 'Velvety Finish'],
    image: IMAGES.fudgeBrownie,
    isSignature: true,
  },
  {
    id: 'peanut-butter-top',
    name: 'Peanut Butter Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Sweet-and-savory roasted peanut butter swirled across a rich dark chocolate brownie.',
    fullDescription:
      'Creamy roasted peanut butter marbled over dark chocolate fudge—delivering a bold, nutty contrast for serious peanut butter lovers.',
    flavorNotes: ['Roasted Peanut Butter', 'Sweet & Salty', 'Dark Fudge'],
    image: IMAGES.brownieStack,
  },
  {
    id: 'caramel-top',
    name: 'Caramel Top',
    price: 350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'classic-brownies',
    shortDescription:
      'Buttery golden caramel ribboned over our warm, dark chocolate fudge brownie.',
    fullDescription:
      'House-cooked golden caramel sauce drizzled generously over dark cocoa fudge for a silky, buttery finish.',
    flavorNotes: ['Golden Caramel', 'Buttery Toffee', 'Rich Cocoa'],
    image: IMAGES.fudgeBrownie,
    isSignature: true,
  },
  {
    id: 'sizzleme-up-loaded',
    name: 'SizzleMe Up Loaded',
    price: 450,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'loaded-brownies',
    shortDescription:
      'Ultra-loaded warm brownie drenched in molten chocolate, caramel, and crunchy toppings.',
    fullDescription:
      'Our signature loaded indulgence—served warm and overflowing with rich chocolate ganache, golden caramel drizzle, and chocolate chunks.',
    flavorNotes: ['Molten Ganache', 'Loaded Toppings', 'Served Warm'],
    image: IMAGES.loadedBrownie,
    isSignature: true,
  },
  {
    id: 'sizzleme-up-icecream',
    name: 'SizzleMe Up w/Icecream',
    price: 550,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'loaded-brownies',
    shortDescription:
      'Loaded hot fudge brownie crowned with a cold, creamy scoop of ice cream and hot sauce.',
    fullDescription:
      'The dramatic hot-and-cold sensation: our fully loaded SizzleMe Up brownie paired with a velvety scoop of ice cream that melts into the warm fudge.',
    flavorNotes: ['Hot & Cold Contrast', 'Vanilla Scoop', 'Molten Fudge'],
    image: IMAGES.loadedBrownie,
  },
  {
    id: 'any-brownie-icecream',
    name: 'Any Brownie w/Icecream',
    price: 450,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'loaded-brownies',
    shortDescription:
      'Your choice of any signature topped fudge brownie paired with a single scoop of ice cream.',
    fullDescription:
      'Pick your favorite topped brownie—from Nutella to Caramel or Walnut—and enjoy it warm alongside a cool, creamy scoop of ice cream.',
    flavorNotes: ['Custom Pairing', 'Single Scoop Included', 'Warm Brownie'],
    image: IMAGES.loadedBrownie,
  },
  {
    id: 'box-of-4-brownies',
    name: 'Box of 4 Mix Brownies',
    price: 1350,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'brownie-boxes',
    shortDescription:
      'Curated gift & sharing box of 4 assorted topped chocolate fudge brownies.',
    fullDescription:
      'Four hand-picked signature fudge brownies packed in a presentation box—ideal for midnight sharing or gifting.',
    flavorNotes: ['4 Assorted Pieces', 'Shareable Box', 'Mix of Toppings'],
    image: IMAGES.brownieStack,
  },
  {
    id: 'box-of-6-brownies',
    name: 'Box of 6 Mix Brownies',
    price: 2000,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'brownie-boxes',
    shortDescription:
      'Half-dozen box featuring 6 assorted signature chocolate fudge brownies.',
    fullDescription:
      'Six indulgent fudge brownies across our most-loved toppings—Nutella, Caramel, Choco Chunk, Oreo, Cadbury, and Classic Fudge.',
    flavorNotes: ['6 Assorted Pieces', 'Crowd Favorite', 'Gift Ready'],
    image: IMAGES.brownieStack,
  },
  {
    id: 'box-of-12-brownies',
    name: 'Box of 12 Mix Brownies',
    price: 3800,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'brownie-boxes',
    shortDescription:
      'Grand celebration box of 12 assorted topped fudge brownies made for gatherings.',
    fullDescription:
      'Twelve decadent brownies showcasing the full GAIN 24/7 range—crafted for family nights, celebrations, and office treats.',
    flavorNotes: ['12 Assorted Pieces', 'Celebration Box', 'Best Value'],
    image: IMAGES.brownieStack,
  },
  {
    id: 'topper-giftables',
    name: 'Topper Giftables',
    price: 200,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'extras',
    shortDescription:
      'Decorative celebration topper to turn any brownie box or dessert into a thoughtful gift.',
    fullDescription:
      'Add a festive occasion topper to your brownie box or cake order for birthdays, anniversaries, or surprise midnight deliveries.',
    flavorNotes: ['Gift Add-On', 'Celebration Ready'],
    image: IMAGES.fudgeBrownie,
  },
  {
    id: 'cutlery-spoon-fork',
    name: 'Cutlery (Spoon & Fork)',
    price: 25,
    sectionId: 'chocolate-fudge-brownies',
    sectionLabel: 'Chocolate Fudge Brownies',
    filterTab: 'brownies',
    subGroup: 'extras',
    shortDescription:
      'Convenient spoon and fork set for enjoying your desserts on the go.',
    fullDescription:
      'Hygienically packed disposable spoon and fork set for effortless late-night enjoyment anywhere.',
    flavorNotes: ['Takeaway Essential'],
    image: IMAGES.fudgeBrownie,
  },

  // ==========================================
  // 2. SUNDAE, TRUFFLE & COOKIES
  // ==========================================
  {
    id: 'lazy-cate-cake',
    name: 'Lazy Cate Cake',
    price: 550,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cakes-truffles',
    shortDescription:
      'Layers of moist chocolate sponge, creamy chocolate mousse, and crunchy cocoa crumble.',
    fullDescription:
      'An irresistible spoonable chocolate cake layered with silky ganache and crisp chocolate pearls—rich, chilled, and deeply satisfying.',
    flavorNotes: ['Chocolate Sponge', 'Silky Ganache', 'Crunch Layer'],
    image: IMAGES.chocolateCake,
    isSignature: true,
  },
  {
    id: 'matilda-cake-puddle',
    name: 'Matilda Cake Puddle',
    price: 550,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cakes-truffles',
    shortDescription:
      'Warm, ultra-moist chocolate cake swimming in a glossy puddle of warm chocolate fudge sauce.',
    fullDescription:
      'Inspired by the iconic movie cake—tender dark chocolate sponge drenched in a generous pool of warm, pourable fudge ganache.',
    flavorNotes: ['Warm Fudge Pool', 'Moist Chocolate Cake', 'Pure Indulgence'],
    image: IMAGES.chocolateCake,
    isSignature: true,
  },
  {
    id: 'matilda-cake-puddle-large',
    name: 'Matilda Cake Puddle (L)',
    price: 850,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cakes-truffles',
    shortDescription:
      'Large sharing portion of our iconic Matilda chocolate cake drenched in warm molten fudge.',
    fullDescription:
      'A generous large serving of our viral Matilda Cake Puddle with extra warm chocolate fudge sauce—made for sharing or serious chocolate cravings.',
    flavorNotes: ['Large Sharing Size', 'Extra Fudge Sauce', 'Moist Dark Sponge'],
    image: IMAGES.chocolateCake,
  },
  {
    id: 'brookie-skitt',
    name: 'Brookie Skitt',
    price: 950,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cakes-truffles',
    shortDescription:
      'Half fudge brownie, half gooey chocolate chip cookie baked together and loaded with sauce.',
    fullDescription:
      'Where brownie meets cookie in a warm skillet style bake—crispy golden cookie edges, fudgy brownie core, and rich melted chocolate.',
    flavorNotes: ['Brownie + Cookie Hybrid', 'Warm Skillet Bake', 'Gooey Center'],
    image: IMAGES.cookiesWaffles,
  },
  {
    id: 'fudge-truffles-4pcs',
    name: 'Fudge Truffles 4 Pcs',
    price: 450,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cakes-truffles',
    shortDescription:
      'Four hand-rolled dense chocolate fudge truffles coated in rich chocolate.',
    fullDescription:
      'Four bite-sized spheres of pure chocolate fudge ganache rolled by hand and finished with a delicate cocoa sheen.',
    flavorNotes: ['4 Hand-Rolled Pieces', 'Dense Ganache', 'Bite-Sized Luxury'],
    image: IMAGES.chocolateCake,
    isSignature: true,
  },
  {
    id: 'classic-gooey-cookie',
    name: 'Classic Gooey Cookie',
    price: 350,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cookies',
    shortDescription:
      'Golden brown butter cookie with crisp edges and a warm, melty chocolate chip center.',
    fullDescription:
      'Baked to golden perfection with a soft, pull-apart gooey heart packed with semi-sweet chocolate chunks.',
    flavorNotes: ['Golden Butter Dough', 'Melty Choco Chips', 'Soft Center'],
    image: IMAGES.cookiesWaffles,
  },
  {
    id: 'double-choco-nutella',
    name: 'Double Choco Nutella',
    price: 350,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cookies',
    shortDescription:
      'Dark cocoa cookie stuffed and topped with molten Nutella hazelnut chocolate.',
    fullDescription:
      'Rich chocolate cookie dough baked around a decadent core of creamy Nutella and finished with dark chocolate chunks.',
    flavorNotes: ['Nutella Core', 'Dark Cocoa Dough', 'Warm & Gooey'],
    image: IMAGES.cookiesWaffles,
  },
  {
    id: 'red-velvet-cookie',
    name: 'Red Velvet Cookie',
    price: 350,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'cookies',
    shortDescription:
      'Crimson cocoa red velvet cookie studded with creamy white chocolate chips.',
    fullDescription:
      'Velvety soft crimson cookie with subtle cocoa notes and sweet, melty white chocolate drops in every bite.',
    flavorNotes: ['Crimson Cocoa', 'White Chocolate Chips', 'Soft Bake'],
    image: IMAGES.cookiesWaffles,
  },
  {
    id: 'fudge-waffle-dough',
    name: 'Fudge Waffle (Dough)',
    price: 700,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'waffles',
    shortDescription:
      'Crispy-on-the-outside, fudgy-on-the-inside waffle drizzled with rich chocolate sauce.',
    fullDescription:
      'Pressed fresh to order from rich fudge dough so every pocket holds warm melted chocolate and caramel drizzle.',
    flavorNotes: ['Pressed Fresh', 'Crisp & Fudgy', 'Chocolate Drizzle'],
    image: IMAGES.waffleDrizzle,
  },
  {
    id: 'cookie-waffle',
    name: 'Cookie Waffle',
    price: 700,
    sectionId: 'sundae-truffle-cookies',
    sectionLabel: 'Sundae, Truffle & Cookies',
    filterTab: 'sundaes-cookies',
    subGroup: 'waffles',
    shortDescription:
      'Golden chocolate chip cookie dough pressed into a warm, caramelized waffle.',
    fullDescription:
      'Gooey chocolate chip cookie dough waffle-pressed until golden and crisp, finished with melted chocolate and Nutella ribbons.',
    flavorNotes: ['Cookie Dough Base', 'Caramelized Grid', 'Melted Toppings'],
    image: IMAGES.waffleDrizzle,
  },

  // ==========================================
  // 3. ICE CREAM (Single Scoop — PKR 150)
  // ==========================================
  {
    id: 'icecream-cookies-crumbs',
    name: 'Cookies & Crumbs (Oreo)',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Creamy vanilla ice cream folded with crushed Oreo cookie chunks.',
    fullDescription:
      'Single scoop of velvety sweet cream ice cream loaded with crunchy chocolate Oreo cookie crumbs.',
    flavorNotes: ['Single Scoop', 'Crushed Oreo', 'Sweet Cream'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-vanilla',
    name: 'Vanilla',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Classic smooth and aromatic Madagascar-style vanilla bean single scoop.',
    fullDescription:
      'Timeless, rich, and silky vanilla ice cream—wonderful on its own or paired beside a warm fudge brownie.',
    flavorNotes: ['Single Scoop', 'Classic Vanilla', 'Silky Texture'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-mango',
    name: 'Mango',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Sun-ripened tropical Pakistani mango flavor churned into creamy perfection.',
    fullDescription:
      'Vibrant, fruity, and velvety mango ice cream capturing the sweetness of peak-season mangoes.',
    flavorNotes: ['Single Scoop', 'Tropical Mango', 'Fruity & Creamy'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-choco-brownie',
    name: 'Choco Brownie',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Rich chocolate ice cream studded with chewy fudge brownie morsels.',
    fullDescription:
      'Double chocolate delight featuring smooth cocoa ice cream and real chunks of GAIN 24/7 fudge brownie.',
    flavorNotes: ['Single Scoop', 'Brownie Pieces', 'Rich Cocoa'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-roasted-almond',
    name: 'Roasted Almond',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Creamy scoop packed with golden roasted, caramelized almond slivers.',
    fullDescription:
      'Nutty and aromatic ice cream folded with crunchy oven-roasted almonds in every spoonful.',
    flavorNotes: ['Single Scoop', 'Toasted Almonds', 'Nutty Crunch'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-pista',
    name: 'Pista',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Traditional rich pistachio ice cream with real crushed green pistachios.',
    fullDescription:
      'Fragrant, creamy pistachio scoop inspired by classic subcontinental dessert craftsmanship.',
    flavorNotes: ['Single Scoop', 'Real Pistachio', 'Aromatic'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-strawberry-cheesecake',
    name: 'Strawberry Cheese Cake',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Tangy cheesecake ice cream swirled with sweet strawberry ribbon and biscuit crumble.',
    fullDescription:
      'A decadent dessert in a single scoop—creamy cheesecake base with bright berry swirls.',
    flavorNotes: ['Single Scoop', 'Berry Swirl', 'Cheesecake Base'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-strawberry',
    name: 'Strawberry',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Refreshing, sweet pink strawberry ice cream bursting with berry flavor.',
    fullDescription:
      'Smooth, lively strawberry scoop that balances sweet berries and rich dairy cream.',
    flavorNotes: ['Single Scoop', 'Sweet Berry', 'Refreshing'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-blueberry',
    name: 'Blueberry',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Velvety ice cream rippled with vibrant wild blueberry compote.',
    fullDescription:
      'Fruity, aromatic blueberry ice cream with a delicate balance of tart and sweet notes.',
    flavorNotes: ['Single Scoop', 'Wild Blueberry', 'Velvety'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-coco-bounty',
    name: 'Coco Bounty',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Tropical coconut and milk chocolate flecks inspired by classic Bounty bars.',
    fullDescription:
      'Sweet shredded coconut cream blended with fine chocolate flakes for a tropical chocolate escape.',
    flavorNotes: ['Single Scoop', 'Coconut & Chocolate', 'Tropical'],
    image: IMAGES.iceCreamScoops,
  },
  {
    id: 'icecream-kulfa-crunch',
    name: 'Kulfa Crunch',
    price: 150,
    sectionId: 'ice-cream',
    sectionLabel: 'Ice Cream',
    filterTab: 'ice-cream',
    subGroup: 'ice-cream-flavors',
    shortDescription:
      'Royal cardamom-infused caramelized milk kulfa with crunchy nut praline.',
    fullDescription:
      'Slow-simmered traditional kulfa flavor elevated with cardamom warmth and caramelized nut crunch.',
    flavorNotes: ['Single Scoop', 'Royal Kulfa', 'Cardamom & Nuts'],
    image: IMAGES.iceCreamScoops,
  },

  // ==========================================
  // 4. MILK & FRESH FRUIT SHAKES
  // ==========================================
  {
    id: 'shake-mango',
    name: 'Mango',
    price: 500,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Thick, luscious shake blended with sweet seasonal mangoes and chilled cream milk.',
    fullDescription:
      'Pure golden mango bliss—blended thick and creamy with chilled milk and a scoop of mango richness.',
    flavorNotes: ['Fresh Mango', 'Thick Blend', 'Chilled'],
    image: IMAGES.fruitShakes,
  },
  {
    id: 'shake-chikoo-almond',
    name: 'Chikoo Almond',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Caramel-like ripe chikoo fruit blended with roasted almonds and chilled milk.',
    fullDescription:
      'A Karachi classic elevated—sweet, malty chikoo fruit blended smooth with crunchy roasted almonds.',
    flavorNotes: ['Ripe Chikoo', 'Roasted Almonds', 'Creamy Milk'],
    image: IMAGES.milkshakes,
  },
  {
    id: 'shake-oreo-banana-vanilla',
    name: 'Oreo Banana Vanilla',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Creamy trio of crushed Oreos, ripe banana, and smooth vanilla ice cream.',
    fullDescription:
      'Rich, energizing, and decadent—crunchy Oreo cookies blended with sweet banana and velvety vanilla.',
    flavorNotes: ['Crushed Oreo', 'Ripe Banana', 'Vanilla Bean'],
    image: IMAGES.milkshakes,
  },
  {
    id: 'shake-oreo-icy-milk',
    name: 'Oreo Icy Milk',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Chilled cookies-and-cream milk shake loaded with crushed Oreo cookies.',
    fullDescription:
      'Frosty, refreshing, and packed with chocolate wafer crunch in every sip.',
    flavorNotes: ['Oreo Crunch', 'Icy Milk', 'Chocolate Drizzle'],
    image: IMAGES.milkshakes,
  },
  {
    id: 'shake-choco-brownie-milk',
    name: 'Choco Brownie Milk',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Signature shake blended with whole pieces of our chocolate fudge brownie.',
    fullDescription:
      'Our bestselling chocolate shake—real GAIN 24/7 fudge brownie blended into chilled chocolate milk and ice cream.',
    flavorNotes: ['Real Fudge Brownie', 'Dark Chocolate', 'Thick & Creamy'],
    image: IMAGES.milkshakes,
    isSignature: true,
  },
  {
    id: 'shake-blueberry-oreo-milk',
    name: 'Blueberry Oreo Milk',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Vibrant blueberry compote and cocoa Oreo cookies spun into a creamy shake.',
    fullDescription:
      'Fruity wild blueberries meet dark cocoa Oreo cookies in a surprisingly addictive chilled shake.',
    flavorNotes: ['Wild Blueberry', 'Oreo Cookie', 'Creamy Blend'],
    image: IMAGES.fruitShakes,
  },
  {
    id: 'shake-straw-cheesecake-icy',
    name: 'Straw/CheeseCake Icy',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Strawberry cheesecake ice cream blended into a frosty, velvety dessert drink.',
    fullDescription:
      'All the flavor of a berry cheesecake in a tall chilled glass—sweet strawberries, rich cream, and biscuit notes.',
    flavorNotes: ['Strawberry Swirl', 'Cheesecake Cream', 'Icy Blend'],
    image: IMAGES.fruitShakes,
  },
  {
    id: 'shake-pista-badam-milk',
    name: 'Pista-Badam Milk',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Royal blend of crushed pistachios and roasted almonds in chilled sweet milk.',
    fullDescription:
      'Rich, nutty, and aromatic—blended with real pistachio and badam for a comforting late-night treat.',
    flavorNotes: ['Green Pistachio', 'Roasted Badam', 'Aromatic Milk'],
    image: IMAGES.milkshakes,
  },
  {
    id: 'shake-chocobounty-milk',
    name: 'ChocoBounty Milk',
    price: 450,
    sectionId: 'milk-fresh-fruit-shakes',
    sectionLabel: 'Milk & Fresh Fruit Shakes',
    filterTab: 'shakes',
    subGroup: 'shakes',
    shortDescription:
      'Tropical coconut and rich milk chocolate blended into an indulgent icy shake.',
    fullDescription:
      'Sweet coconut cream and Belgian-style chocolate sauce spun into a thick, frosty bounty shake.',
    flavorNotes: ['Sweet Coconut', 'Milk Chocolate', 'Chilled Shake'],
    image: IMAGES.milkshakes,
  },

  // ==========================================
  // 5. ICY SUNDAES — IKIGAI SPECIAL
  // ==========================================
  {
    id: 'sundae-brownie-sundae',
    name: 'Brownie Sundae',
    price: 450,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Warm fudge brownie cubes layered with creamy ice cream and hot chocolate fudge.',
    fullDescription:
      'Our signature Ikigai Sundae—chunks of freshly baked fudge brownie layered with velvety ice cream and glossy chocolate sauce.',
    flavorNotes: ['Fudge Brownie Cubes', 'Creamy Scoop', 'Hot Fudge Drizzle'],
    image: IMAGES.iceCreamSundae,
    isSignature: true,
  },
  {
    id: 'sundae-choco-oreo',
    name: 'Choco Oreo',
    price: 450,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Crunchy Oreo cookies, chocolate & vanilla ice cream, and rich fudge ripples.',
    fullDescription:
      'Layered cookies-and-cream sundae packed with crushed Oreos, creamy scoops, and dark chocolate sauce.',
    flavorNotes: ['Crushed Oreos', 'Chocolate Sauce', 'Layered Sundae'],
    image: IMAGES.iceCreamSundae,
    isSignature: true,
  },
  {
    id: 'sundae-caramel-brownie',
    name: 'Caramel Brownie',
    price: 450,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Fudgy brownie pieces layered with ice cream and ribbons of warm golden caramel.',
    fullDescription:
      'Sweet buttery caramel sauce meets rich dark chocolate brownie cubes and cold creamy ice cream.',
    flavorNotes: ['Golden Caramel', 'Brownie Chunks', 'Velvety Ice Cream'],
    image: IMAGES.iceCreamSundae,
  },
  {
    id: 'sundae-blueberry-oreo',
    name: 'Blueberry Oreo',
    price: 450,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Tangy-sweet blueberry compote layered with crushed Oreos and creamy ice cream.',
    fullDescription:
      'A vibrant Ikigai creation combining fruity blueberry swirls with dark cocoa Oreo crunch.',
    flavorNotes: ['Blueberry Compote', 'Oreo Crunch', 'Chilled Sundae'],
    image: IMAGES.iceCreamSundae,
  },
  {
    id: 'sundae-strawberry-oreo',
    name: 'Strawberry Oreo',
    price: 450,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Sweet strawberry sauce, crunchy Oreo cookies, and velvety ice cream layers.',
    fullDescription:
      'Bright berry sweetness balanced by chocolate Oreo cookies and smooth ice cream in a layered coupe.',
    flavorNotes: ['Strawberry Ribbon', 'Crushed Oreo', 'Creamy Scoop'],
    image: IMAGES.iceCreamSundae,
  },
  {
    id: 'sundae-coco-bounty',
    name: 'Coco Bounty',
    price: 450,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Coconut-chocolate ice cream sundae topped with toasted coconut and fudge sauce.',
    fullDescription:
      'For coconut and chocolate lovers—creamy Coco Bounty scoops layered with warm chocolate fudge.',
    flavorNotes: ['Coconut Flakes', 'Warm Chocolate', 'Ikigai Special'],
    image: IMAGES.iceCreamSundae,
  },
  {
    id: 'sundae-nutty-slutty',
    name: 'Nutty Slutty Sundae',
    price: 500,
    sectionId: 'icy-sundaes-ikigai',
    sectionLabel: 'Icy Sundaes — Ikigai Special',
    filterTab: 'sundaes-cookies',
    subGroup: 'ikigai-specials',
    shortDescription:
      'Ultimate loaded sundae with roasted nuts, brownie chunks, Nutella, and caramel.',
    fullDescription:
      'Our most decadent Ikigai sundae—loaded with toasted walnuts, almonds, fudge brownie pieces, and warm hazelnut-caramel drizzle.',
    flavorNotes: ['Loaded Nuts', 'Brownie & Nutella', 'House Special'],
    image: IMAGES.iceCreamSundae,
  },

  // ==========================================
  // 6. ICY SHELF COFFEE & FRAPPES
  // ==========================================
  {
    id: 'coffee-cold-latte',
    name: 'Cold Coffee Latte',
    price: 550,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'cold-coffee',
    shortDescription:
      'Smooth espresso poured over chilled velvety milk and ice for a clean caffeine lift.',
    fullDescription:
      'Balanced, silky, and refreshing—freshly pulled coffee blended with cold creamy milk over ice.',
    flavorNotes: ['Smooth Espresso', 'Chilled Milk', 'Balanced Roast'],
    image: IMAGES.coffeeFrappes,
  },
  {
    id: 'coffee-cold-cappuccino',
    name: 'Cold Coffee Cappuccino',
    price: 550,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'cold-coffee',
    shortDescription:
      'Bold iced coffee topped with a thick, airy cloud of cold-whipped milk foam.',
    fullDescription:
      'Stronger coffee notes crowned with velvety micro-foam and a light dusting of cocoa.',
    flavorNotes: ['Rich Roast', 'Whipped Foam', 'Cocoa Dusting'],
    image: IMAGES.coffeeFrappes,
  },
  {
    id: 'coffee-spanish-latte',
    name: 'Cold Coffee Latte Spanish',
    price: 650,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'cold-coffee',
    shortDescription:
      'Silky iced espresso sweetened with rich condensed milk for a creamy velvet finish.',
    fullDescription:
      'A late-night café favorite—bold espresso layered with textured milk and sweet condensed milk.',
    flavorNotes: ['Condensed Milk', 'Velvety Espresso', 'Café Favorite'],
    image: IMAGES.coffeeFrappes,
  },
  {
    id: 'coffee-latte-caramel',
    name: 'Coffee Latte Caramel',
    price: 650,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'cold-coffee',
    shortDescription:
      'Chilled espresso latte swirled with buttery golden caramel ribbons.',
    fullDescription:
      'Smooth cold coffee elevated with rich caramel syrup and a glossy caramel drizzle inside the cup.',
    flavorNotes: ['Buttery Caramel', 'Iced Espresso', 'Smooth Finish'],
    image: IMAGES.coffeeFrappes,
  },
  {
    id: 'coffee-latte-french-vanilla',
    name: 'Coffee Latte French Vanila',
    price: 650,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'cold-coffee',
    shortDescription:
      'Aromatic French vanilla infused into our signature chilled espresso milk latte.',
    fullDescription:
      'Floral, creamy French vanilla custard notes paired seamlessly with smooth cold-brewed espresso.',
    flavorNotes: ['French Vanilla', 'Creamy Latte', 'Aromatic'],
    image: IMAGES.coffeeFrappes,
  },
  {
    id: 'coffee-latte-butterscotch',
    name: 'Coffee Latte Butterscotch',
    price: 650,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'cold-coffee',
    shortDescription:
      'Warm brown-sugar butterscotch notes blended with chilled espresso and milk.',
    fullDescription:
      'Nostalgic golden butterscotch toffee flavor swirled with rich iced coffee and creamy milk.',
    flavorNotes: ['Butterscotch Toffee', 'Iced Latte', 'Indulgent'],
    image: IMAGES.coffeeFrappes,
  },
  {
    id: 'frappe-brownie',
    name: 'Brownie Frappe',
    price: 550,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'frappes',
    shortDescription:
      'Ice-blended mocha frappe loaded with real chocolate fudge brownie chunks.',
    fullDescription:
      'Part coffee, part dessert—frosty blended coffee and chocolate spun with chewy pieces of GAIN 24/7 brownie.',
    flavorNotes: ['Blended Frappe', 'Fudge Brownie Bits', 'Mocha Drizzle'],
    image: IMAGES.blendedFrappe,
  },
  {
    id: 'frappe-oreo-vanilla',
    name: 'Oreo Vanilla Frappe',
    price: 550,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'frappes',
    shortDescription:
      'Creamy ice-blended vanilla frappe spun with crunchy Oreo cookies.',
    fullDescription:
      'Thick, frosty vanilla bean frappe blended with crushed Oreo cookies and chocolate drizzle.',
    flavorNotes: ['Oreo Cookie', 'Vanilla Frappe', 'Ice Blended'],
    image: IMAGES.blendedFrappe,
  },
  {
    id: 'frappe-choco-bounty',
    name: 'Choco Bounty Frappe',
    price: 550,
    sectionId: 'icy-shelf-coffee-frappes',
    sectionLabel: 'Icy Shelf Coffee & Frappes',
    filterTab: 'coffee-frappes',
    subGroup: 'frappes',
    shortDescription:
      'Frosty chocolate-coconut frappe blended to creamy perfection.',
    fullDescription:
      'Tropical coconut and dark chocolate blended with ice and milk for a refreshing late-night frappe.',
    flavorNotes: ['Coconut & Cocoa', 'Blended Ice', 'Rich Finish'],
    image: IMAGES.blendedFrappe,
  },
];

export const FEATURED_CATEGORIES: {
  id: string;
  name: string;
  description: string;
  image: string;
  targetPage: PageId;
  targetFilter?: MenuFilterTab;
}[] = [
  {
    id: 'cat-brownies',
    name: 'BROWNIES',
    description:
      'Crackly-top dark chocolate fudge brownies, loaded sizzlers, and assorted sharing boxes.',
    image: IMAGES.fudgeBrownie,
    targetPage: 'brownies',
    targetFilter: 'brownies',
  },
  {
    id: 'cat-ice-cream',
    name: 'ICE CREAM',
    description:
      'Eleven velvety single-scoop flavors from Kulfa Crunch and Pista to Choco Brownie.',
    image: IMAGES.iceCreamScoops,
    targetPage: 'desserts',
    targetFilter: 'ice-cream',
  },
  {
    id: 'cat-shakes',
    name: 'SHAKES',
    description:
      'Thick milk and fresh fruit shakes blended with mango, chikoo almond, and fudge brownie.',
    image: IMAGES.milkshakes,
    targetPage: 'shakes',
    targetFilter: 'shakes',
  },
  {
    id: 'cat-sundaes',
    name: 'SUNDAES',
    description:
      'Ikigai Special layered sundaes, Matilda cake puddles, and molten brookie skillets.',
    image: IMAGES.iceCreamSundae,
    targetPage: 'desserts',
    targetFilter: 'sundaes-cookies',
  },
  {
    id: 'cat-cookies',
    name: 'COOKIES',
    description:
      'Warm, gooey New York style cookies, Double Choco Nutella, and pressed fudge waffles.',
    image: IMAGES.cookiesWaffles,
    targetPage: 'brownies',
    targetFilter: 'sundaes-cookies',
  },
  {
    id: 'cat-coffee',
    name: 'COFFEE & FRAPPES',
    description:
      'Chilled Spanish lattes, caramel cold coffees, and thick brownie & Oreo frappes.',
    image: IMAGES.coffeeFrappes,
    targetPage: 'shakes',
    targetFilter: 'coffee-frappes',
  },
];

export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString('en-PK')}`;
}

export interface CartItem {
  product: MenuItem;
  quantity: number;
  notes?: string;
}

export function buildWhatsAppOrderUrl(
  items: CartItem[],
  options?: {
    customerName?: string;
    customerAddress?: string;
    deliveryWindow?: 'before12am' | 'after12am' | 'pickup';
    applyDirectDiscount?: boolean;
    customNote?: string;
  }
): string {
  if (items.length === 0) {
    const defaultGreeting =
      'Hi GAIN 24/7, I would like to place a direct order (10% Direct Order Discount).';
    return `${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(defaultGreeting)}`;
  }

  const lines: string[] = ['Hi GAIN 24/7, I would like to order:'];
  items.forEach((item) => {
    const noteSuffix = item.notes ? ` (${item.notes})` : '';
    lines.push(
      `${item.quantity} × ${item.product.name}${noteSuffix} — ${formatPKR(
        item.product.price * item.quantity
      )}`
    );
  });

  const subtotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const applyDiscount = options?.applyDirectDiscount ?? true;
  const discountAmount = applyDiscount
    ? Math.round((subtotal * BRAND_INFO.directDiscountPercent) / 100)
    : 0;
  const afterDiscount = subtotal - discountAmount;

  let deliveryFee = 0;
  let deliveryLabel = '';
  if (options?.deliveryWindow === 'before12am') {
    deliveryFee = BRAND_INFO.deliveryCharges.beforeMidnight;
    deliveryLabel = 'Delivery (Before 12am): PKR 150/- (Subject to distance)';
  } else if (options?.deliveryWindow === 'after12am') {
    deliveryFee = BRAND_INFO.deliveryCharges.afterMidnight;
    deliveryLabel = 'Delivery (After 12am): PKR 200/- (Subject to distance)';
  } else if (options?.deliveryWindow === 'pickup') {
    deliveryLabel = 'Order Type: Self Pickup at Momin Square, Block 6';
  }

  lines.push('');
  lines.push(`Subtotal: ${formatPKR(subtotal)}`);
  if (applyDiscount) {
    lines.push(`Direct Order Discount (10% OFF): -${formatPKR(discountAmount)}`);
  }
  if (deliveryLabel) {
    lines.push(deliveryLabel);
  }
  lines.push(`Estimated Total: ${formatPKR(afterDiscount + deliveryFee)}`);

  if (options?.customerName?.trim()) {
    lines.push(`Name: ${options.customerName.trim()}`);
  }
  if (options?.customerAddress?.trim()) {
    lines.push(`Delivery Address: ${options.customerAddress.trim()}`);
  }
  if (options?.customNote?.trim()) {
    lines.push(`Note: ${options.customNote.trim()}`);
  }

  return `${BRAND_INFO.whatsappBaseUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
}
