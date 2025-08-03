"use client";
import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";



const PricingSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <section id="tarifs" className="py-20 bg-gray-50 dark:bg-dark-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <div className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-tag mr-2"></i>
            Tarifs Transparents
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}>
            Plans de <span className="gradient-text">Soins</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${hasIntersected ? "animate-fade-in" : ""}`}>
            Tarifs clairs et compétitifs. Conventionné Sécurité Sociale. Devis détaillé gratuit.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}>
          {/* Essentiel */}
          <div className="card-hover bg-white dark:bg-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Essentiel</h3>
              <p className="text-gray-600 dark:text-gray-300">Soins préventifs de base</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Consultation</span>
                <span className="font-bold text-gray-900 dark:text-white">16 375 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Détartrage</span>
                <span className="font-bold text-gray-900 dark:text-white">45 850 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Soin carie simple</span>
                <span className="font-bold text-gray-900 dark:text-white">58 950 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 dark:text-gray-300">Radio panoramique</span>
                <span className="font-bold text-gray-900 dark:text-white">49 125 XAF</span>
              </div>
            </div>
            <button className="w-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-100 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
              Prendre RDV
            </button>
          </div>
          {/* Premium */}
          <div className="card-hover bg-white dark:bg-dark rounded-2xl shadow-2xl border-2 border-primary p-8 relative overflow-hidden transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">POPULAIRE</span>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <div className="text-center mb-8 mt-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-crown text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Premium</h3>
              <p className="text-gray-600 dark:text-gray-300">Soins esthétiques avancés</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Couronne céramique</span>
                <span className="font-bold text-gray-900 dark:text-white">524 000 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Blanchiment</span>
                <span className="font-bold text-gray-900 dark:text-white">262 000 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Facette céramique</span>
                <span className="font-bold text-gray-900 dark:text-white">458 500 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 dark:text-gray-300">Inlay/Onlay</span>
                <span className="font-bold text-gray-900 dark:text-white">393 000 XAF</span>
              </div>
            </div>
            <button className="w-full btn-primary text-white py-4 rounded-xl font-semibold shadow-lg">
              Demander un devis
            </button>
          </div>
          {/* Expert */}
          <div className="card-hover bg-white dark:bg-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cog text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Expert</h3>
              <p className="text-gray-600 dark:text-gray-300">Solutions implantaires</p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Implant unitaire</span>
                <span className="font-bold text-gray-900 dark:text-white">786 000 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Pilier + couronne</span>
                <span className="font-bold text-gray-900 dark:text-white">524 000 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">Bridge 3 éléments</span>
                <span className="font-bold text-gray-900 dark:text-white">1 572 000 XAF</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 dark:text-gray-300">Greffe osseuse</span>
                <span className="font-bold text-gray-900 dark:text-white">393 000 XAF</span>
              </div>
            </div>
            <button className="w-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-100 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              Consultation spécialisée
            </button>
          </div>
        </div>
        {/* Payment Options */}
        <div className={`bg-white dark:bg-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 ${hasIntersected ? "animate-fade-in" : "opacity-0"}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Facilités de Paiement</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-credit-card text-white text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Carte Bancaire</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Paiement sécurisé en ligne</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-calendar-check text-white text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Paiement en 3x</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sans frais supplémentaires</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Mutuelle</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tiers payant accepté</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-money-bill-wave text-white text-2xl"></i>
              </div>
              <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Financement</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{"Jusqu'à 24 mois"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
