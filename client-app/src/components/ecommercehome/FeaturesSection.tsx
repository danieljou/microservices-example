"use client";
import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                        Pourquoi choisir LUXE Store ?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Une expérience shopping révolutionnaire qui combine technologie de pointe et service premium
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="feature-card glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                            <i className="fas fa-robot text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Assistant IA</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Notre intelligence artificielle vous guide personnellement dans vos achats et répond à toutes vos questions en temps réel.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                            <i className="fas fa-cube text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Réalité Augmentée</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {" Visualisez nos produits dans votre espace avant l'achat grâce à notre technologie AR avancée."}
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                            <i className="fas fa-shipping-fast text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Livraison Express</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Recevez vos commandes en 24h partout en France avec notre service de livraison premium.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                            <i className="fas fa-shield-alt text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sécurité Maximum</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Paiements 100% sécurisés avec chiffrement SSL et protection avancée de vos données.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="feature-card glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                            <i className="fas fa-gem text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Qualité Premium</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Tous nos produits sont soigneusement sélectionnés pour leur qualité exceptionnelle et leur innovation.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="feature-card glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                            <i className="fas fa-headset text-white text-2xl"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Support 24/7</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {"Notre équipe d'experts est disponible 24/7 pour vous assister et répondre à toutes vos questions."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;