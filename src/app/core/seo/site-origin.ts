/**
 * Canonical production origin for the public marketing site. Used to build
 * absolute canonical/Open Graph/hreflang URLs deterministically, since
 * `document.location` reflects Angular's synthetic build-time origin (not
 * the real domain) when a page is statically prerendered.
 */
export const SITE_ORIGIN = 'https://webinkgraphics.com';
