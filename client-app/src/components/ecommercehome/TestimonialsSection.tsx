"use client";
import React from 'react';

const TestimonialsSection = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Plus de 10 000 clients satisfaits nous font confiance pour leurs achats premium
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="testimonial-card glass-card rounded-3xl p-8 shadow-card border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                M
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Marie Dubois</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Designer</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 mb-4">
                            ★★★★★
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {"\"L'assistant IA de LUXE Store m'a aidée à trouver exactement ce que je cherchais. Service exceptionnel et livraison ultra-rapide !\""}
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="testimonial-card glass-card rounded-3xl p-8 shadow-card border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                J
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Jean Dupont</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Développeur</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 mb-4">
                            ★★★★★
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {"\"La technologie AR pour visualiser les produits est révolutionnaire. J'ai pu voir mon MacBook dans mon bureau avant l'achat !\""}
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="testimonial-card glass-card rounded-3xl p-8 shadow-card border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                L
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">Lucie Martin</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Entrepreneuse</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 mb-4">
                            ★★★★★
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {"\"J'adore la livraison express de LUXE Store. J'ai reçu mon iPhone en moins de 24h, c'est incroyable !\""}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;