'use client';

import React from 'react';

interface ProductToolbarProps {
  filteredProductsCount: number;
  onVoiceSearch: () => void;
}

export default function ProductToolbar({ filteredProductsCount, onVoiceSearch }: ProductToolbarProps) {
  return (
    <div className="glass-card rounded-3xl p-6 mb-8 shadow-float border-2 border-primary-100 dark:border-primary-900/30">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center">
            <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mr-4 flex items-center">
              <i className="fas fa-sort mr-2 text-primary-500"></i>
              Trier par:
            </label>
            <select
              className="bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all hover:shadow-glow cursor-pointer"
            >
              <option value="featured">✨ Mis en avant</option>
              <option value="price-asc">💰 Prix croissant</option>
              <option value="price-desc">💎 Prix décroissant</option>
              <option value="rating">⭐ Mieux notés</option>
              <option value="newest">🆕 Nouveautés</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 flex items-center">
            <i className="fas fa-eye mr-2"></i>
            Affichage:
          </span>
          <div className="flex bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1 shadow-inner">
            <button className="morph-button px-4 py-2.5 text-sm rounded-lg bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 shadow-sm transition-all hover:scale-105">
              <i className="fas fa-th-large mr-2"></i>
              Grille
            </button>
            <button className="morph-button px-4 py-2.5 text-sm rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-all hover:scale-105">
              <i className="fas fa-list mr-2"></i>
              Liste
            </button>
          </div>
          
          <button
            onClick={onVoiceSearch}
            className="morph-button ripple px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow hover:scale-105 font-semibold"
          >
            <i className="fas fa-microphone mr-2"></i>
            Recherche vocale
          </button>
        </div>
      </div>
    </div>
  );
} 