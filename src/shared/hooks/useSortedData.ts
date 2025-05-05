import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SortDirection, UseSortedDataParams, UseSortedDataResult } from 'shared/types';
import { sortData } from 'shared/helpers';

const getValidSortDirection = (value: string | null): SortDirection => {
	return value === SortDirection.ASC || value === SortDirection.DESC
		? value
		: SortDirection.ASC;
};

export const useSortedData = <T>({
	data,
	sortField,
	defaultOrder = SortDirection.ASC,
}: UseSortedDataParams<T>): UseSortedDataResult<T> => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortedData, setSortedData] = useState<T[]>([]);

	const sortOrder =
		getValidSortDirection(searchParams.get('sortOrder')) || defaultOrder;
	const isSortingEnabled = searchParams.has('sortOrder');

	useEffect(() => {
		if (isSortingEnabled) {
			setSortedData(sortData(data, sortField, sortOrder));
		} else {
			setSortedData(data);
		}
	}, [data, sortField, sortOrder, isSortingEnabled]);

	const changeSortOrder = (newOrder: SortDirection) => {
		setSearchParams({ sortOrder: newOrder });
	};

	return { sortedData, sortOrder, changeSortOrder };
};
