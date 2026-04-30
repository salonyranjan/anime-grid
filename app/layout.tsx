import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Grid — Your Personal Collection",
  description:
    "Discover, track, and explore your favourite anime series with Anime Grid.",
  keywords: ["anime", "manga", "collection", "tracker", "watchlist"],
  authors: [{ name: "Anime Grid" }],
  openGraph: {
    title: "Anime Grid",
    description: "Your personal anime collection tracker",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}