import { Link } from 'react-router-dom';
import { ListItemProps, ItemType } from '../../types';
import './ListItemStyles.css';

export const ListItemComponent = <T extends ItemType>({
	item,
	path,
	displayField,
}: ListItemProps<T>) => {
	return (
		<li className="list-item">
			<Link to={`${path}/${item.id}`} className="list-item-link">
				{String(item[displayField])}
			</Link>
		</li>
	);
};
