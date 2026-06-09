import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { MobileStickyCta } from '@/components/layout/MobileStickyCta'
import { STUDIO_NAME } from '@/content/siteCopy'
import { homepageFAQ } from '@/content/faq'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const SITE_URL = 'https://runmadeagency.com'
const SITE_TITLE = `${STUDIO_NAME} — Custom Software for Growing Businesses`
const SITE_DESCRIPTION =
  'We build custom software shaped around how your business actually works: internal tools, workflow automation, and client portals for SMBs. Free consultation and prototype preview.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${STUDIO_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: STUDIO_NAME,
  authors: [{ name: STUDIO_NAME }],
  creator: STUDIO_NAME,
  publisher: STUDIO_NAME,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: STUDIO_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${STUDIO_NAME} — Custom software for growing businesses`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#070A12',
  width: 'device-width',
  initialScale: 1,
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: STUDIO_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: STUDIO_NAME,
  url: SITE_URL,
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFAQ
    .filter((item) => item.answer && !item.cta)
    .map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <NavBar heroDark />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  )
}
