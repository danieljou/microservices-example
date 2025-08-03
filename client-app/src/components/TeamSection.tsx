/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useIntersectionObserver } from "../utils/hooks";

const teamMembers = [
  {
    id: "1",
    name: "CABINET DENTAIRE ESSOS-CHAPELLE",
    title: "Chirurgien-Dentiste",
    specialties: [
      "Implantologie",
      "Esthétique dentaire",
      "Chirurgie orale",
    ],
    description: "Expert en dentisterie moderne avec plus de 15 ans d'expérience.",
    avatar: "PM",
    experience: "15+ ans",
  },
  {
    id: "2",
    name: "Dr. Sophie Dubois",
    title: "Orthodontiste",
    specialties: [
      "Orthodontie",
      "Dentisterie pédiatrique",
      "Aligneurs invisibles",
    ],
    description: "Spécialiste en orthodontie moderne et traitement des enfants.",
    avatar: "SD",
    experience: "10+ ans",
  },
  {
    id: "3",
    name: "Marie Lefevre",
    title: "Hygiéniste Dentaire",
    specialties: [
      "Prophylaxie",
      "Prévention",
      "Éducation bucco-dentaire",
    ],
    description: "Experte en soins préventifs et hygiène bucco-dentaire.",
    avatar: "ML",
    experience: "8+ ans",
  },
];

const TeamCard: React.FC<{ member: typeof teamMembers[0]; index: number }> = ({ member, index }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [isFlipped, setIsFlipped] = useState(false);
  const animationDelay = `${index * 0.2}s`;
  return (
    <div
      ref={ref as any}
      className={`team-card h-80 ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`team-card-inner relative w-full h-full ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* Front */}
        <div className="team-card-front absolute inset-0 bg-white dark:bg-dark rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
            {member.avatar}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">{member.name}</h3>
          <p className="text-primary font-semibold mb-4 text-center">{member.title}</p>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg px-4 py-2">
            {member.experience}
          </div>
        </div>
        {/* Back */}
        <div className="team-card-back absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl p-8 shadow-lg text-white flex flex-col justify-center">
          <h4 className="text-lg font-bold mb-4">Spécialités</h4>
          <ul className="space-y-2 mb-6">
            {member.specialties.map((spec, idx) => (
              <li key={idx} className="flex items-center text-sm">
                <i className="fas fa-check-circle mr-2"></i>
                {spec}
              </li>
            ))}
          </ul>
          <p className="text-sm opacity-90 leading-relaxed">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <section id="equipe" className="py-20 bg-gray-50 dark:bg-dark-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref as any}>
          <div className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-users mr-2"></i>
            Notre Équipe
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}>
            Des <span className="gradient-text">Experts Passionnés</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${hasIntersected ? "animate-fade-in" : ""}`}>
            Découvrez notre équipe pluridisciplinaire dédiée à votre bien-être bucco-dentaire.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
