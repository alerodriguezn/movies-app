import { ScrollView, Text, TextInput, SafeAreaView } from "react-native";
import { View } from "@/components/Themed";

import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { usefilter } from "@/store/filter-store";
import { MediaList } from "@/interfaces/movie";
import { ResultList } from "@/components/resultSearch/ResultList";

export default function TabOneScreen() {
  const [titleInput, setTitleInput] = useState("");
  const [result, setResult] = useState<MediaList>();

  const searchTitles = usefilter((state) => state.fetchSearchbyTitles);

  useEffect(() => {
    if (titleInput === "") {
      setResult(undefined);
      return;
    }
    searchTitles(titleInput).then((data) => {
      setResult(data as MediaList);
    });
  }, [titleInput]);

  return (
    <View className="flex-1 bg-[#030418] ">
      <SafeAreaView className="mt-4">
        <TextInput
          className="w-full p-2 bg-white rounded-lg placeholder-slate-900"
          placeholder="Buscar por titulo"
          onChangeText={(text) => setTitleInput(text)}
          value={titleInput}
        />
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className=""
      >
        {result ? (
          <ResultList data={result} title="Resultados de Busqueda" />
        ) : (
          <Text className="text-center mt-20 text-white font-semibold">No hay resultados</Text>
        )}
      </ScrollView>
    </View>
  );
}
