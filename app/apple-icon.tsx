import { ImageResponse } from 'next/og'

// Next.js convention : app/apple-icon.tsx génère l'apple-touch-icon (180×180 PNG)
// automatiquement référencé dans le <head> de toutes les pages.

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#C8365C',
          borderRadius: 40,
          position: 'relative',
          fontFamily: 'ui-rounded, "Nunito", "Quicksand", system-ui, sans-serif',
        }}
      >
        {/* Cadre crème intérieur — écho du sticker-title */}
        <div
          style={{
            position: 'absolute',
            inset: 10,
            border: '6px solid #FBF4E4',
            borderRadius: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 130,
              fontWeight: 700,
              color: '#FBF4E4',
              lineHeight: 1,
              letterSpacing: -3,
              marginTop: -6,
            }}
          >
            P
          </div>
        </div>
        {/* Point de couture menthe */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            right: 30,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#A8D5CC',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
