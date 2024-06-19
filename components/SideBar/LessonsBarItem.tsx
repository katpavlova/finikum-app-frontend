'use client';

import Link from 'next/link';
import styles from './LessonsBar.module.css';
import cn from 'classnames';

export interface LessonsBarItemProps {
	title: string;
	paramsId: string
  }

export default function LessonsBarItem ({title, paramsId}: LessonsBarItemProps): JSX.Element{


	return <>
		<div className={cn(styles.LessonsBarItem)}>
			<p>
				<Link href={`education/lessons/${paramsId}/${encodeURIComponent(title.substring(0, 5).charCodeAt(0))}`} className={styles.LessonsBarItem_link}>
					{title}
				</Link>	
			</p>
		</div>
    
	</>;
}