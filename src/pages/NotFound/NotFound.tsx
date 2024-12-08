import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound: FC = () => {
	return (
		<div className="not-found">
			<h2 className="not-found-title">Страница не найдена</h2>
			<p className="not-found-text">
				Кажется, вы потерялись во вселенной Рика и Морти.
			</p>
			<Link to="/" className="not-found-link">
				Вернуться на главную
			</Link>
		</div>
	);
};
