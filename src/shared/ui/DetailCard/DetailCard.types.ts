export interface DetailCardProps<T> {
	apiPath: string;
	renderData: (data: T) => JSX.Element;
}
