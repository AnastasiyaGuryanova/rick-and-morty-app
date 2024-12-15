import { ReactNode } from 'react';
import { ItemType, SortOrder } from '../types';

// Общие базовые интерфейсы
interface WithText {
	text?: string;
}

interface WithClassName {
	className?: string;
}

interface WithSize {
	size?: number;
}

interface WithChildren {
	children: ReactNode;
}

// Типизация для компонентов
export interface ListItemProps<T extends ItemType> {
	item: T;
	path: string;
	displayField: keyof T;
}

export interface LoaderProps extends WithText, WithClassName, WithSize {}

export interface EnhancedScrollableListProps<T extends ItemType> {
	apiPath: string;
	sortField: keyof T;
	itemPath: string;
	displayField: keyof T;
}

export interface SortControlsProps {
	sortOrder: SortOrder;
	onSortChange: (order: SortOrder) => void;
}

export interface PrivateRouteProps {
	element: JSX.Element;
}

export interface DetailCardProps<T> {
	apiPath: string;
	renderData: (data: T) => JSX.Element;
}

export interface SuspenseWithLoaderProps extends WithChildren {}

// Типизация для компонентов ошибок
export interface ErrorComponentProps extends WithText, WithClassName {
	onRetry?: () => void;
	showRetry?: boolean;
}

export interface ErrorBoundaryProps extends WithChildren {}

export interface ErrorBoundaryState {
	hasError: boolean;
}

// Типизация для полей ввода
export interface InputProps extends WithClassName {
	type?: string;
	placeholder?: string;
	label?: string;
	description?: string;
	error?: string;
	variant?: 'default' | 'filled' | 'unstyled';
	radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	withAsterisk?: boolean;
	icon?: ReactNode;
	name?: string;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	[key: string]: any;
}
