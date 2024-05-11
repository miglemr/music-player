import { type Track, useStore } from '@/store';
import { useEffect, useState } from 'react';

function useCurrentTrack() {
  const [currentTrack, setCurrentTrack] = useState<Track>();

  const tracks = useStore(state => state.tracks);
  const currentTrackId = useStore(state => state.currentTrackId);

  useEffect(() => {
    const track = tracks.find(t => t.id === currentTrackId);

    setCurrentTrack(track);
  }, [tracks, currentTrackId]);

  return currentTrack;
}

export default useCurrentTrack;
