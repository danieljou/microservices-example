'use client';

import React from 'react';

interface FilterChipProps {
  id: string;
  label: string;
  count: number;
  type: 'category' | 'rating' | 'brand';
  value: string | number;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconClass?: string;
  bgColorClass?: string;
  textColorClass?: string;
  imageUrl?: string;
}

const FilterChip: React.FC<FilterChipProps> = ({
  id,
  label,
  count,
  type,
  value,
  isChecked,
  onChange,
  iconClass,
  bgColorClass,
  textColorClass,
  imageUrl,
}) => {
  const renderIconOrImage = () => {
    if (type === 'brand' && imageUrl) {
      return (
        <img
          src={imageUrl}
          alt={label}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-neutral-200 dark:border-neutral-700 group-hover:scale-110 transition-transform"
        />
      );
    } else if (type === 'category' && iconClass && bgColorClass && textColorClass) {
      return (
        <div
          className={`w-12 h-12 rounded-2xl ${bgColorClass} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
        >
          <i className={`${iconClass} ${textColorClass} text-lg`}></i>
        </div>
      );
    } else if (type === 'rating') {
      const fullStars = '★'.repeat(value as number);
      const emptyStars = '☆'.repeat(5 - (value as number));
      return (
        <span className="rating-stars text-xl mr-2">
          <span className="text-yellow-400">{fullStars}</span>
          <span className="text-gray-300 dark:text-gray-600">{emptyStars}</span>
        </span>
      );
    }
    return null;
  };

  return (
    <label htmlFor={id} className="group cursor-pointer block">
      <input
        type={type === 'rating' ? 'radio' : 'checkbox'}
        id={id}
        className="sr-only peer"
        data-filter={type}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className="filter-chip interactive-element flex items-center justify-between p-4 rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 peer-checked:border-primary-500 peer-checked:bg-gradient-to-r peer-checked:from-primary-50 peer-checked:to-primary-100 dark:peer-checked:from-primary-900/20 dark:peer-checked:to-primary-800/20 hover:border-primary-300 transition-all duration-300 hover:shadow-glow"
      >
        <div className="flex items-center">
          {renderIconOrImage()}
          <span
            className={`font-semibold text-neutral-700 dark:text-neutral-300 ${
              isChecked ? 'peer-checked:text-primary-700 dark:peer-checked:text-primary-300' : ''
            }`}
          >
            {label}
            {type === 'rating' && <span className="text-sm text-neutral-600 dark:text-neutral-400 ml-1"> & Up</span>}
          </span>
        </div>
        <span className="text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-3 py-1 rounded-full font-medium">
          {count}
        </span>
      </div>
    </label>
  );
};

export default FilterChip; 