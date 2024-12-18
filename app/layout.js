'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}