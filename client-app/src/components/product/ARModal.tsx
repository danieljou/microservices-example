"use client";
import React from "react";

const ARModal = ({ product, open, onClose }: { product: any; open: boolean; onClose: () => void }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fadeIn">
                <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-primary-500 text-xl">&times;</button>
                <h3 className="text-lg font-bold mb-2 text-primary-700 dark:text-primary-300">Aperçu 3D / AR</h3>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-300 rounded-xl flex items-center justify-center mb-4">
                    {/* Ici, intégrer le viewer 3D/AR réel si disponible */}
                    <span className="text-4xl text-primary-600">🦷</span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-200 mb-2">Visualisez le produit <span className="font-semibold">{product?.name}</span> en réalité augmentée ou 3D.</p>
                <button className="mt-2 px-4 py-2 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-600 transition">Lancer l'expérience AR</button>
            </div>
        </div>
    );
};

export default ARModal;
