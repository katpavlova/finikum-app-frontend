'use client';
import cn from 'classnames';
import styles from './MaterialList.module.css';
import { ReactNode } from 'react';
import Image from 'next/image';

export interface MenuItemProps {
    children: ReactNode;
    imgname: string;
} 

export const MaterialItem = (): JSX.Element => {

	
	return (<>
		<div className={styles.MaterialItem}>
            <img className={styles.MaterialItem_img} src='/img/plug.png'/>
            <p className={styles.MaterialItem_heading}>
            Какими бывают деньги?
            </p>
            <p className={styles.MaterialItem_description}>
            Рыба текст рыба текст рыба текст рыба текст рыба текст рыба текст рыба текст рыба текст рыба...
            </p>
		</div>
	</>);
};