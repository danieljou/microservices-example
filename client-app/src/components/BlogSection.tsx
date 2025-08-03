/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const blogPosts = [
  {
    id: "1",
    title: "Les Innovations en Implantologie 2024",
    excerpt:
      "Découvrez les dernières avancées technologiques qui révolutionnent les traitements implantaires.",
    category: "Innovation",
    readTime: "5 min",
    date: "15 Mars 2024",
    image: "innovation",
  },
  {
    id: "2",
    title: "Comment Maintenir une Hygiène Dentaire Parfaite",
    excerpt:
      "Nos conseils d'experts pour préserver votre santé bucco-dentaire au quotidien.",
    category: "Prévention",
    readTime: "3 min",
    date: "12 Mars 2024",
    image: "hygiene",
  },
  {
    id: "3",
    title: "Esthétique Dentaire : Tendances et Techniques",
    excerpt:
      "Les nouvelles approches pour un sourire parfaitement naturel et harmonieux.",
    category: "Esthétique",
    readTime: "4 min",
    date: "10 Mars 2024",
    image: "esthetic",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Innovation":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "Prévention":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    case "Esthétique":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

const getImageGradient = (image: string) => {
  switch (image) {
    case "innovation":
      return "from-blue-400 to-purple-600";
    case "hygiene":
      return "from-green-400 to-teal-600";
    case "esthetic":
      return "from-pink-400 to-rose-600";
    default:
      return "from-primary to-accent";
  }
};

const BlogCard = ({ post, index }: { post: any; index: number }) => {
  const [ref, , hasIntersected] = useIntersectionObserver();
  const animationDelay = `${index * 0.2}s`;
  return (
    <article
      ref={ref}
      className={`blog-card bg-white dark:bg-dark-light rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group ${hasIntersected ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay }}
    >
      <div className={`h-48 bg-gradient-to-br ${getImageGradient(post.image)} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <i className="fas fa-newspaper text-4xl mb-2 opacity-80"></i>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>{post.category}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <i className="fas fa-calendar mr-2"></i>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <i className="fas fa-clock mr-2"></i>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
        <button className="text-primary font-semibold hover:text-primary-dark transition-colors flex items-center">
          Lire la suite
          <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </article>
  );
};

const BlogSection: React.FC = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <section id="blog" className="py-20 bg-white dark:bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <div className={`inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ${hasIntersected ? "animate-fade-in" : ""}`}>
            <i className="fas fa-newspaper mr-2"></i>
            Blog & Actualités
          </div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white ${hasIntersected ? "animate-slide-up" : ""}`}>
            Conseils <span className="gradient-text">{"d'Experts"}</span>
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${hasIntersected ? "animate-fade-in" : ""}`}>
            Découvrez nos articles, conseils et les dernières innovations en dentisterie moderne.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <i className="fas fa-arrow-right mr-2"></i>
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
