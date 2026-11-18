'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui'
import { siteConfig } from '@/lib/config'

export default function Hero() {
  const t = useTranslations('home.hero')
  const { address } = siteConfig.restaurant

  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div className="container-luxe grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
        <div className="max-w-xl">
          <p className="subtitle text-xs sm:text-sm mb-5">{t('subtitle')}</p>
          <h1 className="font-serif text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.12] mb-6">
            {t('title')}{' '}
            <span className="block text-gold italic">{t('titleHighlight')}</span>
          </h1>
          <div className="separator-gold mb-7" />
          <p className="body-luxe max-w-md mb-8">{t('description')}</p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Button href="/reservation" className="w-full sm:w-auto">
              {t('ctaReservation')}
            </Button>
            <Button href="/carte" variant="secondary" className="w-full sm:w-auto">
              {t('ctaMenu')}
            </Button>
          </div>

          <a href="#notre-maison" className="inline-flex items-center gap-3 mt-8 text-sm text-muted-foreground hover:text-gold">
            {t('scrollIndicator')}
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <figure className="min-w-0">
          <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-t-[5rem] sm:rounded-t-[8rem] border border-border bg-muted">
            <Image
              src="/images/privatisation/espace-privatisable.jpg"
              alt={t('imageAlt')}
              fill
              priority
              quality={85}
              sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc(50vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-muted-foreground">
            <span>{address.street}</span>
            <span>{address.postalCode} {address.city}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
