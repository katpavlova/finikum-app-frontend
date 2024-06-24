'use client';
import Image from 'next/image';
import styles from './BackButton.module.css';

export default function BackButton() {

	return <>
		<div className={styles.blackButton_wrapper}>
			<div className={styles.backButton}>
				<Image src="/icons/left_blue.svg" height={21} width={21} alt='back'/>
            
			</div>
        Назад
		</div>
	</>;
}