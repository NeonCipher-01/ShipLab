import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShipLab — AI Systems for Business Workflows",
  description:
    "ShipLab finds costly, repetitive workflows in your business and builds AI-powered systems that execute them — across the tools you already use.",
  keywords: [
    "AI workflow automation",
    "business AI systems",
    "AI receptionist",
    "lead qualification",
    "business automation",
    "AI voice agents",
    "workflow engineering",
    "business process automation",
  ],
  openGraph: {
    title: "ShipLab — AI Systems for Business Workflows",
    description:
      "ShipLab finds costly, repetitive workflows in your business and builds AI-powered systems that execute them — across the tools you already use.",
    type: "website",
    url: "https://shiplab.dev",
    siteName: "ShipLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipLab — AI Systems for Business Workflows",
    description:
      "ShipLab finds costly, repetitive workflows in your business and builds AI-powered systems that execute them.",
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
