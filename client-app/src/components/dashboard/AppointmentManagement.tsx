"use client";
import React, { useState } from "react";
import Modal from "../Modal";

const initialAppointments = [
  {
    id: 1,
    patient: "Sophie Martin",
    time: "09:00",
    duration: "30min",
    service: "Consultation",
    status: "confirmed",
    phone: "01 23 45 67 89",
    notes: "Première visite"
  },
  {
    id: 2,
    patient: "Pierre Lambert",
    time: "10:30",
    duration: "60min",
    service: "Implant",
    status: "pending",
    phone: "01 34 56 78 90",
    notes: "Suivi post-opératoire"
  },
  {
    id: 3,
    patient: "Marie Dubois",
    time: "14:00",
    duration: "45min",
    service: "Blanchiment",
    status: "confirmed",
    phone: "01 45 67 89 01",
    notes: "Séance de blanchiment"
  }
];

const AppointmentManagement: React.FC = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const updateAppointmentStatus = (id: number, newStatus: string) => {
    setAppointments(prev => prev.map(apt =>
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Rendez-vous</h2>
          <p className="text-gray-600 dark:text-gray-400">Gestion du planning quotidien</p>
        </div>
        <div className="flex gap-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent text-base"
          />
          <button
            onClick={() => setShowAppointmentModal(true)}
            className="btn-primary text-white px-6 py-2 rounded-xl font-semibold shadow-lg"
          >
            <i className="fas fa-plus mr-2"></i>
            Nouveau RDV
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-light rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Heure</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Patient</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Durée</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Statut</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">{appointment.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900 dark:text-white">{appointment.patient}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 dark:text-white">{appointment.service}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.notes}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 dark:text-white">{appointment.duration}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status === 'confirmed' && 'Confirmé'}
                      {appointment.status === 'pending' && 'En attente'}
                      {appointment.status === 'completed' && 'Terminé'}
                      {appointment.status === 'cancelled' && 'Annulé'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                        className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg flex items-center justify-center transition-colors"
                        title="Confirmer"
                      >
                        <i className="fas fa-check text-xs"></i>
                      </button>
                      <button
                        onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                        className="w-8 h-8 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg flex items-center justify-center transition-colors"
                        title="Marquer comme terminé"
                      >
                        <i className="fas fa-check-double text-xs"></i>
                      </button>
                      <button
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center transition-colors"
                        title="Modifier"
                      >
                        <i className="fas fa-edit text-xs"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={showAppointmentModal} onClose={() => setShowAppointmentModal(false)}>
        <div className="bg-white dark:bg-dark rounded-3xl shadow-2xl max-w-2xl w-full border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent px-6 py-4 text-white">
            <h3 className="text-xl font-bold flex items-center">
              <i className="fas fa-calendar-plus mr-3"></i>
              Nouveau Rendez-vous
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Patient</label>
                <input
                  type="text"
                  className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nom du patient"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Téléphone</label>
                <input
                  type="text"
                  className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Téléphone"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Heure</label>
                <input
                  type="time"
                  className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Durée</label>
                <input
                  type="text"
                  className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Durée (ex: 30min)"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Statut</label>
                <select className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="confirmed">Confirmé</option>
                  <option value="pending">En attente</option>
                  <option value="completed">Terminé</option>
                  <option value="cancelled">Annulé</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Service</label>
              <select className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>Consultation</option>
                <option>Implant</option>
                <option>Blanchiment</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Notes</label>
              <textarea
                placeholder="Notes particulières pour ce rendez-vous..."
                className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors"
                onClick={() => setShowAppointmentModal(false)}
              >
                Annuler
              </button>
              <button
                className="btn-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentManagement;
