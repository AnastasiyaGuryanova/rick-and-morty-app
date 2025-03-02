enum ApiPathKeys {
	Character = 'character',
	Location = 'location',
	Episode = 'episode',
}

type ApiPathsType = {
	[key in ApiPathKeys]: string;
};

export const apiPaths: ApiPathsType = {
	[ApiPathKeys.Character]: 'https://rickandmortyapi.com/api/character',
	[ApiPathKeys.Location]: 'https://rickandmortyapi.com/api/location',
	[ApiPathKeys.Episode]: 'https://rickandmortyapi.com/api/episode',
};
