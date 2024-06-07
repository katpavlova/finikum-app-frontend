'use client';

import Link from "next/link";
import { Button } from "../Button/Button";
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from "react";
import { HeaderSecondMenu } from "./Header_second_menu";
import { HeaderSecondMobile } from "./Header_second_mobile";




export const HeaderMobile = (): JSX.Element => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	const changeMenuState = () => {
		setMenuIsOpen(!menuIsOpen);
	};

	return (<>
		<div className={styles.header__mobile}>
			<div className="container">
				<div className={styles.header_wrapper__mobile}>
					<div className={styles.header_logo}>
						<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
						<span className={styles.header_logo__text}>Региональный центр финансовой грамотности Ростовской области</span>
					</div>
					<Image src="/icons/menu.svg" alt="menu" className={styles.button_menu} width={24} height={24} onClick={changeMenuState}/>
				</div>
			</div>
			{menuIsOpen && <HeaderSecondMobile/>}
		</div>
	</>);
};