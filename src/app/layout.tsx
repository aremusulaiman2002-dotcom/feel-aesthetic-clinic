import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

// Optimize fonts with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://feelaestheticclinic.co.uk'

export const metadata: Metadata = {
  title: 'Feel Aesthetic Clinic | Nurse-Led Natural Aesthetic Treatments',
  description: 'Premium nurse-led aesthetic clinic in London offering natural, subtle enhancements. Expert treatments by Nurse Practitioner Funmi.',
  
  // Open Graph
  openGraph: {
    title: 'Feel Aesthetic Clinic | Natural Aesthetic Treatments',
    description: 'Nurse-led aesthetic clinic specializing in natural, balanced enhancements. Book your consultation today.',
    url: baseUrl,
    siteName: 'Feel Aesthetic Clinic',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Feel Aesthetic Clinic - Nurse-Led Natural Aesthetic Treatments',
      },
    ],
    type: 'website',
    locale: 'en_GB',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Feel Aesthetic Clinic',
    description: 'Natural aesthetic treatments by Nurse Practitioner Funmi',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  
  // SEO Keywords
  keywords: [
    'Feel Aesthetic Clinic',
    'Nurse Practitioner Funmi',
    'natural aesthetic treatments',
    'botox London',
    'dermal fillers London',
    'anti-wrinkle treatments',
    'nurse-led clinic UK',
    'subtle enhancements',
    'facial balancing',
    'lip filler London',
    'Prophilo treatment',
    'microneedling UK'
  ],
  authors: [
    { name: 'Nurse Practitioner Funmi', url: 'https://feelaestheticclinic.co.uk' },
    { name: 'Sulaiman Aremu', url: 'https://sulaiman-portfolio-sigma.vercel.app/' }
  ],
  creator: 'Sulaiman Aremu',
  publisher: 'Feel Aesthetic Clinic',
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
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#9CAF9C" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Developer Credit - Meta Tags */}
        <meta name="author" content="Nurse Practitioner Funmi" />
        <meta name="designer" content="Sulaiman Aremu" />
        <meta name="developer" content="Sulaiman Aremu" />
        <meta name="developer-url" content="https://sulaiman-portfolio-sigma.vercel.app/" />
        <link rel="author" href="https://sulaiman-portfolio-sigma.vercel.app/" />
        
        {/* Clinic Verification (add when you have Google Search Console) */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
      </head>
      <body className="font-sans antialiased bg-background text-text-primary min-h-screen flex flex-col">
        
        <main className="flex-grow">{children}</main>
        

        
        {/* Developer Credit - Subtle, Professional Badge */}
        <div className="fixed bottom-4 right-4 z-50 print:hidden">
          <a 
            href="https://sulaiman-portfolio-sigma.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer nofollow"
            className="group bg-white/90 backdrop-blur-sm border border-border hover:border-primary/30 text-text-secondary hover:text-primary px-3 py-2 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            aria-label="Website developed by Sulaiman Aremu (opens in new tab)"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>💚Developed by SulaimanDev</span>
            <span className="text-text-light group-hover:text-primary transition-colors">↗</span>
          </a>
        </div>
        
        {/* Print Credit - Only visible when printing */}
        <div className="hidden print:block text-center text-xs text-text-light mt-8 pt-4 border-t border-border">
          <p>© {new Date().getFullYear()} Feel Aesthetic Clinic. Website developed by Sulaiman Aremu.</p>
        </div>
      </body>
    </html>
  )
}