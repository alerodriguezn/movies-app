import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MediaList, Title } from "@/interfaces/movie";
import axiosClient from "@/config/axiosClient";

interface State {
  mediaList: MediaList;
  //actors: Actor[];
  status: "idle" | "loading" | "success" | "error";
  fetchTitles: () => void;
}

export const useMovieStore = create<State>()((set, get) => ({
  mediaList: {} as MediaList,
  //actors: [] as Actor[],
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
  fetchRatingByMovieId: async() => {
    //HACE EL FETCH ACA
  },
  fetchActor: async() => {
    //HACE EL FETCH ACA
  }
}));
