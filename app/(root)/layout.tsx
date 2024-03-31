import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import BottomBar from "@/components/shared/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Piggy bank manager",
	description: "Controlling the amount of money in the piggy bank",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<Topbar />
					<main className='flex'>
						<LeftSidebar />
						<section className='flex flex-col pt-24 px-5'>{children}</section>
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
