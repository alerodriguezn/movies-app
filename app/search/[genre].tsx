import { usefilter } from "@/store/filter-store";
import { useLocalSearchParams } from "expo-router";
import { Dimensions, View, ScrollView } from "react-native";

import { useEffect, useState } from "react";
import { ResultList } from "../../components/resultSearch/ResultList";
import { MediaList } from "@/interfaces/movie";


export default function Page() {
  const getTitlesbyGenre = usefilter((state) => state.fetchSearchbyGenre);

  const { genre } = useLocalSearchParams();
  const [TitlesbyGenre, setTitlesbyGenre] = useState<MediaList>();

  useEffect(() => {
    getTitlesbyGenre(genre as string).then((data) => {
      setTitlesbyGenre(data);
    });
  }, [genre]);

  return (
    <View className="flex-1 bg-[#030418] ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className=""
      >
        <ResultList data={TitlesbyGenre} title="Resultados de Busqueda" />
      </ScrollView>
    </View>
  );
}
