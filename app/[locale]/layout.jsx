import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Header, Footer } from '@/components/layout'
import { RestaurantJsonLd, WebSiteJsonLd } from '@/lib/jsonld'
import { locales } from '@/i18n/routing'
import { siteConfig } from '@/lib/config'

// Génération des métadonnées dynamiques basées sur la locale
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'seo' })

  const siteUrl = siteConfig.url

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('home.title'),
      template: `%s | Les Botanistes`,
    },
    description: t('home.description'),
    keywords: [
      'cuisine traditionnelle française',
      'Paris 7',
      'cuisine française',
      'cuisine de saison',
      'Les Botanistes',
      'Bon Marché',
      'Sèvres-Babylone',
      'rue Chomel',
    ],
    authors: [{ name: 'Les Botanistes' }],
    creator: 'Les Botanistes',
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : locale,
      url: siteUrl,
      siteName: 'Les Botanistes',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/images/privatisation/espace-privatisable.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home.title'),
      description: t('home.description'),
      images: ['/images/privatisation/espace-privatisable.jpg'],
    },
    alternates: {
      canonical: locale === 'fr' ? siteUrl : `${siteUrl}/${locale}`,
      languages: Object.fromEntries(
        locales.map((loc) => [
          loc,
          loc === 'fr' ? siteUrl : `${siteUrl}/${loc}`,
        ])
      ),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Génération statique des routes pour toutes les locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params: { locale } }) {
  // Vérifier que la locale est supportée
  if (!locales.includes(locale)) {
    notFound()
  }

  // Charger les messages pour cette locale
  const messages = await getMessages()
  const common = await getTranslations('common')

  return (
    <html lang={locale}>
      <head>
        <RestaurantJsonLd />
        <WebSiteJsonLd />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/playfair.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">{common('skipToContent')}</a>
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <noscript><style>{'.reveal-on-scroll { opacity: 1 !important; transform: none !important; }'}</style></noscript>
      </body>
    </html>
  )
}
