import type { Metadata } from "next";

import "./globals.css";
import LenisProvider from "@/components/core/LenisProvider";

export const metadata: Metadata = {
  title: "All In One",
  description: "Gsap + Lenis Animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
