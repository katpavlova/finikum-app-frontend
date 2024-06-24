'use client';
import cn from 'classnames';
import styles from './MenuList.module.css';
import Image from 'next/image';
import { MenuItem } from './MenuItem';


export const MenuList = (): JSX.Element => {


	return (<>
		<div className={cn('container')}>
			<div className={cn(styles.MenuList)}>
				<MenuItem imgname="book" link='/education'>Учебные материалы</MenuItem>
				<MenuItem imgname="phone" link='/digital_finance'>Цифровые финансовые услуги</MenuItem>
				<MenuItem imgname="star" link='/events'>Мероприятия</MenuItem>
				<MenuItem imgname="fox" link='https://fin-kompas.rsue.ru/'>Играем и обучаемся</MenuItem>
				<MenuItem imgname="heart" link='/about'>Волонтерство</MenuItem>
				<MenuItem imgname="news" link='/news'>Новости</MenuItem>
			</div>
		</div>
	</>);
};