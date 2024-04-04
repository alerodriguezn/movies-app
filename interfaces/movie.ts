export interface MediaList {
    page:    number;
    next:    string;
    entries: number;
    results: Title[];
}

export interface Title {
    _id:               string;
    id:                string;
    primaryImage:      PrimaryImage | null;
    titleType:         TitleType;
    titleText:         TitleText;
    originalTitleText: TitleText;
    releaseYear:       ReleaseYear;
    releaseDate:       ReleaseDate | null;
}

export interface TitleText {
    text:       string;
    __typename: OriginalTitleTextTypename;
}

export enum OriginalTitleTextTypename {
    TitleText = "TitleText",
}

export interface PrimaryImage {
    id:         string;
    width:      number;
    height:     number;
    url:        string;
    caption:    Caption;
    __typename: string;
}

export interface Caption {
    plainText:  string;
    __typename: string;
}

export interface ReleaseDate {
    day:        null;
    month:      number | null;
    year:       number;
    __typename: string;
}

export interface ReleaseYear {
    year:       number;
    endYear:    null;
    __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
    YearRange = "YearRange",
}

export interface TitleType {
    text:       Text;
    id:         ID;
    isSeries:   boolean;
    isEpisode:  boolean;
    __typename: TitleTypeTypename;
}

export enum TitleTypeTypename {
    TitleType = "TitleType",
}

export enum ID {
    Short = "short",
}

export enum Text {
    Short = "Short",
}