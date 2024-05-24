import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { createHowl, getNextTrack } from '@/lib/utils';

export type Track = {
  id: number;
  artist: string;
  title: string;
  cover: string;
  audioFilePath: string;
  duration: string;
  favorite: boolean;
};

type State = {
  tracks: Track[];
  currentTrack: Track;
  audio: Howl | null;
};

type Actions = {
  setCurrentTrack: (id: number) => void;
  setNextTrack: () => void;
  toggleFavorite: (id: number) => void;
};

type Store = State & Actions;

export const useStore = create<Store>()(
  immer(
    devtools(set => ({
      tracks: [],
      currentTrack: {} as Track,
      audio: null,
      setCurrentTrack: (id: number) =>
        set(state => {
          const track = state.tracks.find(track => track.id === id);

          if (!track) return;

          state.currentTrack = track;
        }),
      setNextTrack: () =>
        set(state => {
          const nextTrack = getNextTrack(state.tracks, state.currentTrack);
          const howl = createHowl(
            nextTrack.audioFilePath,
            true,
            state.setNextTrack
          );

          state.currentTrack = nextTrack;
          state.audio = howl;
        }),
      toggleFavorite: (id: number) =>
        set(state => {
          const track = state.tracks.find(track => track.id === id);

          if (!track) return;

          track.favorite = !track.favorite;

          if (id === state.currentTrack.id)
            state.currentTrack.favorite = !state.currentTrack.favorite;
        }),
    }))
  )
);
