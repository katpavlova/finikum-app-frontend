import styles from './NameSection.module.css';
import cn from 'classnames';

export interface NameSectionProps {
    title: string;
}

export default function NameSection ({title}: NameSectionProps): JSX.Element{


	return <>
		<div className={cn('container', styles.NameSection)}>
			{title}
		</div>
    
	</>;
}