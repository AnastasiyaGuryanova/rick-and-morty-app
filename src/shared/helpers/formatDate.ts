export const formatDate = (date: string | number | Date | null | undefined): string => {
	if (!date) {
		return '';
	}
	const parsedDate =
		typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

	if (isNaN(parsedDate.getTime())) {
		throw new Error('Invalid date');
	}

	const day = String(parsedDate.getDate()).padStart(2, '0');
	const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
	const year = parsedDate.getFullYear();

	return `${day}.${month}.${year}`;
};
