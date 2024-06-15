'use client';

import Link from "next/link";
import { Button } from "../Button/Button";
import Image from 'next/image';
import styles from './Header.module.css';


export const HeaderSecondMobile = (): JSX.Element => {


	return (<>
		<div className={styles.header__second}>
			<div className="container">
				<div className={styles.header_wrapper_second}>
					<div className={styles.header_menu}>
						<Link href='/education' className={styles.header_menu__link}>О центре</Link>
						<Link href='/education' className={styles.header_menu__link}>Учебные материалы</Link>
						<Link href='/education' className={styles.header_menu__link}>Цифровые финансовые услуги</Link>
						<Link href='/education' className={styles.header_menu__link}>Мероприятия</Link>
						<Link href='/education' className={styles.header_menu__link}>Новости</Link>
						<Button appearance="primary">Личный кабинет</Button>
						
					</div>
				</div>
			</div>
		</div>
	</>);
};