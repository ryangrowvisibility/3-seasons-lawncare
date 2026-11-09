import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], variable: "--font-body-src" });

export const metadata: Metadata = {
  title: "3 Seasons Lawncare | Lawn Care & Spring Cleanups in the Round Lake Area, ON | (613) 559-2039",
  description:
    "Owner-operated lawn care for homes and businesses in the Round Lake area of Eastern Ontario. Lawn cutting, trimming, spring cleanups and yard waste removal. Rated 4.9 on Google. Call or text Anthony at (613) 559-2039.",
  openGraph: {
    title: "3 Seasons Lawncare | Round Lake Area, Ontario",
    description: "Neat lawns, honest pricing and an owner who shows up. Call or text Anthony at (613) 559-2039.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={body.variable}>
      <body>{children}</body>
    </html>
  );
}
