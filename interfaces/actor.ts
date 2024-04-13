export interface ActorsList {
    page:    number;
    next:    string;
    entries: number;
    results: Actor[];
}

export interface Actor {
    _id:               string;
    nconst:            string;
    primaryName:       string;
    birthYear:         number | string;
    deathYear:         number | string;
    primaryProfession: string;
    knownForTitles:    string;
}