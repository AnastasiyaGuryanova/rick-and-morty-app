export enum SortDirection {
	ASC = 'ASC',
	DESC = 'DESC',
}

export type SortOrder = 'ASC' | 'DESC';

export interface UseSortedDataParams<T> {
	data: T[];
	sortField: keyof T;
	defaultOrder?: SortDirection;
}

export interface UseSortedDataResult<T> {
	sortedData: T[];
	sortOrder: SortDirection;
	changeSortOrder: (newOrder: SortDirection) => void;
}
