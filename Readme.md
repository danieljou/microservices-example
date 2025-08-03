

# 🛒 Projet de Gestion de Commande en Ligne

Bienvenue dans le projet de gestion de commande en ligne, une **application web moderne basée sur une architecture microservices**, conçue pour offrir une expérience fluide de commande et de gestion de produits.

---

## 📦 Aperçu du Projet

Cette plateforme permet :

* 📑 La gestion des **commandes clients**
* 👤 La gestion des **comptes utilisateurs**
* 🛍️ La gestion **des produits et catégories**
* 🌐 Une **interface utilisateur** intuitive
* 🧩 Une structure **microservices scalable**

---

## 🏗️ Architecture du Système

Le système est composé de **5 services indépendants**, orchestrés via `Docker Compose` :

```
┌───────────────────────────────────────────────────────────────────────────────┐
│                            MICROSERVICES ARCHITECTURE                          │
├───────────────────┬───────────────────┬───────────────────┬───────────────────┤
│    CLIENT APP     │    API GATEWAY    │     SERVICES      │     INFRA         │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│                   │                   │                   │                   │
│  ┌─────────────┐  │  ┌─────────────┐  │  ┌─────────────┐  │  ┌─────────────┐  │
│  │   Next.js   │  │  │  Express.js │  │  │   User      │  │  │  Docker     │  │
│  │   React     │══╪══▶    NGINX    │══╪══▶  Service    │  │  │  Compose    │  │
│  └─────────────┘  │  └─────────────┘  │  │  (NestJS)   │  │  └─────────────┘  │
│                   │                   │  └─────────────┘  │                   │
│                   │                   │                   │                   │
│                   │                   │  ┌─────────────┐  │  ┌─────────────┐  │
│                   │                   │  │  Product    │  │  │  Shared     │  │
│                   │                   │  │  Service    │  │  │  Config     │  │
│                   │                   │  │ (Express)   │══╪══▶  (ENV)      │  │
│                   │                   │  └─────────────┘  │  └─────────────┘  │
│                   │                   │                   │                   │
│                   │                   │  ┌─────────────┐  │  ┌─────────────┐  │
│                   │                   │  │   Order     │  │  │  Auth       │  │
│                   │                   │  │  Service    │  │  │  Service    │  │
│                   │                   │  │  (Flask)    │  │  │  (JWT)      │  │
│                   │                   │  └─────────────┘  │  └─────────────┘  │
│                   │                   │                   │                   │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│                   │                   │                   │                   │
│  UI Components    │  Routing,         │  Business Logic   │  Containerization │
│  State Management │  Load Balancing   │  Data Processing  │  Orchestration    │
│  Client-Side Auth │  Request Forwarding│  Domain-Specific  │  Config Management│
└───────────────────┴───────────────────┴───────────────────┴───────────────────┘

🔹 Communication: REST/HTTP (JSON)  🔹 Auth: JWT  🔹 Container: Docker
🔹 Monitoring: Prometheus + Grafana 🔹 CI/CD: GitHub Actions  🔹 Logging: ELK

```

| Microservice            | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| 🔐 **Gateway**          | Point d’entrée unique qui redirige les requêtes vers les services internes |
| 👤 **User Service**     | Gère l’inscription, l’authentification, les sessions et les profils        |
| 🛍️ **Product Service** | Gestion des produits, catégories, et catalogue produit                     |
| 📦 **Order Service**    | Gestion des commandes, du panier au suivi de livraison                     |
| 💻 **Client App**       | Application web réactive et moderne (React, Next.js, etc.)                 |

---

## 🚀 Fonctionnalités Clés

### ✅ Utilisateur

* Création de compte, connexion, gestion du profil
* Authentification sécurisée (JWT ou sessions)

### 📦 Commande

* Ajout au panier, modification, validation de commande
* Suivi des statuts (en attente, en cours, livré)

### 🛍️ Produits

* Consultation des produits par catégorie
* Recherche et filtre avancé

### 🌐 Application Web

* Responsive, UX mobile-first
* Intégration fluide avec les services backend

---

## ⚙️ Installation & Lancement

### 🔧 Prérequis

* Docker & Docker Compose
* Node.js & npm (si tu souhaites lancer `client-app` en local)
* Git

### 📥 Clonage du dépôt

```bash
git clone https://github.com/votre-utilisateur/projet-commande-en-ligne.git
cd projet-commande-en-ligne
```

### 📦 Lancement via Docker Compose

```bash
docker-compose up --build
```

> Accède à l'application sur : `http://localhost:3000`

---

## 🧪 Environnement de Développement

Chaque service dispose de son propre dossier et `Dockerfile`. Voici un exemple de structure :

```
📁 projet-commande-en-ligne
 ┣ 📁 gateway
 ┣ 📁 user_service
 ┣ 📁 product_service
 ┣ 📁 order_service
 ┣ 📁 client-app
 ┗ 📄 docker-compose.yml
```

---

## 🧾 Exemple de docker-compose.yml

```yaml

services:
  db_user:
    image: postgres:16
    environment:
      POSTGRES_DB: users_db
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    ports:
      - "5435:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - micro_net

  db_order:
    image: mysql
    environment:
      MYSQL_DATABASE: orders_db
      MYSQL_ROOT_PASSWORD: password
    ports:
      - "3307:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - micro_net

    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 5s
      timeout: 10s
      retries: 5

  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    networks:
      - micro_net

  user-service:
    build: ./user_service
    container_name: user-service
    hostname: user-service
    ports:
      - "8000:8000"
    volumes:
      - ./user_service:/app
    depends_on:
      - db_user
    networks:
      - micro_net

  product_service:
    build: ./product_service
    ports:
      - "5000:5000"
    volumes:
      - ./product_service:/app
      - /app/node_modules
    command: ["npm", "run", "dev"]
    depends_on:
      - mongo
    networks:
      - micro_net

  order_service:
    build: ./order_service
    ports:
      - "6060:6000"
    volumes:
      - ./order_service:/app
    depends_on:
      db_order:
        condition: service_healthy
    networks:
      - micro_net
    command: ["python", "app.py"]

  gateway:
    build: ./gateway
    ports:
      - "9000:9000"
    depends_on:
      - user-service
      - product_service
      - order_service
    networks:
      - micro_net
  
  # client-app:
  #   build: ./client-app
  #   container_name: client-app
  #   ports:
  #     - "3005:3000"
  #   volumes:
  #     - ./client-app/:/app
  #     - /app/node_modules
  #   environment:
  #     NODE_ENV: development
  #     TURBOPACK_WATCHING: "true"
  #     CHOKIDAR_USEPOLLING: "true"
  #   command: ["npm", "run", "dev:docker"]

networks:
  micro_net:
    driver: bridge


volumes:
  postgres_data:
  mysql_data:
  mongo_data:

```

---

## 🧬 Technologies Utilisées

| Catégorie          | Stack / Outils                        |
| ------------------ | ------------------------------------- |
| 🧠 Backend         | Node.js, Express.js, TypeScript       |
| 🎨 Frontend        | React, Next.js, Tailwind CSS          |
| 🐘 Base de données | MySQL, PostgreSQL, MongoDB (au choix) |
| 🚀 DevOps          | Docker, Docker Compose                |
| 📚 Documentation   | Swagger, Redoc                        |

---

## 📘 Documentation de l'API

Chaque microservice est livré avec une documentation Swagger/Redoc accessible via :

* Swagger UI : `http://localhost:<port>/api-docs`
* Redoc UI : `http://localhost:<port>/redoc`

> Exemple pour le `Product Service` :
> 🔗 Swagger : `http://localhost:5000/api-docs`
> 🔗 Redoc : `http://localhost:5000/redoc`

---

## 🤝 Contribution

1. Fork le dépôt
2. Crée ta branche de feature : `git checkout -b feature/ma-feature`
3. Commit tes changements : `git commit -m 'Ajout nouvelle feature'`
4. Push la branche : `git push origin feature/ma-feature`
5. Crée une Pull Request

---

## 📄 Licence

Ce projet est distribué sous licence **MIT**.
Voir `LICENSE` pour plus d'informations.

---

## 👨‍💻 Auteur

**Tiomela Jou Daniel**
📧 [tiomeladaniel@example.com](mailto:tiomeladaniel@example.com)
💼 [GitHub](https://github.com/tiomela) · [LinkedIn](https://linkedin.com/in/tiomela)

---

Souhaites-tu que je génère automatiquement ce README en fichier `.md` à intégrer directement dans ton projet ?
