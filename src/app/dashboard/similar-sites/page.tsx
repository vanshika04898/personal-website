"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Search, 
  MapPin, 
  ArrowRight,
  Percent,
  Layers
} from "lucide-react"

export default function SimilarSitesPage() {
  const [selectedSite, setSelectedSite] = useState<string>("BORDER-042")

  const knownSites = [
    { id: "BORDER-001", name: "Nile Valley Settlement" },
    { id: "BORDER-002", name: "Desert Outpost" },
    { id: "BORDER-003", name: "Oasis Temple Complex" },
    { id: "BORDER-004", name: "Agricultural Community" },
    { id: "BORDER-005", name: "Trade Route Station" },
    { id: "BORDER-042", name: "Predynastic Burial Ground" },
    { id: "BORDER-089", name: "Middle Kingdom Fort" },
  ]

  const similarLocations = [
    {
      id: "LOC-001",
      name: "Unexplored Sector 7A",
      similarity: 93,
      type: "Settlement",
      terrain: "River Valley",
      distance: 12.5,
    },
    {
      id: "LOC-002",
      name: "Unexplored Sector 12B",
      similarity: 89,
      type: "Settlement",
      terrain: "Floodplain",
      distance: 18.3,
    },
    {
      id: "LOC-003",
      name: "Unexplored Sector 19C",
      similarity: 84,
      type: "Settlement",
      terrain: "River Valley",
      distance: 25.7,
    },
    {
      id: "LOC-004",
      name: "Unexplored Sector 23D",
      similarity: 81,
      type: "Settlement",
      terrain: "Oasis Edge",
      distance: 31.2,
    },
    {
      id: "LOC-005",
      name: "Unexplored Sector 31E",
      similarity: 76,
      type: "Settlement",
      terrain: "Desert Corridor",
      distance: 42.8,
    },
  ]

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 90) return "bg-green-500"
    if (similarity >= 80) return "bg-blue-500"
    return "bg-yellow-500"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Similar Site Finder</h1>
        <p className="text-slate-600 mt-1">
          Find locations that resemble known archaeological sites
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Site Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Select Reference Site
            </CardTitle>
            <CardDescription>Choose a known site to find similar locations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label>Known Sites</Label>
              <div className="space-y-2">
                {knownSites.map((site) => (
                  <Button
                    key={site.id}
                    variant={selectedSite === site.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedSite(site.id)}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {site.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Similar Locations */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Similar Locations / Unexplored Areas
            </CardTitle>
            <CardDescription>
              Locations with characteristics similar to {knownSites.find(s => s.id === selectedSite)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {similarLocations.map((location, index) => (
                <div
                  key={location.id}
                  className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-600">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold">{location.name}</h3>
                        <p className="text-sm text-slate-500">{location.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getSimilarityColor(location.similarity)}>
                        {location.similarity}% similar
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t">
                    <div>
                      <p className="text-xs text-slate-500">Type</p>
                      <p className="text-sm font-medium">{location.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Terrain</p>
                      <p className="text-sm font-medium">{location.terrain}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Distance</p>
                      <p className="text-sm font-medium">{location.distance} km</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-3">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View on Map
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            How Similarity Analysis Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm">1. Select Site</h3>
              <p className="text-xs text-slate-500 mt-1">Choose a known archaeological site as reference</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <Layers className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-sm">2. Extract Fingerprint</h3>
              <p className="text-xs text-slate-500 mt-1">Analyze multidimensional characteristics</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm">3. Scan Locations</h3>
              <p className="text-xs text-slate-500 mt-1">Search unexplored areas for similar patterns</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <Percent className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-sm">4. Rank Results</h3>
              <p className="text-xs text-slate-500 mt-1">Display locations by similarity score</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
