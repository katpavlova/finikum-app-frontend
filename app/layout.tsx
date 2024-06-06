import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/global.css";


const inter = Manrope({ subsets: ["cyrillic"] });




export const metadata: Metadata = {
	title: "Финикум - региональный центр финансовой грамотности Ростовской области",
	description: "Цифровая платформа регионального центра финансовой грамонтости Ростовской области 'Финикум'",
	icons:{
		icon: './favicon.ico'
	}
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
