'use client';

import BackButton from "@/components/BackButton/BackButton";
import { Header } from "@/components/Header/Header";
import styles from './lesson.module.css';
import NameSection from "@/components/NameSection/NameSection";
import Link from "next/link";
import cn from 'classnames';




export default function LessonPage () {

	return <>
		<Header/>

		<NameSection title={"Деньги. Купюра. Монета."}/>

		<div className={cn('container', styles.container_start)}>
			<Link href='education/lessons'>
				<BackButton />
			</Link>
		</div>

		<div className={cn('container', styles.container_start)}>
			<iframe className={styles.video} width="900" height="500" src="https://www.youtube.com/embed/an_y9VSUMJU?si=_8T6GPdu_sREunYk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
			<h3 className="h3_dark">Деньги. Купюра. Монета.</h3>
			<a className={styles.lesson_a} href="https://drive.google.com/file/d/1bCCc78rCCaTOoOEJA6vlRDZEYjuDkZRg/view?usp=drive_link" target="_blank">Деньги. Купюра. Монета. - пособие</a>


		</div>

	</>;
}