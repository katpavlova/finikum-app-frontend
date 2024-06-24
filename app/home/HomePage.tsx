'use client';

import { Button } from '@/components/Button/Button';
import styles from './HomePage.module.css';
import cn from 'classnames';
import Link from 'next/link';



export default function HomePage() {


	return <>
		<div className={cn('container')}>
			<div className={cn(styles.about, 'border-radius')} >
				<span className={styles.about_span__typeMachine}>
					Наше будущее за финансовой грамотностью
    
				</span>
				<Link href='/about'>
					<Button appearance='primary_white'>Подробнее о РЦФГ РО</Button>
				</Link>
			</div>
		</div>
	</>;
}