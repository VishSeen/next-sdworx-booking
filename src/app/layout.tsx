'use client'

import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/styles/fonts'
import SideBar from '@/components/side-bar/side-bar'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
              <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
              />
        </head>

          <body style={poppins.style}>
                <SideBar />
                {children}
          </body>
    </html>
  )
}
