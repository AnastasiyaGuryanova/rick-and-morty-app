import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { List, Text } from '@mantine/core';
import { formatDate } from 'shared/helpers';
import { ItemType } from 'shared/types';
import './ListItemComponent.modules.css';

export interface ListItemProps<T extends ItemType> {
	item: T;
	path: string;
	displayField: keyof T;
	additionalField: keyof T;
}

export const ListItemComponent = forwardRef<HTMLDivElement, ListItemProps<ItemType>>(
	({ item, path, displayField, additionalField }, ref) => {
		return (
			<List.Item ref={ref as React.Ref<HTMLLIElement>} className="cardStyles">
				<Link to={`${path}/${item.id}`} className="linkStyles">
					<Text>{item[displayField]}</Text>
					<Text>{formatDate(item[additionalField])}</Text>
				</Link>
			</List.Item>
		);
	}
);
