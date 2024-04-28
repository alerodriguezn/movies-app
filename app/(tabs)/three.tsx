import { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { GerneList } from "@/components/categories/genreList";
import { usefilter } from "@/store/filter-store";

export default function TabOneScreen() {
  const Genres = [
    "Action",
    "Drama",
    "Horror",
    "Comedy",
    "Crime",
    "Adventure",
    "Fantasy",
    "Thriller",
    "Animation",
    "Sci-Fi",
    "Sport",
  ];

  const status = usefilter((state) => state.status);

  return (
    <View className="flex-1 bg-[#030418] ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className=""
      >
        {/* Componente para mostrar la lista de géneros */}
        <GerneList data={Genres} genre="Search by Genres" />
      </ScrollView>
    </View>
  );
}
