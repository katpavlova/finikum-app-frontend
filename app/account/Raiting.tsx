"use client";
import styles from './styles.module.css';



export default function Raiting() {

	return <>
		<div className={styles.person_wrapper}>
			<div className={styles.raiting_wrapper}>
				<p className={styles.placeholder}>Рейтинг</p>
				<p className={styles.rating}>0</p>
			</div>
			<p className={styles.rating_p}>
        Расчет рейтинга осуществляется исходя из количества посещенных мероприятий, активности на мероприятиях и стабильного прохождения тестов. Повышенная активность на платформе обеспечивает повышение позиции в рейтинге, которое в свою очередь ведет к повышению финансовой грамотности.
			</p>
			
		</div>
	</>;
}