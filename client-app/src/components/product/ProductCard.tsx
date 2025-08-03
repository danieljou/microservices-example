"use client";
import React from "react";

// Re-introducing properties from the original HTML structure
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // Added: from HTML
  imageUrl: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  badges: string[]; // Added: from HTML
  features: string[]; // Added: from HTML
  fastDelivery?: boolean; // Added: from HTML
  inStock: boolean; // Retained, consistent with HTML
}

interface ProductCardProps {
  product: Product;
  onArClick: (productId: number) => void;
  // Assuming showQuickPreview is a global function or passed down
  showQuickPreview: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onArClick,
  showQuickPreview,
}) => {
  // Helper function for star rating (modified to match HTML output visually)
  const generateStarRating = (rating: number) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < rating ? "★" : "☆";
    }
    return stars;
  };

  const discountPercentage = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const ratingStars = generateStarRating(product.rating);

  const badgesHTML = product.badges
    .map(
      (badge) =>
        `<span class="gradient-animated text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-glow">${badge}</span>`
    )
    .join("");

  return (
    <div
      className="product-card glass-card rounded-3xl overflow-hidden shadow-float hover:shadow-float-lg group border-2 border-transparent hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-500 relative flex flex-col animate-fade-in"
      // Animation delay from HTML snippet might be handled by parent mapping in React
    >
      <div className="card-inner flex flex-col h-full">
        {" "}
        {/* Added flex-col h-full */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
          <img
            src={product.imageUrl} // Changed from product.image to product.imageUrl
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-700 ease-out" // h-80 and scale-125 from HTML
          />

          {/* Enhanced Badges (from HTML) */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
            {/* Direct dangerouslySetInnerHTML for badgesHTML for simplicity,
                in a real app, you'd map React components here */}
            <div dangerouslySetInnerHTML={{ __html: badgesHTML }} />
            {discountPercentage > 0 && (
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-glow animate-pulse">
                -{discountPercentage}%
              </span>
            )}
            {!product.inStock && (
              <span className="bg-neutral-500 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                Rupture
              </span>
            )}
          </div>

          {/* Enhanced Wishlist Button (from HTML) - kept AR button separate for now */}
          <button className="wishlist-btn absolute top-6 right-6 w-12 h-12 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-red-500 hover:bg-white dark:hover:bg-neutral-800 shadow-float hover:shadow-glow hover:scale-110 transition-all duration-300 z-10">
            <i className="far fa-heart text-lg"></i>
          </button>

          {/* AR Button (Original from React, moved to be next to wishlist or adjusted) */}
          {/* Placed at right-20 to avoid conflict with wishlist and match product.html's snippet for AR */}
          <button
            onClick={() => onArClick(product.id)}
            className="absolute top-6 right-20 w-12 h-12 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-purple-500 hover:bg-white dark:hover:bg-neutral-800 shadow-float hover:shadow-glow hover:scale-110 transition-all duration-300 z-10"
          >
            <i className="fas fa-cube text-lg"></i>
          </button>

          {/* Enhanced Quick Actions Overlay (from HTML) */}
          <button
            onClick={() => showQuickPreview(product.id)}
            className="absolute inset-x-6 bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10"
          >
            <div className="morph-button ripple w-full bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm text-neutral-900 dark:text-white font-semibold py-4 rounded-2xl hover:bg-white dark:hover:bg-neutral-800 transition-all shadow-float hover:shadow-glow hover:scale-105">
              <i className="fas fa-eye mr-3"></i>
              Aperçu rapide
            </div>
          </button>

          {/* Floating elements for depth (from HTML) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="p-8 flex-grow flex flex-col">
          {" "}
          {/* Added flex-grow flex flex-col */}
          {/* Enhanced Product Info (from HTML) */}
          <div className="mb-4">
            <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>
          {/* Enhanced Features (from HTML) */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-lg font-medium"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  +{product.features.length - 2} autres
                </span>
              )}
            </div>
          </div>
          {/* Enhanced Rating (from HTML) */}
          <div className="flex items-center gap-3 mb-6">
            <div className="rating-stars text-2xl cursor-pointer">
              {ratingStars}
            </div>
            <span className="text-lg font-bold text-neutral-700 dark:text-neutral-300">
              {product.rating}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              ({product.reviews.toLocaleString()} avis)
            </span>
          </div>
          {/* Enhanced Price and Action (from HTML) */}
          <div className="flex items-end justify-between mt-auto">
            {" "}
            {/* Added mt-auto to push to bottom */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-black text-neutral-900 dark:text-white">
                  {product.price.toFixed(2)}€
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-neutral-500 dark:text-neutral-400 line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {product.fastDelivery && (
                  <span className="text-xs text-green-600 dark:text-green-400 font-semibold flex items-center">
                    <i className="fas fa-shipping-fast mr-1"></i>Livraison
                    rapide
                  </span>
                )}
                {product.inStock && (
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold flex items-center">
                    <i className="fas fa-check-circle mr-1"></i>En stock
                  </span>
                )}
              </div>
            </div>
            <button
              className="morph-button ripple flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-neutral-300 disabled:to-neutral-400 dark:disabled:from-neutral-700 dark:disabled:to-neutral-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed shadow-glow hover:shadow-glow-lg disabled:shadow-none"
              disabled={!product.inStock}
            >
              <i className="fas fa-shopping-bag text-lg"></i>
              <span className="hidden sm:inline">
                {product.inStock ? "Ajouter" : "Épuisé"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
