import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Home,
	Navbar,
	Characters,
	Locations,
	Episodes,
	NotFound,
	CharacterCard,
	LocationCard,
	EpisodeCard,
} from './pages';
import { internalPaths } from './constants';

export const App: FC = () => {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path={internalPaths.home} element={<Home />} />

				<Route path={internalPaths.characters} element={<Characters />} />
				<Route path={internalPaths.characterCard} element={<CharacterCard />} />

				<Route path={internalPaths.locations} element={<Locations />} />
				<Route path={internalPaths.locationCard} element={<LocationCard />} />

				<Route path={internalPaths.episodes} element={<Episodes />} />
				<Route path={internalPaths.episodeCard} element={<EpisodeCard />} />

				<Route path={internalPaths.notFound} element={<NotFound />} />
			</Routes>
		</div>
	);
};
