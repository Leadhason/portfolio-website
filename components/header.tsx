import Link from "next/link"
import { Github } from 'lucide-react'
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-border text-foreground">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Leadhason
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

