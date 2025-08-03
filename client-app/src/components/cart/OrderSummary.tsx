'use client';

import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';

export default function OrderSummary() {
  const { getSubtotal, getTax, getTotal, promoCodeApplied } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleProcessPayment = () => {
    if (!selectedPaymentMethod) {
      // Show toast notification
      return;
    }

    if (getSubtotal() === 0) {
      // Show toast notification
      return;
    }

    // Simulate payment processing
    // Show success modal
  };

  const paymentMethods = [
    { id: 'visa', name: 'Visa', icon: 'fab fa-cc-visa', color: 'text-blue-600' },
    { id: 'mastercard', name: 'Mastercard', icon: 'fab fa-cc-mastercard', color: 'text-red-500' },
    { id: 'paypal', name: 'PayPal', icon: 'fab fa-paypal', color: 'text-blue-500' },
    { id: 'applepay', name: 'Apple Pay', icon: 'fab fa-apple-pay', color: 'text-gray-800 dark:text-gray-200' },
  ];

  return (
    <div className="glass-card rounded-3xl p-8 shadow-float border-2 border-primary-100 dark:border-primary-900/30 sticky top-32">
      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 flex items-center">
        <i className="fas fa-receipt mr-3 text-primary-500"></i>
        Récapitulatif
      </h3>

      {/* Order Details */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center text-lg">
          <span className="text-neutral-600 dark:text-neutral-400">Sous-total</span>
          <span className="font-semibold text-neutral-900 dark:text-white">
            {getSubtotal()}€
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-600 dark:text-neutral-400">Livraison</span>
          <span className="font-medium text-green-600 dark:text-green-400">Gratuite</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-neutral-600 dark:text-neutral-400">TVA (20%)</span>
          <span className="font-medium text-neutral-700 dark:text-neutral-300">
            {getTax()}€
          </span>
        </div>
        {promoCodeApplied && (
          <div className="flex justify-between items-center text-green-600 dark:text-green-400">
            <span>Réduction promo</span>
            <span className="font-medium">-15%</span>
          </div>
        )}
        <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
          <div className="flex justify-between items-center text-2xl font-bold">
            <span className="text-neutral-900 dark:text-white">Total</span>
            <span className="text-primary-600 dark:text-primary-400">
              {getTotal()}€
            </span>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800">
        <div className="flex items-center space-x-3">
          <div className="security-badge w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <i className="fas fa-shield-alt text-white text-xl"></i>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 dark:text-green-300">
              Paiement sécurisé
            </h4>
            <p className="text-sm text-green-600 dark:text-green-400">
              Chiffrement SSL 256-bit
            </p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Méthodes de paiement
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`payment-method border-2 rounded-xl p-4 text-center transition-all cursor-pointer ${
                selectedPaymentMethod === method.id
                  ? 'border-primary-500 selected'
                  : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-500'
              }`}
              onClick={() => handlePaymentMethodSelect(method.id)}
            >
              <i className={`${method.icon} text-3xl ${method.color} mb-2`}></i>
              <p className="text-sm font-medium">{method.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleProcessPayment}
        className="morph-button ripple w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg text-lg"
      >
        <i className="fas fa-lock mr-3"></i>
        Finaliser la commande
      </button>

      {/* Trust Indicators */}
      <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center">
          <i className="fas fa-undo mr-2"></i>
          Retours 30j
        </div>
        <div className="flex items-center">
          <i className="fas fa-shipping-fast mr-2"></i>
          Livraison 24h
        </div>
        <div className="flex items-center">
          <i className="fas fa-headset mr-2"></i>
          Support 24/7
        </div>
      </div>
    </div>
  );
} 