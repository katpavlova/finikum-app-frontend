'use client';
import cn from 'classnames';
import styles from './MenuList.module.css';
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface MenuItemProps {
    children: ReactNode;
    imgname: string;
	link:string;
} 

export const MenuItem = ({children, imgname, link}: MenuItemProps): JSX.Element => {

	const [isLight, setIsLight] = useState(false);

	const handleMouseEnter = () => {
		setIsLight(true);
	};

	const handleMouseLeave = () => {
		setIsLight(false);
	};

	const handleClick = () => {
		setIsLight(!isLight);
	};
	
	return (<>
		<div 
			className={cn(styles.MenuItem, { [styles.MenuItem_light]:isLight })}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}>
			<h3 className={cn({'h3_light': !isLight, 'h3_dark': isLight })}>
				<Link className={styles.a} href={`${link}`}>{children}</Link>
			</h3>
			<Image src={`/img/home/Menu/${imgname}.png`} className={cn(styles.MenuItem_img)} alt={imgname} width={240} height={180}/>
		</div>
	</>);
};