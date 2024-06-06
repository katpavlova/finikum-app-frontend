import Link from "next/link";
import { Button } from "../Button/Button";
import Image from 'next/image';
import styles from './Header.module.css';



export const Header = (): JSX.Element => {
	
	return (<>
		<div className={styles.header}>
			<div className="container">
				<div className={styles.header_wrapper}>
					<div className={styles.header_logo}>
						<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
						<span className={styles.header_logo__text}>Региональный центр финансовой грамотности Ростовской области</span>
					</div>

					<div className={styles.header_menu}>
						<a className={styles.header_menu__link}>О центре</a>
						<a className={styles.header_menu__link}>Учебные материалы</a>
						<a className={styles.header_menu__link}>Цифровые финансовые услуги</a>
						<a className={styles.header_menu__link}>Мероприятия</a>
						<a className={styles.header_menu__link}>Новости</a>
						<Button appearance="primary">Личный кабинет</Button>
					</div>
				</div>
			</div>
		</div>
	</>);
};