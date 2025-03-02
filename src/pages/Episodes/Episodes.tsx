import { FC } from 'react';
import { ScrollableList } from 'shared/ui';
import { EpisodeType } from 'shared/types';
import { internalPaths, apiPaths } from 'shared/constants';

const Episodes: FC = () => {
	return (
		<ScrollableList<EpisodeType>
			apiPath={apiPaths.episode}
			sortField="created"
			itemPath={internalPaths.episodes}
		/>
	);
};

export default Episodes;
