"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Zap, TrendingUp, Clock, Pizza } from "lucide-react"
import { useEffect, useState } from "react"

interface WelcomeSectionProps {
  user:
    | {
        name?: string | null
        email?: string | null
        image?: string | null
      }
    | undefined
}

export function WelcomeSection({ user }: WelcomeSectionProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    { label: "Active Orders", value: "42", icon: Pizza, color: "from-purple-500 to-pink-500" },
    { label: "Revenue Today", value: "$1,337", icon: TrendingUp, color: "from-cyan-500 to-blue-500" },
    { label: "Avg Delivery", value: "23min", icon: Clock, color: "from-green-500 to-emerald-500" },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-3 glass-card neon-border px-6 py-3 rounded-full">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold neon-text bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hello, {user?.name?.split(" ")[0] || "User"}!
            </h1>
            <p className="text-sm text-gray-400">
              {currentTime.toLocaleTimeString()} • {currentTime.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            className="glass-card neon-border p-6 relative overflow-hidden group hover:scale-105 transition-all duration-300"
          >
            {/* Animated background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center glow-animation`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                  Live
                </Badge>
              </div>

              <div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Welcome message */}
      <Card className="glass-card neon-border p-8 text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 animate-pulse" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-8 h-8 text-cyan-400 glow-animation" />
            <h2 className="text-3xl font-bold neon-text bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to the Future of Pizza
            </h2>
            <Zap className="w-8 h-8 text-purple-400 glow-animation" />
          </div>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            You've entered the most advanced pizza management system in the galaxy. Navigate through your cyberpunk
            dashboard to manage orders, track deliveries, and experience the future of food service.
          </p>

          <div className="flex items-center justify-center space-x-8 pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2 glow-animation">
                <Pizza className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-sm text-gray-400">Quantum Pizzas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-2 glow-animation">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="text-sm text-gray-400">Lightning Fast</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2 glow-animation">
                <TrendingUp className="w-8 h-8 text-pink-400" />
              </div>
              <p className="text-sm text-gray-400">Neural Analytics</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
