import { ItemType, SortOrder } from '../types';

export interface ListItemProps<T extends ItemType> {
	item: T;
	path: string;
	displayField: keyof T;
}

export interface ScrollableListProps {
	children: React.ReactNode;
}

export interface SortControlsProps {
	sortOrder: SortOrder;
	onSortChange: (order: SortOrder) => void;
}

export interface PrivateRouteProps {
	element: JSX.Element;
}

export interface InputProps {
	type?: string;
	placeholder?: string;
	label?: string;
	description?: string;
	error?: string;
	variant?: 'default' | 'filled' | 'unstyled';
	radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	withAsterisk?: boolean;
	disabled?: boolean;
	icon?: React.ReactNode;
	name?: string;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	[key: string]: any;
}
