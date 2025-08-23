import type React from "react"
import type { Metadata } from "next"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Barclay Leach - Full Stack Developer",
  description: "Portfolio of Barclay Leach - Full Stack Developer specializing in React, Next.js, SASS, and Django",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}
