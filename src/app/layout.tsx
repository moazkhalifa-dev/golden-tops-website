import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Tops | Premium Contracting & Finishing Solutions",
  description:
    "Trusted contracting, finishing, and interior solutions company delivering premium quality projects across Saudi Arabia.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
