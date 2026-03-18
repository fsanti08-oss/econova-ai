export const ECONOVA_BASE = 'https://www.econova.ai';

export const internalLinks = [
  { label: 'Prodotti', href: '#prodotti' },
  { label: 'ECAI-Budget', href: '#budget' },
  { label: 'Report VSME', href: '#vsme' },
  { label: 'Perché Noi', href: '#perche-noi' },
];

export const externalLinks = [
  { label: 'Services', href: `${ECONOVA_BASE}/services` },
  { label: 'About Us', href: `${ECONOVA_BASE}/about-us` },
  { label: 'Blog', href: `${ECONOVA_BASE}/blog` },
  { label: 'Events', href: `${ECONOVA_BASE}/events` },
];

export const CTA_DEMO_URL = `${ECONOVA_BASE}/contact`;

export const footerLinks = {
  prodotti: [
    { label: 'ECAI-Budget', href: '#budget' },
    { label: 'Report VSME ESG', href: '#vsme' },
  ],
  azienda: [
    { label: 'Chi Siamo', href: `${ECONOVA_BASE}/about-us` },
    { label: 'Blog', href: `${ECONOVA_BASE}/blog` },
    { label: 'Events', href: `${ECONOVA_BASE}/events` },
    { label: 'Contatti', href: CTA_DEMO_URL },
  ],
  legal: [
    { label: 'Privacy Policy', href: `${ECONOVA_BASE}/privacy` },
    { label: 'Terms of Service', href: `${ECONOVA_BASE}/privacy` },
    { label: 'Cookie Policy', href: `${ECONOVA_BASE}/privacy` },
    { label: 'GDPR', href: `${ECONOVA_BASE}/privacy` },
  ],
};
