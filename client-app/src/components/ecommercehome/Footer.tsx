"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Branding & Social */}
                    <div className="animate-slide-in-left">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-glow mr-3">
                                <i className="fas fa-gem text-white"></i>
                            </div>
                            <h3 className="text-2xl font-black gradient-text">LUXE Store</h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            La boutique du futur qui révolutionne votre expérience shopping avec l&apos;intelligence artificielle et la réalité augmentée.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                                <i className="fab fa-instagram"></i>
                            </button>
                            <button className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                                <i className="fab fa-linkedin-in"></i>
                            </button>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nouveautés</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Promotions</a></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Centre d&apos;aide</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Livraison</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retours</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Garantie</a></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="animate-slide-in-right">
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-primary-500 mr-3"></i>
                                <span className="text-gray-400">123 Rue de l&apos;Innovation, 75001 Paris</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-phone text-primary-500 mr-3"></i>
                                <span className="text-gray-400">+33 1 23 45 67 89</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-primary-500 mr-3"></i>
                                <span className="text-gray-400">contact@luxestore.com</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-clock text-primary-500 mr-3"></i>
                                <span className="text-gray-400">Support 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} LUXE Store. Tous droits réservés.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Confidentialité</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CGV</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;