import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paiva.lat"),
  title: "Paiva — Frontend",
  description:
    "Paiva. Frontend. Interfaces para produtos que as pessoas usam de verdade.",
  openGraph: {
    title: "Paiva — Frontend",
    description:
      "Paiva. Frontend. Interfaces para produtos que as pessoas usam de verdade.",
    url: "https://paiva.lat",
    siteName: "Paiva",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paiva — Frontend",
    description:
      "Paiva. Frontend. Interfaces para produtos que as pessoas usam de verdade.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
