import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
