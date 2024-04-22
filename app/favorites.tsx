import { TitleCard } from "@/components/favorites/TitleCard";
import { useMovieStore } from "@/store/movies-store";
import { View, Text, ScrollView } from "react-native";

export default function FavTab() {
  const favorites = useMovieStore((state) => state.favoritesMovies);

  return (
    <View className="w-full h-screen bg-[#030418]">
      <Text className="text-2xl text-amber-600 font-bold text-center mt-2">
        Watch List
      </Text>
      <Text className="text-white">
        <ScrollView>
          {favorites.map((movie) => (
            <TitleCard key={movie} id={movie} />
          ))}
        </ScrollView>
      </Text>
    </View>
  );
}
