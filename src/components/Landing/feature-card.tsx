import { useState } from "react"
import { Sparkles, Users, Shield, BarChart, Zap, Globe, ArrowRight, type LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Sparkles":
        return Sparkles
      case "Users":
        return Users
      case "Shield":
        return Shield
      case "BarChart":
        return BarChart
      case "Zap":
        return Zap
      case "Globe":
        return Globe
      default:
        return Sparkles
    }
  }

  const Icon = getIcon()

  return (
    <div
      className={`bg-white rounded-xl p-8 transition-all duration-300 ${
        isHovered ? "shadow-xl transform -translate-y-1" : "shadow-md hover:shadow-xl"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-100 to-indigo-100 flex items-center justify-center mb-6">
        <Icon className={`h-6 w-6 ${isHovered ? "text-violet-600" : "text-violet-500"}`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href="#"
        className={`inline-flex items-center text-sm font-medium ${isHovered ? "text-violet-700" : "text-violet-600"}`}
      >
        Learn more
        <ArrowRight
          className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "transform translate-x-1" : ""}`}
        />
      </a>
    </div>
  )
}
