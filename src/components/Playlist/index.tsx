import { useStore } from '@/store';

import Track from './Track';
import useCurrentTrack from '@/hooks/useCurrentTrack';

function PlayList() {
  const tracks = useStore(state => state.tracks);

  const currentTrack = useCurrentTrack();

  if (!currentTrack) return;

  return (
    <>
      {tracks.map(track => {
        const isCurrent = track.id === currentTrack.id;

        return <Track key={track.id} track={track} isCurrent={isCurrent} />;
      })}
    </>
  );
}
export default PlayList;
