import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://veeraskumar-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "VeerasKumar K R — Full Stack Developer",
    template: "%s | VeerasKumar K R",
  },
  description:
    "Full Stack Developer from Madurai, Tamil Nadu. Skilled in Java, Python, FastAPI, Next.js, and React. Open to work.",
  keywords: [
    "VeerasKumar",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "FastAPI",
    "Next.js",
    "React",
    "Madurai",
    "Tamil Nadu",
    "Portfolio",
    "Fresher Developer",
  ],
  authors: [{ name: "VeerasKumar K R" }],
  creator: "VeerasKumar K R",
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "VeerasKumar K R — Full Stack Developer",
    description:
      "Full Stack Developer from Madurai. Skilled in Java, Python, FastAPI, Next.js. Open to work.",
    siteName: "VeerasKumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VeerasKumar K R — Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VeerasKumar K R — Full Stack Developer",
    description:
      "Full Stack Developer from Madurai. Java, Python, FastAPI, Next.js. Open to work.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "uGmlUSKvChz7UBSExRcjKAMw0YMxhj6OMrBCeqL7EOc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
