"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "Consultation de routine",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "Consultation de routine",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Prénom *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Nom *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
              placeholder="01 23 45 67 89"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Type de soin souhaité
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
          >
            <option>Consultation de routine</option>
            <option>Soins généraux</option>
            <option>Esthétique dentaire</option>
            <option>Implantologie</option>
            <option>Pédodontie</option>
            <option>Urgence</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full text-base border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
            placeholder="Décrivez brièvement votre demande ou vos préoccupations..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-white py-4 rounded-xl font-semibold text-lg shadow-lg group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin mr-3"></i>
              Envoi en cours...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane mr-3 group-hover:translate-x-1 transition-transform"></i>
              Envoyer la demande
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Nous vous contacterons dans les plus brefs délais pour confirmer
          votre rendez-vous.
        </p>
      </form>

      <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)}>
        <div className="bg-white dark:bg-dark rounded-3xl shadow-2xl max-w-md w-full border border-gray-200 dark:border-gray-700 overflow-hidden animate-scale-in">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 text-white">
            <h3 className="text-xl font-bold flex items-center">
              <i className="fas fa-check-circle mr-3"></i>
              Demande envoyée !
            </h3>
          </div>
          <div className="px-6 py-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check text-white text-2xl"></i>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Merci pour votre demande ! Nous vous contacterons dans les
              plus brefs délais pour confirmer votre rendez-vous.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="btn-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              Parfait !
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
