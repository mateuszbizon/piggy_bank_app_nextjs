import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import { ToastContainer } from "react-toastify";

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
          <ToastContainer position="top-center" autoClose={4000} />
          <main className="main-container max-w-3xl items-center">
            {children}
          </main>
          </body>
      </html>
    </ClerkProvider>
  );
}