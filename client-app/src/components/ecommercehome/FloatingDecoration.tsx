"use client";
import React from 'react';

const FloatingDecoration = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-900 rounded-full opacity-20 blur-xl"></div>
            <div className="floating-element absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-300 dark:from-purple-800 dark:to-pink-900 rounded-full opacity-15 blur-2xl"></div>
            <div className="floating-element absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-300 dark:from-blue-800 dark:to-cyan-900 rounded-full opacity-25 blur-xl"></div>
            <div className="floating-element absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-300 dark:from-yellow-800 dark:to-orange-900 rounded-full opacity-30 blur-lg"></div>
        </div>
    );
};

export default FloatingDecoration;