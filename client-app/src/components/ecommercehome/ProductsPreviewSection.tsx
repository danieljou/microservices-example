"use client";
import React from 'react';

const ProductsPreviewSection = () => {
    return (
        <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-primary-950 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                        Nos Produits Phares
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Découvrez notre sélection de produits premium, choisis pour leur innovation et leur qualité exceptionnelle
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Product 1 */}
                    <div className="glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-zoom-in" style={{ animationDelay: '0.1s' }}>
                        <div className="relative h-64 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                            <i className="fas fa-mobile-alt text-white text-6xl animate-float"></i>
                            <div className="absolute top-4 left-4">
                                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">-7%</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:text-red-500 transition-colors">
                                    <i className="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">iPhone 15 Pro Max</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{"Le smartphone le plus avancé d'Apple"}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-gray-900 dark:text-white">1299€</span>
                                    <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-2">1399€</span>
                                </div>
                                <button className="interactive-btn px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Product 2 */}
                    <div className="glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-zoom-in" style={{ animationDelay: '0.2s' }}>
                        <div className="relative h-64 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                            <i className="fas fa-laptop text-white text-6xl animate-float" style={{ animationDelay: '-1s' }}></i>
                            <div className="absolute top-4 left-4">
                                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Nouveau</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:text-red-500 transition-colors">
                                    <i className="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">MacBook Pro M3 Max</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Performance exceptionnelle pour les créateurs</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-gray-900 dark:text-white">2499€</span>
                                </div>
                                <button className="interactive-btn px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Product 3 */}
                    <div className="glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-zoom-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative h-64 bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                            <i className="fas fa-headphones text-white text-6xl animate-float" style={{ animationDelay: '-2s' }}></i>
                            <div className="absolute top-4 left-4">
                                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Gaming</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:text-red-500 transition-colors">
                                    <i className="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Casque Gaming Pro X</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Son surround 7.1 et microphone Blue VO!CE</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-black text-gray-900 dark:text-white">299€</span>
                                </div>
                                <button className="interactive-btn px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center animate-fade-in">
                    <button onClick={() => window.location.href='/product'} className="interactive-btn px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-glow font-bold text-lg">
                        <i className="fas fa-arrow-right mr-3"></i>
                        Voir tous les produits
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsPreviewSection;