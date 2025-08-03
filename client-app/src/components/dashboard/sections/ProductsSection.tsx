"use client"
import React, { useState, useEffect } from "react";
import { Toast } from "../DashboardLayout";
import ProductGrid from "../ui/ProductGrid";
import { ProductFilters } from "@/components/product";


interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  badges: string[];
  inStock: boolean;
  fastDelivery: boolean;
  features: string[];
}

interface ProductsSectionProps {
  showToast: (message: string, type: Toast["type"]) => void;
}

export default function ProductsSection({ showToast }: ProductsSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    stock: ""
  });

  // Sample products data
  useEffect(() => {
    const sampleProducts: Product[] = [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 1299,
        originalPrice: 1399,
        category: "electronique",
        brand: "apple",
        rating: 4.9,
        reviews: 1247,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad1)'/%3E%3Ccircle cx='200' cy='180' r='80' fill='rgba(255,255,255,0.1)'/%3E%3Ctext x='50%25' y='40%25' font-size='20' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3EiPhone 15 Pro Max%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='60' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3E📱%3C/text%3E%3Ctext x='50%25' y='85%25' font-size='14' text-anchor='middle' dy='.3em' fill='rgba(255,255,255,0.8)' font-family='Arial, sans-serif'%3EPremium%3C/text%3E%3C/svg%3E",
        description: "Le smartphone le plus avancé d'Apple avec puce A17 Pro et caméra 48MP révolutionnaire",
        badges: ["Nouveau", "Premium", "Intelligence"],
        inStock: true,
        fastDelivery: true,
        features: ["Puce A17 Pro", "Caméra 48MP", "USB-C", "Action Button"]
      },
      // Add more sample products here...
    ];
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory = !filters.category || product.category === filters.category;

      let matchesStock = true;
      if (filters.stock === "in-stock") {
        matchesStock = product.inStock;
      } else if (filters.stock === "out-of-stock") {
        matchesStock = !product.inStock;
      }

      return matchesSearch && matchesCategory && matchesStock;
    });

    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDeleteProduct = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setProducts(prev => prev.filter(p => p.id !== productId));
      showToast(`Produit "${product.name}" supprimé avec succès! 🗑️`, "success");
    }
  };

  const handleSaveProduct = (productData: Omit<Product, "id">) => {
    if (editingProduct) {
      // Update existing product
      setProducts(prev => prev.map(p =>
        p.id === editingProduct.id ? { ...p, ...productData } : p
      ));
      showToast("Produit mis à jour avec succès! ✅", "success");
    } else {
      // Add new product
      const newProduct: Product = {
        ...productData,
        id: Math.max(...products.map(p => p.id)) + 1
      };
      setProducts(prev => [...prev, newProduct]);
      showToast("Nouveau produit ajouté avec succès! 🎉", "success");
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gestion des produits</h3>
          <p className="text-gray-600 dark:text-gray-400">Gérez votre inventaire et vos produits</p>
        </div>
        <button
          onClick={handleAddProduct}
          className="interactive-btn mt-4 sm:mt-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all shadow-glow font-semibold"
        >
          <i className="fas fa-plus mr-2"></i>
          Ajouter un produit
        </button>
      </div>

      {/* Filters */}
      {/* <ProductFilters
        filters={filters}
        setFilters={setFilters}
        viewMode={viewMode}
        setViewMode={setViewMode}
      /> */}

      {/* Products Grid/List */}
      <ProductGrid
        products={filteredProducts}
        viewMode={viewMode}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />

      {/* Product Modal */}
      {/* {showModal && (
        <ProductModal
          product={editingProduct}
          onSave={handleSaveProduct}
          onClose={() => setShowModal(false)}
        />
      )} */}
    </div>
  );
} 