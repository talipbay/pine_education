import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Pine Education - Cultivating Minds, Growing Futures",
  description:
    "Premium educational experiences that nurture intellectual growth and personal development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} antialiased font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
