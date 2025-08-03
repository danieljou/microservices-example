"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <i className="fas fa-tooth text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">CABINET DENTAIRE ESSOS-CHAPELLE</h3>
                <p className="text-gray-400 text-sm">Excellence Dentaire</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {"Cabinet dentaire de pointe spécialisé dans les soins esthétiques et l'implantologie. Votre sourire, notre expertise depuis 2009."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a className="text-gray-300 hover:text-primary transition-colors">Soins Généraux</a></li>
              <li><a className="text-gray-300 hover:text-primary transition-colors">Esthétique Dentaire</a></li>
              <li><a className="text-gray-300 hover:text-primary transition-colors">Implantologie</a></li>
              <li><a className="text-gray-300 hover:text-primary transition-colors">Dentisterie Pédiatrique</a></li>
              <li><a className="text-gray-300 hover:text-primary transition-colors">Urgences Dentaires</a></li>
              <li><a className="text-gray-300 hover:text-primary transition-colors">Technologies Avancées</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                <div className="text-gray-300 text-sm">123 Avenue des Champs-Élysées, Paris</div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3"></i>
                <a className="text-gray-300 hover:text-primary transition-colors text-sm">01 23 45 67 89</a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <a className="text-gray-300 hover:text-primary transition-colors text-sm">contact@cabinetdentaire.com</a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-primary mr-3 mt-1"></i>
                <div className="text-gray-300 text-sm">Lun-Ven : 8h30-19h | Sam : 9h-13h</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Cabinet CABINET DENTAIRE ESSOS-CHAPELLE. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Politique de confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
