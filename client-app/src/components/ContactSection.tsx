/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import ContactForm from "./ContactForm";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ContactSection: React.FC = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <div
            className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}
          >
            <i className="fas fa-envelope mr-2"></i>
            Nous contacter
          </div>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}
          >
            Prendre <span className="gradient-text">Rendez-vous</span>
          </h2>
          <p
            className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${hasIntersected ? "animate-fade-in" : ""}`}
          >
            Contactez-nous pour planifier votre consultation ou obtenir
            des informations sur nos services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className={hasIntersected ? "animate-slide-in-left" : "opacity-0"}>
            <div className="space-y-8 mb-12">
              {/* Adresse */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    Adresse du cabinet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    123 Avenue des Champs-Élysées, Paris
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    123 Avenue des Champs-Élysées, Paris
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    01 23 45 67 89
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                    Urgences : 06 12 34 56 78
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    contact@cabinetdentaire.com
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-clock text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
                    {"Horaires d'ouverture"}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <div>Lundi - Vendredi : 8h30 - 19h00</div>
                    <div>Samedi : 9h00 - 13h00</div>
                    <div>Dimanche : Fermé</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl h-64 flex items-center justify-center border border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <i className="fas fa-map text-gray-400 dark:text-gray-500 text-5xl mb-4"></i>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                  {"Plan d'accès interactif"}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  123 Avenue des Champs-Élysées, Paris
                </p>
              </div>
            </div>
          </div>

          <div
            className={`bg-gradient-to-br from-gray-50 to-white dark:from-dark-light dark:to-dark border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-xl ${hasIntersected ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Demande de rendez-vous
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
