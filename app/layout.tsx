import type { Metadata } from 'next'
import { Inter } from 'next/font/google'/
import './globals.css'/

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'Elevate your beauty with GlamCS cosmetics - where luxury meets modern design.',
  keywords: ['cosmetics', 'GlamCS', 'luxury', 'modern', 'beauty'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-orange-600 min-h-screen antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-300 to-white">
          {children}
        </div>/
      </body>/
    </html>/
  )
}