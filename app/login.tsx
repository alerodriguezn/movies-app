import { useState } from "react";
// @ts-ignore
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

import { Alert, Pressable, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import useAuthStore from "@/store/user-store";
import { Redirect, router } from "expo-router";
import { auth } from "@/utils/firebase-config";



export default function ModalScreen() {
  const setSession = useAuthStore((state) => state.setSession);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleCreateAccount = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSession(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setSession(user);
        router.push("/(tabs)");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  const handleSingOut = () => {
    
  }

  //If user is logged in, redirect to home
  if( auth.currentUser ) {
    console.log(auth.currentUser);
    return <Redirect href={"/(tabs)"}/>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        className="text-black"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Ingresa tu email"
      />
      <TextInput
        className="text-black"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.textButton}>Crear Cuenta</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.textButton}>Iniciar Sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 4,
    borderRadius: 6,
    borderColor: "gray",
    textAlign: "left",
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  button: {
    alignItems: "center",
    width: 200,
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: "#2563eb",
    padding: 10,
    fontWeight: "bold",
    //Text Button
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
});
