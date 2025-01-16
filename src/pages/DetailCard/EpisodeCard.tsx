import { useParams } from 'react-router-dom';
import episodesData from '../../data/episode.json';
import './CardStyles.css';

export const EpisodeCard = () => {
	const { id } = useParams<{ id: string }>();

	const episode = episodesData.find((ep) => ep.id === parseInt(id || '', 10));

	if (!episode) {
		return <div className="detail-page error">Эпизод не найден</div>;
	}

	return (
		<div className="detail-card">
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
		</div>
	);
};
