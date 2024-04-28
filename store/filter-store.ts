import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MediaList } from "@/interfaces/movie";
import axiosClient from "@/config/axiosClient";

interface State {
  status: "idle" | "loading" | "success" | "error";
  fetchSearchbyTitles: (Title: string) => Promise<MediaList>;
  fetchSearchbyGenre: (genre: string) => Promise<MediaList>;
}

export const usefilter = create<State>()((set, get) => ({
  status: "idle",
  fetchSearchbyTitles: async (Title: string) => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>(
      `/titles/search/title/${Title}`
    );

    return data;
  },

  fetchSearchbyGenre: async (Genre: string) => {
    set({ status: "loading" });
    const { data } = await axiosClient.get<MediaList>(`/titles`, {
      params: {
        genre: Genre,
      },
    });
    return data;
  },
}));
