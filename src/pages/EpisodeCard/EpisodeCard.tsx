import { FC } from 'react';
import { apiPaths } from 'shared/constants';
import { EpisodeType } from 'shared/types';
import { DetailCard } from 'shared/ui';
import { Title, Text } from '@mantine/core';

const EpisodeCard: FC = () => {
	return (
		<DetailCard<EpisodeType>
			apiPath={apiPaths.episode}
			renderData={(episode) => (
				<>
					<Title
						order={1}
						style={{
							fontSize: '2rem',
							color: '#191970',
							marginBottom: '15px',
						}}
					>
						{episode.name}
					</Title>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Дата выхода:</strong>{' '}
						{episode.air_date}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Эпизод:</strong>{' '}
						{episode.episode}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Дата создания:</strong>{' '}
						{new Date(episode.created).toLocaleDateString()}
					</Text>
				</>
			)}
		/>
	);
};

export default EpisodeCard;
