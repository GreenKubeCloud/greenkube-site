import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distRoot = path.join(projectRoot, 'dist');
const origin = 'https://greenkube.cloud';
const locales = ['en', 'fr'];
const pageSlugs = [
  '',
  'carbon/',
  'use-cases/',
  'method/',
  'community/',
  'services/',
];
const errors = [];
const stylesheetPaths = new Set();

function report(condition, message) {
  if (!condition) errors.push(message);
}

async function readDistFile(relativePath) {
  const target = path.join(distRoot, relativePath);
  try {
    await access(target);
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
  return readFile(target, 'utf8');
}

async function readDistBuffer(relativePath) {
  const target = path.join(distRoot, relativePath);
  try {
    await access(target);
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
  return readFile(target);
}

async function readProjectFile(relativePath) {
  const target = path.join(projectRoot, relativePath);
  try {
    await access(target);
  } catch (error) {
    if (error.code === 'ENOENT') return undefined;
    throw error;
  }
  return readFile(target, 'utf8');
}

function routeFile(pathname) {
  const cleanPath = pathname.replace(/^\/+/, '');
  return cleanPath.endsWith('/')
    ? path.join(cleanPath, 'index.html')
    : cleanPath;
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  );
}

const pageRoutes = locales.flatMap((locale) =>
  pageSlugs.map((slug) => `/${locale}/${slug}`),
);
const htmlByRoute = new Map();
const sectionIdsByRoute = new Map();
const releaseStatusPattern =
  /\b0\.3\.\d+\b|preview on dev|aperçu sur dev|dev-only/i;

for (const route of pageRoutes) {
  const html = await readDistFile(routeFile(route));
  report(Boolean(html), `Missing static route ${route}`);
  if (!html) continue;

  htmlByRoute.set(route, html);
  const locale = route.startsWith('/fr/') ? 'fr' : 'en';
  const canonical = `${origin}${route}`;
  const linkTags = [...html.matchAll(/<link\b[^>]*>/g)].map((match) =>
    attributes(match[0]),
  );
  const faviconLink = linkTags.find((link) => link.rel === 'icon');
  report(
    faviconLink?.href === '/favicon.ico',
    `${route} is missing the GreenKube favicon`,
  );
  const brandImages = [...html.matchAll(/<img\b[^>]*>/g)]
    .map((match) => attributes(match[0]))
    .filter((image) => image.src === '/greenkube-logo.png');
  report(
    brandImages.length === 2 && brandImages.every((image) => image.alt === ''),
    `${route} is missing the decorative GreenKube header/footer logos`,
  );
  for (const link of linkTags) {
    if (link.rel === 'stylesheet' && link.href) stylesheetPaths.add(link.href);
  }
  const canonicalLink = linkTags.find((link) => link.rel === 'canonical');
  report(
    new RegExp(`<html\\b[^>]*\\blang="${locale}"`).test(html),
    `${route} has the wrong html lang`,
  );
  report(
    canonicalLink?.href === canonical,
    `${route} has an incorrect canonical URL`,
  );
  report(
    (html.match(/<h1\b/g) ?? []).length === 1,
    `${route} must have one h1`,
  );
  report(
    !/name="robots" content="[^"]*noindex/.test(html),
    `${route} is noindex`,
  );
  report(
    !/<script\b[^>]*type="module"/i.test(html),
    `${route} unexpectedly requires a client-side module`,
  );
  report(
    html.includes(
      'property="og:image" content="https://greenkube.cloud/og-image.png"',
    ) &&
      html.includes('property="og:image:width" content="1200"') &&
      html.includes('property="og:image:height" content="630"'),
    `${route} is missing the sized social preview image`,
  );
  const sectionIds = [...html.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map(
    (match) => match[1],
  );
  sectionIdsByRoute.set(route, sectionIds);

  const alternates = new Map(
    linkTags
      .filter((link) => link.rel === 'alternate' && link.hreflang)
      .map((link) => [link.hreflang, link.href]),
  );
  report(
    alternates.get('en') ===
      `${origin}${route.replace(/^\/(?:en|fr)\//, '/en/')}`,
    `${route} has an incorrect English hreflang`,
  );
  report(
    alternates.get('fr') ===
      `${origin}${route.replace(/^\/(?:en|fr)\//, '/fr/')}`,
    `${route} has an incorrect French hreflang`,
  );
  report(
    alternates.get('x-default') ===
      `${origin}${route.replace(/^\/(?:en|fr)\//, '/en/')}`,
    `${route} has an incorrect x-default hreflang`,
  );
  report(
    (html.match(/<script type="application\/ld\+json">/g) ?? []).length > 0,
    `${route} is missing structured data`,
  );
  const structuredData = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  );
  if (structuredData) {
    try {
      const parsed = JSON.parse(structuredData[1]);
      report(
        Array.isArray(parsed) &&
          parsed.some((entry) => entry['@type'] === 'Organization') &&
          parsed.some((entry) => entry['@type'] === 'WebSite'),
        `${route} has incomplete Organization/WebSite structured data`,
      );
    } catch (error) {
      if (!(error instanceof SyntaxError)) throw error;
      report(false, `${route} has invalid JSON-LD`);
    }
  }

  const hrefs = [...html.matchAll(/\bhref="([^"]*)"/g)].map((match) =>
    match[1].replaceAll('&amp;', '&'),
  );
  const currentUrl = new URL(route, origin);
  const currentIds = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  for (const href of hrefs) {
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:'))
      continue;
    const targetUrl = new URL(href, currentUrl);
    if (targetUrl.origin !== origin) continue;

    if (targetUrl.pathname === currentUrl.pathname && targetUrl.hash) {
      report(
        currentIds.has(decodeURIComponent(targetUrl.hash.slice(1))),
        `${route} links to missing anchor ${targetUrl.hash}`,
      );
      continue;
    }

    const file = routeFile(decodeURIComponent(targetUrl.pathname));
    const target = await readDistFile(file);
    report(
      Boolean(target),
      `${route} links to missing internal path ${targetUrl.pathname}`,
    );
    if (targetUrl.hash && target) {
      const ids = new Set(
        [...target.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
      );
      report(
        ids.has(decodeURIComponent(targetUrl.hash.slice(1))),
        `${route} links to missing anchor ${targetUrl.pathname}${targetUrl.hash}`,
      );
    }
  }

  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    report(
      /\brel="[^"]*noreferrer[^"]*"/.test(tag[0]),
      `${route} has a new-tab link without noreferrer`,
    );
  }
}

for (const [route, html] of htmlByRoute) {
  report(
    !releaseStatusPattern.test(html),
    `${route} contains version-specific availability labels`,
  );
}

for (const slug of pageSlugs) {
  const englishRoute = `/en/${slug}`;
  const frenchRoute = `/fr/${slug}`;
  const englishIds = sectionIdsByRoute.get(englishRoute);
  const frenchIds = sectionIdsByRoute.get(frenchRoute);
  report(
    Boolean(englishIds && frenchIds) &&
      JSON.stringify(englishIds) === JSON.stringify(frenchIds),
    `English and French section structure differs for ${slug || 'home'}`,
  );
}

let initialStyleBytes = 0;
const fontPaths = new Set();
for (const stylesheetPath of stylesheetPaths) {
  const stylesheet = await readDistFile(routeFile(stylesheetPath));
  report(Boolean(stylesheet), `Missing stylesheet ${stylesheetPath}`);
  if (!stylesheet) continue;
  initialStyleBytes += gzipSync(stylesheet).byteLength;
  for (const match of stylesheet.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    const assetUrl = new URL(match[1], `${origin}${stylesheetPath}`);
    if (
      assetUrl.origin === origin &&
      /\.woff2$/.test(assetUrl.pathname) &&
      /latin(?:-ext)?-/i.test(assetUrl.pathname)
    ) {
      fontPaths.add(assetUrl.pathname);
    }
  }
}
let fontBytes = 0;
for (const fontPath of fontPaths) {
  const font = await readDistBuffer(routeFile(fontPath));
  report(Boolean(font), `Missing self-hosted font ${fontPath}`);
  if (font) fontBytes += font.byteLength;
}
const initialAssetBytes = initialStyleBytes + fontBytes;
report(
  initialAssetBytes <= 200_000,
  `Initial CSS and self-hosted Latin fonts use ${initialAssetBytes} bytes; budget is 200000`,
);

const sitemap = await readDistFile('sitemap.xml');
report(Boolean(sitemap), 'Missing sitemap.xml');
if (sitemap) {
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  report(
    locations.length === 12,
    `Expected 12 sitemap URLs, found ${locations.length}`,
  );
  report(new Set(locations).size === 12, 'Sitemap contains duplicate URLs');
  for (const route of pageRoutes) {
    report(
      locations.includes(`${origin}${route}`),
      `Sitemap is missing ${route}`,
    );
  }
  report(
    !locations.includes(`${origin}/`),
    'Sitemap must not include the redirect-only root route',
  );
  report(
    (sitemap.match(/hreflang="x-default"/g) ?? []).length === 12,
    'Sitemap must include x-default for every localized route',
  );
}

const robots = await readDistFile('robots.txt');
report(Boolean(robots), 'Missing robots.txt');
if (robots) {
  report(
    /^User-agent: \*/m.test(robots),
    'robots.txt is missing a public crawler rule',
  );
  report(/^Allow: \//m.test(robots), 'robots.txt must allow crawling');
  report(
    !/^Disallow: \/\s*$/m.test(robots),
    'robots.txt blocks the entire site',
  );
  report(
    robots.includes(`${origin}/sitemap.xml`),
    'robots.txt is missing the sitemap URL',
  );
}

const llms = await readDistFile('llms.txt');
report(Boolean(llms), 'Missing llms.txt');
if (llms) {
  for (const required of [
    `${origin}/en/`,
    `${origin}/en/carbon/`,
    `${origin}/en/use-cases/`,
    `${origin}/en/method/`,
    `${origin}/en/community/`,
    `${origin}/en/services/`,
    'https://docs.greenkube.cloud/',
    'https://demo.greenkube.cloud/',
    'https://github.com/GreenKubeCloud/GreenKube',
  ]) {
    report(llms.includes(required), `llms.txt is missing ${required}`);
  }
  report(
    !releaseStatusPattern.test(llms),
    'llms.txt must not contain version-specific availability labels',
  );
}

const rootPage = await readDistFile('index.html');
report(Boolean(rootPage), 'Missing static root fallback');
report(
  rootPage?.includes('content="0;url=/en/"'),
  'Static root fallback must point to /en/',
);
const socialImage = await readDistBuffer('og-image.png');
report(Boolean(socialImage), 'Missing the generated Open Graph image');
const brandLogo = await readDistBuffer('greenkube-logo.png');
report(Boolean(brandLogo), 'Missing the GreenKube logo asset');
const favicon = await readDistBuffer('favicon.ico');
report(Boolean(favicon), 'Missing the GreenKube favicon asset');

const redirectProposal = await readProjectFile('deploy/nginx-redirects.md');
report(Boolean(redirectProposal), 'Missing operator redirect proposal');
report(
  redirectProposal?.includes(
    'return 308 https://greenkube.cloud$request_uri;',
  ) && redirectProposal.includes('return 308 /en/$is_args$args;'),
  'Redirect proposal must preserve path/query on www and send / to /en/ with 308',
);
const legacyInventory = await readProjectFile('docs/legacy-route-inventory.md');
const legacyRedirects = await readProjectFile(
  'deploy/nginx-legacy-redirects.conf',
);
report(Boolean(legacyInventory), 'Missing legacy-route inventory');
report(Boolean(legacyRedirects), 'Missing explicit legacy redirects');
if (legacyInventory && legacyRedirects) {
  const inventoryEntries = [
    ...legacyInventory.matchAll(
      /^\|\s*`([^`]+)`\s*\|\s*`(https:\/\/[^`]+)`\s*\|\s*(\d{3})\s*\|$/gm,
    ),
  ].map((match) => ({
    path: match[1],
    destination: match[2],
    status: match[3],
  }));
  const inventoryPaths = inventoryEntries
    .filter(
      (entry) =>
        entry.destination.startsWith('https://docs.greenkube.cloud/') &&
        entry.status === '301',
    )
    .map((entry) => entry.path);
  const redirectPaths = [
    ...legacyRedirects.matchAll(/^location = (\S+) \{/gm),
  ].map((match) => match[1]);
  report(
    inventoryPaths.length === 28,
    `Expected 28 legacy documentation paths, found ${inventoryPaths.length}`,
  );
  report(
    JSON.stringify([...inventoryPaths].sort()) ===
      JSON.stringify([...redirectPaths].sort()),
    'Legacy inventory and exact redirect configuration do not match',
  );
  report(
    inventoryEntries.some(
      (entry) =>
        entry.path === '/' &&
        entry.destination === 'https://greenkube.cloud/en/' &&
        entry.status === '308',
    ),
    'Legacy inventory must preserve the root locale redirect',
  );
  report(
    legacyRedirects
      .split('\n')
      .filter((line) => line.startsWith('location = '))
      .every((line) =>
        line.includes('return 301 https://docs.greenkube.cloud$request_uri;'),
      ),
    'Legacy routes must preserve query strings and target the docs host',
  );
}

const englishCarbon = htmlByRoute.get('/en/carbon/');
const frenchCarbon = htmlByRoute.get('/fr/carbon/');
for (const [locale, html] of [
  ['en', englishCarbon],
  ['fr', frenchCarbon],
]) {
  report(
    Boolean(html) &&
      [
        'Prometheus',
        'Electricity Maps',
        'Wattnet',
        'OpenCost',
        'Boavizta',
        'is_estimated',
        '500',
        'PUE',
      ].every((term) => html.includes(term)),
    `${locale} carbon page is missing source or fallback detail`,
  );
  report(
    Boolean(html) && (html.includes('3.575') || html.includes('3,575')),
    `${locale} carbon page is missing the documented-input calculation example`,
  );
}

if (errors.length) {
  console.error(
    `Site validation failed (${errors.length}):\n- ${errors.join('\n- ')}`,
  );
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${pageRoutes.length} localized static routes, reciprocal SEO metadata, internal links, crawl files, carbon methodology and redirect proposal. Initial CSS + Latin fonts: ${initialAssetBytes} bytes.`,
  );
}
