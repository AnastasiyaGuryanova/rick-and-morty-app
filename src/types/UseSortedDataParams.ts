import { SortOrder } from '../types';

export interface UseSortedDataParams<T> {
	data: T[];
	sortField: keyof T;
	defaultOrder?: SortOrder;
}
