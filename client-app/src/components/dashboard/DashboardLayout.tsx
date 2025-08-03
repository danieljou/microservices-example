"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardHome from "./sections/DashboardHome";

import AnalyticsSection from "./sections/AnalyticsSection";
import SettingsSection from "./sections/SettingsSection";
import ToastContainer from "./ToastContainer";
import ProductsSection from "./sections/ProductsSection";
import OrdersSection from "./sections/OrdersSection";
import CustomersSection from "./sections/CustomersSection";

import "../../styles/dashboard.css";
export type DashboardSection = "dashboard" | "products" | "orders" | "customers" | "analytics" | "settings";

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export default function DashboardLayout() {
  const [currentSection, setCurrentSection] = useState<DashboardSection>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Dark mode detection
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
    const listener = (event: MediaQueryListEvent) => {
      if (event.matches) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
  }, []);

  const showToast = (message: string, type: Toast["type"] = "info") => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "dashboard":
        return <DashboardHome showToast={showToast} />;
      case "products":
        return <ProductsSection showToast={showToast} />;
      case "orders":
        return <OrdersSection showToast={showToast} />;
      case "customers":
        return <CustomersSection showToast={showToast} />;
      case "analytics":
        return <AnalyticsSection showToast={showToast} />;
      case "settings":
        return <SettingsSection showToast={showToast} />;
      default:
        return <DashboardHome showToast={showToast} />;
    }
  };

  const getPageInfo = () => {
    const pageInfo = {
      dashboard: { title: "Tableau de bord", subtitle: "Aperçu de votre boutique" },
      products: { title: "Gestion des produits", subtitle: "Gérez votre inventaire et catalogue" },
      orders: { title: "Gestion des commandes", subtitle: "Suivez et gérez les commandes" },
      customers: { title: "Gestion des clients", subtitle: "Base de données clients" },
      analytics: { title: "Analytics avancées", subtitle: "Rapports et statistiques détaillées" },
      settings: { title: "Paramètres", subtitle: "Configuration de la boutique" }
    };
    return pageInfo[currentSection];
  };

  return (
    <div className="font-sans antialiased bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Animated Background */}
      <div className="parallax-bg"></div>
      
      {/* Floating Decoration Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-element absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-900 rounded-full opacity-20 blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-300 dark:from-purple-800 dark:to-pink-900 rounded-full opacity-15 blur-2xl"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-200 to-cyan-300 dark:from-blue-800 dark:to-cyan-900 rounded-full opacity-25 blur-xl"></div>
      </div>

      {/* Toast Container */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar 
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <Header 
            pageInfo={getPageInfo()}
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />

          {/* Content Area */}
          <div className="p-6">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
} 