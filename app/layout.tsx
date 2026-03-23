import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solutions Architect Portfolio",
  description: "Commercial CV website for a cloud solutions architect."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="text-ink antialiased">{children}</body>
    </html>
  );
}
