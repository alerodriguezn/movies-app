import { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { useMovieStore } from "@/store/movies-store";
import { StatusBar } from "expo-status-bar";
import useAuthStore from "@/store/user-store";
import { TitleList } from "../../components/titles/TitleList";
import { getAuth } from "firebase/auth";
import { router } from "expo-router";

export default function TabOneScreen() {
  const mediaList = useMovieStore((state) => state.mediaList);
  const fetchTitles = useMovieStore((state) => state.fetchTitles);
  const fetchTopBoxOffice = useMovieStore((state) => state.fetchTopBoxOffice);
  const topBoxOffice = useMovieStore((state) => state.topBoxOffice);
  const user = useAuthStore((state) => state.user);
  const status = useMovieStore((state) => state.status);

  useEffect(() => {
    fetchTitles();
    fetchTopBoxOffice();
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
          <TitleList data={topBoxOffice} title="Películas Más Taquilleras" />
        </ScrollView>
      )}
    </View>
  );
}
