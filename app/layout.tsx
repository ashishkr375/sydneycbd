import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sydney CBD Repair Centre - #1 Galaxy|iPhone|Pixel|OnePlus Specialist',
  description: 'Why Pay More? Fast Reliable Samsung, Apple, Huawei, Pixel, OnePlus Mobile Phone Screen Repair Service in Sydney CBD. All Highly Skilled Technicians from South Korea. CALL NOW',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

