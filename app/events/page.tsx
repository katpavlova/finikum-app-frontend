'use client';
import { Header } from "@/components/Header/Header";
import styles from "./events.module.css";
import cn from 'classnames';
import { Button } from "@/components/Button/Button";
import Link from "next/link";



export default function Events() {
    

	return <>
		<Header/>
		<div className={cn('container')}>
			<div className={styles.info}>
                На данный момент мероприятия не планируются
				<Link href='/home' className={styles.info_a}>
					<Button appearance="primary_white">На главную</Button>

				</Link>
			</div>

		</div>
	</>;

}