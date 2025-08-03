'use client';

import React from 'react';

interface ARProductViewerProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number | null;
}

export default function ARProductViewer({ isOpen, onClose, productId }: ARProductViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm">
      <div className="absolute inset-4 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden">
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <h3 className="text-white text-2xl font-bold">Vue AR</h3>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 animate-float">
              <i className="fas fa-cube text-6xl"></i>
            </div>
            <h4 className="text-2xl font-bold mb-2">Expérience AR Simulée</h4>
            <p className="text-neutral-300 max-w-md mx-auto">
              Découvrez le produit dans votre espace avec notre technologie de
              réalité augmentée avancée.
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all">
              <i className="fas fa-rotate-3d mr-2"></i>
              Rotation
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all">
              <i className="fas fa-expand-arrows-alt mr-2"></i>
              Taille
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all">
              <i className="fas fa-camera mr-2"></i>
              Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 