/**
 * Composant serveur qui émet un bloc <script type="application/ld+json">.
 *
 * Accepte un objet unique ou un tableau pour injecter plusieurs graphs
 * (ex : LocalBusiness + WebSite + BreadcrumbList sur une même page).
 *
 * On n'utilise PAS next/script : pour le JSON-LD, un <script> inline dans
 * le body est suffisant et évite les re-exécutions côté client.
 */

type JsonLdData = Record<string, unknown> | Record<string, unknown>[]

interface JsonLdProps {
  data: JsonLdData
  /**
   * Optionnel — identifiant pour de-duper si le même graph est injecté
   * à plusieurs endroits. Par défaut, Next.js dédoublonne déjà par contenu.
   */
  id?: string
}

export function JsonLd({ data, id }: JsonLdProps) {
  const payload = Array.isArray(data)
    ? { '@context': 'https://schema.org', '@graph': data.map(stripContext) }
    : data
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}

function stripContext(obj: Record<string, unknown>): Record<string, unknown> {
  // Dans un @graph, on retire les @context individuels — un seul en tête suffit.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { '@context': _ctx, ...rest } = obj as Record<string, unknown>
  return rest
}
