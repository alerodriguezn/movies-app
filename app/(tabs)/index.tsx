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
  const fetchMostPopSeries= useMovieStore((state) => state.fetchmostPopSeries);
  const mostPopSeries = useMovieStore((state) => state.mostPopSeries);
  const fetchRatedEnglish= useMovieStore((state) => state.fetchTopRatedEnglish);
  const topRatedEnglish = useMovieStore((state) => state.topRatedEnglish);
  const fetchUpComing= useMovieStore((state) => state.fetchUpcoming);
  const UpComing = useMovieStore((state) => state.upcoming);

  const status = useMovieStore((state) => state.status);

  useEffect(() => {
    fetchTitles();
    fetchTopBoxOffice();
    fetchMostPopSeries();
    fetchRatedEnglish();
    fetchUpComing();
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
          <TitleList data={mostPopSeries} title="Most Pop Series" />
          <TitleList data={topBoxOffice} title="Top Box Office" />
          <TitleList data={topRatedEnglish} title="Top Rated English" />
          <TitleList data={UpComing} title="UpComing" />
          



        </ScrollView>
      )}
    </View>
  );
}
