import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import "./globals.css";
import './globals.css';

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
  title: "Gradeplus - Transforming Your School",
  description: 'The complete management solution for schools and institutes.',
  authors: [{ name: 'GradePlus Team', url: 'https://gradeplusapp.com' }],
  publisher: 'IBLIB Educations',
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
        {children}
      </body>
    </html>
  );
}
