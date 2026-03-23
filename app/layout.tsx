import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Solutions Architect Portfolio",
  description: "Commercial CV website for a cloud solutions architect."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-[var(--font-body)] text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
