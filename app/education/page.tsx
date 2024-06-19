'use client';
import cn from 'classnames';
import styles from './education.module.css';
import Image from 'next/image';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import Link from 'next/link';


export default function Education() {


	return <>
		<Header/>
		<div className={cn('container', styles.education_about)}>
			<div className={styles.education_about_first}>
				<div className={styles.education_about_heading}>
					<h3 className='h2_light'>
                    Учебные материалы для повышения финансовой грамотности
					</h3>
				</div>
				<div className={styles.education_about_collage}>
					<div className={styles.photo1}></div>
					<div className={styles.photo2}>
						<Image src="/img/education/Folder_3D.png" alt="logo" width={146} height={146}/>
					</div>
				</div>
			</div>
			<div className={styles.education_about_second}>
				<div className={styles.background}></div>
				<Image src="/img/education/IPhone_mockup.png" alt="logo" width={500} height={580}/>
			</div>
		</div>

		<div className={cn('container', styles.education)}>
			<h3 className='h2_dark'>
				Учебные разделы
			</h3>
			<div className={styles.education_chapters}>
				<Link href='education/lessons/1' className={styles.link}>
					<div className={styles.education_chapter1}>
						<Image src="/img/education/metod_ages.png" alt="logo" width={500} height={580}/>
						<div className={styles.theme1}>
							<h4 className='h4_light'>
						Методические разработки 
							</h4>
							<p>для разных возрастных групп</p>
						</div>
					</div>
				</Link>
				<div className={styles.education_chapter2} >
					<div className={styles.theme2}>
						<Link href='education/lessons/2' className={styles.link}>
							<h4 className='h4_dark'>Обучающие курсы</h4>
						</Link>		
					</div>
					<div className={styles.theme2}>
						<Link href='education/lessons/3' className={styles.link}>
							<h4 className='h4_dark'>Уроки финансовой грамотности </h4>
						</Link>
					</div>
				</div>
				<Link href='https://fin-kompas.rsue.ru/' className={styles.link} target='_blank'>
					<div className={styles.education_chapter1}>
						<Image src="/img/education/games.png" alt="logo" width={500} height={580}/>
						<div className={styles.theme1}>
							<h4 className='h4_light'>
						Игры по финансовой грамотности
							</h4>
						</div>
					</div>
				</Link>
			</div>
		</div>

		<Footer/>
	</>;
}