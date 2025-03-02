import axios from 'axios';

export const fetchData = async <T>(url: string, params = {}): Promise<T> => {
	try {
		const response = await axios.get<T>(url, { params });
		return response.data;
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
		throw error;
	}
};
