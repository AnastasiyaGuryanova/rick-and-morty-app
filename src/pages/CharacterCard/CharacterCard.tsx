import { FC } from 'react';
import { apiPaths } from 'shared/constants';
import { CharacterType } from 'shared/types';
import { DetailCard } from 'shared/ui';
import { Title, Text, Image } from '@mantine/core';

const CharacterCard: FC = () => {
	return (
		<DetailCard<CharacterType>
			apiPath={apiPaths.character}
			renderData={(character) => (
				<>
					<Image
						src={character.image}
						alt={character.name}
						radius="md"
						style={{
							maxWidth: '300px',
							margin: '0 auto 15px',
							border: '2px solid rgba(255, 165, 0, 0.7)',
						}}
					/>
					<Title
						order={1}
						style={{
							fontSize: '2rem',
							color: '#191970',
							marginBottom: '15px',
						}}
					>
						{character.name}
					</Title>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Статус:</strong>{' '}
						{character.status}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Вид:</strong>{' '}
						{character.species}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Пол:</strong>{' '}
						{character.gender}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Дата создания:</strong>{' '}
						{new Date(character.created).toLocaleDateString()}
					</Text>
				</>
			)}
		/>
	);
};

export default CharacterCard;
