'use client';
import cn from 'classnames';
import styles from './MaterialList.module.css';
import { MaterialItem, MaterialItemProps } from './MaterialItem';
import { useEffect, useState } from 'react';
import { ButtonLeft } from './ButtonLeft';
import { ButtonRight } from './ButtonRight';
import useWindowSize from '@/hooks/useWindowSize';

interface MaterialListProps {
	heading: string;
	items: MaterialItemProps[];
  }
export const MaterialList= ({ heading, items }: MaterialListProps): JSX.Element => {

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const [startTouch, setStartTouch] = useState<number | null>(null);

	// Используйте хук для получения размеров окна
	const { width } = useWindowSize();
	const effectiveWidth = width || 0; // Здесь 0 - значение по умолчанию
	const isMobile = effectiveWidth <= 1000;
	const cardsPerPage = isMobile ? 1 : 3;


	const handleChangeIndex = (newIndex: number) => {
		setIsAnimating(true);
		setCurrentIndex(newIndex);
		setTimeout(() => setIsAnimating(false), 300); // Продолжительность анимации
	};

	// Обработчик свайпа
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		const touchDown = e.touches[0].clientX;
		setStartTouch(touchDown);
	};
      
	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (startTouch === null) {
			return;
		}
      
		const touchDown = startTouch;
		const currentTouch = e.touches[0].clientX;
		const diffX = touchDown - currentTouch;
      
		if (diffX > 5) {
			// свайп влево
			goNext();
		} else if (diffX < -5) {
			// свайп вправо
			goPrev();
		}
      
		setStartTouch(null); // Сброс состояния касания
	};

	// Обработчики кнопок вперед и назад
	const goPrev = () => handleChangeIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0);
	const goNext = () => handleChangeIndex((prevIndex) => (prevIndex + cardsPerPage < items.length) ? prevIndex + 1 : prevIndex);

	// Вычисление элементов, которые необходимо отобразить
	const displayedItems = items.slice(currentIndex, currentIndex + cardsPerPage);
	
	return (<>
		<div className={cn('container', styles.container_col)}>
			
			{ !isMobile && 
            <div className={styles.MaterialList_heading}>
            	<h2 className='h2_dark'>{heading}</h2>
            	<div className={styles.MaterialList_buttons}>
                	<ButtonLeft onClick={goPrev}/>
                	<ButtonRight onClick={goNext}/>
            	</div>
            </div>
			}
			{ isMobile && 
                <h2 className='h2_dark'>{heading}</h2> 
			}
			<div className={cn(styles.MaterialList_wrapper, {[styles.isAnimating]: isAnimating})}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}>
				{displayedItems.map((item: MaterialItemProps) => (
					<MaterialItem 
						key={item.title} // используйте уникальный идентификатор, если title уникален
						title={item.title}
						image={item.image}
						description={item.description}
						date={item.date}
					/>
				))}
			</div>
			{ isMobile && 
                <div className={styles.paginationDots}>
                	{items.map((_item, index) => (
                		<span key={index} 
                			className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}>
                		</span>
                	))}
                </div>
			}
		</div>
	</>);
};