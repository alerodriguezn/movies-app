import React from "react";
import { View, Text } from "../Themed";
import { Pressable } from "react-native";
import { router } from "expo-router";



interface TitleListProps {
  data: string[];
  genre: string;
  
}

export const GerneList= ({ data, genre }: TitleListProps) => {
  return (
    <View className="mb-8 flex  bg-transparent">
      <Text className="text-white text-xl mx-4 mb-5 mt-3 font-bold text-left">{ genre }</Text>
      <View className="flex-1 bg-[#030418] ">
          {data?.map((item, index) => (
            <View key={index} style={{ borderBottomWidth: 2, borderBottomColor: '#2D3748' , backgroundColor: 'transparent'}}>

            <GenreCard item={item} />
          </View>
          ))}
        </View>
    </View>
  );
};

interface GenreCardProps {
  item: string;
}


const GenreCard = ({ item }: GenreCardProps) => {

  
  const handlePress = () => {
    
    router.push(`/search/${item}`);
    
  }

    return (
    <Pressable onPress={handlePress}>

        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginTop: 4, marginBottom: 4 }}>
            {item}
        </Text>
     
    </Pressable>
  );
};