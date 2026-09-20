"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Brain, 
  Search, 
  TrendingUp, 
  AlertTriangle,
  Satellite,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import ArchaeoMap from "@/components/map/ArchaeoMap"

export default function DashboardPage() {
  const sampleSites = [
    { id: "1", name: "BSC-042", lat: 22.5, lng: 32.0, type: "known" as const, potential: undefined },
    { id: "2", name: "BSC-089", lat: 22.6, lng: 32.1, type: "known" as const, potential: undefined },
    { id: "3", name: "Area 47", lat: 22.4, lng: 32.2, type: "high-potential" as const, potential: 89 },
    { id: "4", name: "Area 21", lat: 22.7, lng: 31.9, type: "high-potential" as const, potential: 84 },
    { id: "5", name: "Area 83", lat: 22.3, lng: 31.8, type: "medium-potential" as const, potential: 78 },
    { id: "6", name: "BSC-017", lat: 22.8, lng: 32.3, type: "anomaly" as const, potential: undefined },
  ]

  const stats = [
    {
      title: "Known Sites",
      value: "163",
      change: "+12",
      icon: MapPin,
      color: "bg-blue-500",
    },
    {
      title: "High Potential Areas",
      value: "47",
      change: "+8",
      icon: Search,
      color: "bg-green-500",
    },
    {
      title: "ML Models Active",
      value: "5",
      change: "Stable",
      icon: Brain,
      color: "bg-purple-500",
    },
    {
      title: "Anomalies Detected",
      value: "23",
      change: "+3",
      icon: AlertTriangle,
      color: "bg-orange-500",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "Discovery",
      message: "New high-potential area identified in Sector 7",
      time: "2 hours ago",
      severity: "high",
    },
    {
      id: 2,
      type: "Analysis",
      message: "Similarity analysis completed for Site 042",
      time: "5 hours ago",
      severity: "medium",
    },
    {
      id: 3,
      type: "Alert",
      message: "Temporal change detected near Site 089",
      time: "1 day ago",
      severity: "high",
    },
    {
      id: 4,
      type: "Update",
      message: "ML model retraining completed",
      time: "2 days ago",
      severity: "low",
    },
  ]

  const quickActions = [
    {
      title: "View Potential Map",
      description: "Explore high-potential archaeological areas",
      icon: Search,
      href: "/dashboard/potential-map",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Analyze Site Fingerprints",
      description: "Examine multidimensional site profiles",
      icon: MapPin,
      href: "/dashboard/fingerprints",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Find Similar Sites",
      description: "Discover locations matching known patterns",
      icon: Brain,
      href: "/dashboard/similar-sites",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Time Machine",
      description: "Monitor landscape changes over time",
      icon: Satellite,
      href: "/dashboard/time-machine",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">
          Welcome back! Here's an overview of your archaeological intelligence system.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-slate-600 mt-1">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.title} href={action.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full justify-start gap-2">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Interactive Map */}
      <Card>
        <CardHeader>
          <CardTitle>Archaeological Map</CardTitle>
          <CardDescription>
            Interactive map showing known sites, potential areas, and anomalies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] rounded-lg overflow-hidden border border-slate-200">
            <ArchaeoMap sites={sampleSites} />
          </div>
          <div className="flex items-center gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Known Sites</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>High Potential</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span>Medium Potential</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>Anomalies</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity & ML Models Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events and discoveries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.severity === "high"
                        ? "bg-red-500"
                        : activity.severity === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">
                      {activity.message}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                  <Badge variant="outline">{activity.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ML Models Status */}
        <Card>
          <CardHeader>
            <CardTitle>ML Models Status</CardTitle>
            <CardDescription>Active machine learning algorithms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Random Forest", status: "Active", accuracy: "87%" },
                { name: "K-Means Clustering", status: "Active", accuracy: "92%" },
                { name: "DBSCAN", status: "Active", accuracy: "89%" },
                { name: "Isolation Forest", status: "Active", accuracy: "85%" },
                { name: "Apriori", status: "Active", accuracy: "78%" },
              ].map((model) => (
                <div
                  key={model.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <Brain className="w-5 h-5 text-slate-600" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {model.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        Accuracy: {model.accuracy}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">{model.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
