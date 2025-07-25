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
  description: "Hello! I'm Rolly O. Paredes, an experienced administrative professional. I specialize in training coordination, digital operations management, and creative problem-solving. My skills include streamlining scheduling, enhancing communication, and managing social media. I am proficient in virtual assistance, graphic design, funnel management, and web development, and I am committed to supporting organizational goals efficiently and with attention to detail.",
  keywords: "full-stack developer, web developer, graphic designer, virtual assistant, React, Next.js, TypeScript, UI/UX design",
  authors: [{ name: "Rolly Paredes" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/loo.png",
  },
  openGraph: {
    title: "Rolly Paredes - Full-Stack Developer & Designer",
    description: "Hello! I'm Rolly O. Paredes, an experienced administrative professional. I specialize in training coordination, digital operations management, and creative problem-solving. My skills include streamlining scheduling, enhancing communication, and managing social media. I am proficient in virtual assistance, graphic design, funnel management, and web development, and I am committed to supporting organizational goals efficiently and with attention to detail.",
    url: "https://rollyparedes.net",
    siteName: "Rolly Paredes Portfolio",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/f389f443-ca86-4893-b616-2c33ce3901aa.png?token=mMxIb8BfXFIRFfVhWoquy6UOYjvOpyyiA1sayGZsLpg&height=630&width=1200&expires=33289419599",
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
    description: "Hello! I'm Rolly O. Paredes, an experienced administrative professional. I specialize in training coordination, digital operations management, and creative problem-solving. My skills include streamlining scheduling, enhancing communication, and managing social media. I am proficient in virtual assistance, graphic design, funnel management, and web development, and I am committed to supporting organizational goals efficiently and with attention to detail.",
    images: ["https://opengraph.b-cdn.net/production/images/f389f443-ca86-4893-b616-2c33ce3901aa.png?token=mMxIb8BfXFIRFfVhWoquy6UOYjvOpyyiA1sayGZsLpg&height=630&width=1200&expires=33289419599"],
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
