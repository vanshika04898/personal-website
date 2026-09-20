"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { 
  Satellite, 
  Search, 
  Sliders,
  MapPin,
  RefreshCw
} from "lucide-react"

export default function WhatIfPage() {
  const [criteria, setCriteria] = useState({
    nileDistance: 50,
    terrainSimilarity: 70,
    satelliteSimilarity: 60,
    historicalSimilarity: 40,
    spatialPattern: 55,
  })

  const [isScanning, setIsScanning] = useState(false)
  const [scanResults, setScanResults] = useState<any[]>([])

  const handleSliderChange = (key: string, value: number) => {
    setCriteria(prev => ({ ...prev, [key]: value }))
  }

  const runScan = () => {
    setIsScanning(true)
    // Simulate scan
    setTimeout(() => {
      setScanResults([
        { id: "SCAN-001", name: "Sector 7A", match: 94 },
        { id: "SCAN-002", name: "Sector 12B", match: 87 },
        { id: "SCAN-003", name: "Sector 19C", match: 76 },
        { id: "SCAN-004", name: "Sector 23D", match: 68 },
      ])
      setIsScanning(false)
    }, 2000)
  }

  const resetCriteria = () => {
    setCriteria({
      nileDistance: 50,
      terrainSimilarity: 70,
      satelliteSimilarity: 60,
      historicalSimilarity: 40,
      spatialPattern: 55,
    })
    setScanResults([])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">What-If Exploration Mode</h1>
        <p className="text-slate-600 mt-1">
          Adjust criteria to explore different research scenarios
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Criteria Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sliders className="w-5 h-5" />
              Research Criteria
            </CardTitle>
            <CardDescription>
              Adjust the importance of different factors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Distance to Nile</Label>
                <span className="text-sm font-medium">{criteria.nileDistance}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={criteria.nileDistance}
                onChange={(e) => handleSliderChange('nileDistance', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Terrain Similarity</Label>
                <span className="text-sm font-medium">{criteria.terrainSimilarity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={criteria.terrainSimilarity}
                onChange={(e) => handleSliderChange('terrainSimilarity', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Satellite Similarity</Label>
                <span className="text-sm font-medium">{criteria.satelliteSimilarity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={criteria.satelliteSimilarity}
                onChange={(e) => handleSliderChange('satelliteSimilarity', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Historical Similarity</Label>
                <span className="text-sm font-medium">{criteria.historicalSimilarity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={criteria.historicalSimilarity}
                onChange={(e) => handleSliderChange('historicalSimilarity', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Spatial Pattern</Label>
                <span className="text-sm font-medium">{criteria.spatialPattern}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={criteria.spatialPattern}
                onChange={(e) => handleSliderChange('spatialPattern', parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button 
                className="flex-1" 
                onClick={runScan}
                disabled={isScanning}
              >
                <Search className="w-4 h-4 mr-2" />
                {isScanning ? "Scanning..." : "Run Scan"}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetCriteria}
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Scan Results
            </CardTitle>
            <CardDescription>
              Areas matching your criteria
            </CardDescription>
          </CardHeader>
          <CardContent>
            {scanResults.length > 0 ? (
              <div className="space-y-3">
                {scanResults.map((result) => (
                  <div
                    key={result.id}
                    className="p-4 rounded-lg border border-slate-200 hover:border-slate-400 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{result.name}</h3>
                        <p className="text-sm text-slate-500">{result.id}</p>
                      </div>
                      <Badge className="bg-green-500">{result.match}% Match</Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center">
                  <Satellite className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-600 font-medium">Adjust criteria and run scan</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Results will appear here
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Preset Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle>Preset Research Scenarios</CardTitle>
          <CardDescription>
            Quick-start configurations for common research questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-start gap-2"
              onClick={() => {
                setCriteria({
                  nileDistance: 80,
                  terrainSimilarity: 70,
                  satelliteSimilarity: 60,
                  historicalSimilarity: 50,
                  spatialPattern: 65,
                })
              }}
            >
              <span className="font-semibold">River Valley Focus</span>
              <span className="text-xs text-slate-500">
                Prioritize areas near water sources
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-start gap-2"
              onClick={() => {
                setCriteria({
                  nileDistance: 30,
                  terrainSimilarity: 85,
                  satelliteSimilarity: 75,
                  historicalSimilarity: 60,
                  spatialPattern: 70,
                })
              }}
            >
              <span className="font-semibold">Highland Exploration</span>
              <span className="text-xs text-slate-500">
                Focus on elevated terrain features
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col items-start gap-2"
              onClick={() => {
                setCriteria({
                  nileDistance: 50,
                  terrainSimilarity: 60,
                  satelliteSimilarity: 85,
                  historicalSimilarity: 80,
                  spatialPattern: 55,
                })
              }}
            >
              <span className="font-semibold">Historical Priority</span>
              <span className="text-xs text-slate-500">
                Emphasize historical evidence
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
