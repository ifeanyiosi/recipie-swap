import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChowSwap",
  description: "Made by Ifeanyi Osi-Okeke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={lexend.className}>
          <div className="w-full min-h-screen">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
