"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, 
  Search, 
  Filter,
  Download,
  Eye,
  Layers,
  Mountain,
  Droplets,
  Sun,
  Calendar
} from "lucide-react"
import CustomRadarChart from "@/components/charts/RadarChart"

export default function FingerprintsPage() {
  const [selectedSite, setSelectedSite] = useState<string | null>(null)

  const sites = [
    {
      id: "BORDER-001",
      name: "Nile Valley Settlement",
      type: "Settlement",
      phase: "Predynastic",
      c14: "3200-3100 BCE",
      location: { lat: 25.7, lng: 32.6 },
      terrain: "River Valley",
      elevation: 85,
      nileDistance: 0.5,
      ndvi: 0.72,
      similarity: 92,
    },
    {
      id: "BORDER-002",
      name: "Desert Outpost",
      type: "Fortification",
      phase: "Middle Kingdom",
      c14: "2050-1800 BCE",
      location: { lat: 26.2, lng: 33.1 },
      terrain: "Desert Plateau",
      elevation: 320,
      nileDistance: 15.2,
      ndvi: 0.18,
      similarity: 87,
    },
    {
      id: "BORDER-003",
      name: "Oasis Temple Complex",
      type: "Religious",
      phase: "New Kingdom",
      c14: "1550-1070 BCE",
      location: { lat: 24.8, lng: 31.9 },
      terrain: "Oasis",
      elevation: 120,
      nileDistance: 8.3,
      ndvi: 0.65,
      similarity: 95,
    },
    {
      id: "BORDER-004",
      name: "Agricultural Community",
      type: "Settlement",
      phase: "Ptolemaic",
      c14: "305-30 BCE",
      location: { lat: 25.4, lng: 32.2 },
      terrain: "Floodplain",
      elevation: 45,
      nileDistance: 0.8,
      ndvi: 0.81,
      similarity: 88,
    },
    {
      id: "BORDER-005",
      name: "Trade Route Station",
      type: "Commercial",
      phase: "Roman",
      c14: "30 BCE-395 CE",
      location: { lat: 26.8, lng: 33.5 },
      terrain: "Desert Corridor",
      elevation: 280,
      nileDistance: 22.1,
      ndvi: 0.12,
      similarity: 79,
    },
  ]

  const fingerprintCategories = [
    {
      name: "Archaeological",
      icon: MapPin,
      color: "bg-blue-500",
      features: [
        { name: "Site Type", value: "Settlement", weight: 25 },
        { name: "Historical Phase", value: "Predynastic", weight: 20 },
        { name: "C14 Range", value: "3200-3100 BCE", weight: 15 },
      ],
    },
    {
      name: "Geographical",
      icon: Mountain,
      color: "bg-green-500",
      features: [
        { name: "Terrain Type", value: "River Valley", weight: 20 },
        { name: "Elevation", value: "85m", weight: 15 },
        { name: "Slope", value: "2.3°", weight: 10 },
      ],
    },
    {
      name: "Environmental",
      icon: Droplets,
      color: "bg-cyan-500",
      features: [
        { name: "Nile Distance", value: "0.5km", weight: 25 },
        { name: "Water Access", value: "Direct", weight: 20 },
      ],
    },
    {
      name: "Satellite",
      icon: Sun,
      color: "bg-orange-500",
      features: [
        { name: "NDVI", value: "0.72", weight: 20 },
        { name: "Land Cover", value: "Vegetated", weight: 15 },
        { name: "Surface Temp", value: "28°C", weight: 10 },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Archaeological Site Fingerprints</h1>
          <p className="text-slate-600 mt-1">
            Multidimensional profiles of known archaeological landscapes
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Site List</TabsTrigger>
          <TabsTrigger value="fingerprint">Fingerprint View</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sites.map((site) => (
              <Card 
                key={site.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedSite(site.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{site.name}</CardTitle>
                      <CardDescription className="mt-1">{site.id}</CardDescription>
                    </div>
                    <Badge className="bg-blue-500">{site.similarity}% Match</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-slate-500">Type</p>
                      <p className="font-medium">{site.type}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Phase</p>
                      <p className="font-medium">{site.phase}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Terrain</p>
                      <p className="font-medium">{site.terrain}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Elevation</p>
                      <p className="font-medium">{site.elevation}m</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <Badge variant="outline">{site.c14}</Badge>
                      <Badge variant="outline">NDVI: {site.ndvi}</Badge>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fingerprint" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Site Selection */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Select Site</CardTitle>
                <CardDescription>Choose a site to view its fingerprint</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {sites.map((site) => (
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
              </CardContent>
            </Card>

            {/* Fingerprint Display */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Site Fingerprint
                </CardTitle>
                <CardDescription>
                  {selectedSite 
                    ? `Multidimensional profile for ${sites.find(s => s.id === selectedSite)?.name}`
                    : "Select a site to view its fingerprint"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedSite ? (
                  <div className="space-y-6">
                    {/* Radar Chart */}
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <CustomRadarChart
                        data={[
                          { subject: "Archaeological", value: 82, fullMark: 100 },
                          { subject: "Geographical", value: 91, fullMark: 100 },
                          { subject: "Terrain", value: 75, fullMark: 100 },
                          { subject: "Environmental", value: 84, fullMark: 100 },
                          { subject: "Temporal", value: 67, fullMark: 100 },
                          { subject: "Spatial", value: 89, fullMark: 100 },
                        ]}
                        title={`🧬 Archaeological Fingerprint - ${sites.find(s => s.id === selectedSite)?.name}`}
                      />
                    </div>

                    {/* Detailed Features */}
                    {fingerprintCategories.map((category) => {
                      const Icon = category.icon
                      return (
                        <div key={category.name} className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${category.color}`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-semibold">{category.name} Features</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {category.features.map((feature) => (
                              <div
                                key={feature.name}
                                className="p-3 rounded-lg bg-slate-50 border border-slate-200"
                              >
                                <p className="text-xs text-slate-500">{feature.name}</p>
                                <p className="font-semibold text-sm mt-1">{feature.value}</p>
                                <p className="text-xs text-slate-400 mt-1">Weight: {feature.weight}%</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}

                    {/* Similar Locations */}
                    <div className="pt-4 border-t">
                      <h3 className="font-semibold mb-3">Similar Locations</h3>
                      <div className="space-y-2">
                        {[
                          { name: "Location A", similarity: 93, distance: "4.2 km" },
                          { name: "Location B", similarity: 88, distance: "7.1 km" },
                          { name: "Location C", similarity: 84, distance: "9.4 km" },
                          { name: "Location D", similarity: 81, distance: "11.2 km" },
                        ].map((location) => (
                          <div
                            key={location.name}
                            className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                          >
                            <div>
                              <p className="font-medium text-sm">{location.name}</p>
                              <p className="text-xs text-slate-500">{location.distance}</p>
                            </div>
                            <Badge variant="outline">{location.similarity}% similarity</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a site to view its fingerprint</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fingerprint Comparison</CardTitle>
              <CardDescription>Compare multiple sites side by side</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Site A</Label>
                  <Input placeholder="Select first site" />
                </div>
                <div className="space-y-2">
                  <Label>Site B</Label>
                  <Input placeholder="Select second site" />
                </div>
              </div>
              <Button className="mt-4">Compare Fingerprints</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
