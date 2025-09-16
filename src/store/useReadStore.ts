import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ReadStore {
  readList: string[];
  addReadItem: (item: string) => void;
  removeReadItem: (item: string) => void;
  clearReadList: () => void;
}

export const useReadStore = create<ReadStore>()(
  persist(
    set => ({
      readList: [],
      addReadItem: item =>
        set(state => ({ readList: [...state.readList, item] })),
      removeReadItem: item =>
        set(state => ({ readList: state.readList.filter(i => i !== item) })),
      clearReadList: () => set({ readList: [] }),
    }),
    {
      name: 'read-list',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
