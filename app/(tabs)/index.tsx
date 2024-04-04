import { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { useMovieStore } from "@/store/movies-store";

export default function TabOneScreen() {
  const mediaList = useMovieStore((state) => state.mediaList);
  const fetchTitles = useMovieStore((state) => state.fetchTitles);
  const status = useMovieStore((state) => state.status);

  useEffect(() => {
    fetchTitles();
  }, []);

  return (
    <View style={styles.container}>
      {status === "loading" ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {mediaList?.results?.map((title) => (
            <View key={title.id} >
              <Text>{title.titleText.text}</Text>
              <Image
                style={styles.image}
                source={{ uri: title.primaryImage?.url }}
              ></Image>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },

  // grid for the view of the movies, 4 cols
  viewGrid:{

    
  
  }
  
});

