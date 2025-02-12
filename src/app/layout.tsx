import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const jeju = Nanum_Myeongjo({
	variable: "--font-jeju-myeongjo",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Event Manager",
	description: "Number one event manager",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jeju.className} w-full mx-auto antialiased`}>
				<Header />
				<main className="sm:pt-[102px] pt-[80px]">{children}</main>
			</body>
		</html>
	);
}
