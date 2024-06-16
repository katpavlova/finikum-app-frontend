'use client';
import cn from 'classnames';
import styles from './digital_finance.module.css';
import Image from 'next/image';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';


export default function Education() {


	return <>
		<Header/>
		<div className={cn('container', styles.education_about)}>
			<div className={styles.education_about_first}>
				<div className={styles.education_about_heading}>
					<h3 className='h2_light'>
                    Учебные материалы по цифровым финансовым услугам
					</h3>
				</div>
				<div className={styles.education_about_collage}>
					<div className={styles.photo1}></div>
					<div className={styles.photo2}>
						<Image src="/img/digital_finance/terminal_3d.png" alt="logo" width={146} height={146}/>
					</div>
				</div>
			</div>
			<div className={styles.education_about_second}>
				<div className={styles.background}></div>
				<Image src="/img/digital_finance/iphone.png" alt="logo" width={500} height={580}/>
			</div>
		</div>

		<div className={cn('container', styles.education)}>
			<h3 className='h2_dark'>
				Учебные разделы
			</h3>
			<div className={styles.education_chapters}>
				<div className={styles.education_chapter1}>
					<Image src="/img/digital_finance/theme1.png" alt="logo" width={500} height={580}/>
					<div className={styles.theme1}>
						<h4 className='h4_light'>
						Мобильный банк 
						</h4>
					</div>
				</div>
				<div className={styles.education_chapter2}>
					<div className={styles.theme2}>
						<h4 className='h4_dark'>Интернет-банк</h4>
					</div>
					<div className={styles.theme2}>
						<h4 className='h4_dark'>Онлайн кредитование</h4>
					</div>
				</div>
				<div className={styles.education_chapter1}>
					<Image src="/img/digital_finance/theme4.png" alt="logo" width={500} height={580}/>
					<div className={styles.theme1}>
						<h4 className='h4_light'>
						Банкоматы, платёжные банковские и небанковские терминалы
						</h4>
					</div>
				</div>
			</div>
		</div>

		<Footer/>
	</>;
}