export interface MediaList {
    page:    number;
    next:    string;
    entries: number;
    results: Title[];
}

export interface Title {
    _id:               string;
    id:                string;
    ratingsSummary:    ResultRatingsSummary;
    episodes:          ResultEpisodes;
    primaryImage:      PrimaryImage;
    titleType:         TitleType;
    genres:            Genres;
    titleText:         TitleText;
    originalTitleText: TitleText;
    releaseYear:       ReleaseYear;
    releaseDate:       ReleaseDate;
    runtime:           Runtime;
    series:            null;
    meterRanking:      MeterRanking | null;
    plot:              Plot;
    position:          number;
}

export interface ResultEpisodes {
    episodes:      TotalEpisodesClass;
    seasons:       Season[];
    years:         Year[];
    totalEpisodes: TotalEpisodesClass;
    topRated:      TopRated;
    __typename:    PurpleTypename;
}

export enum PurpleTypename {
    Episodes = "Episodes",
}

export interface TotalEpisodesClass {
    total:      number;
    __typename: TotalEpisodesTypename;
}

export enum TotalEpisodesTypename {
    EpisodeConnection = "EpisodeConnection",
}

export interface Season {
    number:     number;
    __typename: SeasonTypename;
}

export enum SeasonTypename {
    EpisodesSeason = "EpisodesSeason",
}

export interface TopRated {
    edges:      Edge[];
    __typename: TotalEpisodesTypename;
}

export interface Edge {
    node:       Node;
    __typename: EdgeTypename;
}

export enum EdgeTypename {
    EpisodeEdge = "EpisodeEdge",
}

export interface Node {
    ratingsSummary: NodeRatingsSummary;
    __typename:     NodeTypename;
}

export enum NodeTypename {
    Title = "Title",
}

export interface NodeRatingsSummary {
    aggregateRating: number;
    __typename:      RatingsSummaryTypename;
}

export enum RatingsSummaryTypename {
    RatingsSummary = "RatingsSummary",
}

export interface Year {
    year:       number;
    __typename: YearTypename;
}

export enum YearTypename {
    EpisodesYear = "EpisodesYear",
}

export interface Genres {
    genres:     Genre[];
    __typename: GenresTypename;
}

export enum GenresTypename {
    Genres = "Genres",
}

export interface Genre {
    text:       string;
    id:         string;
    __typename: GenreTypename;
}

export enum GenreTypename {
    Genre = "Genre",
}

export interface MeterRanking {
    currentRank: number;
    rankChange:  RankChange;
    __typename:  string;
}

export interface RankChange {
    changeDirection: string;
    difference:      number;
    __typename:      string;
}

export interface TitleText {
    text:       string;
    __typename: OriginalTitleTextTypename;
}

export enum OriginalTitleTextTypename {
    TitleText = "TitleText",
}

export interface Plot {
    plotText:   PlotText;
    language:   Language;
    __typename: PlotTypename;
}

export enum PlotTypename {
    Plot = "Plot",
}

export interface Language {
    id:         LanguageID;
    __typename: LanguageTypename;
}

export enum LanguageTypename {
    DisplayableLanguage = "DisplayableLanguage",
}

export enum LanguageID {
    EnUS = "en-US",
}

export interface PlotText {
    plainText:  string;
    __typename: PlotTextTypename;
}

export enum PlotTextTypename {
    Markdown = "Markdown",
}

export interface PrimaryImage {
    id:         string;
    width:      number;
    height:     number;
    url:        string;
    caption:    PlotText;
    __typename: PrimaryImageTypename;
}

export enum PrimaryImageTypename {
    Image = "Image",
}

export interface ResultRatingsSummary {
    aggregateRating: number;
    voteCount:       number;
    __typename:      RatingsSummaryTypename;
}

export interface ReleaseDate {
    day:        number;
    month:      number;
    year:       number;
    __typename: ReleaseDateTypename;
}

export enum ReleaseDateTypename {
    ReleaseDate = "ReleaseDate",
}

export interface ReleaseYear {
    year:       number;
    endYear:    number | null;
    __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
    YearRange = "YearRange",
}

export interface Runtime {
    seconds:    number;
    __typename: RuntimeTypename;
}

export enum RuntimeTypename {
    Runtime = "Runtime",
}

export interface TitleType {
    text:       Text;
    id:         TitleTypeID;
    isSeries:   boolean;
    isEpisode:  boolean;
    __typename: TitleTypeTypename;
}

export enum TitleTypeTypename {
    TitleType = "TitleType",
}

export enum TitleTypeID {
    TvMiniSeries = "tvMiniSeries",
    TvSeries = "tvSeries",
}

export enum Text {
    TVMiniSeries = "TV Mini Series",
    TVSeries = "TV Series",
}