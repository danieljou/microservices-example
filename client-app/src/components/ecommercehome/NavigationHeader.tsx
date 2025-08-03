"use client";
import React, { useState, useEffect } from "react";
import VoiceSearchModal from "../product/VoiceSearchModal";
import Link from "next/link";

const NavigationHeader = () => {
  const [voiceOpen, setVoiceOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Vérifier le thème au chargement
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className="backdrop-blur sticky top-0 z-30 shadow-card animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300 group-hover:scale-110">
                  <i className="fas fa-gem text-white text-lg sm:text-xl animate-float"></i>
                </div>
                <h1 className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl font-black gradient-text">
                  LUXE Store
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/shop"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium"
              >
                Accueil
              </Link>
              <Link
                href="/shop/products"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium"
              >
                Produits
              </Link>
              <Link
                href="/shop/cart"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-all duration-300 hover:scale-105 font-medium"
              >
                Panier
              </Link>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="interactive-btn p-2 sm:p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110">
                <i className="fas fa-search text-sm sm:text-base"></i>
              </button>

              {/* Voice Search Button */}
              <button
                className="interactive-btn p-2 sm:p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110"
                aria-label="Recherche vocale"
                onClick={() => setVoiceOpen(true)}
              >
                <i className="fas fa-microphone text-sm sm:text-base"></i>
              </button>

              {/* Dark/Light Mode Toggle */}
              <button
                className="interactive-btn p-2 sm:p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110"
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Mode clair" : "Mode sombre"}
              >
                <i
                  className={`fas ${darkMode ? "fa-sun" : "fa-moon"
                    } text-sm sm:text-base`}
                ></i>
              </button>

              <button className="interactive-btn relative p-2 sm:p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300 hover:scale-110">
                <i className="fas fa-shopping-bag text-sm sm:text-base"></i>
                <span className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center animate-bounce-soft shadow-glow">
                  0
                </span>
              </button>

              <Link href="/shop/login">
                <button className="hidden sm:inline-block interactive-btn px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-glow font-semibold text-sm sm:text-base">
                  Connexion
                </button>
              </Link>

              {/* Mobile menu button - hidden on desktop */}
              <button
                className="md:hidden interactive-btn p-2 sm:p-3 text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu mobile"
              >
                <i
                  className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"
                    } text-sm sm:text-base`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - hidden on desktop */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg animate-slide-down">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                href="/shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/shop/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                href="/shop/cart"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Panier
              </Link>
              <button
                className="w-full mt-2 interactive-btn px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-glow font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </button>
            </div>
          </div>
        )}
      </header>
      {voiceOpen && (
        <VoiceSearchModal isOpen={voiceOpen} onClose={() => setVoiceOpen(false)} />
      )}
    </>
  );
};

export default NavigationHeader;
