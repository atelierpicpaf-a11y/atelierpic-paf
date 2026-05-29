'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

export interface RelayPoint {
  id: string
  nom: string
  adresse: string
  cp: string
  ville: string
}

interface Props {
  onSelect: (point: RelayPoint | null) => void
  codePostal?: string
}

// Code Enseigne Mondial Relay. DEMO = "BDTEST".
// TODO : remplacer par le vrai code via NEXT_PUBLIC_MONDIAL_RELAY_BRAND quand Ludivine aura son compte pro.
const MR_BRAND = process.env.NEXT_PUBLIC_MONDIAL_RELAY_BRAND || 'BDTEST'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any

export function MondialRelayPicker({ onSelect, codePostal }: Props) {
  const [jqueryLoaded, setJqueryLoaded] = useState(false)
  const [leafletLoaded, setLeafletLoaded] = useState(false)
  const [pluginLoaded, setPluginLoaded] = useState(false)
  const [ready, setReady] = useState(false)
  const initialized = useRef(false)

  useEffect(() => {
    if (!jqueryLoaded || !leafletLoaded || !pluginLoaded) return
    if (initialized.current) return
    if (typeof window === 'undefined' || !window.$ || !window.$.fn?.MR_ParcelShopPicker) return

    initialized.current = true
    const $ = window.$
    try {
      $('#mr-widget').MR_ParcelShopPicker({
        Target: '#mr-selected-id',
        Brand: MR_BRAND,
        Country: 'FR',
        PostCode: codePostal || '',
        ColLivMod: '24R', // 24R = Point Relais standard
        NbResults: 7,
        Theme: 'mondialrelay',
        OnParcelShopSelected: (data: { ID: string; Nom: string; Adresse1: string; CP: string; Ville: string }) => {
          if (!data || !data.ID) {
            onSelect(null)
            return
          }
          onSelect({
            id: data.ID,
            nom: data.Nom || '',
            adresse: data.Adresse1 || '',
            cp: data.CP || '',
            ville: data.Ville || '',
          })
        },
      })
      setReady(true)
    } catch (e) {
      console.error('[MondialRelay] init error', e)
    }
  }, [jqueryLoaded, leafletLoaded, pluginLoaded, codePostal, onSelect])

  return (
    <div>
      {/* jQuery 2.2.4 (requis par le widget MR) */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => setJqueryLoaded(true)}
      />
      {/* Leaflet (carte) */}
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <Script
        src="https://unpkg.com/leaflet/dist/leaflet.js"
        strategy="afterInteractive"
        onLoad={() => setLeafletLoaded(true)}
      />
      {/* Plugin Mondial Relay (chargé après jQuery) */}
      {jqueryLoaded && (
        <Script
          src="https://widget.mondialrelay.com/parcelshop-picker/jquery.plugin.mondialrelay.parcelshoppicker.min.js"
          strategy="afterInteractive"
          onLoad={() => setPluginLoaded(true)}
        />
      )}

      {!ready && (
        <p style={{ fontSize: 14, opacity: 0.7, padding: '12px 0' }}>
          Chargement de la carte des points relais…
        </p>
      )}

      {/* Conteneur du widget + input caché qui reçoit l'ID du point relais */}
      <div
        id="mr-widget"
        style={{
          minHeight: ready ? 480 : 0,
          borderRadius: 16,
          overflow: 'hidden',
          border: ready ? '2px solid rgba(200,54,92,.18)' : 'none',
        }}
      />
      <input type="hidden" id="mr-selected-id" />
    </div>
  )
}
