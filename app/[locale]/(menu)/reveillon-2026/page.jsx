import { getTranslations } from 'next-intl/server'
import { Link, locales } from '@/i18n/routing'
import { siteConfig } from '@/lib/config'
import { formatNewYearDate, isNewYearMenuUpcoming, newYearMenu } from '@/data/new-year-menu'

export const revalidate = 3600

function menuUrl(locale) {
  return `${siteConfig.url}${locale === 'fr' ? '' : `/${locale}`}${newYearMenu.path}`
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'newYear' })
  const title = `${t('title')} · ${formatNewYearDate(locale)}`

  return {
    title,
    description: t('description', { price: newYearMenu.price }),
    alternates: {
      canonical: menuUrl(locale),
      languages: Object.fromEntries(locales.map((loc) => [loc, menuUrl(loc)])),
    },
    openGraph: {
      title,
      description: t('description', { price: newYearMenu.price }),
      url: menuUrl(locale),
      images: [{ url: `${siteConfig.url}/images/privatisation/espace-privatisable.jpg` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: t('description', { price: newYearMenu.price }),
      images: [`${siteConfig.url}/images/privatisation/espace-privatisable.jpg`],
    },
  }
}

export default async function NewYearPage({ params: { locale } }) {
  const t = await getTranslations('newYear')
  const upcoming = isNewYearMenuUpcoming()
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${menuUrl(locale)}#menu`,
    name: `${t('title')} · ${formatNewYearDate(locale)}`,
    description: t('description', { price: newYearMenu.price }),
    url: menuUrl(locale),
    inLanguage: ['fr', 'en'],
    hasMenuSection: [{
      '@type': 'MenuSection',
      name: t('menuTitle'),
      hasMenuItem: newYearMenu.courses.map((course) => ({
        '@type': 'MenuItem',
        name: locale === 'fr' ? course.fr : course.en,
        ...(course.detailFr && { description: locale === 'fr' ? course.detailFr : course.detailEn }),
      })),
    }],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema).replace(/</g, '\\u003c') }} />
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="container-luxe">
          <Link href="/carte" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold mb-10">
            <span aria-hidden="true">←</span> {t('backToMenu')}
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <p className="subtitle text-xs sm:text-sm mb-5">
              <time dateTime={newYearMenu.date}>{formatNewYearDate(locale)}</time>
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-balance">
              {t('heading')}<br /><span className="italic text-gold">{t('headingHighlight')}</span>
            </h1>
            <p className="body-luxe text-pretty max-w-xl mx-auto">{t('introduction')}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-6">
              <p className="text-sm text-muted-foreground"><span className="font-serif text-2xl text-gold">{newYearMenu.price} €</span> · {t('priceNote')}</p>
              {upcoming && <a href={`tel:${siteConfig.restaurant.phone.replace(/\s/g, '')}`} className="btn-link text-sm">{t('callToBook')} <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-luxe grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-8 lg:gap-12 items-start">
          <article className="festive-menu" aria-labelledby="festive-menu-title">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Les Botanistes</p>
              <h2 id="festive-menu-title" className="font-serif text-3xl sm:text-4xl text-gold">{t('menuTitle')}</h2>
              <div className="separator-gold mx-auto mt-6" aria-hidden="true" />
            </div>
            <ol className="space-y-8 sm:space-y-10 text-center">
              {newYearMenu.courses.map((course, index) => (
                <li key={course.fr} className="festive-course">
                  <span className="block text-[0.65rem] tracking-[0.2em] text-gold mb-3" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <p lang="fr" className="font-serif text-xl sm:text-2xl leading-relaxed text-balance">{course.fr}</p>
                  {course.detailFr && <p lang="fr" className="font-serif text-lg sm:text-xl mt-1">{course.detailFr}</p>}
                  <p lang="en" className="text-sm text-muted-foreground mt-2 italic text-pretty">{course.en}</p>
                  {course.detailEn && <p lang="en" className="text-sm text-muted-foreground italic">{course.detailEn}</p>}
                </li>
              ))}
            </ol>
            <div className="text-center border-t border-border mt-10 pt-8">
              <p className="font-serif text-4xl text-gold">{newYearMenu.price} €</p>
              <p className="text-sm text-muted-foreground mt-2">{t('priceNote')}</p>
            </div>
          </article>

          <aside className="bg-muted/60 border border-border rounded-sm p-6 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{t('bookingLabel')}</p>
            <h2 className="font-serif text-2xl mb-4">{upcoming ? t('bookingTitle') : t('pastTitle')}</h2>
            <p className="text-sm text-muted-foreground text-pretty mb-6">{upcoming ? t('bookingDescription') : t('pastDescription')}</p>
            {upcoming && (
              <a href={`tel:${siteConfig.restaurant.phone.replace(/\s/g, '')}`} className="btn-primary w-full text-center normal-case tracking-normal">
                <span aria-hidden="true">↗</span> {siteConfig.restaurant.phone}
              </a>
            )}
            <div className="text-sm text-muted-foreground border-t border-border pt-6 mt-6">
              <p>{siteConfig.restaurant.address.street}<br />{siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}</p>
              <p className="mt-5 mb-2">{t('otherDates')}</p>
              <Link href="/reservation" className="text-gold underline underline-offset-4 hover:text-gold-dark">{t('onlineBooking')}</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
