/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";

const initialServices = [
  {
    id: 1,
    name: "Consultation",
    category: "Soins généraux",
    price: 25,
    duration: 30,
    description: "Examen bucco-dentaire complet",
    active: true
  },
  {
    id: 2,
    name: "Détartrage",
    category: "Soins généraux",
    price: 70,
    duration: 45,
    description: "Nettoyage professionnel",
    active: true
  },
  {
    id: 3,
    name: "Blanchiment",
    category: "Esthétique",
    price: 400,
    duration: 90,
    description: "Blanchiment dentaire professionnel",
    active: true
  },
  {
    id: 4,
    name: "Implant unitaire",
    category: "Implantologie",
    price: 1200,
    duration: 120,
    description: "Pose d'implant avec guidage 3D",
    active: true
  }
];

const ServicesManagement: React.FC = () => {
  const [services, setServices] = useState(initialServices);
  const [showServiceModal, setShowServiceModal] = useState(false);

  // ...existing code for modal and service cards...
  return (
    <div className="space-y-6">
      {/* ...existing code for header, grid, and modal... */}
    </div>
  );
};

export default ServicesManagement;
