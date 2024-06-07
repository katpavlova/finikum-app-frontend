'use client';
import cn from 'classnames';
import styles from './MenuList.module.css';
import Image from 'next/image';
import { MenuItem } from './MenuItem';


export const MenuList = (): JSX.Element => {


	return (<>
		<div className={cn('container')}>
			<div className={cn(styles.MenuList)}>
				<MenuItem imgname="book">Учебные материалы</MenuItem>
				<MenuItem imgname="phone">Цифровые финансовые услуги</MenuItem>
				<MenuItem imgname="star">Мероприятия</MenuItem>
				<MenuItem imgname="fox">Играем и обучаемся</MenuItem>
				<MenuItem imgname="heart">Волонтерство</MenuItem>
				<MenuItem imgname="news">Новости</MenuItem>
			</div>
		</div>
	</>);
};