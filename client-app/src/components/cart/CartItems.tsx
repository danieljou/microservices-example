'use client';

import { useCart } from '@/hooks/useCart';
import React, { useState } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    image: string;
    description: string;
    inStock: boolean;
}

export default function CartItems() {
    const { cartItems, updateQuantity, removeItem, applyPromoCode } = useCart();
    const [promoCode, setPromoCode] = useState('');

    const handleQuantityChange = (itemId: number, change: number, setValue?: number) => {
        updateQuantity(itemId, change, setValue);
    };

    const handleRemoveItem = (itemId: number) => {
        removeItem(itemId);
    };

    const handleApplyPromoCode = () => {
        applyPromoCode(promoCode);
        setPromoCode('');
    };

    const renderCartItem = (item: CartItem, index: number) => {
        const discountPercentage = item.originalPrice
            ? Math.round((1 - item.price / item.originalPrice) * 100)
            : 0;

        return (
            <div
                key={item.id}
                className="cart-item glass-effect rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <div className="flex items-center space-x-6">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-xl shadow-float"
                        />
                        {discountPercentage > 0 && (
                            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-glow">
                                -{discountPercentage}%
                            </span>
                        )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                            {item.name}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                            {item.description}
                        </p>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-bold text-neutral-900 dark:text-white">
                                    {item.price}€
                                </span>
                                {item.originalPrice && (
                                    <span className="text-sm text-neutral-500 dark:text-neutral-400 line-through">
                                        {item.originalPrice}€
                                    </span>
                                )}
                            </div>
                            <span className={`text-xs font-medium ${item.inStock
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-red-600 dark:text-red-400"
                                }`}>
                                {item.inStock ? "✓ En stock" : "✗ Rupture"}
                            </span>
                        </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="morph-button w-10 h-10 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        >
                            <i className="fas fa-minus text-sm"></i>
                        </button>
                        <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            max="10"
                            className="quantity-input w-16 h-10 text-center border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            onChange={(e) => handleQuantityChange(item.id, 0, parseInt(e.target.value))}
                        />
                        <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="morph-button w-10 h-10 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        >
                            <i className="fas fa-plus text-sm"></i>
                        </button>
                    </div>

                    {/* Remove Button */}
                    <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="morph-button p-3 text-neutral-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all hover:scale-110"
                    >
                        <i className="fas fa-trash text-lg"></i>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="glass-card rounded-3xl p-8 shadow-float border-2 border-primary-100 dark:border-primary-900/30">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center">
                    <i className="fas fa-shopping-cart mr-3 text-primary-500"></i>
                    Vos Articles
                </h3>
                <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full font-semibold">
                    {cartItems.length} articles
                </span>
            </div>

            {/* Cart Items List */}
            <div className="space-y-6">
                {cartItems.map((item: CartItem, index: number) => renderCartItem(item, index))}
            </div>

            {/* Promo Code */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl border border-primary-200 dark:border-primary-800">
                <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
                    <i className="fas fa-ticket-alt mr-3 text-primary-500"></i>
                    Code promo
                </h4>
                <div className="flex space-x-3">
                    <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Entrez votre code promo..."
                        className="flex-1 px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-base"
                    />
                    <button
                        onClick={handleApplyPromoCode}
                        className="morph-button ripple px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow hover:scale-105 font-semibold"
                    >
                        Appliquer
                    </button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                        LUXE15 - 15% de réduction
                    </span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                        WELCOME - Livraison gratuite
                    </span>
                </div>
            </div>
        </div>
    );
} 