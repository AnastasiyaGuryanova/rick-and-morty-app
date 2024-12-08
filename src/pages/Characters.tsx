import { FC } from 'react';
import { ListItemComponent, ScrollableList, SortControls } from '../component';
import { CharacterType } from '../types';
import { internalPaths } from '../constants';
import { useSortedData } from '../hooks';
import charactersData from '../data/characters.json';

export const Characters: FC = () => {
	const { sortedData, sortOrder, changeSortOrder } = useSortedData({
		data: charactersData,
		sortField: 'created',
		defaultOrder: 'DESC',
	});

	return (
		<div>
			<SortControls sortOrder={sortOrder} onSortChange={changeSortOrder} />

			<ScrollableList>
				{sortedData.map((character: CharacterType) => (
					<ListItemComponent
						key={character.id}
						item={character}
						path={internalPaths.characters}
						displayField="name"
					/>
				))}
			</ScrollableList>
		</div>
	);
};
