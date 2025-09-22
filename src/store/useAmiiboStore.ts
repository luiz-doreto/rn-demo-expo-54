import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AmiiboStore } from './types';

export const useAmiiboStore = create<AmiiboStore>()(
  persist(
    set => ({
      favorites: [],
      addFavorite: item =>
        set(state => ({ favorites: [...state.favorites, item] })),
      removeFavorite: item =>
        set(state => ({ favorites: state.favorites.filter(i => i !== item) })),
      clearFavorites: () => set({ favorites: [] }),
      categories: [],
      setCategories: categories => set({ categories }),
    }),
    {
      name: 'read-list',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
