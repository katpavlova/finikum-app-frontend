import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';


export const Button = ({appearance, children}: ButtonProps): JSX.Element => {
	return(
		<button 
			className={cn(styles['button'], {
				[styles['primary']]: appearance == 'primary', 
				[styles['primary_white']]: appearance == 'primary_white', 
				[styles['secondary']]: appearance == 'secondary'
			})}
		>
			{children}
		</button>
	);
};