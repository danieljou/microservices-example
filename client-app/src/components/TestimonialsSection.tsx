/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "../utils/hooks";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Patient Implantologie",
    avatar: "SM",
    rating: 5,
    content:
      "Le Dr. JOU a transformé mon sourire avec des implants d'une qualité exceptionnelle. Tout le processus s'est déroulé sans douleur grâce aux technologies utilisées. Je recommande vivement ce cabinet !",
    date: "15 Mars 2024",
  },
  {
    id: 2,
    name: "Pierre Lambert",
    role: "Patient Orthodontie",
    avatar: "PL",
    rating: 5,
    content:
      "Des résultats au-delà de mes attentes. L'équipe est extrêmement professionnelle et à l'écoute. L'environnement high-tech rend l'expérience très rassurante.",
    date: "10 Février 2024",
  },
  {
    id: 3,
    name: "Émilie Rousseau",
    role: "Patient Esthétique",
    avatar: "ER",
    rating: 5,
    content:
      "Mon blanchiment dentaire a donné des résultats naturels et durables. Le suivi personnalisé et les conseils d'entretien ont fait toute la différence.",
    date: "5 Janvier 2024",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, , hasIntersected] = useIntersectionObserver();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="temoignages" className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.8) 0%, rgba(255,255,255,0.6) 100%)" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref as any}>
          <div className={`inline-flex items-center glass-morphism px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-quote-left mr-2 text-primary"></i>
            Témoignages
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${hasIntersected ? "animate-slide-up" : ""}`}>
            Ils nous <span className="gradient-text">font confiance</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${hasIntersected ? "animate-fade-in" : ""}`}>
            {"Découvrez les retours d'expérience de nos patients satisfaits par nos soins dentaires."}
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white dark:bg-dark-light rounded-3xl shadow-xl p-10 relative z-10" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {testimonials[activeIndex].avatar}
              </div>
              <div className="flex items-center mb-2">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">&quot;{testimonials[activeIndex].content}&quot;</p>
              <div className="font-semibold text-primary dark:text-accent mb-1">{testimonials[activeIndex].name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{testimonials[activeIndex].role}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{testimonials[activeIndex].date}</div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${activeIndex === idx ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Témoignage ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
