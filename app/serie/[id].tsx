import { useMovieStore } from "@/store/movies-store";
import { useLocalSearchParams } from "expo-router";
import {
  Text,
  Image,
  Dimensions,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import { ExtendedCast } from "@/interfaces/cast";
import { Title } from "@/interfaces/movie";
import { Seasons } from "@/interfaces/serie";
import { EpisodeItem } from "@/components/series/EpisodeItem";

let { width, height } = Dimensions.get("window");

export default function Page() {
  const { id } = useLocalSearchParams();

  const getExtendedCast = useMovieStore((state) => state.getExtendedCast);
  const getTitleInfo = useMovieStore((state) => state.getTitleInfo);
  const getSeasonsInfo = useMovieStore((state) => state.getSeasonsInfo);
  const favoriteMovies = useMovieStore((state) => state.favoritesMovies);
  const addFavorite = useMovieStore((state) => state.addFavorite);
  const deleteFavorite = useMovieStore((state) => state.removeFavorite);

  const [extendedCast, setExtendedCast] = useState<ExtendedCast>();
  const [title, setTitle] = useState<Title>();
  const [seasons, setSeasons] = useState<Seasons>();

  useEffect(() => {
    getExtendedCast(id as string).then((data) => {
      setExtendedCast(data);
    });
    getTitleInfo(id as string).then((data) => {
      setTitle(data);
    });
    getSeasonsInfo(id as string).then((data) => {
      setSeasons(data);
    });
  }, [id]);

  const handleOnAddFavorite = () => {
    addFavorite(id as string);
    console.log("Added to favorites", id);
  }

  const handleOnRemoveFavorite = () => {
    deleteFavorite(id as string);

  }

  return (
    <ScrollView className="flex-1 bg-[#030418]">
      <Text className="text-white text-center font-bold text-2xl my-4">
        {title?.titleText.text}
      </Text>
      <Image
        source={{ uri: title?.primaryImage?.url }}
        style={{
          width: width,
          height: height * 0.5,
          borderRadius: 20,
        }}
      />

      {
        favoriteMovies.includes(title?.id!) ? (
          <Pressable 
            className="bg-red-600 p-3 rounded-md w-full mt-2 flex flex-row justify-center items-center "
            onPress={handleOnRemoveFavorite}
          >
            <Fontisto name="favorite" size={15} color="white" />
            <Text className="text-white font-semibold text-center ml-2">
              Remove from Watchlist
            </Text>
          </Pressable>
        ) : (
          <Pressable 
            className="bg-green-600 p-3 rounded-md w-full mt-2 flex flex-row justify-center items-center "
            onPress={handleOnAddFavorite}
          >
            <Fontisto name="favorite" size={15} color="white" />
            <Text className="text-white font-semibold text-center ml-2">
              Save to Watchlist
            </Text>
          </Pressable>
        ) 
        

      }


      <View className="flex flex-row flex-wrap gap-2 mt-1 pl-4">
        {title?.genres.genres.map((genre) => (
          <View
            key={genre.id}
            className="border-2 rounded-md p-[2px]  border-amber-500 "
          >
            <Text className="text-white font-bold px-1 text-xs">
              {genre.text}
            </Text>
          </View>
        ))}
      </View>

      <Text className="text-center text-white font-bold mt-4">
        {" "}
        {title?.releaseDate.year} • {title?.titleType.text}{" "}
      </Text>

      <Text className="text-white font-semibold text-sm mt-4 px-4">
        {title?.plot.plotText.plainText}
      </Text>

      <View className="flex flex-row items-center mt-4">
        <Text className="text-white pl-4 pr-1 font-bold text-xl">
          Rating : {title?.ratingsSummary.aggregateRating}
        </Text>
        <AntDesign name="star" size={18} color="yellow" />
      </View>
      <Text className="text-2xl text-white font-bold pl-4 mt-4">Seasons:</Text>
      <ScrollView
        className="w-full h-44 pl-4"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {seasons?.results.map((season, index) => (
          <View
            key={season.tconst}
            className="text-white flex flex-row justify-between items-center mr-4 p-2"
          >
            <Pressable className="bg-amber-600 p-1 rounded-md w-full ">
              <Text className="text-white font-semibold text-center">
                Season {season.seasonNumber} - Episode {season.episodeNumber}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <View className="border-y-2 border-slate-800 mt-4 ">
        <Text className=" text-2xl pl-4 mt-4 font-bold text-center text-amber-500  ">
          Movie Cast
        </Text>
        {extendedCast?.results.cast.edges.map((cast, index) => (
          <View
            key={index}
            className="flex flex-row items-center justify-start gap-8 p-4 border-b-2 border-slate-900"
          >
            <Image
              className="w-16 h-16 rounded-full"
              source={{ uri: cast?.node?.name?.primaryImage?.url }}
            />
            <Text className="text-white font-semibold text-xl">
              {cast.node.name.nameText.text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
