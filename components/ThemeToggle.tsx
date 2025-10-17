"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const icon =
    theme === "dark" ? (
      <Moon className="h-[1.2rem] w-[1.2rem]" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem]" />
    )

  const handleToggle = () => {
    const current = theme === "dark" ? "dark" : "light"
    const next = current === "dark" ? "light" : "dark"
    setTheme(next)
  }

  return (
    <Button variant="outline" size="icon" onClick={handleToggle} aria-label="Toggle theme">
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
