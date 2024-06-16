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
                    	<Link href={'/home'} className={styles.header_logo}>
                    		<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
                    		<span className={styles.header_logo__text}>Региональный центр финансовой грамотности Ростовской области</span>
                    	</Link>

                    	<div className={styles.header_menu}>
                    		<Link href='/education' className={styles.header_menu__link}>О центре</Link>
                    		<Link href='/education' className={styles.header_menu__link}>Учебные материалы</Link>
                    		<Link href='/digital_finance' className={styles.header_menu__link}>Цифровые финансовые услуги</Link>
                    		<Link href='/education' className={styles.header_menu__link}>Мероприятия</Link>
                    		<Link href='/education' className={styles.header_menu__link}>Новости</Link>
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