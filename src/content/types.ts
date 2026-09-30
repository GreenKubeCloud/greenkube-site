export type Locale = 'en' | 'fr';

export type PageId =
  'home' | 'carbon' | 'use-cases' | 'method' | 'community' | 'services';

export type ContentLink = { label: string } & (
  { href: string; page?: never } | { page: PageId; href?: never }
);

export type ContentItem = {
  title: string;
  description: string;
  detail?: string;
  status?: string;
};

export type ContentSection = {
  id: string;
  presentation:
    | 'prose'
    | 'cards'
    | 'steps'
    | 'data-flow'
    | 'diff'
    | 'outcomes'
    | 'table'
    | 'callout';
  eyebrow?: string;
  title: string;
  introduction?: string;
  paragraphs?: string[];
  items?: ContentItem[];
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  code?: {
    filename: string;
    lines: string[];
  };
  notice?: string;
  links?: ContentLink[];
};

export type PageContent = {
  id: PageId;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    summary: string;
    note?: string;
    workflow?: ContentItem[];
    actions: ContentLink[];
  };
  sections: ContentSection[];
};

export const pageIds: PageId[] = [
  'home',
  'carbon',
  'use-cases',
  'method',
  'community',
  'services',
];

export const routeSuffixes: Record<PageId, string> = {
  home: '',
  carbon: 'carbon/',
  'use-cases': 'use-cases/',
  method: 'method/',
  community: 'community/',
  services: 'services/',
};

export function localizedPath(locale: Locale, page: PageId): string {
  return `/${locale}/${routeSuffixes[page]}`;
}
