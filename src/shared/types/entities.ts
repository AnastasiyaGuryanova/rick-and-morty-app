export interface CharacterType {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	image: string;
	created: string;
}

export interface LocationType {
	id: number;
	name: string;
	type: string;
	dimension: string;
	created: string;
}

export interface EpisodeType {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	created: string;
}

export type ItemType = CharacterType | EpisodeType | LocationType;
