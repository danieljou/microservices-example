"use client";
import React, { useState } from "react";

const financialStats = [
  {
    title: "Revenus du mois",
    value: "42,850€",
    change: "+8.2%",
    positive: true,
    icon: "fas fa-chart-line",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Factures impayées",
    value: "3,420€",
    change: "12 factures",
    positive: false,
    icon: "fas fa-exclamation-triangle",
    color: "from-red-500 to-red-600"
  },
  {
    title: "Moyenne par patient",
    value: "156€",
    change: "+5.1%",
    positive: true,
    icon: "fas fa-user-check",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Taux de recouvrement",
    value: "94.2%",
    change: "+2.1%",
    positive: true,
    icon: "fas fa-percentage",
    color: "from-purple-500 to-purple-600"
  }
];

const invoices = [
  {
    id: 1,
    patient: "Jean Dupont",
    date: "2024-06-10",
    amount: "120€",
    status: "Payée"
  },
  {
    id: 2,
    patient: "Marie Martin",
    date: "2024-06-12",
    amount: "250€",
    status: "Impayée"
  },
  {
    id: 3,
    patient: "Paul Bernard",
    date: "2024-06-15",
    amount: "80€",
    status: "Payée"
  },
  {
    id: 4,
    patient: "Sophie Durand",
    date: "2024-06-18",
    amount: "300€",
    status: "Impayée"
  }
];

const FinancialManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gestion financière</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'overview' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
          >
            {"Vue d'ensemble"}
          </button>
          <button
            onClick={() => setActiveTab('invoices')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'invoices' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
          >
            Factures
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financialStats.map((stat) => (
            <div key={stat.title} className={`bg-white dark:bg-dark-light rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-transform transform hover:scale-[1.02]`}>
              <div className={`flex items-center space-x-4 mb-4`}>
                <i className={`${stat.icon} text-xl text-${stat.color.split(' ')[0].replace('from-', '')}`}></i>
                <h3 className="text-lg font-semibold">{stat.title}</h3>
              </div>
              <p className="text-xl font-bold">{stat.value}</p>
              <p className={`text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'} mt-1`}>{stat.change}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'invoices' && (
        <div className="bg-white dark:bg-dark-light rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gestion des factures</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Patient</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Montant</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Statut</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-4 py-2">{invoice.patient}</td>
                    <td className="px-4 py-2">{invoice.date}</td>
                    <td className="px-4 py-2">{invoice.amount}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${invoice.status === "Payée" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialManagement;