import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import './globals.css';
import SeoScripts from "./components/seo/SeoScripts";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 
  metadataBase: new URL('https://gradeplusapp.com'),
  title: "GradePlus | AI-Powered Learning",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SeoScripts />
        {children}
      </body>
    </html>
  );
}