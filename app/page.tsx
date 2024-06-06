import styles from "./page.module.css";
import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { useRef } from "react";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header/>
			<div className="container">
				<Htag tag='h1' style="h1_dark">Привет</Htag>
				<Button appearance="primary">Привет</Button>
				<Button appearance="secondary">Привет</Button>
			</div>

		</main>
	);
}
