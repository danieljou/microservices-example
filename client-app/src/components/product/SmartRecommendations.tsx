'use client';

import React, { useState, useEffect } from 'react';

export default function SmartRecommendations() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show recommendations after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary-500 to-purple-600 text-white p-4 transform transition-transform duration-500 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <i className="fas fa-brain text-xl"></i>
            <span className="font-semibold">IA Recommande:</span>
          </div>
          <div className="font-medium">
            Basé sur votre navigation, vous pourriez aimer...
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all">
            Voir
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
} 