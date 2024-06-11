'use client';

import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import HomePage from "./(home)/HomePage";
import { MenuItem } from "@/components/MenuList/MenuItem";
import { MenuList } from "@/components/MenuList/MenuList";
import { MaterialItem } from "@/components/MaterialList/MaterialItem";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header/>
			<HomePage/>
			<MenuList/>
			<MaterialItem/>

		</main>
	);
}
