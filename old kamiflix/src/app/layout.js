import { Inter } from 'next/font/google'
import './globals.css'
import { NextUiProvider } from "./NextUiProvider";
// import NextTopLoader from 'nextjs-toploader';
import Search from '@/components/search/Search'
import GoToTop from '@/components/GoToTop';
// import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import Script from "next/script";
import { getAuthSession } from './api/auth/[...nextauth]/route';
import { Toaster } from 'sonner'
import Changelogs from '../components/Changelogs';
import FloatingButton from '@/components/FloatingButton';
import { AuthProvider } from './SessionProvider';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })
//const myfont = localFont({ src: "../static-fonts/AldotheApache.ttf" })

const APP_NAME = "KamiFlix";
const APP_DEFAULT_TITLE = "KamiFlix - Watch Anime Online";
const APP_DESCRIPTION = "Discover a world of anime without interruptions on KamiFlix! Watch your favorite series for free, with no ads to disrupt your viewing experience. Join now and immerse yourself in the captivating stories and vibrant characters that KamiFlix has to offer!";

export const metadata = {
  metadataBase: new URL('https://www/Kamiflix.xyz'),
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  keywords: [
    'kamiflix',
    'anime',
    'anilist-tracker',
    'trending anime',
    'watch anime subbed',
    'watch anime dubbed',
    'latest anime episodes',
    'anime streaming sub',
    'anime streaming dub',
    'subbed anime online',
    'dubbed anime online',
    'new anime releases',
    'watch anime sub and dub',
    'anime episodes subtitles',
    'english dubbed anime',
    'subbed and dubbed series',
    'anime series updates',
    'anime episodes english sub',
    'anime episodes english dub',
    'latest subbed anime',
    'latest dubbed anime',
    'subbed anime streaming',
    'dubbed anime streaming',
    'KamiFlix latest anime',
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};


export default async function RootLayout({ children }) {
  const session = await getAuthSession();

  return (
    <html lang="en" className='dark text-foreground bg-background' suppressHydrationWarning={true}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TLRN3K1KXL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TLRN3K1KXL');`}
      </Script>
      <head>
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-57x57-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-60x60-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-72x72-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-76x76-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-114x114-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-120x120-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-144x144-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-152x152-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-180x180-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="196x196" href="/android-chrome-196x196.png" />
      <meta name="google-site-verification" content="vBxvC-ztGC2krNZlGJ43xlR6IeF63fYC3cW_0Hn4jy0" />
      <meta property="twitter:image" content="https://res.cloudinary.com/djdi5hkyx/image/upload/v1737643359/cdowg96tepilyiic6ylc.png"></meta>
      <meta property="og:image" content="https://res.cloudinary.com/djdi5hkyx/image/upload/v1737643359/cdowg96tepilyiic6ylc.png"></meta>
      <meta property="og:url" content="https://kamiflix.xyz"></meta>
      <link rel="canonical" href="https://kamiflix.xyz"></link>
        {/* <script src="https://kit.fontawesome.com/c189d5d7c5.js" crossOrigin="anonymous" async></script> */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="8da743c9-3666-4c92-804e-a1ead3cfdace"></script>
      </head>
      <body className={inter.className}>
        <AuthProvider session={session}>
          <NextUiProvider>
            {children}
          </NextUiProvider>
        </AuthProvider>
        {/* <NextTopLoader color="#CA1313" className="z-[99999]" /> */}
        <Toaster richColors={true} closeButton={true} theme="dark" />
        <Search />
        <Changelogs />
        <FloatingButton session={session} />
        <GoToTop />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
