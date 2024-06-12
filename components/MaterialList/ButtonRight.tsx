'use client';
import cn from 'classnames';
import styles from './MaterialList.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';
import ButtonLeftProps from './ButtonLeft';

export const ButtonRight: React.FC<ButtonLeftProps> = ({onClick}): JSX.Element => {

	return (<>
		<div className={styles.Button}>
			<Image src="/icons/arrow_right.svg" alt="logo" width={21} height={21} onClick={onClick}/>
		</div>

	</>);
};