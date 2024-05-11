import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

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
  currentTrackId: number;
};

type Actions = {
  setCurrentTrackId: (id: number) => void;
  toggleFavorite: (id: number) => void;
};

type Store = State & Actions;

export const useStore = create<Store>()(
  immer(
    devtools(set => ({
      tracks: [],
      currentTrackId: 1,
      setCurrentTrackId: (id: number) => set({ currentTrackId: id }),
      toggleFavorite: (id: number) =>
        set(state => {
          const track = state.tracks.find(track => track.id === id) as Track;

          track.favorite = !track.favorite;
        }),
    }))
  )
);
