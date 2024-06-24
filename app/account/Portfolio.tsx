"use client";
import styles from './styles.module.css';


export default function Portfolio() {

	return <>
		<div className={styles.portfolio}>
			<p className={styles.portfolio_p}>Ваши сертификаты</p>
			<div className={styles.portfolio_wrapper}>
				<div className={styles.portfolio_item}>
					<a className={styles.portfolio_item_a} href='https://drive.google.com/file/d/13ZeFjpskIb4izp-weuDcu182VDgScsqW/view?usp=sharing'  target='_blank'>
                    Деньги - сертификат
					</a>
				</div>
				<div className={styles.portfolio_item}>
					<a className={styles.portfolio_item_a} href='https://drive.google.com/file/d/13ZeFjpskIb4izp-weuDcu182VDgScsqW/view?usp=sharing'  target='_blank'>
                    Кредиты
					</a>
				</div>
			</div>
		</div>
	</>;
}