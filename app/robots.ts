import type { MetadataRoute } from 'next'

const SITE_URL = 'https://dev-agency-landing.aleksandrkashtelo.workers.dev'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
