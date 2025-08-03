"use client"
import React, { useEffect, useRef } from "react";
import { Toast } from "../DashboardLayout";
import StatsCard from "../ui/StatsCard";
import ChartCard from "../ui/ChartCard";
import ActivityCard from "../ui/ActivityCard";

interface DashboardHomeProps {
  showToast: (message: string, type: Toast["type"]) => void;
}

export default function DashboardHome({ showToast }: DashboardHomeProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      initializeChart();
    }
  }, []);

  const initializeChart = () => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Simple chart drawing
    const chartData = [65, 59, 80, 81, 56, 55, 40, 65, 75, 85, 90, 95];
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Draw simple line chart
    const padding = 40;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + chartWidth, y);
      ctx.stroke();
    }
    
    // Draw data line
    ctx.strokeStyle = '#5D5CDE';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    chartData.forEach((value, index) => {
      const x = padding + (chartWidth / (chartData.length - 1)) * index;
      const y = padding + chartHeight - (value / 100) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw data points
    ctx.fillStyle = '#5D5CDE';
    chartData.forEach((value, index) => {
      const x = padding + (chartWidth / (chartData.length - 1)) * index;
      const y = padding + chartHeight - (value / 100) * chartHeight;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const statsData = [
    {
      title: "Revenus totaux",
      value: "24,847€",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: "fas fa-euro-sign",
      iconBg: "from-green-500 to-emerald-600"
    },
    {
      title: "Commandes totales",
      value: "1,247",
      change: "+8.3%",
      changeType: "positive" as const,
      icon: "fas fa-shopping-cart",
      iconBg: "from-blue-500 to-cyan-600"
    },
    {
      title: "Produits actifs",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      icon: "fas fa-box",
      iconBg: "from-purple-500 to-pink-600"
    },
    {
      title: "Clients actifs",
      value: "2,847",
      change: "+24.1%",
      changeType: "positive" as const,
      icon: "fas fa-users",
      iconBg: "from-orange-500 to-red-600"
    }
  ];

  const categoryData = [
    { name: "Électronique", percentage: 45, color: "bg-blue-500" },
    { name: "Sport", percentage: 25, color: "bg-green-500" },
    { name: "Vêtements", percentage: 20, color: "bg-purple-500" },
    { name: "Maison", percentage: 10, color: "bg-orange-500" }
  ];

  const recentActivity = [
    {
      type: "order",
      title: "Nouvelle commande #1247",
      description: "iPhone 15 Pro Max - 1,299€",
      time: "Il y a 5 min",
      icon: "fas fa-shopping-cart",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      type: "customer",
      title: "Nouveau client inscrit",
      description: "marie.dubois@email.com",
      time: "Il y a 12 min",
      icon: "fas fa-user-plus",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      type: "stock",
      title: "Stock faible",
      description: "Lampe Design Scandinave - 2 restants",
      time: "Il y a 1h",
      icon: "fas fa-box",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
            iconBg={stat.iconBg}
            animationDelay={index * 0.1}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Chart */}
        <ChartCard
          title="Ventes mensuelles"
          chartRef={chartRef as React.RefObject<HTMLCanvasElement>}
        />

        {/* Product Categories */}
        <div className="glass-card rounded-2xl p-6 shadow-card animate-fade-in">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Répartition par catégorie</h3>
          <div className="space-y-4">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-4 h-4 ${category.color} rounded-full mr-3`}></div>
                  <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{category.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <ActivityCard activities={recentActivity} />
    </div>
  );
} 