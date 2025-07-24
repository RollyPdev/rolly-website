import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rolly Paredes - Full-Stack Developer & Designer",
  description: "Professional full-stack developer, graphic designer, and virtual assistant. Crafting digital excellence from code to canvas with modern web technologies and creative design solutions.",
  keywords: "full-stack developer, web developer, graphic designer, virtual assistant, React, Next.js, TypeScript, UI/UX design",
  authors: [{ name: "Rolly Paredes" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/loo.png",
  },
  openGraph: {
    title: "Rolly Paredes - Full-Stack Developer & Designer",
    description: "Professional full-stack developer, graphic designer, and virtual assistant. Crafting digital excellence from code to canvas.",
    url: "https://rollyparedes.com",
    siteName: "Rolly Paredes Portfolio",
    images: [
      {
        url: "/rollyparedes.jpg",
        width: 1200,
        height: 630,
        alt: "Rolly Paredes - Full-Stack Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolly Paredes - Full-Stack Developer & Designer",
    description: "Professional full-stack developer, graphic designer, and virtual assistant.",
    images: ["/rollyparedes.jpg"],
  },
  alternates: {
    canonical: "https://rollyparedes.com",
  },
  verification: {
    google: "av8dabb1ffQj9a-3z2ODoTcThcnDH9PJlhF_PpQZUaM",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
