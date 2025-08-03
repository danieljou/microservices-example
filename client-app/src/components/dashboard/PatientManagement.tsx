/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";


const initialPatients = [
  {
    id: 1,
    name: "Sophie Martin",
    email: "sophie.martin@email.com",
    phone: "01 23 45 67 89",
    birthDate: "1985-03-15",
    lastVisit: "2024-03-10",
    nextVisit: "2024-03-25",
    balance: 0,
    notes: "Patiente régulière, prothèse en cours"
  },
  {
    id: 2,
    name: "Pierre Lambert",
    email: "pierre.lambert@email.com",
    phone: "01 34 56 78 90",
    birthDate: "1978-07-22",
    lastVisit: "2024-03-08",
    nextVisit: "2024-04-15",
    balance: 450,
    notes: "Implant posé, suivi nécessaire"
  },
  {
    id: 3,
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    phone: "01 45 67 89 01",
    birthDate: "1992-11-03",
    lastVisit: "2024-03-12",
    nextVisit: null,
    balance: -120,
    notes: "Blanchiment effectué"
  }
];

const PatientManagement: React.FC = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPatientModal, setShowPatientModal] = useState(false);

  // ...existing code for filtering and modal...
  return (
    <div className="space-y-6">
      {/* ...existing code for header, table, and modal... */}
    </div>
  );
};

export default PatientManagement;
