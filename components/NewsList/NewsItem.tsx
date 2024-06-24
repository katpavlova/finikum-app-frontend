import Image from 'next/image';
import styles from './NewsList.module.css';
import Link from 'next/link';

export interface NewsItemProps {
	img_path: string,
	title: string,
    text: string,
    date: string,
    id: string
}

export default function NewsItem({img_path, title, text, date, id}: NewsItemProps): JSX.Element {
	const renderTextWithLimit = (text) => {
		// Проверяем, превышает ли длина текста лимит
		if (text.length > 50) {
			// Если да, возвращаем первые 50 символов с многоточием в конце
			return (`${text.substring(0, 50)}...`);
		}
		// Если текст в пределах лимита, возвращаем его без изменений
		return text;
	};

	return <>
		<div className={styles.NewsItem}>
			<Image src={`/img/photo/${img_path}`} width={300} height={220} alt='img' className={styles.NewsItem_img}/>
			<p className={styles.NewsItem_date}>
				{date}
			</p>
			<p className={styles.NewsItem_title}>
				{title}
			</p>
			<p className={styles.NewsItem_text}>
				{renderTextWithLimit(text)}
			</p>
			<Link href={`news/${id}`} className={styles.NewsItem_link}>Читать далее ＞</Link>

		</div>
	</>;
}