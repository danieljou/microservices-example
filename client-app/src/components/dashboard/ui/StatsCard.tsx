"use client"
import React from "react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
  iconBg: string;
  animationDelay?: number;
}

export default function StatsCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  iconBg, 
  animationDelay = 0 
}: StatsCardProps) {
  return (
    <div 
      className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in" 
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-r ${iconBg} rounded-xl flex items-center justify-center shadow-glow`}>
          <i className={`${icon} text-white text-lg`}></i>
        </div>
        <span className={`text-sm font-semibold ${changeType === "positive" ? "text-green-500" : "text-red-500"}`}>
          {change}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
    </div>
  );
} 