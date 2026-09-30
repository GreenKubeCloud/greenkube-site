import type { UiCopy } from './types';

export const en: UiCopy = {
  locale: 'en',
  languageName: 'English',
  ogImageAlt:
    'GreenKube, an open-source Kubernetes project for cost, capacity and carbon.',
  skipLink: 'Skip to content',
  mobileMenu: 'Open menu',
  navigationLabel: 'Main navigation',
  navigation: [
    { label: 'Product', page: 'home' },
    { label: 'Carbon', page: 'carbon' },
    { label: 'Use cases', page: 'use-cases' },
    { label: 'Community', page: 'community' },
  ],
  pageLabels: {
    home: 'Home',
    carbon: 'Carbon',
    'use-cases': 'Use cases',
    method: 'Method',
    community: 'Community',
    services: 'Services',
  },
  productLink: 'Product overview',
  docsLink: 'Documentation',
  githubLink: 'View on GitHub',
  demoLink: 'Try the demo',
  languageLabel: 'Choose language',
  footerSummary:
    'Open-source Kubernetes visibility and optimization work, with estimates presented alongside their limits.',
  footerProject: 'Project',
  footerResources: 'Resources',
  externalLinkLabel: 'opens in a new tab',
  openSourceLabel: 'Open source · Apache-2.0',
  copyright: 'GreenKube is open-source software licensed under Apache-2.0.',
  trustItems: [
    'Apache-2.0',
    'Self-hosted',
    'Kubernetes-native',
    'Built in the open',
  ],
};

export const englishUi = en;
