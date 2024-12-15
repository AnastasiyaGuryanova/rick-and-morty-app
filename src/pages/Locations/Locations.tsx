import { FC } from 'react';
import { ScrollableList } from '../../components';
import { LocationType } from '../../types';
import { internalPaths, apiPaths } from '../../constants';

const Locations: FC = () => {
	return (
		<ScrollableList<LocationType>
			apiPath={apiPaths.location}
			sortField="name"
			itemPath={internalPaths.locations}
		/>
	);
};

export default Locations;
