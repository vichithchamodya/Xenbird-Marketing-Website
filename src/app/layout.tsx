import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xenbird - Launch Your Custom eCommerce Website in Days",
  description:
    "Launch custom-coded eCommerce websites in days, not months. Explore 12+ industry-specific demos and get a fully customized online store tailored to your business.",
  keywords: [
    "eCommerce",
    "custom website",
    "online store",
    "fast launch",
    "demo-first",
  ],
  authors: [{ name: "Xenbird" }],
  openGraph: {
    title: "Xenbird - Custom eCommerce Websites in Days",
    description:
      "Launch your custom-coded eCommerce website in days with Xenbird's demo-first approach.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
