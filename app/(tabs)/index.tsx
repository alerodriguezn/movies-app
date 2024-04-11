import { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { useMovieStore } from "@/store/movies-store";
import { TitleList } from "../../components/titles/TitleList";

export default function TabOneScreen() {

  const mediaList = useMovieStore((state) => state.mediaList);
  const fetchTitles = useMovieStore((state) => state.fetchTitles);
  const fetchTopBoxOffice = useMovieStore((state) => state.fetchTopBoxOffice);
  const topBoxOffice = useMovieStore((state) => state.topBoxOffice);

  const status = useMovieStore((state) => state.status);

  useEffect(() => {
    fetchTitles();
    fetchTopBoxOffice();
    // fetch...........
  }, []);

  return (
    <View className="flex-1 bg-[#030418] ">
      {status === "loading" ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          className=""
        >
          <TitleList data={mediaList} title="Top Series" />
          {/* TitleList data={topRated]} */}
          <TitleList data={topBoxOffice} title="Top Box Office" />
        </ScrollView>
      )}
    </View>
  );
}
