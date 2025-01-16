import { FC } from 'react';
import { useParams } from 'react-router-dom';
import charactersData from '../../data/characters.json';
import './CardStyles.css';

export const CharacterCard: FC = () => {
	const { id } = useParams<{ id: string }>();

	const character = charactersData.find((char) => char.id === parseInt(id || '', 10));

	if (!character) {
		return <div className="detail-page error">Персонаж не найден</div>;
	}

	return (
		<div className="detail-card">
			<img src={character.image} alt={character.name} className="detail-image" />
			<h1>{character.name}</h1>
			<p>
				<strong>Статус:</strong> {character.status}
			</p>
			<p>
				<strong>Вид:</strong> {character.species}
			</p>
			<p>
				<strong>Пол:</strong> {character.gender}
			</p>
			<p>
				<strong>Дата создания:</strong>{' '}
				{new Date(character.created).toLocaleDateString()}
			</p>
		</div>
	);
};
