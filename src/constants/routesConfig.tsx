import { lazy } from 'react';
import { internalPaths } from './internalPaths';
import { RouteConfig } from '../types';
import { SuspenseWithLoader } from '../components';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const Characters = lazy(() => import('../pages/Characters/Characters'));
const CharacterCard = lazy(() => import('../pages/CharacterCard'));
const Locations = lazy(() => import('../pages/Locations/Locations'));
const LocationCard = lazy(() => import('../pages/LocationCard'));
const Episodes = lazy(() => import('../pages/Episodes/Episodes'));
const EpisodeCard = lazy(() => import('../pages/EpisodeCard'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const routesConfig: RouteConfig[] = [
	{
		path: internalPaths.home,
		element: (
			<SuspenseWithLoader>
				<Home />
			</SuspenseWithLoader>
		),
	},
	{
		path: internalPaths.login,
		element: (
			<SuspenseWithLoader>
				<Login />
			</SuspenseWithLoader>
		),
	},
	{
		path: internalPaths.characters,
		element: (
			<SuspenseWithLoader>
				<Characters />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.characterCard,
		element: (
			<SuspenseWithLoader>
				<CharacterCard />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.locations,
		element: (
			<SuspenseWithLoader>
				<Locations />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.locationCard,
		element: (
			<SuspenseWithLoader>
				<LocationCard />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.episodes,
		element: (
			<SuspenseWithLoader>
				<Episodes />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.episodeCard,
		element: (
			<SuspenseWithLoader>
				<EpisodeCard />
			</SuspenseWithLoader>
		),
		isPrivate: true,
	},
	{
		path: internalPaths.notFound,
		element: (
			<SuspenseWithLoader>
				<NotFound />
			</SuspenseWithLoader>
		),
	},
];
