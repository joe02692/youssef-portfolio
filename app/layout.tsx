import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { profile } from "@/lib/site";
import { THEME_COLORS, themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  title,
  description: profile.bio,
  authors: [{ name: profile.name, url: profile.linkedin }],
  keywords: [
    "Intelligent Systems Engineering",
    "AI Engineer",
    "Embedded Systems",
    "RAG",
    "Computer Vision",
    "Next.js",
    profile.name,
  ],
  openGraph: {
    title,
    description: profile.bio,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLORS.light,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-theme is rewritten by the inline script before paint when the
    // visitor has chosen dark, hence suppressHydrationWarning.
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
