"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  Bell, 
  Shield, 
  Database,
  Map,
  Palette,
  Save,
  RefreshCw
} from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile
    name: "Dr. Researcher",
    email: "researcher@university.edu",
    institution: "University",
    
    // Notifications
    emailAlerts: true,
    scanComplete: true,
    anomalyDetected: true,
    weeklyReport: false,
    
    // Security
    twoFactor: false,
    sessionTimeout: "30",
    
    // Map Settings
    defaultZoom: "10",
    showTerrain: true,
    showWater: true,
    satelliteLayer: false,
    
    // ML Settings
    autoRetrain: true,
    retrainInterval: "7",
    confidenceThreshold: "75",
    
    // Appearance
    theme: "light",
    language: "en",
  })

  const handleSave = () => {
    console.log("Saving settings:", settings)
    // Implement save logic
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">
          Configure your ARCHAEO-SCAN preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="map">Map Settings</TabsTrigger>
          <TabsTrigger value="ml">ML Settings</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Manage your account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={settings.name}
                  onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input
                  id="institution"
                  value={settings.institution}
                  onChange={(e) => setSettings({ ...settings, institution: e.target.value })}
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailAlerts">Email Alerts</Label>
                  <p className="text-sm text-slate-500">Receive notifications via email</p>
                </div>
                <Switch
                  id="emailAlerts"
                  checked={settings.emailAlerts}
                  onCheckedChange={(checked) => setSettings({ ...settings, emailAlerts: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="scanComplete">Scan Complete</Label>
                  <p className="text-sm text-slate-500">Notify when discovery scan finishes</p>
                </div>
                <Switch
                  id="scanComplete"
                  checked={settings.scanComplete}
                  onCheckedChange={(checked) => setSettings({ ...settings, scanComplete: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="anomalyDetected">Anomaly Detected</Label>
                  <p className="text-sm text-slate-500">Alert when new anomalies are found</p>
                </div>
                <Switch
                  id="anomalyDetected"
                  checked={settings.anomalyDetected}
                  onCheckedChange={(checked) => setSettings({ ...settings, anomalyDetected: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weeklyReport">Weekly Report</Label>
                  <p className="text-sm text-slate-500">Receive weekly summary reports</p>
                </div>
                <Switch
                  id="weeklyReport"
                  checked={settings.weeklyReport}
                  onCheckedChange={(checked) => setSettings({ ...settings, weeklyReport: checked })}
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                  <p className="text-sm text-slate-500">Add an extra layer of security</p>
                </div>
                <Switch
                  id="twoFactor"
                  checked={settings.twoFactor}
                  onCheckedChange={(checked) => setSettings({ ...settings, twoFactor: checked })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Select value={settings.sessionTimeout} onValueChange={(value) => setSettings({ ...settings, sessionTimeout: value })}>
                  <SelectTrigger id="sessionTimeout">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
              </div>
              <Button onClick={handleSave} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Map Settings */}
        <TabsContent value="map">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="w-5 h-5" />
                Map Settings
              </CardTitle>
              <CardDescription>
                Configure map display preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="defaultZoom">Default Zoom Level</Label>
                <Select value={settings.defaultZoom} onValueChange={(value) => setSettings({ ...settings, defaultZoom: value })}>
                  <SelectTrigger id="defaultZoom">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8 (Regional)</SelectItem>
                    <SelectItem value="10">10 (Area)</SelectItem>
                    <SelectItem value="12">12 (Local)</SelectItem>
                    <SelectItem value="14">14 (Detail)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showTerrain">Show Terrain</Label>
                  <p className="text-sm text-slate-500">Display terrain layer by default</p>
                </div>
                <Switch
                  id="showTerrain"
                  checked={settings.showTerrain}
                  onCheckedChange={(checked) => setSettings({ ...settings, showTerrain: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showWater">Show Water Bodies</Label>
                  <p className="text-sm text-slate-500">Display rivers and lakes by default</p>
                </div>
                <Switch
                  id="showWater"
                  checked={settings.showWater}
                  onCheckedChange={(checked) => setSettings({ ...settings, showWater: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="satelliteLayer">Satellite Imagery</Label>
                  <p className="text-sm text-slate-500">Use satellite imagery as base layer</p>
                </div>
                <Switch
                  id="satelliteLayer"
                  checked={settings.satelliteLayer}
                  onCheckedChange={(checked) => setSettings({ ...settings, satelliteLayer: checked })}
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ML Settings */}
        <TabsContent value="ml">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                ML Model Settings
              </CardTitle>
              <CardDescription>
                Configure machine learning model behavior
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoRetrain">Auto Retrain Models</Label>
                  <p className="text-sm text-slate-500">Automatically retrain models with new data</p>
                </div>
                <Switch
                  id="autoRetrain"
                  checked={settings.autoRetrain}
                  onCheckedChange={(checked) => setSettings({ ...settings, autoRetrain: checked })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="retrainInterval">Retrain Interval (days)</Label>
                <Select value={settings.retrainInterval} onValueChange={(value) => setSettings({ ...settings, retrainInterval: value })}>
                  <SelectTrigger id="retrainInterval">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confidenceThreshold">Confidence Threshold (%)</Label>
                <Select value={settings.confidenceThreshold} onValueChange={(value) => setSettings({ ...settings, confidenceThreshold: value })}>
                  <SelectTrigger id="confidenceThreshold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="65">65%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="85">85%</SelectItem>
                    <SelectItem value="90">90%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Retrain All Models Now
                </Button>
              </div>
              <Button onClick={handleSave} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance Settings
              </CardTitle>
              <CardDescription>
                Customize the look and feel of ARCHAEO-SCAN
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select value={settings.theme} onValueChange={(value) => setSettings({ ...settings, theme: value })}>
                  <SelectTrigger id="theme">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={settings.language} onValueChange={(value) => setSettings({ ...settings, language: value })}>
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleSave} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
