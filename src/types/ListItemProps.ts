import { ItemType } from '.';

export interface ListItemProps<T extends ItemType> {
	item: T;
	path: string;
	displayField: keyof T;
}
