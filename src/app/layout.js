import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AntdProvider from "./components/AntdProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pandya foundation",
  description: "pandya foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdProvider>
          <Header/>
          {children}
          <Footer />
        </AntdProvider>
      </body>
    </html>
  );
}
