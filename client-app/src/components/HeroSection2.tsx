"use client";
import React, { useState, useEffect } from "react";
import { useIntersectionObserver } from "../utils/hooks";
import Counter from "./Counter";



const HeroSection2: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

    const slides = [
        {
            title: "Votre sourire, notre passion",
            subtitle:
                "Des soins dentaires personnalisés avec les dernières technologies",
            bgClass: "bg-gradient-to-r from-primary to-primary-dark",
            ctaPrimary: "Prendre rendez-vous",
            ctaSecondary: "Découvrir nos services",
        },
        {
            title: "Blanchiment dentaire professionnel",
            subtitle: "Obtenez un sourire éclatant en une seule séance",
            bgClass: "bg-gradient-to-r from-blue-500 to-indigo-700",
            ctaPrimary: "En savoir plus",
            ctaSecondary: "Voir les tarifs",
        },
        {
            title: "Urgences dentaires 24h/24",
            subtitle: "Prise en charge immédiate de vos douleurs dentaires",
            bgClass: "bg-gradient-to-r from-red-500 to-orange-600",
            ctaPrimary: "Appeler maintenant",
            ctaSecondary: "Nos services d'urgence",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section
            id="accueil"
            className="relative min-h-screen overflow-hidden"
        >
            {/* Slider */}
            <div className="absolute inset-0 overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div
                            className={`absolute inset-0 ${slide.bgClass} opacity-90`}
                        ></div>
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                ))}
            </div>

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left" ref={ref}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-1000 ${currentSlide === index
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10 absolute"
                                    }`}
                            >
                                <div
                                    className={`inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""
                                        }`}
                                >
                                    <i className="fas fa-star mr-2"></i>
                                    {"Cabinet d'Excellence"}
                                </div>

                                <h1
                                    className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 text-white ${hasIntersected ? "animate-slide-up" : ""
                                        }`}
                                >
                                    {slide.title}
                                </h1>
                                <p
                                    className={`text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 ${hasIntersected ? "animate-fade-in" : ""
                                        }`}
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    {slide.subtitle}
                                </p>

                                <div
                                    className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 ${hasIntersected ? "animate-fade-in" : ""
                                        }`}
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    <button className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:bg-gray-100 transition-all duration-300 group">
                                        {slide.ctaPrimary}
                                        <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                                    </button>
                                    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                                        {slide.ctaSecondary}
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div
                            className={`grid grid-cols-3 gap-6 ${hasIntersected ? "animate-fade-in" : ""
                                }`}
                            style={{ animationDelay: "0.9s" }}
                        >
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    <Counter end={3} suffix="+" startOnIntersect />
                                </div>
                                <div className="text-sm text-white/80">
                                    {"Années d'expérience"}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    <Counter end={30} suffix="+" startOnIntersect />
                                </div>
                                <div className="text-sm text-white/80">
                                    Patients satisfaits
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    4.9★
                                </div>
                                <div className="text-sm text-white/80">Avis Google</div>
                            </div>
                        </div>
                    </div>

                    {/* Image ou autre contenu */}
                    <div className="relative hidden lg:block">
                        <div className="floating-card bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <i className="fas fa-tooth text-primary text-3xl"></i>
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold mb-2 text-white">
                                    CABINET DENTAIRE ESSOS-CHAPELLE
                                </h3>
                                <p className="text-white/80 font-semibold mb-2">
                                    Chirurgien-Dentiste Expert
                                </p>
                                <p className="text-white/70 text-sm">
                                    Spécialiste en esthétique dentaire & implantologie
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-white/80">
                                    <i className="fas fa-check-circle text-white mr-3"></i>
                                    Université Paris VII
                                </div>
                                <div className="flex items-center text-sm text-white/80">
                                    <i className="fas fa-check-circle text-white mr-3"></i>
                                    Certificat Implantologie
                                </div>
                                <div className="flex items-center text-sm text-white/80">
                                    <i className="fas fa-check-circle text-white mr-3"></i>
                                    Formation continue
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contrôles du slider */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-6" : "bg-white/50"
                            }`}
                        aria-label={`Aller au slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-10">
                <div
                    className="flex flex-col items-center text-white/80 cursor-pointer"
                    onClick={() => {
                        const el = document.getElementById("services");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    <span className="text-sm mb-2">Découvrir</span>
                    <i className="fas fa-chevron-down text-xl"></i>
                </div>
            </div>
        </section>
    );
};

export default HeroSection2;
