import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import './globals.css';

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 // title: "Gradeplus - Transforming Your School",
 // description: "Gradeplus app.com",
  metadataBase: new URL('https://gradeplusapp.com'),
  title: "Gradeplus | AI-Powered Learning",
  description: 'Stuck on a problem? Simply snap a picture. GradePlus uses advanced AI tools to help students solve questions instantly and empower educators.',
  authors: [{ name: 'GradePlus Team', url: 'https://gradeplusapp.com' }],
  publisher: 'IBLIB Educations',
  verification: {
    google: '-Ecqyvlt8qV-pn8_dUuGy7Gu75CAuSSVPBzkMGF3bWk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-G9DGBFNC7Q" 
          strategy="afterInteractive" 
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G9DGBFNC7Q');
            `
          }} 
        />
        {children}
      </body>
    </html>
  );
}
