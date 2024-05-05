import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camryn Roadley",
  description: "Web Development and Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
