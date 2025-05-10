import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "@/components/auth/login-form"
import RegisterForm from "@/components/auth/register-form"

interface LoginButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  buttonText?: string
}

export default function LoginButton({
  variant = "default",
  size = "default",
  className = "rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white",
  buttonText = "Iniciar sesión",
}: LoginButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open === false) {
      setTimeout(() => setActiveTab("login"), 300)
    }
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={`transition-all duration-200 ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <LogIn className="mr-2 h-4 w-4" />
        {buttonText}
      </Button>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">
              {activeTab === "login" ? "Bienvenido de nuevo" : "Crea una cuenta"}
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              {activeTab === "login"
                ? "Ingresa tus credenciales para acceder a tu cuenta"
                : "Rellena tus datos para crear una nueva cuenta"}
            </DialogDescription>
          </DialogHeader>

          <Tabs
            defaultValue="login"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "login" | "register")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
              <TabsTrigger value="register">Crear cuenta</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <LoginForm onSuccess={() => setIsOpen(false)} onRegisterClick={() => setActiveTab("register")} />
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <RegisterForm onSuccess={() => setIsOpen(false)} onLoginClick={() => setActiveTab("login")} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}
