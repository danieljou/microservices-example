'use client';

import React from 'react';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceSearchModal({ isOpen, onClose }: VoiceSearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 shadow-float-lg max-w-md w-full mx-4 text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center relative">
            <i className="fas fa-microphone text-white text-4xl"></i>
            <div className="absolute inset-0 rounded-full border-4 border-primary-300 animate-ping"></div>
            <div className="absolute inset-4 rounded-full border-2 border-primary-400 animate-pulse"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Recherche vocale
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
          Dites ce que vous cherchez...
        </p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all"
        >
          <i className="fas fa-stop mr-2"></i>
          Arrêter
        </button>
      </div>
    </div>
  );
}
