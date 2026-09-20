"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  LayoutDashboard, 
  MapPin, 
  Brain, 
  Satellite, 
  BarChart3, 
  Search, 
  Clock, 
  AlertTriangle,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Explorer", href: "/dashboard/explorer", icon: MapPin },
  { name: "Discovery Scanner", href: "/dashboard/discovery", icon: Search },
  { name: "Site Fingerprints", href: "/dashboard/fingerprints", icon: Brain },
  { name: "Similar Sites", href: "/dashboard/similar-sites", icon: Search },
  { name: "ML Models", href: "/dashboard/ml-models", icon: Brain },
  { name: "Anomalies", href: "/dashboard/anomalies", icon: AlertTriangle },
  { name: "Time Machine", href: "/dashboard/time-machine", icon: Clock },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Reports", href: "/dashboard/reports", icon: Satellite },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("/dashboard")

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-slate-700">
            <div className="p-2 bg-blue-600 rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg">ARCHAEO-SCAN</h1>
              <p className="text-xs text-slate-400">Archaeological Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = currentPath === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setCurrentPath(item.href)
                    setSidebarOpen(false)
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="font-semibold">DR</span>
              </div>
              <div>
                <p className="font-medium text-sm">Dr. Researcher</p>
                <p className="text-xs text-slate-400">University</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <div className="flex items-center gap-4 ml-auto">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
