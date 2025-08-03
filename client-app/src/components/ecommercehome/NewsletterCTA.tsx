"use client";
import React from 'react';

const NewsletterCTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary-500 to-purple-600 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        {"Restez connecté à l'innovation"}
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Soyez les premiers informés de nos nouvelles collections, offres exclusives et innovations technologiques
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
                        <input type="email" placeholder="Votre adresse email" className="flex-1 px-6 py-4 rounded-2xl border-0 bg-white/90 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all text-base font-medium" />
                    </div>
                    
                    <p className="text-sm text-white/70">
                        Inscrivez-vous maintenant !
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;