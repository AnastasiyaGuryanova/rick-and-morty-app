import { useParams } from 'react-router-dom';
import locationsData from '../../data/location.json';
import './CardStyles.css';

export const LocationCard = () => {
	const { id } = useParams<{ id: string }>();

	const location = locationsData.find((loc) => loc.id === parseInt(id || '', 10));

	if (!location) {
		return <div className="detail-page error">Локация не найдена</div>;
	}

	return (
		<div className="detail-card">
			<h1>{location.name}</h1>
			<p>
				<strong>Тип:</strong> {location.type}
			</p>
			<p>
				<strong>Измерение:</strong> {location.dimension}
			</p>
			<p>
				<strong>Дата создания:</strong>{' '}
				{new Date(location.created).toLocaleDateString()}
			</p>
		</div>
	);
};
