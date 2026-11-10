import { BUSINESS_IDENTITY } from '@/lib/seo/json-ld'

/** Liens vers Instagram : le reel de l'actu (s'il existe) et le compte de l'atelier. */
export function InstagramLinks({ reelUrl }: { reelUrl?: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, margin: '0 0 30px' }}>
      {reelUrl && (
        <a href={reelUrl} target="_blank" rel="noopener noreferrer" className="cta-pill">
          📸 Voir le reel sur Instagram
        </a>
      )}
      <a href={BUSINESS_IDENTITY.instagram} target="_blank" rel="noopener noreferrer" className="cta-ghost">
        Suivre @atelier_picpaf
      </a>
    </div>
  )
}
