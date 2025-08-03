"use client"
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  badges: string[];
  inStock: boolean;
  fastDelivery: boolean;
  features: string[];
}

interface ProductGridProps {
  products: Product[];
  viewMode: "grid" | "list";
  onEdit: (product: Product) => void;
  onDelete: (productId: number) => void;
}

export default function ProductGrid({ products, viewMode, onEdit, onDelete }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <div className="glass-card rounded-2xl p-12 shadow-card">
          <i className="fas fa-box-open text-6xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Aucun produit trouvé</h3>
          <p className="text-gray-600 dark:text-gray-400">Aucun produit ne correspond à vos critères de recherche.</p>
        </div>
      </div>
    );
  }

  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const discountPercentage = product.originalPrice 
            ? Math.round((1 - product.price / product.originalPrice) * 100) 
            : 0;

          return (
            <div key={product.id} className="glass-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.badges.map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-semibold">{badge}</span>
                  ))}
                  {discountPercentage > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">-{discountPercentage}%</span>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`status-badge ${product.inStock ? 'status-active' : 'status-inactive'}`}>
                    {product.inStock ? 'En stock' : 'Rupture'}
                  </span>
                </div>
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex space-x-2">
                    <button onClick={() => onEdit(product)} className="flex-1 bg-white/90 hover:bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
                      <i className="fas fa-edit mr-1"></i>
                      Éditer
                    </button>
                    <button onClick={() => onDelete(product.id)} className="flex-1 bg-red-500/90 hover:bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
                      <i className="fas fa-trash mr-1"></i>
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{product.rating}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{product.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}€</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">{product.originalPrice}€</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{product.brand}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // List view
  return (
    <div className="space-y-4">
      {products.map((product, index) => {
        const discountPercentage = product.originalPrice 
          ? Math.round((1 - product.price / product.originalPrice) * 100) 
          : 0;

        return (
          <div key={product.id} className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex items-center space-x-6">
              <div className="relative flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="absolute -top-2 -right-2">
                  <span className={`status-badge ${product.inStock ? 'status-active' : 'status-inactive'}`}>
                    {product.inStock ? 'En stock' : 'Rupture'}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="capitalize">{product.category}</span>
                      <span>{product.brand}</span>
                      <span className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {product.rating} ({product.reviews} avis)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}€</div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 line-through">{product.originalPrice}€</div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button onClick={() => onEdit(product)} className="interactive-btn px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors font-semibold">
                        <i className="fas fa-edit mr-1"></i>
                        Éditer
                      </button>
                      <button onClick={() => onDelete(product.id)} className="interactive-btn px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors font-semibold">
                        <i className="fas fa-trash mr-1"></i>
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 