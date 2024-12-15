import { FC } from 'react';
import { ScrollableList } from '../../components';
import { CharacterType } from '../../types';
import { internalPaths, apiPaths } from '../../constants';

const Characters: FC = () => {
	return (
		<ScrollableList<CharacterType>
			apiPath={apiPaths.character}
			sortField="name"
			itemPath={internalPaths.characters}
		/>
	);
};

export default Characters;
