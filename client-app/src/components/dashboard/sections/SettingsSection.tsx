"use client"
import React from "react";
import { Toast } from "../DashboardLayout";

interface SettingsSectionProps {
  showToast: (message: string, type: Toast["type"]) => void;
}

export default function SettingsSection({ showToast }: SettingsSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Paramètres</h3>
      <div className="glass-card rounded-2xl p-6 shadow-card">
        <p className="text-gray-600 dark:text-gray-400">Interface de paramètres en développement...</p>
      </div>
    </div>
  );
} 