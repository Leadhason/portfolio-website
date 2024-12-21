import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leadhason",
  description: "Personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="bg-background text-foreground min-h-screen">
            <Header />
            <main className="container mx-auto p-10 md:px-16">
              {children}
            </main>
            <footer className="container mx-auto p-4 md:p-6 text-center text-sm text-muted-foreground">
              <p>
                Built
                <a href="#" className="text-primary hover:underline">
                  {' '}
                </a>
                with Next JS and Tailwind CSS.
              </p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

