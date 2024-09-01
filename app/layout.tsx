import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "variable" });

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
      <body className={inter.className+" select-none"}>{children}</body>
    </html>
  );
}
