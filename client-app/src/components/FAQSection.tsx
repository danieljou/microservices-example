/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const faqItems = [
  {
    id: "1",
    question: "À quelle fréquence dois-je consulter le dentiste ?",
    answer:
      "Il est recommandé de consulter votre dentiste tous les 6 mois pour un contrôle et un nettoyage professionnel. Cette fréquence permet de détecter et traiter précocement tout problème dentaire.",
  },
  {
    id: "2",
    question: "Les soins dentaires sont-ils douloureux ?",
    answer:
      "Grâce aux techniques modernes d'anesthésie locale et aux technologies avancées, les soins dentaires sont pratiquement indolores. Nous utilisons également la sédation consciente pour les patients anxieux.",
  },
  {
    id: "3",
    question: "Combien de temps dure un implant dentaire ?",
    answer:
      "Avec des soins appropriés et une bonne hygiène bucco-dentaire, un implant dentaire peut durer toute la vie. Le taux de succès des implants est supérieur à 95% sur 20 ans.",
  },
  {
    id: "4",
    question: "Le blanchiment dentaire abîme-t-il les dents ?",
    answer:
      "Le blanchiment dentaire professionnel, réalisé par un dentiste, est parfaitement sûr et n'abîme pas l'émail dentaire. Nous utilisons des concentrations contrôlées et des protocoles éprouvés.",
  },
  {
    id: "5",
    question: "Acceptez-vous les mutuelles ?",
    answer:
      "Oui, nous sommes conventionnés Sécurité Sociale et acceptons la plupart des mutuelles. Nous proposons également le tiers payant pour faciliter vos démarches administratives.",
  },
  {
    id: "6",
    question: "Que faire en cas d'urgence dentaire ?",
    answer:
      "Notre service d'urgence est disponible 24h/24. En cas de douleur sévère ou de traumatisme, contactez notre numéro d'urgence au 06 12 34 56 78 pour une prise en charge immédiate.",
  },
];

const FAQItem = ({ item, index, isOpen, onToggle }: { item: any; index: number; isOpen: boolean; onToggle: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const animationDelay = `${index * 0.1}s`;
  return (
    <div
      ref={ref}
      className={`faq-item bg-white dark:bg-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 ${isOpen ? "active" : ""} ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-2xl"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{item.question}</h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <i className="fas fa-chevron-down text-primary"></i>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
        <div className="px-6">
          <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-dark-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <div className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-question-circle mr-2"></i>
            Questions Fréquentes
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}>
            FAQ <span className="gradient-text">Détaillée</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${hasIntersected ? "animate-fade-in" : ""}`}>
            Retrouvez les réponses aux questions les plus fréquemment posées par nos patients.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openItems.has(item.id)}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
