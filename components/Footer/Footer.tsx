'use client';

import Image from 'next/image';
import styles from './Footer.module.css';



export const Footer = (): JSX.Element => {
	return(
		<footer className={styles.footer} >
			<div className={styles.about}>
				<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
				<span>Региональный центр финансовой грамотности Ростовской области</span>
			</div>
			<div className={styles.nav}>
				<h4 className='h4_dark'>
                        Навигация
				</h4>
				<div className={styles.footer_nav_links}>
					<div>О центре</div>
					<div>Учебные материалы</div>
					<div>Цифровые финансовые услуги</div>
					<div>Мероприятия</div>
					<div>Волонтерство</div>
					<div>Новости</div>
				</div>

			</div>
			<div className={styles.nav}>
				<div className={styles.footer_contacts_address}>
					<h4 className='h4_dark'>Мы находимся по адресу:</h4>
					<div className={styles.footer_contacts__item}>
						<Image src="/icons/location.svg" alt="location" width={24} height={24}/>
                            ул. Большая Садовая, 69
					</div>
				</div>
				<div className={styles.footer_contacts_address}>
					<h4 className='h4_dark'>Контакты:</h4>
					<div className={styles.footer_contacts__item}>
						<Image src="/icons/phone.svg" alt="phone" width={24} height={24}/>
                            8 (863) - 123 - 45- 67
					</div>
					<div className={styles.footer_contacts__item}>
						<Image src="/icons/mail.svg" alt="mail" width={24} height={24}/>
                            finikum@yandex.ru
					</div>
					<div className={styles.footer_contacts__item}>
						<Image src="/icons/vk.svg" alt="vk" width={24} height={24}/>
						<Image src="/icons/tg.svg" alt="tg" width={24} height={24}/>
					</div>
				</div>
			</div>
			

		</footer>
	);
};