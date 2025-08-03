"use client"
import React from "react";
import { Toast } from "./DashboardLayout";

interface ToastContainerProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export default function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  const getToastStyles = (type: Toast["type"]) => {
    const icons = {
      success: "fas fa-check-circle text-green-500",
      error: "fas fa-exclamation-circle text-red-500",
      warning: "fas fa-exclamation-triangle text-yellow-500",
      info: "fas fa-info-circle text-blue-500"
    };
    
    const colors = {
      success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
      error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
      warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
      info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
    };
    
    return { icon: icons[type], color: colors[type] };
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => {
        const styles = getToastStyles(toast.type);
        return (
          <div 
            key={toast.id}
            className={`toast glass-card rounded-xl p-4 shadow-card border-2 ${styles.color} flex items-center space-x-3 min-w-80 animate-scale-in`}
          >
            <i className={`${styles.icon} text-lg`}></i>
            <span className="font-medium text-gray-800 dark:text-gray-200">{toast.message}</span>
            <button 
              onClick={() => removeToast(toast.id)} 
              className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
} 