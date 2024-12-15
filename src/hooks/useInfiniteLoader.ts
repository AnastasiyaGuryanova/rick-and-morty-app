import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

interface useInfiniteLoaderParams {
	apiUrl: string;
	pageNumber: number;
}

export const useInfiniteLoader = <T extends { name: string }>({
	apiUrl,
	pageNumber,
}: useInfiniteLoaderParams) => {
	const [data, setData] = useState<T[]>([]);
	const names = useRef<Set<string>>(new Set());
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setError(false);

		axios({
			method: 'GET',
			url: apiUrl,
			params: { page: pageNumber },
		})
			.then((response) => {
				const { results, info }: { results: T[]; info: { next: string | null } } =
					response.data;

				setData((prevState) => {
					const newItems = results.filter((item) => {
						const isDuplicateName = names.current.has(item.name);

						if (!isDuplicateName) {
							names.current.add(item.name);
							return true;
						}
						return false;
					});
					return [...prevState, ...newItems];
				});

				setIsLoading(false);
				setHasMore(Boolean(info?.next));
			})
			.catch((error) => {
				setError(false);
				console.error('Error fetching data:', error);
			});
	}, [pageNumber]);

	return { data, isLoading, hasMore, error };
};
