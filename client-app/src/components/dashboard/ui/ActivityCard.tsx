"use client"
import React from "react";

interface Activity {
  type: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

interface ActivityCardProps {
  activities: Activity[];
}

export default function ActivityCard({ activities }: ActivityCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-card animate-fade-in">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Activité récente</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className={`w-10 h-10 ${activity.iconBg} rounded-full flex items-center justify-center mr-4`}>
              <i className={`${activity.icon} ${activity.iconColor}`}></i>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-white">{activity.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 