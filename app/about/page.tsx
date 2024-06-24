'use client';
import { Header } from "@/components/Header/Header";
import styles from './styles.module.css';
import cn from 'classnames';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Finikum from "./Finicum";
import Work from "./Work";
import Documents from "./Documents";


export default function About(){

    
	const [item, setItem] = useState('Финикум');

	const setLD = () => {
		setItem('Финикум');
	};
	const setR = () => {
		setItem('Сотрудники');
	};
	const setP = () => {
		setItem('Документы');
	};


	return<>
		<Header/>

		<div className={cn('container', styles.left)}>
			<div className={styles.menu}>
				<div className={styles.menu_item} onClick={setLD}>
					<Image src='icons/rating.svg' height={21} width={21} alt='user'/>
					
					<p className={styles.menu_item__p}>Финикум</p>
				</div>
				<div className={styles.menu_item} onClick={setR}>
					<Image src='icons/user.svg' height={21} width={21} alt='user'/>
					<p className={styles.menu_item__p}>Сотрудники</p>
				</div>
				<div className={styles.menu_item} onClick={setP}>
					<Image src='icons/portfolio.svg' height={21} width={21} alt='user'/>
					<p className={styles.menu_item__p}>Документы</p>
				</div>
				<div className={styles.line}></div>
                
			</div>
			{item === 'Финикум' && <Finikum/>}
			{item === 'Сотрудники' && <Work/>}
			{item === 'Документы' && <Documents/>}
		</div>
	</>;
}