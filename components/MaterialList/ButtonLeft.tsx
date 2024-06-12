'use client';
import cn from 'classnames';
import styles from './MaterialList.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';

export default interface ButtonLeftProps {
    onClick: () => void; // функция для обработки клика по кнопке
  }

export const ButtonLeft: React.FC<ButtonLeftProps> = ({onClick}): JSX.Element => {

	return (<>
		<div className={styles.Button}>
			<Image src="/icons/arrow_left.svg" alt="logo" width={21} height={21} onClick={onClick} />
		</div>

	</>);
};