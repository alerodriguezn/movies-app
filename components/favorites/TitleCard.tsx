import React, { useEffect, useState } from "react";
import { useMovieStore } from "@/store/movies-store";
import { View, Image, Dimensions, Text, Pressable } from "react-native";
import { Title } from "@/interfaces/movie";
import { AntDesign } from "@expo/vector-icons";

let { width, height } = Dimensions.get("window");

interface Props {
  id: string;
}

export const TitleCard = ({ id }: Props) => {
  const getTitleInfo = useMovieStore((state) => state.getTitleInfo);
  const deleteFavorite = useMovieStore((state) => state.removeFavorite);
  const [title, setTitle] = useState<Title>();

  useEffect(() => {
    getTitleInfo(id).then((data) => {
      setTitle(data);
    });
  }, [id]);

  const handleDelete = () => {
    deleteFavorite(id);
  };

  return (
    <View className="w-full flex flex-row gap-4 items-center justify-between mt-2">
      <View className="flex flex-row items-center gap-2">
        <Image
          source={{ uri: title?.primaryImage.url }}
          className="w-20 h-20 rounded-lg"
          alt="Image"
        />
        <Text className="text-white text-xl font-bold">
          {title?.titleText.text}
        </Text>
      </View>

      <Pressable onPress={handleDelete}>
        <AntDesign name="closesquare" size={25} color="red" />
      </Pressable>
    </View>
  );
};
