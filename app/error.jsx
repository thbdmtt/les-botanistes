'use client'

import StatusPage from '@/components/StatusPage'

export default function Error({ reset }) {
  return (
    <StatusPage
      code="Une erreur est survenue"
      title="Cette page ne peut pas s’afficher"
      description="Veuillez réessayer dans quelques instants ou revenir à l’accueil du restaurant."
    >
      <button type="button" onClick={reset} className="btn-ghost">
        Réessayer
      </button>
    </StatusPage>
  )
}
