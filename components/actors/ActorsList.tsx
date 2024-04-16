import React from "react";
import { View, Text } from "../Themed";



import { Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import { ActorsList, Actor } from "@/interfaces/actor";
import { router } from "expo-router";


let { width, height } = Dimensions.get("window");

interface ActorsListProps {
    data: ActorsList;
    actor : string;
}


export const ActorList = ({ data, actor }: ActorsListProps) => {
  


  return (
    <View  className="flex-1 bg-[#030418]" style={{ backgroundColor: 'transparent' }}>
     
  <Text className="text-2xl pl-4 mt-4 font-bold text-center text-amber-500">
    {actor}
  </Text>
      
        <View className="flex-1 bg-[#030418] ">
          {data?.results?.map((item, index) => (
            <View key={index} style={{ borderBottomWidth: 2, borderBottomColor: '#2D3748' , backgroundColor: 'transparent'}}>

            <ActorCard item={item} />
          </View>
          ))}
        </View>
      
    </View>
  );
}



  interface ActorCardProps {
    item: Actor;
    
  }
  
  
  const ActorCard = ({ item }: ActorCardProps) => {
  
    const handlePress = () => {
      router.push(`/actor/${item.nconst}`);
    }
  
    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        

        <Text className="text-white text-center font-bold text-2xl my-4">
          {item.primaryName}
        </Text>
      </TouchableWithoutFeedback>
    );
  };

  