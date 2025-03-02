export type SortOrder = 'ASC' | 'DESC';

export interface UseSortedDataParams<T> {
	data: T[];
	sortField: keyof T;
	defaultOrder?: SortOrder;
}

export interface UseSortedDataResult<T> {
	sortedData: T[];
	sortOrder: SortOrder;
	changeSortOrder: (newOrder: SortOrder) => void;
}
