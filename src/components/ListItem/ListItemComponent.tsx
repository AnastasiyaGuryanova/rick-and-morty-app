import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ListItemProps, ItemType } from '../../types';
import './ListItemStyles.css';

export const ListItemComponent = forwardRef<HTMLLIElement, ListItemProps<ItemType>>(
	({ item, path, displayField }, ref) => {
		return (
			<li className="list-item" ref={ref}>
				<Link to={`${path}/${item.id}`} className="list-item-link">
					{String(item[displayField])}
				</Link>
			</li>
		);
	}
);
