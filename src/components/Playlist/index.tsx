import { useStore } from '@/store';

import Track from './Track';

function PlayList() {
  const tracks = useStore(state => state.tracks);
  const currentTrack = useStore(state => state.currentTrack);

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
