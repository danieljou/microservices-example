"use client";
import React, { useState } from "react";

const navigationItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'fas fa-chart-pie' },
  { id: 'appointments', label: 'Rendez-vous', icon: 'fas fa-calendar-alt', badge: '23' },
  { id: 'patients', label: 'Patients', icon: 'fas fa-users' },
  { id: 'services', label: 'Services', icon: 'fas fa-tooth' },
  { id: 'finance', label: 'Finance', icon: 'fas fa-euro-sign', badge: '12' },
  { id: 'blog', label: 'Blog', icon: 'fas fa-newspaper' },
  { id: 'team', label: 'Équipe', icon: 'fas fa-user-md' },
  { id: 'settings', label: 'Paramètres', icon: 'fas fa-cogs' }
];

interface Props {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const DashboardNavigation: React.FC<Props> = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`fixed left-0 top-0 h-full bg-white dark:bg-dark-light border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <div className={`flex items-center space-x-3 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <i className="fas fa-tooth text-white text-lg"></i>
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-xs font-bold text-primary dark:text-white">CABINET DENTAIRE</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Excellence</p>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Réduire le menu"
          >
            <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'} text-gray-600 dark:text-gray-400 text-sm`}></i>
          </button>
        </div>

        <div className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl font-medium transition-all duration-200 relative ${activeSection === item.id ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <i className={`${item.icon} text-lg`}></i>
              {!isCollapsed && <span>{item.label}</span>}
              {!isCollapsed && item.badge && (
                <span className="ml-auto bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
              )}
              {isCollapsed && item.badge && (
                <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>
              )}
            </button>
          ))}
        </div>

        <div className={`mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 ${isCollapsed ? 'text-center' : ''}`}>
          <div className={`flex items-center space-x-3 px-3 py-2 ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
              DJ
            </div>
            {!isCollapsed && (
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">Dr. Jou</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Admin</div>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className="mt-4 space-y-2">
              <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
                <i className="fas fa-sign-out-alt"></i>
                <span>Déconnexion</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavigation;
