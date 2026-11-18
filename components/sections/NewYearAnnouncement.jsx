import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { formatNewYearDate, isNewYearMenuUpcoming, newYearMenu } from '@/data/new-year-menu'

export default async function NewYearAnnouncement({ compact = false }) {
  if (!isNewYearMenuUpcoming()) return null

  const locale = await getLocale()
  const t = await getTranslations('newYear')

  return (
    <aside className={compact ? 'pb-10 sm:pb-12' : 'pb-12 sm:pb-16'} aria-label={t('title')}>
      <div className="container-luxe">
        <div className="seasonal-announcement">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3">
              <time dateTime={newYearMenu.date}>{formatNewYearDate(locale)}</time>
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-2">{t('title')}</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl text-pretty">{t('teaser')}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:flex-nowrap">
            <p className="shrink-0">
              <span className="font-serif text-3xl text-gold">{newYearMenu.price} €</span>
              <span className="block text-xs text-muted-foreground mt-1">{t('priceNote')}</span>
            </p>
            <Link href={newYearMenu.path} className="btn-secondary w-full sm:w-auto whitespace-nowrap">
              {t('viewMenu')} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
