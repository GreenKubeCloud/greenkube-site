import { en } from './en';

export const fr = {
  locale: 'fr',
  languageName: 'Français',
  ogImageAlt:
    'GreenKube, un projet Kubernetes open source pour les coûts, la capacité et le carbone.',
  skipLink: 'Aller au contenu',
  mobileMenu: 'Ouvrir le menu',
  navigationLabel: 'Navigation principale',
  navigation: [
    { label: 'Produit', page: 'home' },
    { label: 'Carbone', page: 'carbon' },
    { label: 'Cas d’usage', page: 'use-cases' },
    { label: 'Communauté', page: 'community' },
  ],
  pageLabels: {
    home: 'Accueil',
    carbon: 'Carbone',
    'use-cases': 'Cas d’usage',
    method: 'Méthode',
    community: 'Communauté',
    services: 'Services',
  },
  productLink: 'Présentation du produit',
  docsLink: 'Documentation',
  githubLink: 'Voir sur GitHub',
  demoLink: 'Essayer la démo',
  languageLabel: 'Choisir la langue',
  footerSummary:
    'Un projet open source de visibilité et d’optimisation Kubernetes, avec des estimations dont les limites sont explicitées.',
  footerProject: 'Projet',
  footerResources: 'Ressources',
  externalLinkLabel: 's’ouvre dans un nouvel onglet',
  openSourceLabel: 'Open source · Apache-2.0',
  copyright: 'GreenKube est un logiciel open source sous licence Apache-2.0.',
  trustItems: [
    'Apache-2.0',
    'Auto-hébergé',
    'Natif Kubernetes',
    'Développé en open source',
  ],
} satisfies typeof en;

export const frenchUi = fr;
