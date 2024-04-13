import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MediaList, Title, TitleResult } from "@/interfaces/movie";
import axiosClient from "@/config/axiosClient";
import { ActorsList, Actor } from "@/interfaces/actor";
import { ExtendedCast } from "@/interfaces/cast";
import { Seasons } from "@/interfaces/serie";

export interface TrailerResponse {
  results: Trailer;
}

export interface Trailer {
  _id:     string;
  id:      string;
  trailer: string;
}


interface State {
  mediaList: MediaList;
  topBoxOffice: MediaList;
  topRatedEnglish: MediaList;
  upcoming: MediaList;
  mostPopSeries: MediaList;

  
  status: "idle" | "loading" | "success" | "error";
  fetchTitles: () => void;
  fetchTopBoxOffice: () => void;
  fetchTopRatedEnglish: () => void;
  fetchUpcoming: () => void;
  fetchmostPopSeries:() => void;
  getTitleInformation: (id: string) => Title | undefined;
  getExtendedCast: (id: string) => Promise<ExtendedCast>;
  getTitleInfo: (id: string) => Promise<Title>;
  getSeasonsInfo: (id: string) => Promise<Seasons>;
  getEpisodeInfo: (id: string) => Promise<Title>;
  getTrailerById: (id: string) => Promise<string>;
}

export const useMovieStore = create<State>()((set, get) => ({
  mediaList: {} as MediaList,
  topBoxOffice: {} as MediaList,
  topRatedEnglish: {} as MediaList,
  mostPopSeries: {} as MediaList,
  upcoming: {} as MediaList,

  
  status: "idle",
  fetchTitles: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("/titles/random", {
      params: {
        list: "top_rated_series_250",
      },
    });
    set({ mediaList: data });
    set({ status: "success" });
  },
  fetchTopBoxOffice: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("/titles/random", {
      params: {
        list: "top_boxoffice_200",
      },
    });
    set({ topBoxOffice: data });
    set({ status: "success" });
  },
  fetchTopRatedEnglish: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("/titles/random", {
      params: {
        list: "top_rated_english_250",
      },
    });
    set({ topRatedEnglish: data });
    set({ status: "success" });
  },
  fetchmostPopSeries: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("/titles/random", {
      params: {
        list: "most_pop_series",
      },
    });
    set({ mostPopSeries: data });
    set({ status: "success" });
  },

  fetchUpcoming: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("titles/x/upcoming", {
      params: {
        info: "base_info",
      },
    });
    set({ upcoming: data });
    set({ status: "success" });
  },

  getTitleInformation: (id: string) => {
    const title = get().mediaList.results.find((title) => title.id === id);
    return title;
  },

  getExtendedCast: async (id: string) => {
    const { data } = await axiosClient.get<ExtendedCast>(`/titles/${id}`, {
      params: {
        info: "extendedCast",
      },
    });
    return data;
  },

  getTitleInfo: async (id: string) => {
    const { data } = await axiosClient.get<TitleResult>(`/titles/${id}`, {
      params: {
        info: "base_info",
      },
    });
    return data.results;
  },

  getSeasonsInfo: async (id: string) => {
      const { data } = await axiosClient.get<Seasons>(`/titles/series/${id}`, {
        params: {
          info: "base_info",
        },
      })
      return data;
  },
  getEpisodeInfo: async (id: string) => {
    const { data } = await axiosClient.get<TitleResult>(`/titles/episode/${id}`, {
      params: {
        info: "base_info",
      },
    });
    const episode = data.results;
    return episode;
  },
  
  getTrailerById: async (id: string) => {
    const { data } = await axiosClient.get<TrailerResponse>(`/titles/${id}`, {
      params: {
        info: "trailer",
      },
    });
    return data.results.trailer;
  }
}));


