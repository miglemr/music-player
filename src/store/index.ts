import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { Howl } from 'howler';

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
  currentTrack: Track;
  sound: Howl;
};

type Actions = {
  setCurrentTrack: (id: number) => void;
  toggleFavorite: (id: number) => void;
  setSound: (src: string) => void;
};

type Store = State & Actions;

export const useStore = create<Store>()(
  immer(
    devtools(set => ({
      tracks: [],
      currentTrack: {} as Track,
      sound: {} as Howl,
      setCurrentTrack: (id: number) =>
        set(state => {
          const track = state.tracks.find(track => track.id === id) as Track;

          state.currentTrack = track;
        }),
      toggleFavorite: (id: number) =>
        set(state => {
          const track = state.tracks.find(track => track.id === id) as Track;

          track.favorite = !track.favorite;
        }),
      setSound: (src: string) =>
        set({
          sound: new Howl({
            src: [src],
          }),
        }),
    }))
  )
);
