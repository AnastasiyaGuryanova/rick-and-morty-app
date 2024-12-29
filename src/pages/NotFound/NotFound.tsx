import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Text } from '@mantine/core';
import './NotFound.modules.css';

const NotFound: FC = () => {
	return (
		<Container className="container">
			<Title order={2} className="title">
				Страница не найдена
			</Title>
			<Text className="text">
				Кажется, вы потерялись во вселенной Рика и Морти.
			</Text>
			<Link
				to="/"
				className="link"
				onMouseEnter={(e) =>
					(e.currentTarget.style.backgroundColor = 'rgba(255, 165, 0, 1)')
				}
				onMouseLeave={(e) =>
					(e.currentTarget.style.backgroundColor = 'rgba(255, 165, 0, 0.7)')
				}
			>
				Вернуться на главную
			</Link>
		</Container>
	);
};

export default NotFound;
