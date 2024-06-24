'use client';

import Link from "next/link";
import { Button } from "../Button/Button";
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from "react";
import { HeaderSecondMenu } from "./Header_second_menu";




export const HeaderMenu = (): JSX.Element => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	const changeMenuState = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (<>
		<div className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div>
						<Link href={'/home'} className={styles.header_logo}>
							<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
							<span className={styles.header_logo__text}>Региональный центр финансовой грамотности Ростовской области</span>
						</Link>
					</div>

					<div className={styles.header_menu}>
						<Link href='/about' className={styles.header_menu__link}>О центре</Link>
						<Link href='/education' className={styles.header_menu__link}>Учебные материалы</Link>
						<Image src="/icons/menu.svg" alt="logo" width={24} height={24} onClick={changeMenuState}/>

						<Button appearance="primary"><Link href="/auth">Личный кабинет</Link></Button>
					</div>
				</div>
			</div>
			{menuIsOpen && <HeaderSecondMenu/>}
		</div>
	</>);
};