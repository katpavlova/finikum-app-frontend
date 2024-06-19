'use client';

import { Header } from '@/components/Header/Header';
import styles from './lessons.module.css';
import cn from 'classnames';
import { Footer } from '@/components/Footer/Footer';
import NameSection from '@/components/NameSection/NameSection';
import SideBarList from '@/components/SideBar/SideBarList';
import settings from '@/public/settings/settings.json';
import { useEffect, useState } from 'react';
import LessonsBarList from '@/components/SideBar/LessonsBar';

interface LessonsProps{
	params: {
		id: string,
		title: string
	}
}
  
type LessonsSettings = {
	[key: string]: string[];
};

type Pages = {
	[key in '1' | '2' | '3' ]: string;
};

export default function Lessons({params}: LessonsProps) {
	const lessonsSettings: LessonsSettings = settings.lessons;
	const [currentGroup, setCurrentGroup] = useState<string>(Object.keys(lessonsSettings)[0]);
	const [lessonsForGroup, setLessonsForGroup] = useState<string[]>(lessonsSettings[currentGroup]);

	useEffect(() => {
		setLessonsForGroup(lessonsSettings[currentGroup]);
	}, [currentGroup, lessonsSettings]);


	const pages: Pages = {
		"1": "Методические разработки для разных возрастных групп",
		"2": "Обучающие курсы",
		"3": "Уроки финансовой грамотности",
	};

	const pageTitle = pages[params.id as keyof Pages] || "Заголовок не найден";

	return <>
		<Header/>
		<NameSection title = {pageTitle}/>
		<div className={cn('container', styles.LessonsList)}>
			<SideBarList 
				titles={Object.keys(lessonsSettings)} 
				setCurrentGroup={setCurrentGroup} 
				activeGroup={currentGroup} 
			/>
			<LessonsBarList titles={lessonsForGroup} paramsId={params.id}/>
		</div>
		<Footer/>
	</>;
}