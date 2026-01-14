import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Un Mar de Colores',
  description: 'Promoting equity in surfing by celebrating diversity and connection with the ocean',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  )
}
