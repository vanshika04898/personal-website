"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  AlertTriangle, 
  Eye, 
  TrendingUp,
  MapPin,
  Brain,
  Filter
} from "lucide-react"

export default function AnomaliesPage() {
  const [selectedAnomaly, setSelectedAnomaly] = useState<string | null>(null)

  const anomalies = [
    {
      id: "ANOM-001",
      siteId: "BORDER-017",
      siteName: "Remote Desert Outpost",
      anomalyType: "Terrain",
      description: "Unusual terrain characteristics compared to typical desert sites",
      severity: "high",
      score: 0.92,
      features: {
        elevation: "Unusually high",
        slope: "Atypical gradient",
        composition: "Rare mineral deposits",
      },
      recommendation: "Investigate potential unique geological or archaeological significance",
    },
    {
      id: "ANOM-002",
      siteId: "BORDER-083",
      siteName: "Isolated River Settlement",
      anomalyType: "Spatial",
      description: "Unusual spatial position relative to other known sites",
      severity: "medium",
      score: 0.78,
      features: {
        isolation: "Far from cluster centers",
        orientation: "Non-standard alignment",
        proximity: "Unusual distance to water",
      },
      recommendation: "May represent a different settlement pattern or function",
    },
    {
      id: "ANOM-003",
      siteId: "BORDER-121",
      siteName: "Highland Temple Complex",
      anomalyType: "Environmental",
      description: "Unusual environmental characteristics for this site type",
      severity: "high",
      score: 0.85,
      features: {
        climate: "Atypical microclimate",
        vegetation: "Unusual plant species",
        hydrology: "Unique water access pattern",
      },
      recommendation: "Could indicate specialized religious or ceremonial function",
    },
    {
      id: "ANOM-004",
      siteId: "BORDER-045",
      siteName: "Coastal Trade Hub",
      anomalyType: "Archaeological",
      description: "Unusual combination of archaeological attributes",
      severity: "medium",
      score: 0.73,
      features: {
        typology: "Mixed site types",
        chronology: "Extended occupation",
        artifacts: "Unusual artifact assemblage",
      },
      recommendation: "May represent multi-period occupation with changing functions",
    },
    {
      id: "ANOM-005",
      siteId: "BORDER-156",
      siteName: "Frontier Fortress",
      anomalyType: "Temporal",
      description: "Unusual temporal pattern compared to regional chronology",
      severity: "low",
      score: 0.68,
      features: {
        dating: "Earlier than expected",
        continuity: "Extended use period",
        abandonment: "Unusual abandonment pattern",
      },
      recommendation: "May require re-evaluation of regional chronology",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-500"
      case "medium": return "bg-yellow-500"
      case "low": return "bg-green-500"
      default: return "bg-slate-500"
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high": return <Badge className="bg-red-500">🔴 High</Badge>
      case "medium": return <Badge className="bg-yellow-500">🟠 Medium</Badge>
      case "low": return <Badge className="bg-green-500">🟢 Low</Badge>
      default: return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Anomaly Archaeology</h1>
          <p className="text-slate-600 mt-1">
            Identify archaeological sites with unusual characteristics
          </p>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Total Anomalies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{anomalies.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">High Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {anomalies.filter(a => a.severity === "high").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Medium Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {anomalies.filter(a => a.severity === "medium").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">Low Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {anomalies.filter(a => a.severity === "low").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Anomaly List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Detected Anomalies</h2>
          {anomalies.map((anomaly) => (
            <Card
              key={anomaly.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedAnomaly(anomaly.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{anomaly.siteName}</CardTitle>
                    <CardDescription className="mt-1">{anomaly.siteId}</CardDescription>
                  </div>
                  {getSeverityBadge(anomaly.severity)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium">{anomaly.anomalyType} Anomaly</span>
                  </div>
                  <p className="text-sm text-slate-600">{anomaly.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-slate-500" />
                      <span className="text-sm">Anomaly Score: {(anomaly.score * 100).toFixed(0)}%</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Anomaly Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Anomaly Details</h2>
          {selectedAnomaly ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  {anomalies.find(a => a.id === selectedAnomaly)?.siteName}
                </CardTitle>
                <CardDescription>
                  {anomalies.find(a => a.id === selectedAnomaly)?.siteId}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {(() => {
                  const anomaly = anomalies.find(a => a.id === selectedAnomaly)
                  if (!anomaly) return null
                  return (
                    <>
                      <div>
                        <h3 className="font-semibold mb-2">Anomaly Type</h3>
                        <Badge className={getSeverityColor(anomaly.severity)}>
                          {anomaly.anomalyType} - {anomaly.severity}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Description</h3>
                        <p className="text-sm text-slate-600">{anomaly.description}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Unusual Features</h3>
                        <div className="space-y-2">
                          {Object.entries(anomaly.features).map(([key, value]) => (
                            <div key={key} className="p-2 rounded bg-slate-50 text-sm">
                              <span className="font-medium capitalize">{key}:</span> {value}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Recommendation</h3>
                        <p className="text-sm text-slate-600">{anomaly.recommendation}</p>
                      </div>

                      <div className="pt-4 border-t">
                        <Button className="w-full">
                          <MapPin className="w-4 h-4 mr-2" />
                          View on Map
                        </Button>
                      </div>
                    </>
                  )
                })()}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center text-slate-500">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select an anomaly to view details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
