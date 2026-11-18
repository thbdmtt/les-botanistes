import { siteConfig } from '@/lib/config'

const BASE_URL = siteConfig.url

export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 10,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
