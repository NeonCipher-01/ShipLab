import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShipLab — AI Product Development Studio",
  description:
    "ShipLab helps founders and businesses turn ideas into production-ready AI MVPs, SaaS products, agents, and internal tools.",
  keywords: [
    "AI MVP development",
    "SaaS product development",
    "AI agents",
    "AI product studio",
    "MVP development",
    "AI software development",
    "full-stack development",
    "AI product engineering",
  ],
  openGraph: {
    title: "ShipLab — AI Product Development Studio",
    description:
      "ShipLab helps founders and businesses turn ideas into production-ready AI MVPs, SaaS products, agents, and internal tools.",
    type: "website",
    url: "https://shiplab.dev",
    siteName: "ShipLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipLab — AI Product Development Studio",
    description:
      "ShipLab helps founders and businesses turn ideas into production-ready AI MVPs, SaaS products, agents, and internal tools.",
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
