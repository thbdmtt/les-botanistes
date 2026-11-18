import StatusPage from '@/components/StatusPage'

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Cette page est introuvable"
      description="Retrouvez la carte, les réservations et les informations pratiques du restaurant depuis l’accueil."
    />
  )
}
