import type { Locale, PageId } from '../types';

export type NavigationItem = {
  label: string;
  page: PageId;
};

export type UiCopy = {
  locale: Locale;
  languageName: string;
  ogImageAlt: string;
  skipLink: string;
  mobileMenu: string;
  navigationLabel: string;
  navigation: NavigationItem[];
  pageLabels: Record<PageId, string>;
  productLink: string;
  docsLink: string;
  githubLink: string;
  demoLink: string;
  languageLabel: string;
  footerSummary: string;
  footerProject: string;
  footerResources: string;
  externalLinkLabel: string;
  openSourceLabel: string;
  copyright: string;
  trustItems: string[];
};
