import { useActorStore } from "@/store/actors-store";
//import { useMovieStore } from "@/store/movies-store";
import { useLocalSearchParams } from "expo-router";
import { Text, Image, Dimensions, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Actor } from "@/interfaces/actor";
//import { ExtendedCast } from "@/interfaces/cast";
import { Title } from "@/interfaces/movie";
import { useMovieStore } from "@/store/movies-store";
import { ActorMoviesList} from '../../components/actors/moviesActors';





let { width, height } = Dimensions.get("window");

export default function Page() {
  const { id } = useLocalSearchParams();
 
  
 

  useEffect(() => {
    if (id) {
      useActorStore
        .getState();
    }
  }, [id]);

  const actor = useActorStore((state) =>
    state.getActorInformation(id as string)
  );

  const getMovies = useActorStore((state) =>
    state.getMovies(id as string)
  );

  const getTitleInfo = useMovieStore((state) => state.getTitleInfo)
        const [titles, setTitles] = useState<Title[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      
        const titlesData = await Promise.all(getMovies.map(id => getTitleInfo(id)));
        setTitles(titlesData);
      
    };

    fetchData();
  }, [getMovies, getTitleInfo]);

  




  
  return (
    <ScrollView className="flex-1 bg-[#030418]">
      <Text className="text-white text-center font-bold text-2xl my-4">
        {actor?.primaryName}
      </Text>
      
      <Text className=" text-2xl pl-4 mt-4 font-bold text-center text-amber-500  ">BirthYear:</Text>
      <Text className="text-white font-semibold text-sm mt-4 px-4">
      {(actor?.birthYear === "\N") ? actor?.birthYear : "No info" }
      </Text>

      <Text className=" text-2xl pl-4 mt-4 font-bold text-center text-amber-500  ">DeathYear:</Text>
      <Text className="text-white font-semibold text-sm mt-4 px-4">
      {(actor?.deathYear === "\N") ? actor?.deathYear : "No info" }
      </Text>

      <Text className=" text-2xl pl-4 mt-4 font-bold text-center text-amber-500  ">Primary Profession:</Text>
      <Text className="text-white font-semibold text-sm mt-4 px-4 capitalize">
      {(actor?.primaryProfession !== "\N") ? actor?.primaryProfession : "No info" } 
      </Text>

      <ActorMoviesList data={titles}></ActorMoviesList>

      
      



    </ScrollView>
  );
}
