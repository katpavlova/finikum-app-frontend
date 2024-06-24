"use client";
import styles from './styles.module.css';
import Image from "next/image";

const person = {
	"Фамилия": "Павлова",
	"Имя": "Екатерина",
	"Отчество": "Сергеевна",
	"Дата рождения": "10.07.2002",
	"Пол": "Жен",
	"Уровень образования": "Высшее образование",
	"Статус": "Высшее образование", 
	"Город": "Ростов-на-Дону", 
	"Телефон": "+7 (988) 995 50 13",
	"Интересы": [
		"Финансовая грамотность",
		"Вклады",
		"Налоги",
		"Инвестирование"
	],
	"Фото": "kate.jpg"
};
export default function PersonWrapper() {
	return <>
		<div className={styles.person_wrapper}>
			<div className={styles.person}>
				<p className={styles.placeholder}>Фамилия</p>
				<p className={styles.data}>{person['Фамилия']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Имя</p>
				<p className={styles.data}>{person['Имя']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Отчество</p>
				<p className={styles.data}>{person['Отчество']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Фото</p>
				<Image src={`/img/${person['Фото']}`} width={140} height={140} alt='photo' className={styles.person_img}/>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Дата рождения</p>
				<p className={styles.data}>{person['Дата рождения']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Пол</p>
				<p className={styles.data}>{person['Пол']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Уровень образования</p>
				<p className={styles.data}>{person['Уровень образования']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Город</p>
				<p className={styles.data}>{person['Город']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Телефон</p>
				<p className={styles.data}>{person['Телефон']}</p>
			</div>
			<div className={styles.person}>
				<p className={styles.placeholder}>Интересы</p>
				<div className={styles.interes}>
					<div className={styles.data_div}>Финансовая грамотность</div>
					<div className={styles.data_div}>Инвестирование</div>
					<div className={styles.data_div}>Налоги</div>
				</div>
                
			</div>
		</div>;
	</>;
}