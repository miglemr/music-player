import { createContext } from 'react';

export const PlayerContext = createContext({
  isPlaying: false,
  toggleIsPlaying: {} as () => void,
});
