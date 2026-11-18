import { siteConfig } from '@/lib/config'
import { isNewYearMenuUpcoming, newYearMenu } from '@/data/new-year-menu'
import { locales } from '@/i18n/routing'

export const revalidate = 3600

const BASE_URL = siteConfig.url

// Liste complète des routes du site
const routes = [
  // Pages principales
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/carte', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/reservation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  // Pages légales
  { path: '/mentions-legales', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/confidentialite', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  const currentDate = new Date().toISOString()

  const entries = routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  if (isNewYearMenuUpcoming()) {
    entries.push(...locales.map((locale) => ({
      url: `${BASE_URL}${locale === 'fr' ? '' : `/${locale}`}${newYearMenu.path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })))
  }

  return entries
}
