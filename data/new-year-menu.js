// Menu supplied by the restaurant; the date was confirmed as 31 December 2026.
// Keep the seasonal promotion separate from the everyday Google Sheets menu.
export const newYearMenu = {
  path: '/reveillon-2026',
  date: '2026-12-31',
  promotionEndsAt: '2027-01-01T00:00:00+01:00',
  price: 135,
  currency: 'EUR',
  courses: [
    { fr: 'Amuse-bouche', en: 'Amuse-bouche' },
    {
      fr: 'Foie gras de canard mi-cuit au torchon maison, marmelade de fruits secs',
      en: 'Duck foie gras, dried fruit marmalade, toasted bread',
    },
    {
      fr: 'Quenelle de brochet, sauce homardine',
      en: 'Pike quenelle, lobster sauce',
    },
    {
      fr: 'Volaille, sauce champagne et truffe',
      detailFr: 'Pommes dauphine truffées',
      en: 'Poultry, champagne sauce and black truffle',
      detailEn: 'Truffled pommes dauphine',
    },
    {
      fr: 'Assortiment de fromages affinés de nos régions',
      en: 'A selection of mature regional cheeses',
    },
    {
      fr: 'Tarte soufflée au chocolat, glace à la vanille Pompona',
      en: 'Chocolate soufflé tart, Pompona vanilla ice cream',
    },
  ],
}

export function isNewYearMenuUpcoming(now = Date.now()) {
  return Number(now) < Date.parse(newYearMenu.promotionEndsAt)
}

export function formatNewYearDate(locale = 'fr') {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Paris',
  }).format(new Date(`${newYearMenu.date}T12:00:00+01:00`))
}
