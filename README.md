# ✈️ Trip Voyage — Application de Réservation de Voyages

Application web React permettant de parcourir et réserver des voyages à travers le monde, avec un système de panier et une authentification Firebase.

---

## 📋 Description

**Trip Voyage** est une SPA (Single Page Application) construite avec React et Vite. Elle permet aux utilisateurs de s'inscrire, se connecter, parcourir un catalogue de voyages internationaux, et ajouter des trips à un panier de réservation.

---

## 🗂️ Structure du projet

```
trip-voyage/
│
├── src/
│   ├── Pages/
│   │   ├── Home.jsx           # Page d'accueil
│   │   ├── About.jsx          # À propos
│   │   ├── AboutPost.jsx      # Détail about
│   │   ├── Services.jsx       # Services
│   │   ├── ServicesPost.jsx   # Détail services
│   │   ├── Contact.jsx        # Contact
│   │   ├── ContactPost.jsx    # Confirmation contact
│   │   ├── Trips.jsx          # Catalogue des voyages
│   │   ├── Cart.jsx           # Panier de réservation
│   │   ├── SignUp.jsx         # Inscription
│   │   └── SignIn.jsx         # Connexion
│   │
│   ├── context/
│   │   └── CartContext.jsx    # Gestion globale du panier
│   │
│   ├── assets/                # Images des destinations
│   └── App.jsx                # Routage principal
│
├── package.json
├── vite.config.js
└── .env                       # Variables Firebase (non versionné)
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Page d'accueil |
| `/about` | About | Présentation |
| `/aboutpost` | AboutPost | Détail about |
| `/services` | Services | Nos services |
| `/servicespost` | ServicesPost | Détail services |
| `/contact` | Contact | Formulaire de contact |
| `/contactpost` | ContactPost | Confirmation contact |
| `/trips` | Trips | Catalogue des voyages |
| `/cart` | Cart | Panier de réservation |
| `/signup` | SignUp | Création de compte |
| `/signin` | SignIn | Connexion |

---

## 🌍 Destinations disponibles

Le catalogue propose **21 destinations** à travers le monde :

Bordeaux · Tokyo · Sydney · Cape Town · Rio de Janeiro · Marrakech · New York · Istanbul · Rome · Reykjavik · Buenos Aires · Bangkok · Vancouver · Athènes · Dubaï · Lisbonne · Berlin · Singapour · Kyoto · Nouvelle-Zélande · et plus...

Chaque voyage affiche : titre, description, durée et prix. Un clic ouvre une modale de détail avec un bouton **Ajouter au panier**.

---

## 🛒 Système de panier

Le panier est géré via un **Context React global** (`CartContext`) accessible depuis toute l'application.

Fonctionnalités :
- `addToCart(trip)` — ajoute un voyage au panier
- `removeFromCart(index)` — supprime un voyage du panier
- L'état du panier (`cartItems`) est partagé entre toutes les pages

---

## 🔐 Authentification

L'authentification est gérée avec **Firebase**. Les pages `SignUp` et `SignIn` permettent la création et la connexion d'un compte. Le nom et l'email de l'utilisateur connecté sont affichés sur la page Trips.

### Variables d'environnement Firebase

Crée un fichier `.env` à la racine du projet avec les variables suivantes :

```env
VITE_FIREBASE_API_KEY=xxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxx
VITE_FIREBASE_PROJECT_ID=xxxxxxxxxxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxx
VITE_FIREBASE_APP_ID=xxxxxxxxxxxx
```

---

## 🛠️ Technologies utilisées

| Technologie | Version | Usage |
|---|---|---|
| React | 18.3.1 | Framework UI |
| Vite | 5.4.1 | Bundler & dev server |
| React Router DOM | 6.26.2 | Navigation SPA |
| Firebase | 10.13.2 | Authentification |
| Bootstrap | 5.3.3 | Styles & composants |
| React Bootstrap | 2.10.4 | Composants Bootstrap React |
| React Icons | 5.3.0 | Icônes |
| Tailwind CSS | 3.4.13 | Styles utilitaires |

---

## 🚀 Installation & Lancement

### Prérequis
- Node.js (v18+)
- npm ou yarn

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/ton-user/trip-voyage.git
cd trip-voyage

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Remplis le fichier .env avec tes clés Firebase

# 4. Lancer en développement
npm run dev
```

### Scripts disponibles

```bash
npm run dev       # Lancer le serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Linter ESLint
```

---

## 📱 Responsive Design

L'application utilise Bootstrap et Tailwind CSS pour un affichage adapté sur mobile, tablette et desktop. Les cartes de voyages s'affichent en grille 3 colonnes sur desktop et s'adaptent automatiquement sur mobile.

---

© Trip Voyage — 2024
