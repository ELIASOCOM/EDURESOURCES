import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Complete Academic Hub - Free Study Resources & Video Lessons',
  description: 'Complete Academic Hub provides 3,200+ free educational resources including 500+ video lessons, 800+ study notes, 1500+ past papers, and 600+ lesson plans for students and teachers. Smart search, flexible views, and optimized for mobile.',
  keywords: 'education resources, free study materials, video lessons, past papers, exam notes, teaching resources, lesson plans, continuous assessment, educational platform, study guides, free education',
  authors: [{ name: 'Complete Academic Hub' }],
  creator: 'Academic Education Platform',
  publisher: 'Complete Academic Hub',
  applicationName: 'Complete Academic Hub',
  category: 'Education',
  classification: 'Education',
  referrer: 'strict-origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 fontSize=%2290%22>📚</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 fontSize=%2290%22>📚</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 fontSize=%2290%22>📚</text></svg>',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Complete Academic Hub',
    title: 'Complete Academic Hub - Free Educational Resources for Students & Teachers',
    description: 'Access 3,200+ free educational resources: 500+ video lessons, 800+ study notes, 1500+ past papers, 600+ lesson plans. Smart search with typo tolerance. Mobile optimized.',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Complete Academic Hub - Educational Resources Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@academic_hub',
    creator: '@academic_hub',
    title: 'Complete Academic Hub - Free Study Resources',
    description: 'Access 3,200+ free educational resources including video lessons, study notes, past papers, and lesson plans. Intelligent search with mobile optimization.',
    images: {
      url: 'https://yourdomain.com/twitter-image.png',
      alt: 'Complete Academic Hub',
    },
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  manifest: '/site.webmanifest',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
