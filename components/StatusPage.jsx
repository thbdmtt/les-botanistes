import Link from 'next/link'

export default function StatusPage({ code, title, description, children }) {
  return (
    <html lang="fr">
      <body className="font-sans min-h-screen bg-background text-foreground antialiased">
        <main className="min-h-screen flex items-center justify-center py-16">
          <div className="container-narrow text-center">
            <Link href="/" className="inline-block font-serif text-2xl mb-12">
              Les <span className="text-gold">Botanistes</span>
            </Link>
            <p className="text-sm tracking-widest text-muted-foreground mb-4">{code}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-balance mb-6">
              {title}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="btn-primary">
                Revenir à l’accueil
              </Link>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
