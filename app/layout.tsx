import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Unbounded } from "next/font/google";
import "../styles/global.css";
import cn from 'classnames';



const manrope = Manrope({ subsets: ["cyrillic"] });
const unbouded = Unbounded({subsets: ["cyrillic"] });




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
		<html lang="ru">
			<body className={cn(manrope.className)}>
				
				{children}
			</body>
		</html>
	);
}
