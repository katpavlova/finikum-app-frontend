'use client';

import styles from './SideBar.module.css';
import cn from 'classnames';
import SideBarItem from './SideBarItem';

export interface SideBarListProps {
    titles: string[];
    setCurrentGroup: (group: string) => void;
    activeGroup: string;
}

export default function SideBarList ({titles, setCurrentGroup, activeGroup}: SideBarListProps): JSX.Element{

	return <>
		<div className={cn(styles.SideBarList)}>
			{titles.map((title, index) => (
				<div 
					key={index} 
					onClick={() => setCurrentGroup(title)}
				>
					<SideBarItem 
						title={title} 
						activeGroup={activeGroup}
					/>
				</div>
			))}
			
		</div>
    
	</>;
}