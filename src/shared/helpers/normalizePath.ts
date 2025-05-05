export const normalizePath = (path: string, id: number) => {
	const cleanPath = path.replace(/\/+$/, '');
	return `/${cleanPath}/${id}`.replace(/\/+/g, '/');
};
