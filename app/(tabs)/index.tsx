import { useEffect } from "react";
import { StyleSheet } from "react-native";
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
        <View>
          {mediaList?.results?.map((title) => (
            <View key={title.id}>
              <Text>{title.titleText.text}</Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: title.primaryImage?.url }}
              ></Image>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    // justifyContent: 'center',
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
});
