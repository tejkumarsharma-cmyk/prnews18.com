import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Media press media platform',
  },
  footer: {
    tagline: 'Distribute smarter. Reach faster.',
  },
  hero: {
    badge: 'Press media distribution',
    title: ['Publish your news with credibility and measurable reach.'],
    description:
      'PRnews18.com is built for brands, agencies, and teams who need a trusted media publishing workflow from draft to distribution.',
    primaryCta: {
      label: 'View latest releases',
      href: '/updates',
    },
    secondaryCta: {
      label: 'See pricing',
      href: '/press',
    },
    searchPlaceholder: 'Search press media',
    focusLabel: 'Featured',
    featureCardBadge: 'distribution focus',
    featureCardTitle: 'Built for publishing teams and media outcomes.',
    featureCardDescription:
      'The platform keeps discovery, publishing, and article reading fast while staying compatible with all underlying tasks.',
  },
  home: {
    metadata: {
      title: 'Press media publishing and distribution platform',
      description:
        'Publish and distribute press media, monitor visibility, and keep your newsroom updates discoverable on PRnews18.com.',
      openGraphTitle: 'PRnews18.com - press media publishing platform',
      openGraphDescription:
        'Clean SaaS publishing experience for press media, media updates, and newsroom content.',
      keywords: ['press media distribution', 'media newsroom', 'latest press media', 'newswire platform'],
    },
    introBadge: 'Platform',
    introTitle: 'A modern newsroom experience built for PR-driven teams.',
    introParagraphs: [
      'PRnews18.com combines release publishing, discovery pages, and distribution-focused UX in one consistent interface.',
      'The layout emphasizes your primary media distribution workflow while keeping all other task routes available in the system.',
      'Every major section is optimized for scanning, trust cues, and publication clarity on desktop and mobile.',
    ],
    sideBadge: 'What it delivers',
    sidePoints: [
      'Fast publication-to-distribution flow',
      'Structured pricing and feature comparison',
      'Searchable and filterable release archives',
      'Editorial reading comfort for detail pages',
    ],
    primaryLink: {
      label: 'Explore releases',
      href: '/updates',
    },
    secondaryLink: {
      label: 'Contact sales',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Start distributing',
    title: 'Launch your next press media with a cleaner, faster publication stack.',
    description:
      'Scale from occasional announcements to high-frequency newsroom publishing without changing your underlying workflow.',
    primaryCta: {
      label: 'View plans',
      href: '/press',
    },
    secondaryCta: {
      label: 'Read latest news',
      href: '/updates',
    },
  },
  taskSectionHeading: 'Latest press media',
  taskSectionDescriptionSuffix: 'Read the newest distributed stories.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Press media',
    description: 'Browse the latest published press media and media announcements.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Press media newsroom',
    paragraphs: [
      'This newsroom archive is optimized for media distribution teams that publish frequent announcements and need clear discovery surfaces.',
      'Use filters, search, and visual cards to move from headline scan to full article reading with less friction.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/press' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
