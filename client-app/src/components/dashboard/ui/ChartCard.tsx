"use client"
import React from "react";

interface ChartCardProps {
  title: string;
  chartRef: React.RefObject<HTMLCanvasElement>;
}

export default function ChartCard({ title, chartRef }: ChartCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-card animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
        <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <div className="chart-container">
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
} 