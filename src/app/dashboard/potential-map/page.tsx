"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  MapPin, 
  Search, 
  Filter,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Layers,
  Eye,
  Download
} from "lucide-react"

export default function PotentialMapPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [filterPriority, setFilterPriority] = useState<string>("all")

  const potentialAreas = [
    {
      id: "AREA-001",
      name: "Sector 7 - Eastern Ridge",
      potential: 91,
      priority: "high",
      confidence: 87,
      location: { lat: 26.1, lng: 33.2 },
      terrainSimilarity: 94,
      environmentalSimilarity: 88,
      spatialPattern: 92,
      historicalEvidence: 85,
      reasons: [
        "Similar terrain to 14 known sites",
        "Similar distance to Nile",
        "Located inside high-density spatial zone",
        "Similar environmental characteristics",
      ],
    },
    {
      id: "AREA-002",
      name: "Sector 12 - Oasis Edge",
      potential: 78,
      priority: "medium",
      confidence: 72,
      location: { lat: 25.3, lng: 32.8 },
      terrainSimilarity: 81,
      environmentalSimilarity: 79,
      spatialPattern: 75,
      historicalEvidence: 70,
      reasons: [
        "Moderate terrain similarity",
        "Proximity to water source",
        "Historical settlement patterns",
      ],
    },
    {
      id: "AREA-003",
      name: "Sector 19 - Desert Corridor",
      potential: 43,
      priority: "low",
      confidence: 65,
      location: { lat: 27.2, lng: 34.1 },
      terrainSimilarity: 55,
      environmentalSimilarity: 48,
      spatialPattern: 42,
      historicalEvidence: 38,
      reasons: [
        "Limited environmental similarity",
        "Low historical evidence",
        "Remote location",
      ],
    },
    {
      id: "AREA-004",
      name: "Sector 23 - River Bend",
      potential: 87,
      priority: "high",
      confidence: 84,
      location: { lat: 25.8, lng: 32.4 },
      terrainSimilarity: 91,
      environmentalSimilarity: 89,
      spatialPattern: 85,
      historicalEvidence: 82,
      reasons: [
        "High terrain similarity to known sites",
        "Excellent water access",
        "Strong spatial clustering",
        "Rich historical context",
      ],
    },
    {
      id: "AREA-005",
      name: "Sector 31 - Plateau Edge",
      potential: 65,
      priority: "medium",
      confidence: 68,
      location: { lat: 26.5, lng: 33.7 },
      terrainSimilarity: 72,
      environmentalSimilarity: 65,
      spatialPattern: 68,
      historicalEvidence: 58,
      reasons: [
        "Moderate landscape similarity",
        "Some historical indicators",
        "Accessible terrain",
      ],
    },
  ]

  const filteredAreas = filterPriority === "all" 
    ? potentialAreas 
    : potentialAreas.filter(area => area.priority === filterPriority)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500"
      case "medium": return "bg-yellow-500"
      case "low": return "bg-green-500"
      default: return "bg-slate-500"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high": return <Badge className="bg-red-500">🔴 High Priority</Badge>
      case "medium": return <Badge className="bg-yellow-500">🟠 Medium Priority</Badge>
      case "low": return <Badge className="bg-green-500">🟢 Low Priority</Badge>
      default: return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Archaeological Potential Map</h1>
          <p className="text-slate-600 mt-1">
            Identify and prioritize unexplored locations with similar characteristics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Map
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Total Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{potentialAreas.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {potentialAreas.filter(a => a.priority === "high").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Medium Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {potentialAreas.filter(a => a.priority === "medium").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Low Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {potentialAreas.filter(a => a.priority === "low").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Interactive Potential Map
            </CardTitle>
            <CardDescription>
              Click on areas to view detailed analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-600 font-medium">Interactive Map</p>
                <p className="text-sm text-slate-500 mt-1">
                  GIS integration with Leaflet/Mapbox
                </p>
                <div className="flex gap-2 justify-center mt-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-xs">High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-xs">Medium</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs">Low</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Area List */}
        <Card>
          <CardHeader>
            <CardTitle>Potential Areas</CardTitle>
            <CardDescription>Ranked by archaeological potential</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <Label>Filter by Priority</Label>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={filterPriority === "all" ? "default" : "outline"}
                  onClick={() => setFilterPriority("all")}
                >
                  All
                </Button>
                <Button
                  size="sm"
                  variant={filterPriority === "high" ? "default" : "outline"}
                  onClick={() => setFilterPriority("high")}
                >
                  High
                </Button>
                <Button
                  size="sm"
                  variant={filterPriority === "medium" ? "default" : "outline"}
                  onClick={() => setFilterPriority("medium")}
                >
                  Medium
                </Button>
                <Button
                  size="sm"
                  variant={filterPriority === "low" ? "default" : "outline"}
                  onClick={() => setFilterPriority("low")}
                >
                  Low
                </Button>
              </div>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredAreas.map((area) => (
                <div
                  key={area.id}
                  className="p-3 rounded-lg border border-slate-200 hover:border-slate-400 cursor-pointer transition-colors"
                  onClick={() => setSelectedArea(area.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-sm">{area.name}</p>
                      <p className="text-xs text-slate-500">{area.id}</p>
                    </div>
                    {getPriorityBadge(area.priority)}
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold">{area.potential}% Potential</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selected Area Details */}
      {selectedArea && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Area Analysis: {potentialAreas.find(a => a.id === selectedArea)?.name}
            </CardTitle>
            <CardDescription>
              Detailed evidence and scoring breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            {(() => {
              const area = potentialAreas.find(a => a.id === selectedArea)
              if (!area) return null
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Score Breakdown */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Multi-Evidence Score</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Landscape Similarity</span>
                          <span>{area.terrainSimilarity}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full" 
                            style={{ width: `${area.terrainSimilarity}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Environmental Similarity</span>
                          <span>{area.environmentalSimilarity}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${area.environmentalSimilarity}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Spatial Pattern</span>
                          <span>{area.spatialPattern}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-purple-500 rounded-full" 
                            style={{ width: `${area.spatialPattern}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Historical Evidence</span>
                          <span>{area.historicalEvidence}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-500 rounded-full" 
                            style={{ width: `${area.historicalEvidence}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Overall Potential Score</span>
                        <span className="text-2xl font-bold text-blue-600">{area.potential}%</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Confidence: {area.confidence}%</p>
                    </div>
                  </div>

                  {/* Explainable Evidence */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Why was this location flagged?</h3>
                    <div className="space-y-2">
                      {area.reasons.map((reason, index) => (
                        <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{reason}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Button className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View on Map
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
