import React from "react";
import { View, Text } from "../Themed";
import { useMovieStore } from "@/store/movies-store";
// import Carousel from 'react-native-snap-carousel';
import Carousel from "react-native-reanimated-carousel";

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';


import { Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import { ActorsList, Actor } from "@/interfaces/actor";
import { router } from "expo-router";
import { ScrollView } from 'react-native';

let { width, height } = Dimensions.get("window");

interface ActorsListProps {
    data: ActorsList;
    actor : string;
}


export const ActorList = ({ data, actor }: ActorsListProps) => {
    return (
    //   <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.scrollViewContent} >
    //     <Text style={styles.title}> actor</Text>
    //     {data.results.map(item => (
          
    //       <View key={item.nconst}  >
    //         <ActorCard item={item} />
            
    //       </View>
    //     ))}
    //   </ScrollView>
    // </View>
      






    <View className="mb-8 flex  bg-transparent">
    <Text className="text-white text-xl mx-4 mb-5 mt-3 font-bold text-left">{ actor }</Text>
    <Carousel
      data={data.results}
      renderItem={({ item }) => <ActorCard item={item} />}
      width={width * 0.62}
      height={height * 0.38}

      vertical={true}
      loop={true}
      mode="parallax"
      style={{   width: width , display: "flex", justifyContent: "center", alignItems: "center",}}
      
    />
  </View>



        
      
    );
  };

  interface ActorCardProps {
    item: Actor;
    
  }
  
  
  const ActorCard = ({ item }: ActorCardProps) => {
  
    const handlePress = () => {
      router.push(`/actor/${item.nconst}`);
    }
  
    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <Text className="text-white font-semibold text-xl">
          {item.primaryName}
        </Text>
      </TouchableWithoutFeedback>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1, // Esto asegura que el contenedor ocupe toda la pantalla
      backgroundColor: '#030418',
    },
    scrollViewContent: {
      flexGrow: 1, // Esto permite que el ScrollView ocupe todo el espacio disponible
      alignItems: 'center', // Esto centrará el contenido verticalmente en el ScrollView
      paddingVertical: 20, // Espacio vertical adicional dentro del ScrollView
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
  });

  
  