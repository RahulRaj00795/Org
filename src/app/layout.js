import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AntdProvider from "../components/AntdProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Pandya Foundation - Empowering Communities Through Education, Healthcare & Skill Building",
  description:
    "Pandya Foundation is a non-profit organization dedicated to supporting education, healthcare, and skill-building initiatives in India and the United States. Founded by Dr. Rajesh C. Pandya, we promote Indian culture and community development.",
  keywords:
    "Pandya Foundation, Dr. Rajesh C. Pandya, education, healthcare, skill building, non-profit, community development, Indian culture, Garba Night, New Jersey, charity, philanthropy",
  authors: [{ name: "Pandya Foundation" }],
  creator: "Pandya Foundation",
  publisher: "Pandya Foundation",
  robots: "index, follow",
  openGraph: {
    title:
      "Pandya Foundation - Empowering Communities Through Education, Healthcare & Skill Building",
    description:
      "Supporting education, healthcare, and skill-building initiatives in India and the United States. Promoting Indian culture and community development.",
    url: "https://pandyafoundation.org",
    siteName: "Pandya Foundation",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pandya Foundation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandya Foundation - Empowering Communities",
    description:
      "Supporting education, healthcare, and skill-building initiatives in India and the United States.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "https://pandyafoundation.org",
  },
  category: "Non-profit Organization",
  classification: "Charity & Philanthropy",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#68C17C",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="msapplication-TileColor" content="#68C17C" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="google-site-verification"
          content="Y1jpKm1-KlekiOVQ8VQku-6V0nmydPhvkWNux6YhhC8"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdProvider>
          <Header />
          {children}
          <Footer />
        </AntdProvider>
      </body>
    </html>
  );
}
