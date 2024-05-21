import { useState } from 'react';

import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import CloseIcon from '@mui/icons-material/Close';

import { useStore } from '@/store';

import Playlist from '@/components/Playlist';
import FavoriteButton from '@/components/FavoriteButton';
import ProgressBar from './ProgressBar';
import PlayButton from './PlayButton';

function Player() {
  const [showPlaylist, setShowPlaylist] = useState(false);

  const currentTrack = useStore(state => state.currentTrack);

  if (showPlaylist)
    return (
      <div className="lg:hidden">
        <button onClick={() => setShowPlaylist(prev => !prev)}>
          <CloseIcon />
        </button>
        <Playlist />
      </div>
    );

  return (
    <>
      <div>
        <div className="flex justify-center py-4 items-center">
          <img
            src={currentTrack.cover}
            alt="cover"
            className="size-40 sm:size-60"
          />
        </div>
        <div className="flex justify-end my-4">
          <FavoriteButton track={currentTrack} size="large" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center my-4">
          <PlayButton />
          <p className="md:text-2xl ml-2 font-medium">
            {currentTrack.title} by {currentTrack.artist}
          </p>
        </div>
        <ProgressBar />
        <div className="flex justify-end mt-6 lg:hidden">
          <button onClick={() => setShowPlaylist(prev => !prev)}>
            <QueueMusicIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Player;
