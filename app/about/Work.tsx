'use client';
import styles from './styles.module.css';
import cn from 'classnames';
import Image from 'next/image';


export default function Work() {


	return<>
		<div className={styles.finikum}>
			<p>
                Региональный центр финансовой грамотности «Финикум» является структурным подразделением Ростовского государственного экономического университета (РИНХ).Главное направление деятельности — повышение уровня финансовой культуры жителей региона.
			</p>

			<div className={styles.work_wrapper}>
				<div className={styles.work_item}>
					<Image src="/img/about/kaptsova.png" width={250} height={250} alt='photo'/>
					<div className={styles.work_item_description}>
						<div className={styles.fio}>Капцова Валерия Сергеевна</div>
						<div className={styles.work_about}>
                            Ассистент кафедры “Финансы” факультета Экономики и финансов РГЭУ(РИНХ)
						</div>
					</div>
				</div>

				<div className={styles.work_item}>
					<Image src="/img/about/meliksetyan.png" alt='photo' width={250} height={250}/>
					<div className={styles.work_item_description}>
						<div className={styles.fio}>Меликсетян Светлана Николаевна</div>
						<div className={styles.work_about}>
                            к.э.н., доцент кафедры “Финансы” факультета Экономики и финансов РГЭУ(РИНХ)
						</div>
					</div>
				</div>

				<div className={styles.work_item}>
					<Image src="/img/about/takmazyan.png" alt='photo' width={250} height={250}/>
					<div className={styles.work_item_description}>
						<div className={styles.fio}>Аида Самвеловна Такмазян</div>
						<div className={styles.work_about}>
                            к.э.н., доцент кафедры “Финансы” факультета Экономики и финансов РГЭУ(РИНХ)
						</div>
					</div>
				</div>
			</div>



    
		</div>
    
	</>;
}