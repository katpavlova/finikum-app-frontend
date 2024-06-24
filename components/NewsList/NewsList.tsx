import NewsItem, { NewsItemProps } from './NewsItem';
import styles from './NewsList.module.css';
import cn from 'classnames';

export interface NewsListProps {
    // Указываем, что items будет массивом объектов, соответствующих NewsItemProps
    items: NewsItemProps[];
  }

export default function NewsList({ items }: NewsListProps): JSX.Element {


	return <>
		<div className={styles.NewsList}>
			{items.map((item) => (
				// Для каждого объекта новостей рендерим NewsItem
				// Важно передать key для оптимизации рендеринга в React
				<NewsItem 
					key={item.id} 
					img_path={item.img_path}
					title={item.title}
					text={item.text}
					date={item.date}
					id={item.id}
				/>
			))}
		</div>
	</>;
}