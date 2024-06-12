// use client

import Link from "next/link";
import { Button } from "../Button/Button";
import Image from 'next/image';
import styles from './Header.module.css';
import useWindowSize from "@/hooks/useWindowSize";
import { HeaderMenu } from "./Header_menu";
import { HeaderMobile } from "./Header_mobile";




export const Header = (): JSX.Element => {
	const {width} = useWindowSize();
	
	return (<>
		<div className={styles.header}>
			<div className="container">
				{ 
					((width > 1280) || (width == 1280)) &&
                    <div className={styles.header_wrapper}>
                    	<Link className={styles.header_logo} href='/'>
                    		<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
                    		<span className={styles.header_logo__text}>Региональный центр финансовой грамотности Ростовской области</span>
                    	</Link>

                    	<div className={styles.header_menu}>
                    		<a className={styles.header_menu__link}>О центре</a>
                    		<a className={styles.header_menu__link}>Учебные материалы</a>
                    		<a className={styles.header_menu__link}>Цифровые финансовые услуги</a>
                    		<a className={styles.header_menu__link}>Мероприятия</a>
                    		<a className={styles.header_menu__link}>Новости</a>
                    		<Button appearance="primary">Личный кабинет</Button>
                    	</div>
                    </div>
				}
				{ (width <= 1280) && (width > 800) && <HeaderMenu/> }
				{ (width <= 800) && <HeaderMobile/> }
			</div>
		</div>
	</>);
};