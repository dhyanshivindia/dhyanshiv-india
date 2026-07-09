import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { Providers } from '@/app/providers'
import { OrganizationSchema } from '@/lib/schema'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dhyanshiv India | Enterprise Compliance & Tech Services',
  description:
    'Corporate tech delivery, compliance automation, secure payments, and workflow optimization for regulated enterprises.',
  keywords: [
    'compliance automation',
    'corporate tech',
    'enterprise services',
    'workflow automation',
    'secure payments',
  ],
  authors: [{ name: 'Dhyanshiv India Private Limited' }],
  creator: 'Dhyanshiv India',
  publisher: 'Dhyanshiv India',
  metadataBase: new URL('https://dhyanshivindia.in'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/android-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Dhyanshiv India',
  },
  manifest: '/manifest.json',
  themeColor: '#0891b2',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dhyanshivindia.in',
    siteName: 'Dhyanshiv India',
    title: 'Dhyanshiv India | Enterprise Compliance & Tech Services',
    description:
      'Corporate tech delivery, compliance automation, secure payments, and workflow optimization.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dhyanshiv India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhyanshiv India | Enterprise Services',
    description: 'Compliance, tech delivery, and workflow automation for enterprises.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <OrganizationSchema />
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-white text-slate-900 dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <Providers>
          <SiteHeader />
          <main id="main-content" className="min-h-[calc(100vh-200px)]">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}

