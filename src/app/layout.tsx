import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui/FloatingContact';
import DynamicHead from '@/components/layout/DynamicHead';
import PageTransition from '@/components/ui/PageTransition';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'تي دي للخدمات اللوجستية | شريكك الموثوق في الخدمات اللوجستية',
    template: '%s | تي دي للخدمات اللوجستية',
  },
  description:
    'شريكك الموثوق في الخدمات اللوجستية. نقدم خدمات لوجستية متكاملة بأعلى معايير الجودة والأمان في المملكة العربية السعودية.',
  keywords: [
    'شحن سريع السعودية',
    'توصيل الرياض',
    'خدمات لوجستية',
    'تي دي للخدمات اللوجستية',
    'TD Logistics',
  ],
  metadataBase: new URL('https://tdlogistics.sa'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Icons */}
        <link rel="icon" href="/tabicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/tabicon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Performance */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        <meta name="theme-color" content="#1a365d" />

        {/* Google Ads / GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M6D4D0936Z"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6D4D0936Z');
          `}
        </Script>

        {/* Global styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              *{margin:0;padding:0;box-sizing:border-box}
              html{scroll-behavior:smooth;overflow-x:hidden}
              body{font-family:'Cairo',sans-serif;direction:rtl}
            `,
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <LanguageProvider>
          <DynamicHead />
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
