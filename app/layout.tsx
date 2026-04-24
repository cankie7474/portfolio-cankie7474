import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Can Kayac | Full Stack Developer",
  description: "Portfolio website of Can Kayac, a full stack developer from Austria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
