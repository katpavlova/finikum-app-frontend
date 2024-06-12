'use client';
import { MenuList } from "@/components/MenuList/MenuList";
import HomePage from "./HomePage";
import { Header } from "@/components/Header/Header";
import { MaterialList } from "@/components/MaterialList/MaterialList";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
	const newsItems = [
		{ title: "Новость 1", image: "/img/plug.png", description: "Описание новости 1" },
		{ title: "Новость 2", image: "/img/plug.png", description: "Описание новости 2" },
		{ title: "Новость 3", image: "/img/plug.png", description: "Описание новости 2" },
		{ title: "Новость 4", image: "/img/plug.png", description: "Описание новости 1" },
		{ title: "Новость 5", image: "/img/plug.png", description: "Описание новости 2" },
		{ title: "Новость 6", image: "/img/plug.png", description: "Описание новости 2" },
		// Добавьте столько элементов, сколько нужно
	];
	const learnItems = [
		{ title: "Материал 1", image: "/img/plug.png", description: "Описание материала 1" },
		{ title: "Материал 2", image: "/img/plug.png", description: "Описание материала 2" },
		{ title: "Материал 3", image: "/img/plug.png", description: "Описание материала 2" },
		{ title: "Материал 4", image: "/img/plug.png", description: "Описание материала 1" },
		{ title: "Материал 5", image: "/img/plug.png", description: "Описание материала 2" },
		{ title: "Материал 6", image: "/img/plug.png", description: "Описание материала 2" },
		// Добавьте столько элементов, сколько нужно
	];
	const eventItems = [
		{ title: "Материал 1", image: "/img/plug.png", description: "Описание материала 1", date:'10/07/2002'},
		{ title: "Материал 2", image: "/img/plug.png", description: "Описание материала 2", date:'10/07/2002'},
		{ title: "Материал 3", image: "/img/plug.png", description: "Описание материала 2", date:'10/07/2002'},
		{ title: "Материал 4", image: "/img/plug.png", description: "Описание материала 1", date:'10/07/2002'},
		{ title: "Материал 5", image: "/img/plug.png", description: "Описание материала 2", date:'10/07/2002'},
		{ title: "Материал 6", image: "/img/plug.png", description: "Описание материала 2", date:'10/07/2002'},
		// Добавьте столько элементов, сколько нужно
	];


	return <>
		<Header/>
		<HomePage/>
		<MenuList/>
		<MaterialList items={learnItems} heading='Топ изучаемых материалов'/>
		<MaterialList items={newsItems} heading='Новости'/>
		<MaterialList items={eventItems} heading='Ближайшие мероприятия'/>
		<Footer/>
	</>;
}