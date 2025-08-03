# Cart Components

Ce dossier contient tous les composants nécessaires pour la page du panier intelligent.

## Structure

```
src/components/cart/
├── CartItems.tsx              # Affichage et gestion des articles du panier
├── OrderSummary.tsx           # Récapitulatif de commande et méthodes de paiement
├── ProgressSteps.tsx          # Indicateur d'étapes du processus de commande
├── PaymentSuccessModal.tsx    # Modal de confirmation de paiement
├── NeuralNetworkBackground.tsx # Animation de réseau neuronal en arrière-plan
├── index.ts                   # Exports des composants
└── README.md                  # Documentation
```

## Composants

### CartItems
Gère l'affichage des articles dans le panier avec :
- Images des produits avec badges de réduction
- Contrôles de quantité
- Boutons de suppression
- Section de codes promo

### OrderSummary
Affiche le récapitulatif de la commande avec :
- Calculs automatiques (sous-total, TVA, total)
- Méthodes de paiement sélectionnables
- Badge de sécurité
- Bouton de finalisation

### ProgressSteps
Indicateur visuel des étapes du processus :
- Panier (actif)
- Livraison (en attente)
- Paiement (en attente)

### PaymentSuccessModal
Modal de confirmation après paiement réussi avec :
- Animation de succès
- Boutons d'action (retour accueil, voir commande)

### NeuralNetworkBackground
Animation de réseau neuronal en arrière-plan pour l'effet visuel.

## Hook useCart

Le hook `useCart` gère l'état global du panier avec :
- Liste des articles
- Fonctions de mise à jour
- Calculs automatiques
- Gestion des codes promo

## Styles

Les styles spécifiques sont définis dans `src/styles/cart.css` et incluent :
- Animations et transitions
- Effets de survol
- Classes utilitaires
- Responsive design

## Utilisation

```tsx
import { CartItems, OrderSummary, ProgressSteps } from '@/components/cart';

export default function CartPage() {
  return (
    <div>
      <ProgressSteps />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <CartItems />
        <OrderSummary />
      </div>
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