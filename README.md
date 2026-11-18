# Les Botanistes

Prototype fonctionnel d’un site vitrine multilingue pour **Les Botanistes**, restaurant de cuisine française à Paris.

[Voir le site](https://www.lesbotanistes.com)

## Intention

Présenter l’établissement avec une identité plus éditoriale, rendre les informations essentielles immédiatement accessibles et permettre au restaurant de maintenir sa carte sans intervention technique.

## Réponse

- parcours responsive centré sur la découverte, la carte et la réservation ;
- contenus disponibles en plusieurs langues ;
- carte pilotée depuis Google Sheets ;
- formulaires de contact et de réservation ;
- métadonnées, sitemap, données structurées et URLs localisées pour le référencement ;
- composants et configuration séparés du contenu métier.

## Choix techniques

Next.js, TypeScript, Tailwind CSS, `next-intl`, Google Sheets API et Resend.

```bash
npm install
npm run dev
```

Le projet nécessite des variables d’environnement pour Google Sheets et Resend. Aucune valeur sensible ne doit être ajoutée au dépôt.

## Identité visuelle

Le site utilise une palette claire fixe : ivoire `#F8F5EE`, bronze `#806035` pour les textes et les actions, et champagne `#E0CBA6` sur les sections foncées. Les couleurs partagées sont définies dans `tailwind.config.js`.

La photographie de la salle est utilisée à l’accueil et pour la privatisation. Inter et Playfair Display sont hébergées localement au format WOFF2 ; leurs licences sont conservées dans `public/fonts/`.

L’URL canonique par défaut est `https://www.lesbotanistes.com`. La variable `NEXT_PUBLIC_SITE_URL` permet de la remplacer si nécessaire.

## Réveillon du 31 décembre 2026

Le menu de fête est présenté sur `/reveillon-2026`, avec un accès depuis l’accueil, la carte et la réservation. Son contenu bilingue, sa date et son tarif de 135 € hors boissons sont centralisés dans `data/new-year-menu.js`. La réservation de ce dîner se fait par téléphone, conformément au document du restaurant.

La promotion saisonnière et les liens du sitemap sont retirés après minuit à Paris le 1er janvier 2027, au prochain renouvellement du cache (au plus une heure). La page du menu reste consultable avec une mention d’archive et sans invitation à réserver ce dîner.

Le cadre du module TheFork suit les couleurs du site. Les couleurs à l’intérieur de son iframe se règlent dans le Design Kit de TheFork Manager ; voir `docs/2026-11-18-web-et-reveillon.md`.

## Statut

Prototype public destiné à démontrer une approche complète : identité visuelle, expérience mobile, contenu administrable et visibilité locale.

Projet propriétaire — tous droits réservés.
