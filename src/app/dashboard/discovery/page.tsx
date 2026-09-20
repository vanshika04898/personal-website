"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import ArchaeoMap from "@/components/map/ArchaeoMap"
import { Search, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function DiscoveryScannerPage() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanComplete, setScanComplete] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState("first-cataract")
  const [similarityThreshold, setSimilarityThreshold] = useState([75])
  const [analysisOptions, setAnalysisOptions] = useState({
    landscapeSimilarity: true,
    terrain: true,
    spatialPattern: true,
    environmentalFeatures: true,
    archaeologicalFeatures: true,
  })

  const [scanResults, setScanResults] = useState<any[]>([])

  const handleScan = async () => {
    setIsScanning(true)
    setScanProgress(0)
    setScanComplete(false)

    // Simulate scanning process
    const steps = [
      { progress: 20, message: "Extracting features from BORDERSCAPE region..." },
      { progress: 40, message: "Generating site fingerprints..." },
      { progress: 60, message: "Running ML models..." },
      { progress: 80, message: "Performing similarity analysis..." },
      { progress: 100, message: "Generating potential map..." },
    ]

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setScanProgress(step.progress)
    }

    // Generate mock results
    const results = [
      { id: "47", name: "Area 47", potential: 89, lat: 22.4, lng: 32.2, type: "high-potential" as const },
      { id: "21", name: "Area 21", potential: 84, lat: 22.7, lng: 31.9, type: "high-potential" as const },
      { id: "83", name: "Area 83", potential: 78, lat: 22.3, lng: 31.8, type: "medium-potential" as const },
      { id: "16", name: "Area 16", potential: 74, lat: 22.5, lng: 32.4, type: "medium-potential" as const },
      { id: "92", name: "Area 92", potential: 68, lat: 22.2, lng: 31.7, type: "low-potential" as const },
      { id: "31", name: "Area 31", potential: 65, lat: 22.6, lng: 32.5, type: "low-potential" as const },
    ]

    setScanResults(results)
    setIsScanning(false)
    setScanComplete(true)
  }

  const resultSites = scanResults.map((r) => ({
    id: r.id,
    name: r.name,
    lat: r.lat,
    lng: r.lng,
    type: r.type,
    potential: r.potential,
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Discovery Scanner</h1>
        <p className="text-slate-600 mt-1">
          AI-powered identification of unexplored archaeological locations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scanner Controls */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Scan Configuration
              </CardTitle>
              <CardDescription>
                Configure the discovery scan parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Region Selection */}
              <div className="space-y-2">
                <Label htmlFor="region">Region</Label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger id="region">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first-cataract">First Cataract</SelectItem>
                    <SelectItem value="second-cataract">Second Cataract</SelectItem>
                    <SelectItem value="third-cataract">Third Cataract</SelectItem>
                    <SelectItem value="full-borderscape">Full BORDERSCAPE</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Analysis Options */}
              <div className="space-y-4">
                <Label>Analysis Types</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="landscape"
                      checked={analysisOptions.landscapeSimilarity}
                      onCheckedChange={(checked) =>
                        setAnalysisOptions({ ...analysisOptions, landscapeSimilarity: checked as boolean })
                      }
                    />
                    <Label htmlFor="landscape" className="text-sm">Landscape Similarity</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terrain"
                      checked={analysisOptions.terrain}
                      onCheckedChange={(checked) =>
                        setAnalysisOptions({ ...analysisOptions, terrain: checked as boolean })
                      }
                    />
                    <Label htmlFor="terrain" className="text-sm">Terrain Analysis</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="spatial"
                      checked={analysisOptions.spatialPattern}
                      onCheckedChange={(checked) =>
                        setAnalysisOptions({ ...analysisOptions, spatialPattern: checked as boolean })
                      }
                    />
                    <Label htmlFor="spatial" className="text-sm">Spatial Pattern</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="environmental"
                      checked={analysisOptions.environmentalFeatures}
                      onCheckedChange={(checked) =>
                        setAnalysisOptions({ ...analysisOptions, environmentalFeatures: checked as boolean })
                      }
                    />
                    <Label htmlFor="environmental" className="text-sm">Environmental Features</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="archaeological"
                      checked={analysisOptions.archaeologicalFeatures}
                      onCheckedChange={(checked) =>
                        setAnalysisOptions({ ...analysisOptions, archaeologicalFeatures: checked as boolean })
                      }
                    />
                    <Label htmlFor="archaeological" className="text-sm">Archaeological Features</Label>
                  </div>
                </div>
              </div>

              {/* Similarity Threshold */}
              <div className="space-y-2">
                <Label htmlFor="threshold">Similarity Threshold: {similarityThreshold[0]}%</Label>
                <Slider
                  id="threshold"
                  min={50}
                  max={95}
                  step={5}
                  value={similarityThreshold}
                  onValueChange={setSimilarityThreshold}
                />
              </div>

              {/* Scan Button */}
              <Button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full"
                size="lg"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Run Scan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Scan Progress */}
          {isScanning && (
            <Card>
              <CardHeader>
                <CardTitle>Scanning Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={scanProgress} className="h-2" />
                <p className="text-sm text-slate-600 text-center">
                  {scanProgress < 20 && "Initializing scan..."}
                  {scanProgress >= 20 && scanProgress < 40 && "Extracting features..."}
                  {scanProgress >= 40 && scanProgress < 60 && "Generating fingerprints..."}
                  {scanProgress >= 60 && scanProgress < 80 && "Running ML models..."}
                  {scanProgress >= 80 && scanProgress < 100 && "Analyzing similarities..."}
                  {scanProgress === 100 && "Finalizing results..."}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Scan Results */}
          {scanComplete && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Scan Complete
                </CardTitle>
                <CardDescription>
                  {scanResults.length} areas identified for investigation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {scanResults.map((result) => (
                  <div
                    key={result.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                  >
                    <div>
                      <p className="font-medium text-sm">{result.name}</p>
                      <p className="text-xs text-slate-500">Potential: {result.potential}%</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        result.potential >= 80
                          ? "border-red-500 text-red-500"
                          : result.potential >= 70
                          ? "border-orange-500 text-orange-500"
                          : "border-yellow-500 text-yellow-500"
                      }
                    >
                      {result.potential >= 80 ? "High" : result.potential >= 70 ? "Medium" : "Low"}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View on Map
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Map Display */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {scanComplete ? "Potential Areas Map" : "BORDERSCAPE Region"}
              </CardTitle>
              <CardDescription>
                {scanComplete
                  ? "Areas identified for archaeological investigation"
                  : "Run a scan to identify potential archaeological locations"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] rounded-lg overflow-hidden border border-slate-200">
                <ArchaeoMap
                  sites={scanComplete ? resultSites : []}
                  center={[22.5, 32]}
                  zoom={10}
                />
              </div>
              {scanComplete && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        AI-generated analysis does not confirm archaeological presence
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        These areas are flagged for further archaeological investigation by experts.
                        Field validation is required to confirm archaeological significance.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
