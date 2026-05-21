import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { STUDIO_NAME } from '@/content/siteCopy'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: `${STUDIO_NAME} — Custom Software for Growing Businesses`,
    template: `%s | ${STUDIO_NAME}`,
  },
  description:
    'We build custom software shaped around how your business actually works — internal tools, workflow automation, and client portals for SMBs.',
  openGraph: {
    type: 'website',
    siteName: STUDIO_NAME,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-base text-text-primary">
        <NavBar heroDark />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
