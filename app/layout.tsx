import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BlackjackProvider from "@/context/BlackjackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLΛƆK JΛƆK | Card Game",
  description: "Blackjack game created with NextJS + Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BlackjackProvider>
        <body className={inter.className}>{children}</body>
      </BlackjackProvider>
    </html>
  );
}
