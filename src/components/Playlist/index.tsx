import { useStore } from '@/store';

import useCurrentTrack from '@/hooks/useCurrentTrack';

import Track from './Track';

function PlayList() {
  const { tracks } = useStore();

  const currentTrack = useCurrentTrack();

  if (tracks.length === 0) {
    return (
      <div className="flex justify-center mt-10">
        <h1>No tracks</h1>
      </div>
    );
  }

  return (
    <>
      {tracks.map(track => {
        const isCurrent = track.id === currentTrack?.id;

        return <Track key={track.id} track={track} isCurrent={isCurrent} />;
      })}
    </>
  );
}
export default PlayList;
