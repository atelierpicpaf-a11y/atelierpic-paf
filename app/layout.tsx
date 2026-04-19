import type { Metadata } from 'next'
import { Fredoka, Pacifico, Caveat, Inter } from 'next/font/google'
import '@/styles/globals.css'

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-fredoka' })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' })
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-caveat' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: { template: '%s | L\'atelier Pic & Paf', default: 'L\'atelier Pic & Paf — Ateliers couture créatifs en Vienne et Deux-Sèvres' },
  description: 'Ateliers couture enfants dès 6 ans, journées créatives et retraites pour adultes en Vienne (86) et Deux-Sèvres (79). Deviens toi aussi une magicienne !',
  metadataBase: new URL('https://atelierpicpaf.fr'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fredoka.variable} ${pacifico.variable} ${caveat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
