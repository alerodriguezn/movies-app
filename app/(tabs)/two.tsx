import EditScreenInfo from '@/components/EditScreenInfo';
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
import { useActorStore } from "@/store/actors-store";
import { StatusBar } from "expo-status-bar";
import useAuthStore from "@/store/user-store";
import { ActorList } from '../../components/actors/ActorsList';
import { getAuth } from "firebase/auth";
import { router } from "expo-router";



export default function TabTwoScreen() {

  const fetchActors = useActorStore((state) => state.fetchActors);
  const actorList = useActorStore((state) => state.actorList);
  

  const status = useActorStore((state) => state.status);

  useEffect(() => {
    fetchActors();
    
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
          <ActorList data={actorList} actor="Actors" />
          
          



        </ScrollView>
      )}
    </View>
  );
}

