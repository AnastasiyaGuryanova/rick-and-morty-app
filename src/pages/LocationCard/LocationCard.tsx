import { FC } from 'react';
import { apiPaths } from 'shared/constants';
import { LocationType } from 'shared/types';
import { DetailCard } from 'shared/ui';
import { Title, Text } from '@mantine/core';

const LocationCard: FC = () => {
	return (
		<DetailCard<LocationType>
			apiPath={apiPaths.location}
			renderData={(location) => (
				<>
					<Title
						order={1}
						style={{
							fontSize: '2rem',
							color: '#191970',
							marginBottom: '15px',
						}}
					>
						{location.name}
					</Title>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Тип:</strong> {location.type}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Измерение:</strong>{' '}
						{location.dimension}
					</Text>
					<Text
						style={{ margin: '10px 0', fontSize: '1.2rem', color: '#191970' }}
					>
						<strong style={{ color: '#0000cd' }}>Дата создания:</strong>{' '}
						{new Date(location.created).toLocaleDateString()}
					</Text>
				</>
			)}
		/>
	);
};

export default LocationCard;
