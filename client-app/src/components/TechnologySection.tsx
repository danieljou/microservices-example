/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const technologies = [
  {
    id: "1",
    name: "Scanner 3D Intra-oral",
    description: "Empreintes numériques ultra-précises sans pâte",
    icon: "fas fa-cube",
    benefits: [
      "Confort patient",
      "Précision maximale",
      "Résultats immédiats",
    ],
  },
  {
    id: "2",
    name: "Laser Thérapeutique",
    description: "Traitements sans douleur et cicatrisation accélérée",
    icon: "fas fa-atom",
    benefits: ["Sans douleur", "Guérison rapide", "Traitements précis"],
  },
  {
    id: "3",
    name: "CFAO Chairside",
    description: "Création de couronnes et inlays en une seule séance",
    icon: "fas fa-microchip",
    benefits: [
      "Traitement immédiat",
      "Qualité optimale",
      "Gain de temps",
    ],
  },
  {
    id: "4",
    name: "Guidage Chirurgical 3D",
    description: "Planification implantaire assistée par ordinateur",
    icon: "fas fa-crosshairs",
    benefits: [
      "Chirurgie guidée",
      "Sécurité maximale",
      "Résultats prévisibles",
    ],
  },
  {
    id: "5",
    name: "Caméra Intra-orale",
    description: "Visualisation en temps réel pour un diagnostic précis",
    icon: "fas fa-camera",
    benefits: ["Diagnostic précis", "Patient informé", "Suivi optimal"],
  },
  {
    id: "6",
    name: "Sédation Consciente",
    description: "Détente complète pour les patients anxieux",
    icon: "fas fa-leaf",
    benefits: [
      "Relaxation totale",
      "Soins confortables",
      "Stress éliminé",
    ],
  },
];

const TechnologyCard = ({ technology, index }: { technology: any; index: number }) => {
  const [ref, _isIntersecting, hasIntersected] = useIntersectionObserver();
  const animationDelay = `${index * 0.1}s`;
  return (
    <div
      ref={ref}
      className={`card-hover bg-white dark:bg-dark-light rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 tech-icon">
        <i className={`${technology.icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {technology.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {technology.description}
      </p>
      <ul className="space-y-2">
        {technology.benefits.map((benefit: string, idx: number) => (
          <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <i className="fas fa-check-circle text-primary mr-2"></i>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechnologySection: React.FC = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <div className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-microscope mr-2"></i>
            Technologies Avancées
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}>
            Équipement <span className="gradient-text">de Pointe</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${hasIntersected ? "animate-fade-in" : ""}`}>
            Découvrez nos technologies de dernière génération pour des soins précis, confortables et innovants.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.id} technology={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
