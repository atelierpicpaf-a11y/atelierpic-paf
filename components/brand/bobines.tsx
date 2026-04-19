import Image from 'next/image'
interface BobinesProps { size?: number; className?: string }
export function Bobines({ size = 120, className = '' }: BobinesProps) {
  return (
    <div className={`wiggle ${className}`} style={{ width: size, height: size, flexShrink: 0 }}>
      <Image src="/images/brand/bobines.png" alt="Bobines de fil" width={size} height={size} style={{ objectFit:'contain' }} />
    </div>
  )
}
