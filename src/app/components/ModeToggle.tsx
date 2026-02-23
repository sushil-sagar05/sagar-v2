'use client'

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    // Create reveal element
    const reveal = document.createElement("div")
    reveal.className = "theme-reveal"
    reveal.style.setProperty("--x", `${x}px`)
    reveal.style.setProperty("--y", `${y}px`)

    document.body.appendChild(reveal)

    // Toggle theme
    setTheme(theme === "light" ? "dark" : "light")

    // Remove after animation
    setTimeout(() => {
      reveal.remove()
    }, 600)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full w-10 h-10 border border-gray-200 dark:border-gray-800"
      onClick={handleToggle}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}