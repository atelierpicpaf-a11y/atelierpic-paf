// <details>/<summary> natifs : la réponse reste dans le HTML serveur (cohérence avec le schema FAQPage),
// l'ouverture se fait sans JS. Rotation du "+" et masquage du marqueur natif : .faq-item dans globals.css.
interface FaqItemProps { q: string; r: string }
export function FaqItem({ q, r }: FaqItemProps) {
  return (
    <details className="card faq-item" style={{ padding:'18px 24px' }}>
      <summary style={{ display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', textAlign:'left', cursor:'pointer' }}>
        <span className="h-fredoka" style={{ fontSize:17, color:'var(--framboise)' }}>{q}</span>
        <span className="faq-item__plus" aria-hidden="true" style={{ fontSize:22, color:'var(--framboise)', transition:'transform .2s' }}>+</span>
      </summary>
      <p style={{ margin:'12px 0 0', fontSize:15, opacity:.85, lineHeight:1.6 }}>{r}</p>
    </details>
  )
}
