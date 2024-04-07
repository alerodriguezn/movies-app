import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MediaList, Title } from "@/interfaces/movie";
import axiosClient from "@/config/axiosClient";
import { ActorsList,Actor } from "@/interfaces/actor";
import { ExtendedCast } from "@/interfaces/cast";

interface State {
  mediaList: MediaList;
  topBoxOffice: MediaList;
  actors: Actor[];
  status: "idle" | "loading" | "success" | "error";
  fetchTitles: () => void;
  fetchTopBoxOffice: () => void;
  getTitleInformation: (id: string) => Title | undefined;
  getExtendedCast: (id: string) => Promise<ExtendedCast>;
}

export const useMovieStore = create<State>()((set, get) => ({
  mediaList: {} as MediaList,
  topBoxOffice: {} as MediaList,
  actors: [] as Actor[],
  status: "idle",
  fetchTitles: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("/titles/random", {
      params: {
        list: "top_rated_series_250",
        info: "base_info"
      },
    });
    set({ mediaList: data });
    set({ status: "success" });
  },
  fetchTopBoxOffice: async () => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>("/titles/random", {
      params: {
        list: "top_boxoffice_last_weekend_10",
        info: "base_info"
      },
    });
    set({ topBoxOffice: data });
    set({ status: "success" });
  },
  getTitleInformation: (id: string) => {
    const movies = get().mediaList.results;
    const movie = movies.find((m) => m.id === id);
    return movie;
  },

  getExtendedCast: async (id: string) => {

    const { data } = await axiosClient.get<ExtendedCast>(`/titles/${id}`, {
      params: {
        info: "extendedCast"
      },
    });
    return data;
    
  },


  fetchActor: async() => {

    set({ status: "loading" });
    const { data } = await axiosClient.get<ActorsList>("/actors/random");
    set({ actors: data.results });
    set({ status: "success" });
    
  }
}));
