"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { useScrollPosition } from "../utils/hooks";

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#equipe", label: "Équipe" },
  { href: "#technologies", label: "Technologies" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#blog", label: "Blog" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 100;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    setIsAppointmentModalOpen(false);
    setTimeout(() => scrollToSection("#contact"), 100);
  };

  // Dynamic text color classes for nav links and logo based on scroll and dark mode
  const getNavTextColor = () => {
    if (isScrolled) {
      return "text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary";
    }
    return "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary";
  };
  const getLogoTitleColor = () => (isScrolled ? "text-primary dark:text-primary" : "text-primary dark:text-white");
  const getLogoSubtitleColor = () => (isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-500 dark:text-gray-400");

  return (
    <>
      <nav className={`navbar-scroll fixed w-full top-0 z-50 py-4 ${isScrolled ? "scrolled" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("#accueil")}> 
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-tooth text-white text-xl"></i>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className={`text-xs font-bold ${getLogoTitleColor()}`}>CABINET DENTAIRE ESSOS-CHAPELLE</h1>
                <p className={`text-xs ${getLogoSubtitleColor()}`}>Excellence Dentaire</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link font-medium transition-colors duration-300 relative group ${getNavTextColor()}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <button
                onClick={() => setIsAppointmentModalOpen(true)}
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Rendez-vous
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Ouvrir le menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 transform origin-center ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 transform origin-center my-1 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 transform origin-center ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
              </div>
            </button>
          </div>
          {/* Mobile menu */}
          <div className={`lg:hidden mt-4 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
            <div className="bg-white dark:bg-dark-light rounded-2xl shadow-xl p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium py-2 transition-colors ${getNavTextColor()}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setIsAppointmentModalOpen(true)}
                className="w-full btn-primary text-white px-6 py-3 rounded-xl font-semibold mt-4"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Prendre Rendez-vous
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Modal isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)}>
        <div className="bg-white dark:bg-dark rounded-3xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent px-6 py-4 text-white">
            <h3 className="text-xl font-bold flex items-center">
              <i className="fas fa-calendar-plus mr-3"></i>
              Prendre rendez-vous
            </h3>
          </div>
          <div className="px-6 py-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Choisissez votre méthode de contact préférée pour planifier votre rendez-vous avec le CABINET DENTAIRE ESSOS-CHAPELLE.
            </p>
            <div className="space-y-4">
              <a href="tel:0142256789" className="flex items-center justify-center w-full btn-primary text-white py-4 rounded-xl font-semibold shadow-lg group">
                <i className="fas fa-phone mr-3 group-hover:scale-110 transition-transform"></i>
                Appeler maintenant
              </a>
              <button onClick={scrollToContact} className="flex items-center justify-center w-full border-2 border-primary text-primary dark:text-white py-4 rounded-xl font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group">
                <i className="fas fa-envelope mr-3 group-hover:scale-110 transition-transform"></i>
                Formulaire de contact
              </button>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <i className="fas fa-clock mr-2 text-primary"></i>
                  Réponse garantie sous 24h
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 flex justify-end">
            <button onClick={() => setIsAppointmentModalOpen(false)} className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium">
              Fermer
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navigation;
