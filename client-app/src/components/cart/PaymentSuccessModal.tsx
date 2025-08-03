'use client';

import React, { useState } from 'react';

interface PaymentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentSuccessModal({ isOpen, onClose }: PaymentSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 shadow-float-lg max-w-md w-full mx-4 text-center animate-zoom-in">
        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center animate-bounce-gentle">
          <i className="fas fa-check text-white text-4xl"></i>
        </div>
        <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Paiement réussi !
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
          Votre commande #LUX2024001 a été confirmée. Un email de confirmation
          vous a été envoyé.
        </p>
        <div className="space-y-4">
          <button
            onClick={onClose}
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all font-semibold shadow-glow hover:scale-105"
          >
            <i className="fas fa-home mr-2"></i>
            Retour à l&apos;accueil
          </button>
          <button className="w-full px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all font-semibold">
            <i className="fas fa-receipt mr-2"></i>
            Voir ma commande
          </button>
        </div>
      </div>
    </div>
  );
} 