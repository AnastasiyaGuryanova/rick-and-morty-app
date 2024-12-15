import { FC } from 'react';
import { apiPaths } from '../constants';
import { CharacterType } from '../types';
import { DetailCard } from '../components';

const CharacterCard: FC = () => {
	return (
		<DetailCard<CharacterType>
			apiPath={apiPaths.character}
			renderData={(character) => (
				<>
					<img
						src={character.image}
						alt={character.name}
						className="detail-image"
					/>
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
				</>
			)}
		/>
	);
};

export default CharacterCard;
