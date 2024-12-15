import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SortOrder, UseSortedDataParams, UseSortedDataResult } from '../types';
import { sortData } from '../helpers';

export const useSortedData = <T>({
	data,
	sortField,
	defaultOrder = 'ASC',
}: UseSortedDataParams<T>): UseSortedDataResult<T> => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortedData, setSortedData] = useState<T[]>([]);

	const sortOrder = (searchParams.get('sortOrder') as SortOrder) || defaultOrder;
	const isSortingEnabled = searchParams.has('sortOrder');

	useEffect(() => {
		if (isSortingEnabled) {
			setSortedData(sortData(data, sortField, sortOrder));
		} else {
			setSortedData(data);
		}
	}, [data, sortField, sortOrder, isSortingEnabled]);

	const changeSortOrder = (newOrder: SortOrder) => {
		setSearchParams({ sortOrder: newOrder });
	};

	return { sortedData, sortOrder, changeSortOrder };
};
