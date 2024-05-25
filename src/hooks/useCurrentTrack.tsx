import { useEffect, useState } from 'react';

import { useStore, type Track } from '@/store';

function useCurrentTrack() {
  const [currentTrack, setCurrentTrack] = useState<Track>();

  const { tracks, currentTrackIndex } = useStore();

  useEffect(() => {
    const currentTrack = tracks[currentTrackIndex];

    setCurrentTrack(currentTrack);
  }, [tracks, currentTrackIndex]);

  return currentTrack;
}
export default useCurrentTrack;
