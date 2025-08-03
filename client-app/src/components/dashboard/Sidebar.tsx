"use client"
import React from "react";
import { DashboardSection } from "./DashboardLayout";

interface SidebarProps {
  currentSection: DashboardSection;
  setCurrentSection: (section: DashboardSection) => void;
  sidebarOpen: boolean;
}

export default function Sidebar({ currentSection, setCurrentSection, sidebarOpen }: SidebarProps) {
  const navItems = [
    { id: "dashboard" as DashboardSection, label: "Tableau de bord", icon: "fas fa-chart-pie", badge: null },
    { id: "products" as DashboardSection, label: "Produits", icon: "fas fa-box", badge: "8" },
    { id: "orders" as DashboardSection, label: "Commandes", icon: "fas fa-shopping-cart", badge: "12" },
    { id: "customers" as DashboardSection, label: "Clients", icon: "fas fa-users", badge: null },
    { id: "analytics" as DashboardSection, label: "Analytics", icon: "fas fa-chart-line", badge: null },
    { id: "settings" as DashboardSection, label: "Paramètres", icon: "fas fa-cog", badge: null }
  ];

  return (
    <aside className={`w-72 glass-card border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-40 animate-slide-in-left ${!sidebarOpen ? '-translate-x-full' : ''}`}>
      <div className="p-8">
        {/* Logo */}
        <div className="flex items-center mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-glow mr-4">
            <i className="fas fa-gem text-white text-xl animate-float"></i>
          </div>
          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">LUXE Admin</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              className={`nav-item flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-all duration-300 group ${
                currentSection === item.id 
                  ? "active bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" 
                  : ""
              }`}
            >
              <i className={`${item.icon} mr-4 text-lg group-hover:scale-110 transition-transform`}></i>
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs px-2 py-1 rounded-full font-semibold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Admin Profile */}
        <div className="mt-12 p-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl text-white shadow-glow">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <i className="fas fa-user-shield text-lg"></i>
            </div>
            <div>
              <p className="font-semibold">Admin LUXE</p>
              <p className="text-xs opacity-80">Administrateur</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 