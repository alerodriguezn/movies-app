import React from "react";
import { View, Text } from "../Themed";
// import Carousel from 'react-native-snap-carousel';
import Carousel from "react-native-reanimated-carousel";
import { Image, TouchableWithoutFeedback, Dimensions, Pressable } from "react-native";
import { MediaList, Title } from "@/interfaces/movie";
import { router } from "expo-router";

let { width, height } = Dimensions.get("window");

interface TitleListProps {
  data: MediaList;
  title : string;
}

export const TitleList = ({ data, title }: TitleListProps) => {
  return (
    <View className="mb-8 flex  bg-transparent">
      <Text className="text-white text-xl mx-4 mb-5 mt-3 font-bold text-left">{ title }</Text>
      <Carousel
        data={data.results}
        renderItem={({ item }) => <MovieCard item={item} />}
        width={width * 0.62}
        height={height * 0.38}

        vertical={false}
        loop={true}
        mode="parallax"
        style={{   width: width , display: "flex", justifyContent: "center", alignItems: "center",}}
        
      />
    </View>
  );
};

interface MovieCardProps {
  item: Title;
}


const MovieCard = ({ item }: MovieCardProps) => {

  
  const handlePress = () => {
    const url = item.titleType.isSeries ? 'serie' : 'title';
    router.push(`/${url}/${item.id}`);
    
  }

  return (
    <Pressable onPress={handlePress}>
      {
        item.primaryImage?.url ? (
          <Image
            source={{ uri: item.primaryImage?.url }}
            style={{
              width: width * 0.6,
              height: height * 0.4,
              borderRadius: 20,
            }}
            alt="Hello"
          />
        ) : (
          <View
            style={{
              width: width * 0.6,
              height: height * 0.4,
              borderRadius: 20,
              backgroundColor: "gray",
            }}
          />

        )
      }

    </Pressable>
  );
};
