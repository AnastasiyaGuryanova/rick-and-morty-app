import { FC } from 'react';
import { internalPaths, apiPaths } from 'shared/constants';
import { CharacterType } from 'shared/types';
import { ScrollableList } from 'shared/ui';

const Characters: FC = () => {
	return (
		<ScrollableList<CharacterType>
			apiPath={apiPaths.character}
			sortField="created"
			itemPath={internalPaths.characters}
		/>
	);
};

export default Characters;
