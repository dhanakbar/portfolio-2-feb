import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maulana Akbar Ramadhan - Frontend Developer & UI/UX Designer",
  description:
    "Portfolio of Maulana Akbar Ramadhan, a passionate Frontend Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
  ],
  authors: [{ name: "Maulana Akbar Ramadhan" }],
  openGraph: {
    title: "Maulana Akbar Ramadhan - Frontend Developer & UI/UX Designer",
    description:
      "Portfolio showcasing my work in frontend development and UI/UX design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
