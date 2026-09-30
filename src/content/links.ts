import type { ContentLink, Locale } from './types';
import { localizedPath } from './types';

export function contentLinkHref(link: ContentLink, locale: Locale): string {
  return link.page ? localizedPath(locale, link.page) : link.href;
}

export function isExternalLink(link: ContentLink): boolean {
  return 'href' in link;
}
