import { useMovieStore } from "@/store/movies-store";
import { useLocalSearchParams } from "expo-router";
import { Text, Image, Dimensions, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ExtendedCast } from "@/interfaces/cast";

let { width, height } = Dimensions.get("window");

export default function Page() {
  const { id } = useLocalSearchParams();
  const [extendedCast, setExtendedCast] = useState<ExtendedCast>();

  useEffect(() => {
    console.log("Movie Page Mounted");
  },[])

  useEffect(() => {
    if (id) {
      useMovieStore
        .getState()
        .getExtendedCast(id as string)
        .then((data) => {
          setExtendedCast(data);
        });
    }
  }, [id]);

  const title = useMovieStore((state) =>
    state.getTitleInformation(id as string)
  );

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
 
      <View className="flex flex-row flex-wrap gap-2 mt-1 pl-4">
        {title?.genres.genres.map((genre) => (
          <View key={genre.id} className="border-2 rounded-md p-[2px]  border-amber-500 ">
            <Text className="text-white font-bold px-1 text-xs">
              {genre.text}
            </Text>
          </View>
        ))}
      </View>

     <Text className="text-center text-white font-bold mt-4"> {title?.releaseDate.year} • {title?.titleType.text}  </Text>

      <Text className="text-white font-semibold text-sm mt-4 px-4">
        {title?.plot.plotText.plainText}
      </Text>

      <View className="flex flex-row items-center mt-4">
        <Text className="text-white pl-4 pr-1 font-bold text-xl">
          Rating : {title?.ratingsSummary.aggregateRating}
        </Text>
        <AntDesign name="star" size={18} color="yellow" />
      </View>

      <View className="border-y-2 border-slate-800 mt-4 ">
        <Text className=" text-2xl pl-4 mt-4 font-bold text-center text-amber-500  ">Movie Cast</Text>
        {extendedCast?.results.cast.edges.map((cast, index) => (
          <View key={index} className="flex flex-row items-center justify-start gap-8 p-4 border-b-2 border-slate-900">
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
