import { FC } from 'react';
import { apiPaths } from '../constants';
import { EpisodeType } from '../types';
import { DetailCard } from '../components';

const EpisodeCard: FC = () => {
	return (
		<DetailCard<EpisodeType>
			apiPath={apiPaths.episode}
			renderData={(episode) => (
				<>
					<h1>{episode.name}</h1>
					<p>
						<strong>Дата выхода:</strong> {episode.air_date}
					</p>
					<p>
						<strong>Эпизод:</strong> {episode.episode}
					</p>
					<p>
						<strong>Дата создания:</strong>{' '}
						{new Date(episode.created).toLocaleDateString()}
					</p>
				</>
			)}
		/>
	);
};

export default EpisodeCard;
