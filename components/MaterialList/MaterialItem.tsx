'use client';
import styles from './MaterialList.module.css';

export interface MaterialItemProps {
    title: string;
    image: string;
    description: string;
    key: string;
	date?: string;
} 

export const MaterialItem = ({ title, image, description, date }: MaterialItemProps): JSX.Element => {

	
	return (<>

		<div className={styles.MaterialItem}>
			<img className={styles.MaterialItem_img} src={image}/>
			<p className={styles.MaterialItem_description}>
				{date}
			</p>
			<p className={styles.MaterialItem_heading}>
				{title}
			</p>
			<p className={styles.MaterialItem_description}>
				{description}
			</p>
		</div>

	</>);
};