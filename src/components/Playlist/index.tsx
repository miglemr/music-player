import { useStore } from '@/store';
import Track from './Track';

function PlayList() {
  const tracks = useStore(state => state.tracks);

  return (
    <>
      {tracks.map(track => (
        <Track track={track} />
      ))}
    </>
  );
}
export default PlayList;
