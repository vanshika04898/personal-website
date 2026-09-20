"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  TrendingUp, 
  Users,
  MapPin,
  Download,
  Calendar
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function AnalyticsPage() {
  const siteDistribution = [
    { name: "Settlement", count: 67 },
    { name: "Fortification", count: 28 },
    { name: "Religious", count: 35 },
    { name: "Commercial", count: 18 },
    { name: "Burial", count: 15 },
  ]

  const temporalDistribution = [
    { period: "Predynastic", count: 23 },
    { period: "Old Kingdom", count: 31 },
    { period: "Middle Kingdom", count: 42 },
    { period: "New Kingdom", count: 38 },
    { period: "Ptolemaic", count: 19 },
    { period: "Roman", count: 10 },
  ]

  const discoveryTrend = [
    { month: "Jan", discoveries: 5, highPotential: 2 },
    { month: "Feb", discoveries: 8, highPotential: 3 },
    { month: "Mar", discoveries: 12, highPotential: 5 },
    { month: "Apr", discoveries: 15, highPotential: 7 },
    { month: "May", discoveries: 18, highPotential: 9 },
    { month: "Jun", discoveries: 22, highPotential: 11 },
  ]

  const terrainDistribution = [
    { name: "River Valley", value: 45, color: "#3b82f6" },
    { name: "Desert", value: 38, color: "#f59e0b" },
    { name: "Oasis", value: 28, color: "#10b981" },
    { name: "Floodplain", value: 32, color: "#8b5cf6" },
    { name: "Highland", value: 20, color: "#ef4444" },
  ]

  const modelAccuracy = [
    { model: "Random Forest", accuracy: 87, trend: "+2%" },
    { model: "K-Means", accuracy: 92, trend: "+1%" },
    { model: "DBSCAN", accuracy: 89, trend: "0%" },
    { model: "Isolation Forest", accuracy: 85, trend: "+3%" },
    { model: "Apriori", accuracy: 78, trend: "-1%" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
          <p className="text-slate-600 mt-1">
            Comprehensive analysis of archaeological data and system performance
          </p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Total Sites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">163</div>
            <p className="text-xs text-green-600 mt-1">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Discoveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-green-600 mt-1">+8 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-slate-500 mt-1">Researchers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Avg Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <p className="text-xs text-green-600 mt-1">+1.5% improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="distribution" className="space-y-4">
        <TabsList>
          <TabsTrigger value="distribution">Site Distribution</TabsTrigger>
          <TabsTrigger value="temporal">Temporal Analysis</TabsTrigger>
          <TabsTrigger value="trends">Discovery Trends</TabsTrigger>
          <TabsTrigger value="performance">Model Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="distribution">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Type Distribution</CardTitle>
                <CardDescription>Breakdown by archaeological site type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={siteDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Terrain Distribution</CardTitle>
                <CardDescription>Sites by terrain type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={terrainDistribution} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="temporal">
          <Card>
            <CardHeader>
              <CardTitle>Temporal Distribution</CardTitle>
              <CardDescription>Sites across historical periods</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={temporalDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Discovery Trends</CardTitle>
              <CardDescription>Monthly discovery rate and high-potential findings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={discoveryTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="discoveries" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Total Discoveries" />
                  <Area type="monotone" dataKey="highPotential" stackId="2" stroke="#ef4444" fill="#ef4444" name="High Potential" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Model Performance Over Time</CardTitle>
              <CardDescription>Accuracy trends across ML models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelAccuracy.map((model) => (
                  <div key={model.model} className="p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{model.model}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{model.accuracy}%</span>
                        <Badge 
                          className={model.trend.startsWith('+') ? 'bg-green-500' : 'bg-red-500'}
                        >
                          {model.trend}
                        </Badge>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{ width: `${model.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
