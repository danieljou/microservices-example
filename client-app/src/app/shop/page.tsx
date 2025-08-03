import React from "react";
import FeaturesSection from "../../components/ecommercehome/FeaturesSection";
import Footer from "../../components/ecommercehome/Footer";
import HeroSection from "../../components/ecommercehome/HeroSection";
import NewsletterCTA from "../../components/ecommercehome/NewsletterCTA";
import ProductsPreviewSection from "../../components/ecommercehome/ProductsPreviewSection";
import TestimonialsSection from "../../components/ecommercehome/TestimonialsSection";
import "../../styles/ecommerce-home.css";

const EcommercePage = () => {
  return (
    <div>
      <HeroSection />
      <ProductsPreviewSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterCTA />
    </div>
  );
};

export default EcommercePage;
