import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Cupcake Dream Shop",
  description: "Delight in our heavenly cupcakes and baked goods, crafted to make your sweetest dreams come true.",
  keywords: "cupcakes, bakery, sweets, treats, Cupcake Dream, cake pops, cookies",
  authors: [{ name: "Jaze Media" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>The Cupcake Dream Shop</title>
        <meta name="description" content="Delight in our heavenly cupcakes and baked goods, crafted to make your sweetest dreams come true." />
        <meta name="keywords" content="cupcakes, bakery, sweets, treats, Cupcake Dream, cake pops, cookies" />
        <meta name="author" content="Jaze Media" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
