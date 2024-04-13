import { create } from "zustand";
import { persist } from "zustand/middleware";
import axiosClient from "@/config/axiosClient";
import { ActorsList,Actor } from "@/interfaces/actor";
import { Title } from "@/interfaces/movie";
import { useMovieStore } from "@/store/movies-store";
import React, { useState, useEffect } from 'react';

interface State {
    actorList: ActorsList;
    status: "idle" | "loading" | "success" | "error";
    fetchActors: () => void;
    getActorInformation: (id: string) => Actor | undefined;
    getMovies: (id: string) => string []  ;
    
}

export const useActorStore = create<State>()((set, get) => ({
    
    actorList: {} as ActorsList, 
    status: "idle",
    fetchActors: async () => {
        set({ status: "loading" });
        const { data } = await axiosClient.get<ActorsList>("/actors/random"
        );
        set({ actorList: data });
        set({ status: "success" });
    },

    getActorInformation: (id: string) => {
        const actors = get().actorList.results;
        const actor = actors.find((a) => a.nconst === id);
        return actor;
    }, 

    getMovies:(id:string) => {
        
        const actors = get().actorList.results;
        const actor = actors.find((a) => a.nconst === id);
        const movies: string[] = actor?.knownForTitles.split(",") || [];

        
          return movies;
    },

    

    

    

}));