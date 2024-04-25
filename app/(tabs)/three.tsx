import { useEffect } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { useMovieStore } from "@/store/movies-store";
import { GerneList } from "../../components/categories/genreList";
import { TextInput, Button } from 'react-native';
import { Pressable, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import  { useState } from 'react';
import { usefilter } from "@/store/filter-store";

export default function TabOneScreen() {
  const Genres= ["Action", "Drama", "Horror", "Comedy", "Crime", "Adventure", "Fantasy", "Thriller", "Animation", "Sci-Fi", "Sport"];

  const status = usefilter((state) => state.status);



  // const getTitlesbytitle= usefilter((state) => state.fetchSearchbyTitles);
  //   const [Titles, setTitles] = useState<MediaList>();

  //   useEffect(() => {
  //     getTitlesbytitle(searchTextTitle as string).then((data) => {
  //       setTitles(data);
  //   });
    
  // }, [searchTextTitle]);
  // Función para manejar el cambio de texto en el input de búsqueda por título
 
    // const Result = usefilter((state) =>
    //   state.fetchSearchbyTitles(searchTextTitle as string)
    // );

    
    // Aquí puedes realizar cualquier otra acción relacionada con el cambio de texto de búsqueda por título
  


 
  
  



  useEffect(() => {
    
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
          

          

          {/* Componente para mostrar la lista de géneros */}
          <GerneList data={Genres} genre="Search by Genres"/>

          
        </ScrollView>
      )}
    </View>
  );
}