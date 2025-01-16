import { SortOrder } from '../types';

export const sortData = <T>(data: T[], sortField: keyof T, sortOrder: SortOrder): T[] => {
	return [...data].sort((a, b) => {
		const aValue = a[sortField];
		const bValue = b[sortField];

		const isDateField =
			(typeof aValue === 'string' && !isNaN(Date.parse(aValue))) ||
			aValue instanceof Date;

		if (isDateField) {
			const aDate = aValue instanceof Date ? aValue : new Date(aValue as string);
			const bDate = bValue instanceof Date ? bValue : new Date(bValue as string);

			if (aDate < bDate) return sortOrder === 'ASC' ? -1 : 1;
			if (aDate > bDate) return sortOrder === 'ASC' ? 1 : -1;
			return 0;
		}

		if (aValue < bValue) return sortOrder === 'ASC' ? -1 : 1;
		if (aValue > bValue) return sortOrder === 'ASC' ? 1 : -1;

		return 0;
	});
};
