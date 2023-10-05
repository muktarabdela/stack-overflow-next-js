import { ClerkProvider } from '@clerk/nextjs'
import React from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import type { Metadata } from 'next'
import "./globals.css"

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})
const SpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-SpaceGrotesk'
})

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community_driven paltform asking and answering programing questions get help, share knowledge, and collaborate with developers from around the world. explore topics in web development, mobile development, algorithms, data structure, and more.",
  icons: {
    // icon: '../public/assets/images/site-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${SpaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}