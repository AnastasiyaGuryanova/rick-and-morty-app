import { FC } from 'react';
import { ScrollableList } from 'shared/ui';
import { LocationType } from 'shared/types';
import { internalPaths, apiPaths } from 'shared/constants';

const Locations: FC = () => {
	return (
		<ScrollableList<LocationType>
			apiPath={apiPaths.location}
			sortField="created"
			itemPath={internalPaths.locations}
		/>
	);
};

export default Locations;
