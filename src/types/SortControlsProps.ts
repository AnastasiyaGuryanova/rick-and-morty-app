import { SortOrder } from '../types';

export interface SortControlsProps {
	sortOrder: SortOrder;
	onSortChange: (order: SortOrder) => void;
}
