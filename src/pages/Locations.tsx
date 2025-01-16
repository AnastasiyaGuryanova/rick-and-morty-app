import { FC } from 'react';
import { ListItemComponent, ScrollableList, SortControls } from '../component';
import { LocationType } from '../types';
import { internalPaths } from '../constants';
import { useSortedData } from '../hooks';
import locationsData from '../data/location.json';

export const Locations: FC = () => {
	const { sortedData, sortOrder, changeSortOrder } = useSortedData({
		data: locationsData,
		sortField: 'created',
		defaultOrder: 'DESC',
	});

	return (
		<div>
			<SortControls sortOrder={sortOrder} onSortChange={changeSortOrder} />

			<ScrollableList>
				{sortedData.map((location: LocationType) => (
					<ListItemComponent
						key={location.id}
						item={location}
						path={internalPaths.locations}
						displayField="name"
					/>
				))}
			</ScrollableList>
		</div>
	);
};
