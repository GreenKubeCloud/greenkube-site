import { pageIds, localizedPath } from '../content/types';
import type { Locale } from '../content/types';

const origin = 'https://greenkube.cloud';
const locales: Locale[] = ['en', 'fr'];

export function GET() {
  const urls = pageIds
    .map((page) => {
      const alternates = [
        `<xhtml:link rel="alternate" hreflang="en" href="${origin}${localizedPath('en', page)}" />`,
        `<xhtml:link rel="alternate" hreflang="fr" href="${origin}${localizedPath('fr', page)}" />`,
        `<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${localizedPath('en', page)}" />`,
      ].join('');
      return locales
        .map(
          (locale) =>
            `<url><loc>${origin}${localizedPath(locale, page)}</loc>${alternates}</url>`,
        )
        .join('');
    })
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
}
