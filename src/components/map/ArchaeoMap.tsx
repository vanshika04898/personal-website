"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default marker icons in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
})

interface Site {
  id: string
  name: string
  lat: number
  lng: number
  type: "known" | "high-potential" | "medium-potential" | "low-potential" | "anomaly"
  potential?: number
  details?: string
}

interface ArchaeoMapProps {
  sites?: Site[]
  center?: [number, number]
  zoom?: number
  onSiteClick?: (site: Site) => void
  showLayers?: {
    known?: boolean
    highPotential?: boolean
    mediumPotential?: boolean
    lowPotential?: boolean
    anomalies?: boolean
  }
}

const createCustomIcon = (type: Site["type"]) => {
  const colors = {
    known: "#22c55e",
    "high-potential": "#ef4444",
    "medium-potential": "#f97316",
    "low-potential": "#eab308",
    anomaly: "#a855f7",
  }

  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background-color: ${colors[type]};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })
}

function MapController({ center, zoom }: { center?: [number, number]; zoom?: number }) {
  const map = useMap()

  useEffect(() => {
    if (center) {
      map.setView(center, zoom || 10)
    }
  }, [center, zoom, map])

  return null
}

export default function ArchaeoMap({
  sites = [],
  center = [22.5, 32],
  zoom = 10,
  onSiteClick,
  showLayers = {
    known: true,
    highPotential: true,
    mediumPotential: true,
    lowPotential: true,
    anomalies: true,
  },
}: ArchaeoMapProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
        <div className="text-slate-500">Loading map...</div>
      </div>
    )
  }

  const filteredSites = sites.filter((site) => {
    switch (site.type) {
      case "known":
        return showLayers.known
      case "high-potential":
        return showLayers.highPotential
      case "medium-potential":
        return showLayers.mediumPotential
      case "low-potential":
        return showLayers.lowPotential
      case "anomaly":
        return showLayers.anomalies
      default:
        return true
    }
  })

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController center={center} zoom={zoom} />
      
      {filteredSites.map((site) => (
        <Marker
          key={site.id}
          position={[site.lat, site.lng]}
          icon={createCustomIcon(site.type)}
          eventHandlers={{
            click: () => onSiteClick?.(site),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-sm">{site.name}</h3>
              <p className="text-xs text-slate-600 mt-1">
                Type: {site.type.replace("-", " ")}
              </p>
              {site.potential && (
                <p className="text-xs text-slate-600">
                  Potential: {site.potential}%
                </p>
              )}
              {site.details && (
                <p className="text-xs text-slate-600 mt-1">{site.details}</p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
