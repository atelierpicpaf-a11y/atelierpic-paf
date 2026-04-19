import Image from 'next/image'
interface FeeProps { size?: number; className?: string }
export function Fee({ size = 160, className = '' }: FeeProps) {
  return (
    <div className={`floaty ${className}`} style={{ width: size, height: size, position:'relative', flexShrink: 0 }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle, rgba(168,213,204,.4) 0%, transparent 70%)', borderRadius:'50%' }} />
      <Image src="/images/brand/fee.png" alt="Fée couture" width={size} height={size} style={{ objectFit:'contain', position:'relative' }} priority />
    </div>
  )
}
