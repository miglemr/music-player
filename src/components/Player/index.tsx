import { useEffect } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

import { useStore } from '@/store';
import { usePlayStatus } from '@/hooks/usePlayStatus';

import Controls from './Controls';
import Progress from './Progress';

function Player() {
  const { isPlaying, toggleIsPlaying } = usePlayStatus();

  const currentTrack = useStore(state => state.currentTrack);
  const sound = useStore(state => state.sound);
  const setSound = useStore(state => state.setSound);

  useEffect(() => {
    if (currentTrack) {
      setSound(currentTrack.audioFilePath);
    }
  }, [currentTrack, setSound]);

  const toggleFavorite = useStore(state => state.toggleFavorite);

  function handlePlayToggle() {
    if (isPlaying) sound.pause();
    else sound.play();
    toggleIsPlaying();
  }

  if (!currentTrack) return;

  return (
    <div>
      <div className="flex justify-center items-center h-80">
        <img
          src={currentTrack.cover}
          alt="cover"
          className="size-40 sm:size-60"
        />
      </div>
      <div className="flex justify-end">
        <button onClick={() => toggleFavorite(currentTrack.id)}>
          {currentTrack.favorite ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <FavoriteBorderIcon fontSize="large" />
          )}
        </button>
      </div>
      <div className="flex items-center mb-4">
        <button onClick={handlePlayToggle}>
          {isPlaying ? (
            <PauseCircleIcon sx={{ fontSize: 100 }} />
          ) : (
            <PlayCircleIcon sx={{ fontSize: 100 }} />
          )}
        </button>
        <p className="text-2xl ml-2 font-medium">
          {currentTrack.title} by {currentTrack.artist}
        </p>
      </div>
      <Progress />
      <Controls />
    </div>
  );
}

export default Player;
