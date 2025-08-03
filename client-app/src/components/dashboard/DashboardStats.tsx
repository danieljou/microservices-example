/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useEffect, useState } from "react";

const stats = [
  {
    title: "Patients ce mois",
    value: "387",
    change: "+12%",
    positive: true,
    icon: "fas fa-users",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "RDV aujourd'hui",
    value: "23",
    change: "8 en attente",
    positive: true,
    icon: "fas fa-calendar-check",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Revenus ce mois",
    value: "42,850€",
    change: "+8.2%",
    positive: true,
    icon: "fas fa-euro-sign",
    color: "from-primary to-primary-light"
  },
  {
    title: "Urgences",
    value: "3",
    change: "En cours",
    positive: false,
    icon: "fas fa-exclamation-triangle",
    color: "from-red-500 to-red-600"
  }
];

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...options,
      }
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [hasIntersected, options]);
  return [targetRef, isIntersecting, hasIntersected];
}

const DashboardStats: React.FC = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" ref={ref as any}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-dark-light rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 card-hover ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
              <i className={`${stat.icon} text-white text-lg`}></i>
            </div>
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'}`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
