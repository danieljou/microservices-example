import React from "react";

interface ProductDialogProps {
  open: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category?: string;
    tags?: string[];
  } | null;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ open, onClose, product }) => {
  if (!open || !product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="glass-card rounded-3xl shadow-card p-8 max-w-lg w-full relative animate-scale-in">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-primary-500 text-2xl"
          onClick={onClose}
          aria-label="Fermer"
        >
          <i className="fas fa-times" />
        </button>
        <div className="flex flex-col items-center">
          <div className="h-40 w-40 bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl flex items-center justify-center mb-6">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain z-10" />
          </div>
          <h2 className="product-title mb-2 text-center">{product.name}</h2>
          <p className="product-description mb-4 text-center">{product.description}</p>
          <span className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-4">{product.price}</span>
          <button className="btn-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <i className="fas fa-shopping-cart mr-2"></i>Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDialog;
