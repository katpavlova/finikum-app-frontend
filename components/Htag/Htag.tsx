import { HtagProps } from "./Htag.props";
import styles from './Htag.module.css';



export const Htag = ({tag, children, style}: HtagProps): JSX.Element => {
	return (<>
		{ tag == 'h1' && <h1 className={styles[`${style}`]}>{children}</h1>}
		{ tag == 'h2' && <h2 className={styles[`${style}`]}>{children}</h2>}
		{ tag == 'h3' && <h3 className={styles[`${style}`]}>{children}</h3>}
		{ tag == 'h4' && <h4 className={styles[`${style}`]}>{children}</h4>}
	</>);
};

