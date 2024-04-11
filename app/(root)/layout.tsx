import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import BottomBar from "@/components/shared/BottomBar";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
			<html lang='pl'>
				<body className={inter.className}>
					<Topbar />
					<ToastContainer position="top-center" autoClose={4000} />
					<main className='flex'>
						<LeftSidebar />
						<section className='main-container w-full max-w-6xl'>
							{children}
						</section>
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
