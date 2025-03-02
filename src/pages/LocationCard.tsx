import { FC } from 'react';
import { apiPaths } from '../constants';
import { LocationType } from '../types';
import { DetailCard } from '../components/';

const LocationCard: FC = () => {
	return (
		<DetailCard<LocationType>
			apiPath={apiPaths.location}
			renderData={(location) => (
				<>
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
				</>
			)}
		/>
	);
};

export default LocationCard;
