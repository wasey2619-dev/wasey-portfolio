'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className="relative rounded-full border border-border/60 bg-background/60 backdrop-blur transition-colors hover:bg-accent"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <Sun
        className={`h-[1.1rem] w-[1.1rem] transition-all duration-300 ${
          isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-[1.1rem] w-[1.1rem] transition-all duration-300 ${
          isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
