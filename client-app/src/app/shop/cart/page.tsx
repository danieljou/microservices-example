"use client";

import React, { useState } from "react";
import ToastNotifications from "@/components/ecommercehome/ToastNotifications";
import AIShoppingAssistant from "@/components/ecommercehome/AIShoppingAssistant";
import AnimatedBackground from "@/components/ecommercehome/AnimatedBackground";
import FloatingDecoration from "@/components/ecommercehome/FloatingDecoration";
import CartItems from "@/components/cart/CartItems";
import {
  NeuralNetworkBackground,
  OrderSummary,
  PaymentSuccessModal,
  ProgressSteps,
} from "@/components/cart";

import "@/styles/cart.css";

export default function CartPage() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-neutral-25 via-white to-primary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 min-h-screen relative overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingDecoration />
      <NeuralNetworkBackground />

      {/* Toast Notifications */}
      <ToastNotifications />

      {/* AI Shopping Assistant */}
      <div id="aiAssistant" className="fixed bottom-8 right-8 z-[200]">
        <AIShoppingAssistant />
      </div>
      {/* Payment Success Modal */}
      <PaymentSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />

      <div className="px-80 mx-auto sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Page Header */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="mx-auto">
            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 mb-6 animate-slide-up">
              Panier Intelligent
            </h2>
            <p
              className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Finalisez votre commande avec notre système de paiement sécurisé
              et intelligent
            </p>

            {/* Progress Steps */}
            <ProgressSteps />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <CartItems />
          </div>

          {/* Order Summary */}
          <div className="animate-slide-in-right">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
