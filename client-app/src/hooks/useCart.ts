'use client';

import { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  description: string;
  inStock: boolean;
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1299,
      originalPrice: 1399,
      quantity: 1,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad1)'/%3E%3Ccircle cx='200' cy='180' r='80' fill='rgba(255,255,255,0.1)'/%3E%3Ctext x='50%25' y='40%25' font-size='20' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3EiPhone 15 Pro Max%3C/text%3E%3Ctext x='50%25' y='65%25' font-size='60' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3E📱%3C/text%3E%3Ctext x='50%25' y='85%25' font-size='14' text-anchor='middle' dy='.3em' fill='rgba(255,255,255,0.8)' font-family='Arial, sans-serif'%3EPremium%3C/text%3E%3C/svg%3E",
      description: "Le smartphone le plus avancé d'Apple",
      inStock: true,
    },
    {
      id: 2,
      name: "MacBook Pro M3 Max",
      price: 2499,
      originalPrice: 2699,
      quantity: 1,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f5576c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad3)'/%3E%3Ccircle cx='200' cy='180' r='80' fill='rgba(255,255,255,0.1)'/%3E%3Ctext x='50%25' y='35%25' font-size='18' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3EMacBook Pro%3C/text%3E%3Ctext x='50%25' y='45%25' font-size='18' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3EM3 Max%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='60' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3E💻%3C/text%3E%3Ctext x='50%25' y='90%25' font-size='14' text-anchor='middle' dy='.3em' fill='rgba(255,255,255,0.8)' font-family='Arial, sans-serif'%3EPromo%3C/text%3E%3C/svg%3E",
      description: "Ordinateur portable professionnel",
      inStock: true,
    },
    {
      id: 3,
      name: "Nike Air Jordan 1 Retro",
      price: 179,
      originalPrice: 199,
      quantity: 1,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff9a9e;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23fecfef;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad4)'/%3E%3Ccircle cx='200' cy='180' r='80' fill='rgba(255,255,255,0.1)'/%3E%3Ctext x='50%25' y='35%25' font-size='18' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3ENike Air Jordan 1%3C/text%3E%3Ctext x='50%25' y='45%25' font-size='18' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3ERetro%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='60' text-anchor='middle' dy='.3em' fill='white' font-family='Arial, sans-serif'%3E👟%3C/text%3E%3Ctext x='50%25' y='90%25' font-size='14' text-anchor='middle' dy='.3em' fill='rgba(255,255,255,0.8)' font-family='Arial, sans-serif'%3EIconique%3C/text%3E%3C/svg%3E",
      description: "Baskets iconiques au design intemporel",
      inStock: true,
    },
  ]);

  const [promoCodeApplied, setPromoCodeApplied] = useState(false);

  const updateQuantity = (itemId: number, change: number, setValue?: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === itemId) {
          let newQuantity;
          if (setValue !== undefined) {
            newQuantity = Math.max(1, Math.min(10, setValue));
          } else {
            newQuantity = Math.max(1, Math.min(10, item.quantity + change));
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const applyPromoCode = (code: string) => {
    const validCodes = ["LUXE15", "WELCOME", "PREMIUM"];
    if (validCodes.includes(code.toUpperCase())) {
      setPromoCodeApplied(true);
      return true;
    }
    return false;
  };

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTax = () => {
    return Math.round(getSubtotal() * 0.2);
  };

  const getTotal = () => {
    let total = getSubtotal() + getTax();
    if (promoCodeApplied) {
      total = total * 0.85; // 15% discount
    }
    return Math.round(total);
  };

  return {
    cartItems,
    promoCodeApplied,
    updateQuantity,
    removeItem,
    applyPromoCode,
    getSubtotal,
    getTax,
    getTotal,
  };
} 