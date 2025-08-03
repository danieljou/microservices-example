from app.views.order_view import api as orders_ns
from flask import render_template_string
from app import create_app
from flask_restx import Api

app = create_app()



@app.route('/')
def index():
    return render_template_string("""
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Service Commandes</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: {
                  50: '#f0f9ff',
                  100: '#e0f2fe',
                  200: '#bae6fd',
                  300: '#7dd3fc',
                  400: '#38bdf8',
                  500: '#0ea5e9',
                  600: '#0284c7',
                  700: '#0369a1',
                  800: '#075985',
                  900: '#0c4a6e',
                },
                secondary: {
                  500: '#f59e0b',
                }
              },
              fontFamily: {
                sans: ['Inter', 'sans-serif'],
              },
            }
          }
        }
      </script>
      <style>
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      </style>
    </head>
    <body class="bg-gradient-to-br from-primary-50 to-primary-100 font-sans min-h-screen flex items-center justify-center p-4">
      <div class="max-w-4xl w-full">
        <!-- Header -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div class="bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <div class="flex items-center space-x-4 mb-4 md:mb-0">
                <div class="animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h1 class="text-3xl font-bold">Order Service API</h1>
                  <p class="text-primary-200">Gestion avancée des commandes clients</p>
                </div>
              </div>
              <div class="flex space-x-2">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <span class="w-2 h-2 mr-2 rounded-full bg-green-500"></span>
                  En ligne
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  v2.4.1
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Documentation Cards -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover hover-scale">
            <div class="bg-primary-500 p-4 text-white">
              <div class="flex items-center space-x-3">
                <i class="fas fa-book-open text-xl"></i>
                <h2 class="text-xl font-semibold">Documentation API</h2>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">Choisissez votre format de documentation préféré :</p>
              
              <div class="space-y-4">
                <a href="/swagger-ui/" class="block">
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-primary-50 transition-colors">
                    <div class="bg-primary-100 p-3 rounded-lg mr-4">
                      <i class="fas fa-code text-primary-600"></i>
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-900">Swagger UI</h3>
                      <p class="text-sm text-gray-500">Documentation interactive avec tester intégré</p>
                    </div>
                    <div class="ml-auto text-primary-500">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </a>
                
                <a href="/redoc/" class="block">
                  <div class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-primary-50 transition-colors">
                    <div class="bg-primary-100 p-3 rounded-lg mr-4">
                      <i class="fas fa-file-alt text-primary-600"></i>
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-900">ReDoc</h3>
                      <p class="text-sm text-gray-500">Documentation visuelle et organisée</p>
                    </div>
                    <div class="ml-auto text-primary-500">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Features Card -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover hover-scale">
            <div class="bg-secondary-500 p-4 text-white">
              <div class="flex items-center space-x-3">
                <i class="fas fa-star text-xl"></i>
                <h2 class="text-xl font-semibold">Fonctionnalités</h2>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <i class="fas fa-check-circle text-green-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Gestion des commandes</h3>
                    <p class="text-sm text-gray-600">Création, lecture, mise à jour et suppression des commandes</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <i class="fas fa-check-circle text-green-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Statut en temps réel</h3>
                    <p class="text-sm text-gray-600">Suivi des statuts de commande en direct</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <i class="fas fa-check-circle text-green-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">API RESTful</h3>
                    <p class="text-sm text-gray-600">Endpoints conformes aux standards REST</p>
                  </div>
                </li>
              </ul>
              
              <div class="mt-6 pt-4 border-t border-gray-200">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-500">Connecté à :</p>
                    <p class="font-medium">orders_db</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-gray-500">Dernière mise à jour :</p>
                    <p class="font-medium">15/06/2023</p>
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
            <a href="/orders" class="bg-primary-50 hover:bg-primary-100 transition-colors p-4 rounded-lg text-center">
              <i class="fas fa-list text-primary-600 text-2xl mb-2"></i>
              <p class="font-medium">Liste des commandes</p>
            </a>
            <a href="/swagger-ui/#/default/post_orders" class="bg-primary-50 hover:bg-primary-100 transition-colors p-4 rounded-lg text-center">
              <i class="fas fa-plus-circle text-primary-600 text-2xl mb-2"></i>
              <p class="font-medium">Nouvelle commande</p>
            </a>
            <a href="/redoc/#operation/get_orders__order_id_" class="bg-primary-50 hover:bg-primary-100 transition-colors p-4 rounded-lg text-center">
              <i class="fas fa-search text-primary-600 text-2xl mb-2"></i>
              <p class="font-medium">Rechercher commande</p>
            </a>
            <a href="https://github.com/your-repo" target="_blank" class="bg-primary-50 hover:bg-primary-100 transition-colors p-4 rounded-lg text-center">
              <i class="fab fa-github text-primary-600 text-2xl mb-2"></i>
              <p class="font-medium">Code source</p>
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
    """)

api = Api(app,
          version='1.0',
          title='Order API',
          description='A simple Order Management API',
          doc='/swagger-ui/')  # Swagger UI à /swagger-ui/

# Configuration supplémentaire pour ReDoc
@app.route('/redoc/')
def redoc():
    """Route pour la documentation ReDoc"""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>{api.title} - ReDoc</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet">
        <style>
            body {{ margin: 0; padding: 0; }}
        </style>
    </head>
    <body>
        <redoc spec-url="{api.base_url}swagger.json"></redoc>
        <script src="https://cdn.jsdelivr.net/npm/redoc@next/bundles/redoc.standalone.js"></script>
    </body>
    </html>
    """


api.add_namespace(orders_ns, path='/orders')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6000, debug=True)
