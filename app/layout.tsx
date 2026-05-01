import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://your-deployment-url.vercel.app" // Replace with your actual domain
      : "http://localhost:3000"
  ),
  title: "Anime Grid — Your Personal Collection Tracker",
  description:
    "Discover, track, and explore legendary anime series with AnimeGrid, built with Next.js 14.",
  keywords: ["anime", "manga", "collection", "tracker", "watchlist", "Next.js", "Server Actions"],
  authors: [{ name: "Salony Ranjan" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Anime Grid",
    description: "Your personal anime collection tracker",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AnimeGrid Neon Logo",
      },
    ],
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
    <html lang="en" suppressHydrationWarning translate="no">
      <body>
        {children}
      </body>
    </html>
  );
}