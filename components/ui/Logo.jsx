import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export default function Logo({ className, showTagline = false, inverted = false }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex flex-col items-center transition-opacity duration-300 hover:opacity-80',
        className
      )}
    >
      {/* Nom du restaurant */}
      <span className={cn('font-serif text-xl sm:text-2xl tracking-wide', inverted ? 'text-blanc' : 'text-foreground')}>
        Les{' '}
        <span className={inverted ? 'text-gold-light' : 'text-gold'}>Botanistes</span>
      </span>

      {/* Tagline optionnelle */}
      {showTagline && (
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-sans">
          Cuisine traditionnelle française
        </span>
      )}
    </Link>
  )
}
