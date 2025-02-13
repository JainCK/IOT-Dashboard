"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { Home, Settings, PieChart, Thermometer, Droplet, Gauge } from "lucide-react"


// Simulated API data
const generateMockData = () => {
  const now = typeof window !== 'undefined' ? Date.now() : 0;
  return [
    {
      deviceId: "sensor-1",
      temperature: 22,
      humidity: 45,
      pressure: 1013,
      location: { latitude: 40.7128, longitude: -74.006 },
      timestamp: now - 3600000,
    },
    {
      deviceId: "thermostat-A",
      temperature: 24 + Math.random() * 3,
      humidity: 50 + Math.random() * 5,
      pressure: 1010 + Math.random() * 5,
      location: { latitude: 34.0522, longitude: -118.2437 },
      timestamp: now - 1800000,
    },
    {
      deviceId: "sensor-2",
      temperature: 18 + Math.random() * 4,
      humidity: 60 + Math.random() * 8,
      pressure: 1015 + Math.random() * 8,
      location: { latitude: 51.5074, longitude: -0.1278 },
      timestamp: now - 900000,
    },
    {
      deviceId: "sensor-3",
      temperature: 26 + Math.random() * 3,
      humidity: 55 + Math.random() * 7,
      pressure: 1012 + Math.random() * 6,
      location: { latitude: 35.6762, longitude: 139.6503 },
      timestamp: now,
    },
  ]
}

export default function Dashboard() {
  const [data, setData] = useState(generateMockData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateMockData())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const temperatureData = useMemo(() => data.map(d => ({
    time: new Date(d.timestamp).toLocaleTimeString('en-US'),
    value: d.temperature
  })), [data])

  const humidityData = useMemo(() => data.map(d => ({
    time: new Date(d.timestamp).toLocaleTimeString('en-US'),
    value: d.humidity
  })), [data])

  const pressureData = useMemo(() => data.map(d => ({
    time: new Date(d.timestamp).toLocaleTimeString('en-US'),
    value: d.pressure
  })), [data])

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-400">IoT Manager</h1>
        </div>
        <nav className="mt-6">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 mb-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <Home size={20} />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 mb-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <PieChart size={20} />
            Analytics
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 mb-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <Settings size={20} />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-400">Dashboard</h2>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-blue-500 border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Devices</CardTitle>
              <Thermometer size={20} className="text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">{data.length}</div>
              <p className="text-xs text-gray-400">Active and reporting</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-green-500 border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Temperature</CardTitle>
              <Thermometer size={20} className="text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">
                {(data.reduce((acc, d) => acc + d.temperature, 0) / data.length).toFixed(1)}°C
              </div>
              <p className="text-xs text-gray-400">Across all sensors</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-purple-500 border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Humidity</CardTitle>
              <Droplet size={20} className="text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-400">
                {(data.reduce((acc, d) => acc + d.humidity, 0) / data.length).toFixed(1)}%
              </div>
              <p className="text-xs text-gray-400">Relative humidity</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-orange-500 border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Pressure</CardTitle>
              <Gauge size={20} className="text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">
                {(data.reduce((acc, d) => acc + d.pressure, 0) / data.length).toFixed(0)} hPa
              </div>
              <p className="text-xs text-gray-400">Atmospheric pressure</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-blue-400">Temperature Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} />
                    <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-purple-400">Humidity Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={humidityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: "#1F2937", border: "none" }} />
                    <Area type="monotone" dataKey="value" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

       

        {/* Device Status */}
        <h3 className="text-xl font-semibold mb-4 text-blue-400">Device Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((device) => (
            <Card key={device.deviceId} className="bg-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">{device.deviceId}</CardTitle>
                <Thermometer size={20} className="text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-400">Temperature</p>
                    <p className="text-lg font-semibold text-blue-400">{device.temperature.toFixed(1)}°C</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Humidity</p>
                    <p className="text-lg font-semibold text-purple-400">{device.humidity.toFixed(1)}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Pressure</p>
                    <p className="text-lg font-semibold text-orange-400">{device.pressure.toFixed(0)} hPa</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Last Updated</p>
                    <p className="text-sm text-gray-300">{new Date(device.timestamp).toLocaleTimeString('en-US')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

