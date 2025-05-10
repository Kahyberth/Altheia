import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import AuthModal from "@/components/auth/auth-modal"

type AuthButtonProps = {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  defaultTab?: "login" | "register"
}

export default function AuthButton({
  variant = "default",
  size = "default",
  className = "",
  defaultTab = "login",
}: AuthButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsModalOpen(true)}>
        <LogIn className="mr-2 h-4 w-4" />
        Sign In
      </Button>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultTab={defaultTab} />
    </>
  )
}
