
"use client";
import React, { useState, useEffect } from "react";

type Toast = {
  id: number;
  message: string;
  type: "success" | "error" | "warning" | "info";
};

const icons: Record<string, string> = {
  success: "fas fa-check-circle text-green-500",
  error: "fas fa-exclamation-circle text-red-500",
  warning: "fas fa-exclamation-triangle text-yellow-500",
  info: "fas fa-info-circle text-blue-500",
};

const colors: Record<string, string> = {
  success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
  error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
  warning: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
  info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
};

const ToastNotifications: React.FC = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  // Demo: add a toast on mount
  useEffect(() => {
    showToast("Bienvenue sur LUXE Store !", "success");
  }, []);

  function showToast(message: string, type: Toast["type"] = "info") {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  }

  function removeToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div id="toastContainer" className="fixed top-20 right-6 z-50 space-y-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast show glass-card rounded-2xl p-4 shadow-card border flex items-center space-x-3 min-w-72 pointer-events-auto ${colors[toast.type]}`}
        >
          <i className={icons[toast.type]} />
          <span className="font-medium text-gray-800 dark:text-gray-200">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Fermer la notification"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastNotifications;