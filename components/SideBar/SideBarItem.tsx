'use client';

import Image from 'next/image';
import styles from './SideBar.module.css';
import cn from 'classnames';

export interface SideBarItemProps {
    title: string;
	activeGroup: string;
}

export default function SideBarItem ({title, activeGroup}: SideBarItemProps): JSX.Element{


	return <>
		<div
			className={cn(styles.SideBarItem, { [styles.SideBarItem_active]: title === activeGroup })
			}>
			<p>{title}</p>
			<Image src='/icons/SideBarItem_arrow.svg' width={17} height={9} alt='SideBarItem_arrow'/>
		</div>
    
	</>;
}