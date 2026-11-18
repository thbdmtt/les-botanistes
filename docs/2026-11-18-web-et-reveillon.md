# Évolutions du site — 18 novembre 2026

Le visiteur découvre le menu du réveillon depuis l’accueil, la carte ou la réservation, lit le détail du dîner et appelle le restaurant pour réserver. Les réservations ordinaires restent disponibles via le module TheFork.

## Source du menu

Document fourni : `31 DECEMBRE 2026.docx`. Son titre interne mentionnait 2027 ; le propriétaire a confirmé le **31 décembre 2026** dans la conversation. Tarif : **135 € hors boissons**. Les six étapes et leurs textes français et anglais sont repris dans `data/new-year-menu.js`, avec des corrections de formulation de la traduction anglaise. Aucun horaire, acompte ou accord de vins n’a été ajouté.

La mise en avant cesse à minuit à Paris le 1er janvier 2027. Les pages concernées et le sitemap sont revalidés toutes les heures. La page datée reste accessible comme archive et retire les appels à réserver ce dîner après cette date.

## Conseils Google appliqués

Le dépôt [modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) contient les sources des guides, et renvoie vers leur version distribuée [modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance). Il sert de référence de développement ; aucune dépendance n’a été ajoutée au site.

- [Priorité des images](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/performance/optimize-image-priority.md) : priorité haute conservée pour la photo principale et `sizes` recalculé pour ses deux colonnes. L’ancienne déclaration demandait environ deux fois la largeur réellement affichée sur ordinateur.
- [Lisibilité des textes](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/visual-design/improve-text-layout-and-legibility.md) : `text-wrap: balance` pour les titres et `pretty` sur les textes éditoriaux. Les navigateurs non compatibles conservent le retour à la ligne habituel.
- Accès direct au contenu pour le clavier ; révélations lisibles sans JavaScript et immédiatement visibles avec la réduction des animations.
- Accueil et réservation rendus côté serveur, avec leurs petits composants interactifs conservés côté client. La page du réveillon n’ajoute pas de bibliothèque d’animation ou de script tiers.
- Métadonnées du nouveau menu et URL canonique fondées sur le domaine public `www.lesbotanistes.com`.

Mesure initiale dans Chrome, sans limitation réseau ou processeur : accueil LCP **353 ms**, CLS **0,00** ; réservation LCP **535 ms**, CLS **0,00**. Ce sont des mesures de laboratoire ponctuelles, sans données utilisateurs CrUX disponibles. Le site étant déjà rapide dans ces conditions, aucun gain de temps général n’est promis.

## Réglage TheFork restant

Le site peut habiller le cadre du module, proposer une ouverture dans une autre fenêtre et offrir une réservation téléphonique. Il ne peut pas modifier les styles du document TheFork chargé sur un autre domaine.

La [documentation TheFork sur le Design Kit](https://www.theforkmanager.com/en/blog/thefork-tools/theforks-revamped-booking-module-fresh-approach-your-restaurant) confirme que les couleurs, les polices et les dimensions du module se personnalisent dans TheFork Manager. L’accès à ces réglages dépend du compte et de son offre. Aucun connecteur TheFork n’a été trouvé dans les outils disponibles.

Palette à appliquer dans le Design Kit du widget existant :

| Élément | Couleur |
| --- | --- |
| Fond / surface claire | `#FFFCF7` ou `#F8F5EE` |
| Texte principal | `#28251F` |
| Texte secondaire | `#686052` |
| Boutons et accent | `#806035` |
| Texte des boutons | `#F8F5EE` |
| Bordures | `#DED5C7` |

L’identifiant du widget et son URL restent inchangés. Aucun paramètre de thème non documenté, inversion de couleurs ou modification du fonctionnement des réservations n’a été appliqué. L’automatisation de contrôle est bloquée par la protection antibot de TheFork ; elle ne peut pas valider l’apparence interne ni effectuer une réservation réelle.
