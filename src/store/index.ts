import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

import { createHowl } from '@/lib/utils'

export type Track = {
  id: number
  artist: string
  title: string
  cover: string
  audioFilePath: string
  duration: number
  favorite: boolean
}

export type State = {
  tracks: Track[]
  currentTrackIndex: number
  audio: Howl | null
}

type Actions = {
  setTracks: (tracks: Track[]) => void
  setCurrentTrackIndex: (id: number) => void
  setAudio: (audio: Howl) => void
  setNextTrack: () => void
  toggleFavorite: (id: number) => void
}

type Store = State & Actions

export const useStore = create<Store>()(
  immer(
    devtools(set => ({
      tracks: [],
      currentTrackIndex: 0,
      audio: null,
      setTracks: tracks => set({ tracks }),
      setCurrentTrackIndex: (id: number) =>
        set(state => {
          state.currentTrackIndex = state.tracks.findIndex(track => track.id === id)
        }),
      setAudio: (audio: Howl) => set({ audio }),
      setNextTrack: () =>
        set(state => {
          const nextTrack = state.tracks[state.currentTrackIndex + 1]

          const howl = createHowl(nextTrack.audioFilePath, true, state.setNextTrack)

          state.currentTrackIndex = nextTrack.id
          state.audio = howl
        }),
      toggleFavorite: (id: number) =>
        set(state => {
          const track = state.tracks.find(track => track.id === id)

          if (!track) return

          track.favorite = !track.favorite
        }),
    })),
  ),
)
