import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShipLab — Custom AI Software for Businesses",
  description:
    "ShipLab finds costly gaps in your business and builds AI-powered systems to solve them — from lead recovery and AI receptionists to custom internal software.",
  keywords: [
    "AI software",
    "custom AI",
    "business automation",
    "AI receptionist",
    "lead recovery",
    "dental AI",
    "medspa AI",
    "business systems",
  ],
  openGraph: {
    title: "ShipLab — Custom AI Software for Businesses",
    description:
      "We solve business problems with custom AI-powered software. From lead recovery to AI receptionists to custom internal tools.",
    type: "website",
    url: "https://shiplab.dev",
    siteName: "ShipLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipLab — Custom AI Software for Businesses",
    description:
      "We solve business problems with custom AI-powered software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
