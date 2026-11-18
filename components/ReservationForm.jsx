import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/lib/config'

const THEFORK_WIDGET_URL = 'https://widget.thefork.com/ff0c7979-7a9b-4367-9fd6-1224900b9fce'

export default async function ReservationForm() {
  const t = await getTranslations('reservation.form')

  return (
    <div className="booking-card lg:sticky lg:top-28">
      <div className="p-6 sm:p-8 border-b border-border">
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">TheFork</p>
        <h2 className="font-serif text-2xl sm:text-3xl mb-3">{t('title')}</h2>
        <p className="text-sm text-muted-foreground text-pretty">{t('description')}</p>
      </div>
      <iframe
        src={THEFORK_WIDGET_URL}
        title={`${t('title')} — TheFork`}
        allow="payment *"
        loading="lazy"
        className="block w-full min-h-[800px] border-0 bg-white"
        style={{ colorScheme: 'light' }}
      />
      <div className="border-t border-border p-5 sm:px-8 bg-background text-sm">
        <a href={THEFORK_WIDGET_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
          {t('openWidget')} <span aria-hidden="true">↗</span>
        </a>
        <p className="text-muted-foreground mt-3">
          {t('or')}{' '}
          <a href={`tel:${siteConfig.restaurant.phone.replace(/\s/g, '')}`} className="text-gold underline underline-offset-4">{t('callToBook')}</a>
        </p>
      </div>
    </div>
  )
}
