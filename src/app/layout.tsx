import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/styles/fonts'
export const metadata: Metadata = {
    title: "Seat Booking",
    description: "A seating booking system for employees."
}


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
                {children}
          </body>
    </html>
  )
}
