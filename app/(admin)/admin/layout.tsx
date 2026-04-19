import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { template: '%s | Admin Pic & Paf', default: 'Admin | L\'atelier Pic & Paf' },
  robots: { index: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight:'100vh', background:'var(--creme-pale)' }}>
      {children}
    </div>
  )
}
