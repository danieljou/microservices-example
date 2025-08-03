"use client";
import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left animate-slide-in-left">
                        <div className="mb-8">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 shadow-inner-glow mb-6 animate-bounce-soft">
                                <i className="fas fa-sparkles mr-2"></i>
                                Nouvelle collection disponible
                            </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in">
                            <span className="gradient-text">La Boutique</span>
                            <br />
                            <span className="text-gray-900 dark:text-white">du Futur</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Découvrez une expérience shopping révolutionnaire avec notre intelligence artificielle, réalité augmentée et produits premium sélectionnés avec soin.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <button className="interactive-btn px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-glow hover:shadow-glow-lg font-bold text-lg">
                                <i className="fas fa-rocket mr-3"></i>
                                Explorer maintenant
                            </button>
                            <button className="interactive-btn px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-105 font-bold text-lg">
                                <i className="fas fa-robot mr-3"></i>
                                Assistant IA
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            <div className="text-center">
                                <div className="text-3xl font-black text-primary-600 dark:text-primary-400">10K+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Clients satisfaits</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-primary-600 dark:text-primary-400">500+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Produits premium</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-primary-600 dark:text-primary-400">24h</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Livraison express</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative animate-slide-in-right">
                        <div className="relative w-full h-96 lg:h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl shadow-card-hover animate-float">
                                <div className="w-full h-full flex items-center justify-center text-white">
                                    <div className="text-center">
                                        <i className="fas fa-gem text-8xl mb-6 animate-rotate-slow"></i>
                                        <h3 className="text-2xl font-bold mb-4">Produits Premium</h3>
                                        <p className="text-lg opacity-90">Innovation &amp; Qualité</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-glow animate-bounce-soft flex items-center justify-center text-white">
                                <i className="fas fa-star text-2xl"></i>
                            </div>
                            
                            <div className="absolute -top-4 -right-8 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-glow animate-float" style={{ animationDelay: '-1s' }}>
                                <i className="fas fa-check text-xl"></i>
                            </div>
                            
                            <div className="absolute -bottom-4 -left-8 w-28 h-28 bg-gradient-to-br from-pink-400 to-red-500 rounded-3xl shadow-glow animate-pulse-glow flex items-center justify-center text-white">
                                <i className="fas fa-heart text-2xl"></i>
                            </div>
                            
                            <div className="flex justify-center items-center absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl shadow-glow animate-bounce-soft" style={{ animationDelay: '-0.5s' }}>
                                <i className="fas fa-shopping-bag text-3xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;