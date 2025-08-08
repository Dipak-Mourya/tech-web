import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechSolutions - Innovative Technology Solutions for Modern Businesses",
  description: "Leading provider of cloud solutions, data analytics, web development, and mobile app services. Transform your business with cutting-edge technology. Get a free consultation today.",
  keywords: "tech solutions, cloud services, data analytics, web development, mobile apps, IT consulting, digital transformation, business technology",
  authors: [{ name: "TechSolutions" }],
  robots: "index, follow",
  openGraph: {
    title: "TechSolutions - Innovative Technology Solutions",
    description: "Transform your business with our cutting-edge cloud, data, web, and mobile technology solutions. Trusted by 200+ companies worldwide.",
    type: "website",
    url: "https://techsolutions.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechSolutions - Technology Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolutions - Innovative Technology Solutions",
    description: "Transform your business with cutting-edge technology solutions. Cloud, data, web, and mobile services.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2563eb',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://techsolutions.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
