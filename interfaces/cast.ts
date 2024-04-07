export interface ExtendedCast {
    results: Results;
}

export interface Results {
    _id:  string;
    id:   string;
    cast: Cast;
}

export interface Cast {
    edges:      Edge[];
    __typename: string;
}

export interface Edge {
    node:       Node;
    __typename: EdgeTypename;
}

export enum EdgeTypename {
    CreditEdge = "CreditEdge",
}

export interface Node {
    name:           Name;
    attributes:     null;
    characters:     Character[];
    episodeCredits: EpisodeCredits;
    __typename:     NodeTypename;
}

export enum NodeTypename {
    Cast = "Cast",
}

export interface Character {
    name:       string;
    __typename: CharacterTypename;
}

export enum CharacterTypename {
    Character = "Character",
}

export interface EpisodeCredits {
    total:      number;
    yearRange:  YearRange;
    __typename: EpisodeCreditsTypename;
}

export enum EpisodeCreditsTypename {
    EpisodeCastConnection = "EpisodeCastConnection",
}

export interface YearRange {
    year:       number;
    endYear:    number;
    __typename: YearRangeTypename;
}

export enum YearRangeTypename {
    YearRange = "YearRange",
}

export interface Name {
    id:           string;
    nameText:     NameText;
    primaryImage: PrimaryImage;
    __typename:   NameTypename;
}

export enum NameTypename {
    Name = "Name",
}

export interface NameText {
    text:       string;
    __typename: NameTextTypename;
}

export enum NameTextTypename {
    NameText = "NameText",
}

export interface PrimaryImage {
    url:        string;
    width:      number;
    height:     number;
    __typename: PrimaryImageTypename;
}

export enum PrimaryImageTypename {
    Image = "Image",
}