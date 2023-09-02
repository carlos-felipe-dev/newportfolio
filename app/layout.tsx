import './globals.css'
import type { Metadata } from 'next'
import Header from './components/header'
import { Syne, Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Carlos Felipe Portfolio',
  description: 'Junior Web Developer portfolio featuring: projects, about page, and contact page.',
}

const syne = Syne({ subsets: ['latin'], display: 'swap', variable: '--font-syne'})
const inter = Inter({ subsets: ['latin'], display: 'swap'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${syne.variable}`}>
      <body>
        <div className='bg-black'>
          <div className='flex flex-col min-h-screen text-neutral-100 items-center'>
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
