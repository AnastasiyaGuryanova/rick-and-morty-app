import { internalPaths } from './internalPaths';
import { RouteConfig } from '../types';
import {
	Home,
	Characters,
	CharacterCard,
	Locations,
	LocationCard,
	Episodes,
	EpisodeCard,
	Login,
	NotFound,
} from '../pages';

export const routesConfig: RouteConfig[] = [
	{ path: internalPaths.home, element: <Home /> },
	{ path: internalPaths.login, element: <Login /> },
	{ path: internalPaths.characters, element: <Characters />, isPrivate: true },
	{ path: internalPaths.characterCard, element: <CharacterCard />, isPrivate: true },
	{ path: internalPaths.locations, element: <Locations />, isPrivate: true },
	{ path: internalPaths.locationCard, element: <LocationCard />, isPrivate: true },
	{ path: internalPaths.episodes, element: <Episodes />, isPrivate: true },
	{ path: internalPaths.episodeCard, element: <EpisodeCard />, isPrivate: true },
	{ path: internalPaths.notFound, element: <NotFound /> },
];
