'use client';

import styles from './LessonsBar.module.css';
import cn from 'classnames';
import LessonsBarItem from './LessonsBarItem';

export interface LessonsBarListProps {
	titles: string[];
	paramsId: string
}

export default function LessonsBarList ({titles, paramsId}: LessonsBarListProps): JSX.Element{

	return <>
		<div className={cn(styles.LessonsBarList)}>
			{titles.map( (title: string) => {
				return(
					<LessonsBarItem title={title} key={title} paramsId={paramsId} />
				);
			})}
			
		</div>
    
	</>;
}