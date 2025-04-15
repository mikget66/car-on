import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

import { caveatRegular, caveatMedium, caveatSemiBold, caveatBold } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "CarOn.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${caveatRegular.variable} ${caveatMedium.variable} ${caveatSemiBold.variable} ${caveatBold.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
