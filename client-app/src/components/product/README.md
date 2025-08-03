# Product Components

Ce dossier contient tous les composants nécessaires pour la page des produits.

## Structure

```
src/components/product/
├── ProductCard.tsx              # Carte de produit individuelle
├── ProductFilters.tsx           # Conteneur des filtres
├── FilterChip.tsx               # Composant de filtre individuel
├── ProductToolbar.tsx           # Barre d'outils avec tri et affichage
├── ProductGrid.tsx              # Grille des produits
├── VoiceSearchModal.tsx         # Modal de recherche vocale
├── ARProductViewer.tsx          # Visualiseur de réalité augmentée
├── SmartRecommendations.tsx     # Recommandations IA
├── NeuralNetworkBackground.tsx  # Animation de réseau neuronal
├── index.ts                     # Exports des composants
└── README.md                    # Documentation
```

## Composants

### ProductCard
Carte de produit avec :
- Image du produit avec badges
- Informations détaillées (nom, prix, évaluation)
- Boutons d'action (AR, panier, favoris)
- Animations au survol

### ProductFilters
Conteneur des filtres avec :
- Filtres par catégorie avec icônes
- Filtres par prix avec slider
- Filtres par évaluation avec étoiles
- Filtres par marque avec images
- Bouton de réinitialisation

### FilterChip
Composant de filtre individuel avec :
- Support pour différents types (catégorie, évaluation, marque)
- Icônes et images personnalisables
- Animations et effets de survol
- Compteur d'éléments

### ProductToolbar
Barre d'outils avec :
- Sélecteur de tri
- Boutons d'affichage (grille/liste)
- Bouton de recherche vocale
- Interface responsive

### ProductGrid
Grille des produits avec :
- Affichage en grille responsive
- État vide avec message
- Intégration avec ProductCard
- Animations d'entrée

### VoiceSearchModal
Modal de recherche vocale avec :
- Animation de microphone
- Interface utilisateur intuitive
- Contrôles de fermeture

### ARProductViewer
Visualiseur de réalité augmentée avec :
- Interface immersive
- Contrôles de manipulation 3D
- Boutons d'action (rotation, taille, photo)

### SmartRecommendations
Recommandations IA avec :
- Affichage automatique après délai
- Interface de notification
- Boutons d'action

### NeuralNetworkBackground
Animation de réseau neuronal avec :
- Canvas HTML5
- Nœuds animés
- Connexions dynamiques
- Performance optimisée

## Styles

Les styles spécifiques sont définis dans `src/styles/product.css` et incluent :
- Animations et transitions
- Effets de survol
- Classes utilitaires
- Responsive design
- Thème sombre

## Utilisation

```tsx
import { ProductCard, ProductFilters, ProductGrid } from '@/components/product';

export default function ProductPage() {
  return (
    <div>
      <ProductFilters />
      <ProductGrid products={products} />
    </div>
  );
}
```

## Intégration

Les composants utilisent les composants existants du dossier `ecommercehome` :
- NavigationHeader
- Footer
- ToastNotifications
- AIShoppingAssistant
- AnimatedBackground
- FloatingDecoration

## Fonctionnalités

1. **Filtrage avancé** : Par catégorie, prix, évaluation, marque
2. **Recherche vocale** : Interface moderne avec reconnaissance vocale
3. **Réalité augmentée** : Visualisation 3D des produits
4. **Recommandations IA** : Suggestions personnalisées
5. **Animations fluides** : Transitions et effets visuels
6. **Responsive design** : Adaptation à tous les écrans
7. **Accessibilité** : Support du mode sombre et navigation clavier 