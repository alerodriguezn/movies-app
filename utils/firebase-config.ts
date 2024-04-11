import { initializeApp } from 'firebase/app';
// authentication
import { initializeAuth } from 'firebase/auth';
// @ts-expect-error Some error with types in this import because of the versions
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxpdW_ca3AHcwgGVBpRYqhgnnUukWZVKk",
  authDomain: "movies-app-249d9.firebaseapp.com",
  projectId: "movies-app-249d9",
  storageBucket: "movies-app-249d9.appspot.com",
  messagingSenderId: "547141419252",
  appId: "1:547141419252:web:57f4b3e7b33ccc40091ea1"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});


export { auth};