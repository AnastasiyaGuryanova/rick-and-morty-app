import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../helpers';
import { DetailCardProps } from '../../types';
import { Loader, ErrorComponent } from '../../components';
import './DetailCard.css';

export const DetailCard = <T,>({ apiPath, renderData }: DetailCardProps<T>) => {
	const { id } = useParams<{ id: string }>();

	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const fetchDataFromApi = async () => {
			try {
				setIsLoading(true);
				setError(false);

				const response = await fetchData<T>(`${apiPath}/${id}`);
				setData(response);
			} catch {
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchDataFromApi();
	}, [id, apiPath]);

	if (isLoading) {
		return <Loader />;
	}

	if (error || !data) {
		return <ErrorComponent />;
	}

	return <div className="detail-card">{renderData(data)}</div>;
};
