/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { useIntersectionObserver } from "../utils/hooks";

const services = [
  {
    id: "1",
    title: "Soins Généraux",
    description:
      "Consultations, détartrage, traitement des caries et soins préventifs pour maintenir votre santé bucco-dentaire optimale.",
    icon: "fas fa-teeth",
    color: "from-primary to-primary-light",
    features: [
      "Examens complets",
      "Détartrage professionnel",
      "Soins conservateurs",
    ],
    buttonText: "En savoir plus",
    buttonAction: "info",
  },
  {
    id: "2",
    title: "Esthétique Dentaire",
    description:
      "Transformez votre sourire avec nos solutions esthétiques avancées : blanchiment, facettes et restaurations.",
    icon: "fas fa-smile",
    color: "from-accent to-blue-500",
    features: [
      "Blanchiment professionnel",
      "Facettes céramique",
      "Couronnes esthétiques",
    ],
    buttonText: "Consultation gratuite",
    buttonAction: "consultation",
  },
  {
    id: "3",
    title: "Implantologie",
    description:
      "Solutions durables pour remplacer vos dents manquantes avec des implants de haute qualité et guidage 3D.",
    icon: "fas fa-cog",
    color: "from-purple-600 to-pink-600",
    features: [
      "Implants unitaires",
      "Bridges sur implants",
      "Guidage chirurgical 3D",
    ],
    buttonText: "Planifier intervention",
    buttonAction: "planning",
  },
  {
    id: "4",
    title: "Dentisterie Pédiatrique",
    description:
      "Soins dentaires spécialisés pour enfants dans un environnement bienveillant et adapté à leur bien-être.",
    icon: "fas fa-child",
    color: "from-green-500 to-emerald-600",
    features: [
      "Prévention ludique",
      "Soins sous sédation",
      "Éducation bucco-dentaire",
    ],
    buttonText: "Première visite",
    buttonAction: "pediatric",
  },
  {
    id: "5",
    title: "Urgences Dentaires",
    description:
      "Service d'urgence 24h/24 pour soulager rapidement vos douleurs et traiter les traumatismes dentaires.",
    icon: "fas fa-ambulance",
    color: "from-red-500 to-orange-600",
    features: [
      "Disponible 24h/24",
      "Soulagement immédiat",
      "Traumatismes dentaires",
    ],
    buttonText: "Appeler urgences",
    buttonAction: "emergency",
  },
  {
    id: "6",
    title: "Technologies Avancées",
    description:
      "Équipements de dernière génération pour des diagnostics ultra-précis et des traitements minimalement invasifs.",
    icon: "fas fa-microscope",
    color: "from-indigo-600 to-purple-700",
    features: [
      "Scanner 3D intra-oral",
      "Laser thérapeutique",
      "CFAO chairside",
    ],
    buttonText: "Découvrir technologies",
    buttonAction: "tech",
  },
];

const getButtonColor = (action: string) => {
  switch (action) {
    case "consultation":
      return "bg-blue-50 dark:bg-blue-900/30 text-accent dark:text-blue-100 hover:bg-accent hover:text-white";
    case "planning":
      return "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-100 hover:bg-purple-600 hover:text-white";
    case "pediatric":
      return "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-100 hover:bg-green-600 hover:text-white";
    case "emergency":
      return "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-100 hover:bg-red-600 hover:text-white";
    case "tech":
      return "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-100 hover:bg-indigo-600 hover:text-white";
    default:
      return "bg-medical-50 dark:bg-medical-900/30 text-primary dark:text-medical-100 hover:bg-primary hover:text-white";
  }
};

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const animationDelay = `${index * 0.1}s`;
  return (
    <div
      ref={ref as any}
      className={`service-card card-hover bg-white dark:bg-dark-light rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 group ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
        <i className={`${service.icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <i className="fas fa-check-circle text-primary mr-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${getButtonColor(service.buttonAction)}`}>
        {service.buttonText}
      </button>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref as any}>
          <div className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-stethoscope mr-2"></i>
            Nos Services
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}>
            Soins <span className="gradient-text">Personnalisés</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${hasIntersected ? "animate-fade-in" : ""}`}>
            {"Découvrez l'ensemble de nos prestations pour toute la famille, réalisées avec expertise et bienveillance."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
