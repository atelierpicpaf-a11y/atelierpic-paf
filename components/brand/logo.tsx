import Image from 'next/image'

interface LogoProps {
  width?: number
  variant?: 'color' | 'creme'
  className?: string
}

export function Logo({ width = 160, variant = 'color', className = '' }: LogoProps) {
  return (
    <Image
      src={variant === 'color' ? '/images/brand/logo-color.png' : '/images/brand/logo-creme.png'}
      alt="L'atelier Pic & Paf"
      width={width}
      height={width}
      className={className}
      style={{ objectFit: 'contain', display: 'block' }}
      priority
    />
  )
}
