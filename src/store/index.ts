import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { fetchTracks } from '@/data/fetchTracks';

export type Track = {
  id: number;
  artist: string;
  title: string;
  cover: string;
  audioFilePath: string;
  favorite: boolean;
};

type State = {
  tracks: Track[];
};

type Actions = {
  setTracks: () => void;
};

export const useStore = create<State & Actions>()(
  immer(set => ({
    tracks: [],
    setTracks: async () => {
      try {
        const response = (await fetchTracks()) as Array<object>;

        const tracks = response.map(responseObj => {
          return {
            ...responseObj,
            favorite: false,
          };
        }) as Track[];

        set({ tracks });
      } catch (error) {
        console.error(error);
      }
    },
  }))
);
