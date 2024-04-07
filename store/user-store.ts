import { create,  } from "zustand";
import { persist,createJSONStorage  } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom types for theme
import { User } from "@firebase/auth"

interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  setSession: (user: User) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      setSession: (user: User) => set((state) => ({ ...state, isAuthenticated: true, user })),
      
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => AsyncStorage),
    
    }
  )
);

export default useAuthStore;