import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Simple animation effect
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      container.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative w-full h-full">
        <img
          src="/img/1.jpg"
          alt="Altheia Dashboard"
          width={600}
          height={500}
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Floating UI elements for 3D effect */}
       

        <div
          className="absolute bottom-[20%] left-[15%] bg-white p-3 rounded-lg shadow-lg"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs font-medium">Tarea completada</p>
              <p className="text-xs text-gray-500">Milestone alcanzado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
