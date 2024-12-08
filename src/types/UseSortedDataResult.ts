import { SortOrder } from '../types';

export interface UseSortedDataResult<T> {
	sortedData: T[];
	sortOrder: SortOrder;
	changeSortOrder: (newOrder: SortOrder) => void;
}
