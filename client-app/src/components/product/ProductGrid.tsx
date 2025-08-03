'use client';

import React from 'react';
import ProductCard from './ProductCard';

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

interface ProductGridProps {
  products: Product[];
  onARViewerOpen: (productId: number) => void;
  onClearFilters: () => void;
}

export default function ProductGrid({ products, onARViewerOpen, onClearFilters }: ProductGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onArClick={onARViewerOpen}
            showQuickPreview={(productId: number) => {
              console.log('Quick preview for product:', productId);
            }}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20 animate-zoom-in">
          <div className="backdrop-blur rounded-3xl p-16 shadow-float max-w-lg mx-auto border-2 border-dashed border-primary-200 dark:border-primary-800">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full flex items-center justify-center animate-bounce-gentle">
              <i className="fas fa-search text-4xl text-neutral-400 animate-wiggle"></i>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Aucun produit trouvé
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
              Essayez de modifier vos filtres ou votre recherche pour
              découvrir nos merveilles
            </p>
            <button
              onClick={onClearFilters}
              className="morph-button ripple inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-glow hover:shadow-glow-lg hover:scale-105"
            >
              <i className="fas fa-redo mr-3"></i>
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      )}
    </>
  );
} 