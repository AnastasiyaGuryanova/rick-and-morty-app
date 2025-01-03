enum PathKeys {
	Home = 'home',
	Characters = 'characters',
	CharacterCard = 'characterCard',
	Locations = 'locations',
	LocationCard = 'locationCard',
	Episodes = 'episodes',
	EpisodeCard = 'episodeCard',
	NotFound = 'notFound',
	Login = 'login',
}

type InternalPathsType = {
	[key in PathKeys]: string;
};

export const internalPaths: InternalPathsType = {
	[PathKeys.Home]: '/',
	[PathKeys.Login]: '/login',
	[PathKeys.Characters]: '/characters',
	[PathKeys.CharacterCard]: '/characters/:id',
	[PathKeys.Locations]: '/locations',
	[PathKeys.LocationCard]: '/locations/:id',
	[PathKeys.Episodes]: '/episodes',
	[PathKeys.EpisodeCard]: '/episodes/:id',
	[PathKeys.NotFound]: '*',
};
