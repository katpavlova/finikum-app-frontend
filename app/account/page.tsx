'use client';
import { Header } from "@/components/Header/Header";
import styles from './styles.module.css';
import cn from 'classnames';
import Image from "next/image";
import { useState } from "react";
import PersonWrapper from "./PersonWrapper";
import Raiting from "./Raiting";
import Portfolio from "./Portfolio";
import Link from "next/link";



export default function Account() {
	const [item, setItem] = useState('Личные данные');

	const setLD = () => {
		setItem('Личные данные');
	};
	const setR = () => {
		setItem('Рейтинг');
	};
	const setP = () => {
		setItem('Мое портфолио');
	};


	return<>
		<Header/>

		<div className={cn('container', styles.left)}>
			<div className={styles.menu}>
				<div className={styles.menu_item} onClick={setLD}>
					<Image src='icons/user.svg' height={21} width={21} alt='user'/>
					<p className={styles.menu_item__p}>Личные данные</p>
				</div>
				<div className={styles.menu_item} onClick={setR}>
					<Image src='icons/rating.svg' height={21} width={21} alt='user'/>
					<p className={styles.menu_item__p}>Рейтинг</p>
				</div>
				<div className={styles.menu_item} onClick={setP}>
					<Image src='icons/portfolio.svg' height={21} width={21} alt='user'/>
					<p className={styles.menu_item__p}>Мое портфолио</p>
				</div>
				<div className={styles.line}></div>
				<div className={styles.menu_item}>
					<Image src='icons/logout.svg' height={21} width={21} alt='user'/>
					<Link href={'/home'}><p className={styles.menu_item__p}>Выйти</p></Link>
				</div>
			</div>
			{item === 'Личные данные' && <PersonWrapper/>}
			{item === 'Рейтинг' && <Raiting/>}
			{item === 'Мое портфолио' && <Portfolio/>}
		</div>
	</>;
}