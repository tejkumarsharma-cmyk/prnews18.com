export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '9olx86igmw',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'PRnews18.com',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'MEDIA PRESS MEDIA PLATFORM',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'PRnews18.com helps teams publish press media, distribute media stories, and build trusted news visibility with fast publishing workflows.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'prnews18.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://prnews18.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/freepic/default-cover.jpg',
} as const
