import React, { useEffect } from "react";

import { Link, Tabs, router } from "expo-router";
import { Pressable } from "react-native";

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useNavigation } from "expo-router";
import { getAuth } from "firebase/auth";
import useAuthStore from "@/store/user-store";
import { signOut } from "firebase/auth";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const changeIsAuthenticated = useAuthStore((state) => state.changeIsAuthenticated);


  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Signed out");
    });
    changeIsAuthenticated();

  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Movies",
          tabBarIcon: ({ color }) => <TabBarIcon name="film" color={color} />,
          headerRight: () => {
            if (isAuthenticated) {
              return (
                <Pressable
                  onPress={() => {
                    handleSignOut();
                  }}
                >
                  <FontAwesome
                    name="sign-out"
                    size={25}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </Pressable>
              );
            } else {
              return (
                <Pressable
                  onPress={() => {
                    router.push("/login");
                  }}
                >
                  <FontAwesome
                    name="sign-in"
                    size={25}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </Pressable>
              );
            }
          },
          headerLeft: () => (
            <Link href="/favorites" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="menufold"
                    size={25}
                    color="white"
                    style={{ marginLeft: 15 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Actors",
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
          headerRight: () => {
            if (isAuthenticated) {
              return (
                <Pressable
                  onPress={() => {
                    router.push("/login");
                  }}
                >
                  <FontAwesome
                    name="sign-out"
                    size={25}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </Pressable>
              );
            } else {
              return (
                <Pressable
                  onPress={() => {
                    router.push("/login");
                  }}
                >
                  <FontAwesome
                    name="sign-in"
                    size={25}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </Pressable>
              );
            }
          },
          headerLeft: () => (
            <Link href="/login" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="menufold"
                    size={25}
                    color="white"
                    style={{ marginLeft: 15 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => {
            if (isAuthenticated) {
              return (
                <Pressable
                  onPress={() => {
                    router.push("/login");
                  }}
                >
                  <FontAwesome
                    name="sign-out"
                    size={25}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </Pressable>
              );
            } else {
              return (
                <Pressable
                  onPress={() => {
                    router.push("/login");
                  }}
                >
                  <FontAwesome
                    name="sign-in"
                    size={25}
                    color="white"
                    style={{ marginRight: 15 }}
                  />
                </Pressable>
              );
            }
          },
          headerLeft: () => (
            <Link href="/login" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="menufold"
                    size={25}
                    color="white"
                    style={{ marginLeft: 15 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
