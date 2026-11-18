import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { PageHeader } from '@/components/sections'
import { siteConfig } from '@/lib/config'
import ReservationForm from '@/components/ReservationForm'
import NewYearAnnouncement from '@/components/sections/NewYearAnnouncement'

export const revalidate = 3600

export default async function ReservationPage() {
  const t = await getTranslations('reservation')

  return (
    <>
      <PageHeader
        subtitle={t('header.subtitle')}
        title={t('header.title')}
        description={t('header.description')}
      />
      <NewYearAnnouncement compact />

      {/* Section principale de réservation */}
      <section className="pb-16 sm:pb-20">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Colonne gauche : Informations */}
            <div className="min-w-0">
              <h2 className="font-serif text-2xl sm:text-3xl mb-6">
                {t('info.title')} <span className="text-gold">{t('info.titleHighlight')}</span>
              </h2>

              <div className="space-y-8">
                {/* Horaires */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    {t('info.hours.title')}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>{t('info.hours.lunch')}</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.lunch}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>{t('info.hours.dinner')}</span>
                      <span className="text-foreground">{siteConfig.restaurant.hours.dinner}</span>
                    </p>
                    <p className="text-sm text-gold mt-2">
                      {t('info.hours.closed')} {siteConfig.restaurant.hours.closed}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    {t('info.contact')}
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <a
                        href={`tel:${siteConfig.restaurant.phone}`}
                        className="text-foreground hover:text-gold transition-colors duration-300"
                      >
                        {siteConfig.restaurant.phone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${siteConfig.restaurant.email}`}
                        className="text-muted-foreground hover:text-gold transition-colors duration-300"
                      >
                        {siteConfig.restaurant.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Adresse */}
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gold mb-4">
                    {t('info.address')}
                  </h3>
                  <address className="not-italic text-muted-foreground">
                    {siteConfig.restaurant.address.street}<br />
                    {siteConfig.restaurant.address.postalCode} {siteConfig.restaurant.address.city}
                  </address>
                </div>

                {/* Informations importantes */}
                <div className="p-6 bg-muted rounded-sm border-l-2 border-gold">
                  <h3 className="font-serif text-lg mb-3">{t('info.notes.title')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {t('info.notes.advance')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {t('info.notes.allergies')}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      {t('info.notes.lateness')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire / CTA */}
            <div className="order-first lg:order-last min-w-0" id="reservation-en-ligne">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Section Privatisation */}
      <section className="section-dark section-padding">
        <div className="container-luxe">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Texte */}
            <div>
              <p className="subtitle text-gold-light mb-4">{t('privatisation.subtitle')}</p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-6">
                {t('privatisation.title')}
              </h2>
              <p className="text-gris-chaud leading-relaxed mb-6">
                {t('privatisation.description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold-light rounded-full" />
                  {t('privatisation.features.capacity')}
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold-light rounded-full" />
                  {t('privatisation.features.menu')}
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold-light rounded-full" />
                  {t('privatisation.features.service')}
                </li>
                <li className="flex items-center gap-3 text-gris-chaud">
                  <span className="w-1.5 h-1.5 bg-gold-light rounded-full" />
                  {t('privatisation.features.decoration')}
                </li>
              </ul>
              <a
                href={`mailto:${siteConfig.restaurant.email}?subject=Demande de privatisation`}
                className="btn-primary"
              >
                {t('privatisation.cta')}
              </a>
            </div>

            {/* Photographie de la salle, visible sans voile opaque. */}
            <figure className="relative aspect-[4/3] overflow-hidden rounded-sm border border-blanc/15">
              <Image
                src="/images/privatisation/espace-privatisable.jpg"
                alt={t('privatisation.title')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 inset-x-6 text-sm text-blanc uppercase tracking-widest">
                {t('privatisation.imageLabel')}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl text-center mb-12">
            {t('faq.title')}
          </h2>

          <div className="space-y-6">
            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">{t('faq.cancellation.question')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('faq.cancellation.answer')}
              </p>
            </div>

            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">{t('faq.vegetarian.question')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('faq.vegetarian.answer')}
              </p>
            </div>

            <div className="card-luxe">
              <h3 className="font-serif text-lg mb-2">{t('faq.accessibility.question')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('faq.accessibility.answer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
