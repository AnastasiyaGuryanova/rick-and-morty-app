import { FC } from 'react';
import { ScrollableList } from '../../components';
import { EpisodeType } from '../../types';
import { internalPaths, apiPaths } from '../../constants';

const Episodes: FC = () => {
	return (
		<ScrollableList<EpisodeType>
			apiPath={apiPaths.episode}
			sortField="air_date"
			itemPath={internalPaths.episodes}
		/>
	);
};

export default Episodes;
