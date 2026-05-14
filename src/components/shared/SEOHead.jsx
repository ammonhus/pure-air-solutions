import { Helmet } from 'react-helmet-async'

const SITE = {
  name: 'Pure Air Solutions',
  url: 'https://pureairsolutionsaz.com',
  twitter: '@PureAirAZ',
  logo: '/og-image.jpg',
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = SITE.logo,
  noIndex = false,
}) {
  const fullTitle = title
    ? `${title} | Pure Air Solutions`
    : 'Pure Air Solutions — Air Purification for Arizona Homes & Businesses'

  const fullDescription = description ||
    'Mesa, Arizona\'s authorized Air Scrubber by ActivePure dealer. NASA-origin technology proven to reduce 99.9% of viruses, bacteria, and mold. Free air quality assessment.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {canonical && <link rel="canonical" href={`${SITE.url}${canonical}`} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${SITE.url}${ogImage}`} />
      {canonical && <meta property="og:url" content={`${SITE.url}${canonical}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${SITE.url}${ogImage}`} />

      {/* Local Business */}
      <meta name="geo.region" content="US-AZ" />
      <meta name="geo.placename" content="Mesa, Arizona" />
    </Helmet>
  )
}
