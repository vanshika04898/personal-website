"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Clock, 
  Play, 
  Calendar,
  AlertTriangle,
  TrendingUp,
  Building,
  TreePine,
  Waves,
  Mountain
} from "lucide-react"

export default function TimeMachinePage() {
  const [selectedSite, setSelectedSite] = useState<string>("BORDER-089")
  const [selectedYear, setSelectedYear] = useState<number>(2025)

  const sites = [
    { id: "BORDER-001", name: "Nile Valley Settlement" },
    { id: "BORDER-042", name: "Predynastic Burial Ground" },
    { id: "BORDER-089", name: "Middle Kingdom Fort" },
    { id: "BORDER-121", name: "Roman Trade Station" },
  ]

  const years = [2010, 2015, 2020, 2025]

  const temporalChanges = [
    {
      year: 2010,
      changes: [
        { type: "vegetation", description: "Dense vegetation cover", severity: "low" },
        { type: "landuse", description: "Agricultural activity", severity: "low" },
      ],
    },
    {
      year: 2015,
      changes: [
        { type: "vegetation", description: "Moderate vegetation reduction", severity: "medium" },
        { type: "landuse", description: "Increased agricultural activity", severity: "medium" },
      ],
    },
    {
      year: 2020,
      changes: [
        { type: "construction", description: "New road construction nearby", severity: "high" },
        { type: "vegetation", description: "Significant vegetation loss", severity: "high" },
        { type: "erosion", description: "Soil erosion detected", severity: "medium" },
      ],
    },
    {
      year: 2025,
      changes: [
        { type: "construction", description: "Urban expansion", severity: "high" },
        { type: "landuse", description: "Industrial development", severity: "high" },
        { type: "flooding", description: "Seasonal flooding patterns", severity: "medium" },
      ],
    },
  ]

  const changeIcons = {
    construction: Building,
    vegetation: TreePine,
    landuse: Mountain,
    erosion: Mountain,
    flooding: Waves,
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-500"
      case "medium": return "bg-yellow-500"
      case "low": return "bg-green-500"
      default: return "bg-slate-500"
    }
  }

  const currentChanges = temporalChanges.find(t => t.year === selectedYear)?.changes || []

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Satellite Time Machine</h1>
        <p className="text-slate-600 mt-1">
          Monitor archaeological landscape changes over time
        </p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Select Site</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sites.map((site) => (
                <Button
                  key={site.id}
                  variant={selectedSite === site.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedSite(site.id)}
                >
                  {site.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm">Timeline Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  onClick={() => setSelectedYear(year)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {year}
                </Button>
              ))}
              <Button variant="outline" className="ml-auto">
                <Play className="w-4 h-4 mr-2" />
                Play Animation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Satellite Imagery Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Satellite Imagery - {selectedYear}
            </CardTitle>
            <CardDescription>
              {sites.find(s => s.id === selectedSite)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
              <div className="text-center">
                <Clock className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-600 font-medium">Satellite Image</p>
                <p className="text-sm text-slate-500 mt-1">
                  Year: {selectedYear}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detected Changes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Detected Changes
            </CardTitle>
            <CardDescription>
              Landscape changes identified in {selectedYear}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentChanges.length > 0 ? (
                currentChanges.map((change, index) => {
                  const Icon = changeIcons[change.type as keyof typeof changeIcons] || AlertTriangle
                  return (
                    <div key={index} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-sm capitalize">{change.type}</p>
                            <Badge className={getSeverityColor(change.severity)}>
                              {change.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">{change.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="text-center py-8 text-slate-500">
                  <p>No significant changes detected</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Change Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Temporal Change Summary
          </CardTitle>
          <CardDescription>
            Overview of changes across all time periods
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-sm">Construction</span>
              </div>
              <p className="text-2xl font-bold text-red-600">12</p>
              <p className="text-xs text-red-600 mt-1">Events detected</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <TreePine className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-sm">Vegetation</span>
              </div>
              <p className="text-2xl font-bold text-green-600">8</p>
              <p className="text-xs text-green-600 mt-1">Changes detected</p>
            </div>
            <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <Mountain className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-sm">Erosion</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">5</p>
              <p className="text-xs text-orange-600 mt-1">Areas affected</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Waves className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-sm">Flooding</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">3</p>
              <p className="text-xs text-blue-600 mt-1">Events detected</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
