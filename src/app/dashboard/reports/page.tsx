"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  FileText, 
  Download, 
  Calendar, 
  MapPin, 
  Brain,
  AlertTriangle,
  CheckCircle,
  Loader2
} from "lucide-react"

export default function ReportsPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [reportGenerated, setReportGenerated] = useState(false)
  const [reportConfig, setReportConfig] = useState({
    region: "first-cataract",
    dateRange: "last-30-days",
    includeML: true,
    includeAnomalies: true,
    includePotential: true,
  })

  const handleGenerateReport = async () => {
    setIsGenerating(true)
    // Simulate report generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
    setReportGenerated(true)
  }

  const handleDownload = (format: string) => {
    // Simulate download
    console.log(`Downloading report as ${format}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Research Reports</h1>
        <p className="text-slate-600 mt-1">
          Generate comprehensive archaeological intelligence reports
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Configuration */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Report Configuration
              </CardTitle>
              <CardDescription>
                Configure your research report parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="region">Study Region</Label>
                <Select value={reportConfig.region} onValueChange={(value) => setReportConfig({ ...reportConfig, region: value })}>
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

              <div className="space-y-2">
                <Label htmlFor="dateRange">Date Range</Label>
                <Select value={reportConfig.dateRange} onValueChange={(value) => setReportConfig({ ...reportConfig, dateRange: value })}>
                  <SelectTrigger id="dateRange">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                    <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                    <SelectItem value="last-90-days">Last 90 Days</SelectItem>
                    <SelectItem value="all-time">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <Label>Include Sections</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ML Analysis Results</span>
                    <Badge variant={reportConfig.includeML ? "default" : "outline"}>
                      {reportConfig.includeML ? "Included" : "Excluded"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Anomaly Detection</span>
                    <Badge variant={reportConfig.includeAnomalies ? "default" : "outline"}>
                      {reportConfig.includeAnomalies ? "Included" : "Excluded"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Potential Areas</span>
                    <Badge variant={reportConfig.includePotential ? "default" : "outline"}>
                      {reportConfig.includePotential ? "Included" : "Excluded"}
                    </Badge>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Download Options */}
          {reportGenerated && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Report Ready
                </CardTitle>
                <CardDescription>
                  Download your report in preferred format
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleDownload("pdf")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download as PDF
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleDownload("docx")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download as DOCX
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleDownload("csv")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download as CSV
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Report Preview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Report Preview</CardTitle>
              <CardDescription>
                {reportGenerated ? "Generated archaeological intelligence report" : "Configure and generate a report to see preview"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {reportGenerated ? (
                <div className="space-y-6">
                  {/* Report Header */}
                  <div className="border-b pb-4">
                    <h2 className="text-2xl font-bold">ARCHAEO-SCAN Analysis Report</h2>
                    <p className="text-slate-600 mt-2">Archaeological Landscape Intelligence System</p>
                    <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Generated: {new Date().toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Region: First Cataract</span>
                      </div>
                    </div>
                  </div>

                  {/* Executive Summary */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Executive Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-slate-600">Sites Analyzed</p>
                        <p className="text-2xl font-bold text-blue-600">163</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-slate-600">High Potential Areas</p>
                        <p className="text-2xl font-bold text-green-600">47</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-slate-600">Anomalies Detected</p>
                        <p className="text-2xl font-bold text-orange-600">23</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <p className="text-sm text-slate-600">ML Models Active</p>
                        <p className="text-2xl font-bold text-purple-600">5</p>
                      </div>
                    </div>
                  </div>

                  {/* ML Analysis Section */}
                  {reportConfig.includeML && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Brain className="w-5 h-5" />
                        ML Analysis Results
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-slate-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Random Forest</span>
                            <Badge>87% Accuracy</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">Classification and pattern learning</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">K-Means Clustering</span>
                            <Badge>92% Accuracy</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">Similarity and grouping analysis</p>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-50">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">DBSCAN</span>
                            <Badge>89% Accuracy</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">Spatial clustering detection</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Potential Areas Section */}
                  {reportConfig.includePotential && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">High-Potential Areas</h3>
                      <div className="space-y-2">
                        {[
                          { id: "Area 47", score: 89 },
                          { id: "Area 21", score: 84 },
                          { id: "Area 83", score: 78 },
                        ].map((area) => (
                          <div key={area.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                            <span className="font-medium">{area.id}</span>
                            <Badge className="bg-red-500">{area.score}% Potential</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Anomalies Section */}
                  {reportConfig.includeAnomalies && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Anomaly Detection
                      </h3>
                      <div className="space-y-2">
                        {[
                          { id: "BSC-017", type: "Terrain", severity: "High" },
                          { id: "BSC-083", type: "Spatial", severity: "Medium" },
                          { id: "BSC-121", type: "Environmental", severity: "High" },
                        ].map((anomaly) => (
                          <div key={anomaly.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                            <div>
                              <span className="font-medium">{anomaly.id}</span>
                              <span className="text-sm text-slate-600 ml-2">{anomaly.type}</span>
                            </div>
                            <Badge variant={anomaly.severity === "High" ? "destructive" : "outline"}>
                              {anomaly.severity}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Disclaimer */}
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Disclaimer:</strong> AI-generated analysis does not confirm archaeological presence. 
                      All potential areas and anomalies require field investigation and expert validation 
                      before archaeological significance can be confirmed.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500">
                  <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="font-medium">No Report Generated</p>
                  <p className="text-sm mt-1">Configure your report settings and click generate</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
