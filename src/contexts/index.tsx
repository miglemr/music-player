import { type ReactNode, useState } from 'react';
import { PlayStatusContext } from './PlayStatusContext';

export function PlayStatusProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleIsPlaying() {
    setIsPlaying(prev => !prev);
  }

  return (
    <PlayStatusContext.Provider value={{ isPlaying, toggleIsPlaying }}>
      {children}
    </PlayStatusContext.Provider>
  );
}
