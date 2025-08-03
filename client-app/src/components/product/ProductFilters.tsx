'use client';

import React from 'react';
import FilterChip from './FilterChip';

interface Category {
  id: string;
  label: string;
  count: number;
  iconClass: string;
  bgColorClass: string;
  textColorClass: string;
}

interface Rating {
  id: string;
  label: string;
  count: number;
  value: number;
}

interface Brand {
  id: string;
  label: string;
  count: number;
  imageUrl: string;
}

interface ProductFiltersProps {
  categories: Category[];
  ratings: Rating[];
  brands: Brand[];
  selectedCategories: string[];
  selectedRating: number | null;
  selectedBrands: string[];
  currentPriceRange: number;
  onCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRatingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBrandChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPriceRangeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFilters: () => void;
}

export default function ProductFilters({
  categories,
  ratings,
  brands,
  selectedCategories,
  selectedRating,
  selectedBrands,
  currentPriceRange,
  onCategoryChange,
  onRatingChange,
  onBrandChange,
  onPriceRangeChange,
  onClearFilters,
}: ProductFiltersProps) {
  return (
    <div className="glass-card rounded-3xl p-8 shadow-float sticky top-32 border-2 border-primary-100 dark:border-primary-900/30">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center">
          <i className="fas fa-filter mr-3 text-primary-500"></i>
          Filtres
        </h3>
        <button
          onClick={onClearFilters}
          className="morph-button text-sm text-primary-500 hover:text-primary-700 font-semibold px-4 py-2 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
        >
          <i className="fas fa-times mr-2"></i> Effacer
        </button>
      </div>

      {/* Enhanced Categories */}
      <div className="mb-10">
        <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-6 uppercase tracking-wider flex items-center">
          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
          Catégories
        </h4>
        <div className="space-y-4">
          {categories.map(cat => (
            <FilterChip
              key={cat.id}
              id={cat.id}
              label={cat.label}
              count={cat.count}
              type="category"
              value={cat.id}
              isChecked={selectedCategories.includes(cat.id)}
              onChange={onCategoryChange}
              iconClass={cat.iconClass}
              bgColorClass={cat.bgColorClass}
              textColorClass={cat.textColorClass}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-10">
        <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-6 uppercase tracking-wider flex items-center">
          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
          Prix
        </h4>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <span>Min: <span>0€</span></span>
            <span>Max: <span>{currentPriceRange}€</span></span>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={currentPriceRange}
            onChange={onPriceRangeChange}
            className="w-full price-slider"
          />
          <div className="text-center text-xl font-bold text-primary-600 dark:text-primary-400">
            <span>{currentPriceRange}€</span>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="mb-10">
        <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-6 uppercase tracking-wider flex items-center">
          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
          Évaluations
        </h4>
        <div className="space-y-4">
          {ratings.map(r => (
            <FilterChip
              key={r.id}
              id={r.id}
              label={r.label}
              count={r.count}
              type="rating"
              value={r.value}
              isChecked={selectedRating === r.value}
              onChange={onRatingChange}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h4 className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-6 uppercase tracking-wider flex items-center">
          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
          Marques
        </h4>
        <div className="space-y-4">
          {brands.map(b => (
            <FilterChip
              key={b.id}
              id={b.id}
              label={b.label}
              count={b.count}
              type="brand"
              value={b.label}
              isChecked={selectedBrands.includes(b.label)}
              onChange={onBrandChange}
              imageUrl={b.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}