import { createContext } from 'react';

export const PlayStatusContext = createContext({
  isPlaying: false,
  toggleIsPlaying: {} as () => void,
});
