"use client"
import React from "react";

interface HeaderProps {
  pageInfo: { title: string; subtitle: string };
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export default function Header({ pageInfo, toggleSidebar, sidebarOpen }: HeaderProps) {
  return (
    <header className="glass-card border-b border-gray-200 dark:border-gray-700 p-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{pageInfo.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{pageInfo.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 pl-10 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          {/* Notifications */}
          <button className="relative p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <i className="fas fa-bell text-gray-600 dark:text-gray-400"></i>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce-gentle">3</span>
          </button>
          {/* Profile */}
          <button className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white text-sm"></i>
            </div>
            <span className="hidden md:block font-medium text-gray-700 dark:text-gray-300">Admin</span>
            <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
          </button>
        </div>
      </div>
    </header>
  );
} 