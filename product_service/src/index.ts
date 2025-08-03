import express from "express";
import mongoose from "mongoose";

import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/categories.routes";
import swaggerUi from "swagger-ui-express";
import redoc from "redoc-express";
import { swaggerSpec } from "./docs/swagger";


const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://mongo:27017/products_db")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));
app.get("/", (_req, res) => {
  const currentDate = new Date().toLocaleDateString("fr-FR");
  const currentYear = new Date().getFullYear();

  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Service Utilisateur - API</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <script>
        tailwind.config = {{
          theme: {{
            extend: {{
              colors: {{
                indigo: {{
                  50: '#eef2ff',
                  100: '#e0e7ff',
                  200: '#c7d2fe',
                  300: '#a5b4fc',
                  400: '#818cf8',
                  500: '#6366f1',
                  600: '#4f46e5',
                  700: '#4338ca',
                  800: '#3730a3',
                  900: '#312e81',
                }},
                emerald: {{
                  500: '#10b981',
                }}
              }},
              fontFamily: {{
                sans: ['Inter', 'sans-serif'],
              }},
              animation: {{
                'float': 'float 3s ease-in-out infinite',
                'wave': 'wave 2s linear infinite',
              }},
              keyframes: {{
                float: {{
                  '0%, 100%': {{ transform: 'translateY(0)' }},
                  '50%': {{ transform: 'translateY(-10px)' }},
                }},
                wave: {{
                  '0%': {{ transform: 'rotate(0deg)' }},
                  '10%': {{ transform: 'rotate(14deg)' }},
                  '20%': {{ transform: 'rotate(-8deg)' }},
                  '30%': {{ transform: 'rotate(14deg)' }},
                  '40%': {{ transform: 'rotate(-4deg)' }},
                  '50%': {{ transform: 'rotate(10deg)' }},
                  '60%': {{ transform: 'rotate(0deg)' }},
                  '100%': {{ transform: 'rotate(0deg)' }},
                }}
              }}
            }}
          }}
        }}
      </script>
      <style>
        .card-hover {{
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }}
        .card-hover:hover {{
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }}
        .feature-icon {{
          background: rgba(99, 102, 241, 0.1);
        }}
        .hover-scale {{
          transition: transform 0.3s ease;
        }}
        .hover-scale:hover {{
          transform: scale(1.03);
        }}
      </style>
    </head>
    <body class="bg-gradient-to-br from-indigo-50 to-indigo-100 font-sans min-h-screen flex items-center justify-center p-4">
      <div class="max-w-4xl w-full">
        <!-- Header Card -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div class="bg-gradient-to-r from-green-600 to-green-800 p-8 text-white">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <div class="flex items-center space-x-6 mb-6 md:mb-0">
                <div class="animate-float">
                  <i class="fas fa-users text-5xl"></i>
                </div>
                <div>
                  <h1 class="text-3xl font-bold">Product Service API</h1>
                  <p class="text-indigo-200">Gestion centralisée produits et catégories</p>
                </div>
              </div>
              <div class="flex space-x-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                  <span class="w-2 h-2 mr-2 rounded-full bg-emerald-500"></span>
                  En ligne
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  v3.2.1
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Documentation Section -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover hover-scale">
            <div class="bg-indigo-600 p-6 text-white">
              <div class="flex items-center space-x-3">
                <i class="fas fa-book-open text-xl"></i>
                <h2 class="text-xl font-semibold">Documentation API</h2>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">Accédez à la documentation complète de l'API :</p>
              
              <div class="space-y-4">
                <a href="/api/docs" class="block">
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                    <div class="bg-indigo-100 p-3 rounded-lg mr-4">
                      <i class="fas fa-code text-indigo-600"></i>
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-900">Swagger UI</h3>
                      <p class="text-sm text-gray-500">Documentation interactive avec tester intégré</p>
                    </div>
                    <div class="ml-auto text-indigo-500">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </a>
                
                <a href="/redoc/" class="block">
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors">
                    <div class="bg-indigo-100 p-3 rounded-lg mr-4">
                      <i class="fas fa-file-alt text-indigo-600"></i>
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-900">ReDoc</h3>
                      <p class="text-sm text-gray-500">Documentation visuelle et organisée</p>
                    </div>
                    <div class="ml-auto text-indigo-500">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Features Section -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover hover-scale">
            <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
              <div class="flex items-center space-x-3">
                <i class="fas fa-star text-xl"></i>
                <h2 class="text-xl font-semibold">Fonctionnalités</h2>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                    <i class="fas fa-check-circle text-emerald-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Gestion des produits</h3>
                    <p class="text-sm text-gray-600">CRUD complet pour produits</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                    <i class="fas fa-check-circle text-emerald-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Gestion des catégories de produits</h3>
                    <p class="text-sm text-gray-600">Fonctionnalité permettant de gérer les produits par groupe</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                    <i class="fas fa-check-circle text-emerald-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Pagination</h3>
                    <p class="text-sm text-gray-600"> Pagination et filtrages des données </p>
                  </div>
                </li>
              </ul>
              
              <div class="mt-6 pt-4 border-t border-gray-200">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-500">Connecté à :</p>
                    <p class="font-medium">MongoDB</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-gray-500">Dernière mise à jour :</p>
                    <p class="font-medium">${currentDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="mt-6 bg-white rounded-xl shadow-md overflow-hidden p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Accès rapide</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="/categories" class="bg-indigo-50 hover:bg-indigo-100 transition-colors p-4 rounded-lg text-center">
              <i class="fas fa-list-ul text-indigo-600 text-2xl mb-2"></i>
              <p class="font-medium">Liste des catégories de produits</p>
            </a>
            <a href="/products" class="bg-indigo-50 hover:bg-indigo-100 transition-colors p-4 rounded-lg text-center">
              <i class="fas fa-list-ul text-indigo-600 text-2xl mb-2"></i>
              <p class="font-medium">Liste des produits</p>
            </a>
          </div>
        </div>

        <!-- Footer -->
        <footer class="text-center mt-8 text-sm text-gray-500">
          <p>Microservices Architecture &copy; ${currentYear}</p>
          <p class="mt-1">Propulsé par Django REST Framework</p>
        </footer>
      </div>
    </body>
    </html>
  `);
});

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

// // Swagger UI
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serveur JSON Swagger
app.get("/swagger.json", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// ReDoc
app.get(
  "/redoc",
  redoc({
    title: "Products API - ReDoc",
    specUrl: "/swagger.json",
  })
);

app.listen(5000, () => console.log("Product service running on port 5000"));
