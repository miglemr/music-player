import { useContext } from 'react';
import { PlayStatusContext } from '@/contexts/PlayStatusContext';

export function usePlayStatus() {
  return useContext(PlayStatusContext);
}
