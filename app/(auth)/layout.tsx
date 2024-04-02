import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Skarbonka online",
	description: "Wyświetlanie i zarządzanie zawartością skarbonki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pl">
        <body className={inter.className}>
          <Topbar />
          <main className="pt-24 px-4 mx-auto max-w-3xl flex flex-col">
            {children}
          </main>
          </body>
      </html>
    </ClerkProvider>
  );
}