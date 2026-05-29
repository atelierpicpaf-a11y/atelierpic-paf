'use client'
import { useRef, useState } from 'react'
import { uploadProduitImage } from '@/app/(admin)/admin/actions'

// Redimensionne l'image côté navigateur (max 1400px, jpeg 0.85) avant upload :
// fichiers légers, uploads rapides, stockage propre.
async function resizeImage(file: File, maxSize = 1400, quality = 0.85): Promise<Blob> {
  if (!file.type.startsWith('image/') || file.type === 'image/gif') return file
  const dataUrl = await new Promise<string>((res, rej) => {
    const fr = new FileReader()
    fr.onload = () => res(fr.result as string)
    fr.onerror = rej
    fr.readAsDataURL(file)
  })
  const img = await new Promise<HTMLImageElement>((res, rej) => {
    const i = new Image()
    i.onload = () => res(i)
    i.onerror = rej
    i.src = dataUrl
  })
  let { width, height } = img
  if (width > maxSize || height > maxSize) {
    if (width >= height) {
      height = Math.round((height * maxSize) / width)
      width = maxSize
    } else {
      width = Math.round((width * maxSize) / height)
      height = maxSize
    }
  }
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return file
  ctx.drawImage(img, 0, 0, width, height)
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/jpeg', quality))
  return blob || file
}

export function ImageUploader({
  value,
  onUploaded,
  label = 'photo',
}: {
  value?: string | null
  onUploaded: (url: string) => void
  label?: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setError(null)
    setLoading(true)
    try {
      const resized = await resizeImage(file)
      const fd = new FormData()
      const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '-')
      fd.append('file', resized, safeName.endsWith('.jpg') || safeName.endsWith('.jpeg') ? safeName : safeName.replace(/\.[^.]+$/, '') + '.jpg')
      const res = await uploadProduitImage(fd)
      if ('error' in res) {
        setError(res.error)
      } else {
        onUploaded(res.url)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur upload')
    } finally {
      setLoading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 10, border: '2px solid var(--creme)' }} />
      ) : (
        <div style={{ width: 64, height: 64, borderRadius: 10, background: 'var(--creme)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, opacity: 0.5 }}>🖼️</div>
      )}
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={loading}
        style={{ padding: '8px 16px', borderRadius: 8, border: '1.5px solid var(--framboise)', background: '#fff', color: 'var(--framboise)', fontSize: 13, cursor: loading ? 'wait' : 'pointer', fontFamily: 'var(--font-fredoka)' }}
      >
        {loading ? 'Envoi…' : value ? `Changer la ${label}` : `Ajouter une ${label}`}
      </button>
      {error && <span style={{ color: '#b00', fontSize: 12.5, maxWidth: 260 }}>{error}</span>}
    </div>
  )
}
