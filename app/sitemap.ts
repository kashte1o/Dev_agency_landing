import type { MetadataRoute } from 'next'

const SITE_URL = 'https://dev-agency-landing.aleksandrkashtelo.workers.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
