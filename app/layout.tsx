import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: { template: '%s | L\'atelier Pic & Paf', default: 'L\'atelier Pic & Paf — Ateliers couture créatifs en Vienne et Deux-Sèvres' },
  description: 'Ateliers couture enfants dès 6 ans, journées créatives et retraites pour adultes en Vienne (86) et Deux-Sèvres (79). Deviens toi aussi une magicienne !',
  metadataBase: new URL('https://atelierpicpaf.fr'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Pacifico&family=Caveat:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
