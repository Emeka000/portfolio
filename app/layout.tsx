import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://okoli.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emeka Okoli, Software Engineer",
  description:
    "Software engineer building full-stack and on-chain applications across the Stellar and Starknet ecosystems.",
  openGraph: {
    title: "Emeka Okoli, Software Engineer",
    description:
      "Software engineer building full-stack and on-chain applications across the Stellar and Starknet ecosystems.",
    url: siteUrl,
    siteName: "Emeka Okoli",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Emeka Okoli, Software Engineer",
    description:
      "Software engineer building full-stack and on-chain applications across the Stellar and Starknet ecosystems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
