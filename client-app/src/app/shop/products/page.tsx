// page.tsx (updated)
"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import "@/styles/ecommerce-home.css";
import "./product.css";
import {
  ProductCard,
  ProductFilters,
  FilterChip,
  ProductToolbar,
  ProductGrid,
  VoiceSearchModal,
  ARProductViewer,
  SmartRecommendations,
  NeuralNetworkBackground,
} from "@/components/product";
import {
  AIShoppingAssistant,
  Footer,
  NavigationHeader,
  AnimatedBackground,
  FloatingDecoration,
  ToastNotifications,
} from "@/components/ecommercehome";

// Define Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  badges: string[];
  features: string[];
  inStock: boolean;
}

const ProductPage: React.FC = () => {
  // State for filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [currentPriceRange, setCurrentPriceRange] = useState<number>(250);

  // State for modals
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isARViewerOpen, setIsARViewerOpen] = useState(false);
  const [selectedProductForAR, setSelectedProductForAR] = useState<
    number | null
  >(null);

  // Dummy Product Data
  const allProducts: Product[] = useMemo(
    () => [
      {
        id: 1,
        name: "Smartphone Ultra Pro X",
        description:
          "Le dernier cri de la technologie mobile, avec des fonctionnalités IA avancées et une caméra révolutionnaire.",
        price: 999.99,
        imageUrl: "https://picsum.photos/seed/tech1/400/300",
        rating: 5,
        reviews: 120,
        category: "electronique",
        brand: "TechGlow",
        badges: ["New", "Best Seller"],
        features: ['Écran OLED 6.7"', "Caméra 108MP", "Batterie 5000mAh"],
        inStock: true,
      },
      {
        id: 2,
        name: "Montre Connectée Élégante",
        description:
          "Design raffiné et capteurs de santé de pointe. Surveillez votre bien-être avec style.",
        price: 249.5,
        imageUrl: "https://picsum.photos/seed/tech2/400/300",
        rating: 4,
        reviews: 75,
        category: "electronique",
        brand: "EleganceCo",
        badges: ["New", "Best Seller"],
        features: [
          "Suivi de la fréquence cardiaque",
          "Notifications intelligentes",
          "Résistante à l'eau",
        ],
        inStock: true,
      },
      {
        id: 3,
        name: "Écouteurs sans Fil Immersifs",
        description:
          "Annulation de bruit active et son haute-fidélité pour une expérience audio inégalée.",
        price: 199.0,
        imageUrl: "https://picsum.photos/seed/tech3/400/300",
        rating: 4,
        reviews: 90,
        category: "electronique",
        brand: "TechGlow",
        badges: ["Best Seller"],
        features: [
          "Autonomie de 30 heures",
          "Contrôle tactile",
          "Résistants à l'eau",
        ],
        inStock: true,
      },
      {
        id: 4,
        name: "Robe de Soirée Éclatante",
        description:
          "Conçue avec des fibres intelligentes qui s&apos;adaptent à votre morphologie et brillent subtilement.",
        price: 350.0,
        imageUrl: "https://picsum.photos/seed/fashion1/400/300",
        rating: 5,
        reviews: 45,
        category: "vetements",
        brand: "EleganceCo",
        badges: ["New", "Best Seller"],
        features: ["Tissu intelligent", "Coupe ajustée", "Lavable en machine"],
        inStock: false,
      },
      {
        id: 5,
        name: "Chaussures de Sport Adaptatives",
        description:
          "Ajustement dynamique et amorti réactif pour des performances optimales.",
        price: 180.0,
        imageUrl: "https://picsum.photos/seed/sport1/400/300",
        rating: 4,
        reviews: 60,
        category: "sport",
        brand: "SportPro",
        badges: ["New"],
        features: ["Semelles adaptatives", "Respirantes", "Antidérapantes"],
        inStock: true,
      },
      {
        id: 6,
        name: "Lampe de Chevet Holographique",
        description:
          "Créez des ambiances uniques avec des projections holographiques personnalisables.",
        price: 120.0,
        imageUrl: "https://picsum.photos/seed/home1/400/300",
        rating: 3,
        reviews: 30,
        category: "maison",
        brand: "HomeLux",
        badges: ["New"],
        features: ["Projection 3D", "Contrôle vocal", "Économie d'énergie"],
        inStock: false,
      },
      {
        id: 7,
        name: "Veste Chauffante Intelligente",
        description:
          "Température auto-régulée et style urbain. Idéale pour toutes les saisons.",
        price: 280.0,
        imageUrl: "https://picsum.photos/seed/fashion2/400/300",
        rating: 4,
        reviews: 50,
        category: "vetements",
        brand: "TechGlow",
        badges: ["New", "Best Seller"],
        features: [
          "Chauffage intelligent",
          "Résistante à l'eau",
          "Connectivité Bluetooth",
        ],
        inStock: true,
      },
      {
        id: 8,
        name: "Tapis de Yoga Connecté",
        description:
          "Améliorez votre pratique avec des capteurs intégrés et un coaching en temps réel.",
        price: 90.0,
        imageUrl: "https://picsum.photos/seed/sport2/400/300",
        rating: 5,
        reviews: 25,
        category: "sport",
        brand: "SportPro",
        badges: ["New"],
        features: [
          "Capteurs de posture",
          "Surface antidérapante",
          "Connectivité mobile",
        ],
        inStock: false,
      },
    ],
    []
  );

  // Filtered Products Logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesRating =
        selectedRating === null || product.rating >= selectedRating;
      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesCategory && matchesRating && matchesBrand && matchesPrice;
    });
  }, [
    allProducts,
    selectedCategories,
    selectedRating,
    selectedBrands,
    minPrice,
    maxPrice,
  ]);

  // Handler for category filter changes
  const handleCategoryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedCategories((prev) =>
        checked ? [...prev, value] : prev.filter((cat) => cat !== value)
      );
    },
    []
  );

  // Handler for rating filter changes
  const handleRatingChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedRating(checked ? Number(value) : null);
    },
    []
  );

  // Handler for brand filter changes
  const handleBrandChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setSelectedBrands((prev) =>
        checked ? [...prev, value] : prev.filter((brand) => brand !== value)
      );
    },
    []
  );

  // Handler for price range change
  const handlePriceRangeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentPriceRange(Number(event.target.value));
      setMaxPrice(Number(event.target.value));
    },
    []
  );

  // Clear filters handler
  const handleClearFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedRating(null);
    setSelectedBrands([]);
    setMinPrice(0);
    setMaxPrice(1000);
    setCurrentPriceRange(1000);
  }, []);

  // AR Viewer handlers
  const handleARViewerOpen = useCallback((productId: number) => {
    setSelectedProductForAR(productId);
    setIsARViewerOpen(true);
  }, []);

  const handleARViewerClose = useCallback(() => {
    setIsARViewerOpen(false);
    setSelectedProductForAR(null);
  }, []);

  // Voice Modal handlers
  const handleVoiceModalOpen = useCallback(() => {
    setIsVoiceModalOpen(true);
  }, []);

  const handleVoiceModalClose = useCallback(() => {
    setIsVoiceModalOpen(false);
  }, []);

  // Filter data for rendering FilterChip components
  const categories = [
    {
      id: "electronique",
      label: "Électronique",
      count: allProducts.filter((p) => p.category === "electronique").length,
      iconClass: "fas fa-laptop",
      bgColorClass:
        "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
      textColorClass: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "vetements",
      label: "Vêtements",
      count: allProducts.filter((p) => p.category === "vetements").length,
      iconClass: "fas fa-tshirt",
      bgColorClass:
        "from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30",
      textColorClass: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "maison",
      label: "Maison",
      count: allProducts.filter((p) => p.category === "maison").length,
      iconClass: "fas fa-home",
      bgColorClass:
        "from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30",
      textColorClass: "text-green-600 dark:text-green-400",
    },
    {
      id: "sport",
      label: "Sport",
      count: allProducts.filter((p) => p.category === "sport").length,
      iconClass: "fas fa-dumbbell",
      bgColorClass:
        "from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30",
      textColorClass: "text-orange-600 dark:text-orange-400",
    },
  ];

  const ratings = [5, 4, 3, 2, 1].map((r) => ({
    id: `rating-${r}`,
    label: `${r} Étoiles`,
    count: allProducts.filter((p) => p.rating >= r).length,
    value: r,
  }));

  const brands = [
    {
      id: "brand-techglow",
      label: "TechGlow",
      count: allProducts.filter((p) => p.brand === "TechGlow").length,
      imageUrl: "https://picsum.photos/id/237/48/48",
    },
    {
      id: "brand-eleganceco",
      label: "EleganceCo",
      count: allProducts.filter((p) => p.brand === "EleganceCo").length,
      imageUrl: "https://picsum.photos/id/240/48/48",
    },
    {
      id: "brand-homelux",
      label: "HomeLux",
      count: allProducts.filter((p) => p.brand === "HomeLux").length,
      imageUrl: "https://picsum.photos/id/245/48/48",
    },
    {
      id: "brand-sportpro",
      label: "SportPro",
      count: allProducts.filter((p) => p.brand === "SportPro").length,
      imageUrl: "https://picsum.photos/id/250/48/48",
    },
  ];

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-neutral-25 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingDecoration />
      <NeuralNetworkBackground />

      {/* Voice Search Modal */}
      <VoiceSearchModal
        isOpen={isVoiceModalOpen}
        onClose={handleVoiceModalClose}
      />

      {/* AR Product Viewer */}
      <ARProductViewer
        isOpen={isARViewerOpen}
        onClose={handleARViewerClose}
        productId={selectedProductForAR}
      />

      {/* Smart Recommendations Bar */}
      <SmartRecommendations />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Page Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 mb-6 animate-slide-up">
              Collection Premium
            </h2>
            <p
              className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Découvrez notre sélection de produits d&apos;exception,
              soigneusement choisis pour vous
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <span
                className="inline-flex items-center px-6 py-3 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 shadow-inner-glow animate-elastic"
                style={{ animationDelay: "0.4s" }}
              >
                <i className="fas fa-box mr-3 text-xl"></i>
                {filteredProducts.length} produits magiques
              </span>
              <div
                className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Mise à jour en temps réel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Enhanced Filters Sidebar */}
          <aside className="xl:w-96 animate-slide-in-left">
            <ProductFilters
              categories={categories}
              ratings={ratings}
              brands={brands}
              selectedCategories={selectedCategories}
              selectedRating={selectedRating}
              selectedBrands={selectedBrands}
              currentPriceRange={currentPriceRange}
              onCategoryChange={handleCategoryChange}
              onRatingChange={handleRatingChange}
              onBrandChange={handleBrandChange}
              onPriceRangeChange={handlePriceRangeChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <ProductToolbar
              filteredProductsCount={filteredProducts.length}
              onVoiceSearch={handleVoiceModalOpen}
            />

            <ProductGrid
              products={filteredProducts}
              onARViewerOpen={handleARViewerOpen}
              onClearFilters={handleClearFilters}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
