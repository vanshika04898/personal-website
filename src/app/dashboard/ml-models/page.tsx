"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Brain, 
  Target, 
  Zap, 
  BarChart3,
  Play,
  RefreshCw,
  Download,
  Settings
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function MLModelsPage() {
  const modelPerformance = [
    { name: "Random Forest", accuracy: 87, precision: 85, recall: 89, f1: 87 },
    { name: "K-Means", accuracy: 92, precision: 90, recall: 94, f1: 92 },
    { name: "DBSCAN", accuracy: 89, precision: 88, recall: 90, f1: 89 },
    { name: "Isolation Forest", accuracy: 85, precision: 83, recall: 87, f1: 85 },
    { name: "Apriori", accuracy: 78, precision: 75, recall: 80, f1: 77 },
  ]

  const trainingHistory = [
    { epoch: 1, loss: 0.85, accuracy: 0.45 },
    { epoch: 2, loss: 0.72, accuracy: 0.58 },
    { epoch: 3, loss: 0.61, accuracy: 0.67 },
    { epoch: 4, loss: 0.52, accuracy: 0.74 },
    { epoch: 5, loss: 0.45, accuracy: 0.79 },
    { epoch: 6, loss: 0.39, accuracy: 0.83 },
    { epoch: 7, loss: 0.34, accuracy: 0.86 },
    { epoch: 8, loss: 0.30, accuracy: 0.88 },
    { epoch: 9, loss: 0.27, accuracy: 0.89 },
    { epoch: 10, loss: 0.25, accuracy: 0.90 },
  ]

  const featureImportance = [
    { name: "Terrain", value: 25 },
    { name: "Water Distance", value: 22 },
    { name: "NDVI", value: 18 },
    { name: "Elevation", value: 15 },
    { name: "Spatial Pattern", value: 12 },
    { name: "Historical Phase", value: 8 },
  ]

  const clusterDistribution = [
    { name: "Cluster 1", value: 43, color: "#3b82f6" },
    { name: "Cluster 2", value: 51, color: "#10b981" },
    { name: "Cluster 3", value: 38, color: "#f59e0b" },
    { name: "Cluster 4", value: 31, color: "#ef4444" },
  ]

  const models = [
    {
      name: "Random Forest",
      purpose: "Classification & Pattern Learning",
      status: "Active",
      accuracy: "87%",
      description: "Learns relationships between archaeological and environmental features",
      icon: Target,
      color: "bg-blue-500",
    },
    {
      name: "K-Means Clustering",
      purpose: "Similarity & Grouping",
      status: "Active",
      accuracy: "92%",
      description: "Discovers groups of similar site and landscape profiles",
      icon: Zap,
      color: "bg-green-500",
    },
    {
      name: "DBSCAN",
      purpose: "Spatial Clustering",
      status: "Active",
      accuracy: "89%",
      description: "Identifies spatial concentrations of archaeological sites",
      icon: BarChart3,
      color: "bg-purple-500",
    },
    {
      name: "Isolation Forest",
      purpose: "Anomaly Detection",
      status: "Active",
      accuracy: "85%",
      description: "Detects unusual archaeological and landscape profiles",
      icon: Brain,
      color: "bg-orange-500",
    },
    {
      name: "Apriori",
      purpose: "Association Rules",
      status: "Active",
      accuracy: "78%",
      description: "Finds recurring combinations of archaeological characteristics",
      icon: Target,
      color: "bg-cyan-500",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">ML Models Overview</h1>
          <p className="text-slate-600 mt-1">
            Machine learning algorithms and their performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retrain All
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((model) => {
          const Icon = model.icon
          return (
            <Card key={model.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${model.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-green-500">{model.status}</Badge>
                </div>
                <CardTitle className="mt-4">{model.name}</CardTitle>
                <CardDescription>{model.purpose}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">{model.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Accuracy</span>
                  <span className="text-2xl font-bold text-slate-900">{model.accuracy}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Settings className="w-4 h-4 mr-1" />
                    Config
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Play className="w-4 h-4 mr-1" />
                    Run
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Model Performance</TabsTrigger>
          <TabsTrigger value="training">Training History</TabsTrigger>
          <TabsTrigger value="features">Feature Importance</TabsTrigger>
          <TabsTrigger value="clusters">Cluster Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Model Performance Comparison</CardTitle>
              <CardDescription>Accuracy, Precision, Recall, and F1 Score across models</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={modelPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" fill="#3b82f6" name="Accuracy" />
                  <Bar dataKey="precision" fill="#10b981" name="Precision" />
                  <Bar dataKey="recall" fill="#f59e0b" name="Recall" />
                  <Bar dataKey="f1" fill="#ef4444" name="F1 Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training">
          <Card>
            <CardHeader>
              <CardTitle>Training History</CardTitle>
              <CardDescription>Loss and accuracy over training epochs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={trainingHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="loss" stroke="#ef4444" name="Loss" />
                  <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" name="Accuracy" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Feature Importance</CardTitle>
              <CardDescription>Relative importance of features in model predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={featureImportance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clusters">
          <Card>
            <CardHeader>
              <CardTitle>Cluster Distribution</CardTitle>
              <CardDescription>Site distribution across discovered clusters</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={clusterDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {clusterDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
