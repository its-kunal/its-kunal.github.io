import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "variable" });
const caveat = Caveat({ subsets: ["latin"]  , variable: "--font-caveat"});

export const metadata: Metadata = {
  title: "Kunal Agrawal",
  description: "Kunal Agrawal's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + caveat.variable +" select-none"}>{children}</body>
    </html>
  );
}
