import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  structuredData?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'Warung Oman - Sembako & Layanan Digital';
const DEFAULT_DESCRIPTION =
  'Warung Oman menyediakan sembako lengkap, pembayaran tagihan, PPOB, top up e-wallet, dan QRIS di Subang, Jawa Barat dengan layanan cepat dan terpercaya.';
const SITE_URL = 'https://warungoman.netlify.app';
const DEFAULT_IMAGE = '/images/gallery-front.jpg';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  locale = 'id_ID',
  siteName = 'Warung Oman',
  structuredData,
}: SEOProps): JSX.Element {
  const fullTitle = title ? `${title} | ${siteName}` : DEFAULT_TITLE;
  const canonicalUrl = canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="author" content="Warung Oman" />
      <meta name="theme-color" content="#0f766e" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {structuredData ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  );
}
