import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fux AI Prototype',
  description: 'Explore the future of AI with our cutting-edge prototype',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <header className="bg-zinc-900 shadow-md p-4">
          <nav className="container mx-auto">
            <h1 className="text-2xl font-bold text-blue-400">Fux AI Prototype</h1>
          </nav>
        </header>

        <main className="flex-grow container mx-auto py-8">
          {children}
        </main>

        <footer className="bg-zinc-900 shadow-md p-4 mt-auto">
          <div className="container mx-auto">
            <p className="text-center text-gray-400">
              © 2023 Fux AI Prototype. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
