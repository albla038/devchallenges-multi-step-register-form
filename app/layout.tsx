import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multi-Step Register Form",
  description: "From devchallenges.io",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "flex min-h-svh flex-col bg-black",
          `${inter.className} antialiased`,
        )}
      >
        {children}
      </body>
    </html>
  );
}
