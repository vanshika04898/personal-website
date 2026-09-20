"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import ArchaeoMap from "@/components/map/ArchaeoMap"
import { MapPin, Layers, Info } from "lucide-react"

export default function ExplorerPage() {
  const [selectedSite, setSelectedSite] = useState<any>(null)
  const [layers, setLayers] = useState({
    known: true,
    highPotential: true,
    mediumPotential: true,
    lowPotential: true,
    anomalies: true,
    satellite: false,
    terrain: false,
    water: true,
  })

  const sampleSites = [
    { id: "1", name: "BSC-042", lat: 22.5, lng: 32.0, type: "known" as const, potential: undefined, siteType: "Settlement", macrotype: "Urban", phase: "Middle Kingdom", c14: "1800-1650 BCE" },
    { id: "2", name: "BSC-089", lat: 22.6, lng: 32.1, type: "known" as const, potential: undefined, siteType: "Fortress", macrotype: "Military", phase: "New Kingdom", c14: "1550-1070 BCE" },
    { id: "3", name: "Area 47", lat: 22.4, lng: 32.2, type: "high-potential" as const, potential: 89, siteType: "Unknown", macrotype: "Unknown", phase: "Unknown", c14: "Unknown" },
    { id: "4", name: "Area 21", lat: 22.7, lng: 31.9, type: "high-potential" as const, potential: 84, siteType: "Unknown", macrotype: "Unknown", phase: "Unknown", c14: "Unknown" },
    { id: "5", name: "Area 83", lat: 22.3, lng: 31.8, type: "medium-potential" as const, potential: 78, siteType: "Unknown", macrotype: "Unknown", phase: "Unknown", c14: "Unknown" },
    { id: "6", name: "BSC-017", lat: 22.8, lng: 32.3, type: "anomaly" as const, potential: undefined, siteType: "Settlement", macrotype: "Urban", phase: "Old Kingdom", c14: "2686-2181 BCE" },
  ]

  const handleSiteClick = (site: any) => {
    setSelectedSite(site)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Archaeological Explorer</h1>
        <p className="text-slate-600 mt-1">
          Explore the BORDERSCAPE region with interactive map layers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Layer Controls */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Map Layers
              </CardTitle>
              <CardDescription>
                Toggle visibility of different data layers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="known">Known Sites</Label>
                <Switch
                  id="known"
                  checked={layers.known}
                  onCheckedChange={(checked) => setLayers({ ...layers, known: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="highPotential">High Potential</Label>
                <Switch
                  id="highPotential"
                  checked={layers.highPotential}
                  onCheckedChange={(checked) => setLayers({ ...layers, highPotential: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="mediumPotential">Medium Potential</Label>
                <Switch
                  id="mediumPotential"
                  checked={layers.mediumPotential}
                  onCheckedChange={(checked) => setLayers({ ...layers, mediumPotential: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="lowPotential">Low Potential</Label>
                <Switch
                  id="lowPotential"
                  checked={layers.lowPotential}
                  onCheckedChange={(checked) => setLayers({ ...layers, lowPotential: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="anomalies">Anomalies</Label>
                <Switch
                  id="anomalies"
                  checked={layers.anomalies}
                  onCheckedChange={(checked) => setLayers({ ...layers, anomalies: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="satellite">Satellite Imagery</Label>
                <Switch
                  id="satellite"
                  checked={layers.satellite}
                  onCheckedChange={(checked) => setLayers({ ...layers, satellite: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="terrain">Terrain</Label>
                <Switch
                  id="terrain"
                  checked={layers.terrain}
                  onCheckedChange={(checked) => setLayers({ ...layers, terrain: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="water">Nile / Water</Label>
                <Switch
                  id="water"
                  checked={layers.water}
                  onCheckedChange={(checked) => setLayers({ ...layers, water: checked })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Site Info Panel */}
          {selectedSite && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {selectedSite.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Site Type:</span>
                  <span className="text-sm font-medium">{selectedSite.siteType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Macrotype:</span>
                  <span className="text-sm font-medium">{selectedSite.macrotype}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Phase:</span>
                  <span className="text-sm font-medium">{selectedSite.phase}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">C14 Dating:</span>
                  <span className="text-sm font-medium">{selectedSite.c14}</span>
                </div>
                {selectedSite.potential && (
                  <div className="pt-2 border-t">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Potential:</span>
                      <span className="text-sm font-medium">{selectedSite.potential}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${selectedSite.potential}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-4" variant="outline">
                      <Info className="w-4 h-4 mr-2" />
                      View Full Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedSite.name} - Site Details</DialogTitle>
                      <DialogDescription>
                        Comprehensive archaeological site information
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-slate-900">Coordinates</p>
                          <p className="text-sm text-slate-600">{selectedSite.lat}, {selectedSite.lng}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Classification</p>
                          <Badge variant="outline">{selectedSite.type.replace("-", " ")}</Badge>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 mb-2">🧬 Site Fingerprint</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs w-24">Terrain</span>
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "82%" }}></div>
                            </div>
                            <span className="text-xs">82%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs w-24">Water</span>
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "91%" }}></div>
                            </div>
                            <span className="text-xs">91%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs w-24">Environment</span>
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "76%" }}></div>
                            </div>
                            <span className="text-xs">76%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs w-24">Spatial</span>
                            <div className="flex-1 bg-slate-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "84%" }}></div>
                            </div>
                            <span className="text-xs">84%</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full">Find Similar Locations</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Main Map */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>BORDERSCAPE Region</CardTitle>
              <CardDescription>
                Interactive archaeological map with layered data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] rounded-lg overflow-hidden border border-slate-200">
                <ArchaeoMap
                  sites={sampleSites}
                  onSiteClick={handleSiteClick}
                  showLayers={{
                    known: layers.known,
                    highPotential: layers.highPotential,
                    mediumPotential: layers.mediumPotential,
                    lowPotential: layers.lowPotential,
                    anomalies: layers.anomalies,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
