'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { useState } from 'react';



export default function Auth() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
  
	const handleSubmit = () => {
		if (phone === '89889955013' && password === '031803') {
			window.location.href = '/account'; // Используйте нужный путь к странице
			setPassword('');
		} else {
			setErrorMessage('Неверный логин');
		}
	};


	return <>
		<div className={styles.auth}>
			<div className={styles.logo}>
				<Link href={'/home'} className={styles.header_logo}>
					<Image src="/icons/logo.svg" alt="logo" width={45} height={45}/>
					<span className={styles.header_logo__text}>Региональный центр финансовой грамотности Ростовской области</span>
				</Link>
			</div>

			<div className={styles.authForm}>
				<p className={styles.authForm_title}>
                Вход в личный кабинет
				</p>
				<input 
					type="text" 
					name='phone' 
					className={styles.authForm_input}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder='Ваш номер телефона'
				/>
				<input 
					type="password" 
					name='passord' 
					className={styles.authForm_input}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Пароль'
				/>
				<button className={styles.authForm_button} onClick={handleSubmit}>Войти</button>
				{errorMessage && <p className={styles.authForm_error}>{errorMessage}</p>}
			</div>
		</div>
	</>;
}