'use client';

import React from 'react';

export default function ProgressSteps() {
  const steps = [
    { id: 1, name: 'Panier', status: 'active' },
    { id: 2, name: 'Livraison', status: 'pending' },
    { id: 3, name: 'Paiement', status: 'pending' },
  ];

  return (
    <div className="flex items-center justify-center space-x-8 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center">
            <div
              className={`step-indicator w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                step.status === 'active'
                  ? 'border-primary-500 active'
                  : step.status === 'completed'
                  ? 'border-green-500 completed'
                  : 'border-neutral-300 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {step.id}
            </div>
            <span
              className={`ml-3 font-semibold ${
                step.status === 'active'
                  ? 'text-primary-600 dark:text-primary-400'
                  : step.status === 'completed'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {step.name}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full">
              <div
                className={`w-full h-full rounded-full transition-all ${
                  step.status === 'completed'
                    ? 'bg-gradient-to-r from-green-500 to-green-600'
                    : step.status === 'active'
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600'
                    : 'bg-neutral-200 dark:bg-neutral-700'
                }`}
              ></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
} 