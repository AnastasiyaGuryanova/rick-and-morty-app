import { FC } from 'react';
import { ListItemComponent, ScrollableList, SortControls } from '../component';
import { EpisodeType } from '../types';
import { internalPaths } from '../constants';
import { useSortedData } from '../hooks';
import episodesData from '../data/episode.json';

export const Episodes: FC = () => {
	const { sortedData, sortOrder, changeSortOrder } = useSortedData({
		data: episodesData,
		sortField: 'created',
		defaultOrder: 'DESC',
	});

	return (
		<div>
			<SortControls sortOrder={sortOrder} onSortChange={changeSortOrder} />

			<ScrollableList>
				{sortedData.map((episode: EpisodeType) => (
					<ListItemComponent
						key={episode.id}
						item={episode}
						path={internalPaths.episodes}
						displayField="name"
					/>
				))}
			</ScrollableList>
		</div>
	);
};
